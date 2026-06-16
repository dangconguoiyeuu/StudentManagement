package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.signer-key}")
    private String SIGNER_KEY;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        String email = request.username().trim().toLowerCase();

        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new AppException(ErrorCode.EMAIL_NOT_FOUND));

        if (!user.isActive()) {
            throw new AppException(ErrorCode.ACCOUNT_LOCKED);
        }

        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new AppException(ErrorCode.WRONG_PASSWORD);
        }

        // 🔥 FIX LỖI 1043 (ĐĂNG NHẬP 2 THIẾT BỊ):
        // Thay vì ném lỗi chặn người dùng đăng nhập, ta chỉ cần tạo Session ID mới ghi đè lên DB.
        // Hệ quả: Thiết bị mới đăng nhập bình thường. Thiết bị cũ/Tab cũ mang Token chứa Session cũ
        // sẽ tự động bị JwtAuthenticationFilter đá văng (lỗi 1042) ở lần gọi API tiếp theo.
        String newSessionId = UUID.randomUUID().toString();
        user.setSessionId(newSessionId);
        userRepository.save(user);

        String token = generateToken(user, newSessionId);

        Set<String> roles = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.toSet());

        String studentId = null;
        String teacherId = null;

        if (roles.contains("STUDENT")) {
            studentId = studentRepository.findById(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Student::getId).orElse(null);
        } else if (roles.contains("TEACHER")) {
            teacherId = teacherRepository.findById(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Teacher::getId).orElse(null);
        }

        return AuthenticationResponse.builder()
                .token(token)
                .authenticated(true)
                .userId(user.getId())
                .username(user.getEmail())
                .roles(roles)
                .isFirstLogin(user.isFirstLogin())
                .studentId(studentId)
                .teacherId(teacherId)
                .build();
    }

    private String generateToken(User user, String sessionId) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);
        String rolesScope = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.joining(" "));

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getEmail())
                .issuer("dangdepzaivaio.com")
                .issueTime(new Date())
                .expirationTime(new Date(Instant.now().plus(2, ChronoUnit.HOURS).toEpochMilli()))
                .claim("userId", user.getId())
                .claim("scope", rolesScope)
                .claim("sessionId", sessionId)
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            throw new RuntimeException("Không thể tạo token", e);
        }
    }

    public void changePasswordFirstLogin(String username, String newPassword) {
        String email = username.trim().toLowerCase();
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        if (!user.isFirstLogin()) {
            throw new AppException(ErrorCode.NOT_FIRST_LOGIN);
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setFirstLogin(false);
        userRepository.save(user);
    }

    public void logout(String email) {
        User user = userRepository.findByEmailIgnoreCase(email).orElse(null);
        if (user != null) {
            user.setSessionId(null);
            userRepository.save(user);
        }
    }
}
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

        String token = generateToken(user);
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
                .username(user.getEmail()) // Trả về email làm thông tin hiển thị sau đăng nhập
                .roles(roles)
                .isFirstLogin(user.isFirstLogin())
                .studentId(studentId)
                .teacherId(teacherId)
                .build();
    }

    private String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);
        String rolesScope = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.joining(" "));

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getEmail()) // 🔥 THAY ĐỔI: Lưu Email vào subject của JWT thay vì username
                .issuer("dangdepzaivaio.com")
                .issueTime(new Date())
                .expirationTime(new Date(Instant.now().plus(2, ChronoUnit.HOURS).toEpochMilli()))
                .claim("userId", user.getId())
                .claim("scope", rolesScope)
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

    // 🔥 SỬA CHỮA: Cập nhật dùng findByEmail để khớp với luồng giao diện React
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
}

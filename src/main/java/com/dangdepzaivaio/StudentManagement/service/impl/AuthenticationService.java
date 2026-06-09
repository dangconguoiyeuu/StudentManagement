package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository; // 🔥 Import thêm
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository; // 🔥 Import thêm
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository; // 🔥 Bổ sung để tìm ID học sinh
    private final TeacherRepository teacherRepository; // 🔥 Bổ sung để tìm ID giảng viên
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.signer-key}")
    private String SIGNER_KEY;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        User user = userRepository.findByUsername(request.username())
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        boolean authenticated = passwordEncoder.matches(request.password(), user.getPassword());

        if (!authenticated) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        String token = generateToken(user);
        Set<String> roles = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.toSet());

        // Logic xử lý trích xuất ID thực tế dựa theo vai trò nghiệp vụ đăng nhập
// Logic xử lý trích xuất ID thực tế dựa theo mối quan hệ bảng thay vì so sánh chuỗi mã số
        Long studentId = null;
        Long teacherId = null;

        if (roles.contains("STUDENT")) {
            // 🔥 SỬA: Tìm chính xác Student thông qua User ID gốc đăng nhập thành công
            studentId = studentRepository.findByUserId(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Student::getId)
                    .orElse(null);
        } else if (roles.contains("TEACHER")) {
            // 🔥 SỬA: Tìm chính xác Teacher thông qua User ID gốc đăng nhập thành công
            teacherId = teacherRepository.findByUserId(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Teacher::getId)
                    .orElse(null);
        }
        return AuthenticationResponse.builder()
                .token(token)
                .authenticated(true)
                .userId(user.getId())
                .username(user.getUsername())
                .roles(roles)
                .isFirstLogin(user.isFirstLogin())
                .studentId(studentId) // Đẩy ra ngoài giao diện
                .teacherId(teacherId) // Đẩy ra ngoài giao diện
                .build();
    }

    @Transactional
    public void changePasswordFirstLogin(String username, String newPassword) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setFirstLogin(false);
        userRepository.save(user);
    }

    private String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);
        String rolesScope = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.joining(" "));

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getUsername())
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
            throw new RuntimeException("Không thể tạo Token bảo mật", e);
        }
    }
}
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
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
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.signer-key}")
    private String SIGNER_KEY;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        // 1. Tìm kiếm xem Username có tồn tại không
        User user = userRepository.findByUsername(request.username())
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        // 2. So khớp mật khẩu thô gửi lên với mật khẩu đã băm dưới DB
        boolean authenticated = passwordEncoder.matches(request.password(), user.getPassword());

        if (!authenticated) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        // 3. Nếu khớp mật khẩu, tiến hành tạo Token JWT cấp cho người dùng
        String token = generateToken(user);

        // 🔥 VÁ LỖI TẠI ĐÂY: Khai báo chuỗi biến đổi role cụ thể cho hàm authenticate để tránh lỗi compile Scope
        String rolesScope = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.joining(" "));

        return new AuthenticationResponse(token, true, user.getId(), user.getUsername(), rolesScope);
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
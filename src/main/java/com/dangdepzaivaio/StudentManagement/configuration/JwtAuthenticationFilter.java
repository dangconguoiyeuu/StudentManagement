package com.dangdepzaivaio.StudentManagement.configuration;

import com.nimbusds.jwt.SignedJWT;
import com.nimbusds.jose.crypto.MACVerifier;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Value("${jwt.signer-key}")
    private String signerKey;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            try {
                SignedJWT signedJWT = SignedJWT.parse(token);
                MACVerifier verifier = new MACVerifier(signerKey.getBytes());

                // Xác thực chữ ký mã hóa và kiểm tra thời hạn token
                if (signedJWT.verify(verifier) && new Date().before(signedJWT.getJWTClaimsSet().getExpirationTime())) {
                    String username = signedJWT.getJWTClaimsSet().getSubject();
                    String scope = signedJWT.getJWTClaimsSet().getStringClaim("scope"); // Đọc chuỗi Roles từ Payload

                    // Chuyển đổi chuỗi role sang GrantedAuthority chuẩn Spring Security (Thêm tiền tố ROLE_)
                    List<SimpleGrantedAuthority> authorities = Arrays.stream(scope.split(" "))
                            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                            .collect(Collectors.toList());

                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(username, null, authorities);

                    // Thiết lập thông tin xác thực vào ngữ cảnh Security
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            } catch (Exception e) {
                SecurityContextHolder.clearContext();
            }
        }

        filterChain.doFilter(request, response);
    }
}
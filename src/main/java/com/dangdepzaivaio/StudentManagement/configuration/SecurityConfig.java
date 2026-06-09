package com.dangdepzaivaio.StudentManagement.configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        httpSecurity.authorizeHttpRequests(request -> request
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .requestMatchers("/auth/login", "/auth/change-password").permitAll() // Mở công khai endpoint đổi pass lần đầu

                // 🔒 KHÓA CHẶT: Chỉ duy nhất ADMIN được quyền tạo mới, cập nhật, xóa bỏ các đối tượng (Học sinh, Giảng viên, Khoa, Lớp)
                .requestMatchers(HttpMethod.POST, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**", "/users/**").hasRole("ADMIN")

                // ADMIN và TEACHER được quyền gọi danh sách để xem
                .requestMatchers(HttpMethod.GET, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**").hasAnyRole("ADMIN", "TEACHER")

                .requestMatchers(HttpMethod.POST, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.PUT, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.DELETE, "/grades/**").hasRole("TEACHER")

                // 2. Việc Xem điểm: ADMIN (để quản lý), TEACHER (để rà soát), STUDENT (để tự xem điểm mình) đều được phép
                .requestMatchers(HttpMethod.GET, "/grades/**").hasAnyRole("ADMIN", "TEACHER", "STUDENT")

                .anyRequest().authenticated());

        httpSecurity.csrf(AbstractHttpConfigurer::disable);
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:5173"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
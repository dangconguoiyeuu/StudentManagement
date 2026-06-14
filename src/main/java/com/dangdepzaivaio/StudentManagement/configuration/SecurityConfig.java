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
                .requestMatchers("/auth/login", "/auth/change-password").permitAll()

                .requestMatchers(HttpMethod.GET, "/students/export/excel").hasAnyRole("ADMIN", "TEACHER")
                .requestMatchers(HttpMethod.GET, "/students/export/template").hasRole("ADMIN")
                .requestMatchers(HttpMethod.POST, "/students/import/**").hasRole("ADMIN")

                .requestMatchers(HttpMethod.POST, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**", "/users/**").hasRole("ADMIN")

                .requestMatchers(HttpMethod.GET, "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/students/**", "/teachers/**", "/classes/**",
                        "/departments/**", "/subjects/**", "/course-classes/**").hasAnyRole("ADMIN", "TEACHER", "STUDENT")

                .requestMatchers(HttpMethod.DELETE, "/grades/student/*/course-class/*").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/grades/export/excel").hasAnyRole("ADMIN", "TEACHER", "STUDENT")
                .requestMatchers(HttpMethod.GET, "/grades/export/template").hasRole("TEACHER")
                .requestMatchers(HttpMethod.POST, "/grades/import/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.POST, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.PUT, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.DELETE, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.GET, "/grades/**").hasAnyRole("ADMIN", "TEACHER", "STUDENT")

                .requestMatchers(HttpMethod.POST, "/registration/periods").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/registration/periods/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/registration/periods").hasAnyRole("ADMIN", "TEACHER", "STUDENT")
                .requestMatchers(HttpMethod.GET, "/registration/statistics").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/registration/course-class/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/registration/teacher/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.GET, "/registration/classes/**").hasAnyRole("ADMIN", "TEACHER")
                .requestMatchers(HttpMethod.GET, "/registration/open-course-classes", "/registration/my-classes").hasRole("STUDENT")
                .requestMatchers(HttpMethod.POST, "/registration/enroll").hasRole("STUDENT")
                .requestMatchers(HttpMethod.DELETE, "/registration/unenroll").hasRole("STUDENT")

                .anyRequest().authenticated());

        httpSecurity.csrf(AbstractHttpConfigurer::disable);
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // 🔥 SỬA CHỖ NÀY: Giữ lại localhost để sau này test máy local, và THÊM LINK VERCEL của ông vào
        configuration.setAllowedOrigins(List.of(
                "http://localhost:3000",
                "http://localhost:5173",
                "https://student-management-wine-ten.vercel.app" // Tên miền Frontend live trên Vercel của ông
        ));

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

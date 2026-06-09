package com.dangdepzaivaio.StudentManagement.configuration;

import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DatabaseInitializer {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    ApplicationRunner initRolesAndResetPasswords() {
        return args -> {
            // 1. Giữ nguyên logic khởi tạo Role
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                roleRepository.save(Role.builder().name("ADMIN").build());
            }
            if (roleRepository.findByName("TEACHER").isEmpty()) {
                roleRepository.save(Role.builder().name("TEACHER").build());
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
            }

            // 2. 🔥 AUTO RESET: Lấy tất cả user ra và ép mật khẩu về đúng chữ "password1234" bằng lõi mã hóa của Java
            List<User> users = userRepository.findAll();
            for (User user : users) {
                user.setPassword(passwordEncoder.encode("password1234"));
                userRepository.save(user);
            }
        };
    }
}
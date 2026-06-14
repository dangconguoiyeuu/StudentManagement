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
import java.util.Set;

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
            Role adminRole = roleRepository.findByName("ADMIN")
                    .orElseGet(() -> roleRepository.save(Role.builder().name("ADMIN").build()));
            if (roleRepository.findByName("TEACHER").isEmpty()) {
                roleRepository.save(Role.builder().name("TEACHER").build());
                log.info("Đã khởi tạo Role: TEACHER");
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
                log.info("Đã khởi tạo Role: STUDENT");
            }

            if (userRepository.count() == 0) {
                User admin = User.builder()
                        .id("AD")
                        .username("admin")
                        .email("admin@open.edu.vn")
                        .password(passwordEncoder.encode("password1234"))
                        .roles(Set.of(adminRole))
                        .isActive(true)
                        .isFirstLogin(true)
                        .build();
                userRepository.save(admin);
                log.info("Đã tạo tài khoản quản trị mặc định: admin@open.edu.vn / password1234");
            }

            List<User> users = userRepository.findAll();
            int resetCount = 0;
            for (User user : users) {
                if (user.isFirstLogin()) {
                    user.setPassword(passwordEncoder.encode("password1234"));
                    userRepository.save(user);
                    resetCount++;
                }
            }
            if (resetCount > 0) {
                log.warn("DatabaseInitializer: Đã reset mật khẩu mặc định cho {} tài khoản chưa đổi pass. " +
                        "Xem xét tắt tính năng này sau khi deploy production.", resetCount);
            }
        };
    }
}

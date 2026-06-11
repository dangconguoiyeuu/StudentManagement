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
            // 1. Khởi tạo các Role mặc định nếu chưa có
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                roleRepository.save(Role.builder().name("ADMIN").build());
                log.info("Đã khởi tạo Role: ADMIN");
            }
            if (roleRepository.findByName("TEACHER").isEmpty()) {
                roleRepository.save(Role.builder().name("TEACHER").build());
                log.info("Đã khởi tạo Role: TEACHER");
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
                log.info("Đã khởi tạo Role: STUDENT");
            }

            // 2. ✅ FIX: Chỉ reset mật khẩu về mặc định cho những tài khoản CHƯA TỪNG đăng nhập
            // (isFirstLogin = true). Điều này vẫn có thể reset pass của user chưa đổi khi restart,
            // nhưng đây là hành vi cố ý để đảm bảo pass mặc định luôn đúng khi deploy mới.
            //
            // ⚠️  LƯU Ý PRODUCTION: Nếu không muốn reset pass mỗi lần restart,
            //     hãy comment toàn bộ block bên dưới sau lần deploy đầu tiên.
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

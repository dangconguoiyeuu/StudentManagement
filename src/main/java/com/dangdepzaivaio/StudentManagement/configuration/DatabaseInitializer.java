package com.dangdepzaivaio.StudentManagement.configuration;

import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DatabaseInitializer {

    private final RoleRepository roleRepository;

    @Bean
    ApplicationRunner initRoles() {
        return args -> {
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                roleRepository.save(Role.builder().name("ADMIN").build());
                log.info("Đã tạo Role ADMIN thành công!");
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
                log.info("Đã tạo Role STUDENT thành công!");
            }
        };
    }
}
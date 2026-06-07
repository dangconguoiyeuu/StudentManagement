package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record StudentResponse(
        Long id,
        String studentCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean isActive,

        // Bóc tách dữ liệu từ User sang phẳng luôn
        String username,
        String email,

        // Bóc tách dữ liệu từ lớp hành chính Class sang
        String className
) {}
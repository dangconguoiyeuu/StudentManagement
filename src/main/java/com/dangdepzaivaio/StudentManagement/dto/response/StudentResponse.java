package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record StudentResponse(
        String id,
        String studentCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean active,
        String username,
        String email,
        Long classId,
        String className,

        // 🔥 THÊM MỚI: Trường dữ liệu phản hồi khóa học từ Database thật ra ngoài UI
        String cohort,
        String departmentName
) {}
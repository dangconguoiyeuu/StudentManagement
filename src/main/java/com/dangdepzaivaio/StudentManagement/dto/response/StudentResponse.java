package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record StudentResponse(
        String id, // 🔥 ĐÃ SỬA: Chuyển hoàn toàn sang kiểu dữ liệu String để hứng chuỗi 'HS_01'
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
        String className
) {}
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record TeacherResponse(
        String id,          // PHẢI LÀ String
        String teacherCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean active,
        String username,
        String email,
        String departmentName
) {}
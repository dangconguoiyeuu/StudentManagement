package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record TeacherResponse(
        Long id,
        String teacherCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean isActive,
        String username,
        String email,
        String departmentName
) {}
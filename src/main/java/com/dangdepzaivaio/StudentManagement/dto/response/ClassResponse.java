package com.dangdepzaivaio.StudentManagement.dto.response;

public record ClassResponse(
        Long id,
        String name,
        String departmentCode,
        String departmentName,
        String advisorTeacherId,
        String advisorTeacherName
) {}
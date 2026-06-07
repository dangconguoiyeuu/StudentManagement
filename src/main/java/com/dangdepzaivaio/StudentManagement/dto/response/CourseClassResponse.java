package com.dangdepzaivaio.StudentManagement.dto.response;

public record CourseClassResponse(
        Long id,
        String code,
        String semester,
        String subjectCode,
        String subjectName,
        Integer credits
) {}
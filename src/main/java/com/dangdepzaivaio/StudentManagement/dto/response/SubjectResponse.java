package com.dangdepzaivaio.StudentManagement.dto.response;

public record SubjectResponse(
        Long id,
        String code,
        String name,
        Integer credits
) {}
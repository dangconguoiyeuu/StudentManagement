package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.List;

public record ClassAdvisorResponse(
        Long classId,
        String className,
        List<StudentResponse> students
) {}
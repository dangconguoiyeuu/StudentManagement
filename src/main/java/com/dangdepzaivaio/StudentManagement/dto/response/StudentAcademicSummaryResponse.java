package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.List;

public record StudentAcademicSummaryResponse(
        String studentId,        // 🔥 Đã đổi sang String
        String studentCode,
        String studentName,
        String className,
        List<GradeResponse> details,
        Integer totalCredits,
        Double gpaSystem10,
        Double gpaSystem4
) {}
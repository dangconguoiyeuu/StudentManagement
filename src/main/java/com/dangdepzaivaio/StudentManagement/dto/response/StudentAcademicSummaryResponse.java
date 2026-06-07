package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.List;

public record StudentAcademicSummaryResponse(
        Long studentId,
        String studentCode,
        String studentName,
        String className,
        List<GradeResponse> details, // Danh sách chi tiết điểm từng môn của sinh viên
        Integer totalCredits,        // Tổng số tín chỉ tích lũy
        Double gpaSystem10,          // GPA tích lũy hệ 10
        Double gpaSystem4            // GPA tích lũy hệ 4
) {}
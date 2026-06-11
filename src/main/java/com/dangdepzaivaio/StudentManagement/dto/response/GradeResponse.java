package com.dangdepzaivaio.StudentManagement.dto.response;

public record GradeResponse(
        Long id,
        String studentId, // 🔥 Đã đổi sang String
        String studentCode,
        String studentName,
        Long courseClassId,
        String courseClassCode,
        String subjectName,
        Double attendanceGrade,
        Double midtermGrade,
        Double finalGrade,
        Double overallGrade,
        String letterGrade,
        Double grade4
) {}
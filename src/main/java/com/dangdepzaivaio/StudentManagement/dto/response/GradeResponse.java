package com.dangdepzaivaio.StudentManagement.dto.response;

public record GradeResponse(
        Long id,
        Long studentId,
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
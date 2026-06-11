package com.dangdepzaivaio.StudentManagement.dto.response;

public record GradeResponse(
        Long id,
        String studentId,
        String studentCode,
        String studentName,
        Long courseClassId,
        String courseClassCode,
        String subjectName,
        Integer credits,       // 🔥 THÊM MỚI: Số tín chỉ môn học
        String teacherName,    // 🔥 THÊM MỚI: Tên giảng viên đứng lớp
        String schedule,       // 🔥 THÊM MỚI: Lịch học thiết kế (Thứ, Tiết, Phòng)
        Double attendanceGrade,
        Double midtermGrade,
        Double finalGrade,
        Double overallGrade,
        String letterGrade,
        Double grade4
) {}
package com.dangdepzaivaio.StudentManagement.dto.response;

public record CourseClassResponse(
        Long id,
        String code,
        String semester,
        Long subjectId,
        String subjectCode,
        String subjectName,
        Integer credits,
        String teacherId,
        String teacherName,
        Integer maxStudents,
        long registeredStudents,
        String schedule,
        boolean openForRegistration
) {}

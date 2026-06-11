package com.dangdepzaivaio.StudentManagement.dto.response;

public record CourseClassStatResponse(
        Long courseClassId,
        String courseClassCode,
        String subjectName,
        String teacherName,
        long registeredStudents,
        String semester,
        Integer maxStudents,
        boolean openForRegistration
) {}

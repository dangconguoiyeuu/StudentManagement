package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CourseClassRequest(
        @NotBlank(message = "Mã lớp học phần không được để trống")
        String code,

        @NotBlank(message = "Học kỳ không được để trống")
        String semester,

        @NotNull(message = "ID môn học không được để trống")
        Long subjectId,

        String teacherId,

        @Min(value = 1, message = "Sĩ số tối đa phải lớn hơn 0")
        Integer maxStudents,

        String schedule,

        Boolean openForRegistration
) {}

package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CourseClassRequest(
        @NotBlank(message = "Mã lớp học phần không được để trống")
        String code,

        @NotBlank(message = "Học kỳ không được để trống")
        String semester,

        @NotNull(message = "ID môn học gốc không được để trống")
        Long subjectId
) {}
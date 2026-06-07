package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record GradeRequest(
        @NotNull(message = "ID sinh viên không được để trống")
        Long studentId,

        @NotNull(message = "ID lớp học phần không được để trống")
        Long courseClassId,

        @Min(value = 0, message = "Điểm chuyên cần không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm chuyên cần không được lớn hơn 10")
        Double attendanceGrade,

        @Min(value = 0, message = "Điểm giữa kỳ không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm giữa kỳ không được lớn hơn 10")
        Double midtermGrade,

        @Min(value = 0, message = "Điểm cuốii kỳ không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm cuối kỳ không được lớn hơn 10")
        Double finalGrade
) {}
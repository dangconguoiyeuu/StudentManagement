package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record SubjectRequest(
        @NotBlank(message = "Mã môn học không được để trống")
        String code,

        @NotBlank(message = "Tên môn học không được để trống")
        String name,

        @NotNull(message = "Số tín chỉ không được để trống")
        @Min(value = 1, message = "Số tín chỉ phải lớn hơn hoặc bằng 1")
        Integer credits
) {}
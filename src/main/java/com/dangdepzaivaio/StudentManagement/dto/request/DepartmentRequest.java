package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;

public record DepartmentRequest(
        @NotBlank(message = "Mã khoa không được để trống") String code,
        @NotBlank(message = "Tên khoa không được để trống") String name
) {}
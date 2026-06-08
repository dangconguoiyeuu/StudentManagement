package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ClassRequest(
        @NotBlank(message = "Tên lớp hành chính không được để trống") String name,
        @NotNull(message = "ID khoa không được để trống") Long departmentId
) {}
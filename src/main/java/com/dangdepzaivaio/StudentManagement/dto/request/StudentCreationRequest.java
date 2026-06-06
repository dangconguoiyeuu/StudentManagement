package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;

public record StudentCreationRequest(
        @NotBlank(message = "Mã sinh viên không được để trống")
        @Size(max = 20, message = "Mã sinh viên không vượt quá 20 ký tự")
        String studentCode,

        @NotBlank(message = "Tên sinh viên không được để trống")
        String firstName,

        @NotBlank(message = "Họ và tên đệm không được để trống")
        String lastName,

        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,

        @NotNull(message = "ID lớp hành chính không được để trống")
        Long classId,

        @Valid // Quan trọng: Để kích hoạt validation cho đối tượng bên trong
        @NotNull(message = "Thông tin tài khoản không được để trống")
        UserCreationRequest user
) {}
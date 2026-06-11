package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

public record StudentUpdateRequest(
        @NotBlank(message = "Tên sinh viên không được để trống")
        String firstName,

        @NotBlank(message = "Họ và tên đệm không được để trống")
        String lastName,

        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        Long classId,
        Boolean active // 🔥 THÊM TRƯỜNG NÀY: Để nhận trạng thái Đang học (true) / Khóa (false) từ form sửa
) {}
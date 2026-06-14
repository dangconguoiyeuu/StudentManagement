package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record AuthenticationRequest(
        @NotBlank(message = "Email đăng nhập không được để trống")
        @Email(message = "Email đăng nhập không đúng định dạng")
        String username,

        @NotBlank(message = "Mật khẩu không được để trống")
        String password
) {}

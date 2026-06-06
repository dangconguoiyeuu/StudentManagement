package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UserUpdateRequest(
        @Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự")
        String password,

        @Email(message = "Định dạng email không hợp lệ")
        String email
) {}
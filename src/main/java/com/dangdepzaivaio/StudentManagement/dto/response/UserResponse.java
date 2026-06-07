package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.Set;

public record UserResponse(
        Long id,
        String username,
        String email,
        boolean isActive,
        Set<String> roles // Chỉ trả ra chuỗi tên Role (ADMIN, STUDENT) thay vì cả Object thực thể
) {}
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.Set;

public record UserResponse(
        String id, // 🔥 Đã đổi sang String
        String username,
        String email,
        boolean active,
        Set<String> roles
) {}
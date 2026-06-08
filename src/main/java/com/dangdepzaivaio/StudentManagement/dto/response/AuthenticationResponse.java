package com.dangdepzaivaio.StudentManagement.dto.response;

public record AuthenticationResponse(
        String token,
        boolean authenticated,
        Long userId,        // Bổ sung ID
        String username,    // Bổ sung Tên hiển thị
        String roles        // Bổ sung Quyền
) {}
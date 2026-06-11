package com.dangdepzaivaio.StudentManagement.dto.response;

import lombok.Builder;
import java.util.Set;

@Builder
public record AuthenticationResponse(
        String token,
        boolean authenticated,
        String userId,     // 🔥 Đã đổi sang String
        String username,
        Set<String> roles,
        boolean isFirstLogin,
        String studentId,  // 🔥 Đã đổi sang String
        String teacherId   // 🔥 Đã đổi sang String
) {}
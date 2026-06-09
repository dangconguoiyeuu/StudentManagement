package com.dangdepzaivaio.StudentManagement.dto.response;

import lombok.Builder;
import java.util.Set;

@Builder
public record AuthenticationResponse(
        String token,
        boolean authenticated,
        Long userId,
        String username,
        Set<String> roles,
        boolean isFirstLogin,
        Long studentId, // 🔥 BỔ SUNG TRƯỜNG NÀY
        Long teacherId  // 🔥 BỔ SUNG TRƯỜNG NÀY
) {}
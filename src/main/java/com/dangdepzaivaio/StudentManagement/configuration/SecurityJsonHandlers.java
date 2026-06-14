package com.dangdepzaivaio.StudentManagement.configuration;

import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Component
@RequiredArgsConstructor
public class SecurityJsonHandlers implements AuthenticationEntryPoint, AccessDeniedHandler {

    private final ObjectMapper objectMapper;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException {
        writeError(response, ErrorCode.UNAUTHENTICATED);
    }

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException)
            throws IOException {
        writeError(response, ErrorCode.ACCESS_DENIED);
    }

    private void writeError(HttpServletResponse response, ErrorCode errorCode) throws IOException {
        ApiResponse<Object> body = new ApiResponse<>(errorCode.getCode(), errorCode.getMessage(), null);
        response.setStatus(errorCode.getStatusCode().value());
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        objectMapper.writeValue(response.getWriter(), body);
    }
}

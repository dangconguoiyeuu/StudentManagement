package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.service.impl.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ApiResponse<AuthenticationResponse> login(@RequestBody @Valid AuthenticationRequest request) {
        var result = authenticationService.authenticate(request);
        return new ApiResponse<>(1000, "Đăng nhập hệ thống thành công!", result);
    }

    @PostMapping("/change-password")
    public ApiResponse<String> changePassword(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String newPassword = request.get("newPassword");
        authenticationService.changePasswordFirstLogin(username, newPassword);
        return new ApiResponse<>(1000, "Đổi mật khẩu lần đầu thành công!", "Mật khẩu mới đã được áp dụng.");
    }
}
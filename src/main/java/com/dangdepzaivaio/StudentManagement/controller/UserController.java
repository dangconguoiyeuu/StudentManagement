package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ApiResponse<UserResponse> createUser(@RequestBody @Valid UserCreationRequest request) {
        return new ApiResponse<>(1000, "Tao nguoi dung thanh cong", userService.createUser(request));
    }

    @GetMapping
    public ApiResponse<List<UserResponse>> getAllUsers() {
        return new ApiResponse<>(1000, "Lay danh sach tai khoan thanh cong", userService.getAllUsers());
    }

    @GetMapping("/{userId}")
    public ApiResponse<UserResponse> getUser(@PathVariable String userId) {
        return new ApiResponse<>(1000, "Lay chi tiet tai khoan thanh cong", userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ApiResponse<UserResponse> updateUser(@PathVariable String userId, @RequestBody @Valid UserUpdateRequest request) {
        return new ApiResponse<>(1000, "Cap nhat tai khoan thanh cong", userService.updateUser(userId, request));
    }

    @PutMapping("/{userId}/enable")
    public ApiResponse<UserResponse> enableUser(@PathVariable String userId) {
        return new ApiResponse<>(1000, "Mo khoa tai khoan thanh cong", userService.enableUser(userId));
    }

    @PutMapping("/{userId}/reset-password")
    public ApiResponse<UserResponse> resetPassword(@PathVariable String userId, @RequestBody(required = false) Map<String, String> request) {
        String newPassword = request == null ? null : request.get("newPassword");
        return new ApiResponse<>(1000, "Reset mat khau thanh cong", userService.resetPassword(userId, newPassword));
    }

    @DeleteMapping("/{userId}")
    public ApiResponse<String> deleteUser(@PathVariable String userId) {
        userService.disableUser(userId);
        return new ApiResponse<>(1000, "Khoa tai khoan thanh cong", "ID " + userId + " da bi khoa");
    }
}

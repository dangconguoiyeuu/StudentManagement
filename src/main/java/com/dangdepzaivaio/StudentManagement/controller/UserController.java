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
        return new ApiResponse<>(1000, "Tạo người dùng thành công", userService.createUser(request));
    }

    @GetMapping
    public ApiResponse<List<UserResponse>> getAllUsers() {
        return new ApiResponse<>(1000, "Lấy danh sách tài khoản thành công", userService.getAllUsers());
    }

    @GetMapping("/{userId}")
    public ApiResponse<UserResponse> getUser(@PathVariable String userId) {
        return new ApiResponse<>(1000, "Lấy chi tiết tài khoản thành công", userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ApiResponse<UserResponse> updateUser(@PathVariable String userId, @RequestBody @Valid UserUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật tài khoản thành công", userService.updateUser(userId, request));
    }

    @PutMapping("/{userId}/enable")
    public ApiResponse<UserResponse> enableUser(@PathVariable String userId) {
        return new ApiResponse<>(1000, "Mở khóa tài khoản thành công", userService.enableUser(userId));
    }

    @PutMapping("/{userId}/reset-password")
    public ApiResponse<UserResponse> resetPassword(@PathVariable String userId, @RequestBody(required = false) Map<String, String> request) {
        String newPassword = request == null ? null : request.get("newPassword");
        return new ApiResponse<>(1000, "Đặt lại mật khẩu thành công", userService.resetPassword(userId, newPassword));
    }

    @DeleteMapping("/{userId}")
    public ApiResponse<String> deleteUser(@PathVariable String userId) {
        userService.disableUser(userId);
        return new ApiResponse<>(1000, "Khóa tài khoản thành công", "Tài khoản " + userId + " đã bị khóa");
    }
}

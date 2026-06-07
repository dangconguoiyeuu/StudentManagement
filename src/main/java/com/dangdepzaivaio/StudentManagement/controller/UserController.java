package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest; // Thêm import này
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Thêm import này

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
        return new ApiResponse<>(1000, "Lấy danh sách thành công", userService.getAllUsers());
    }

    @GetMapping("/{userId}")
    public ApiResponse<UserResponse> getUser(@PathVariable Long userId) {
        return new ApiResponse<>(1000, "Lấy chi tiết người dùng thành công", userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ApiResponse<UserResponse> updateUser(@PathVariable Long userId, @RequestBody @Valid UserUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin thành công", userService.updateUser(userId, request));
    }
    @DeleteMapping("/{userId}")
    public ApiResponse<String> deleteUser(@PathVariable Long userId) {
        userService.disableUser(userId); // Gọi hàm chuyển trạng thái xuống tầng Service
        return new ApiResponse<>(1000, "Xóa tài khoản người dùng thành công!", "Tài khoản có ID " + userId + " đã bị vô hiệu hóa.");
    }

}
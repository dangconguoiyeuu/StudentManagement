package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.entity.User;

import java.util.List;

public interface UserService {
    User createUser(UserCreationRequest request);

    List<User> getAllUsers(); // Đã xóa chữ "java" thừa ở đây
    User getUserById(Long id);
    User updateUser(Long id, UserUpdateRequest request);
    void disableUser(Long id);
}
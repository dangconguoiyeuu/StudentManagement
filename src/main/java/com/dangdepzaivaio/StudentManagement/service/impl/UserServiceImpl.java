package com.dangdepzaivaio.StudentManagement.service.impl;

import java.util.List;
import java.util.Set; // 🔥 Thêm import này

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.UserMapper;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository; // 🔥 Bổ sung Repository này
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserResponse createUser(UserCreationRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        // Lấy quyền ADMIN cho tài khoản quản trị viên mới
        Role adminRole = roleRepository.findByName("ADMIN")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));

        User user = User.builder()
                .username(request.username())
                .password(passwordEncoder.encode(request.password()))
                .email(request.email())
                .roles(Set.of(adminRole)) // 🔥 Đã bảo vệ: Tránh NullPointerException khi Login
                .build();

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    public List<UserResponse> getAllUsers() {
        return userRepository.findByIsActiveTrue().stream()
                .map(userMapper::toResponse)
                .toList();
    }

    @Override
    public UserResponse getUserById(Long id) {
        return userRepository.findById(id)
                .map(userMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    @Transactional
    public UserResponse updateUser(Long id, UserUpdateRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        if (request.password() != null && !request.password().isBlank()) {
            user.setPassword(passwordEncoder.encode(request.password()));
        }
        if (request.email() != null && !request.email().isBlank()) {
            user.setEmail(request.email());
        }

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    @Transactional
    public void disableUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        user.setActive(false);
        userRepository.save(user);
    }
}
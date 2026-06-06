package com.dangdepzaivaio.StudentManagement.service.impl;

import java.util.List;
import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor // Tự động inject các repository qua Constructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User createUser(UserCreationRequest request) {
        // 1. Kiểm tra username đã tồn tại chưa
        if (userRepository.existsByUsername(request.username())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        // 2. Map từ DTO sang Entity (Tạm thời thủ công, sau này dùng Mapper)
        User user = User.builder()
                .username(request.username())
                .password(request.password()) // Sẽ mã hóa sau khi làm Security
                .email(request.email())
                .build();

        // 3. Lưu vào database
        return userRepository.save(user);
    }
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng này"));
        // Sau này bạn có thể thêm mã lỗi USER_NOT_FOUND vào ErrorCode nhé!
    }

    @Override
    public User updateUser(Long id, UserUpdateRequest request) {
        User user = getUserById(id); // Lấy user cũ ra trước

        // Cập nhật thông tin nếu có truyền vào
        if (request.password() != null && !request.password().isBlank()) {
            user.setPassword(request.password());
        }
        if (request.email() != null && !request.email().isBlank()) {
            user.setEmail(request.email());
        }

        return userRepository.save(user); // Lưu lại bản cập nhật
    }
}
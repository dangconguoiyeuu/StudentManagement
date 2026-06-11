package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUsername(String username);

    // 🔥 THÊM MỚI: Tìm kiếm tài khoản người dùng bằng Email
    Optional<User> findByEmail(String email);

    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    long countByIdStartingWith(String prefix);

    // 🔥 BỔ SUNG: Hàm lấy danh sách các tài khoản đang hoạt động (isActive = true)
    List<User> findByIsActiveTrue();
}
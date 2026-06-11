package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TeacherMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    @Mapping(target = "user", ignore = true)
    Teacher toEntity(TeacherCreationRequest request);

    // 🔥 VÁ LỖI TRỐNG DỮ LIỆU: Lấy thông tin từ các thực thể liên kết đưa vào DTO phẳng
    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email") // Ánh xạ Email giảng dạy
    @Mapping(target = "departmentName", source = "department.name") // Ánh xạ Tên Khoa chuyên môn
    @Mapping(target = "active", source = "active")
    TeacherResponse toResponse(Teacher teacher);
}
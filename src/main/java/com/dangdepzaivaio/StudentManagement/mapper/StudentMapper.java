package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "studentClass", ignore = true)
    @Mapping(target = "user", ignore = true) // 🔥 ĐỔI THÀNH IGNORE = TRUE: Vì request giờ đã phẳng, không bọc object user nữa
    Student toEntity(StudentCreationRequest request);

    // Hàm toUserEntity cũ đã xóa bỏ vì hệ thống đã chuyển sang tạo tài khoản tự động bằng User.builder()

    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "className", source = "studentClass.name")
    StudentResponse toResponse(Student student);
}
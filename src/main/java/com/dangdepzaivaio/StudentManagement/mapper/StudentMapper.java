package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "studentClass", ignore = true)
    @Mapping(target = "user", source = "user")
    Student toEntity(StudentCreationRequest request);

    // BỔ SUNG THÊM HÀM NÀY: Để MapStruct tự xử lý chuyển đổi thực thể User lồng bên trong
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "roles", ignore = true)
    User toUserEntity(UserCreationRequest request);

    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "className", source = "studentClass.name")
    StudentResponse toResponse(Student student);
}
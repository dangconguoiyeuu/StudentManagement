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
    @Mapping(target = "user", ignore = true)
    Student toEntity(StudentCreationRequest request);

    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "classId", source = "studentClass.id") // 🔥 ÉP MAP: Lấy ID của Class đưa vào DTO
    @Mapping(target = "className", source = "studentClass.name")
    @Mapping(target = "active", source = "active")
    @Mapping(target = "departmentName", source = "studentClass.department.name")
    StudentResponse toResponse(Student student);
}
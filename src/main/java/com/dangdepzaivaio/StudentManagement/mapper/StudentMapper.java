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
    @Mapping(target = "classId", source = "studentClass.id")
    @Mapping(target = "className", source = "studentClass.name")
    @Mapping(target = "active", source = "active")
    // 🔥 SỬA: Sử dụng biểu thức kiểm tra null an toàn cho quan hệ lồng nhau tránh lỗi 500
    @Mapping(target = "departmentName", expression = "java(student.getStudentClass() != null && student.getStudentClass().getDepartment() != null ? student.getStudentClass().getDepartment().getName() : null)")
    @Mapping(target = "advisorTeacherName", expression = "java(student.getStudentClass() != null && student.getStudentClass().getAdvisorTeacher() != null ? student.getStudentClass().getAdvisorTeacher().getLastName() + \" \" + student.getStudentClass().getAdvisorTeacher().getFirstName() : \"Chưa phân công\")")
    @Mapping(target = "advisorEmail", expression = "java(student.getStudentClass() != null && student.getStudentClass().getAdvisorTeacher() != null && student.getStudentClass().getAdvisorTeacher().getUser() != null ? student.getStudentClass().getAdvisorTeacher().getUser().getEmail() : \"Chưa cập nhật\")")
    @Mapping(target = "advisorPhone", expression = "java(student.getStudentClass() != null && student.getStudentClass().getAdvisorTeacher() != null ? student.getStudentClass().getAdvisorTeacher().getPhoneNumber() : \"Chưa cập nhật\")")
    StudentResponse toResponse(Student student);
}
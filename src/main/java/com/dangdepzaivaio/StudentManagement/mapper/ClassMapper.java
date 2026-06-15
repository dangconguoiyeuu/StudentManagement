package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ClassMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    @Mapping(target = "advisorTeacher", ignore = true) // 🔥 Bỏ qua để map thủ công trong service
    Class toEntity(ClassRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    @Mapping(target = "advisorTeacher", ignore = true)
    void updateEntityFromRequest(ClassRequest request, @MappingTarget Class studentClass);

    @Mapping(target = "departmentCode", source = "department.code")
    @Mapping(target = "departmentName", source = "department.name")
    @Mapping(target = "advisorTeacherId", source = "advisorTeacher.id")
    @Mapping(target = "advisorTeacherName", expression = "java(studentClass.getAdvisorTeacher() != null ? studentClass.getAdvisorTeacher().getLastName() + \" \" + studentClass.getAdvisorTeacher().getFirstName() : null)")
    ClassResponse toResponse(Class studentClass);
}
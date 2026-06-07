package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface GradeMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "student", ignore = true)
    @Mapping(target = "courseClass", ignore = true)
    Grade toEntity(GradeRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "student", ignore = true)
    @Mapping(target = "courseClass", ignore = true)
    void updateEntityFromRequest(GradeRequest request, @MappingTarget Grade grade);

    @Mapping(target = "studentId", source = "student.id")
    @Mapping(target = "studentCode", source = "student.studentCode")
    @Mapping(target = "studentName", expression = "java(grade.getStudent().getFirstName() + \" \" + grade.getStudent().getLastName())")
    @Mapping(target = "courseClassId", source = "courseClass.id")
    @Mapping(target = "courseClassCode", source = "courseClass.code")
    @Mapping(target = "subjectName", source = "courseClass.subject.name")
    GradeResponse toResponse(Grade grade);
}
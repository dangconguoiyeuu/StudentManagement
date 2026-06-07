package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface CourseClassMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    CourseClass toEntity(CourseClassRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    void updateEntityFromRequest(CourseClassRequest request, @MappingTarget CourseClass courseClass);

    // Phẳng hóa dữ liệu từ Object Subject lồng nhau
    @Mapping(target = "subjectCode", source = "subject.code")
    @Mapping(target = "subjectName", source = "subject.name")
    @Mapping(target = "credits", source = "subject.credits")
    CourseClassResponse toResponse(CourseClass courseClass);
}
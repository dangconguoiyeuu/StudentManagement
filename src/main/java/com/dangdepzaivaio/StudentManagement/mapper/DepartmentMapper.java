package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DepartmentMapper {
    @Mapping(target = "id", ignore = true)
    Department toEntity(DepartmentRequest request);

    @Mapping(target = "id", ignore = true)
    void updateEntityFromRequest(DepartmentRequest request, @MappingTarget Department department);

    DepartmentResponse toResponse(Department department);
}
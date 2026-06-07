package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse; // Thêm import này
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface SubjectMapper {

    @Mapping(target = "id", ignore = true)
    Subject toEntity(SubjectRequest request);

    @Mapping(target = "id", ignore = true)
    void updateEntityFromRequest(SubjectRequest request, @MappingTarget Subject subject);

    // BỔ SUNG HÀM NÀY: Chuyển đổi thực thể sang DTO phẳng sạch sẽ
    SubjectResponse toResponse(Subject subject);
}
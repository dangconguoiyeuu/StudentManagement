package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.service.SubjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService subjectService;

    @PostMapping
    public ApiResponse<Subject> createSubject(@RequestBody @Valid SubjectRequest request) {
        return new ApiResponse<>(1000, "Tạo môn học thành công!", subjectService.createSubject(request));
    }

    @GetMapping
    public ApiResponse<List<Subject>> getAllSubjects() {
        return new ApiResponse<>(1000, "Lấy danh sách môn học thành công!", subjectService.getAllSubjects());
    }

    @GetMapping("/{subjectId}")
    public ApiResponse<Subject> getSubject(@PathVariable Long subjectId) {
        return new ApiResponse<>(1000, "Lấy chi tiết môn học thành công!", subjectService.getSubjectById(subjectId));
    }

    @PutMapping("/{subjectId}")
    public ApiResponse<Subject> updateSubject(@PathVariable Long subjectId, @RequestBody @Valid SubjectRequest request) {
        return new ApiResponse<>(1000, "Cập nhật môn học thành công!", subjectService.updateSubject(subjectId, request));
    }

    @DeleteMapping("/{subjectId}")
    public ApiResponse<String> deleteSubject(@PathVariable Long subjectId) {
        subjectService.deleteSubject(subjectId);
        return new ApiResponse<>(1000, "Xóa môn học thành công!", "Môn học có ID " + subjectId + " đã bị xóa hoàn toàn.");
    }
}
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.service.ClassService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/classes")
@RequiredArgsConstructor
public class ClassController {
    private final ClassService classService;

    @PostMapping
    public ApiResponse<ClassResponse> create(@RequestBody @Valid ClassRequest request) {
        return new ApiResponse<>(1000, "Tạo lớp hành chính mới thành công!", classService.createClass(request));
    }

    @GetMapping
    public ApiResponse<List<ClassResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy danh sách lớp hành chính thành công!", classService.getAllClasses());
    }
    @PutMapping("/{id}")
    public ApiResponse<ClassResponse> update(@PathVariable Long id, @RequestBody @Valid ClassRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin lớp hành chính thành công!", classService.updateClass(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> delete(@PathVariable Long id) {
        classService.deleteClass(id);
        return new ApiResponse<>(1000, "Xóa lớp hành chính thành công!", "Lớp hành chính có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
    @GetMapping("/{id}")
    public ApiResponse<ClassResponse> getById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin lớp học thành công!", classService.getClassById(id));
    }

}
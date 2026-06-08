package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.service.DepartmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/departments")
@RequiredArgsConstructor
public class DepartmentController {
    private final DepartmentService departmentService;

    @PostMapping
    public ApiResponse<DepartmentResponse> create(@RequestBody @Valid DepartmentRequest request) {
        return new ApiResponse<>(1000, "Tạo khoa mới thành công!", departmentService.createDepartment(request));
    }

    @GetMapping
    public ApiResponse<List<DepartmentResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy danh sách khoa thành công!", departmentService.getAllDepartments());
    }

    @PutMapping("/{id}")
    public ApiResponse<DepartmentResponse> update(@PathVariable Long id, @RequestBody @Valid DepartmentRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin khoa thành công!", departmentService.updateDepartment(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> delete(@PathVariable Long id) {
        departmentService.deleteDepartment(id);
        return new ApiResponse<>(1000, "Xóa khoa thành công!", "Khoa có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
    @GetMapping("/{id}")
    public ApiResponse<DepartmentResponse> getById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin khoa thành công!", departmentService.getDepartmentById(id));
    }
}
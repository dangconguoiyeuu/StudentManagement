package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.service.CourseClassService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course-classes")
@RequiredArgsConstructor
public class CourseClassController {

    private final CourseClassService courseClassService;

    @PostMapping
    public ApiResponse<CourseClassResponse> createCourseClass(@RequestBody @Valid CourseClassRequest request) {
        return new ApiResponse<>(1000, "Mở lớp học phần mới thành công!", courseClassService.createCourseClass(request));
    }

    @GetMapping
    public ApiResponse<List<CourseClassResponse>> getAllCourseClasses() {
        return new ApiResponse<>(1000, "Lấy danh sách lớp học phần thành công!", courseClassService.getAllCourseClasses());
    }

    @GetMapping("/{id}")
    public ApiResponse<CourseClassResponse> getCourseClassById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin chi tiết lớp học phần thành công!", courseClassService.getCourseClassById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<CourseClassResponse> updateCourseClass(@PathVariable Long id, @RequestBody @Valid CourseClassRequest request) {
        return new ApiResponse<>(1000, "Cập nhật lớp học phần thành công!", courseClassService.updateCourseClass(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteCourseClass(@PathVariable Long id) {
        courseClassService.deleteCourseClass(id);
        return new ApiResponse<>(1000, "Xóa lớp học phần thành công!", "Lớp học phần có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
}
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.service.StudentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @PostMapping
    public ApiResponse<StudentResponse> createStudent(@RequestBody @Valid StudentCreationRequest request) {
        return new ApiResponse<>(1000, "Tạo hồ sơ sinh viên thành công!", studentService.createStudent(request));
    }

    @GetMapping
    public ApiResponse<List<StudentResponse>> getAllStudents() {
        return new ApiResponse<>(1000, "Lấy danh sách sinh viên thành công!", studentService.getAllStudents());
    }

    @GetMapping("/{studentId}")
    public ApiResponse<StudentResponse> getStudent(@PathVariable Long studentId) {
        return new ApiResponse<>(1000, "Lấy chi tiết sinh viên thành công!", studentService.getStudentById(studentId));
    }

    @PutMapping("/{studentId}")
    public ApiResponse<StudentResponse> updateStudent(@PathVariable Long studentId, @RequestBody @Valid StudentUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin sinh viên thành công!", studentService.updateStudent(studentId, request));
    }
    @DeleteMapping("/{studentId}")
    public ApiResponse<String> deleteStudent(@PathVariable Long studentId) {
        studentService.disableStudent(studentId); // Gọi đúng hàm disableStudent
        return new ApiResponse<>(1000, "Xóa hồ sơ sinh viên thành công!", "Hồ sơ sinh viên có ID " + studentId + " và tài khoản liên kết đã bị vô hiệu hóa.");
    }

}
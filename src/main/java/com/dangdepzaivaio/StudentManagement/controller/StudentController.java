package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
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
    public ApiResponse<Student> createStudent(@RequestBody @Valid StudentCreationRequest request) {
        Student student = studentService.createStudent(request);
        return new ApiResponse<>(1000, "Tạo hồ sơ sinh viên thành công!", student);
    }

    // 1. API GET: Lấy toàn bộ danh sách sinh viên
    @GetMapping
    public ApiResponse<List<Student>> getAllStudents() {
        return new ApiResponse<>(1000, "Lấy danh sách sinh viên thành công!", studentService.getAllStudents());
    }

    // 2. API GET: Lấy chi tiết 1 sinh viên theo ID
    @GetMapping("/{studentId}")
    public ApiResponse<Student> getStudent(@PathVariable Long studentId) {
        return new ApiResponse<>(1000, "Lấy chi tiết sinh viên thành công!", studentService.getStudentById(studentId));
    }

    // 3. API PUT: Cập nhật thông tin lý lịch sinh viên
    @PutMapping("/{studentId}")
    public ApiResponse<Student> updateStudent(@PathVariable Long studentId, @RequestBody @Valid StudentUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin sinh viên thành công!", studentService.updateStudent(studentId, request));
    }
}
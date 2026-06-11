package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
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
    public ApiResponse<List<StudentResponse>> getAllStudents(@RequestParam(required = false, defaultValue = "false") boolean includeInactive) {
        return new ApiResponse<>(1000, "Lấy danh sách sinh viên thành công!", studentService.getAllStudents(includeInactive));
    }

    @GetMapping("/{studentId}")
    public ApiResponse<StudentResponse> getStudent(@PathVariable String studentId) { // 🔥 String
        return new ApiResponse<>(1000, "Lấy chi tiết sinh viên thành công!", studentService.getStudentById(studentId));
    }

    @PutMapping("/{studentId}")
    public ApiResponse<StudentResponse> updateStudent(@PathVariable String studentId, @RequestBody @Valid StudentUpdateRequest request) { // 🔥 String
        return new ApiResponse<>(1000, "Cập nhật thông tin sinh viên thành công!", studentService.updateStudent(studentId, request));
    }

    @DeleteMapping("/{studentId}")
    public ApiResponse<String> deleteStudent(@PathVariable String studentId) { // 🔥 String
        studentService.disableStudent(studentId);
        return new ApiResponse<>(1000, "Xóa hồ sơ sinh viên thành công!", "Hồ sơ sinh viên có ID " + studentId + " đã bị vô hiệu hóa.");
    }

    @PutMapping("/{studentId}/enable")
    public ApiResponse<String> enableStudent(@PathVariable String studentId) { // 🔥 String
        studentService.enableStudent(studentId);
        return new ApiResponse<>(1000, "Mở khóa hồ sơ sinh viên thành công!", "Hồ sơ và tài khoản đã được tái kích hoạt.");
    }
}
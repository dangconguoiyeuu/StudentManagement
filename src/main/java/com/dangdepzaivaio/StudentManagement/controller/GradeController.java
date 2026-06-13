package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeService gradeService;

    @PostMapping
    public ApiResponse<GradeResponse> inputGrade(@RequestBody @Valid GradeRequest request) {
        return new ApiResponse<>(1000, "Nhập và quy đổi điểm số thành công!", gradeService.inputGrade(request));
    }

    @GetMapping("/student/{studentId}")
    public ApiResponse<List<GradeResponse>> getGradesByStudent(@PathVariable String studentId) { // 🔥 String
        return new ApiResponse<>(1000, "Lấy bảng điểm chi tiết của sinh viên thành công!", gradeService.getGradesByStudent(studentId));
    }

    @PutMapping("/{id}")
    public ApiResponse<GradeResponse> updateGrade(@PathVariable Long id, @RequestBody @Valid GradeRequest request) {
        return new ApiResponse<>(1000, "Sửa đổi và cập nhật lại điểm số thành công!", gradeService.updateGrade(id, request));
    }

    @GetMapping
    public ApiResponse<List<GradeResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy toàn bộ danh sách điểm thành công!", gradeService.getAllGrades());
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteGrade(@PathVariable Long id) {
        gradeService.deleteGrade(id);
        return new ApiResponse<>(1000, "Xóa đầu điểm thành công!", "Đầu điểm có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }

    @GetMapping("/student/{studentId}/summary")
    public ApiResponse<StudentAcademicSummaryResponse> getAcademicSummary(@PathVariable String studentId) { // 🔥 String
        return new ApiResponse<>(1000, "Tổng hợp kết quả học tập và tính GPA thành công!", gradeService.getAcademicSummary(studentId));
    }

    @GetMapping("/{id}")
    public ApiResponse<GradeResponse> getGradeById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy chi tiết thông tin điểm số thành công!", gradeService.getGradeById(id));
    }

    // Thêm vào GradeController.java
    @DeleteMapping("/student/{studentId}/course-class/{courseClassId}")
    // @PreAuthorize("hasRole('ADMIN')") // Mở comment nếu bạn có dùng bảo mật phân quyền
    public ApiResponse<String> adminCancelCredit(
            @PathVariable String studentId,
            @PathVariable Long courseClassId) {

        gradeService.adminCancelCredit(studentId, courseClassId);
        return new ApiResponse<>(1000, "Rút tín chỉ thành công!", "Đã xóa hoàn toàn tín chỉ khỏi hồ sơ sinh viên.");
    }
}
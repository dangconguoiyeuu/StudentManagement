package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import com.dangdepzaivaio.StudentManagement.service.GradeExcelService;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import com.dangdepzaivaio.StudentManagement.util.ExcelHttpUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeService gradeService;
    private final GradeExcelService gradeExcelService;

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

    @DeleteMapping("/student/{studentId}/course-class/{courseClassId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<String> adminCancelCredit(
            @PathVariable String studentId,
            @PathVariable Long courseClassId) {

        gradeService.adminCancelCredit(studentId, courseClassId);
        return new ApiResponse<>(1000, "Rút tín chỉ thành công!", "Đã xóa hoàn toàn tín chỉ khỏi hồ sơ sinh viên.");
    }

    @GetMapping("/export/excel")
    public ResponseEntity<byte[]> exportGradesExcel() {
        byte[] content = gradeExcelService.exportGrades();
        return ExcelHttpUtil.toDownloadResponse(content, "bang-diem.xlsx");
    }

    @GetMapping("/export/template")
    public ResponseEntity<byte[]> downloadGradeImportTemplate() {
        byte[] content = gradeExcelService.exportImportTemplate();
        return ExcelHttpUtil.toDownloadResponse(content, "mau-nhap-diem.xlsx");
    }

    @PostMapping("/import/excel")
    public ApiResponse<ExcelImportResult> importGradesExcel(@RequestParam("file") MultipartFile file) {
        ExcelImportResult result = gradeExcelService.importGrades(file);
        return new ApiResponse<>(1000, "Nhap Excel diem so hoan tat!", result);
    }
}
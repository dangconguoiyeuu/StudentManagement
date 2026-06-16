package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.TeacherUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;
import com.dangdepzaivaio.StudentManagement.service.TeacherService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import com.dangdepzaivaio.StudentManagement.service.TeacherExcelService;
import com.dangdepzaivaio.StudentManagement.util.ExcelHttpUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("/teachers")
@RequiredArgsConstructor
public class TeacherController {

    private final TeacherService teacherService;
    private final TeacherExcelService teacherExcelService;

    @PostMapping
    public ApiResponse<TeacherResponse> createTeacher(@RequestBody @Valid TeacherCreationRequest request) {
        return new ApiResponse<>(1000, "Cap tai khoan giang vien thanh cong", teacherService.createTeacher(request));
    }

    @GetMapping
    public ApiResponse<List<TeacherResponse>> getAll() {
        return new ApiResponse<>(1000, "Lay danh sach giang vien thanh cong", teacherService.getAllTeachers());
    }

    @GetMapping("/{teacherId}")
    public ApiResponse<TeacherResponse> getTeacher(@PathVariable String teacherId) {
        return new ApiResponse<>(1000, "Lay chi tiet giang vien thanh cong", teacherService.getTeacherById(teacherId));
    }

    @PutMapping("/{teacherId}")
    public ApiResponse<TeacherResponse> updateTeacher(@PathVariable String teacherId, @RequestBody @Valid TeacherUpdateRequest request) {
        return new ApiResponse<>(1000, "Cap nhat giang vien thanh cong", teacherService.updateTeacher(teacherId, request));
    }

    @PutMapping("/{teacherId}/enable")
    public ApiResponse<String> enableTeacher(@PathVariable String teacherId) {
        teacherService.enableTeacher(teacherId);
        return new ApiResponse<>(1000, "Mo khoa tai khoan giang vien thanh cong", "ID: " + teacherId);
    }

    @DeleteMapping("/{teacherId}")
    public ApiResponse<String> deleteTeacher(@PathVariable String teacherId) {
        teacherService.disableTeacher(teacherId);
        return new ApiResponse<>(1000, "Khoa tai khoan giang vien thanh cong", "ID: " + teacherId);
    }
    @GetMapping("/export/excel")
    public ResponseEntity<byte[]> exportTeachersExcel(@RequestParam(required = false, defaultValue = "false") boolean includeInactive) {
        byte[] content = teacherExcelService.exportTeachers(includeInactive);
        return ExcelHttpUtil.toDownloadResponse(content, "danh-sach-giang-vien.xlsx");
    }

    @GetMapping("/export/template")
    public ResponseEntity<byte[]> downloadTeacherTemplate() {
        byte[] content = teacherExcelService.exportImportTemplate();
        return ExcelHttpUtil.toDownloadResponse(content, "mau-nhap-giang-vien.xlsx");
    }

    @PostMapping("/import/excel")
    public ApiResponse<ExcelImportResult> importTeachersExcel(@RequestParam("file") MultipartFile file) {
        return new ApiResponse<>(1000, "Nhập Excel giảng viên hoàn tất!", teacherExcelService.importTeachers(file));
    }

}

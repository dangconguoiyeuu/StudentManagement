package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import org.springframework.web.multipart.MultipartFile;

public interface TeacherExcelService {
    byte[] exportTeachers(boolean includeInactive);
    byte[] exportImportTemplate();
    ExcelImportResult importTeachers(MultipartFile file);
}
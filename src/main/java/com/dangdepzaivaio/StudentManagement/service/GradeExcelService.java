package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import org.springframework.web.multipart.MultipartFile;

public interface GradeExcelService {
    byte[] exportGrades();

    byte[] exportImportTemplate();

    ExcelImportResult importGrades(MultipartFile file);
}

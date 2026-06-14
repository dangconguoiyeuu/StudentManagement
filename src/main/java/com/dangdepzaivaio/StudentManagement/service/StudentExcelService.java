package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import org.springframework.web.multipart.MultipartFile;

public interface StudentExcelService {
    byte[] exportStudents(boolean includeInactive);

    byte[] exportImportTemplate();

    ExcelImportResult importStudents(MultipartFile file);
}

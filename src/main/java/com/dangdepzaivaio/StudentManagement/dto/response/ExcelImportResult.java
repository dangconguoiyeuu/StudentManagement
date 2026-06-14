package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.List;

public record ExcelImportResult(
        int successCount,
        int errorCount,
        List<String> errors
) {}

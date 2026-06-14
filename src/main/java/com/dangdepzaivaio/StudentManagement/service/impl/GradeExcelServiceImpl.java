package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.service.GradeExcelService;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import com.dangdepzaivaio.StudentManagement.util.ExcelWorkbookUtil;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GradeExcelServiceImpl implements GradeExcelService {

    private static final String[] EXPORT_HEADERS = {
            "Mã SV", "Tên SV", "Mã lớp HP", "Môn học", "Tín chỉ",
            "Điểm CC", "Điểm GK", "Điểm CK", "Điểm TB", "Điểm chữ", "Điểm hệ 4", "Trạng thái"
    };

    private static final String[] IMPORT_HEADERS = {
            "Mã SV", "Mã lớp HP", "Điểm CC", "Điểm GK", "Điểm CK"
    };

    private final GradeService gradeService;
    private final GradeRepository gradeRepository;
    private final StudentRepository studentRepository;
    private final CourseClassRepository courseClassRepository;

    @Override
    public byte[] exportGrades() {
        List<GradeResponse> grades = gradeService.getAllGrades();

        try (Workbook workbook = ExcelWorkbookUtil.createWorkbook()) {
            Sheet sheet = workbook.createSheet("Bảng điểm");
            CellStyle headerStyle = ExcelWorkbookUtil.headerStyle(workbook);
            ExcelWorkbookUtil.writeHeaderRow(sheet, headerStyle, EXPORT_HEADERS);

            int rowIdx = 1;
            for (GradeResponse grade : grades) {
                Row row = sheet.createRow(rowIdx++);
                row.createCell(0).setCellValue(nullSafe(grade.studentCode()));
                row.createCell(1).setCellValue(nullSafe(grade.studentName()));
                row.createCell(2).setCellValue(nullSafe(grade.courseClassCode()));
                row.createCell(3).setCellValue(nullSafe(grade.subjectName()));
                row.createCell(4).setCellValue(grade.credits() != null ? grade.credits() : 0);
                writeDouble(row, 5, grade.attendanceGrade());
                writeDouble(row, 6, grade.midtermGrade());
                writeDouble(row, 7, grade.finalGrade());
                writeDouble(row, 8, grade.overallGrade());
                row.createCell(9).setCellValue(nullSafe(grade.letterGrade()));
                writeDouble(row, 10, grade.grade4());
                row.createCell(11).setCellValue(nullSafe(grade.status()));
            }
            return ExcelWorkbookUtil.toBytes(workbook);
        } catch (IOException ex) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }

    @Override
    @Transactional
    public ExcelImportResult importGrades(MultipartFile file) {
        validateExcelFile(file);

        List<String> errors = new ArrayList<>();
        int successCount = 0;

        try (Workbook workbook = WorkbookFactory.create(file.getInputStream())) {
            Sheet sheet = workbook.getSheetAt(0);
            if (sheet.getLastRowNum() < 1) {
                throw new AppException(ErrorCode.EXCEL_NO_DATA);
            }

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null || isEmptyImportRow(row)) {
                    continue;
                }

                int excelRow = i + 1;
                String studentCode = ExcelWorkbookUtil.getCellString(row.getCell(0));
                String courseClassCode = ExcelWorkbookUtil.getCellString(row.getCell(1));
                Double attendance = ExcelWorkbookUtil.getCellDouble(row.getCell(2));
                Double midterm = ExcelWorkbookUtil.getCellDouble(row.getCell(3));
                Double finalGrade = ExcelWorkbookUtil.getCellDouble(row.getCell(4));

                if (studentCode.isBlank() || courseClassCode.isBlank()) {
                    errors.add("Dòng " + excelRow + ": Mã SV và Mã lớp HP không được để trống.");
                    continue;
                }

                Student student = studentRepository.findByStudentCode(studentCode).orElse(null);
                if (student == null) {
                    errors.add("Dòng " + excelRow + ": Không tìm thấy sinh viên [" + studentCode + "].");
                    continue;
                }

                CourseClass courseClass = courseClassRepository.findByCode(courseClassCode).orElse(null);
                if (courseClass == null) {
                    errors.add("Dòng " + excelRow + ": Không tìm thấy lớp học phần [" + courseClassCode + "].");
                    continue;
                }

                Grade grade = gradeRepository.findByStudentIdAndCourseClassId(student.getId(), courseClass.getId())
                        .orElse(null);
                if (grade == null) {
                    errors.add("Dòng " + excelRow + ": Sinh viên chưa đăng ký lớp [" + courseClassCode + "].");
                    continue;
                }

                if (hasRole("ROLE_TEACHER") && !isAssignedTeacher(courseClass)) {
                    errors.add("Dòng " + excelRow + ": Bạn không được nhập điểm lớp [" + courseClassCode + "].");
                    continue;
                }

                try {
                    GradeRequest request = new GradeRequest(
                            student.getId(),
                            courseClass.getId(),
                            attendance != null ? attendance : 0.0,
                            midterm != null ? midterm : 0.0,
                            finalGrade != null ? finalGrade : 0.0
                    );
                    gradeService.updateGrade(grade.getId(), request);
                    successCount++;
                } catch (AppException ex) {
                    errors.add("Dòng " + excelRow + ": " + ex.getErrorCode().getMessage());
                } catch (Exception ex) {
                    errors.add("Dòng " + excelRow + ": " + ex.getMessage());
                }
            }
        } catch (IOException ex) {
            throw new AppException(ErrorCode.EXCEL_FILE_INVALID);
        }

        return new ExcelImportResult(successCount, errors.size(), errors);
    }

    public byte[] exportImportTemplate() {
        try (Workbook workbook = ExcelWorkbookUtil.createWorkbook()) {
            Sheet sheet = workbook.createSheet("Mẫu nhập điểm");
            CellStyle headerStyle = ExcelWorkbookUtil.headerStyle(workbook);
            ExcelWorkbookUtil.writeHeaderRow(sheet, headerStyle, IMPORT_HEADERS);

            Row sample = sheet.createRow(1);
            sample.createCell(0).setCellValue("B21CNPM001");
            sample.createCell(1).setCellValue("CNPM101-01");
            sample.createCell(2).setCellValue(8.0);
            sample.createCell(3).setCellValue(7.5);
            sample.createCell(4).setCellValue(8.5);

            Sheet guide = workbook.createSheet("Hướng dẫn");
            guide.createRow(0).createCell(0).setCellValue("Cột bắt buộc: Mã SV, Mã lớp HP");
            guide.createRow(1).createCell(0).setCellValue("Điểm CC, GK, CK thang 0-10");
            guide.createRow(2).createCell(0).setCellValue("Sinh viên phải đã đăng ký lớp học phần tương ứng");

            return ExcelWorkbookUtil.toBytes(workbook);
        } catch (IOException ex) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }

    private boolean isAssignedTeacher(CourseClass courseClass) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        return courseClass.getTeacher() != null
                && courseClass.getTeacher().getUser() != null
                && email.equalsIgnoreCase(courseClass.getTeacher().getUser().getEmail());
    }

    private boolean hasRole(String role) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(role));
    }

    private void validateExcelFile(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new AppException(ErrorCode.EXCEL_FILE_EMPTY);
        }
        String name = file.getOriginalFilename();
        if (name == null || (!name.endsWith(".xlsx") && !name.endsWith(".xls"))) {
            throw new AppException(ErrorCode.EXCEL_FILE_INVALID);
        }
    }

    private boolean isEmptyImportRow(Row row) {
        for (int i = 0; i <= 4; i++) {
            if (!ExcelWorkbookUtil.getCellString(row.getCell(i)).isBlank()) {
                return false;
            }
        }
        return true;
    }

    private void writeDouble(Row row, int col, Double value) {
        if (value != null) {
            row.createCell(col).setCellValue(value);
        } else {
            row.createCell(col).setCellValue("");
        }
    }

    private String nullSafe(String value) {
        return value != null ? value : "";
    }
}

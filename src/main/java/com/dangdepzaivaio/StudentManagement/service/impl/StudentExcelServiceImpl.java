package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.service.StudentExcelService;
import com.dangdepzaivaio.StudentManagement.service.StudentService;
import com.dangdepzaivaio.StudentManagement.util.ExcelWorkbookUtil;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentExcelServiceImpl implements StudentExcelService {

    private static final String[] EXPORT_HEADERS = {
            "STT", "Mã SV", "Họ", "Tên", "Ngày sinh", "Giới tính", "SDT",
            "Lớp hành chính", "Khoa", "Niên khóa", "Trạng thái", "Email"
    };

    private static final String[] IMPORT_HEADERS = {
            "Mã SV", "Họ", "Tên", "Ngày sinh", "Giới tính", "SDT", "Tên lớp hành chính", "Niên khóa"
    };

    private final StudentRepository studentRepository;
    private final ClassRepository classRepository;
    private final StudentService studentService;

    @Override
    public byte[] exportStudents(boolean includeInactive) {
        List<Student> students = includeInactive
                ? studentRepository.findAllStudentsWithJoinFetch()
                : studentRepository.findAllActiveStudentsWithJoinFetch();

        try (Workbook workbook = ExcelWorkbookUtil.createWorkbook()) {
            Sheet sheet = workbook.createSheet("Danh sách sinh viên");
            CellStyle headerStyle = ExcelWorkbookUtil.headerStyle(workbook);
            ExcelWorkbookUtil.writeHeaderRow(sheet, headerStyle, EXPORT_HEADERS);

            int rowIdx = 1;
            for (Student student : students) {
                Row row = sheet.createRow(rowIdx);
                row.createCell(0).setCellValue(rowIdx);
                row.createCell(1).setCellValue(student.getStudentCode());
                row.createCell(2).setCellValue(student.getFirstName());
                row.createCell(3).setCellValue(student.getLastName());
                row.createCell(4).setCellValue(
                        student.getDateOfBirth() != null ? student.getDateOfBirth().toString() : "");
                row.createCell(5).setCellValue(student.getGender() != null ? student.getGender() : "");
                row.createCell(6).setCellValue(student.getPhoneNumber() != null ? student.getPhoneNumber() : "");
                row.createCell(7).setCellValue(
                        student.getStudentClass() != null ? student.getStudentClass().getName() : "");
                row.createCell(8).setCellValue(
                        student.getStudentClass() != null && student.getStudentClass().getDepartment() != null
                                ? student.getStudentClass().getDepartment().getName() : "");
                row.createCell(9).setCellValue(student.getCohort() != null ? student.getCohort() : "");
                row.createCell(10).setCellValue(student.isActive() ? "Đang học" : "Đã khóa");
                row.createCell(11).setCellValue(
                        student.getUser() != null ? student.getUser().getEmail() : "");
                rowIdx++;
            }
            return ExcelWorkbookUtil.toBytes(workbook);
        } catch (IOException ex) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }

    @Override
    @Transactional
    public ExcelImportResult importStudents(MultipartFile file) {
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
                if (row == null || isEmptyRow(row)) {
                    continue;
                }

                int excelRow = i + 1;
                String studentCode = ExcelWorkbookUtil.getCellString(row.getCell(0));
                String firstName = ExcelWorkbookUtil.getCellString(row.getCell(1));
                String lastName = ExcelWorkbookUtil.getCellString(row.getCell(2));
                LocalDate dateOfBirth = ExcelWorkbookUtil.getCellDate(row.getCell(3));
                String gender = ExcelWorkbookUtil.getCellString(row.getCell(4));
                String phoneNumber = ExcelWorkbookUtil.getCellString(row.getCell(5));
                String className = ExcelWorkbookUtil.getCellString(row.getCell(6));
                String cohort = ExcelWorkbookUtil.getCellString(row.getCell(7));

                if (studentCode.isBlank() || firstName.isBlank() || lastName.isBlank()) {
                    errors.add("Dòng " + excelRow + ": Mã SV, Họ, Tên không được để trống.");
                    continue;
                }
                if (className.isBlank()) {
                    errors.add("Dòng " + excelRow + ": Tên lớp hành chính không được để trống.");
                    continue;
                }
                if (cohort.isBlank()) {
                    cohort = "Khoa 1";
                }

                Class studentClass = classRepository.findByName(className)
                        .orElse(null);
                if (studentClass == null) {
                    errors.add("Dòng " + excelRow + ": Không tìm thấy lớp hành chính [" + className + "].");
                    continue;
                }

                try {
                    StudentCreationRequest request = new StudentCreationRequest(
                            studentCode, firstName, lastName, dateOfBirth, gender, phoneNumber,
                            studentClass.getId(), cohort
                    );
                    studentService.createStudent(request);
                    successCount++;
                } catch (AppException ex) {
                    errors.add("Dòng " + excelRow + " (" + studentCode + "): " + ex.getErrorCode().getMessage());
                } catch (Exception ex) {
                    errors.add("Dòng " + excelRow + " (" + studentCode + "): " + ex.getMessage());
                }
            }
        } catch (IOException ex) {
            throw new AppException(ErrorCode.EXCEL_FILE_INVALID);
        }

        return new ExcelImportResult(successCount, errors.size(), errors);
    }

    public byte[] exportImportTemplate() {
        try (Workbook workbook = ExcelWorkbookUtil.createWorkbook()) {
            Sheet sheet = workbook.createSheet("Mẫu nhập sinh viên");
            CellStyle headerStyle = ExcelWorkbookUtil.headerStyle(workbook);
            ExcelWorkbookUtil.writeHeaderRow(sheet, headerStyle, IMPORT_HEADERS);

            Row sample = sheet.createRow(1);
            sample.createCell(0).setCellValue("B24CNPM001");
            sample.createCell(1).setCellValue("An");
            sample.createCell(2).setCellValue("Nguyen Van");
            sample.createCell(3).setCellValue("2004-01-15");
            sample.createCell(4).setCellValue("Nam");
            sample.createCell(5).setCellValue("0987654321");
            sample.createCell(6).setCellValue("D21CNPM1");
            sample.createCell(7).setCellValue("Khoa 1");

            Sheet guide = workbook.createSheet("Hướng dẫn");
            guide.createRow(0).createCell(0).setCellValue("Cột bắt buộc: Mã SV, Họ, Tên, Tên lớp hành chính");
            guide.createRow(1).createCell(0).setCellValue("Ngày sinh định dạng yyyy-MM-dd");
            guide.createRow(2).createCell(0).setCellValue("Tên lớp hành chính phải trùng khớp với hệ thống");

            return ExcelWorkbookUtil.toBytes(workbook);
        } catch (IOException ex) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
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

    private boolean isEmptyRow(Row row) {
        for (int i = 0; i <= 7; i++) {
            if (!ExcelWorkbookUtil.getCellString(row.getCell(i)).isBlank()) {
                return false;
            }
        }
        return true;
    }
}

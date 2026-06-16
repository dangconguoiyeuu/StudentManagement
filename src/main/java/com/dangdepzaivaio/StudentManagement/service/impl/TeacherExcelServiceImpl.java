package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ExcelImportResult;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.dangdepzaivaio.StudentManagement.service.TeacherExcelService;
import com.dangdepzaivaio.StudentManagement.service.TeacherService;
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
public class TeacherExcelServiceImpl implements TeacherExcelService {

    private static final String[] EXPORT_HEADERS = {
            "STT", "Mã GV", "Họ", "Tên", "Ngày sinh", "Giới tính", "SDT", "Khoa", "Trạng thái", "Email"
    };

    private static final String[] IMPORT_HEADERS = {
            "Mã GV", "Họ", "Tên", "Ngày sinh", "Giới tính", "SDT", "Tên Khoa"
    };

    private final TeacherRepository teacherRepository;
    private final DepartmentRepository departmentRepository;
    private final TeacherService teacherService;

    @Override
    public byte[] exportTeachers(boolean includeInactive) {
        List<Teacher> teachers = teacherRepository.findAllTeachersWithJoinFetch();
        if (!includeInactive) {
            teachers = teachers.stream().filter(Teacher::isActive).toList();
        }

        try (Workbook workbook = ExcelWorkbookUtil.createWorkbook()) {
            Sheet sheet = workbook.createSheet("Danh sách giảng viên");
            CellStyle headerStyle = ExcelWorkbookUtil.headerStyle(workbook);
            ExcelWorkbookUtil.writeHeaderRow(sheet, headerStyle, EXPORT_HEADERS);

            int rowIdx = 1;
            for (Teacher teacher : teachers) {
                Row row = sheet.createRow(rowIdx);
                row.createCell(0).setCellValue(rowIdx);
                row.createCell(1).setCellValue(teacher.getTeacherCode());
                row.createCell(2).setCellValue(teacher.getFirstName());
                row.createCell(3).setCellValue(teacher.getLastName());
                row.createCell(4).setCellValue(teacher.getDateOfBirth() != null ? teacher.getDateOfBirth().toString() : "");
                row.createCell(5).setCellValue(teacher.getGender() != null ? teacher.getGender() : "");
                row.createCell(6).setCellValue(teacher.getPhoneNumber() != null ? teacher.getPhoneNumber() : "");
                row.createCell(7).setCellValue(teacher.getDepartment() != null ? teacher.getDepartment().getName() : "");
                row.createCell(8).setCellValue(teacher.isActive() ? "Đang dạy" : "Đã khóa");
                row.createCell(9).setCellValue(teacher.getUser() != null ? teacher.getUser().getEmail() : "");
                rowIdx++;
            }
            return ExcelWorkbookUtil.toBytes(workbook);
        } catch (IOException ex) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }

    @Override
    @Transactional
    public ExcelImportResult importTeachers(MultipartFile file) {
        if (file == null || file.isEmpty()) throw new AppException(ErrorCode.EXCEL_FILE_EMPTY);
        List<String> errors = new ArrayList<>();
        int successCount = 0;

        try (Workbook workbook = WorkbookFactory.create(file.getInputStream())) {
            Sheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String teacherCode = ExcelWorkbookUtil.getCellString(row.getCell(0));
                String firstName = ExcelWorkbookUtil.getCellString(row.getCell(1));
                String lastName = ExcelWorkbookUtil.getCellString(row.getCell(2));
                LocalDate dateOfBirth = ExcelWorkbookUtil.getCellDate(row.getCell(3));
                String gender = ExcelWorkbookUtil.getCellString(row.getCell(4));
                String phoneNumber = ExcelWorkbookUtil.getCellString(row.getCell(5));
                String deptName = ExcelWorkbookUtil.getCellString(row.getCell(6));

                if (teacherCode.isBlank() || firstName.isBlank() || lastName.isBlank() || deptName.isBlank()) {
                    errors.add("Dòng " + (i + 1) + ": Thiếu trường dữ liệu bắt buộc.");
                    continue;
                }

                Department dept = departmentRepository.findAll().stream()
                        .filter(d -> d.getName().equalsIgnoreCase(deptName))
                        .findFirst().orElse(null);

                if (dept == null) {
                    errors.add("Dòng " + (i + 1) + ": Không tìm thấy khoa [" + deptName + "].");
                    continue;
                }

                try {
                    TeacherCreationRequest request = new TeacherCreationRequest(
                            teacherCode, firstName, lastName, dateOfBirth, gender, phoneNumber, dept.getId()
                    );
                    teacherService.createTeacher(request);
                    successCount++;
                } catch (Exception ex) {
                    errors.add("Dòng " + (i + 1) + " (" + teacherCode + "): " + ex.getMessage());
                }
            }
        } catch (IOException ex) {
            throw new AppException(ErrorCode.EXCEL_FILE_INVALID);
        }
        return new ExcelImportResult(successCount, errors.size(), errors);
    }

    @Override
    public byte[] exportImportTemplate() {
        try (Workbook workbook = ExcelWorkbookUtil.createWorkbook()) {
            Sheet sheet = workbook.createSheet("Mẫu nhập giảng viên");
            CellStyle headerStyle = ExcelWorkbookUtil.headerStyle(workbook);
            ExcelWorkbookUtil.writeHeaderRow(sheet, headerStyle, IMPORT_HEADERS);

            Row sample = sheet.createRow(1);
            sample.createCell(0).setCellValue("GV26003");
            sample.createCell(1).setCellValue("Anh");
            sample.createCell(2).setCellValue("Nguyễn Đình");
            sample.createCell(3).setCellValue("1990-05-20");
            sample.createCell(4).setCellValue("Nam");
            sample.createCell(5).setCellValue("0988888888");
            sample.createCell(6).setCellValue("Khoa Công nghệ Thông tin");

            return ExcelWorkbookUtil.toBytes(workbook);
        } catch (IOException ex) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }
}
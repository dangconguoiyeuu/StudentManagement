package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.GradeMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {

    private final GradeRepository gradeRepository;
    private final StudentRepository studentRepository;
    private final CourseClassRepository courseClassRepository;
    private final GradeMapper gradeMapper;

    @Override
    @Transactional
    public GradeResponse inputGrade(GradeRequest request) {
        if (gradeRepository.existsByStudentIdAndCourseClassId(request.studentId(), request.courseClassId())) {
            throw new AppException(ErrorCode.GRADE_EXISTED);
        }

        Student student = studentRepository.findById(request.studentId())
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        CourseClass courseClass = courseClassRepository.findById(request.courseClassId())
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));

        Grade grade = gradeMapper.toEntity(request);
        grade.setStudent(student);
        grade.setCourseClass(courseClass);

        calculateAndConvertGrade(grade);

        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    @Override
    public List<GradeResponse> getGradesByStudent(Long studentId) {
        if (!studentRepository.existsById(studentId)) {
            throw new AppException(ErrorCode.STUDENT_NOT_FOUND);
        }
        return gradeRepository.findByStudentId(studentId).stream()
                .map(gradeMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public GradeResponse updateGrade(Long id, GradeRequest request) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));

        gradeMapper.updateEntityFromRequest(request, grade);
        calculateAndConvertGrade(grade);

        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    @Override
    public StudentAcademicSummaryResponse getAcademicSummary(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        List<Grade> grades = gradeRepository.findByStudentId(studentId);

        int totalCredits = 0;
        double totalWeightedGrade10 = 0.0;
        double serverWeightedGrade4 = 0.0;

        for (Grade grade : grades) {
            // Kiểm tra an toàn: Nếu môn học chưa có điểm tổng kết (Null) -> Bỏ qua không cộng vào tích lũy GPA
            if (grade.getOverallGrade() == null || grade.getGrade4() == null) {
                continue;
            }

            // Đảm bảo dữ liệu liên kết không rỗng
            if (grade.getCourseClass() != null && grade.getCourseClass().getSubject() != null) {
                int credits = grade.getCourseClass().getSubject().getCredits();
                totalCredits += credits;
                totalWeightedGrade10 += (grade.getOverallGrade() * credits);
                serverWeightedGrade4 += (grade.getGrade4() * credits);
            }
        }

        double gpa10 = 0.0;
        double gpa4 = 0.0;
        if (totalCredits > 0) {
            gpa10 = totalWeightedGrade10 / totalCredits;
            gpa4 = serverWeightedGrade4 / totalCredits;
            gpa10 = Math.round(gpa10 * 100.0) / 100.0;
            gpa4 = Math.round(gpa4 * 100.0) / 100.0;
        }

        List<GradeResponse> details = grades.stream()
                .map(gradeMapper::toResponse)
                .toList();

        return new StudentAcademicSummaryResponse(
                student.getId(),
                student.getStudentCode(),
                student.getFirstName() + " " + student.getLastName(),
                student.getStudentClass() != null ? student.getStudentClass().getName() : "Chưa xếp lớp",
                details,
                totalCredits,
                gpa10,
                gpa4
        );
    }

    // ==================== LẤY TOÀN BỘ ĐIỂM HỆ THỐNG (GET ALL) ====================
    @Override
    public List<GradeResponse> getAllGrades() {
        return gradeRepository.findAll().stream()
                .map(gradeMapper::toResponse)
                .toList();
    }

    // ==================== LẤY CHI TIẾT 1 ĐẦU ĐIỂM (GET BY ID) ====================
    @Override
    public GradeResponse getGradeById(Long id) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        return gradeMapper.toResponse(grade);
    }

    // ==================== XÓA ĐẦU ĐIỂM (DELETE) ====================
    @Override
    @Transactional
    public void deleteGrade(Long id) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        gradeRepository.delete(grade);
    }

    // Thuật toán tính điểm ngầm
    // Thuật toán tính điểm ngầm an toàn tuyệt đối
    private void calculateAndConvertGrade(Grade grade) {
        // 🔥 Bảo vệ toán học: Nếu Frontend gửi null (ô input để trống), tự động hiểu là 0.0
        double attendance = grade.getAttendanceGrade() != null ? grade.getAttendanceGrade() : 0.0;
        double midterm = grade.getMidtermGrade() != null ? grade.getMidtermGrade() : 0.0;
        double finalG = grade.getFinalGrade() != null ? grade.getFinalGrade() : 0.0;

        double overall = (attendance * 0.1) + (midterm * 0.3) + (finalG * 0.6);

        overall = Math.round(overall * 100.0) / 100.0;
        grade.setOverallGrade(overall);

        if (overall >= 8.5) {
            grade.setLetterGrade("A");
            grade.setGrade4(4.0);
        } else if (overall >= 8.0) {
            grade.setLetterGrade("B+");
            grade.setGrade4(3.5);
        } else if (overall >= 7.0) {
            grade.setLetterGrade("B");
            grade.setGrade4(3.0);
        } else if (overall >= 6.5) {
            grade.setLetterGrade("C+");
            grade.setGrade4(2.5);
        } else if (overall >= 5.5) {
            grade.setLetterGrade("C");
            grade.setGrade4(2.0);
        } else if (overall >= 5.0) {
            grade.setLetterGrade("D+");
            grade.setGrade4(1.5);
        } else if (overall >= 4.0) {
            grade.setLetterGrade("D");
            grade.setGrade4(1.0);
        } else {
            grade.setLetterGrade("F");
            grade.setGrade4(0.0);
        }
    }
}
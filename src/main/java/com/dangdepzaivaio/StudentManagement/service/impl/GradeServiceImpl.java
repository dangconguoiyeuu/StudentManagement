package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.GradeMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {

    private final GradeRepository gradeRepository;
    private final StudentRepository studentRepository;
    private final CourseClassRepository courseClassRepository;
    private final UserRepository userRepository;
    private final GradeMapper gradeMapper;

    @Override
    @Transactional
    public GradeResponse inputGrade(GradeRequest request) {
        CourseClass courseClass = courseClassRepository.findByIdWithSubjectAndTeacher(request.courseClassId())
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
        assertTeacherAssigned(courseClass);

        Grade grade = gradeRepository.findByStudentIdAndCourseClassId(request.studentId(), request.courseClassId())
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_ENROLLED));

        gradeMapper.updateEntityFromRequest(request, grade);
        calculateAndConvertGrade(grade);

        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    @Override
    public List<GradeResponse> getGradesByStudent(String studentId) {
        if (!studentRepository.existsById(studentId)) {
            throw new AppException(ErrorCode.STUDENT_NOT_FOUND);
        }

        Authentication authentication = currentAuthentication();
        if (hasRole(authentication, "ROLE_STUDENT") && !currentUser().getId().equals(studentId)) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        return gradeRepository.findByStudentId(studentId).stream()
                .filter(grade -> !hasRole(authentication, "ROLE_TEACHER") || isAssignedTeacher(grade.getCourseClass(), authentication.getName()))
                .map(gradeMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public GradeResponse updateGrade(Long id, GradeRequest request) {
        Grade grade = gradeRepository.findByIdWithDetails(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        assertTeacherAssigned(grade.getCourseClass());

        gradeMapper.updateEntityFromRequest(request, grade);
        calculateAndConvertGrade(grade);
        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    // Thêm vào GradeServiceImpl.java
    @Override
    @Transactional
    public void adminCancelCredit(String studentId, Long courseClassId) {
        // Kiểm tra bản ghi tồn tại
        Grade grade = gradeRepository.findByStudentIdAndCourseClassId(studentId, courseClassId)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));

        gradeRepository.hardDeleteByStudentAndCourseClass(studentId, courseClassId);
    }

    @Override
    public StudentAcademicSummaryResponse getAcademicSummary(String studentId) {
        Authentication authentication = currentAuthentication();
        Student student = studentRepository.findByIdWithJoinFetch(studentId)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        if (hasRole(authentication, "ROLE_STUDENT") && !student.getUser().getEmail().equalsIgnoreCase(authentication.getName())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        List<Grade> grades = gradeRepository.findByStudentId(studentId).stream()
                .filter(grade -> !hasRole(authentication, "ROLE_TEACHER") || isAssignedTeacher(grade.getCourseClass(), authentication.getName()))
                .toList();

        int totalCredits = 0;
        double totalWeightedGrade10 = 0.0;
        double totalWeightedGrade4 = 0.0;

        for (Grade grade : grades) {
            if (grade.getOverallGrade() == null || grade.getGrade4() == null) {
                continue;
            }
            if (grade.getCourseClass() != null && grade.getCourseClass().getSubject() != null) {
                int credits = grade.getCourseClass().getSubject().getCredits();
                totalCredits += credits;
                totalWeightedGrade10 += grade.getOverallGrade() * credits;
                totalWeightedGrade4 += grade.getGrade4() * credits;
            }
        }

        double gpa10 = totalCredits == 0 ? 0.0 : Math.round((totalWeightedGrade10 / totalCredits) * 100.0) / 100.0;
        double gpa4 = totalCredits == 0 ? 0.0 : Math.round((totalWeightedGrade4 / totalCredits) * 100.0) / 100.0;

        List<GradeResponse> details = grades.stream().map(gradeMapper::toResponse).toList();
        return new StudentAcademicSummaryResponse(
                student.getId(),
                student.getStudentCode(),
                student.getFirstName() + " " + student.getLastName(),
                student.getStudentClass() != null ? student.getStudentClass().getName() : "Chua xep lop",
                details,
                totalCredits,
                gpa10,
                gpa4
        );
    }


    @Override
    public List<GradeResponse> getAllGrades() {
        Authentication authentication = currentAuthentication();

        if (hasRole(authentication, "ROLE_ADMIN")) {
            return gradeRepository.findAllGradesWithJoinFetch().stream().map(gradeMapper::toResponse).toList();
        }

        if (hasRole(authentication, "ROLE_TEACHER")) {
            return gradeRepository.findByCourseClassTeacherUserEmail(authentication.getName()).stream()
                    .map(gradeMapper::toResponse)
                    .toList();
        }

        if (hasRole(authentication, "ROLE_STUDENT")) {
            User user = currentUser();
            return gradeRepository.findByStudentId(user.getId()).stream().map(gradeMapper::toResponse).toList();
        }

        throw new AppException(ErrorCode.UNAUTHENTICATED);
    }

    @Override
    public GradeResponse getGradeById(Long id) {
        Grade grade = gradeRepository.findByIdWithDetails(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));

        Authentication authentication = currentAuthentication();
        if (hasRole(authentication, "ROLE_STUDENT") && !grade.getStudent().getUser().getEmail().equalsIgnoreCase(authentication.getName())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }
        if (hasRole(authentication, "ROLE_TEACHER") && !isAssignedTeacher(grade.getCourseClass(), authentication.getName())) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }

        return gradeMapper.toResponse(grade);
    }



    @Override
    @Transactional
    public void deleteGrade(Long id) {
        Grade grade = gradeRepository.findByIdWithDetails(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        assertTeacherAssigned(grade.getCourseClass());
        gradeRepository.delete(grade);
    }

    private void assertTeacherAssigned(CourseClass courseClass) {
        Authentication authentication = currentAuthentication();
        if (hasRole(authentication, "ROLE_TEACHER") && !isAssignedTeacher(courseClass, authentication.getName())) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }
    }

    private boolean isAssignedTeacher(CourseClass courseClass, String email) {
        return courseClass != null
                && courseClass.getTeacher() != null
                && courseClass.getTeacher().getUser() != null
                && email.equalsIgnoreCase(courseClass.getTeacher().getUser().getEmail());
    }

    private Authentication currentAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    private User currentUser() {
        String email = currentAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));
    }

    private boolean hasRole(Authentication authentication, String role) {
        return authentication.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(role));
    }

    private void calculateAndConvertGrade(Grade grade) {
        double attendance = grade.getAttendanceGrade() != null ? grade.getAttendanceGrade() : 0.0;
        double midterm = grade.getMidtermGrade() != null ? grade.getMidtermGrade() : 0.0;
        double finalG = grade.getFinalGrade() != null ? grade.getFinalGrade() : 0.0;
        double overall = Math.round(((attendance * 0.1) + (midterm * 0.3) + (finalG * 0.6)) * 100.0) / 100.0;
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

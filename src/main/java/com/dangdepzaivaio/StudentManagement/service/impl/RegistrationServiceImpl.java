package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.mapper.GradeMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.RegistrationPeriodRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegistrationServiceImpl {

    private final RegistrationPeriodRepository periodRepository;
    private final CourseClassRepository courseClassRepository;
    private final StudentRepository studentRepository;
    private final UserRepository userRepository;
    private final GradeRepository gradeRepository;
    private final CourseClassMapper courseClassMapper;
    private final GradeMapper gradeMapper;

    @Transactional
    public void registerCourseClass(Long courseClassId) {
        Student student = getCurrentStudent();
        CourseClass courseClass = getCourseClass(courseClassId);

        assertRegistrationOpen(courseClass);

        if (gradeRepository.existsByStudentIdAndCourseClassId(student.getId(), courseClassId)) {
            throw new AppException(ErrorCode.GRADE_EXISTED);
        }

        long registered = gradeRepository.countByCourseClassId(courseClassId);
        int maxStudents = courseClass.getMaxStudents() == null ? 60 : courseClass.getMaxStudents();
        if (registered >= maxStudents) {
            throw new AppException(ErrorCode.COURSE_CLASS_FULL);
        }

        Grade enrollment = Grade.builder()
                .student(student)
                .courseClass(courseClass)
                .status("PENDING")
                .build();

        gradeRepository.save(enrollment);
    }

    @Transactional
    public void cancelRegistration(Long courseClassId) {
        Student student = getCurrentStudent();
        CourseClass courseClass = getCourseClass(courseClassId);

        assertRegistrationOpen(courseClass);

        Grade grade = gradeRepository.findByStudentIdAndCourseClassId(student.getId(), courseClassId)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_ENROLLED));

        if (hasAnyGradeValue(grade)) {
            throw new AppException(ErrorCode.GRADE_ALREADY_ENTERED);
        }

        gradeRepository.delete(grade);
    }

    // ================= MỚI THÊM: HÀM XỬ LÝ DUYỆT ĐƠN =================
    @Transactional
    public void toggleApproveStatus(Long courseClassId, String studentId) {
        // Tìm đơn đăng ký của sinh viên
        Grade grade = gradeRepository.findByStudentIdAndCourseClassId(studentId, courseClassId)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_ENROLLED));

        if ("APPROVED".equalsIgnoreCase(grade.getStatus())) {
            // NẾU GIÁO VIÊN BẤM HỦY DUYỆT -> XÓA LUÔN ĐƠN KHỎI DATABASE
            gradeRepository.delete(grade);
        } else {
            // NẾU GIÁO VIÊN BẤM DUYỆT -> LƯU TRẠNG THÁI APPROVED
            grade.setStatus("APPROVED");
            gradeRepository.save(grade);
        }
    }

    public List<CourseClassResponse> getOpenCourseClasses() {
        LocalDateTime now = LocalDateTime.now();
        return courseClassRepository.findByOpenForRegistrationTrue().stream()
                .filter(courseClass -> periodRepository.findActivePeriod(courseClass.getSemester(), now).isPresent())
                .map(this::toResponseWithCount)
                .toList();
    }

    public List<GradeResponse> getCurrentStudentRegistrations() {
        Student student = getCurrentStudent();
        return gradeRepository.findByStudentId(student.getId()).stream()
                .map(gradeMapper::toResponse)
                .toList();
    }

    private CourseClass getCourseClass(Long courseClassId) {
        return courseClassRepository.findByIdWithSubjectAndTeacher(courseClassId)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
    }

    private void assertRegistrationOpen(CourseClass courseClass) {
        if (!courseClass.isOpenForRegistration()) {
            throw new AppException(ErrorCode.COURSE_CLASS_CLOSED);
        }

        periodRepository.findActivePeriod(courseClass.getSemester(), LocalDateTime.now())
                .orElseThrow(() -> new AppException(ErrorCode.REGISTRATION_PERIOD_CLOSED));
    }

    private Student getCurrentStudent() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        return studentRepository.findByIdWithJoinFetch(user.getId())
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));
    }

    private boolean hasAnyGradeValue(Grade grade) {
        return grade.getAttendanceGrade() != null
                || grade.getMidtermGrade() != null
                || grade.getFinalGrade() != null
                || grade.getOverallGrade() != null
                || grade.getLetterGrade() != null
                || grade.getGrade4() != null;
    }

    private CourseClassResponse toResponseWithCount(CourseClass courseClass) {
        courseClass.setRegisteredStudents(gradeRepository.countByCourseClassId(courseClass.getId()));
        return courseClassMapper.toResponse(courseClass);
    }
}

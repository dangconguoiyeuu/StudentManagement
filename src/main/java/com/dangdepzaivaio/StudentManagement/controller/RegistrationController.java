package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassStatResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.RegistrationPeriod;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.mapper.StudentMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.RegistrationPeriodRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.impl.RegistrationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registration")
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationServiceImpl registrationService;
    private final RegistrationPeriodRepository periodRepository;
    private final CourseClassRepository courseClassRepository;
    private final GradeRepository gradeRepository;
    private final UserRepository userRepository;
    private final CourseClassMapper courseClassMapper;
    private final StudentMapper studentMapper;

    @PostMapping("/periods")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> createPeriod(@RequestBody RegistrationPeriod period) {
        period.setActive(true);
        return new ApiResponse<>(1000, "Mo cong dang ky tin chi thanh cong", periodRepository.save(period));
    }

    @GetMapping("/periods")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<List<RegistrationPeriod>> getPeriods() {
        return new ApiResponse<>(1000, "Lay danh sach cong dang ky thanh cong", periodRepository.findAll());
    }

    @PutMapping("/periods/{id}/open")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> openPeriod(@PathVariable Long id) {
        RegistrationPeriod period = periodRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.VALIDATION_ERROR));
        period.setActive(true);
        return new ApiResponse<>(1000, "Da mo cong dang ky", periodRepository.save(period));
    }

    @PutMapping("/periods/{id}/close")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> closePeriod(@PathVariable Long id) {
        RegistrationPeriod period = periodRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.VALIDATION_ERROR));
        period.setActive(false);
        return new ApiResponse<>(1000, "Da dong cong dang ky", periodRepository.save(period));
    }

    @GetMapping("/statistics")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<List<CourseClassStatResponse>> getStats() {
        return new ApiResponse<>(1000, "Tai thong ke dang ky thanh cong", courseClassRepository.getRegistrationStatistics());
    }

    @PutMapping("/course-class/{id}/toggle")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> toggleCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(!courseClass.isOpenForRegistration());
        return new ApiResponse<>(1000, "Cap nhat trang thai lop hoc phan thanh cong",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @PutMapping("/course-class/{id}/open")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> openCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(true);
        return new ApiResponse<>(1000, "Da mo lop hoc phan cho dang ky",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @PutMapping("/course-class/{id}/close")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> closeCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(false);
        return new ApiResponse<>(1000, "Da dong lop hoc phan",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @GetMapping("/teacher/{teacherId}/classes")
    @PreAuthorize("hasRole('TEACHER')")
    public ApiResponse<List<CourseClassResponse>> getTeacherClasses(@PathVariable String teacherId) {
        assertTeacherSelf(teacherId);
        List<CourseClassResponse> list = courseClassRepository.findByTeacherId(teacherId).stream()
                .map(this::toResponseWithCount)
                .toList();
        return new ApiResponse<>(1000, "Tai lich giang day thanh cong", list);
    }

    @GetMapping("/classes/{classId}/students")
    @PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
    public ApiResponse<List<StudentResponse>> getStudentsInCourseClass(@PathVariable Long classId) {
        assertTeacherAssignedIfNeeded(classId);
        List<StudentResponse> list = gradeRepository.findByCourseClassId(classId).stream()
                .map(g -> studentMapper.toResponse(g.getStudent()))
                .toList();
        return new ApiResponse<>(1000, "Tai danh sach sinh vien lop hoc phan thanh cong", list);
    }

    @GetMapping("/open-course-classes")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<List<CourseClassResponse>> getOpenCourseClasses() {
        return new ApiResponse<>(1000, "Tai danh sach lop hoc phan dang mo thanh cong",
                registrationService.getOpenCourseClasses());
    }

    @GetMapping("/my-classes")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<List<GradeResponse>> getMyRegisteredClasses() {
        return new ApiResponse<>(1000, "Tai danh sach lop hoc phan da dang ky thanh cong",
                registrationService.getCurrentStudentRegistrations());
    }

    @PostMapping("/enroll")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<String> enroll(@RequestParam Long courseClassId) {
        registrationService.registerCourseClass(courseClassId);
        return new ApiResponse<>(1000, "Dang ky lop hoc phan thanh cong", "OK");
    }

    @DeleteMapping("/unenroll")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<String> unenroll(@RequestParam Long courseClassId) {
        registrationService.cancelRegistration(courseClassId);
        return new ApiResponse<>(1000, "Huy dang ky lop hoc phan thanh cong", "OK");
    }

    private CourseClass getCourseClass(Long id) {
        return courseClassRepository.findByIdWithSubjectAndTeacher(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
    }

    private CourseClassResponse toResponseWithCount(CourseClass courseClass) {
        courseClass.setRegisteredStudents(gradeRepository.countByCourseClassId(courseClass.getId()));
        return courseClassMapper.toResponse(courseClass);
    }

    private void assertTeacherSelf(String teacherId) {
        User user = currentUser();
        if (!user.getId().equals(teacherId)) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }
    }

    private void assertTeacherAssignedIfNeeded(Long courseClassId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean isTeacher = authentication.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_TEACHER"));
        if (!isTeacher) {
            return;
        }

        CourseClass courseClass = getCourseClass(courseClassId);
        String email = authentication.getName();
        if (courseClass.getTeacher() == null
                || courseClass.getTeacher().getUser() == null
                || !email.equalsIgnoreCase(courseClass.getTeacher().getUser().getEmail())) {
            throw new AppException(ErrorCode.TEACHER_NOT_ASSIGNED_TO_CLASS);
        }
    }

    private User currentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));
    }
}

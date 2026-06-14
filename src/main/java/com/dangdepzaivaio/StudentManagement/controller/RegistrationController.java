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
        period.setIsActive(true);
        return new ApiResponse<>(1000, "Mở cổng đăng ký tín chỉ thành công", periodRepository.save(period));
    }

    @GetMapping("/periods")
    // 🔥 ĐÃ SỬA: Cho phép cả Học sinh và Giáo viên gọi API này để xem lịch đóng/mở cổng công khai
    @PreAuthorize("hasAnyRole('ADMIN', 'STUDENT', 'TEACHER')")
    public ApiResponse<List<RegistrationPeriod>> getPeriods() {
        return new ApiResponse<>(1000, "Lấy danh sách cổng đăng ký thành công", periodRepository.findAll());
    }

    @PutMapping("/periods/{id}/open")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> openPeriod(@PathVariable Long id) {
        RegistrationPeriod period = periodRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.REGISTRATION_PERIOD_NOT_FOUND));
        period.setIsActive(true);
        return new ApiResponse<>(1000, "Đã mở cổng đăng ký", periodRepository.save(period));
    }

    @PutMapping("/periods/{id}/close")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> closePeriod(@PathVariable Long id) {
        RegistrationPeriod period = periodRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.REGISTRATION_PERIOD_NOT_FOUND));
        period.setIsActive(false);
        return new ApiResponse<>(1000, "Đã đóng cổng đăng ký", periodRepository.save(period));
    }

    @GetMapping("/statistics")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<List<CourseClassStatResponse>> getStats() {
        return new ApiResponse<>(1000, "Tải thống kê đăng ký thành công", courseClassRepository.getRegistrationStatistics());
    }

    @PutMapping("/course-class/{id}/toggle")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> toggleCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(!courseClass.isOpenForRegistration());
        return new ApiResponse<>(1000, "Cập nhật trạng thái lớp học phần thành công",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @PutMapping("/course-class/{id}/open")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> openCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(true);
        return new ApiResponse<>(1000, "Đã mở lớp học phần cho đăng ký",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @PutMapping("/course-class/{id}/close")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<CourseClassResponse> closeCourseClass(@PathVariable Long id) {
        CourseClass courseClass = getCourseClass(id);
        courseClass.setOpenForRegistration(false);
        return new ApiResponse<>(1000, "Đã đóng lớp học phần",
                toResponseWithCount(courseClassRepository.save(courseClass)));
    }

    @GetMapping("/teacher/{teacherId}/classes")
    @PreAuthorize("hasRole('TEACHER')")
    public ApiResponse<List<CourseClassResponse>> getTeacherClasses(@PathVariable String teacherId) {
        assertTeacherSelf(teacherId);
        List<CourseClassResponse> list = courseClassRepository.findByTeacherId(teacherId).stream()
                .map(this::toResponseWithCount)
                .toList();
        return new ApiResponse<>(1000, "Tải lịch giảng dạy thành công", list);
    }

    @GetMapping("/classes/{classId}/students")
    @PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
    public ApiResponse<List<StudentResponse>> getStudentsInCourseClass(@PathVariable Long classId) {
        assertTeacherAssignedIfNeeded(classId);
        List<StudentResponse> list = gradeRepository.findByCourseClassId(classId).stream()
                .map(g -> studentMapper.toResponse(g.getStudent()))
                .toList();
        return new ApiResponse<>(1000, "Tải danh sách sinh viên lớp học phần thành công", list);
    }

    @GetMapping("/open-course-classes")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<List<CourseClassResponse>> getOpenCourseClasses() {
        return new ApiResponse<>(1000, "Tải danh sách lớp học phần đang mở thành công",
                registrationService.getOpenCourseClasses());
    }

    @GetMapping("/my-classes")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<List<GradeResponse>> getMyRegisteredClasses() {
        return new ApiResponse<>(1000, "Tải danh sách lớp học phần đã đăng ký thành công",
                registrationService.getCurrentStudentRegistrations());
    }

    @PostMapping("/enroll")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<String> enroll(@RequestParam Long courseClassId) {
        registrationService.registerCourseClass(courseClassId);
        return new ApiResponse<>(1000, "Đăng ký lớp học phần thành công", "OK");
    }

    @DeleteMapping("/unenroll")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponse<String> unenroll(@RequestParam Long courseClassId) {
        registrationService.cancelRegistration(courseClassId);
        return new ApiResponse<>(1000, "Hủy đăng ký lớp học phần thành công", "OK");
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

    // ================== THÊM MỚI API DUYỆT ĐƠN ==================
    @PutMapping("/classes/{classId}/students/{studentId}/toggle-approve")
    @PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
    public ApiResponse<String> toggleApproveStudent(
            @PathVariable Long classId,
            @PathVariable String studentId) { // Nhận chuẩn chuỗi "HS_01" từ Frontend

        // 1. Kiểm tra xem giảng viên đang thao tác có đúng là người dạy lớp này không
        assertTeacherAssignedIfNeeded(classId);

        // 2. Gọi Service để xử lý logic lưu trạng thái duyệt vào Database
        registrationService.toggleApproveStatus(classId, studentId);

        return new ApiResponse<>(1000, "Cập nhật trạng thái duyệt đơn thành công", "OK");
    }
}

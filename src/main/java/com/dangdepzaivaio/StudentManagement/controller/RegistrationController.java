package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassStatResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.RegistrationPeriod;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.mapper.StudentMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.RegistrationPeriodRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.service.impl.RegistrationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/registration")
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationServiceImpl registrationService;
    private final RegistrationPeriodRepository periodRepository;
    private final CourseClassRepository courseClassRepository;
    private final GradeRepository gradeRepository;
    private final UserRepository userRepository;
    private final ClassRepository classRepository;
    private final StudentRepository studentRepository;
    private final CourseClassMapper courseClassMapper;
    private final StudentMapper studentMapper;

    @PostMapping("/periods")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponse<RegistrationPeriod> createPeriod(@RequestBody RegistrationPeriod period) {
        period.setIsActive(true);
        return new ApiResponse<>(1000, "Mở cổng đăng ký tín chỉ thành công", periodRepository.save(period));
    }

    @GetMapping("/periods")
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

    // ====================================================================================
    // 🔥 CÁC API DÀNH RIÊNG CHO CHỨC NĂNG CỦA CỐ VẤN HỌC TẬP (ĐÃ SỬA THEO YÊU CẦU CỦA BẠN)
    // ====================================================================================

    @GetMapping("/teacher/advisor-class")
    @PreAuthorize("hasRole('TEACHER')")
    public ApiResponse<Map<String, Object>> getMyAdvisorClass() {
        User user = currentUser();

        com.dangdepzaivaio.StudentManagement.entity.Class studentClass = classRepository.findByAdvisorTeacherId(user.getId())
                .stream().findFirst()
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        List<StudentResponse> studentsList = studentRepository.findByStudentClassId(studentClass.getId()).stream()
                .map(studentMapper::toResponse)
                .toList();

        Map<String, Object> response = new HashMap<>();
        response.put("className", studentClass.getName());
        response.put("students", studentsList);

        return new ApiResponse<>(1000, "Tải thông tin lớp cố vấn thành công", response);
    }

    @GetMapping("/teacher/advisor/pending-students")
    @PreAuthorize("hasRole('TEACHER')")
    public ApiResponse<List<Map<String, Object>>> getPendingStudentsForAdvisor() {
        User user = currentUser();
        List<Map<String, Object>> result = new ArrayList<>();

        // 🟢 FIX THÔNG MINH: Tìm kiếm danh sách an toàn, tránh sử dụng .orElseThrow() gây crash lỗi 500/404 khi không tìm thấy lớp chủ nhiệm
        java.util.Optional<com.dangdepzaivaio.StudentManagement.entity.Class> advisorClassOpt =
                classRepository.findByAdvisorTeacherId(user.getId()).stream().findFirst();

        // Nếu giảng viên thuần túy đi dạy, không làm cố vấn lớp nào -> Trả về danh sách rỗng [] kèm mã 1000 (Thành công) luôn, không báo lỗi hoang mang
        if (advisorClassOpt.isEmpty()) {
            return new ApiResponse<>(1000, "Tài khoản giảng viên không được phân công làm Cố vấn học tập cho lớp nào.", result);
        }

        // Nếu giảng viên có lớp chủ nhiệm cố vấn, bóc tách thực thể và quét dữ liệu như thường lệ
        com.dangdepzaivaio.StudentManagement.entity.Class advisorClass = advisorClassOpt.get();
        List<Student> studentsInClass = studentRepository.findByStudentClassId(advisorClass.getId());

        // Phòng ngừa lỗi mảng trống nếu lớp hành chính mới tạo chưa kịp gán học sinh vào học
        if (studentsInClass.isEmpty()) {
            return new ApiResponse<>(1000, "Lớp hành chính chủ nhiệm hiện tại chưa có sinh viên.", result);
        }

        List<String> studentIds = studentsInClass.stream().map(Student::getId).toList();
        List<Grade> registrations = gradeRepository.findAllByStudentIdIn(studentIds);

        for (Grade g : registrations) {
            Map<String, Object> map = new HashMap<>();
            map.put("registrationId", g.getId());
            map.put("studentId", g.getStudent().getId());
            map.put("studentCode", g.getStudent().getStudentCode());
            map.put("studentName", g.getStudent().getLastName() + " " + g.getStudent().getFirstName());
            map.put("courseClassName", g.getCourseClass().getSubject().getName());
            map.put("courseClassCode", g.getCourseClass().getCode());
            map.put("status", g.getStatus());
            result.add(map);
        }

        return new ApiResponse<>(1000, "Tải danh sách đăng ký lớp cố vấn thành công", result);
    }

    @PutMapping("/teacher/advisor/approve/{registrationId}")
    @PreAuthorize("hasRole('TEACHER')")
    public ApiResponse<String> toggleApproveRegistration(@PathVariable Long registrationId) {
        registrationService.toggleApproveStatusByRegistrationId(registrationId);
        return new ApiResponse<>(1000, "Cập nhật trạng thái duyệt tín chỉ thành công", "OK");
    }
}
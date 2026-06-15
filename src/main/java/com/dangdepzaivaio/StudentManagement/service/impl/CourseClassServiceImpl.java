package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.SubjectRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.dangdepzaivaio.StudentManagement.service.CourseClassService;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseClassServiceImpl implements CourseClassService {

    private final CourseClassRepository courseClassRepository;
    private final SubjectRepository subjectRepository;
    private final TeacherRepository teacherRepository;
    private final CourseClassMapper courseClassMapper;
    private final GradeRepository gradeRepository;

    @Override
    @Transactional
    public CourseClassResponse createCourseClass(CourseClassRequest request) {
        if (courseClassRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.COURSE_CLASS_EXISTED);
        }

        // 🔥 KÍCH HOẠT: Kiểm tra trùng lịch trước khi lưu dữ liệu mới
        validateScheduleConflict(null, request.teacherId(), request.schedule());

        Subject subject = subjectRepository.findById(request.subjectId())
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));

        CourseClass courseClass = courseClassMapper.toEntity(request);
        courseClass.setSubject(subject);
        applyTeacherAndDefaults(courseClass, request);
        return toResponseWithCount(courseClassRepository.save(courseClass));
    }

    @Override
    public List<CourseClassResponse> getAllCourseClasses() {
        return courseClassRepository.findAllWithSubjectAndTeacher().stream()
                .map(this::toResponseWithCount)
                .toList();
    }

    @Override
    public CourseClassResponse getCourseClassById(Long id) {
        CourseClass courseClass = courseClassRepository.findByIdWithSubjectAndTeacher(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
        return toResponseWithCount(courseClass);
    }

    @Override
    @Transactional
    public CourseClassResponse updateCourseClass(Long id, CourseClassRequest request) {
        CourseClass courseClass = courseClassRepository.findByIdWithSubjectAndTeacher(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));

        if (!courseClass.getCode().equals(request.code()) && courseClassRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.COURSE_CLASS_EXISTED);
        }

        // 🔥 KÍCH HOẠT: Kiểm tra trùng lịch trước khi cập nhật dữ liệu
        validateScheduleConflict(id, request.teacherId(), request.schedule());

        Subject subject = subjectRepository.findById(request.subjectId())
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));

        courseClassMapper.updateEntityFromRequest(request, courseClass);
        courseClass.setSubject(subject);
        applyTeacherAndDefaults(courseClass, request);
        return toResponseWithCount(courseClassRepository.save(courseClass));
    }

    @Override
    @Transactional
    public void deleteCourseClass(Long id) {
        CourseClass courseClass = courseClassRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));

        if (gradeRepository.existsByCourseClassId(id)) {
            throw new AppException(ErrorCode.COURSE_CLASS_HAS_GRADES);
        }

        courseClassRepository.delete(courseClass);
    }

    private void applyTeacherAndDefaults(CourseClass courseClass, CourseClassRequest request) {
        if (request.teacherId() == null || request.teacherId().isBlank()) {
            courseClass.setTeacher(null);
        } else {
            Teacher teacher = teacherRepository.findById(request.teacherId())
                    .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
            courseClass.setTeacher(teacher);
        }

        if (courseClass.getMaxStudents() == null || courseClass.getMaxStudents() < 1) {
            courseClass.setMaxStudents(60);
        }

        if (request.openForRegistration() != null) {
            courseClass.setOpenForRegistration(request.openForRegistration());
        }
    }

    private CourseClassResponse toResponseWithCount(CourseClass courseClass) {
        courseClass.setRegisteredStudents(gradeRepository.countByCourseClassId(courseClass.getId()));
        return courseClassMapper.toResponse(courseClass);
    }
    private void validateScheduleConflict(Long currentClassId, String teacherId, String schedule) {
        if (schedule == null || schedule.isBlank()) return;

        // Lấy toàn bộ danh sách lớp học phần hiện có trên hệ thống
        List<CourseClass> allClasses = courseClassRepository.findAll();

        // Tách chuỗi thời gian gửi lên thành mảng các buổi riêng biệt
        String[] newSlots = schedule.split("\\s*\\|\\s*");

        for (CourseClass existingClass : allClasses) {
            // Nếu đang chỉnh sửa (Update), bỏ qua không đối chiếu với chính nó
            if (currentClassId != null && existingClass.getId().equals(currentClassId)) {
                continue;
            }
            if (existingClass.getSchedule() == null || existingClass.getSchedule().isBlank()) {
                continue;
            }

            // Tách chuỗi thời gian của lớp dưới DB
            String[] existingSlots = existingClass.getSchedule().split("\\s*\\|\\s*");

            for (String newSlot : newSlots) {
                for (String existingSlot : existingSlots) {
                    // Chuỗi mẫu: "Thứ 2 Sáng (Tiết 1-4) - Phòng 402" -> Tách theo dấu gạch ngang " - "
                    String[] newParts = newSlot.split("\\s*-\\s*");
                    String[] existParts = existingSlot.split("\\s*-\\s*");

                    if (newParts.length < 2 || existParts.length < 2) continue;

                    String newTime = newParts[0].trim().toLowerCase(); // "thứ 2 sáng (tiết 1-4)"
                    String newRoom = newParts[1].trim().toLowerCase(); // "phòng 402"

                    String existTime = existParts[0].trim().toLowerCase();
                    String existRoom = existParts[1].trim().toLowerCase();

                    // Nếu trùng khít thời gian (Thứ + Ca học)
                    if (newTime.equals(existTime)) {
                        // Kiểm tra 1: Trùng Phòng học
                        if (newRoom.equals(existRoom)) {
                            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                    "Xung đột lịch: Phòng học [" + newParts[1] + "] đã bị chiếm dụng bởi lớp [" + existingClass.getCode() + "] tại thời điểm " + newParts[0]);
                        }
                        // Kiểm tra 2: Trùng Giảng viên
                        if (teacherId != null && existingClass.getTeacher() != null
                                && teacherId.equals(existingClass.getTeacher().getId())) {
                            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                    "Xung đột lịch: Giảng viên đã có lịch dạy lớp [" + existingClass.getCode() + "] tại thời điểm " + newParts[0]);
                        }
                    }
                }
            }
        }
    }
}

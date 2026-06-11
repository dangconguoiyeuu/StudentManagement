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
}

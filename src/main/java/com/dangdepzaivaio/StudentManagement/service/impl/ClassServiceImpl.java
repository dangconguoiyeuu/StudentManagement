package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.ClassMapper;
import com.dangdepzaivaio.StudentManagement.mapper.StudentMapper;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.dangdepzaivaio.StudentManagement.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassServiceImpl implements ClassService {
    private final ClassRepository classRepository;
    private final DepartmentRepository departmentRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;
    private final ClassMapper classMapper;
    private final StudentMapper studentMapper;

    @Override
    @Transactional
    public ClassResponse createClass(ClassRequest request) {
        if (classRepository.existsByName(request.name())) {
            throw new AppException(ErrorCode.CLASS_EXISTED);
        }
        Department department = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        Class studentClass = classMapper.toEntity(request);
        studentClass.setDepartment(department);

        if (request.advisorTeacherId() != null && !request.advisorTeacherId().isBlank()) {
            Teacher teacher = teacherRepository.findById(request.advisorTeacherId())
                    .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
            studentClass.setAdvisorTeacher(teacher);
        }
        return classMapper.toResponse(classRepository.save(studentClass));
    }

    @Override
    @Transactional(readOnly = true) // 🔥 THÊM MỚI: Giúp giữ mở kết nối DB khi Mapper thực hiện đổi Entity sang Response DTO
    public List<ClassResponse> getAllClasses() {
        return classRepository.findAllClassesWithJoinFetch().stream()
                .map(classMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public ClassResponse updateClass(Long id, ClassRequest request) {
        Class studentClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        if (!studentClass.getName().equals(request.name()) && classRepository.existsByName(request.name())) {
            throw new AppException(ErrorCode.CLASS_EXISTED);
        }

        Department department = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        classMapper.updateEntityFromRequest(request, studentClass);
        studentClass.setDepartment(department);

        if (request.advisorTeacherId() != null && !request.advisorTeacherId().isBlank()) {
            Teacher teacher = teacherRepository.findById(request.advisorTeacherId())
                    .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
            studentClass.setAdvisorTeacher(teacher);
        } else {
            studentClass.setAdvisorTeacher(null);
        }
        return classMapper.toResponse(classRepository.save(studentClass));
    }

    @Override
    @Transactional
    public void deleteClass(Long id) {
        Class studentClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        if (studentRepository.existsByStudentClassId(id)) {
            throw new AppException(ErrorCode.CLASS_HAS_STUDENTS);
        }
        classRepository.delete(studentClass);
    }

    @Override
    public ClassResponse getClassById(Long id) {
        Class adminClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));
        return classMapper.toResponse(adminClass);
    }

    @Override
    public List<StudentResponse> getStudentsByClassId(Long classId) {
        return studentRepository.findByStudentClassId(classId).stream()
                .map(studentMapper::toResponse)
                .toList();
    }
}
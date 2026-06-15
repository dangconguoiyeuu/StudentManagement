package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.TeacherUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.TeacherMapper;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;
    private final DepartmentRepository departmentRepository;
    private final RoleRepository roleRepository;
    private final TeacherMapper teacherMapper;
    private final PasswordEncoder passwordEncoder;
    private final ClassRepository classRepository;

    // 🔥 ĐÃ SỬA: Đảm bảo return đúng 13 tham số tương thích với cấu trúc Record mới của bạn
    private TeacherResponse enrichAdvisorClasses(TeacherResponse response, String teacherId) {
        String advisorClassesStr = classRepository.findByAdvisorTeacherId(teacherId).stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Class::getName)
                .collect(Collectors.joining(", "));

        if (advisorClassesStr.isBlank()) {
            advisorClassesStr = "Không có";
        }

        return new TeacherResponse(
                response.id(),
                response.teacherCode(),
                response.firstName(),
                response.lastName(),
                response.dateOfBirth(),
                response.gender(),
                response.phoneNumber(),
                response.active(),
                response.username(),
                response.email(),
                response.departmentName(),
                advisorClassesStr,         // Tham số thứ 12: advisorClasses
                advisorClassesStr          // 🔥 Tham số thứ 13: advisorClassName (Giải quyết lỗi compile)
        );
    }

    @Override
    @Transactional
    public TeacherResponse createTeacher(TeacherCreationRequest request) {
        if (teacherRepository.existsByTeacherCode(request.teacherCode())) {
            throw new AppException(ErrorCode.TEACHER_CODE_EXISTED);
        }

        Department dept = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        long nextIndex = userRepository.countByIdStartingWith("GV_") + 1;
        String generatedId = String.format("GV_%02d", nextIndex);

        User user = User.builder()
                .id(generatedId)
                .username(request.teacherCode())
                .password(passwordEncoder.encode("password1234"))
                .email(request.teacherCode().toLowerCase() + "@open.edu.vn")
                .isActive(true)
                .build();

        Role teacherRole = roleRepository.findByName("TEACHER")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));
        user.setRoles(Set.of(teacherRole));

        User managedUser = userRepository.save(user);

        Teacher teacher = teacherMapper.toEntity(request);
        teacher.setUser(managedUser);
        teacher.setDepartment(dept);
        teacher.setActive(true);

        return enrichAdvisorClasses(teacherMapper.toResponse(teacherRepository.save(teacher)), teacher.getId());
    }

    @Override
    public List<TeacherResponse> getAllTeachers() {
        return teacherRepository.findAllTeachersWithJoinFetch().stream()
                .map(teacherMapper::toResponse)
                .map(res -> enrichAdvisorClasses(res, res.id()))
                .toList();
    }

    @Override
    public TeacherResponse getTeacherById(String id) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
        return enrichAdvisorClasses(teacherMapper.toResponse(teacher), teacher.getId());
    }

    @Override
    @Transactional
    public TeacherResponse updateTeacher(String id, TeacherUpdateRequest request) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));

        teacher.setFirstName(request.firstName());
        teacher.setLastName(request.lastName());
        teacher.setDateOfBirth(request.dateOfBirth());
        teacher.setGender(request.gender());
        teacher.setPhoneNumber(request.phoneNumber());

        return enrichAdvisorClasses(teacherMapper.toResponse(teacherRepository.save(teacher)), teacher.getId());
    }

    @Override
    @Transactional
    public void disableTeacher(String id) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
        teacher.setActive(false);
        if (teacher.getUser() != null) teacher.getUser().setActive(false);
        teacherRepository.save(teacher);
    }

    @Override
    @Transactional
    public void enableTeacher(String id) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
        teacher.setActive(true);
        if (teacher.getUser() != null) teacher.getUser().setActive(true);
        teacherRepository.save(teacher);
    }
}
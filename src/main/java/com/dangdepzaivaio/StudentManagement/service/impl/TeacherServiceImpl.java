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
import com.dangdepzaivaio.StudentManagement.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;
    private final DepartmentRepository departmentRepository;
    private final RoleRepository roleRepository;
    private final TeacherMapper teacherMapper;
    private final PasswordEncoder passwordEncoder;

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

        // 🔥 SỬA DÒNG NÀY: Hứng lấy đối tượng Managed trả về từ hàm save()
        User managedUser = userRepository.save(user);

        Teacher teacher = teacherMapper.toEntity(request);

        // 🔥 SỬA DÒNG NÀY: Gắn đối tượng managedUser (đã an toàn) vào thay vì biến user gốc
        teacher.setUser(managedUser);

        teacher.setDepartment(dept);
        teacher.setActive(true);

        return teacherMapper.toResponse(teacherRepository.save(teacher));
    }

    @Override
    public List<TeacherResponse> getAllTeachers() {
        return teacherRepository.findAllTeachersWithJoinFetch().stream()
                .map(teacherMapper::toResponse)
                .toList();
    }

    @Override
    public TeacherResponse getTeacherById(String id) {
        return teacherRepository.findById(id)
                .map(teacherMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.TEACHER_NOT_FOUND));
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

        return teacherMapper.toResponse(teacherRepository.save(teacher));
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

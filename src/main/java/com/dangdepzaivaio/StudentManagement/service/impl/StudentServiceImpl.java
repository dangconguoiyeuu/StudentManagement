package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.StudentMapper;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;
    private final ClassRepository classRepository;
    private final RoleRepository roleRepository;
    private final StudentMapper studentMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public StudentResponse createStudent(StudentCreationRequest request) {
        if (studentRepository.existsByStudentCode(request.studentCode())) {
            throw new AppException(ErrorCode.STUDENT_CODE_EXISTED);
        }
        // Quy tắc tự động: Tài khoản lấy theo mã sinh viên
        if (userRepository.existsByUsername(request.studentCode())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        Class studentClass = classRepository.findById(request.classId())
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        // Tự động khởi dựng tài khoản User hệ thống ngầm bên dưới
        User user = User.builder()
                .username(request.studentCode())
                .password(passwordEncoder.encode("password1234")) // Mật khẩu mặc định
                .email(request.studentCode().toLowerCase() + "@open.edu.vn") // Tự sinh email trường học
                .isFirstLogin(true)
                .isActive(true)
                .build();

        Role studentRole = roleRepository.findByName("STUDENT")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));
        user.setRoles(Set.of(studentRole));
        userRepository.save(user);

        Student student = studentMapper.toEntity(request);
        student.setUser(user);
        student.setStudentClass(studentClass);

        return studentMapper.toResponse(studentRepository.save(student));
    }

    @Override
    public List<StudentResponse> getAllStudents(boolean includeInactive) {
        List<Student> students = includeInactive
                ? studentRepository.findAllStudentsWithJoinFetch()
                : studentRepository.findAllActiveStudentsWithJoinFetch();

        return students.stream()
                .map(studentMapper::toResponse)
                .toList();
    }

    @Override
    public StudentResponse getStudentById(Long id) {
        return studentRepository.findByIdWithJoinFetch(id)
                .map(studentMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));
    }

    @Override
    @Transactional
    public StudentResponse updateStudent(Long id, StudentUpdateRequest request) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        if (request.classId() != null) {
            Class studentClass = classRepository.findById(request.classId())
                    .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));
            student.setStudentClass(studentClass);
        }

        student.setFirstName(request.firstName());
        student.setLastName(request.lastName());
        student.setDateOfBirth(request.dateOfBirth());
        student.setGender(request.gender());
        student.setPhoneNumber(request.phoneNumber());

        return studentMapper.toResponse(studentRepository.save(student));
    }

    @Override
    @Transactional
    public void disableStudent(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        student.setActive(false);
        studentRepository.save(student);

        User user = student.getUser();
        if (user != null) {
            user.setActive(false);
            userRepository.save(user);
        }
    }
}
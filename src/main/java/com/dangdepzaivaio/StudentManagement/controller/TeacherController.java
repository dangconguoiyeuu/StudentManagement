package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/teachers")
@RequiredArgsConstructor
public class TeacherController {

    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;
    private final DepartmentRepository departmentRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping
    public ApiResponse<TeacherResponse> createTeacher(@RequestBody @Valid TeacherCreationRequest request) {
        if (teacherRepository.existsByTeacherCode(request.teacherCode())) {
            throw new AppException(ErrorCode.VALIDATION_ERROR);
        }
        if (userRepository.existsByUsername(request.teacherCode())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        Department department = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        // Tự sinh tài khoản theo quy chuẩn: Username = Mã giảng viên, Pass = password1234
        User user = User.builder()
                .username(request.teacherCode())
                .password(passwordEncoder.encode("password1234"))
                .email(request.teacherCode().toLowerCase() + "@teacher.open.edu.vn")
                .isFirstLogin(true)
                .isActive(true)
                .build();

        Role teacherRole = roleRepository.findByName("TEACHER")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));
        user.setRoles(Set.of(teacherRole));
        userRepository.save(user);

        Teacher teacher = Teacher.builder()
                .teacherCode(request.teacherCode())
                .firstName(request.firstName())
                .lastName(request.lastName())
                .dateOfBirth(request.dateOfBirth())
                .gender(request.gender())
                .phoneNumber(request.phoneNumber())
                .user(user)
                .department(department)
                .build();

        Teacher saved = teacherRepository.save(teacher);
        TeacherResponse response = new TeacherResponse(saved.getId(), saved.getTeacherCode(), saved.getFirstName(), saved.getLastName(), saved.getDateOfBirth(), saved.getGender(), saved.getPhoneNumber(), saved.isActive(), user.getUsername(), user.getEmail(), department.getName());
        return new ApiResponse<>(1000, "Cấp tài khoản Giảng viên thành công!", response);
    }

    @GetMapping
    public ApiResponse<List<TeacherResponse>> getAll() {
        List<TeacherResponse> list = teacherRepository.findAllTeachersWithJoinFetch().stream()
                .map(t -> new TeacherResponse(t.getId(), t.getTeacherCode(), t.getFirstName(), t.getLastName(), t.getDateOfBirth(), t.getGender(), t.getPhoneNumber(), t.isActive(), t.getUser().getUsername(), t.getUser().getEmail(), t.getDepartment().getName()))
                .toList();
        return new ApiResponse<>(1000, "Lấy danh sách giảng viên thành công!", list);
    }
}
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.gitattributes
.gitignore
.mvn/wrapper/maven-wrapper.properties
mvnw
mvnw.cmd
pom.xml
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/DatabaseInitializer.java
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/SecurityConfig.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/AuthenticationController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/ClassController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/CourseClassController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/DepartmentController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/GradeController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/SubjectController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/UserController.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/AuthenticationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/ClassRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/CourseClassRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/DepartmentRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/GradeRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/SubjectRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ApiResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/AuthenticationResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ClassResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/CourseClassResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/DepartmentResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/GradeResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentAcademicSummaryResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/SubjectResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/UserResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/BaseEntity.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Class.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/CourseClass.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Department.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Grade.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Role.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Student.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Subject.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/User.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/AppException.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/ErrorCode.java
src/main/java/com/dangdepzaivaio/StudentManagement/exception/GlobalExceptionHandler.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/ClassMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/CourseClassMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/DepartmentMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/GradeMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/StudentMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/SubjectMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/mapper/UserMapper.java
src/main/java/com/dangdepzaivaio/StudentManagement/README.md
src/main/java/com/dangdepzaivaio/StudentManagement/repository/ClassRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/CourseClassRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/DepartmentRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/GradeRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/RoleRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/StudentRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/SubjectRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/repository/UserRepository.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/ClassService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/CourseClassService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/DepartmentService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/GradeService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/AuthenticationService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/ClassServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/CourseClassServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/DepartmentServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/GradeServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/StudentServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/SubjectServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/UserServiceImpl.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/StudentService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/SubjectService.java
src/main/java/com/dangdepzaivaio/StudentManagement/service/UserService.java
src/main/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplication.java
src/main/resources/application.yaml
src/test/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplicationTests.java
student_management.sql
StudentManagement.docx
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/SecurityConfig.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        // 🔥 1. Kích hoạt bộ lọc CORS toàn cục cực mạnh của Spring Security
        httpSecurity.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        httpSecurity.authorizeHttpRequests(request -> request
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .anyRequest().permitAll());

        httpSecurity.csrf(AbstractHttpConfigurer::disable);
        return httpSecurity.build();
    }

    // 🔥 2. Cấu hình cấp phép tường minh cho ReactJS (Vite chạy cổng 5173, Webpack cổng 3000)
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:5173"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/AuthenticationController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.service.impl.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ApiResponse<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
        var result = authenticationService.authenticate(request);
        return new ApiResponse<>(1000, "Đăng nhập hệ thống thành công!", result);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/ClassController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.service.ClassService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/classes")
@RequiredArgsConstructor
public class ClassController {
    private final ClassService classService;

    @PostMapping
    public ApiResponse<ClassResponse> create(@RequestBody @Valid ClassRequest request) {
        return new ApiResponse<>(1000, "Tạo lớp hành chính mới thành công!", classService.createClass(request));
    }

    @GetMapping
    public ApiResponse<List<ClassResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy danh sách lớp hành chính thành công!", classService.getAllClasses());
    }
    @PutMapping("/{id}")
    public ApiResponse<ClassResponse> update(@PathVariable Long id, @RequestBody @Valid ClassRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin lớp hành chính thành công!", classService.updateClass(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> delete(@PathVariable Long id) {
        classService.deleteClass(id);
        return new ApiResponse<>(1000, "Xóa lớp hành chính thành công!", "Lớp hành chính có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
    @GetMapping("/{id}")
    public ApiResponse<ClassResponse> getById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin lớp học thành công!", classService.getClassById(id));
    }

}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/DepartmentController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.service.DepartmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/departments")
@RequiredArgsConstructor
public class DepartmentController {
    private final DepartmentService departmentService;

    @PostMapping
    public ApiResponse<DepartmentResponse> create(@RequestBody @Valid DepartmentRequest request) {
        return new ApiResponse<>(1000, "Tạo khoa mới thành công!", departmentService.createDepartment(request));
    }

    @GetMapping
    public ApiResponse<List<DepartmentResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy danh sách khoa thành công!", departmentService.getAllDepartments());
    }

    @PutMapping("/{id}")
    public ApiResponse<DepartmentResponse> update(@PathVariable Long id, @RequestBody @Valid DepartmentRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin khoa thành công!", departmentService.updateDepartment(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> delete(@PathVariable Long id) {
        departmentService.deleteDepartment(id);
        return new ApiResponse<>(1000, "Xóa khoa thành công!", "Khoa có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
    @GetMapping("/{id}")
    public ApiResponse<DepartmentResponse> getById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin khoa thành công!", departmentService.getDepartmentById(id));
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/AuthenticationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

public record AuthenticationRequest(String username, String password) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/ClassRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ClassRequest(
        @NotBlank(message = "Tên lớp hành chính không được để trống") String name,
        @NotNull(message = "ID khoa không được để trống") Long departmentId
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/DepartmentRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;

public record DepartmentRequest(
        @NotBlank(message = "Mã khoa không được để trống") String code,
        @NotBlank(message = "Tên khoa không được để trống") String name
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/AuthenticationResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record AuthenticationResponse(
        String token,
        boolean authenticated,
        Long userId,        // Bổ sung ID
        String username,    // Bổ sung Tên hiển thị
        String roles        // Bổ sung Quyền
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ClassResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record ClassResponse(Long id, String name, String departmentCode, String departmentName) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/DepartmentResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record DepartmentResponse(Long id, String code, String name) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/ClassMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ClassMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    Class toEntity(ClassRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "department", ignore = true)
    void updateEntityFromRequest(ClassRequest request, @MappingTarget Class studentClass);

    @Mapping(target = "departmentCode", source = "department.code")
    @Mapping(target = "departmentName", source = "department.name")
    ClassResponse toResponse(Class studentClass);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/DepartmentMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DepartmentMapper {
    @Mapping(target = "id", ignore = true)
    Department toEntity(DepartmentRequest request);

    @Mapping(target = "id", ignore = true)
    void updateEntityFromRequest(DepartmentRequest request, @MappingTarget Department department);

    DepartmentResponse toResponse(Department department);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/ClassService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import java.util.List;

public interface ClassService {
    ClassResponse createClass(ClassRequest request);
    List<ClassResponse> getAllClasses();
    ClassResponse updateClass(Long id, ClassRequest request);
    void deleteClass(Long id);
    ClassResponse getClassById(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/DepartmentService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import java.util.List;

public interface DepartmentService {
    DepartmentResponse createDepartment(DepartmentRequest request);
    List<DepartmentResponse> getAllDepartments();
    DepartmentResponse updateDepartment(Long id, DepartmentRequest request);
    void deleteDepartment(Long id);
    DepartmentResponse getDepartmentById(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/AuthenticationService.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.signer-key}")
    private String SIGNER_KEY;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        // 1. Tìm kiếm xem Username có tồn tại không
        User user = userRepository.findByUsername(request.username())
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        // 2. So khớp mật khẩu thô gửi lên với mật khẩu đã băm dưới DB
        boolean authenticated = passwordEncoder.matches(request.password(), user.getPassword());

        if (!authenticated) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        // 3. Nếu khớp mật khẩu, tiến hành tạo Token JWT cấp cho người dùng
        String token = generateToken(user);

        // 🔥 VÁ LỖI TẠI ĐÂY: Khai báo chuỗi biến đổi role cụ thể cho hàm authenticate để tránh lỗi compile Scope
        String rolesScope = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.joining(" "));

        return new AuthenticationResponse(token, true, user.getId(), user.getUsername(), rolesScope);
    }

    private String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);

        String rolesScope = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.joining(" "));

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getUsername())
                .issuer("dangdepzaivaio.com")
                .issueTime(new Date())
                .expirationTime(new Date(Instant.now().plus(2, ChronoUnit.HOURS).toEpochMilli()))
                .claim("userId", user.getId())
                .claim("scope", rolesScope)
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            throw new RuntimeException("Không thể tạo Token bảo mật", e);
        }
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/ClassServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.Class;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.ClassMapper;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.service.ClassService; // 🔥 Thêm import này
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassServiceImpl implements ClassService { // 🔥 SỬA: implements ClassService
    private final ClassRepository classRepository;
    private final DepartmentRepository departmentRepository;
    private final ClassMapper classMapper;

    @Override // 🔥 THÊM @OVERRIDE
    @Transactional
    public ClassResponse createClass(ClassRequest request) {
        if (classRepository.existsByName(request.name())) {
            throw new AppException(ErrorCode.CLASS_EXISTED); // Đã đồng bộ ErrorCode sạch từ bug 3
        }
        Department department = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        Class studentClass = classMapper.toEntity(request);
        studentClass.setDepartment(department);
        return classMapper.toResponse(classRepository.save(studentClass));
    }

    @Override
    public List<ClassResponse> getAllClasses() {
        return classRepository.findAllClassesWithJoinFetch().stream() // 🔥 Đã xử lý triệt để lỗi N+1 cho phân hệ Lớp hành chính
                .map(classMapper::toResponse)
                .toList();
    }

    // Thêm repo này vào dependency đầu class để check ràng buộc sinh viên
    private final StudentRepository studentRepository;

    @Override
    @Transactional
    public ClassResponse updateClass(Long id, ClassRequest request) {
        Class studentClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        // Nếu đổi tên lớp, kiểm tra xem có bị trùng tên với lớp khác đang tồn tại không
        if (!studentClass.getName().equals(request.name()) && classRepository.existsByName(request.name())) {
            throw new AppException(ErrorCode.CLASS_EXISTED);
        }

        Department department = departmentRepository.findById(request.departmentId())
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        classMapper.updateEntityFromRequest(request, studentClass);
        studentClass.setDepartment(department); // Tái thiết lập mối quan hệ khoa chủ quản mới
        return classMapper.toResponse(classRepository.save(studentClass));
    }

    @Override
    @Transactional
    public void deleteClass(Long id) {
        Class studentClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        // 🛑 KIỂM TRA RÀNG BUỘC: Nếu lớp hành chính này đang có sinh viên học -> Nghiêm cấm xóa
        if (studentRepository.existsByStudentClassId(id)) {
            throw new AppException(ErrorCode.CLASS_HAS_STUDENTS);
        }

        classRepository.delete(studentClass);
    }
    @Override
    public ClassResponse getClassById(Long id) {
        Class adminClass = classRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND)); // Bắt lỗi 1004: Lớp hành chính không tồn tại
        return classMapper.toResponse(adminClass);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/DepartmentServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.DepartmentRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.DepartmentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Department;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.DepartmentMapper;
import com.dangdepzaivaio.StudentManagement.repository.ClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.DepartmentRepository;
import com.dangdepzaivaio.StudentManagement.service.DepartmentService; // 🔥 Thêm import này
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService { // 🔥 SỬA: implements DepartmentService
    private final DepartmentRepository departmentRepository;
    private final DepartmentMapper departmentMapper;
    private final ClassRepository classRepository;


    @Override
    @Transactional
    public DepartmentResponse createDepartment(DepartmentRequest request) {
        if (departmentRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.DEPARTMENT_EXISTED);
        }
        Department department = departmentMapper.toEntity(request);
        return departmentMapper.toResponse(departmentRepository.save(department));
    }

    @Override
    public List<DepartmentResponse> getAllDepartments() {
        return departmentRepository.findAll().stream()
                .map(departmentMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public DepartmentResponse updateDepartment(Long id, DepartmentRequest request) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        // Nếu thay đổi mã khoa, kiểm tra xem mã mới có trùng với khoa khác không
        if (!department.getCode().equals(request.code()) && departmentRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.DEPARTMENT_EXISTED);
        }

        departmentMapper.updateEntityFromRequest(request, department);
        return departmentMapper.toResponse(departmentRepository.save(department));
    }

    @Override
    @Transactional
    public void deleteDepartment(Long id) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));

        // 🛑 KIỂM TRA RÀNG BUỘC: Nếu khoa đang chứa lớp học phần hành chính -> Chặn đứng hành vi xóa
        if (classRepository.existsByDepartmentId(id)) {
            throw new AppException(ErrorCode.DEPARTMENT_HAS_CLASSES);
        }

        departmentRepository.delete(department);
    }
    @Override
    public DepartmentResponse getDepartmentById(Long id) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.DEPARTMENT_NOT_FOUND));
        return departmentMapper.toResponse(department); // 🌟 Sử dụng đúng toResponse
    }
}
</file>

<file path=".gitattributes">
/mvnw text eol=lf
*.cmd text eol=crlf
</file>

<file path=".gitignore">
HELP.md
target/
.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/
!**/src/main/**/build/
!**/src/test/**/build/

### VS Code ###
.vscode/
</file>

<file path=".mvn/wrapper/maven-wrapper.properties">
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.16/apache-maven-3.9.16-bin.zip
</file>

<file path="mvnw">
#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# Apache Maven Wrapper startup batch script, version 3.3.4
#
# Optional ENV vars
# -----------------
#   JAVA_HOME - location of a JDK home dir, required when download maven via java source
#   MVNW_REPOURL - repo url base for downloading maven distribution
#   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
#   MVNW_VERBOSE - true: enable verbose log; debug: trace the mvnw script; others: silence the output
# ----------------------------------------------------------------------------

set -euf
[ "${MVNW_VERBOSE-}" != debug ] || set -x

# OS specific support.
native_path() { printf %s\\n "$1"; }
case "$(uname)" in
CYGWIN* | MINGW*)
  [ -z "${JAVA_HOME-}" ] || JAVA_HOME="$(cygpath --unix "$JAVA_HOME")"
  native_path() { cygpath --path --windows "$1"; }
  ;;
esac

# set JAVACMD and JAVACCMD
set_java_home() {
  # For Cygwin and MinGW, ensure paths are in Unix format before anything is touched
  if [ -n "${JAVA_HOME-}" ]; then
    if [ -x "$JAVA_HOME/jre/sh/java" ]; then
      # IBM's JDK on AIX uses strange locations for the executables
      JAVACMD="$JAVA_HOME/jre/sh/java"
      JAVACCMD="$JAVA_HOME/jre/sh/javac"
    else
      JAVACMD="$JAVA_HOME/bin/java"
      JAVACCMD="$JAVA_HOME/bin/javac"

      if [ ! -x "$JAVACMD" ] || [ ! -x "$JAVACCMD" ]; then
        echo "The JAVA_HOME environment variable is not defined correctly, so mvnw cannot run." >&2
        echo "JAVA_HOME is set to \"$JAVA_HOME\", but \"\$JAVA_HOME/bin/java\" or \"\$JAVA_HOME/bin/javac\" does not exist." >&2
        return 1
      fi
    fi
  else
    JAVACMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v java
    )" || :
    JAVACCMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v javac
    )" || :

    if [ ! -x "${JAVACMD-}" ] || [ ! -x "${JAVACCMD-}" ]; then
      echo "The java/javac command does not exist in PATH nor is JAVA_HOME set, so mvnw cannot run." >&2
      return 1
    fi
  fi
}

# hash string like Java String::hashCode
hash_string() {
  str="${1:-}" h=0
  while [ -n "$str" ]; do
    char="${str%"${str#?}"}"
    h=$(((h * 31 + $(LC_CTYPE=C printf %d "'$char")) % 4294967296))
    str="${str#?}"
  done
  printf %x\\n $h
}

verbose() { :; }
[ "${MVNW_VERBOSE-}" != true ] || verbose() { printf %s\\n "${1-}"; }

die() {
  printf %s\\n "$1" >&2
  exit 1
}

trim() {
  # MWRAPPER-139:
  #   Trims trailing and leading whitespace, carriage returns, tabs, and linefeeds.
  #   Needed for removing poorly interpreted newline sequences when running in more
  #   exotic environments such as mingw bash on Windows.
  printf "%s" "${1}" | tr -d '[:space:]'
}

scriptDir="$(dirname "$0")"
scriptName="$(basename "$0")"

# parse distributionUrl and optional distributionSha256Sum, requires .mvn/wrapper/maven-wrapper.properties
while IFS="=" read -r key value; do
  case "${key-}" in
  distributionUrl) distributionUrl=$(trim "${value-}") ;;
  distributionSha256Sum) distributionSha256Sum=$(trim "${value-}") ;;
  esac
done <"$scriptDir/.mvn/wrapper/maven-wrapper.properties"
[ -n "${distributionUrl-}" ] || die "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"

case "${distributionUrl##*/}" in
maven-mvnd-*bin.*)
  MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/
  case "${PROCESSOR_ARCHITECTURE-}${PROCESSOR_ARCHITEW6432-}:$(uname -a)" in
  *AMD64:CYGWIN* | *AMD64:MINGW*) distributionPlatform=windows-amd64 ;;
  :Darwin*x86_64) distributionPlatform=darwin-amd64 ;;
  :Darwin*arm64) distributionPlatform=darwin-aarch64 ;;
  :Linux*x86_64*) distributionPlatform=linux-amd64 ;;
  *)
    echo "Cannot detect native platform for mvnd on $(uname)-$(uname -m), use pure java version" >&2
    distributionPlatform=linux-amd64
    ;;
  esac
  distributionUrl="${distributionUrl%-bin.*}-$distributionPlatform.zip"
  ;;
maven-mvnd-*) MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/ ;;
*) MVN_CMD="mvn${scriptName#mvnw}" _MVNW_REPO_PATTERN=/org/apache/maven/ ;;
esac

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
[ -z "${MVNW_REPOURL-}" ] || distributionUrl="$MVNW_REPOURL$_MVNW_REPO_PATTERN${distributionUrl#*"$_MVNW_REPO_PATTERN"}"
distributionUrlName="${distributionUrl##*/}"
distributionUrlNameMain="${distributionUrlName%.*}"
distributionUrlNameMain="${distributionUrlNameMain%-bin}"
MAVEN_USER_HOME="${MAVEN_USER_HOME:-${HOME}/.m2}"
MAVEN_HOME="${MAVEN_USER_HOME}/wrapper/dists/${distributionUrlNameMain-}/$(hash_string "$distributionUrl")"

exec_maven() {
  unset MVNW_VERBOSE MVNW_USERNAME MVNW_PASSWORD MVNW_REPOURL || :
  exec "$MAVEN_HOME/bin/$MVN_CMD" "$@" || die "cannot exec $MAVEN_HOME/bin/$MVN_CMD"
}

if [ -d "$MAVEN_HOME" ]; then
  verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  exec_maven "$@"
fi

case "${distributionUrl-}" in
*?-bin.zip | *?maven-mvnd-?*-?*.zip) ;;
*) die "distributionUrl is not valid, must match *-bin.zip or maven-mvnd-*.zip, but found '${distributionUrl-}'" ;;
esac

# prepare tmp dir
if TMP_DOWNLOAD_DIR="$(mktemp -d)" && [ -d "$TMP_DOWNLOAD_DIR" ]; then
  clean() { rm -rf -- "$TMP_DOWNLOAD_DIR"; }
  trap clean HUP INT TERM EXIT
else
  die "cannot create temp dir"
fi

mkdir -p -- "${MAVEN_HOME%/*}"

# Download and Install Apache Maven
verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
verbose "Downloading from: $distributionUrl"
verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

# select .zip or .tar.gz
if ! command -v unzip >/dev/null; then
  distributionUrl="${distributionUrl%.zip}.tar.gz"
  distributionUrlName="${distributionUrl##*/}"
fi

# verbose opt
__MVNW_QUIET_WGET=--quiet __MVNW_QUIET_CURL=--silent __MVNW_QUIET_UNZIP=-q __MVNW_QUIET_TAR=''
[ "${MVNW_VERBOSE-}" != true ] || __MVNW_QUIET_WGET='' __MVNW_QUIET_CURL='' __MVNW_QUIET_UNZIP='' __MVNW_QUIET_TAR=v

# normalize http auth
case "${MVNW_PASSWORD:+has-password}" in
'') MVNW_USERNAME='' MVNW_PASSWORD='' ;;
has-password) [ -n "${MVNW_USERNAME-}" ] || MVNW_USERNAME='' MVNW_PASSWORD='' ;;
esac

if [ -z "${MVNW_USERNAME-}" ] && command -v wget >/dev/null; then
  verbose "Found wget ... using wget"
  wget ${__MVNW_QUIET_WGET:+"$__MVNW_QUIET_WGET"} "$distributionUrl" -O "$TMP_DOWNLOAD_DIR/$distributionUrlName" || die "wget: Failed to fetch $distributionUrl"
elif [ -z "${MVNW_USERNAME-}" ] && command -v curl >/dev/null; then
  verbose "Found curl ... using curl"
  curl ${__MVNW_QUIET_CURL:+"$__MVNW_QUIET_CURL"} -f -L -o "$TMP_DOWNLOAD_DIR/$distributionUrlName" "$distributionUrl" || die "curl: Failed to fetch $distributionUrl"
elif set_java_home; then
  verbose "Falling back to use Java to download"
  javaSource="$TMP_DOWNLOAD_DIR/Downloader.java"
  targetZip="$TMP_DOWNLOAD_DIR/$distributionUrlName"
  cat >"$javaSource" <<-END
	public class Downloader extends java.net.Authenticator
	{
	  protected java.net.PasswordAuthentication getPasswordAuthentication()
	  {
	    return new java.net.PasswordAuthentication( System.getenv( "MVNW_USERNAME" ), System.getenv( "MVNW_PASSWORD" ).toCharArray() );
	  }
	  public static void main( String[] args ) throws Exception
	  {
	    setDefault( new Downloader() );
	    java.nio.file.Files.copy( java.net.URI.create( args[0] ).toURL().openStream(), java.nio.file.Paths.get( args[1] ).toAbsolutePath().normalize() );
	  }
	}
	END
  # For Cygwin/MinGW, switch paths to Windows format before running javac and java
  verbose " - Compiling Downloader.java ..."
  "$(native_path "$JAVACCMD")" "$(native_path "$javaSource")" || die "Failed to compile Downloader.java"
  verbose " - Running Downloader.java ..."
  "$(native_path "$JAVACMD")" -cp "$(native_path "$TMP_DOWNLOAD_DIR")" Downloader "$distributionUrl" "$(native_path "$targetZip")"
fi

# If specified, validate the SHA-256 sum of the Maven distribution zip file
if [ -n "${distributionSha256Sum-}" ]; then
  distributionSha256Result=false
  if [ "$MVN_CMD" = mvnd.sh ]; then
    echo "Checksum validation is not supported for maven-mvnd." >&2
    echo "Please disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  elif command -v sha256sum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | sha256sum -c - >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  elif command -v shasum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | shasum -a 256 -c >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  else
    echo "Checksum validation was requested but neither 'sha256sum' or 'shasum' are available." >&2
    echo "Please install either command, or disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  fi
  if [ $distributionSha256Result = false ]; then
    echo "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised." >&2
    echo "If you updated your Maven version, you need to update the specified distributionSha256Sum property." >&2
    exit 1
  fi
fi

# unzip and move
if command -v unzip >/dev/null; then
  unzip ${__MVNW_QUIET_UNZIP:+"$__MVNW_QUIET_UNZIP"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -d "$TMP_DOWNLOAD_DIR" || die "failed to unzip"
else
  tar xzf${__MVNW_QUIET_TAR:+"$__MVNW_QUIET_TAR"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -C "$TMP_DOWNLOAD_DIR" || die "failed to untar"
fi

# Find the actual extracted directory name (handles snapshots where filename != directory name)
actualDistributionDir=""

# First try the expected directory name (for regular distributions)
if [ -d "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" ]; then
  if [ -f "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain/bin/$MVN_CMD" ]; then
    actualDistributionDir="$distributionUrlNameMain"
  fi
fi

# If not found, search for any directory with the Maven executable (for snapshots)
if [ -z "$actualDistributionDir" ]; then
  # enable globbing to iterate over items
  set +f
  for dir in "$TMP_DOWNLOAD_DIR"/*; do
    if [ -d "$dir" ]; then
      if [ -f "$dir/bin/$MVN_CMD" ]; then
        actualDistributionDir="$(basename "$dir")"
        break
      fi
    fi
  done
  set -f
fi

if [ -z "$actualDistributionDir" ]; then
  verbose "Contents of $TMP_DOWNLOAD_DIR:"
  verbose "$(ls -la "$TMP_DOWNLOAD_DIR")"
  die "Could not find Maven distribution directory in extracted archive"
fi

verbose "Found extracted Maven distribution directory: $actualDistributionDir"
printf %s\\n "$distributionUrl" >"$TMP_DOWNLOAD_DIR/$actualDistributionDir/mvnw.url"
mv -- "$TMP_DOWNLOAD_DIR/$actualDistributionDir" "$MAVEN_HOME" || [ -d "$MAVEN_HOME" ] || die "fail to move MAVEN_HOME"

clean || :
exec_maven "$@"
</file>

<file path="mvnw.cmd">
<# : batch portion
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.4
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------

@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET __MVNW_CMD__=
@SET __MVNW_ERROR__=
@SET __MVNW_PSMODULEP_SAVE=%PSModulePath%
@SET PSModulePath=
@FOR /F "usebackq tokens=1* delims==" %%A IN (`powershell -noprofile "& {$scriptDir='%~dp0'; $script='%__MVNW_ARG0_NAME__%'; icm -ScriptBlock ([Scriptblock]::Create((Get-Content -Raw '%~f0'))) -NoNewScope}"`) DO @(
  IF "%%A"=="MVN_CMD" (set __MVNW_CMD__=%%B) ELSE IF "%%B"=="" (echo %%A) ELSE (echo %%A=%%B)
)
@SET PSModulePath=%__MVNW_PSMODULEP_SAVE%
@SET __MVNW_PSMODULEP_SAVE=
@SET __MVNW_ARG0_NAME__=
@SET MVNW_USERNAME=
@SET MVNW_PASSWORD=
@IF NOT "%__MVNW_CMD__%"=="" ("%__MVNW_CMD__%" %*)
@echo Cannot start maven from wrapper >&2 && exit /b 1
@GOTO :EOF
: end batch / begin powershell #>

$ErrorActionPreference = "Stop"
if ($env:MVNW_VERBOSE -eq "true") {
  $VerbosePreference = "Continue"
}

# calculate distributionUrl, requires .mvn/wrapper/maven-wrapper.properties
$distributionUrl = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionUrl
if (!$distributionUrl) {
  Write-Error "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"
}

switch -wildcard -casesensitive ( $($distributionUrl -replace '^.*/','') ) {
  "maven-mvnd-*" {
    $USE_MVND = $true
    $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
    $MVN_CMD = "mvnd.cmd"
    break
  }
  default {
    $USE_MVND = $false
    $MVN_CMD = $script -replace '^mvnw','mvn'
    break
  }
}

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
if ($env:MVNW_REPOURL) {
  $MVNW_REPO_PATTERN = if ($USE_MVND -eq $False) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace "^.*$MVNW_REPO_PATTERN",'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''

$MAVEN_M2_PATH = "$HOME/.m2"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_M2_PATH = "$env:MAVEN_USER_HOME"
}

if (-not (Test-Path -Path $MAVEN_M2_PATH)) {
    New-Item -Path $MAVEN_M2_PATH -ItemType Directory | Out-Null
}

$MAVEN_WRAPPER_DISTS = $null
if ((Get-Item $MAVEN_M2_PATH).Target[0] -eq $null) {
  $MAVEN_WRAPPER_DISTS = "$MAVEN_M2_PATH/wrapper/dists"
} else {
  $MAVEN_WRAPPER_DISTS = (Get-Item $MAVEN_M2_PATH).Target[0] + "/wrapper/dists"
}

$MAVEN_HOME_PARENT = "$MAVEN_WRAPPER_DISTS/$distributionUrlNameMain"
$MAVEN_HOME_NAME = ([System.Security.Cryptography.SHA256]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

if (Test-Path -Path "$MAVEN_HOME" -PathType Container) {
  Write-Verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
  exit $?
}

if (! $distributionUrlNameMain -or ($distributionUrlName -eq $distributionUrlNameMain)) {
  Write-Error "distributionUrl is not valid, must end with *-bin.zip, but found $distributionUrl"
}

# prepare tmp dir
$TMP_DOWNLOAD_DIR_HOLDER = New-TemporaryFile
$TMP_DOWNLOAD_DIR = New-Item -Itemtype Directory -Path "$TMP_DOWNLOAD_DIR_HOLDER.dir"
$TMP_DOWNLOAD_DIR_HOLDER.Delete() | Out-Null
trap {
  if ($TMP_DOWNLOAD_DIR.Exists) {
    try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
    catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
  }
}

New-Item -Itemtype Directory -Path "$MAVEN_HOME_PARENT" -Force | Out-Null

# Download and Install Apache Maven
Write-Verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
Write-Verbose "Downloading from: $distributionUrl"
Write-Verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

$webclient = New-Object System.Net.WebClient
if ($env:MVNW_USERNAME -and $env:MVNW_PASSWORD) {
  $webclient.Credentials = New-Object System.Net.NetworkCredential($env:MVNW_USERNAME, $env:MVNW_PASSWORD)
}
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$webclient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR/$distributionUrlName") | Out-Null

# If specified, validate the SHA-256 sum of the Maven distribution zip file
$distributionSha256Sum = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionSha256Sum
if ($distributionSha256Sum) {
  if ($USE_MVND) {
    Write-Error "Checksum validation is not supported for maven-mvnd. `nPlease disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties."
  }
  Import-Module $PSHOME\Modules\Microsoft.PowerShell.Utility -Function Get-FileHash
  if ((Get-FileHash "$TMP_DOWNLOAD_DIR/$distributionUrlName" -Algorithm SHA256).Hash.ToLower() -ne $distributionSha256Sum) {
    Write-Error "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised. If you updated your Maven version, you need to update the specified distributionSha256Sum property."
  }
}

# unzip and move
Expand-Archive "$TMP_DOWNLOAD_DIR/$distributionUrlName" -DestinationPath "$TMP_DOWNLOAD_DIR" | Out-Null

# Find the actual extracted directory name (handles snapshots where filename != directory name)
$actualDistributionDir = ""

# First try the expected directory name (for regular distributions)
$expectedPath = Join-Path "$TMP_DOWNLOAD_DIR" "$distributionUrlNameMain"
$expectedMvnPath = Join-Path "$expectedPath" "bin/$MVN_CMD"
if ((Test-Path -Path $expectedPath -PathType Container) -and (Test-Path -Path $expectedMvnPath -PathType Leaf)) {
  $actualDistributionDir = $distributionUrlNameMain
}

# If not found, search for any directory with the Maven executable (for snapshots)
if (!$actualDistributionDir) {
  Get-ChildItem -Path "$TMP_DOWNLOAD_DIR" -Directory | ForEach-Object {
    $testPath = Join-Path $_.FullName "bin/$MVN_CMD"
    if (Test-Path -Path $testPath -PathType Leaf) {
      $actualDistributionDir = $_.Name
    }
  }
}

if (!$actualDistributionDir) {
  Write-Error "Could not find Maven distribution directory in extracted archive"
}

Write-Verbose "Found extracted Maven distribution directory: $actualDistributionDir"
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$actualDistributionDir" -NewName $MAVEN_HOME_NAME | Out-Null
try {
  Move-Item -Path "$TMP_DOWNLOAD_DIR/$MAVEN_HOME_NAME" -Destination $MAVEN_HOME_PARENT | Out-Null
} catch {
  if (! (Test-Path -Path "$MAVEN_HOME" -PathType Container)) {
    Write-Error "fail to move MAVEN_HOME"
  }
} finally {
  try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
  catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
}

Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/DatabaseInitializer.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DatabaseInitializer {

    private final RoleRepository roleRepository;

    @Bean
    ApplicationRunner initRoles() {
        return args -> {
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                roleRepository.save(Role.builder().name("ADMIN").build());
                log.info("Đã tạo Role ADMIN thành công!");
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
                log.info("Đã tạo Role STUDENT thành công!");
            }
        };
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/CourseClassController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.service.CourseClassService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course-classes")
@RequiredArgsConstructor
public class CourseClassController {

    private final CourseClassService courseClassService;

    @PostMapping
    public ApiResponse<CourseClassResponse> createCourseClass(@RequestBody @Valid CourseClassRequest request) {
        return new ApiResponse<>(1000, "Mở lớp học phần mới thành công!", courseClassService.createCourseClass(request));
    }

    @GetMapping
    public ApiResponse<List<CourseClassResponse>> getAllCourseClasses() {
        return new ApiResponse<>(1000, "Lấy danh sách lớp học phần thành công!", courseClassService.getAllCourseClasses());
    }

    @GetMapping("/{id}")
    public ApiResponse<CourseClassResponse> getCourseClassById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy thông tin chi tiết lớp học phần thành công!", courseClassService.getCourseClassById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<CourseClassResponse> updateCourseClass(@PathVariable Long id, @RequestBody @Valid CourseClassRequest request) {
        return new ApiResponse<>(1000, "Cập nhật lớp học phần thành công!", courseClassService.updateCourseClass(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteCourseClass(@PathVariable Long id) {
        courseClassService.deleteCourseClass(id);
        return new ApiResponse<>(1000, "Xóa lớp học phần thành công!", "Lớp học phần có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/GradeController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeService gradeService;

    @PostMapping
    public ApiResponse<GradeResponse> inputGrade(@RequestBody @Valid GradeRequest request) {
        return new ApiResponse<>(1000, "Nhập và quy đổi điểm số thành công!", gradeService.inputGrade(request));
    }

    @GetMapping("/student/{studentId}")
    public ApiResponse<List<GradeResponse>> getGradesByStudent(@PathVariable Long studentId) {
        return new ApiResponse<>(1000, "Lấy bảng điểm chi tiết của sinh viên thành công!", gradeService.getGradesByStudent(studentId));
    }

    @PutMapping("/{id}")
    public ApiResponse<GradeResponse> updateGrade(@PathVariable Long id, @RequestBody @Valid GradeRequest request) {
        return new ApiResponse<>(1000, "Sửa đổi và cập nhật lại điểm số thành công!", gradeService.updateGrade(id, request));
    }

    @GetMapping
    public ApiResponse<List<GradeResponse>> getAll() {
        return new ApiResponse<>(1000, "Lấy toàn bộ danh sách điểm thành công!", gradeService.getAllGrades());
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteGrade(@PathVariable Long id) {
        gradeService.deleteGrade(id);
        return new ApiResponse<>(1000, "Xóa đầu điểm thành công!", "Đầu điểm có ID " + id + " đã bị loại bỏ hoàn toàn.");
    }
    // ==================== ENDPOINT TỔNG HỢP HỌC TẬP & TÍNH GPA ====================
    @GetMapping("/student/{studentId}/summary")
    public ApiResponse<com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse> getAcademicSummary(@PathVariable Long studentId) {
        return new ApiResponse<>(1000, "Tổng hợp kết quả học tập và tính GPA thành công!", gradeService.getAcademicSummary(studentId));
    }
    @GetMapping("/{id}")
    public ApiResponse<GradeResponse> getGradeById(@PathVariable Long id) {
        return new ApiResponse<>(1000, "Lấy chi tiết thông tin điểm số thành công!", gradeService.getGradeById(id));
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/CourseClassRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CourseClassRequest(
        @NotBlank(message = "Mã lớp học phần không được để trống")
        String code,

        @NotBlank(message = "Học kỳ không được để trống")
        String semester,

        @NotNull(message = "ID môn học gốc không được để trống")
        Long subjectId
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/GradeRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record GradeRequest(
        @NotNull(message = "ID sinh viên không được để trống")
        Long studentId,

        @NotNull(message = "ID lớp học phần không được để trống")
        Long courseClassId,

        @Min(value = 0, message = "Điểm chuyên cần không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm chuyên cần không được lớn hơn 10")
        Double attendanceGrade,

        @Min(value = 0, message = "Điểm giữa kỳ không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm giữa kỳ không được lớn hơn 10")
        Double midtermGrade,

        @Min(value = 0, message = "Điểm cuốii kỳ không được nhỏ hơn 0")
        @Max(value = 10, message = "Điểm cuối kỳ không được lớn hơn 10")
        Double finalGrade
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentCreationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;

public record StudentCreationRequest(
        @NotBlank(message = "Mã sinh viên không được để trống")
        @Size(max = 20, message = "Mã sinh viên không vượt quá 20 ký tự")
        String studentCode,

        @NotBlank(message = "Tên sinh viên không được để trống")
        String firstName,

        @NotBlank(message = "Họ và tên đệm không được để trống")
        String lastName,

        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,

        @NotNull(message = "ID lớp hành chính không được để trống")
        Long classId,

        @Valid // Quan trọng: Để kích hoạt validation cho đối tượng bên trong
        @NotNull(message = "Thông tin tài khoản không được để trống")
        UserCreationRequest user
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentUpdateRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

public record StudentUpdateRequest(
        @NotBlank(message = "Tên sinh viên không được để trống")
        String firstName,

        @NotBlank(message = "Họ và tên đệm không được để trống")
        String lastName,

        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        Long classId
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/SubjectRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record SubjectRequest(
        @NotBlank(message = "Mã môn học không được để trống")
        String code,

        @NotBlank(message = "Tên môn học không được để trống")
        String name,

        @NotNull(message = "Số tín chỉ không được để trống")
        @Min(value = 1, message = "Số tín chỉ phải lớn hơn hoặc bằng 1")
        Integer credits
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserCreationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserCreationRequest(
        @NotBlank(message = "Tên đăng nhập không được để trống")
        @Size(min = 4, max = 50, message = "Tên đăng nhập phải từ 4 đến 50 ký tự")
        String username,

        @NotBlank(message = "Mật khẩu không được để trống")
        @Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự")
        String password,

        @NotBlank(message = "Email không được để trống")
        @Email(message = "Định dạng email không hợp lệ")
        String email
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/UserUpdateRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UserUpdateRequest(
        @Size(min = 6, message = "Mật khẩu phải có ít nhất 6 ký tự")
        String password,

        @Email(message = "Định dạng email không hợp lệ")
        String email
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ApiResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL) // Những trường có giá trị null sẽ được tự động ẩn khỏi JSON trả về
public record ApiResponse<T>(
        int code,         // Mã code nội bộ tự định nghĩa (Ví dụ: 1000 là thành công, 4000 là lỗi validation)
        String message,   // Thông điệp trả về cho Client
        T result          // Dữ liệu thực tế trả về (Có thể là Object sinh viên, List hoặc null nếu lỗi)
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/CourseClassResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record CourseClassResponse(
        Long id,
        String code,
        String semester,
        String subjectCode,
        String subjectName,
        Integer credits
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/GradeResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record GradeResponse(
        Long id,
        Long studentId,
        String studentCode,
        String studentName,
        Long courseClassId,
        String courseClassCode,
        String subjectName,
        Double attendanceGrade,
        Double midtermGrade,
        Double finalGrade,
        Double overallGrade,
        String letterGrade,
        Double grade4
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentAcademicSummaryResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.List;

public record StudentAcademicSummaryResponse(
        Long studentId,
        String studentCode,
        String studentName,
        String className,
        List<GradeResponse> details, // Danh sách chi tiết điểm từng môn của sinh viên
        Integer totalCredits,        // Tổng số tín chỉ tích lũy
        Double gpaSystem10,          // GPA tích lũy hệ 10
        Double gpaSystem4            // GPA tích lũy hệ 4
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/StudentResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record StudentResponse(
        Long id,
        String studentCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean isActive,

        // Bóc tách dữ liệu từ User sang phẳng luôn
        String username,
        String email,

        // Bóc tách dữ liệu từ lớp hành chính Class sang
        String className
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/SubjectResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record SubjectResponse(
        Long id,
        String code,
        String name,
        Integer credits
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/UserResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.util.Set;

public record UserResponse(
        Long id,
        String username,
        String email,
        boolean isActive,
        Set<String> roles // Chỉ trả ra chuỗi tên Role (ADMIN, STUDENT) thay vì cả Object thực thể
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/BaseEntity.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass // Quan trọng: Đánh dấu đây là class cha để các thực thể khác kế thừa
@EntityListeners(AuditingEntityListener.class) // Tự động cập nhật thời gian
public abstract class BaseEntity {

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Class.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "classes")
public class Class extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, unique = true, length = 50)
    private String name; // Ví dụ: D21CNPM1, D22HTTT2

    // Mối quan hệ: Nhiều lớp thuộc về một Khoa
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/CourseClass.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "course_classes")
public class CourseClass extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 30)
    private String code; // Mã lớp học phần (Ví dụ: INT3110_01)

    @Column(name = "semester", nullable = false, length = 20)
    private String semester; // Học kỳ (Ví dụ: HK1-2026)

    // Nhiều lớp học phần thuộc về một Môn học gốc
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Department.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "departments")
public class Department extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 20)
    private String code; // Ví dụ: CNTT, ĐTVT, kttc

    @Column(name = "name", nullable = false, unique = true)
    private String name; // Ví dụ: Công nghệ thông tin
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Role.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "roles")
public class Role extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name; // Ví dụ: ADMIN, TEACHER, STUDENT
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Subject.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "subjects")
public class Subject extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 20)
    private String code; // Ví dụ: THVP01, INT3110

    @Column(name = "name", nullable = false, length = 150)
    private String name; // Ví dụ: Lập trình Spring Boot

    @Column(name = "credits", nullable = false)
    private Integer credits; // Số tín chỉ (Ví dụ: 3)
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/exception/AppException.java">
package com.dangdepzaivaio.StudentManagement.exception;

import lombok.Getter;

@Getter
public class AppException extends RuntimeException {
    private final ErrorCode errorCode;

    public AppException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/CourseClassMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface CourseClassMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    CourseClass toEntity(CourseClassRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    void updateEntityFromRequest(CourseClassRequest request, @MappingTarget CourseClass courseClass);

    // Phẳng hóa dữ liệu từ Object Subject lồng nhau
    @Mapping(target = "subjectCode", source = "subject.code")
    @Mapping(target = "subjectName", source = "subject.name")
    @Mapping(target = "credits", source = "subject.credits")
    CourseClassResponse toResponse(CourseClass courseClass);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/GradeMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface GradeMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "student", ignore = true)
    @Mapping(target = "courseClass", ignore = true)
    Grade toEntity(GradeRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "student", ignore = true)
    @Mapping(target = "courseClass", ignore = true)
    void updateEntityFromRequest(GradeRequest request, @MappingTarget Grade grade);

    @Mapping(target = "studentId", source = "student.id")
    @Mapping(target = "studentCode", source = "student.studentCode")
    @Mapping(target = "studentName", expression = "java(grade.getStudent().getFirstName() + \" \" + grade.getStudent().getLastName())")
    @Mapping(target = "courseClassId", source = "courseClass.id")
    @Mapping(target = "courseClassCode", source = "courseClass.code")
    @Mapping(target = "subjectName", source = "courseClass.subject.name")
    GradeResponse toResponse(Grade grade);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/UserMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "roles", source = "roles")
    UserResponse toResponse(User user);

    // Hàm chuyển đổi custom: Ép danh sách thực thể Role thành bộ tên chuỗi gọn gàng
    default Set<String> mapRoles(Set<Role> roles) {
        if (roles == null) return null;
        return roles.stream()
                .map(Role::getName)
                .collect(Collectors.toSet());
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/ClassRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    List<Class> findByDepartmentId(Long departmentId);
    boolean existsByName(String name);
    boolean existsByDepartmentId(Long departmentId);
    @org.springframework.data.jpa.repository.Query("SELECT c FROM Class c JOIN FETCH c.department")
    List<Class> findAllClassesWithJoinFetch();
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/CourseClassRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CourseClassRepository extends JpaRepository<CourseClass, Long> {
    List<CourseClass> findBySemester(String semester);
    boolean existsByCode(String code);
    boolean existsBySubjectId(Long subjectId);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/DepartmentRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    boolean existsByCode(String code);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/RoleRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/StudentRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByStudentCode(String studentCode);
    boolean existsByStudentCode(String studentCode);
    boolean existsByStudentClassId(Long classId); // studentClass là tên thuộc tính liên kết trong thực thể Student
    @Query("SELECT s FROM Student s " +
            "JOIN FETCH s.user u " +
            "JOIN FETCH s.studentClass c " +
            "WHERE s.isActive = true")
    List<Student> findAllActiveStudentsWithJoinFetch();
    @Query("SELECT s FROM Student s JOIN FETCH s.user JOIN FETCH s.studentClass WHERE s.id = :id")
    Optional<Student> findByIdWithJoinFetch(@Param("id") Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/SubjectRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {
    boolean existsByCode(String code);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/UserRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    List<User> findByIsActiveTrue();
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/CourseClassService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import java.util.List;

public interface CourseClassService {
    CourseClassResponse createCourseClass(CourseClassRequest request);
    List<CourseClassResponse> getAllCourseClasses();
    CourseClassResponse getCourseClassById(Long id);
    CourseClassResponse updateCourseClass(Long id, CourseClassRequest request);
    void deleteCourseClass(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/GradeService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse; // QUAN TRỌNG: Phải import cái này
import java.util.List;

public interface GradeService {
    GradeResponse inputGrade(GradeRequest request);
    List<GradeResponse> getGradesByStudent(Long studentId);
    GradeResponse updateGrade(Long id, GradeRequest request);

    // Khai báo cho bộ CRUD bổ sung
    List<GradeResponse> getAllGrades();
    GradeResponse getGradeById(Long id);
    void deleteGrade(Long id);

    // 🔥 CHÍNH LÀ DÒNG NÀY: Khai báo hàm tổng hợp học tập để Impl có thể @Override thành công
    StudentAcademicSummaryResponse getAcademicSummary(Long studentId);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/CourseClassServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.CourseClassMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.SubjectRepository;
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

        return courseClassMapper.toResponse(courseClassRepository.save(courseClass));
    }

    @Override
    public List<CourseClassResponse> getAllCourseClasses() {
        return courseClassRepository.findAll().stream()
                .map(courseClassMapper::toResponse)
                .toList();
    }

    @Override
    public CourseClassResponse getCourseClassById(Long id) {
        return courseClassRepository.findById(id)
                .map(courseClassMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));
    }

    @Override
    @Transactional
    public CourseClassResponse updateCourseClass(Long id, CourseClassRequest request) {
        CourseClass courseClass = courseClassRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));

        if (!courseClass.getCode().equals(request.code()) && courseClassRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.COURSE_CLASS_EXISTED);
        }

        Subject subject = subjectRepository.findById(request.subjectId())
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));

        courseClassMapper.updateEntityFromRequest(request, courseClass);
        courseClass.setSubject(subject);

        return courseClassMapper.toResponse(courseClassRepository.save(courseClass));
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
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/GradeServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Grade;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.GradeMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.GradeRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository;
import com.dangdepzaivaio.StudentManagement.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {

    private final GradeRepository gradeRepository;
    private final StudentRepository studentRepository;
    private final CourseClassRepository courseClassRepository;
    private final GradeMapper gradeMapper;

    @Override
    @Transactional
    public GradeResponse inputGrade(GradeRequest request) {
        if (gradeRepository.existsByStudentIdAndCourseClassId(request.studentId(), request.courseClassId())) {
            throw new AppException(ErrorCode.GRADE_EXISTED);
        }

        Student student = studentRepository.findById(request.studentId())
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        CourseClass courseClass = courseClassRepository.findById(request.courseClassId())
                .orElseThrow(() -> new AppException(ErrorCode.COURSE_CLASS_NOT_FOUND));

        Grade grade = gradeMapper.toEntity(request);
        grade.setStudent(student);
        grade.setCourseClass(courseClass);

        calculateAndConvertGrade(grade);

        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    @Override
    public List<GradeResponse> getGradesByStudent(Long studentId) {
        if (!studentRepository.existsById(studentId)) {
            throw new AppException(ErrorCode.STUDENT_NOT_FOUND);
        }
        return gradeRepository.findByStudentId(studentId).stream()
                .map(gradeMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public GradeResponse updateGrade(Long id, GradeRequest request) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));

        gradeMapper.updateEntityFromRequest(request, grade);
        calculateAndConvertGrade(grade);

        return gradeMapper.toResponse(gradeRepository.save(grade));
    }

    @Override
    public StudentAcademicSummaryResponse getAcademicSummary(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        List<Grade> grades = gradeRepository.findByStudentId(studentId);

        int totalCredits = 0;
        double totalWeightedGrade10 = 0.0;
        double serverWeightedGrade4 = 0.0;

        for (Grade grade : grades) {
            // Kiểm tra an toàn: Nếu môn học chưa có điểm tổng kết (Null) -> Bỏ qua không cộng vào tích lũy GPA
            if (grade.getOverallGrade() == null || grade.getGrade4() == null) {
                continue;
            }

            // Đảm bảo dữ liệu liên kết không rỗng
            if (grade.getCourseClass() != null && grade.getCourseClass().getSubject() != null) {
                int credits = grade.getCourseClass().getSubject().getCredits();
                totalCredits += credits;
                totalWeightedGrade10 += (grade.getOverallGrade() * credits);
                serverWeightedGrade4 += (grade.getGrade4() * credits);
            }
        }

        double gpa10 = 0.0;
        double gpa4 = 0.0;
        if (totalCredits > 0) {
            gpa10 = totalWeightedGrade10 / totalCredits;
            gpa4 = serverWeightedGrade4 / totalCredits;
            gpa10 = Math.round(gpa10 * 100.0) / 100.0;
            gpa4 = Math.round(gpa4 * 100.0) / 100.0;
        }

        List<GradeResponse> details = grades.stream()
                .map(gradeMapper::toResponse)
                .toList();

        return new StudentAcademicSummaryResponse(
                student.getId(),
                student.getStudentCode(),
                student.getFirstName() + " " + student.getLastName(),
                student.getStudentClass() != null ? student.getStudentClass().getName() : "Chưa xếp lớp",
                details,
                totalCredits,
                gpa10,
                gpa4
        );
    }

    // ==================== LẤY TOÀN BỘ ĐIỂM HỆ THỐNG (GET ALL) ====================
    @Override
    public List<GradeResponse> getAllGrades() {
        return gradeRepository.findAll().stream()
                .map(gradeMapper::toResponse)
                .toList();
    }

    // ==================== LẤY CHI TIẾT 1 ĐẦU ĐIỂM (GET BY ID) ====================
    @Override
    public GradeResponse getGradeById(Long id) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        return gradeMapper.toResponse(grade);
    }

    // ==================== XÓA ĐẦU ĐIỂM (DELETE) ====================
    @Override
    @Transactional
    public void deleteGrade(Long id) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.GRADE_NOT_FOUND));
        gradeRepository.delete(grade);
    }

    // Thuật toán tính điểm ngầm
    // Thuật toán tính điểm ngầm an toàn tuyệt đối
    private void calculateAndConvertGrade(Grade grade) {
        // 🔥 Bảo vệ toán học: Nếu Frontend gửi null (ô input để trống), tự động hiểu là 0.0
        double attendance = grade.getAttendanceGrade() != null ? grade.getAttendanceGrade() : 0.0;
        double midterm = grade.getMidtermGrade() != null ? grade.getMidtermGrade() : 0.0;
        double finalG = grade.getFinalGrade() != null ? grade.getFinalGrade() : 0.0;

        double overall = (attendance * 0.1) + (midterm * 0.3) + (finalG * 0.6);

        overall = Math.round(overall * 100.0) / 100.0;
        grade.setOverallGrade(overall);

        if (overall >= 8.5) {
            grade.setLetterGrade("A");
            grade.setGrade4(4.0);
        } else if (overall >= 8.0) {
            grade.setLetterGrade("B+");
            grade.setGrade4(3.5);
        } else if (overall >= 7.0) {
            grade.setLetterGrade("B");
            grade.setGrade4(3.0);
        } else if (overall >= 6.5) {
            grade.setLetterGrade("C+");
            grade.setGrade4(2.5);
        } else if (overall >= 5.5) {
            grade.setLetterGrade("C");
            grade.setGrade4(2.0);
        } else if (overall >= 5.0) {
            grade.setLetterGrade("D+");
            grade.setGrade4(1.5);
        } else if (overall >= 4.0) {
            grade.setLetterGrade("D");
            grade.setGrade4(1.0);
        } else {
            grade.setLetterGrade("F");
            grade.setGrade4(0.0);
        }
    }
}
</file>

<file path="src/test/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplicationTests.java">
package com.dangdepzaivaio.StudentManagement;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class StudentManagementApplicationTests {

	@Test
	void contextLoads() {
	}

}
</file>

<file path="student_management.sql">
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: student_management
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKpgs3gcxax70h9jugbt24ugwcg` (`name`),
  KEY `FKeerjjltjmtwpjo3jlr7037vxt` (`department_id`),
  CONSTRAINT `FKeerjjltjmtwpjo3jlr7037vxt` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-07 05:23:21.000000','2026-06-07 05:23:21.000000','D21CNPM1',1),(2,'2026-06-08 16:09:33.690979','2026-06-08 16:09:33.690979','D22CNPM2',1),(3,'2026-06-08 16:25:38.022113','2026-06-08 16:25:38.022113','D22KHMT1',2),(4,'2026-06-08 16:25:43.674327','2026-06-08 16:25:43.674327','D22DTVT1',3);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_classes`
--

DROP TABLE IF EXISTS `course_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_classes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `code` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `semester` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKmdeewqfqfih9ft75b0gbp9nrc` (`code`),
  KEY `FKpxijwa2w0cvst789igk5x2fpu` (`subject_id`),
  CONSTRAINT `FKpxijwa2w0cvst789igk5x2fpu` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (2,'2026-06-07 07:39:44.047946','2026-06-07 07:39:44.047946','CPP_BASE_01','HK1-2026',3);
/*!40000 ALTER TABLE `course_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKl7tivi5261wxdnvo6cct9gg6t` (`code`),
  UNIQUE KEY `UKj6cwks7xecs5jov19ro8ge3qk` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-07 05:23:21.000000','2026-06-07 05:23:21.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-08 16:07:51.653195','2026-06-08 16:29:59.021126','KHMT_ADV','Khoa Khoa học Máy tính Chuyên sâu'),(3,'2026-06-08 16:25:11.287147','2026-06-08 16:25:11.287147','KHMT','Khoa Khoa học máy tính'),(4,'2026-06-08 16:25:18.436674','2026-06-08 16:25:18.436674','KTTC','Khoa Kinh tế Tài chính');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `attendance_grade` double DEFAULT NULL,
  `final_grade` double DEFAULT NULL,
  `letter_grade` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `midterm_grade` double DEFAULT NULL,
  `overall_grade` double DEFAULT NULL,
  `course_class_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  `grade_4` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKko1u7sub9pfixo5kagdclh8sj` (`student_id`,`course_class_id`),
  KEY `FK5c6jpjp7bty7q1flkpcc6pi4a` (`course_class_id`),
  CONSTRAINT `FK13a16545m7vvrcspc999r15s9` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `FK5c6jpjp7bty7q1flkpcc6pi4a` FOREIGN KEY (`course_class_id`) REFERENCES `course_classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKofx66keruapi6vyqpv6f2or37` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-06 15:42:59.479477','2026-06-06 15:42:59.479477','ADMIN'),(2,'2026-06-06 15:42:59.522480','2026-06-06 15:42:59.522480','STUDENT');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `student_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `is_active` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKcgcf3r5xk73o0etbduc1qxnol` (`student_code`),
  UNIQUE KEY `UKg4fwvutq09fjdlb4bb0byp7t` (`user_id`),
  KEY `FKhnslh0rm5bthlble8vjunbnwe` (`class_id`),
  CONSTRAINT `FKdt1cjx5ve5bdabmuuf3ibrwaq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKhnslh0rm5bthlble8vjunbnwe` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'2026-06-07 05:23:56.212382','2026-06-07 06:37:33.669294','2005-02-02','Anh','Nam','Nguyễn Đình','0987654323','B21DCCN001',1,3,_binary '\0'),(2,'2026-06-07 05:27:11.178181','2026-06-07 05:27:11.178181','2005-05-23','Đăng','Nam','Trần Minh','0123456789','K25TMD002',1,5,_binary ''),(3,'2026-06-07 05:28:07.320240','2026-06-07 05:28:07.320820','2005-01-01','Anh','Nam','Nguyễn Đình','0987654322','K25TMD001',1,6,_binary ''),(4,'2026-06-08 16:27:11.975218','2026-06-08 16:27:11.975218','2004-10-15','Hải','Nam','Nguyễn Hoàng','0912345678','B22CNPM001',1,7,_binary ''),(5,'2026-06-08 16:27:18.333620','2026-06-08 16:27:18.333620','2004-05-20','Linh','Nữ','Phạm Khánh','0923456789','B22KHMT001',2,8,_binary ''),(6,'2026-06-08 16:27:22.690037','2026-06-08 16:27:22.690037','2004-12-01','Tùng','Nam','Vũ Sơn','0934567890','B22DTVT001',3,9,_binary '');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credits` int NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKrg7x1lyii7kdyycw98d45vep5` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (3,'2026-06-07 06:35:32.807481','2026-06-07 06:35:32.807481','C++_Base',3,'Lập trình C++ cơ bản');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
  CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (3,2),(5,2),(6,2),(7,2),(8,2),(9,2);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2026-06-06 16:20:40.847736','2026-06-06 16:20:40.847736','minhdang@open.edu.vn','password123','minhdangtran',_binary ''),(2,'2026-06-06 16:21:57.950655','2026-06-06 16:37:24.756683','anhnd.updated@open.edu.vn','newpassword123456','nguyendinhanh',_binary ''),(3,'2026-06-07 05:23:56.176308','2026-06-07 06:37:33.674291','anh.nguyen@open.edu.vn','password123','nguyendinhanh2003',_binary '\0'),(5,'2026-06-07 05:27:11.172961','2026-06-07 05:27:11.172961','minhdangdask@open.edu.vn','password123','dangdepzaivaio',_binary ''),(6,'2026-06-07 05:28:07.315346','2026-06-07 05:28:07.315346','dinhanhboyhot2@open.edu.vn','password123','dinhanhboyhot2',_binary ''),(7,'2026-06-08 16:27:11.964323','2026-06-08 16:27:11.964323','hai.nh@open.edu.vn','$2a$10$..HvSxCUfLbulwGq0uUqJuNtctxuIp8mAGV4pSMXnIyTLdjwdbWXe','hoanghai2004',_binary ''),(8,'2026-06-08 16:27:18.328010','2026-06-08 16:27:18.328010','linh.pk@open.edu.vn','$2a$10$I13BwRkk9BhfgNPdP.XvLeirmFo3xWdEZryYUVz..pWRJ.9owgA0u','khanhlinh2004',_binary ''),(9,'2026-06-08 16:27:22.685722','2026-06-08 16:27:22.685722','tung.vs@open.edu.vn','$2a$10$.paoWU6SAujvCNcV46RxT.WohPQmj2TlIJnNBSkIMONrXWIfwB0W2','sontung2004',_binary '');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-08 23:38:00
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/SubjectController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse; // Đổi import sang DTO Response
import com.dangdepzaivaio.StudentManagement.service.SubjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService subjectService;

    @PostMapping
    public ApiResponse<SubjectResponse> createSubject(@RequestBody @Valid SubjectRequest request) {
        return new ApiResponse<>(1000, "Tạo môn học thành công!", subjectService.createSubject(request));
    }

    @GetMapping
    public ApiResponse<List<SubjectResponse>> getAllSubjects() {
        return new ApiResponse<>(1000, "Lấy danh sách môn học thành công!", subjectService.getAllSubjects());
    }

    @GetMapping("/{subjectId}")
    public ApiResponse<SubjectResponse> getSubject(@PathVariable Long subjectId) {
        return new ApiResponse<>(1000, "Lấy chi tiết môn học thành công!", subjectService.getSubjectById(subjectId));
    }

    @PutMapping("/{subjectId}")
    public ApiResponse<SubjectResponse> updateSubject(@PathVariable Long subjectId, @RequestBody @Valid SubjectRequest request) {
        return new ApiResponse<>(1000, "Cập nhật môn học thành công!", subjectService.updateSubject(subjectId, request));
    }

    @DeleteMapping("/{subjectId}")
    public ApiResponse<String> deleteSubject(@PathVariable Long subjectId) {
        subjectService.deleteSubject(subjectId);
        return new ApiResponse<>(1000, "Xóa môn học thành công!", "Môn học có ID " + subjectId + " đã bị xóa hoàn toàn.");
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Grade.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "grades", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"student_id", "course_class_id"}) // Một SV chỉ có 1 dòng điểm trong 1 lớp học phần
})
public class Grade extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Nhiều dòng điểm thuộc về một Sinh viên
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    // Nhiều dòng điểm thuộc về một Lớp học phần
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_class_id", nullable = false)
    private CourseClass courseClass;

    @Column(name = "attendance_grade")
    private Double attendanceGrade; // Điểm chuyên cần

    @Column(name = "midterm_grade")
    private Double midtermGrade; // Điểm giữa kỳ

    @Column(name = "final_grade")
    private Double finalGrade; // Điểm cuối kỳ

    @Column(name = "overall_grade")
    private Double overallGrade; // Điểm tổng kết hệ 10

    @Column(name = "letter_grade", length = 5)
    private String letterGrade; // Điểm chữ (A, B+, B, C...)

    // BỔ SUNG THÊM DÒNG NÀY
    @Column(name = "grade_4")
    private Double grade4; // Điểm số hệ 4 (Ví dụ: 3.5, 4.0)
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Student.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "students")
public class Student extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_code", nullable = false, unique = true, length = 20)
    private String studentCode; // Mã sinh viên (Ví dụ: B21DCCN001)

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName; // Tên (Ví dụ: Anh)

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName; // Họ và đệm (Ví dụ: Nguyễn Đình)

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "phone_number", length = 15)
    private String phoneNumber;

    @Builder.Default
    @Column(name = "is_active", nullable = false, columnDefinition = "TINYINT(1)")
    private boolean isActive = true;

    // Mỗi sinh viên sở hữu duy nhất 1 tài khoản hệ thống
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    // Nhiều sinh viên học chung 1 lớp hành chính
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "class_id", nullable = false)
    private Class studentClass;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/User.java">
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Builder.Default
    @Column(name = "is_active", nullable = false, columnDefinition = "TINYINT(1)")
    private boolean isActive = true;

    // Quan hệ nhiều-nhiều: Một user có thể có nhiều role, một role có nhiều user
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/exception/GlobalExceptionHandler.java">
package com.dangdepzaivaio.StudentManagement.exception;

import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // 1. Bắt toàn bộ các lỗi Runtime không xác định (Tránh làm lộ log hệ thống ra ngoài)
    // 1. Bắt toàn bộ các lỗi Runtime không xác định và trả thẳng tên lỗi ra Postman
    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ApiResponse<Object>> handlingRuntimeException(Exception exception) {

        // Tạo câu thông báo chi tiết: Lấy tên Class của lỗi + Tin nhắn lỗi gốc
        String detailedMessage = exception.getClass().getSimpleName() + " -> " + exception.getMessage();

        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.UNCATEGORIZED_EXCEPTION.getCode(),
                detailedMessage, // Trả thẳng câu này ra ngoài Postman thay vì câu "Lỗi hệ thống không xác định"
                null
        );
        return ResponseEntity.status(ErrorCode.UNCATEGORIZED_EXCEPTION.getStatusCode()).body(apiResponse);
    }

    // 2. Bắt lỗi nghiệp vụ hệ thống do chúng ta chủ động throw (AppException)
    @ExceptionHandler(value = AppException.class)
    public ResponseEntity<ApiResponse<Object>> handlingAppException(AppException exception) {
        ErrorCode errorCode = exception.getErrorCode();
        ApiResponse<Object> apiResponse = new ApiResponse<>(
                errorCode.getCode(),
                errorCode.getMessage(),
                null
        );
        return ResponseEntity.status(errorCode.getStatusCode()).body(apiResponse);
    }

    // 3. Bắt toàn bộ lỗi Validation đầu vào từ DTO Records (@NotBlank, @Size, @Email)
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Object>> handlingValidation(MethodArgumentNotValidException exception) {
        String defaultMessage = exception.getFieldError().getDefaultMessage();

        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.VALIDATION_ERROR.getCode(),
                defaultMessage, // Trả ra chính xác câu thông báo lỗi bạn viết ở Record DTO
                null
        );
        return ResponseEntity.status(ErrorCode.VALIDATION_ERROR.getStatusCode()).body(apiResponse);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/StudentMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "studentClass", ignore = true)
    @Mapping(target = "user", source = "user")
    Student toEntity(StudentCreationRequest request);

    // BỔ SUNG THÊM HÀM NÀY: Để MapStruct tự xử lý chuyển đổi thực thể User lồng bên trong
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "roles", ignore = true)
    User toUserEntity(UserCreationRequest request);

    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "className", source = "studentClass.name")
    StudentResponse toResponse(Student student);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/SubjectMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse; // Thêm import này
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface SubjectMapper {

    @Mapping(target = "id", ignore = true)
    Subject toEntity(SubjectRequest request);

    @Mapping(target = "id", ignore = true)
    void updateEntityFromRequest(SubjectRequest request, @MappingTarget Subject subject);

    // BỔ SUNG HÀM NÀY: Chuyển đổi thực thể sang DTO phẳng sạch sẽ
    SubjectResponse toResponse(Subject subject);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/GradeRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {

    // Sử dụng JOIN FETCH để lôi toàn bộ dữ liệu Lớp học phần và Môn học lên cùng 1 lúc trong 1 câu SQL duy nhất
    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject s " +
            "WHERE g.student.id = :studentId")
    List<Grade> findByStudentId(@Param("studentId") Long studentId);

    List<Grade> findByCourseClassId(Long courseClassId);
    boolean existsByStudentIdAndCourseClassId(Long studentId, Long courseClassId);
    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject sub")
    List<Grade> findAllGradesWithJoinFetch();
    boolean existsByCourseClassId(Long courseClassId);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/SubjectServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.SubjectMapper;
import com.dangdepzaivaio.StudentManagement.repository.CourseClassRepository;
import com.dangdepzaivaio.StudentManagement.repository.SubjectRepository;
import com.dangdepzaivaio.StudentManagement.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;
    private final SubjectMapper subjectMapper;
    private final CourseClassRepository courseClassRepository;

    @Override
    @Transactional
    public SubjectResponse createSubject(SubjectRequest request) {
        if (subjectRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.SUBJECT_EXISTED);
        }
        Subject subject = subjectMapper.toEntity(request);
        return subjectMapper.toResponse(subjectRepository.save(subject)); // Đã bọc Response
    }

    @Override
    public List<SubjectResponse> getAllSubjects() {
        return subjectRepository.findAll().stream()
                .map(subjectMapper::toResponse) // Map toàn bộ danh sách sang DTO
                .toList();
    }

    @Override
    public SubjectResponse getSubjectById(Long id) {
        return subjectRepository.findById(id)
                .map(subjectMapper::toResponse) // Ánh xạ trực tiếp
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));
    }

    @Override
    @Transactional
    public SubjectResponse updateSubject(Long id, SubjectRequest request) {
        // Tận dụng hàm tìm kiếm thực thể gốc để xử lý
        Subject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));

        // Kiểm tra nếu đổi sang mã môn mới, mã đó có bị trùng với môn khác không
        if (!subject.getCode().equals(request.code()) && subjectRepository.existsByCode(request.code())) {
            throw new AppException(ErrorCode.SUBJECT_EXISTED);
        }

        subjectMapper.updateEntityFromRequest(request, subject);
        return subjectMapper.toResponse(subjectRepository.save(subject)); // Đã bọc Response
    }

    @Override
    @Transactional
    public void deleteSubject(Long id) {
        Subject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.SUBJECT_NOT_FOUND));
        if (courseClassRepository.existsBySubjectId(id)) {
            throw new AppException(ErrorCode.SUBJECT_HAS_CLASSES);
        }
        subjectRepository.delete(subject);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/SubjectService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.SubjectResponse; // Sửa import này
import java.util.List;

public interface SubjectService {
    SubjectResponse createSubject(SubjectRequest request);
    List<SubjectResponse> getAllSubjects();
    SubjectResponse getSubjectById(Long id);
    SubjectResponse updateSubject(Long id, SubjectRequest request);
    void deleteSubject(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/StudentManagementApplication.java">
package com.dangdepzaivaio.StudentManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing

public class StudentManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementApplication.class, args);
	}

}
</file>

<file path="pom.xml">
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>4.0.6</version>
		<relativePath/> </parent>
	<groupId>com.dangdepzaivaio</groupId>
	<artifactId>StudentManagement</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>StudentManagement</name>
	<description>Student Management System API</description>

	<properties>
		<java.version>26</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>

		<dependency>
			<groupId>com.nimbusds</groupId>
			<artifactId>nimbus-jose-jwt</artifactId>
			<version>9.37.3</version>
		</dependency>

		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>

		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.mapstruct</groupId>
			<artifactId>mapstruct</artifactId>
			<version>1.6.3</version>
		</dependency>
		<dependency>
			<groupId>org.mapstruct</groupId>
			<artifactId>mapstruct-processor</artifactId>
			<version>1.6.3</version>
			<scope>provided</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</exclude>
					</excludes>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<executions>
					<execution>
						<id>default-compile</id>
						<phase>compile</phase>
						<goals>
							<goal>compile</goal>
						</goals>
						<configuration>
							<annotationProcessorPaths>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok</artifactId>
									<version>${lombok.version}</version>
								</path>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok-mapstruct-binding</artifactId>
									<version>0.2.0</version>
								</path>
								<path>
									<groupId>org.mapstruct</groupId>
									<artifactId>mapstruct-processor</artifactId>
									<version>1.6.3</version>
								</path>
							</annotationProcessorPaths>
						</configuration>
					</execution>
					<execution>
						<id>default-testCompile</id>
						<phase>test-compile</phase>
						<goals>
							<goal>testCompile</goal>
						</goals>
						<configuration>
							<annotationProcessorPaths>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok</artifactId>
									<version>${lombok.version}</version>
								</path>
								<path>
									<groupId>org.projectlombok</groupId>
									<artifactId>lombok-mapstruct-binding</artifactId>
									<version>0.2.0</version>
								</path>
								<path>
									<groupId>org.mapstruct</groupId>
									<artifactId>mapstruct-processor</artifactId>
									<version>1.6.3</version>
								</path>
							</annotationProcessorPaths>
						</configuration>
					</execution>
				</executions>
			</plugin>
		</plugins>
	</build>
</project>
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import com.dangdepzaivaio.StudentManagement.service.StudentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @PostMapping
    public ApiResponse<StudentResponse> createStudent(@RequestBody @Valid StudentCreationRequest request) {
        return new ApiResponse<>(1000, "Tạo hồ sơ sinh viên thành công!", studentService.createStudent(request));
    }

    @GetMapping
    public ApiResponse<List<StudentResponse>> getAllStudents() {
        return new ApiResponse<>(1000, "Lấy danh sách sinh viên thành công!", studentService.getAllStudents());
    }

    @GetMapping("/{studentId}")
    public ApiResponse<StudentResponse> getStudent(@PathVariable Long studentId) {
        return new ApiResponse<>(1000, "Lấy chi tiết sinh viên thành công!", studentService.getStudentById(studentId));
    }

    @PutMapping("/{studentId}")
    public ApiResponse<StudentResponse> updateStudent(@PathVariable Long studentId, @RequestBody @Valid StudentUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin sinh viên thành công!", studentService.updateStudent(studentId, request));
    }
    @DeleteMapping("/{studentId}")
    public ApiResponse<String> deleteStudent(@PathVariable Long studentId) {
        studentService.disableStudent(studentId); // Gọi đúng hàm disableStudent
        return new ApiResponse<>(1000, "Xóa hồ sơ sinh viên thành công!", "Hồ sơ sinh viên có ID " + studentId + " và tài khoản liên kết đã bị vô hiệu hóa.");
    }

}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/UserController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest; // Thêm import này
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Thêm import này

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ApiResponse<UserResponse> createUser(@RequestBody @Valid UserCreationRequest request) {
        return new ApiResponse<>(1000, "Tạo người dùng thành công", userService.createUser(request));
    }

    @GetMapping
    public ApiResponse<List<UserResponse>> getAllUsers() {
        return new ApiResponse<>(1000, "Lấy danh sách thành công", userService.getAllUsers());
    }

    @GetMapping("/{userId}")
    public ApiResponse<UserResponse> getUser(@PathVariable Long userId) {
        return new ApiResponse<>(1000, "Lấy chi tiết người dùng thành công", userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ApiResponse<UserResponse> updateUser(@PathVariable Long userId, @RequestBody @Valid UserUpdateRequest request) {
        return new ApiResponse<>(1000, "Cập nhật thông tin thành công", userService.updateUser(userId, request));
    }
    @DeleteMapping("/{userId}")
    public ApiResponse<String> deleteUser(@PathVariable Long userId) {
        userService.disableUser(userId); // Gọi hàm chuyển trạng thái xuống tầng Service
        return new ApiResponse<>(1000, "Xóa tài khoản người dùng thành công!", "Tài khoản có ID " + userId + " đã bị vô hiệu hóa.");
    }

}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/StudentServiceImpl.java">
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
    private final org.springframework.security.crypto.password.PasswordEncoder passwordEncoder;

    @Override
    @Transactional // Đảm bảo đồng bộ dữ liệu giữa bảng Users và Students
    public StudentResponse createStudent(StudentCreationRequest request) { // ĐỔI KIỂU TRẢ VỀ THÀNH StudentResponse Ở ĐÂY

        // 1. Kiểm tra Mã sinh viên đã tồn tại chưa
        if (studentRepository.existsByStudentCode(request.studentCode())) {
            throw new AppException(ErrorCode.STUDENT_CODE_EXISTED);
        }

        // 2. Kiểm tra Tài khoản đăng nhập đã tồn tại chưa
        if (userRepository.existsByUsername(request.user().username())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        if (userRepository.existsByEmail(request.user().email())) {
            throw new AppException(ErrorCode.EMAIL_EXISTED);
        }

        // 3. Kiểm tra Lớp hành chính có tồn tại không
        Class studentClass = classRepository.findById(request.classId())
                .orElseThrow(() -> new AppException(ErrorCode.CLASS_NOT_FOUND));

        // 4. Khởi tạo tài khoản User hệ thống đi kèm hồ sơ sinh viên
        User user = studentMapper.toUserEntity(request.user());
        user.setPassword(passwordEncoder.encode(request.user().password()));

        // Lấy vai trò STUDENT mặc định đã được khởi tạo từ DatabaseInitializer
        Role studentRole = roleRepository.findByName("STUDENT")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));
        user.setRoles(Set.of(studentRole));
        userRepository.save(user);

        // 5. Khởi tạo thực thể Student và liên kết mối quan hệ
        Student student = studentMapper.toEntity(request);
        student.setUser(user); // Gán quan hệ @OneToOne
        student.setStudentClass(studentClass); // Gán quan hệ @ManyToOne

        // 6. Lưu hồ sơ sinh viên hoàn chỉnh vào Database và trả về dạng DTO phẳng sạch sẽ
        return studentMapper.toResponse(studentRepository.save(student));
    }

    @Override
    public List<StudentResponse> getAllStudents() {
        return studentRepository.findAllActiveStudentsWithJoinFetch().stream() // 🔥 ĐÃ TỐI ƯU SẠCH BÓNG N+1
                .map(studentMapper::toResponse)
                .toList();
    }

    @Override
    public StudentResponse getStudentById(Long id) {
        return studentRepository.findByIdWithJoinFetch(id) // 🔥 Đã tối ưu tốc độ ánh xạ phẳng
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

        // Cập nhật các thông tin lý lịch sinh viên
        student.setFirstName(request.firstName());
        student.setLastName(request.lastName());
        student.setDateOfBirth(request.dateOfBirth());
        student.setGender(request.gender());
        student.setPhoneNumber(request.phoneNumber());

        return studentMapper.toResponse(studentRepository.save(student));
    }

    @Override
    @Transactional // Đảm bảo đồng bộ tính toàn vẹn dữ liệu
    public void disableStudent(Long id) {
        // 1. Kiểm tra xem sinh viên có tồn tại không
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));

        // 2. Chuyển trạng thái hoạt động của Sinh viên thành false
        student.setActive(false);
        studentRepository.save(student);

        // 3. Đồng bộ khóa luôn cả tài khoản User đăng nhập đi kèm
        User user = student.getUser();
        if (user != null) {
            user.setActive(false);
            userRepository.save(user);
        }
    }

}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/UserServiceImpl.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import java.util.List;
import java.util.Set; // 🔥 Thêm import này

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;
import com.dangdepzaivaio.StudentManagement.entity.Role;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.mapper.UserMapper;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository; // 🔥 Bổ sung Repository này
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserResponse createUser(UserCreationRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        // Lấy quyền ADMIN cho tài khoản quản trị viên mới
        Role adminRole = roleRepository.findByName("ADMIN")
                .orElseThrow(() -> new AppException(ErrorCode.ROLE_NOT_FOUND));

        User user = User.builder()
                .username(request.username())
                .password(passwordEncoder.encode(request.password()))
                .email(request.email())
                .roles(Set.of(adminRole)) // 🔥 Đã bảo vệ: Tránh NullPointerException khi Login
                .build();

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    public List<UserResponse> getAllUsers() {
        return userRepository.findByIsActiveTrue().stream()
                .map(userMapper::toResponse)
                .toList();
    }

    @Override
    public UserResponse getUserById(Long id) {
        return userRepository.findById(id)
                .map(userMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    @Transactional
    public UserResponse updateUser(Long id, UserUpdateRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        if (request.password() != null && !request.password().isBlank()) {
            user.setPassword(passwordEncoder.encode(request.password()));
        }
        if (request.email() != null && !request.email().isBlank()) {
            user.setEmail(request.email());
        }

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    @Transactional
    public void disableUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        user.setActive(false);
        userRepository.save(user);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/StudentService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import java.util.List;

public interface StudentService {
    StudentResponse createStudent(StudentCreationRequest request);
    List<StudentResponse> getAllStudents();
    StudentResponse getStudentById(Long id);
    StudentResponse updateStudent(Long id, StudentUpdateRequest request);
    void disableStudent(Long id);
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/UserService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.UserCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.UserUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserCreationRequest request);
    List<UserResponse> getAllUsers();
    UserResponse getUserById(Long id);
    UserResponse updateUser(Long id, UserUpdateRequest request);
    void disableUser(Long id);
}
</file>

<file path="src/main/resources/application.yaml">
spring:
  application:
    name: StudentManagement
  datasource:
    url: jdbc:mysql://localhost:3306/student_management?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    username: root
    password: dcnyuu
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        hibernate.dialect: org.hibernate.dialect.MySQLDialect
        hibernate.jdbc.batch_size: 20
server:
  port: 8081

jwt:
  signer-key: "TranMinhDangDepZaiVaioSieuCapVipPro2005"
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/exception/ErrorCode.java">
package com.dangdepzaivaio.StudentManagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import lombok.Getter;

@Getter
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Lỗi hệ thống không xác định", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXISTED(1001, "Tài khoản đăng nhập đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    ROLE_NOT_FOUND(1002, "Vai trò người dùng (Role) không tồn tại", HttpStatus.NOT_FOUND),
    STUDENT_NOT_FOUND(1003, "Không tìm thấy thông tin sinh viên yêu cầu", HttpStatus.NOT_FOUND),
    CLASS_NOT_FOUND(1004, "Lớp hành chính không tồn tại trên hệ thống", HttpStatus.NOT_FOUND),
    VALIDATION_ERROR(4000, "Dữ liệu đầu vào không hợp lệ", HttpStatus.BAD_REQUEST),
    EMAIL_EXISTED(1005, "Email này đã được sử dụng trên hệ thống", HttpStatus.BAD_REQUEST),
    SUBJECT_EXISTED(1006, "Môn học này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    SUBJECT_NOT_FOUND(1007, "Không tìm thấy thông tin môn học yêu cầu", HttpStatus.NOT_FOUND),
    COURSE_CLASS_EXISTED(1008, "Mã lớp học phần này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_NOT_FOUND(1009, "Không tìm thấy thông tin lớp học phần yêu cầu", HttpStatus.NOT_FOUND),
    GRADE_EXISTED(1010, "Sinh viên này đã được nhập điểm cho lớp học phần này trước đó", HttpStatus.BAD_REQUEST),
    GRADE_NOT_FOUND(1011, "Không tìm thấy thông tin đầu điểm yêu cầu", HttpStatus.NOT_FOUND),
    DEPARTMENT_NOT_FOUND(1012, "Không tìm thấy thông tin khoa/viện yêu cầu", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1013, "Tên đăng nhập hoặc mật khẩu không chính xác", HttpStatus.UNAUTHORIZED),
    CLASS_EXISTED(1014, "Tên lớp hành chính này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    DEPARTMENT_EXISTED(1015, "Mã khoa/viện đào tạo này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    STUDENT_CODE_EXISTED(1016, "Mã số sinh viên này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    DEPARTMENT_HAS_CLASSES(1017, "Không thể xóa khoa này vì đang có lớp hành chính thuộc về khoa", HttpStatus.BAD_REQUEST),
    CLASS_HAS_STUDENTS(1018, "Không thể xóa lớp hành chính này vì đang có sinh viên thuộc về lớp", HttpStatus.BAD_REQUEST),
    USER_NOT_FOUND(1019, "Không tìm thấy thông tin tài khoản yêu cầu", HttpStatus.NOT_FOUND),
    SUBJECT_HAS_CLASSES(1020, "Không thể xóa môn học này vì đang có lớp học phần trực thuộc", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_HAS_GRADES(1021, "Không thể xóa lớp học phần này vì đã có sinh viên nhận đầu điểm", HttpStatus.BAD_REQUEST);

    private final int code;
    private final String message;
    private final HttpStatusCode statusCode;

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/README.md">
# Student Management System (Hệ thống Quản lý Sinh viên)

Hệ thống Backend RESTful API quản lý đào tạo và điểm số cấp bậc đại học, được xây dựng dựa trên kiến trúc phân tầng chuyên nghiệp (Layered Architecture) với các công nghệ tối tân nhất hiện nay.

---

## 🛠 1. Công nghệ Sử dụng (Tech Stack)
* **Core Language:** Java 26 (Tận dụng tối đa Java Records, Pattern Matching)
* **Framework:** Spring Boot 4.0.6 (Bản phát hành mới nhất)
* **Database Layer:** MySQL 8.0, Spring Data JPA (Hibernate 7.x)
* **Security & Auth:** Spring Security, JWT (JSON Web Token) - *Tạm thời disable ở môi trường Dev để test API*
* **Data Mapping & Utilities:** MapStruct 1.6.3, Lombok, Jakarta Validation
* **Build Tool:** Maven Wrapper (`./mvnw`)

---

## 🏗 2. Kiến trúc Hệ thống (Layered Architecture)
Dự án được phân chia thư mục nghiêm ngặt theo các tầng độc lập để đảm bảo tính dễ mở rộng và bảo trì:
* `entity`: Ánh xạ các bảng trong cơ sở dữ liệu với chiến lược tối ưu `FetchType.LAZY` để kiểm soát hiệu năng.
* `repository`: Tầng giao tiếp dữ liệu trực tiếp với MySQL thông qua JpaRepository, tích hợp các truy vấn tùy chỉnh với `JOIN FETCH` để tối ưu hóa hiệu năng truy vấn.
* `dto`: Đối tượng truyền tải dữ liệu, sử dụng **Java Records** bất biến (Immutable) siêu nhẹ kèm bộ lọc Validation đầu vào.
* `mapper`: Chuyển đổi tự động hiệu năng cao giữa Entity <-> DTO bằng MapStruct phẳng hóa dữ liệu lồng nhau.
* `exception`: Bộ lọc quản lý và bắt lỗi tập trung toàn hệ thống (`@RestControllerAdvice`).
* `service`: Nơi xử lý logic nghiệp vụ cốt lõi và các thuật toán tính toán phức tạp.
* `controller`: Định nghĩa các RESTful API Endpoint phục vụ Client.

---

## ✅ 3. Tiến độ Dự án (Project Progress)

### 🔹 Giai đoạn 1: Khởi tạo và Cấu hình Nền tảng
* Khởi tạo thành công dự án Spring Boot 4.0.6 phối hợp Java 26 trên hệ thống Maven.
* Cấu hình đồng bộ tệp kết nối `application.yaml` tới MySQL, xử lý triệt để các cảnh báo bảo mật JDBC.

### 🔹 Giai đoạn 2: Thiết kế Hệ thống Thực thể (Entities)
Dựng hoàn thiện cấu trúc quan hệ lồng nhau giữa 8 thực thể lõi, kế thừa tự động hóa mốc thời gian từ `BaseEntity` (JPA Auditing):
1. **`Role`**: Danh mục vai trò hệ thống (ADMIN, STUDENT).
2. **`User`**: Định danh tài khoản hệ thống (Quan hệ `@ManyToMany` tự sinh bảng trung gian `user_roles`).
3. **`Department`**: Quản lý các Khoa/Viện đào tạo.
4. **`Class`**: Lớp hành chính gốc của sinh viên (`@ManyToOne` thuộc về Department).
5. **`Subject`**: Danh mục môn học và số tín chỉ tương ứng.
6. **`Student`**: Hồ sơ lý lịch sinh viên (Liên kết `@OneToOne` với User và `@ManyToOne` với Class).
7. **`CourseClass`**: Lớp học phần mở theo từng học kỳ (Liên kết `@ManyToOne` với Subject).
8. **`Grade`**: Bảng điểm số thành phần của sinh viên (Ràng buộc `@UniqueConstraint` kép giữa `student_id` và `course_class_id`).

### 🔹 Giai đoạn 3: Phân hệ Quản lý Tài khoản & Hồ sơ Sinh viên (CRUD & Soft Delete Kép)
* **API lồng nhau phức tạp (Nested JSON):** Xây dựng bộ hàm tạo mới sinh viên đi kèm tài khoản hệ thống cùng lúc, tự động map cấu trúc qua MapStruct dưới sự bảo vệ của `@Transactional`.
* **Xóa mềm liên kết hai tầng (Cascading Soft Delete):** Triển khai hàm `disableStudent` và `disableUser` nhằm vô hiệu hóa đồng thời trạng thái hoạt động của cả hồ sơ Sinh viên lẫn tài khoản Người dùng (`User`) thông qua cờ trạng thái `is_active`.

### 🔹 Giai đoạn 4: Nghiệp vụ Đào tạo & Thuật toán Tính Điểm Tín chỉ (Core Business Completed)
* **CRUD Môn học (`Subject`):** Hoàn thành trọn gói phân hệ môn học, áp dụng `SubjectResponse` bảo mật dữ liệu đầu ra phẳng lỳ, lọc sạch các thuộc tính thời gian hệ thống.
* **CRUD Lớp học phần (`CourseClass`):** Hoàn thiện đầy đủ bộ 5 API mở lớp học phần theo từng học kỳ (Ví dụ: `HK1-2026`), liên kết chặt chẽ khóa ngoại mượt mà.
* **CRUD Điểm số & Thuật toán Quy đổi (`Grade`):** * API nhập/sửa điểm thành phần (`attendanceGrade`, `midtermGrade`, `finalGrade`) kiểm soát chặt chẽ giá trị đầu vào từ `0` đến `10`.
  * Logic tự động tính toán Điểm tổng kết hệ 10 theo trọng số tiêu chuẩn: `10% Chuyên cần - 30% Giữa kỳ - 60% Cuối kỳ`.
  * Thuật toán tự động quy đổi từ hệ điểm 10 sang Điểm chữ (`A, B+, B, C+, C, D+, D, F`) và Điểm số hệ 4 (`4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0`) chuẩn quy chế tín chỉ Đại học.
* **API Tổng hợp học tập & Tính GPA tích lũy:** Triển khai thuật toán tính tổng số tín chỉ tích lũy và điểm trung bình tích lũy (GPA) theo công thức **bình quân gia quyền** của số tín chỉ môn học.
* **Tối ưu hóa Hiệu năng (Performance Optimization):** Áp dụng kỹ thuật `JOIN FETCH` trong `GradeRepository` xử lý triệt để lỗi truy vấn **N+1**, giúp gom toàn bộ dữ liệu lồng nhau phức tạp về duy nhất một câu lệnh SQL.

---

## 🚀 4. Lộ trình Triển khai Tiếp theo (Roadmap)

### 🔲 Giai đoạn 5: Hoàn thiện Phân hệ Quản lý Hành chính
* Xây dựng trọn bộ API CRUD cho phân hệ Khoa/Viện (`Department`) và Lớp hành chính (`Class`) nhằm khép kín hoàn toàn quy trình nạp dữ liệu hệ thống, loại bỏ việc viết lệnh SQL thủ công.

### 🔲 Giai đoạn 6: Tích hợp Hệ thống Bảo mật Chuyên sâu (Spring Security & JWT)
* Kích hoạt lại Spring Security trên file `pom.xml`.
* Thực hiện mã hóa mật khẩu một chiều bằng thuật toán `BCryptPasswordEncoder`.
* Xây dựng API Đăng nhập (`POST /auth/login`), kiểm tra thông tin và cấp phát chuỗi mã hóa bảo mật Token JWT.
* Thiết lập cấu hình phân quyền chặt chẽ (Chỉ Giảng viên/Admin được nhập/sửa điểm, Sinh viên chỉ được quyền xem điểm cá nhân).

### 🔲 Giai đoạn 7: Đóng gói và Triển khai hệ thống (Dockerize)
* Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java.
* Viết file liên kết đồng bộ `docker-compose.yml` để vận hành cùng lúc Container Spring Boot và Container Database MySQL độc lập trên mọi môi trường.

---

## 🔗 5. Quy trình Quản lý Mã nguồn (Git Workflow)
Dự án tuân thủ chặt chẽ quy trình Git Workflow chuyên nghiệp nhằm quản lý lịch sử commit và tích hợp tính năng an toàn:
* **`main`**: Nhánh Production lưu trữ các phiên bản mã nguồn đã đạt trạng thái ổn định tuyệt đối và có thể đem đi chạy thực tế.
* **`develop`**: Nhánh tích hợp (nơi gom các tính năng mới hoàn thiện để kiểm thử trước khi merge vào main).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển các chức năng riêng lẻ tách biệt từ nhánh `develop`.

---

### 📜 6. Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup-entities` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, kết nối MySQL và khởi dựng thành công 8 thực thể nền tảng. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman (Loại bỏ lỗi kẹt cổng 401). |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản `@Transactional`, tự động phân quyền hệ thống và cơ chế Xóa mềm (Soft Delete) kép liên kết. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành trọn gói Nghiệp vụ Môn học (`Subject`), Lớp học phần (`CourseClass`), phân hệ Điểm số (`Grade`), thuật toán quy đổi GPA tín chỉ và tối ưu hóa loại bỏ hoàn toàn lỗi truy vấn N+1. |


### 📜 7. SQL
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: student_management
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
`department_id` bigint NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKpgs3gcxax70h9jugbt24ugwcg` (`name`),
KEY `FKeerjjltjmtwpjo3jlr7037vxt` (`department_id`),
CONSTRAINT `FKeerjjltjmtwpjo3jlr7037vxt` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-07 05:23:21.000000','2026-06-07 05:23:21.000000','D21CNPM1',1),(2,'2026-06-08 16:09:33.690979','2026-06-08 16:09:33.690979','D22CNPM2',1),(3,'2026-06-08 16:25:38.022113','2026-06-08 16:25:38.022113','D22KHMT1',2),(4,'2026-06-08 16:25:43.674327','2026-06-08 16:25:43.674327','D22DTVT1',3);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_classes`
--

DROP TABLE IF EXISTS `course_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_classes` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`code` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
`semester` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`subject_id` bigint NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKmdeewqfqfih9ft75b0gbp9nrc` (`code`),
KEY `FKpxijwa2w0cvst789igk5x2fpu` (`subject_id`),
CONSTRAINT `FKpxijwa2w0cvst789igk5x2fpu` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (2,'2026-06-07 07:39:44.047946','2026-06-07 07:39:44.047946','CPP_BASE_01','HK1-2026',3);
/*!40000 ALTER TABLE `course_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKl7tivi5261wxdnvo6cct9gg6t` (`code`),
UNIQUE KEY `UKj6cwks7xecs5jov19ro8ge3qk` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-07 05:23:21.000000','2026-06-07 05:23:21.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-08 16:07:51.653195','2026-06-08 16:29:59.021126','KHMT_ADV','Khoa Khoa học Máy tính Chuyên sâu'),(3,'2026-06-08 16:25:11.287147','2026-06-08 16:25:11.287147','KHMT','Khoa Khoa học máy tính'),(4,'2026-06-08 16:25:18.436674','2026-06-08 16:25:18.436674','KTTC','Khoa Kinh tế Tài chính');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`attendance_grade` double DEFAULT NULL,
`final_grade` double DEFAULT NULL,
`letter_grade` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`midterm_grade` double DEFAULT NULL,
`overall_grade` double DEFAULT NULL,
`course_class_id` bigint NOT NULL,
`student_id` bigint NOT NULL,
`grade_4` double DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKko1u7sub9pfixo5kagdclh8sj` (`student_id`,`course_class_id`),
KEY `FK5c6jpjp7bty7q1flkpcc6pi4a` (`course_class_id`),
CONSTRAINT `FK13a16545m7vvrcspc999r15s9` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
CONSTRAINT `FK5c6jpjp7bty7q1flkpcc6pi4a` FOREIGN KEY (`course_class_id`) REFERENCES `course_classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKofx66keruapi6vyqpv6f2or37` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-06 15:42:59.479477','2026-06-06 15:42:59.479477','ADMIN'),(2,'2026-06-06 15:42:59.522480','2026-06-06 15:42:59.522480','STUDENT');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`date_of_birth` date DEFAULT NULL,
`first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
`gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`student_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`class_id` bigint NOT NULL,
`user_id` bigint NOT NULL,
`is_active` bit(1) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKcgcf3r5xk73o0etbduc1qxnol` (`student_code`),
UNIQUE KEY `UKg4fwvutq09fjdlb4bb0byp7t` (`user_id`),
KEY `FKhnslh0rm5bthlble8vjunbnwe` (`class_id`),
CONSTRAINT `FKdt1cjx5ve5bdabmuuf3ibrwaq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
CONSTRAINT `FKhnslh0rm5bthlble8vjunbnwe` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'2026-06-07 05:23:56.212382','2026-06-07 06:37:33.669294','2005-02-02','Anh','Nam','Nguyễn Đình','0987654323','B21DCCN001',1,3,_binary '\0'),(2,'2026-06-07 05:27:11.178181','2026-06-07 05:27:11.178181','2005-05-23','Đăng','Nam','Trần Minh','0123456789','K25TMD002',1,5,_binary ''),(3,'2026-06-07 05:28:07.320240','2026-06-07 05:28:07.320820','2005-01-01','Anh','Nam','Nguyễn Đình','0987654322','K25TMD001',1,6,_binary ''),(4,'2026-06-08 16:27:11.975218','2026-06-08 16:27:11.975218','2004-10-15','Hải','Nam','Nguyễn Hoàng','0912345678','B22CNPM001',1,7,_binary ''),(5,'2026-06-08 16:27:18.333620','2026-06-08 16:27:18.333620','2004-05-20','Linh','Nữ','Phạm Khánh','0923456789','B22KHMT001',2,8,_binary ''),(6,'2026-06-08 16:27:22.690037','2026-06-08 16:27:22.690037','2004-12-01','Tùng','Nam','Vũ Sơn','0934567890','B22DTVT001',3,9,_binary '');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`credits` int NOT NULL,
`name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKrg7x1lyii7kdyycw98d45vep5` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (3,'2026-06-07 06:35:32.807481','2026-06-07 06:35:32.807481','C++_Base',3,'Lập trình C++ cơ bản');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
`user_id` bigint NOT NULL,
`role_id` bigint NOT NULL,
PRIMARY KEY (`user_id`,`role_id`),
KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (3,2),(5,2),(6,2),(7,2),(8,2),(9,2);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`is_active` bit(1) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2026-06-06 16:20:40.847736','2026-06-06 16:20:40.847736','minhdang@open.edu.vn','password123','minhdangtran',_binary ''),(2,'2026-06-06 16:21:57.950655','2026-06-06 16:37:24.756683','anhnd.updated@open.edu.vn','newpassword123456','nguyendinhanh',_binary ''),(3,'2026-06-07 05:23:56.176308','2026-06-07 06:37:33.674291','anh.nguyen@open.edu.vn','password123','nguyendinhanh2003',_binary '\0'),(5,'2026-06-07 05:27:11.172961','2026-06-07 05:27:11.172961','minhdangdask@open.edu.vn','password123','dangdepzaivaio',_binary ''),(6,'2026-06-07 05:28:07.315346','2026-06-07 05:28:07.315346','dinhanhboyhot2@open.edu.vn','password123','dinhanhboyhot2',_binary ''),(7,'2026-06-08 16:27:11.964323','2026-06-08 16:27:11.964323','hai.nh@open.edu.vn','$2a$10$..HvSxCUfLbulwGq0uUqJuNtctxuIp8mAGV4pSMXnIyTLdjwdbWXe','hoanghai2004',_binary ''),(8,'2026-06-08 16:27:18.328010','2026-06-08 16:27:18.328010','linh.pk@open.edu.vn','$2a$10$I13BwRkk9BhfgNPdP.XvLeirmFo3xWdEZryYUVz..pWRJ.9owgA0u','khanhlinh2004',_binary ''),(9,'2026-06-08 16:27:22.685722','2026-06-08 16:27:22.685722','tung.vs@open.edu.vn','$2a$10$.paoWU6SAujvCNcV46RxT.WohPQmj2TlIJnNBSkIMONrXWIfwB0W2','sontung2004',_binary '');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-08 23:38:00
</file>

</files>

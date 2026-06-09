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
package.json
pom.xml
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/DatabaseInitializer.java
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/JwtAuthenticationFilter.java
src/main/java/com/dangdepzaivaio/StudentManagement/configuration/SecurityConfig.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/AuthenticationController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/ClassController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/CourseClassController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/DepartmentController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/GradeController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/SubjectController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/TeacherController.java
src/main/java/com/dangdepzaivaio/StudentManagement/controller/UserController.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/AuthenticationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/ClassRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/CourseClassRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/DepartmentRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/GradeRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentCreationRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/StudentUpdateRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/SubjectRequest.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/TeacherCreationRequest.java
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
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/TeacherResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/UserResponse.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/BaseEntity.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Class.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/CourseClass.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Department.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Grade.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Role.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Student.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Subject.java
src/main/java/com/dangdepzaivaio/StudentManagement/entity/Teacher.java
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
src/main/java/com/dangdepzaivaio/StudentManagement/repository/TeacherRepository.java
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
student-management-ui/.gitignore
student-management-ui/eslint.config.js
student-management-ui/index.html
student-management-ui/package.json
student-management-ui/public/favicon.svg
student-management-ui/public/icons.svg
student-management-ui/README.md
student-management-ui/src/api/axiosClient.js
student-management-ui/src/App.css
student-management-ui/src/App.jsx
student-management-ui/src/assets/hero.png
student-management-ui/src/assets/react.svg
student-management-ui/src/assets/vite.svg
student-management-ui/src/index.css
student-management-ui/src/main.jsx
student-management-ui/src/pages/GradePage.jsx
student-management-ui/src/pages/LoginPage.jsx
student-management-ui/src/pages/StudentPage.jsx
student-management-ui/src/pages/TeacherPage.jsx
student-management-ui/vite.config.js
StudentManagement.docx
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="package.json">
{
  "dependencies": {
    "axios": "^1.17.0",
    "react-router-dom": "^7.17.0"
  }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/JwtAuthenticationFilter.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import com.nimbusds.jwt.SignedJWT;
import com.nimbusds.jose.crypto.MACVerifier;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Value("${jwt.signer-key}")
    private String signerKey;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            try {
                SignedJWT signedJWT = SignedJWT.parse(token);
                MACVerifier verifier = new MACVerifier(signerKey.getBytes());

                // Xác thực chữ ký mã hóa và kiểm tra thời hạn token
                if (signedJWT.verify(verifier) && new Date().before(signedJWT.getJWTClaimsSet().getExpirationTime())) {
                    String username = signedJWT.getJWTClaimsSet().getSubject();
                    String scope = signedJWT.getJWTClaimsSet().getStringClaim("scope"); // Đọc chuỗi Roles từ Payload

                    // Chuyển đổi chuỗi role sang GrantedAuthority chuẩn Spring Security (Thêm tiền tố ROLE_)
                    List<SimpleGrantedAuthority> authorities = Arrays.stream(scope.split(" "))
                            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                            .collect(Collectors.toList());

                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(username, null, authorities);

                    // Thiết lập thông tin xác thực vào ngữ cảnh Security
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            } catch (Exception e) {
                SecurityContextHolder.clearContext();
            }
        }

        filterChain.doFilter(request, response);
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/TeacherController.java">
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
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/TeacherCreationRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record TeacherCreationRequest(
        @NotBlank(message = "Mã giảng viên không được để trống") String teacherCode,
        @NotBlank(message = "Tên không được để trống") String firstName,
        @NotBlank(message = "Họ không được để trống") String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        @NotNull(message = "ID khoa không được để trống") Long departmentId
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/TeacherResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import java.time.LocalDate;

public record TeacherResponse(
        Long id,
        String teacherCode,
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        boolean isActive,
        String username,
        String email,
        String departmentName
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/entity/Teacher.java">
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
@Table(name = "teachers")
public class Teacher extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "teacher_code", nullable = false, unique = true, length = 20)
    private String teacherCode; // Mã giảng viên (Ví dụ: GV2026_01)

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "phone_number", length = 15)
    private String phoneNumber;

    @Builder.Default
    @Column(name = "is_active", nullable = false)
    private boolean isActive = true;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department; // Thuộc khoa chủ quản nào
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/repository/TeacherRepository.java">
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    boolean existsByTeacherCode(String teacherCode);

    Optional<Teacher> findByTeacherCode(String teacherCode);

    Optional<Teacher> findByUserId(Long userId); // 🔥 BỔ SUNG DÒNG NÀY ĐỂ TÌM THEO USER ID

    @Query("SELECT t FROM Teacher t JOIN FETCH t.user JOIN FETCH t.department")
    List<Teacher> findAllTeachersWithJoinFetch();
}
</file>

<file path="student-management-ui/.gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</file>

<file path="student-management-ui/eslint.config.js">
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
</file>

<file path="student-management-ui/index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>student-management-ui</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="student-management-ui/package.json">
{
  "name": "student-management-ui",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.17.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.17.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}
</file>

<file path="student-management-ui/public/favicon.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="student-management-ui/public/icons.svg">
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
</file>

<file path="student-management-ui/README.md">
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
</file>

<file path="student-management-ui/src/api/axiosClient.js">
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8081', // Cổng chạy của Spring Boot
    headers: {
        'Content-Type': 'application/json',
    },
});

// Tự động đính kèm JWT Token vào Header trước khi gửi request
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Tự động giải nén cấu trúc ApiResponse bọc ngoài của Backend
axiosClient.interceptors.response.use(
    (response) => {
        // Nếu Backend trả về code thành công 1000, lấy thẳng dữ liệu result ra ngoài
        if (response.data && response.data.code === 1000) {
            return response.data.result;
        }
        return response.data;
    },
    (error) => {
        // Bắt lỗi nghiệp vụ trả về từ GlobalExceptionHandler của Backend
        const errorMessage = error.response?.data?.message || 'Lỗi kết nối hệ thống!';
        return Promise.reject(errorMessage);
    }
);

export default axiosClient;
</file>

<file path="student-management-ui/src/App.css">
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
</file>

<file path="student-management-ui/src/App.jsx">
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage'; // 🔥 Thêm dòng này
import GradePage from './pages/GradePage';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [role, setRole] = useState(localStorage.getItem('roles') || '');
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleLogout = () => {
        localStorage.clear();
        setToken(null);
        setUsername(null);
        setRole('');
    };

    if (!token) {
        return <LoginPage />;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)' }}>

            {/* HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing-sm) var(--spacing-xl)', backgroundColor: 'var(--color-surface)', color: 'var(--text-main)', borderBottom: '2px solid var(--text-cyan)' }}>
                <h3>CMS - STUDENT MANAGEMENT</h3>
                <div>
                    <span style={{ marginRight: 'var(--spacing-xl)', color: 'var(--text-muted)' }}>Xin chào: <b>{username}</b> ({role})</span>
                    <button onClick={handleLogout} style={{ padding: '6px 12px', backgroundColor: 'var(--color-danger)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Đăng xuất</button>
                </div>
            </div>

            {/* BODY */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* SIDEBAR */}
                <div style={{ width: '240px', backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-xl) var(--spacing-sm)', borderRight: '1px solid var(--color-border)' }}>
                    <button onClick={() => setActiveTab('dashboard')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'dashboard' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>📊 Tổng Quan System</button>

                    {/* MENU QUẢN LÝ SINH VIÊN (Dành cho Admin và Teacher) */}
                    {(role.includes('ADMIN') || role.includes('TEACHER')) && (
                        <button onClick={() => setActiveTab('students')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'students' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>👥 Quản Lý Sinh Viên</button>
                    )}

                    {/* 🔥 CHỈ ADMIN MỚI NHÌN THẤY MENU QUẢN LÝ GIẢNG VIÊN */}
                    {role.includes('ADMIN') && (
                        <button onClick={() => setActiveTab('teachers')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'teachers' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>💼 Quản Lý Giảng Viên</button>
                    )}

                    <button onClick={() => setActiveTab('grades')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'grades' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>🎯 Quản Lý Điểm Số</button>
                </div>

                {/* CONTENT CONTENT CO-GIÃN */}
                <div style={{ flex: 1, overflowY: 'auto', backgroundColor: 'var(--color-bg)', padding: 'var(--spacing-xl)' }}>
                    {activeTab === 'dashboard' && (
                        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                            <h2>HỆ THỐNG QUẢN TRỊ ĐÀO TẠO TÍN CHỈ</h2>
                            <p>Chọn phân hệ bên thanh điều hướng để bắt đầu thực hiện kiểm tra dữ liệu.</p>
                        </div>
                    )}
                    {activeTab === 'students' && <StudentPage />}
                    {activeTab === 'teachers' && <TeacherPage />}
                    {activeTab === 'grades' && <GradePage />}
                </div>
            </div>
        </div>
    );
}

export default App;
</file>

<file path="student-management-ui/src/assets/react.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
</file>

<file path="student-management-ui/src/assets/vite.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="student-management-ui/src/index.css">
:root {
  /* 🎨 Hệ màu sắc chuẩn (Bảo vệ mắt, giảm mỏi mắt ban đêm) */
  --color-bg: #141414;           /* Màu nền tối chủ đạo sâu */
  --color-surface: #222222;      /* Màu nền của Card, Sidebar, Form */
  --color-surface-hover: #2d2d2d;/* Màu khi di chuột vào vùng tương tác */
  --color-border: #333333;       /* Đường viền phân cách mảnh */

  /* 🌟 Màu sắc trạng thái tín chỉ */
  --color-primary: #007bff;      /* Màu xanh thương hiệu (Nút bấm, trạng thái chính) */
  --color-success: #28a745;      /* Màu xanh lá (Điểm cao, Đạt, Thành công) */
  --color-warning: #ffc107;      /* Màu vàng (Mã sinh viên, Cảnh báo, Điểm trung bình) */
  --color-danger: #dc3545;       /* Màu đỏ (Điểm F, Xóa, Lỗi hệ thống) */

  /* 📝 Màu chữ theo cấp độ phân rã */
  --text-main: #ffffff;          /* Chữ trắng rõ ràng cho nội dung chính */
  --text-muted: #aaaaaa;         /* Chữ xám cho nội dung phụ, mô tả */
  --text-cyan: #00ffff;          /* Màu nhấn phản quang cho tiêu đề, bảng số */

  /* 📐 Hệ khoảng cách và Kích thước (Spacing & Sizing) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;

  /* 🔤 Font size tiêu chuẩn hệ thống */
  --font-base: 14px;
  --font-md: 16px;
  --font-lg: 18px;
  --font-title: 24px;
}

/* Reset cơ bản cho toàn bộ ứng dụng sử dụng chuẩn toàn cục */
body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--color-bg);
  color: var(--text-main);
  font-size: var(--font-base);
  -webkit-font-smoothing: antialiased;
}
</file>

<file path="student-management-ui/src/main.jsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
</file>

<file path="student-management-ui/src/pages/GradePage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function GradePage() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');

    const [summary, setSummary] = useState(null); // Điểm của 1 SV
    const [allGrades, setAllGrades] = useState([]); // Bảng điểm toàn trường
    const [loading, setLoading] = useState(false);

    const [courseClassId, setCourseClassId] = useState('');
    const [attendance, setAttendance] = useState('');
    const [midterm, setMidterm] = useState('');
    const [finalGrade, setFinalGrade] = useState('');
    const [inputError, setInputError] = useState('');

    const userRole = localStorage.getItem('roles') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';

    const isAdmin = userRole.includes('ADMIN');
    const isTeacher = userRole.includes('TEACHER');
    const canViewAll = isAdmin || isTeacher;

    useEffect(() => {
        if (canViewAll) {
            // Lấy danh sách SV để đưa vào Dropdown
            axiosClient.get('/students').then(res => setStudents(res)).catch(err => console.error(err));
            // Lấy BẢNG ĐIỂM TOÀN TRƯỜNG làm mặc định
            fetchAllSystemGrades();
        } else {
            // Sinh viên thì khóa chặt ID của mình
            setSelectedStudent(loggedInStudentId);
        }
    }, [canViewAll, loggedInStudentId]);

    useEffect(() => {
        if (selectedStudent) {
            fetchAcademicSummary(selectedStudent);
        } else if (canViewAll) {
            setSummary(null); // Trở về chế độ xem toàn trường
        }
    }, [selectedStudent]);

    // Gọi API lấy điểm 1 Sinh Viên (Cũ)
    const fetchAcademicSummary = async (studentId) => {
        try {
            setLoading(true);
            const data = await axiosClient.get(`/grades/student/${studentId}/summary`);
            setSummary(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // 🔥 Gọi API lấy BẢNG ĐIỂM TOÀN HỆ THỐNG (Mới)
    const fetchAllSystemGrades = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/grades');
            setAllGrades(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputGrade = async (e) => {
        e.preventDefault();
        setInputError('');
        if (!selectedStudent || !courseClassId) {
            setInputError('Vui lòng chọn Sinh viên cụ thể từ danh sách bên trên trước khi nhập điểm!');
            return;
        }
        try {
            await axiosClient.post('/grades', {
                studentId: Number(selectedStudent),
                courseClassId: Number(courseClassId),
                attendanceGrade: attendance !== '' ? Number(attendance) : null,
                midtermGrade: midterm !== '' ? Number(midterm) : null,
                finalGrade: finalGrade !== '' ? Number(finalGrade) : null
            });
            alert('Nhập điểm thành công!');
            setCourseClassId(''); setAttendance(''); setMidterm(''); setFinalGrade('');
            fetchAcademicSummary(selectedStudent);
        } catch (err) {
            setInputError(err || 'Lỗi nhập điểm!');
        }
    };

    return (
        <div style={{ color: 'var(--text-main)', padding: 'var(--spacing-sm)' }}>
            <h2 style={{ color: 'var(--text-cyan)', marginBottom: 'var(--spacing-xl)' }}>
                QUẢN LÝ ĐIỂM SỐ & GPA HỆ THỐNG
            </h2>

            {canViewAll ? (
                <div style={{ backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: '6px', marginBottom: 'var(--spacing-xl)', border: '1px solid var(--color-border)' }}>
                    <label style={{ fontWeight: 'bold', marginRight: 'var(--spacing-md)' }}>🔍 Tra cứu điểm số:</label>
                    <select
                        value={selectedStudent}
                        onChange={(e) => setSelectedStudent(e.target.value)}
                        style={{ padding: 'var(--spacing-sm)', borderRadius: '4px', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', border: '1px solid var(--color-border)', outline: 'none', minWidth: '300px' }}
                    >
                        <option value="">📋 Xem bảng điểm Tổng hợp Toàn trường</option>
                        {students.map(s => (
                            <option key={s.id} value={s.id}>SV: {s.studentCode} - {s.lastName} {s.firstName}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <div style={{ backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-md)', borderRadius: '6px', marginBottom: 'var(--spacing-xl)', border: '1px solid var(--color-border)', color: 'var(--color-warning)', fontWeight: 'bold' }}>
                    🔒 Chế độ: Sinh viên đang xem kết quả học tập cá nhân
                </div>
            )}

            <div style={{ display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'flex-start' }}>

                {/* CỘT BÊN TRÁI: HIỂN THỊ BẢNG ĐIỂM */}
                <div style={{ flex: 2, backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-xl)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>

                    {/* CHẾ ĐỘ 1: XEM 1 SINH VIÊN CỤ THỂ */}
                    {summary && (
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: 'var(--spacing-lg)', color: 'var(--color-warning)' }}>📋 Kết Quả Tích Lũy Cá Nhân</h3>
                            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                                <div style={{ flex: 1, backgroundColor: 'var(--color-primary)', padding: 'var(--spacing-lg)', borderRadius: '6px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '13px', opacity: 0.9 }}>Tín Chỉ Tích Lũy</span>
                                    <h2 style={{ margin: '5px 0 0 0', fontSize: 'var(--font-title)' }}>{summary.totalCredits}</h2>
                                </div>
                                <div style={{ flex: 1, backgroundColor: 'var(--color-success)', padding: 'var(--spacing-lg)', borderRadius: '6px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '13px', opacity: 0.9 }}>GPA Hệ 10</span>
                                    <h2 style={{ margin: '5px 0 0 0', fontSize: 'var(--font-title)' }}>{summary.gpaSystem10}</h2>
                                </div>
                                <div style={{ flex: 1, backgroundColor: 'var(--color-warning)', padding: 'var(--spacing-lg)', borderRadius: '6px', textAlign: 'center', color: '#000' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>GPA Hệ 4</span>
                                    <h2 style={{ margin: '5px 0 0 0', fontSize: 'var(--font-title)' }}>{summary.gpaSystem4}</h2>
                                </div>
                            </div>
                            {/* ... (Render table summary.details như cũ) ... */}
                        </div>
                    )}

                    {/* CHẾ ĐỘ 2: XEM TOÀN TRƯỜNG (KHI ADMIN/TEACHER CHƯA CHỌN SV NÀO) */}
                    {!summary && canViewAll && (
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>🌍 Bảng Điểm Toàn Hệ Thống</h3>
                            {loading ? <p>Đang tải dữ liệu...</p> : (
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 'var(--spacing-sm)' }}>
                                    <thead>
                                    <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Sinh Viên</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Môn Học</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Lớp HP</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Điểm Tổng</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Điểm Chữ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {allGrades.map((g, index) => (
                                        <tr key={index} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: 'var(--spacing-md)' }}><b>{g.studentName}</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>{g.studentCode}</span></td>
                                            <td style={{ padding: 'var(--spacing-md)' }}>{g.subjectName}</td>
                                            <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-warning)' }}>{g.courseClassCode}</td>
                                            <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold' }}>{g.overallGrade}</td>
                                            <td style={{ padding: 'var(--spacing-md)', color: g.letterGrade === 'F' ? 'var(--color-danger)' : 'var(--color-success)', fontWeight: 'bold' }}>{g.letterGrade}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                </div>

                {/* CỘT BÊN PHẢI: FORM NHẬP ĐIỂM (CHỈ TEACHER) */}
                {isTeacher && (
                    <div style={{ flex: 1, backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-xl)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3>✍️ Nhập Điểm Thành Phần</h3>
                        {inputError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-sm)' }}>{inputError}</div>}

                        {!selectedStudent ? (
                            <div style={{ color: 'var(--color-warning)', fontSize: '14px' }}>
                                ⚠️ Vui lòng chọn một sinh viên ở Menu bên trên để kích hoạt Form nhập điểm.
                            </div>
                        ) : (
                            <form onSubmit={handleInputGrade}>
                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 'bold' }}>ID Lớp Học Phần:</label>
                                    <input type="number" placeholder="Ví dụ: 2" value={courseClassId} onChange={(e) => setCourseClassId(e.target.value)} style={inputStyle} />
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Điểm Chuyên Cần:</label>
                                    <input type="number" step="0.1" min="0" max="10" value={attendance} onChange={(e) => setAttendance(e.target.value)} style={inputStyle} />
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Điểm Giữa Kỳ:</label>
                                    <input type="number" step="0.1" min="0" max="10" value={midterm} onChange={(e) => setMidterm(e.target.value)} style={inputStyle} />
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Điểm Cuối Kỳ:</label>
                                    <input type="number" step="0.1" min="0" max="10" value={finalGrade} onChange={(e) => setFinalGrade(e.target.value)} style={inputStyle} />
                                </div>
                                <button type="submit" style={{ width: '100%', padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Lưu & Xác Nhận Điểm</button>
                            </form>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
export default GradePage;
</file>

<file path="student-management-ui/src/pages/LoginPage.jsx">
import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 🔥 Các State quản lý trạng thái ẩn/hiển thị của từng ô mật khẩu độc lập
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isFirstLoginMode, setIsFirstLoginMode] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await axiosClient.post('/auth/login', { username, password });

            if (data.isFirstLogin) {
                setIsFirstLoginMode(true);
                alert("Hệ thống phát hiện đây là lần đầu bạn đăng nhập. Bạn bắt buộc phải đổi mật khẩu để bảo mật tài khoản!");
            } else {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('roles', data.roles);
                localStorage.setItem('userId', data.userId);

                if (data.studentId) localStorage.setItem('studentId', data.studentId);
                if (data.teacherId) localStorage.setItem('teacherId', data.teacherId);

                window.location.href = '/';
            }
        } catch (err) {
            setError(err || 'Tên đăng nhập hoặc mật khẩu không chính xác!');
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword.length < 6) {
            setError('Mật khẩu mới phải từ 6 ký tự trở lên!');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Mật khẩu xác nhận không trùng khớp!');
            return;
        }

        try {
            setLoading(true);
            await axiosClient.post('/auth/change-password', { username, newPassword });
            alert('Đổi mật khẩu thành công mượt mà! Vui lòng đăng nhập lại bằng mật khẩu mới của bạn.');
            setIsFirstLoginMode(false);
            setPassword('');
            setNewPassword('');
            setConfirmPassword('');
            // Reset trạng thái mắt về ẩn
            setShowPassword(false);
            setShowNewPassword(false);
            setShowConfirmPassword(false);
        } catch (err) {
            setError(err || 'Có lỗi phát sinh khi đổi mật khẩu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '100px auto', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--text-main)' }}>

            {/* GIAO DIỆN 1: FORM BẮT BUỘC ĐỔI MẬT KHẨU LẦN ĐẦU */}
            {isFirstLoginMode ? (
                <form onSubmit={handleChangePassword}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-warning)' }}>🔒 ĐỔI MẬT KHẨU LẦN ĐẦU</h2>
                    {error && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{error}</div>}

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Mật khẩu mới:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} style={eyeButtonStyle}>
                                {showNewPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Xác nhận mật khẩu mới:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={eyeButtonStyle}>
                                {showConfirmPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} style={buttonStyle}>
                        {loading ? 'Đang xử lý...' : 'Xác Nhận Thay Đổi'}
                    </button>
                </form>
            ) : (
                /* GIAO DIỆN 2: FORM ĐĂNG NHẬP MẶC ĐỊNH */
                <form onSubmit={handleLogin}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--text-cyan)' }}>ĐĂNG NHẬP HỆ THỐNG</h2>
                    {error && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{error}</div>}

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Tên đăng nhập (Mã số):</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={inputStyleForUsername} />
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Mật khẩu:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeButtonStyle}>
                                {showPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} style={buttonStyle}>
                        {loading ? 'Đang xác thực...' : 'Đăng Nhập'}
                    </button>
                </form>
            )}
        </div>
    );
}

// 🎨 Cấu hình Style dùng chung cho các trường ô nhập Mật khẩu (Có chừa khoảng trống phải 40px cho nút mắt)
const inputStyle = {
    width: '100%',
    padding: 'var(--spacing-sm)',
    paddingRight: '40px', // 🔥 Chống tràn đè chữ lên icon mắt
    borderRadius: '4px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface-hover)',
    color: 'var(--text-main)',
    boxSizing: 'border-box',
    outline: 'none'
};

// Style riêng cho Username không cần căn lề phải chừa khoảng trống nút mắt
const inputStyleForUsername = {
    width: '100%',
    padding: 'var(--spacing-sm)',
    borderRadius: '4px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface-hover)',
    color: 'var(--text-main)',
    boxSizing: 'border-box',
    outline: 'none'
};

// 🎨 Cấu hình định vị nút Icon Mắt tuyệt đối nằm đè gọn gàng bên phải ô Input
const eyeButtonStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    userSelect: 'none'
};

const buttonStyle = { width: '100%', padding: 'var(--spacing-sm)', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };

export default LoginPage;
</file>

<file path="student-management-ui/src/pages/StudentPage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function StudentPage() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const userRole = localStorage.getItem('roles') || '';
    const isAdmin = userRole.includes('ADMIN');

    const [includeInactive, setIncludeInactive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState('');

    const [studentCode, setStudentCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [classId, setClassId] = useState('');

    useEffect(() => {
        fetchStudents();
    }, [includeInactive]);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get(`/students?includeInactive=${includeInactive}`);
            setStudents(data);
        } catch (err) {
            setError(err || 'Không thể tải danh sách sinh viên!');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateStudent = async (e) => {
        e.preventDefault();
        setModalError('');
        const payload = { studentCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId) };
        try {
            await axiosClient.post('/students', payload);
            alert(`Cấp tài khoản thành công!\nTài khoản: ${studentCode}\nMật khẩu mặc định: password1234`);
            setShowModal(false);
            resetForm();
            fetchStudents();
        } catch (err) {
            setModalError(err || 'Có lỗi xảy ra khi tạo sinh viên!');
        }
    };

    const handleDeleteStudent = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn khóa sinh viên [${code} - ${name}] không?`)) {
            try {
                await axiosClient.delete(`/students/${id}`);
                alert('Đã thực hiện khóa mềm hồ sơ sinh viên thành công!');
                fetchStudents();
            } catch (err) {
                alert(err || 'Không thể khóa sinh viên này!');
            }
        }
    };

    const resetForm = () => {
        setStudentCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setClassId(''); setModalError('');
    };

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang tải dữ liệu...</div>;
    if (error) return <div style={{ color: 'var(--color-danger)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>{error}</div>;

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>QUẢN LÝ DANH SÁCH SINH VIÊN</h2>

                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    {isAdmin && (
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', backgroundColor: 'var(--color-surface-hover)', padding: '8px 12px', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                            <input type="checkbox" checked={includeInactive} onChange={(e) => setIncludeInactive(e.target.checked)} style={{ cursor: 'pointer' }} />
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--color-warning)' }}>Hiển thị cả SV đã khóa</span>
                        </label>
                    )}
                    {isAdmin && (
                        <button onClick={() => setShowModal(true)} style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-success)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                            + Cấp Tài Khoản Sinh Viên
                        </button>
                    )}
                </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Sinh Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Đệm</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Lớp</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Email Hệ Thống</th>
                    {isAdmin && <th style={{ padding: 'var(--spacing-md)' }}>Hành Động</th>}
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: student.isActive ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {student.isActive ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang học</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold', backgroundColor: 'rgba(220,53,69,0.15)', padding: '2px 6px', borderRadius: '4px' }}>🔒 Đã khóa</span>}
                        </td>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{student.studentCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.lastName}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{student.className}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>{student.email}</td>
                        {isAdmin && (
                            <td style={{ padding: 'var(--spacing-md)' }}>
                                {student.isActive ? (
                                    <button onClick={() => handleDeleteStudent(student.id, student.studentCode, student.firstName)} style={{ padding: 'var(--spacing-xs) var(--spacing-sm)', backgroundColor: 'var(--color-danger)', color: 'var(--text-main)', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Khóa</button>
                                ) : <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Đã khóa</span>}
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>

            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>✍️ KHỞI TẠO HỒ SƠ & TỰ ĐỘNG CẤP TK</h3>
                        {modalError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>{modalError}</div>}
                        <form onSubmit={handleCreateStudent}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Mã Sinh Viên (Tài khoản):</label><input type="text" placeholder="B21CNPM001" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>ID Lớp Hành Chính:</label><input type="number" placeholder="ID" value={classId} onChange={(e) => setClassId(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Họ Và Tên Đệm:</label><input type="text" placeholder="Nguyễn Đình" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Tên Sinh Viên:</label><input type="text" placeholder="Anh" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px' }}>Số Điện Thoại:</label><input type="text" placeholder="0987654321" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ backgroundColor: 'var(--color-surface-hover)', padding: '10px', borderRadius: '4px', marginBottom: 'var(--spacing-xl)', fontSize: '13px', color: 'var(--color-warning)' }}>
                                💡 Mật khẩu mặc định tự tạo hệ thống là: <b>password1234</b>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy Bỏ</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Khởi Tạo & Cấp TK</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
export default StudentPage;
</file>

<file path="student-management-ui/src/pages/TeacherPage.jsx">
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function TeacherPage() {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState('');

    const [teacherCode, setTeacherCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/teachers');
            setTeachers(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateTeacher = async (e) => {
        e.preventDefault();
        setModalError('');
        const payload = { teacherCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, departmentId: Number(departmentId) };
        try {
            await axiosClient.post('/teachers', payload);
            alert(`Cấp tài khoản Giảng viên thành công!\nTài khoản: ${teacherCode}\nMật khẩu: password1234`);
            setShowModal(false);
            resetForm();
            fetchTeachers();
        } catch (err) {
            setModalError(err || 'Lỗi khởi tạo hồ sơ giảng viên.');
        }
    };

    const resetForm = () => {
        setTeacherCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setDepartmentId(''); setModalError('');
    };

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang tải danh sách giảng viên...</div>;

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>QUẢN LÝ DANH SÁCH GIẢNG VIÊN</h2>
                <button onClick={() => setShowModal(true)} style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-success)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    + Cấp Tài Khoản Giảng Viên
                </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Giảng Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Khoa Chuyên Môn</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Email Giảng Dạy</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Số Điện Thoại</th>
                </tr>
                </thead>
                <tbody>
                {teachers.map((t) => (
                    <tr key={t.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{t.teacherCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.lastName} {t.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{t.departmentName}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>{t.email}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.phoneNumber || '-'}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>✍️ THÊM MỚI HỒ SƠ GIẢNG VIÊN</h3>
                        {modalError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>{modalError}</div>}
                        <form onSubmit={handleCreateTeacher}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Mã Giảng Viên:</label><input type="text" placeholder="GV2026_01" value={teacherCode} onChange={(e) => setTeacherCode(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>ID Khoa/Viện:</label><input type="number" placeholder="ID" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Họ Và Tên Đệm:</label><input type="text" placeholder="Trần Quốc" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Tên Giảng Viên:</label><input type="text" placeholder="Tuấn" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px' }}>Số Điện Thoại:</label><input type="text" placeholder="0912345678" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>Hủy</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Khởi Tạo & Cấp TK</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
export default TeacherPage;
</file>

<file path="student-management-ui/vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
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
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.repository.RoleRepository;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DatabaseInitializer {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    ApplicationRunner initRolesAndResetPasswords() {
        return args -> {
            // 1. Giữ nguyên logic khởi tạo Role
            if (roleRepository.findByName("ADMIN").isEmpty()) {
                roleRepository.save(Role.builder().name("ADMIN").build());
            }
            if (roleRepository.findByName("TEACHER").isEmpty()) {
                roleRepository.save(Role.builder().name("TEACHER").build());
            }
            if (roleRepository.findByName("STUDENT").isEmpty()) {
                roleRepository.save(Role.builder().name("STUDENT").build());
            }

            // 2. 🔥 AUTO RESET: Lấy tất cả user ra và ép mật khẩu về đúng chữ "password1234" bằng lõi mã hóa của Java
            List<User> users = userRepository.findAll();
            for (User user : users) {
                user.setPassword(passwordEncoder.encode("password1234"));
                userRepository.save(user);
            }
        };
    }
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/configuration/SecurityConfig.java">
package com.dangdepzaivaio.StudentManagement.configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        httpSecurity.authorizeHttpRequests(request -> request
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .requestMatchers("/auth/login", "/auth/change-password").permitAll() // Mở công khai endpoint đổi pass lần đầu

                // 🔒 KHÓA CHẶT: Chỉ duy nhất ADMIN được quyền tạo mới, cập nhật, xóa bỏ các đối tượng (Học sinh, Giảng viên, Khoa, Lớp)
                .requestMatchers(HttpMethod.POST, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**", "/users/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**", "/users/**").hasRole("ADMIN")

                // ADMIN và TEACHER được quyền gọi danh sách để xem
                .requestMatchers(HttpMethod.GET, "/students/**", "/teachers/**", "/classes/**", "/departments/**", "/subjects/**").hasAnyRole("ADMIN", "TEACHER")

                .requestMatchers(HttpMethod.POST, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.PUT, "/grades/**").hasRole("TEACHER")
                .requestMatchers(HttpMethod.DELETE, "/grades/**").hasRole("TEACHER")

                // 2. Việc Xem điểm: ADMIN (để quản lý), TEACHER (để rà soát), STUDENT (để tự xem điểm mình) đều được phép
                .requestMatchers(HttpMethod.GET, "/grades/**").hasAnyRole("ADMIN", "TEACHER", "STUDENT")

                .anyRequest().authenticated());

        httpSecurity.csrf(AbstractHttpConfigurer::disable);
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

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
import java.util.Map;

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

    @PostMapping("/change-password")
    public ApiResponse<String> changePassword(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String newPassword = request.get("newPassword");
        authenticationService.changePasswordFirstLogin(username, newPassword);
        return new ApiResponse<>(1000, "Đổi mật khẩu lần đầu thành công!", "Mật khẩu mới đã được áp dụng.");
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/request/DepartmentRequest.java">
package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;

public record DepartmentRequest(
        @NotBlank(message = "Mã khoa không được để trống") String code,
        @NotBlank(message = "Tên khoa không được để trống") String name
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
        Long classId
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/AuthenticationResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

import lombok.Builder;
import java.util.Set;

@Builder
public record AuthenticationResponse(
        String token,
        boolean authenticated,
        Long userId,
        String username,
        Set<String> roles,
        boolean isFirstLogin,
        Long studentId, // 🔥 BỔ SUNG TRƯỜNG NÀY
        Long teacherId  // 🔥 BỔ SUNG TRƯỜNG NÀY
) {}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/ClassResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record ClassResponse(Long id, String name, String departmentCode, String departmentName) {}
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/dto/response/DepartmentResponse.java">
package com.dangdepzaivaio.StudentManagement.dto.response;

public record DepartmentResponse(Long id, String code, String name) {}
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
    private String code;

    @Column(name = "semester", nullable = false, length = 20)
    private String semester;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teacher_id")
    private Teacher teacher; // 🔥 Giảng viên nào trực tiếp đứng lớp học phần này
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/impl/AuthenticationService.java">
package com.dangdepzaivaio.StudentManagement.service.impl;

import com.dangdepzaivaio.StudentManagement.dto.request.AuthenticationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.AuthenticationResponse;
import com.dangdepzaivaio.StudentManagement.entity.User;
import com.dangdepzaivaio.StudentManagement.exception.AppException;
import com.dangdepzaivaio.StudentManagement.exception.ErrorCode;
import com.dangdepzaivaio.StudentManagement.repository.UserRepository;
import com.dangdepzaivaio.StudentManagement.repository.StudentRepository; // 🔥 Import thêm
import com.dangdepzaivaio.StudentManagement.repository.TeacherRepository; // 🔥 Import thêm
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository; // 🔥 Bổ sung để tìm ID học sinh
    private final TeacherRepository teacherRepository; // 🔥 Bổ sung để tìm ID giảng viên
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.signer-key}")
    private String SIGNER_KEY;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        User user = userRepository.findByUsername(request.username())
                .orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        boolean authenticated = passwordEncoder.matches(request.password(), user.getPassword());

        if (!authenticated) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        String token = generateToken(user);
        Set<String> roles = user.getRoles().stream()
                .map(com.dangdepzaivaio.StudentManagement.entity.Role::getName)
                .collect(Collectors.toSet());

        // Logic xử lý trích xuất ID thực tế dựa theo vai trò nghiệp vụ đăng nhập
// Logic xử lý trích xuất ID thực tế dựa theo mối quan hệ bảng thay vì so sánh chuỗi mã số
        Long studentId = null;
        Long teacherId = null;

        if (roles.contains("STUDENT")) {
            // 🔥 SỬA: Tìm chính xác Student thông qua User ID gốc đăng nhập thành công
            studentId = studentRepository.findByUserId(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Student::getId)
                    .orElse(null);
        } else if (roles.contains("TEACHER")) {
            // 🔥 SỬA: Tìm chính xác Teacher thông qua User ID gốc đăng nhập thành công
            teacherId = teacherRepository.findByUserId(user.getId())
                    .map(com.dangdepzaivaio.StudentManagement.entity.Teacher::getId)
                    .orElse(null);
        }
        return AuthenticationResponse.builder()
                .token(token)
                .authenticated(true)
                .userId(user.getId())
                .username(user.getUsername())
                .roles(roles)
                .isFirstLogin(user.isFirstLogin())
                .studentId(studentId) // Đẩy ra ngoài giao diện
                .teacherId(teacherId) // Đẩy ra ngoài giao diện
                .build();
    }

    @Transactional
    public void changePasswordFirstLogin(String username, String newPassword) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setFirstLogin(false);
        userRepository.save(user);
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
import com.dangdepzaivaio.StudentManagement.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassServiceImpl implements ClassService {
    // 🔥 ĐÃ GOM TOÀN BỘ KHAI BÁO LÊN ĐẦU CLASS THEO ĐÚNG CHUẨN LOMBOK
    private final ClassRepository classRepository;
    private final DepartmentRepository departmentRepository;
    private final StudentRepository studentRepository;
    private final ClassMapper classMapper;

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
        return classMapper.toResponse(classRepository.save(studentClass));
    }

    @Override
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
    boolean existsByStudentClassId(Long classId);

    Optional<Student> findByUserId(Long userId); // 🔥 BỔ SUNG DÒNG NÀY ĐỂ TÌM THEO USER ID

    @Query("SELECT s FROM Student s " +
            "JOIN FETCH s.user u " +
            "JOIN FETCH s.studentClass c " +
            "WHERE s.isActive = true")
    List<Student> findAllActiveStudentsWithJoinFetch();

    @Query("SELECT s FROM Student s " +
            "JOIN FETCH s.user u " +
            "JOIN FETCH s.studentClass c")
    List<Student> findAllStudentsWithJoinFetch();

    @Query("SELECT s FROM Student s JOIN FETCH s.user JOIN FETCH s.studentClass WHERE s.id = :id")
    Optional<Student> findByIdWithJoinFetch(@Param("id") Long id);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21CNPM1',1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D22KHMT1',2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21DTVT2',3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D22ATTT1',4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21HTTT1',5);
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
  `teacher_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKmdeewqfqfih9ft75b0gbp9nrc` (`code`),
  KEY `FKpxijwa2w0cvst789igk5x2fpu` (`subject_id`),
  KEY `FK_course_class_teacher` (`teacher_id`),
  CONSTRAINT `FK_course_class_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
  CONSTRAINT `FKpxijwa2w0cvst789igk5x2fpu` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','CPP_CLASS_01','HK1-2026',1,1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DSA_CLASS_01','HK1-2026',2,2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','JAVA_CLASS_01','HK1-2026',3,3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','NET_CLASS_01','HK1-2026',4,4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','OS_CLASS_01','HK1-2026',5,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','KHMT','Khoa học máy tính'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DTVT','Điện tử viễn thông'),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','ATTT','An toàn thông tin'),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','HTTT','Hệ thống thông tin');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',9,9,'A',8.5,8.85,1,1,4),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',8,8.5,'B+',8,8.3,2,2,3.5),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',10,9.5,'A',9,9.4,3,3,4),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',7.5,8,'B',7,7.65,4,4,3),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',6,7,'C+',6.5,6.75,5,5,2.5);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','ADMIN'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','STUDENT'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','TEACHER');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2003-04-05','Anh','Nam','Nguyễn Đình','0987654321','B21CNPM001',1,2,_binary ''),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-05-23','Đăng','Nam','Trần Minh','0987654322','B21CNPM002',2,3,_binary ''),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-10-15','Hải','Nam','Nguyễn Hoàng','0987654323','B21CNPM003',3,4,_binary ''),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-05-20','Linh','Nữ','Phạm Khánh','0987654324','B21CNPM004',4,5,_binary ''),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-12-01','Tùng','Nam','Vũ Sơn','0987654325','B21CNPM005',5,6,_binary '');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','C_PLUS_BASE',3,'Lập trình C++ cơ bản'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DSA_STRUCTURE',4,'Cấu trúc dữ liệu & Giải thuật'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','JAVA_WEB_DEV',3,'Lập trình Web nâng cao với Java'),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','NET_COMPUTER',3,'Cơ sở mạng máy tính'),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','OS_OPERATION',3,'Hệ điều hành máy tính');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `teacher_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` bit(1) NOT NULL DEFAULT b'1',
  `user_id` bigint NOT NULL,
  `department_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_teacher_code` (`teacher_code`),
  UNIQUE KEY `UK_teacher_user` (`user_id`),
  KEY `FK_teacher_department` (`department_id`),
  CONSTRAINT `FK_teacher_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `FK_teacher_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_01','Tuấn','Trần Quốc','1985-04-12','Nam','0912111222',_binary '',7,1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_02','Minh','Nguyễn Thị','1988-08-24','Nữ','0912333444',_binary '',8,2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_03','Nam','Lê Hoàng','1982-11-05','Nam','0912555666',_binary '',9,3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_04','Hải','Phạm Văn','1979-02-18','Nam','0912777888',_binary '',10,4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_05','Linh','Vũ Khánh','1991-06-30','Nữ','0912999000',_binary '',11,5);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
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
INSERT INTO `user_roles` VALUES (1,1),(2,2),(3,2),(4,2),(5,2),(6,2),(7,3),(8,3),(9,3),(10,3),(11,3);
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
  `is_first_login` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 18:10:10.935037','admin@open.edu.vn','$2a$10$Nuln0JaFYxBJ92H8tcenfOS7il02iWjIQHp4BoNV.lsHJwiTAHqtu','admin',_binary '',_binary '\0'),(2,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.044169','b21cnpm001@open.edu.vn','$2a$10$Yms/lS91daUUygnYFTouHeLFaQtzuj8FwbGdiODj7DqZYeGMkOtbu','B21CNPM001',_binary '',_binary '\0'),(3,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.155671','b21cnpm002@open.edu.vn','$2a$10$MARRm1W43sRk4jf5Xr8s7eLhT4U8/FwF93UJ2ZlmcyP72XTVfr/Ky','B21CNPM002',_binary '',_binary ''),(4,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.262629','b21cnpm003@open.edu.vn','$2a$10$Ty4oV7qRla7JBxfPNDWU7O/PGZl8rbwQdWnKLm.mddVzZOyt2ey4G','B21CNPM003',_binary '',_binary ''),(5,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.366777','b21cnpm004@open.edu.vn','$2a$10$NRwrvdYgyRlrnHriPdOfQ.cOfeDE9sIeDMkCLZ9f8xpTb3YwEpCDa','B21CNPM004',_binary '',_binary ''),(6,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.483766','b21cnpm005@open.edu.vn','$2a$10$5ap5383vHtSQISzx5Ghn7.nNy2GfthpKk7mBCea1Vum26WEfXtSR2','B21CNPM005',_binary '',_binary ''),(7,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.594227','tuan.tq@teacher.open.edu.vn','$2a$10$aMbmK8V8gTKPiaWvBbVH4e1y/q3PvQjdN9EoZItZLLJrvg4GpGr9i','GV2026_01',_binary '',_binary ''),(8,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.719566','minh.nt@teacher.open.edu.vn','$2a$10$rWpDKdQvXp6X4ftwMH4PNeDIozCUOuqhzORMQtg.dLcTGD3sfOVJu','GV2026_02',_binary '',_binary ''),(9,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.832910','nam.lh@teacher.open.edu.vn','$2a$10$RD1rSRZoix4QBI1rNOrXMegIKrJOtroS7ufrRMRYaIvzBT0Z19wDK','GV2026_03',_binary '',_binary ''),(10,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.947974','hai.pv@teacher.open.edu.vn','$2a$10$cvqnA2diirlOFBgqsWd/wuApEUXh/WGu/a9Q5SQqYlYVADRzkMh8S','GV2026_04',_binary '',_binary ''),(11,'2026-06-09 17:11:49.000000','2026-06-09 18:10:12.056122','linh.vk@teacher.open.edu.vn','$2a$10$mR6GbQbKiBuDzQEXpXaQgeV00eCNhHBPyLUIYx51q8apmAhuw5YCm','GV2026_05',_binary '',_binary '');
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

-- Dump completed on 2026-06-10  1:12:14
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/controller/StudentController.java">
package com.dangdepzaivaio.StudentManagement.controller;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
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
    public ApiResponse<List<StudentResponse>> getAllStudents(
            @RequestParam(required = false, defaultValue = "false") boolean includeInactive) {
        return new ApiResponse<>(1000, "Lấy danh sách sinh viên thành công!", studentService.getAllStudents(includeInactive));
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
        studentService.disableStudent(studentId);
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

    @Column(name = "is_first_login", nullable = false)
    @Builder.Default
    private boolean isFirstLogin = true; // 🔥 Cờ ép buộc đổi mật khẩu lần đầu

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;
}
</file>

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/mapper/StudentMapper.java">
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import com.dangdepzaivaio.StudentManagement.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "studentClass", ignore = true)
    @Mapping(target = "user", ignore = true) // 🔥 ĐỔI THÀNH IGNORE = TRUE: Vì request giờ đã phẳng, không bọc object user nữa
    Student toEntity(StudentCreationRequest request);

    // Hàm toUserEntity cũ đã xóa bỏ vì hệ thống đã chuyển sang tạo tài khoản tự động bằng User.builder()

    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "className", source = "studentClass.name")
    StudentResponse toResponse(Student student);
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

<file path="src/main/java/com/dangdepzaivaio/StudentManagement/service/StudentService.java">
package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import java.util.List;

public interface StudentService {
    StudentResponse createStudent(StudentCreationRequest request);
    List<StudentResponse> getAllStudents(boolean includeInactive);
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
* **Security & Auth:** Spring Security, JWT (JSON Web Token) qua Nimbus JOSE + JWT 9.37.3 (Đã kích hoạt toàn diện kèm phân hệ CORS)
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

## 📌 3. Mô tả Chi tiết các Phân hệ Chức năng (Functional Modules)

### 🔐 3.1. Phân hệ Xác thực & Tài khoản (Auth & User Module)
* **Xác thực an toàn:** API Đăng nhập (`POST /auth/login`) tiếp nhận thông tin, kiểm tra tính hợp lệ bằng PasswordEncoder (BCrypt) và sinh chuỗi mã hóa bảo mật JWT Token có thời hạn hoạt động 2 giờ.
* **Mở rộng Payload dữ liệu:** Payload trả về cho Client được bổ sung đầy đủ các trường thiết yếu bao gồm `userId`, `username`, và chuỗi quyền hạn `roles` để hỗ trợ hiển thị thông tin và phân quyền giao diện phía Client.
* **Quản trị tài khoản:** Quản trị viên hệ thống có toàn quyền quản lý danh mục tài khoản người dùng (`User`). Khi một tài khoản mới được khởi tạo thông qua API độc lập, hệ thống sẽ tự động liên kết gán vai trò `ADMIN` cho người dùng đó.

### 🏢 3.2. Phân hệ Quản lý Hành chính (Administrative Module)
* **Danh mục Khoa/Viện đào tạo (`Department`):** Hỗ trợ lưu trữ thông tin mã khoa (bắt trùng lặp) và tên khoa chuyên môn. Tích hợp logic ràng buộc khóa ngoại nghiêm ngặt: Tuyệt đối chặn đứng hành vi xóa Khoa nếu như tồn tại các lớp hành chính đang trực thuộc phân hệ Khoa đó.
* **Lớp hành chính sinh viên (`Class`):** Quản lý tên lớp sinh viên và liên kết khóa ngoại với Khoa chủ quản. Áp dụng cơ chế phòng vệ dữ liệu: Không cho phép xóa lớp hành chính nếu lớp đó đang chứa hồ sơ sinh viên học tập bên dưới.

### 📚 3.3. Phân hệ Nghiệp vụ Đào tạo (Academic Module)
* **Môn học gốc (`Subject`):** Quản lý mã môn học, tên môn học và định mức số tín chỉ tích lũy đào tạo. Hệ thống tự động chặn hành vi xóa môn học nếu môn học đó đã được dùng để lên lịch mở các lớp học phần.
* **Lớp học phần mở theo kỳ (`CourseClass`):** Quản lý mã lớp học phần, học kỳ tổ chức giảng dạy và liên kết với môn học gốc. Hệ thống tích hợp hàm chặn xóa lớp học phần nếu như đã phát sinh dữ liệu nhập điểm thành phần của sinh viên.

### 👥 3.4. Phân hệ Hồ sơ Sinh viên (Student Module)
* **Nested JSON Creation:** API tạo mới sinh viên cho phép tiếp nhận một cấu trúc JSON lồng nhau, xử lý tạo đồng thời hồ sơ lý lịch và tài khoản User đăng nhập hệ thống đi kèm mượt mà, tự động gán vai trò `STUDENT` dưới sự bảo vệ của tầng giao dịch `@Transactional`.
* **Cascading Soft Delete:** Khi thực hiện xóa hồ sơ sinh viên, hệ thống thực hiện cơ chế xóa mềm: Chuyển cờ trạng thái `is_active = false` đồng thời trên cả thực thể Sinh viên lẫn thực thể tài khoản User liên kết, đảm bảo an toàn dữ liệu lịch sử.

### 🎯 3.5. Phân hệ Điểm số & GPA Tín chỉ (Grade Module)
* **Nhập liệu an toàn (Null-Safe):** Hệ thống hỗ trợ nhập các đầu điểm thành phần hệ 10. Thuật toán xử lý ngầm tích hợp cơ chế phòng vệ toán học: Nếu giảng viên bỏ trống đầu điểm (giá trị gửi lên từ Client là `null`), hệ thống tự động quy đổi thành `0.0` để tiếp tục tính toán mà không gây lỗi hệ thống.
* **Tự động quy đổi quy chế:** Hệ thống tự động tính điểm tổng kết dựa trên trọng số chuẩn `10% Chuyên cần - 30% Giữa kỳ - 60% Cuối kỳ`, đồng thời tự động ánh xạ sang Điểm chữ (`A`, `B+`, `B`...) và Điểm số hệ 4 (`4.0`, `3.5`, `3.0`...).
* **Thuật toán GPA tích lũy nghiệp vụ lõi:** Endpoint tính tổng kết học tập hỗ trợ bóc tách, tự động tính toán tổng số tín chỉ tích lũy đạt chuẩn và điểm trung bình tích lũy GPA (cả hệ 10 và hệ 4) theo phương pháp tính **bình quân gia quyền** với số tín chỉ của từng môn học cụ thể.

---

## ✅ 4. Tiến độ Dự án (Project Progress)

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

## 🚀 5. Lộ trình Triển khai Tiếp theo (Roadmap)

### ☑️ Giai đoạn 5: Hoàn thiện Phân hệ Quản lý Hành chính (ĐÃ HOÀN THÀNH)
* [x] Xây dựng trọn bộ API CRUD hoàn chỉnh cho phân hệ Khoa/Viện (`Department`) và Lớp hành chính (`Class`) nhằm khép kín hoàn toàn quy trình nạp dữ liệu hệ thống, loại bỏ việc viết lệnh SQL thủ công.
* [x] Tích hợp logic bảo vệ toàn vẹn dữ liệu khóa ngoại (`existsBy...`), tự động ném mã lỗi nghiệp vụ tương ứng (`1017`, `1018`) ra ngoài Client khi dính ràng buộc.

### ☑️ Giai đoạn 6: Tích hợp Hệ thống Bảo mật Chuyên sâu & CORS (ĐÃ HOÀN THÀNH)
* [x] Kích hoạt và cấu hình lớp bảo vệ tự động Spring Security, vô hiệu hóa lỗ hổng CSRF.
* [x] Thực hiện mã hóa một chiều mật khẩu tài khoản người dùng bằng thuật toán mạnh `BCryptPasswordEncoder`.
* [x] Hoàn thiện API Đăng nhập (`POST /auth/login`), tự động kiểm tra thông tin tài khoản và cấp phát chuỗi mã hóa bảo mật Token JWT chuẩn thuật toán HS256.
* [x] **Cấu hình CORS toàn cục:** Cấu hình bộ lọc chia sẻ tài nguyên nguồn gốc chéo (CORS) trực tiếp trong cấu hình Security, cấp phép tường minh cho môi trường chạy Frontend (`http://localhost:3000` và `http://localhost:5173`) được phép gọi đầy đủ các phương thức HTTP và đính kèm Credentials an toàn.
* [x] Mở bộ lọc chấp nhận vô điều kiện các request thăm dò trình duyệt `HttpMethod.OPTIONS` (Preflight Request) để chống kẹt lỗi CORS khi Frontend tích hợp.

### 🔲 Giai đoạn 7: Đóng gói và Triển khai hệ thống (Dockerize)
* [ ] Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java sử dụng cơ chế Multi-stage build nhằm tối ưu hóa dung lượng file Image đầu ra.
* [ ] Viết file liên kết đồng bộ `docker-compose.yml` để thiết lập mạng ảo độc lập, vận hành cùng lúc Container ứng dụng Spring Boot và Container cơ sở dữ liệu MySQL một cách tự động chỉ bằng một lệnh duy nhất.

### 🔲 Giai đoạn 8: Thiết lập và Phát triển Phân hệ UI Client (Frontend Roadmap)
* [ ] Khởi tạo dự án Single Page Application (SPA) bằng công nghệ React.js thế hệ 19 phối hợp với bộ đóng gói siêu tốc **Vite**.
* [ ] Cài đặt các thư viện kết nối cốt lõi bao gồm `axios` phục vụ gọi API và `react-router-dom` xử lý điều hướng trang điều khiển.
* [ ] Thiết lập cấu hình **Axios Client tập trung** (`src/api/axiosClient.js`):
  * Tích hợp Request Interceptor tự động quét và lôi Token bảo mật từ `localStorage` để gắn vào Header dạng `Authorization: Bearer <Token>`.
  * Tích hợp Response Interceptor tự động giải nén cấu trúc bọc `ApiResponse` của Spring Boot để trả thẳng cục dữ liệu sạch `result` cho các thành phần UI tiêu thụ, đồng thời bắt tập trung mã code nghiệp vụ để hiển thị Toast thông báo lỗi trực quan.
* [ ] Xây dựng màn hình Đăng nhập (`LoginPage.jsx`) thu thập form dữ liệu, lưu giữ thông tin định danh và phân phối quyền hạn.
* [ ] Phát triển hệ thống View dữ liệu dạng bảng (Data Table) và các Form nhập liệu động phục vụ đầy đủ phân hệ CRUD hành chính đào tạo và bảng tổng hợp GPA của sinh viên.

---

## 🔗 6. Quy trình Quản lý Mã nguồn (Git Workflow)
Dự án tuân thủ chặt chẽ quy trình Git Workflow chuyên nghiệp nhằm quản lý lịch sử commit và tích hợp tính năng an toàn:
* **`main`**: Nhánh Production lưu trữ các phiên bản mã nguồn đã đạt trạng thái ổn định tuyệt đối và có thể đem đi chạy thực tế.
* **`develop`**: Nhánh tích hợp (nơi gom các tính năng mới hoàn thiện để kiểm thử trước khi merge vào main).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển các chức năng riêng lẻ tách biệt từ nhánh `develop`.
* *Quy tắc đặt tên commit:* `type: message` (Ví dụ: `feat: add global cors configuration`, `fix: resolve grade service null pointer check`).

---

### 📜 7. Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup-entities` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, kết nối MySQL và khởi dựng thành công 8 thực thể nền tảng. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman (Loại bỏ lỗi kẹt cổng 401). |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản `@Transactional`, tự động phân quyền hệ thống và cơ chế Xóa mềm (Soft Delete) kép liên kết. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành trọn gói Nghiệp vụ Môn học (`Subject`), Lớp học phần (`CourseClass`), phân hệ Điểm số (`Grade`), thuật toán quy đổi GPA tín chỉ và tối ưu hóa loại bỏ hoàn toàn lỗi truy vấn N+1. |
| 08/06/2026 | `develop` | **Cập nhật** | Hoàn thiện toàn phân hệ CRUD danh mục hành chính Khoa/Viện (`Department`) và Lớp hành chính (`Class`) kèm cơ chế `JOIN FETCH` chống lỗi N+1. |
| 09/06/2026 | `develop` | **Cập nhật** | Cấu hình CORS toàn cục mở đường kết nối ReactJS, làm giàu Payload phản hồi Login, vá triệt để lỗ hổng sập luồng `NullPointerException` tại `GradeServiceImpl` và `UserServiceImpl`. |

---

### 📜 8. SQL
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21CNPM1',1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D22KHMT1',2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21DTVT2',3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D22ATTT1',4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21HTTT1',5);
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
`teacher_id` bigint DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKmdeewqfqfih9ft75b0gbp9nrc` (`code`),
KEY `FKpxijwa2w0cvst789igk5x2fpu` (`subject_id`),
KEY `FK_course_class_teacher` (`teacher_id`),
CONSTRAINT `FK_course_class_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
CONSTRAINT `FKpxijwa2w0cvst789igk5x2fpu` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','CPP_CLASS_01','HK1-2026',1,1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DSA_CLASS_01','HK1-2026',2,2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','JAVA_CLASS_01','HK1-2026',3,3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','NET_CLASS_01','HK1-2026',4,4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','OS_CLASS_01','HK1-2026',5,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','KHMT','Khoa học máy tính'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DTVT','Điện tử viễn thông'),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','ATTT','An toàn thông tin'),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','HTTT','Hệ thống thông tin');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',9,9,'A',8.5,8.85,1,1,4),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',8,8.5,'B+',8,8.3,2,2,3.5),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',10,9.5,'A',9,9.4,3,3,4),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',7.5,8,'B',7,7.65,4,4,3),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',6,7,'C+',6.5,6.75,5,5,2.5);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','ADMIN'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','STUDENT'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','TEACHER');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2003-04-05','Anh','Nam','Nguyễn Đình','0987654321','B21CNPM001',1,2,_binary ''),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-05-23','Đăng','Nam','Trần Minh','0987654322','B21CNPM002',2,3,_binary ''),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-10-15','Hải','Nam','Nguyễn Hoàng','0987654323','B21CNPM003',3,4,_binary ''),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-05-20','Linh','Nữ','Phạm Khánh','0987654324','B21CNPM004',4,5,_binary ''),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-12-01','Tùng','Nam','Vũ Sơn','0987654325','B21CNPM005',5,6,_binary '');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','C_PLUS_BASE',3,'Lập trình C++ cơ bản'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DSA_STRUCTURE',4,'Cấu trúc dữ liệu & Giải thuật'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','JAVA_WEB_DEV',3,'Lập trình Web nâng cao với Java'),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','NET_COMPUTER',3,'Cơ sở mạng máy tính'),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','OS_OPERATION',3,'Hệ điều hành máy tính');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`teacher_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
`last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`date_of_birth` date DEFAULT NULL,
`gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`is_active` bit(1) NOT NULL DEFAULT b'1',
`user_id` bigint NOT NULL,
`department_id` bigint NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UK_teacher_code` (`teacher_code`),
UNIQUE KEY `UK_teacher_user` (`user_id`),
KEY `FK_teacher_department` (`department_id`),
CONSTRAINT `FK_teacher_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
CONSTRAINT `FK_teacher_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_01','Tuấn','Trần Quốc','1985-04-12','Nam','0912111222',_binary '',7,1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_02','Minh','Nguyễn Thị','1988-08-24','Nữ','0912333444',_binary '',8,2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_03','Nam','Lê Hoàng','1982-11-05','Nam','0912555666',_binary '',9,3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_04','Hải','Phạm Văn','1979-02-18','Nam','0912777888',_binary '',10,4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_05','Linh','Vũ Khánh','1991-06-30','Nữ','0912999000',_binary '',11,5);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
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
INSERT INTO `user_roles` VALUES (1,1),(2,2),(3,2),(4,2),(5,2),(6,2),(7,3),(8,3),(9,3),(10,3),(11,3);
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
`is_first_login` bit(1) NOT NULL DEFAULT b'1',
PRIMARY KEY (`id`),
UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 18:10:10.935037','admin@open.edu.vn','$2a$10$Nuln0JaFYxBJ92H8tcenfOS7il02iWjIQHp4BoNV.lsHJwiTAHqtu','admin',_binary '',_binary '\0'),(2,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.044169','b21cnpm001@open.edu.vn','$2a$10$Yms/lS91daUUygnYFTouHeLFaQtzuj8FwbGdiODj7DqZYeGMkOtbu','B21CNPM001',_binary '',_binary '\0'),(3,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.155671','b21cnpm002@open.edu.vn','$2a$10$MARRm1W43sRk4jf5Xr8s7eLhT4U8/FwF93UJ2ZlmcyP72XTVfr/Ky','B21CNPM002',_binary '',_binary ''),(4,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.262629','b21cnpm003@open.edu.vn','$2a$10$Ty4oV7qRla7JBxfPNDWU7O/PGZl8rbwQdWnKLm.mddVzZOyt2ey4G','B21CNPM003',_binary '',_binary ''),(5,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.366777','b21cnpm004@open.edu.vn','$2a$10$NRwrvdYgyRlrnHriPdOfQ.cOfeDE9sIeDMkCLZ9f8xpTb3YwEpCDa','B21CNPM004',_binary '',_binary ''),(6,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.483766','b21cnpm005@open.edu.vn','$2a$10$5ap5383vHtSQISzx5Ghn7.nNy2GfthpKk7mBCea1Vum26WEfXtSR2','B21CNPM005',_binary '',_binary ''),(7,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.594227','tuan.tq@teacher.open.edu.vn','$2a$10$aMbmK8V8gTKPiaWvBbVH4e1y/q3PvQjdN9EoZItZLLJrvg4GpGr9i','GV2026_01',_binary '',_binary ''),(8,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.719566','minh.nt@teacher.open.edu.vn','$2a$10$rWpDKdQvXp6X4ftwMH4PNeDIozCUOuqhzORMQtg.dLcTGD3sfOVJu','GV2026_02',_binary '',_binary ''),(9,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.832910','nam.lh@teacher.open.edu.vn','$2a$10$RD1rSRZoix4QBI1rNOrXMegIKrJOtroS7ufrRMRYaIvzBT0Z19wDK','GV2026_03',_binary '',_binary ''),(10,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.947974','hai.pv@teacher.open.edu.vn','$2a$10$cvqnA2diirlOFBgqsWd/wuApEUXh/WGu/a9Q5SQqYlYVADRzkMh8S','GV2026_04',_binary '',_binary ''),(11,'2026-06-09 17:11:49.000000','2026-06-09 18:10:12.056122','linh.vk@teacher.open.edu.vn','$2a$10$mR6GbQbKiBuDzQEXpXaQgeV00eCNhHBPyLUIYx51q8apmAhuw5YCm','GV2026_05',_binary '',_binary '');
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

-- Dump completed on 2026-06-10  1:12:14
</file>

</files>

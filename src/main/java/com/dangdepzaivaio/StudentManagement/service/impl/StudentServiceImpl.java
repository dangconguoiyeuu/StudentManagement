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

    @Override
    @Transactional // Đảm bảo đồng bộ dữ liệu giữa bảng Users và Students
    public StudentResponse createStudent(StudentCreationRequest request) { // ĐỔI KIỂU TRẢ VỀ THÀNH StudentResponse Ở ĐÂY

        // 1. Kiểm tra Mã sinh viên đã tồn tại chưa
        if (studentRepository.existsByStudentCode(request.studentCode())) {
            throw new RuntimeException("Mã sinh viên này đã tồn tại trên hệ thống!");
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
        return studentRepository.findAll().stream()
                .map(studentMapper::toResponse) // SỬA ĐOẠN NÀY
                .toList();
    }

    @Override
    public StudentResponse getStudentById(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.STUDENT_NOT_FOUND));
        return studentMapper.toResponse(student); // SỬA ĐOẠN NÀY
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
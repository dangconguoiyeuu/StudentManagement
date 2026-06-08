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
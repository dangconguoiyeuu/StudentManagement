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
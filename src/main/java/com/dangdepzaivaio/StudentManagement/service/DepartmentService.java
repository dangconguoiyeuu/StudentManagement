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
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
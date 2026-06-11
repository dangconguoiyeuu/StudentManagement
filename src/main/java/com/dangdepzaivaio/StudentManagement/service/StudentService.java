package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.StudentCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.StudentUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;
import java.util.List;

public interface StudentService {
    StudentResponse createStudent(StudentCreationRequest request);
    List<StudentResponse> getAllStudents(boolean includeInactive);

    // 🔥 ĐÃ SỬA: Chuyển toàn bộ tham số ID sang String
    StudentResponse getStudentById(String id);
    StudentResponse updateStudent(String id, StudentUpdateRequest request);
    void disableStudent(String id);
    void enableStudent(String id);
}
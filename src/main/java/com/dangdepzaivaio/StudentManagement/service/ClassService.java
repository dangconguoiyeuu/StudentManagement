package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.ClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.ClassResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentResponse;

import java.util.List;

public interface ClassService {
    ClassResponse createClass(ClassRequest request);
    List<ClassResponse> getAllClasses();
    ClassResponse updateClass(Long id, ClassRequest request);
    void deleteClass(Long id);
    ClassResponse getClassById(Long id);
    List<StudentResponse> getStudentsByClassId(Long classId);
}
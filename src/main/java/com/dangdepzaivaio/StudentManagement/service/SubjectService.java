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
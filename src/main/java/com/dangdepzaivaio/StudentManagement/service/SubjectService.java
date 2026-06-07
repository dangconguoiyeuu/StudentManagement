package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.SubjectRequest;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import java.util.List;

public interface SubjectService {
    Subject createSubject(SubjectRequest request);
    List<Subject> getAllSubjects();
    Subject getSubjectById(Long id);
    Subject updateSubject(Long id, SubjectRequest request);
    void deleteSubject(Long id);
}
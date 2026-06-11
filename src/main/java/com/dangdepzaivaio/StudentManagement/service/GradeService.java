package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse;
import java.util.List;

public interface GradeService {
    GradeResponse inputGrade(GradeRequest request);
    List<GradeResponse> getGradesByStudent(String studentId); // 🔥 Sửa sang String
    GradeResponse updateGrade(Long id, GradeRequest request);
    List<GradeResponse> getAllGrades();
    GradeResponse getGradeById(Long id);
    void deleteGrade(Long id);
    StudentAcademicSummaryResponse getAcademicSummary(String studentId); // 🔥 Sửa sang String
}
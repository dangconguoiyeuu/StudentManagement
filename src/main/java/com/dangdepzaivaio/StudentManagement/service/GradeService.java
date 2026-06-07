package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.GradeRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.GradeResponse;
import com.dangdepzaivaio.StudentManagement.dto.response.StudentAcademicSummaryResponse; // QUAN TRỌNG: Phải import cái này
import java.util.List;

public interface GradeService {
    GradeResponse inputGrade(GradeRequest request);
    List<GradeResponse> getGradesByStudent(Long studentId);
    GradeResponse updateGrade(Long id, GradeRequest request);

    // Khai báo cho bộ CRUD bổ sung
    List<GradeResponse> getAllGrades();
    GradeResponse getGradeById(Long id);
    void deleteGrade(Long id);

    // 🔥 CHÍNH LÀ DÒNG NÀY: Khai báo hàm tổng hợp học tập để Impl có thể @Override thành công
    StudentAcademicSummaryResponse getAcademicSummary(Long studentId);
}
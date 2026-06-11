package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.TeacherCreationRequest;
import com.dangdepzaivaio.StudentManagement.dto.request.TeacherUpdateRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.TeacherResponse;

import java.util.List;

public interface TeacherService {
    TeacherResponse createTeacher(TeacherCreationRequest request);
    List<TeacherResponse> getAllTeachers();
    TeacherResponse getTeacherById(String id);
    TeacherResponse updateTeacher(String id, TeacherUpdateRequest request);
    void disableTeacher(String id);
    void enableTeacher(String id);
}

package com.dangdepzaivaio.StudentManagement.service;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import java.util.List;

public interface CourseClassService {
    CourseClassResponse createCourseClass(CourseClassRequest request);
    List<CourseClassResponse> getAllCourseClasses();
    CourseClassResponse getCourseClassById(Long id);
    CourseClassResponse updateCourseClass(Long id, CourseClassRequest request);
    void deleteCourseClass(Long id);
}
package com.dangdepzaivaio.StudentManagement.mapper;

import com.dangdepzaivaio.StudentManagement.dto.request.CourseClassRequest;
import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import com.dangdepzaivaio.StudentManagement.entity.Subject;
import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface CourseClassMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    @Mapping(target = "teacher", ignore = true)
    @Mapping(target = "registeredStudents", ignore = true)
    CourseClass toEntity(CourseClassRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "subject", ignore = true)
    @Mapping(target = "teacher", ignore = true)
    @Mapping(target = "registeredStudents", ignore = true)
    void updateEntityFromRequest(CourseClassRequest request, @MappingTarget CourseClass courseClass);

    default CourseClassResponse toResponse(CourseClass courseClass) {
        if (courseClass == null) {
            return null;
        }

        Subject subject = courseClass.getSubject();
        Teacher teacher = courseClass.getTeacher();
        String teacherName = teacher == null
                ? null
                : (safe(teacher.getLastName()) + " " + safe(teacher.getFirstName())).trim();

        return new CourseClassResponse(
                courseClass.getId(),
                courseClass.getCode(),
                courseClass.getSemester(),
                subject == null ? null : subject.getId(),
                subject == null ? null : subject.getCode(),
                subject == null ? null : subject.getName(),
                subject == null ? null : subject.getCredits(),
                teacher == null ? null : teacher.getId(),
                teacherName == null || teacherName.isBlank() ? null : teacherName,
                courseClass.getMaxStudents(),
                courseClass.getRegisteredStudents(),
                courseClass.getSchedule(),
                courseClass.isOpenForRegistration()
        );
    }

    private static String safe(String value) {
        return value == null ? "" : value;
    }
}

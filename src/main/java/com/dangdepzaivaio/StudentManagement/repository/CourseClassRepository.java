package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.dto.response.CourseClassStatResponse;
import com.dangdepzaivaio.StudentManagement.entity.CourseClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseClassRepository extends JpaRepository<CourseClass, Long> {
    boolean existsByCode(String code);
    Optional<CourseClass> findByCode(String code);
    boolean existsBySubjectId(Long subjectId);

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user")
    List<CourseClass> findAllWithSubjectAndTeacher();

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE cc.id = :id")
    Optional<CourseClass> findByIdWithSubjectAndTeacher(@Param("id") Long id);

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE t.id = :teacherId")
    List<CourseClass> findByTeacherId(@Param("teacherId") String teacherId);

    List<CourseClass> findBySemester(String semester);

    @Query("SELECT cc FROM CourseClass cc " +
            "JOIN FETCH cc.subject s " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE cc.openForRegistration = true")
    List<CourseClass> findByOpenForRegistrationTrue();

    @Query("SELECT new com.dangdepzaivaio.StudentManagement.dto.response.CourseClassStatResponse(" +
            "cc.id, cc.code, s.name, CONCAT(COALESCE(t.lastName, ''), ' ', COALESCE(t.firstName, '')), " +
            "COUNT(g.id), cc.semester, cc.maxStudents, cc.openForRegistration) " +
            "FROM CourseClass cc " +
            "JOIN cc.subject s " +
            "LEFT JOIN cc.teacher t " +
            "LEFT JOIN Grade g ON g.courseClass.id = cc.id " +
            "GROUP BY cc.id, cc.code, s.name, t.lastName, t.firstName, cc.semester, cc.maxStudents, cc.openForRegistration")
    List<CourseClassStatResponse> getRegistrationStatistics();
}

package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {

    // Sử dụng JOIN FETCH để lôi toàn bộ dữ liệu Lớp học phần và Môn học lên cùng 1 lúc trong 1 câu SQL duy nhất
    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject s " +
            "WHERE g.student.id = :studentId")
    List<Grade> findByStudentId(@Param("studentId") Long studentId);

    List<Grade> findByCourseClassId(Long courseClassId);
    boolean existsByStudentIdAndCourseClassId(Long studentId, Long courseClassId);
    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject sub")
    List<Grade> findAllGradesWithJoinFetch();
    boolean existsByCourseClassId(Long courseClassId);
}
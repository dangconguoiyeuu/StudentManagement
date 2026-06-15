package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "WHERE g.student.id = :studentId")
    List<Grade> findByStudentId(@Param("studentId") String studentId);

    // 🔥 ĐÂY LÀ HÀM MỚI ĐƯỢC THÊM VÀO ĐỂ FIX LỖI
    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "WHERE g.student.id IN :studentIds")
    List<Grade> findAllByStudentIdIn(@Param("studentIds") List<String> studentIds);

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE cc.id = :courseClassId")
    List<Grade> findByCourseClassId(@Param("courseClassId") Long courseClassId);

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE s.id = :studentId AND cc.id = :courseClassId")
    Optional<Grade> findByStudentIdAndCourseClassId(
            @Param("studentId") String studentId,
            @Param("courseClassId") Long courseClassId
    );

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user " +
            "WHERE g.id = :id")
    Optional<Grade> findByIdWithDetails(@Param("id") Long id);

    boolean existsByStudentIdAndCourseClassId(String studentId, Long courseClassId);
    boolean existsByCourseClassId(Long courseClassId);
    long countByCourseClassId(Long courseClassId);

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "LEFT JOIN FETCH cc.teacher t " +
            "LEFT JOIN FETCH t.user")
    List<Grade> findAllGradesWithJoinFetch();

    @Query("SELECT g FROM Grade g " +
            "JOIN FETCH g.student s " +
            "JOIN FETCH s.user " +
            "JOIN FETCH s.studentClass " +
            "JOIN FETCH g.courseClass cc " +
            "JOIN FETCH cc.subject " +
            "JOIN FETCH cc.teacher t " +
            "JOIN FETCH t.user " +
            "WHERE t.user.email = :email")
    List<Grade> findByCourseClassTeacherUserEmail(@Param("email") String email);

    @Modifying
    @Query("DELETE FROM Grade g WHERE g.student.id = :studentId AND g.courseClass.id = :courseClassId")
    void hardDeleteByStudentAndCourseClass(@Param("studentId") String studentId, @Param("courseClassId") Long courseClassId);
}
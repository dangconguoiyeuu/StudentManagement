package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, String> {
    boolean existsByTeacherCode(String teacherCode);
    Optional<Teacher> findByTeacherCode(String teacherCode);

    @Query("SELECT t FROM Teacher t JOIN FETCH t.user JOIN FETCH t.department")
    List<Teacher> findAllTeachersWithJoinFetch();
}
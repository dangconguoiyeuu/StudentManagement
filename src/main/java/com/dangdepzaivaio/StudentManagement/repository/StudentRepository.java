package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> { // 🔥 Khóa String
    boolean existsByStudentCode(String studentCode);
    Optional<Student> findByStudentCode(String studentCode);
    boolean existsByStudentClassId(Long classId);

    @Query("SELECT s FROM Student s JOIN FETCH s.user u JOIN FETCH s.studentClass c WHERE s.isActive = true")
    List<Student> findAllActiveStudentsWithJoinFetch();

    @Query("SELECT s FROM Student s JOIN FETCH s.user u JOIN FETCH s.studentClass c")
    List<Student> findAllStudentsWithJoinFetch();

    @Query("SELECT s FROM Student s JOIN FETCH s.user JOIN FETCH s.studentClass WHERE s.id = :id")
    Optional<Student> findByIdWithJoinFetch(@Param("id") String id); // 🔥 Đổi sang tham số String id
}
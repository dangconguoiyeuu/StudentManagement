package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    // Tìm kiếm toàn bộ điểm số của một sinh viên dựa vào ID
    List<Grade> findByStudentId(Long studentId);

    // Tìm kiếm điểm số của một lớp học phần
    List<Grade> findByCourseClassId(Long courseClassId);
}
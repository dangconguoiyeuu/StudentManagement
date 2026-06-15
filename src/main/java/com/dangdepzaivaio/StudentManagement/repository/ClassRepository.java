package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    List<Class> findByDepartmentId(Long departmentId);
    boolean existsByName(String name);
    boolean existsByDepartmentId(Long departmentId);
    @Query("SELECT c FROM Class c LEFT JOIN FETCH c.department LEFT JOIN FETCH c.advisorTeacher")
    List<Class> findAllClassesWithJoinFetch();
    List<Class> findByAdvisorTeacherId(String advisorTeacherId);
    java.util.Optional<Class> findByName(String name);
}
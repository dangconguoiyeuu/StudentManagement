package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
    List<Class> findByDepartmentId(Long departmentId);
    boolean existsByName(String name);
    boolean existsByDepartmentId(Long departmentId);
    @org.springframework.data.jpa.repository.Query("SELECT c FROM Class c JOIN FETCH c.department")
    List<Class> findAllClassesWithJoinFetch();
}
package com.dangdepzaivaio.StudentManagement.repository;

import com.dangdepzaivaio.StudentManagement.entity.RegistrationPeriod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface RegistrationPeriodRepository extends JpaRepository<RegistrationPeriod, Long> {

    @Query("SELECT r FROM RegistrationPeriod r WHERE r.semester = :semester AND r.isActive = true " +
            "AND :now BETWEEN r.startTime AND r.endTime")
    Optional<RegistrationPeriod> findActivePeriod(@Param("semester") String semester, @Param("now") LocalDateTime now);
    List<RegistrationPeriod> findAllByIsActiveTrue();
}
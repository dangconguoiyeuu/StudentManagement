package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record TeacherCreationRequest(
        @NotBlank(message = "Mã giảng viên không được để trống") String teacherCode,
        @NotBlank(message = "Tên không được để trống") String firstName,
        @NotBlank(message = "Họ không được để trống") String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber,
        @NotNull(message = "ID khoa không được để trống") Long departmentId
) {}
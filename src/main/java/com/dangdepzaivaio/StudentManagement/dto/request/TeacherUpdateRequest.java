package com.dangdepzaivaio.StudentManagement.dto.request;

import java.time.LocalDate;

public record TeacherUpdateRequest(
        String firstName,
        String lastName,
        LocalDate dateOfBirth,
        String gender,
        String phoneNumber
) {}
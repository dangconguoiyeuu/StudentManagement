package com.dangdepzaivaio.StudentManagement.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CourseClassRequest(
        @NotBlank(message = "Ma lop hoc phan khong duoc de trong")
        String code,

        @NotBlank(message = "Hoc ky khong duoc de trong")
        String semester,

        @NotNull(message = "ID mon hoc khong duoc de trong")
        Long subjectId,

        String teacherId,

        @Min(value = 1, message = "Si so toi da phai lon hon 0")
        Integer maxStudents,

        String schedule,

        Boolean openForRegistration
) {}

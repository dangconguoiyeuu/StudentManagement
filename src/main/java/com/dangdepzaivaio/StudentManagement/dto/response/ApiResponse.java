package com.dangdepzaivaio.StudentManagement.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL) // Những trường có giá trị null sẽ được tự động ẩn khỏi JSON trả về
public record ApiResponse<T>(
        int code,         // Mã code nội bộ tự định nghĩa (Ví dụ: 1000 là thành công, 4000 là lỗi validation)
        String message,   // Thông điệp trả về cho Client
        T result          // Dữ liệu thực tế trả về (Có thể là Object sinh viên, List hoặc null nếu lỗi)
) {}
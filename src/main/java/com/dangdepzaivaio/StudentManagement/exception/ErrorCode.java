package com.dangdepzaivaio.StudentManagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import lombok.Getter;

@Getter
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Lỗi hệ thống không xác định", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXISTED(1001, "Tài khoản đăng nhập đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    ROLE_NOT_FOUND(1002, "Vai trò người dùng (Role) không tồn tại", HttpStatus.NOT_FOUND),
    STUDENT_NOT_FOUND(1003, "Không tìm thấy thông tin sinh viên yêu cầu", HttpStatus.NOT_FOUND),
    CLASS_NOT_FOUND(1004, "Lớp hành chính không tồn tại trên hệ thống", HttpStatus.NOT_FOUND),
    VALIDATION_ERROR(4000, "Dữ liệu đầu vào không hợp lệ", HttpStatus.BAD_REQUEST),
    EMAIL_EXISTED(1005, "Email này đã được sử dụng trên hệ thống", HttpStatus.BAD_REQUEST),
    SUBJECT_EXISTED(1006, "Môn học này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    SUBJECT_NOT_FOUND(1007, "Không tìm thấy thông tin môn học yêu cầu", HttpStatus.NOT_FOUND)
    ;

    private final int code;
    private final String message;
    private final HttpStatusCode statusCode; // Lưu mã HTTP Status chuẩn (200, 400, 404, 500)

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
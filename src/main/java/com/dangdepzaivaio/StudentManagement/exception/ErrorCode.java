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
    SUBJECT_NOT_FOUND(1007, "Không tìm thấy thông tin môn học yêu cầu", HttpStatus.NOT_FOUND),
    COURSE_CLASS_EXISTED(1008, "Mã lớp học phần này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_NOT_FOUND(1009, "Không tìm thấy thông tin lớp học phần yêu cầu", HttpStatus.NOT_FOUND),
    GRADE_EXISTED(1010, "Sinh viên này đã được nhập điểm cho lớp học phần này trước đó", HttpStatus.BAD_REQUEST),
    GRADE_NOT_FOUND(1011, "Không tìm thấy thông tin đầu điểm yêu cầu", HttpStatus.NOT_FOUND),
    DEPARTMENT_NOT_FOUND(1012, "Không tìm thấy thông tin khoa/viện yêu cầu", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1013, "Tên đăng nhập hoặc mật khẩu không chính xác", HttpStatus.UNAUTHORIZED),
    CLASS_EXISTED(1014, "Tên lớp hành chính này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    DEPARTMENT_EXISTED(1015, "Mã khoa/viện đào tạo này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    STUDENT_CODE_EXISTED(1016, "Mã số sinh viên này đã tồn tại trên hệ thống", HttpStatus.BAD_REQUEST),
    DEPARTMENT_HAS_CLASSES(1017, "Không thể xóa khoa này vì đang có lớp hành chính thuộc về khoa", HttpStatus.BAD_REQUEST),
    CLASS_HAS_STUDENTS(1018, "Không thể xóa lớp hành chính này vì đang có sinh viên thuộc về lớp", HttpStatus.BAD_REQUEST),
    USER_NOT_FOUND(1019, "Không tìm thấy thông tin tài khoản yêu cầu", HttpStatus.NOT_FOUND),
    SUBJECT_HAS_CLASSES(1020, "Không thể xóa môn học này vì đang có lớp học phần trực thuộc", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_HAS_GRADES(1021, "Không thể xóa lớp học phần này vì đã có sinh viên nhận đầu điểm", HttpStatus.BAD_REQUEST);

    private final int code;
    private final String message;
    private final HttpStatusCode statusCode;

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
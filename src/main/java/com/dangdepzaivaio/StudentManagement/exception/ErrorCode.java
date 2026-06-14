package com.dangdepzaivaio.StudentManagement.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Lỗi hệ thống chưa được phân loại", HttpStatus.INTERNAL_SERVER_ERROR),
    VALIDATION_ERROR(1001, "Dữ liệu không hợp lệ", HttpStatus.BAD_REQUEST),
    USERNAME_EXISTED(1002, "Tên đăng nhập đã tồn tại", HttpStatus.BAD_REQUEST),
    USER_NOT_FOUND(1003, "Không tìm thấy người dùng", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1004, "Phiên đăng nhập không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.", HttpStatus.UNAUTHORIZED),
    STUDENT_CODE_EXISTED(1005, "Mã sinh viên đã tồn tại", HttpStatus.BAD_REQUEST),
    STUDENT_NOT_FOUND(1006, "Không tìm thấy sinh viên", HttpStatus.NOT_FOUND),
    CLASS_NOT_FOUND(1007, "Không tìm thấy lớp hành chính", HttpStatus.NOT_FOUND),
    ROLE_NOT_FOUND(1008, "Không tìm thấy vai trò", HttpStatus.NOT_FOUND),
    DEPARTMENT_NOT_FOUND(1009, "Không tìm thấy khoa chuyên môn", HttpStatus.NOT_FOUND),
    TEACHER_CODE_EXISTED(1010, "Mã giảng viên đã tồn tại", HttpStatus.BAD_REQUEST),
    TEACHER_NOT_FOUND(1011, "Không tìm thấy giảng viên", HttpStatus.NOT_FOUND),
    GRADE_EXISTED(1012, "Sinh viên đã có bản ghi đăng ký hoặc điểm cho lớp học phần này", HttpStatus.BAD_REQUEST),
    GRADE_NOT_FOUND(1013, "Không tìm thấy bản ghi điểm", HttpStatus.NOT_FOUND),
    COURSE_CLASS_NOT_FOUND(1014, "Không tìm thấy lớp học phần", HttpStatus.NOT_FOUND),
    COURSE_CLASS_EXISTED(1015, "Lớp học phần đã tồn tại", HttpStatus.BAD_REQUEST),
    SUBJECT_NOT_FOUND(1016, "Không tìm thấy môn học", HttpStatus.NOT_FOUND),
    COURSE_CLASS_HAS_GRADES(1017, "Không thể xóa vì lớp học phần đã có sinh viên đăng ký hoặc đã có điểm", HttpStatus.BAD_REQUEST),
    CLASS_EXISTED(1018, "Lớp hành chính đã tồn tại", HttpStatus.BAD_REQUEST),
    CLASS_HAS_STUDENTS(1019, "Không thể xóa vì lớp hành chính đang có sinh viên", HttpStatus.BAD_REQUEST),
    DEPARTMENT_EXISTED(1020, "Khoa chuyên môn đã tồn tại", HttpStatus.BAD_REQUEST),
    DEPARTMENT_HAS_CLASSES(1021, "Không thể xóa vì khoa đang quản lý lớp hành chính", HttpStatus.BAD_REQUEST),
    SUBJECT_EXISTED(1022, "Môn học đã tồn tại", HttpStatus.BAD_REQUEST),
    SUBJECT_HAS_CLASSES(1023, "Không thể xóa vì môn học đang có lớp học phần", HttpStatus.BAD_REQUEST),
    ACCOUNT_LOCKED(1024, "Tài khoản đang bị khóa. Vui lòng liên hệ quản trị viên.", HttpStatus.FORBIDDEN),
    REGISTRATION_PERIOD_CLOSED(1025, "Cổng đăng ký tín chỉ đang đóng hoặc đã hết hạn", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_CLOSED(1026, "Lớp học phần chưa được mở cho đăng ký", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_FULL(1027, "Lớp học phần đã đạt sĩ số tối đa", HttpStatus.BAD_REQUEST),
    GRADE_ALREADY_ENTERED(1028, "Không thể hủy đăng ký vì giảng viên đã nhập điểm", HttpStatus.BAD_REQUEST),
    TEACHER_NOT_ASSIGNED_TO_CLASS(1029, "Giảng viên chỉ được thao tác trên lớp học phần được phân công", HttpStatus.FORBIDDEN),
    STUDENT_NOT_ENROLLED(1030, "Sinh viên chưa đăng ký lớp học phần này", HttpStatus.BAD_REQUEST),
    EMAIL_NOT_FOUND(1031, "Email đăng nhập không tồn tại trong hệ thống", HttpStatus.UNAUTHORIZED),
    WRONG_PASSWORD(1032, "Mật khẩu không chính xác", HttpStatus.UNAUTHORIZED),
    ACCESS_DENIED(1033, "Bạn không có quyền thực hiện thao tác này", HttpStatus.FORBIDDEN),
    REGISTRATION_PERIOD_NOT_FOUND(1034, "Không tìm thấy khung giờ đăng ký tín chỉ", HttpStatus.NOT_FOUND),
    NOT_FIRST_LOGIN(1035, "Tài khoản đã đổi mật khẩu, không thể đổi lại qua luồng lần đầu", HttpStatus.BAD_REQUEST),
    EMAIL_EXISTED(1036, "Email đã được sử dụng bởi tài khoản khác", HttpStatus.BAD_REQUEST),
    EXCEL_FILE_EMPTY(1037, "File Excel trống hoặc chưa được chọn", HttpStatus.BAD_REQUEST),
    EXCEL_FILE_INVALID(1038, "File không đúng định dạng. Chỉ chấp nhận .xlsx hoặc .xls", HttpStatus.BAD_REQUEST),
    EXCEL_NO_DATA(1039, "File Excel không có dữ liệu để xử lý", HttpStatus.BAD_REQUEST);

    private final int code;
    private final String message;
    private final HttpStatus statusCode;

    ErrorCode(int code, String message, HttpStatus statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}

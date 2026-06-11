package com.dangdepzaivaio.StudentManagement.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Loi he thong chua phan loai", HttpStatus.INTERNAL_SERVER_ERROR),
    VALIDATION_ERROR(1001, "Du lieu khong hop le", HttpStatus.BAD_REQUEST),
    USER_EXISTED(1002, "Tai khoan da ton tai", HttpStatus.BAD_REQUEST),
    USER_NOT_FOUND(1003, "Khong tim thay nguoi dung", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1004, "Dang nhap that bai hoac khong co quyen", HttpStatus.UNAUTHORIZED),
    STUDENT_CODE_EXISTED(1005, "Ma sinh vien da ton tai", HttpStatus.BAD_REQUEST),
    STUDENT_NOT_FOUND(1006, "Khong tim thay sinh vien", HttpStatus.NOT_FOUND),
    CLASS_NOT_FOUND(1007, "Khong tim thay lop hanh chinh", HttpStatus.NOT_FOUND),
    ROLE_NOT_FOUND(1008, "Khong tim thay vai tro", HttpStatus.NOT_FOUND),
    DEPARTMENT_NOT_FOUND(1009, "Khong tim thay khoa chuyen mon", HttpStatus.NOT_FOUND),
    TEACHER_CODE_EXISTED(1010, "Ma giang vien da ton tai", HttpStatus.BAD_REQUEST),
    TEACHER_NOT_FOUND(1011, "Khong tim thay giang vien", HttpStatus.NOT_FOUND),
    GRADE_EXISTED(1012, "Sinh vien da co ban ghi dang ky/diem cho lop hoc phan nay", HttpStatus.BAD_REQUEST),
    GRADE_NOT_FOUND(1013, "Khong tim thay ban ghi diem", HttpStatus.NOT_FOUND),
    COURSE_CLASS_NOT_FOUND(1014, "Khong tim thay lop hoc phan", HttpStatus.NOT_FOUND),
    COURSE_CLASS_EXISTED(1015, "Lop hoc phan da ton tai", HttpStatus.BAD_REQUEST),
    SUBJECT_NOT_FOUND(1016, "Khong tim thay mon hoc", HttpStatus.NOT_FOUND),
    COURSE_CLASS_HAS_GRADES(1017, "Khong the xoa vi lop hoc phan da co sinh vien dang ky hoac co diem", HttpStatus.BAD_REQUEST),
    CLASS_EXISTED(1018, "Lop hanh chinh da ton tai", HttpStatus.BAD_REQUEST),
    CLASS_HAS_STUDENTS(1019, "Khong the xoa vi lop hanh chinh dang co sinh vien", HttpStatus.BAD_REQUEST),
    DEPARTMENT_EXISTED(1020, "Khoa chuyen mon da ton tai", HttpStatus.BAD_REQUEST),
    DEPARTMENT_HAS_CLASSES(1021, "Khong the xoa vi khoa dang quan ly lop hanh chinh", HttpStatus.BAD_REQUEST),
    SUBJECT_EXISTED(1022, "Mon hoc da ton tai", HttpStatus.BAD_REQUEST),
    SUBJECT_HAS_CLASSES(1023, "Khong the xoa vi mon hoc dang co lop hoc phan", HttpStatus.BAD_REQUEST),
    ACCOUNT_LOCKED(1024, "Tai khoan dang bi khoa", HttpStatus.FORBIDDEN),
    REGISTRATION_PERIOD_CLOSED(1025, "Cong dang ky tin chi dang dong hoac da het han", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_CLOSED(1026, "Lop hoc phan chua duoc mo cho dang ky", HttpStatus.BAD_REQUEST),
    COURSE_CLASS_FULL(1027, "Lop hoc phan da dat si so toi da", HttpStatus.BAD_REQUEST),
    GRADE_ALREADY_ENTERED(1028, "Khong the huy dang ky vi giang vien da nhap diem", HttpStatus.BAD_REQUEST),
    TEACHER_NOT_ASSIGNED_TO_CLASS(1029, "Giang vien chi duoc thao tac tren lop hoc phan duoc phan cong", HttpStatus.FORBIDDEN),
    STUDENT_NOT_ENROLLED(1030, "Sinh vien chua dang ky lop hoc phan nay", HttpStatus.BAD_REQUEST);

    private final int code;
    private final String message;
    private final HttpStatus statusCode;

    ErrorCode(int code, String message, HttpStatus statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}

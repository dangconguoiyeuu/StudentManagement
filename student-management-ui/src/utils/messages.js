const ERROR_MESSAGES = {
    9999: 'Lỗi hệ thống chưa được phân loại.',
    1001: 'Dữ liệu không hợp lệ.',
    1002: 'Tên đăng nhập đã tồn tại.',
    1003: 'Không tìm thấy người dùng.',
    1004: 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.',
    1005: 'Mã sinh viên đã tồn tại.',
    1006: 'Không tìm thấy sinh viên.',
    1007: 'Không tìm thấy lớp hành chính.',
    1008: 'Không tìm thấy vai trò.',
    1009: 'Không tìm thấy khoa chuyên môn.',
    1010: 'Mã giảng viên đã tồn tại.',
    1011: 'Không tìm thấy giảng viên.',
    1012: 'Sinh viên đã có bản ghi đăng ký hoặc điểm cho lớp học phần này.',
    1013: 'Không tìm thấy bản ghi điểm.',
    1014: 'Không tìm thấy lớp học phần.',
    1015: 'Lớp học phần đã tồn tại.',
    1016: 'Không tìm thấy môn học.',
    1017: 'Không thể xóa vì lớp học phần đã có sinh viên đăng ký hoặc đã có điểm.',
    1018: 'Lớp hành chính đã tồn tại.',
    1019: 'Không thể xóa vì lớp hành chính đang có sinh viên.',
    1020: 'Khoa chuyên môn đã tồn tại.',
    1021: 'Không thể xóa vì khoa đang quản lý lớp hành chính.',
    1022: 'Môn học đã tồn tại.',
    1023: 'Không thể xóa vì môn học đang có lớp học phần.',
    1024: 'Tài khoản đang bị khóa. Vui lòng liên hệ quản trị viên.',
    1025: 'Cổng đăng ký tín chỉ đang đóng hoặc đã hết hạn.',
    1026: 'Lớp học phần chưa được mở cho đăng ký.',
    1027: 'Lớp học phần đã đạt sĩ số tối đa.',
    1028: 'Không thể hủy đăng ký vì giảng viên đã nhập điểm.',
    1029: 'Giảng viên chỉ được thao tác trên lớp học phần được phân công.',
    1030: 'Sinh viên chưa đăng ký lớp học phần này.',
    1031: 'Email đăng nhập không tồn tại trong hệ thống.',
    1032: 'Mật khẩu không chính xác.',
    1033: 'Bạn không có quyền thực hiện thao tác này.',
    1034: 'Không tìm thấy khung giờ đăng ký tín chỉ.',
    1035: 'Tài khoản đã đổi mật khẩu, không thể đổi lại qua luồng lần đầu.',
    1036: 'Email đã được sử dụng bởi tài khoản khác.',
    1037: 'File Excel trống hoặc chưa được chọn.',
    1038: 'File không đúng định dạng. Chỉ chấp nhận .xlsx hoặc .xls.',
    1039: 'File Excel không có dữ liệu để xử lý.',
};

export function getErrorMessage(err, fallback = 'Đã xảy ra lỗi. Vui lòng thử lại.') {
    if (typeof err === 'string') return err;
    if (err?.code && ERROR_MESSAGES[err.code]) return ERROR_MESSAGES[err.code];
    if (err?.message) return err.message;
    return err?.response?.data?.message || fallback;
}

import axios from 'axios';
import { API_BASE } from './config';

const axiosClient = axios.create({
    baseURL: API_BASE,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        // 🔥 ĐIỀU CHỈNH 1: Đảm bảo API /auth/ping và /auth/logout vẫn được gửi kèm Token.
        // Chỉ chặn gửi Token đối với 2 đường dẫn đăng nhập và đổi mật khẩu.
        const isLoginOrChangePass = config.url === '/auth/login' || config.url === '/auth/change-password';

        if (!isLoginOrChangePass) {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

function buildApiError(error) {
    if (!error.response) {
        const isTimeout = error.code === 'ECONNABORTED';
        return {
            code: 0,
            status: 0,
            message: isTimeout
                ? 'Hệ thống đang khởi động lại (có thể mất khoảng 30 - 50 giây cho lần truy cập đầu tiên). Vui lòng đợi một lát!'
                : 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra đường truyền hoặc thử lại sau.',
        };
    }

    const { status, data } = error.response;
    return {
        code: data?.code ?? status,
        status,
        message: data?.message || getHttpFallbackMessage(status),
    };
}

function getHttpFallbackMessage(status) {
    switch (status) {
        case 400: return 'Dữ liệu gửi lên không hợp lệ.';
        case 401: return 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.';
        case 403: return 'Bạn không có quyền thực hiện thao tác này.';
        case 404: return 'Không tìm thấy tài nguyên yêu cầu.';
        case 500: return 'Lỗi máy chủ nội bộ. Vui lòng thử lại sau.';
        default: return 'Lỗi kết nối hệ thống!';
    }
}

// CHỈ GIỮ LẠI ĐÚNG 1 ĐOẠN RESPONSE INTERCEPTOR NÀY Ở CUỐI FILE
axiosClient.interceptors.response.use(
    (response) => {
        if (response.data && response.data.code === 1000) {
            // An toàn hơn: nếu API không có result thì trả về data gốc
            return response.data.result !== undefined ? response.data.result : response.data;
        }
        return response.data;
    },
    (error) => {
        const errCode = error.response?.data?.code;
        const status = error.response?.status;

        // 🔥 ĐIỀU CHỈNH 2: Xử lý triệt để các mã lỗi liên quan đến phiên đăng nhập
        if (errCode === 1042 || errCode === 1043) {
            // Bắt sự kiện Máy A bị đá (1042) hoặc Máy B cố tình đăng nhập (1043)
            window.dispatchEvent(
                new CustomEvent('force-logout', { detail: error.response?.data?.message })
            );
        } else if (status === 401 || errCode === 1004) {
            // Xóa sạch bộ nhớ và đưa về trang Login ngay khi Token hết hạn / hỏng
            // Chặn đứng hoàn toàn lỗi Spam Ping 401 ở dưới background
            localStorage.clear();
            window.location.href = '/login';
        }

        return Promise.reject(buildApiError(error));
    }
);

export default axiosClient;
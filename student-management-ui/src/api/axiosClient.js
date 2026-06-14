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
        const isAuthRequest = config.url?.startsWith('/auth/');
        if (!isAuthRequest) {
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
                ? 'Máy chủ không phản hồi. Hãy chắc backend đang chạy tại http://localhost:8081 rồi thử lại.'
                : 'Không thể kết nối máy chủ. Vui lòng kiểm tra backend (port 8081) hoặc thử lại sau.',
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
        case 400:
            return 'Dữ liệu gửi lên không hợp lệ.';
        case 401:
            return 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.';
        case 403:
            return 'Bạn không có quyền thực hiện thao tác này.';
        case 404:
            return 'Không tìm thấy tài nguyên yêu cầu.';
        case 500:
            return 'Lỗi máy chủ nội bộ. Vui lòng thử lại sau.';
        default:
            return 'Lỗi kết nối hệ thống!';
    }
}

axiosClient.interceptors.response.use(
    (response) => {
        if (response.data && response.data.code === 1000) {
            return response.data.result;
        }
        return response.data;
    },
    (error) => Promise.reject(buildApiError(error))
);

export default axiosClient;

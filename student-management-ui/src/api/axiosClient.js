import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://student-backend-production.up.railway.app',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Tự động đính kèm JWT Token vào Header trước khi gửi request
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Tự động giải nén cấu trúc ApiResponse bọc ngoài của Backend
axiosClient.interceptors.response.use(
    (response) => {
        // Nếu Backend trả về code thành công 1000, lấy thẳng dữ liệu result ra ngoài
        if (response.data && response.data.code === 1000) {
            return response.data.result;
        }
        return response.data;
    },
    (error) => {
        // Bắt lỗi nghiệp vụ trả về từ GlobalExceptionHandler của Backend
        const errorMessage = error.response?.data?.message || 'Lỗi kết nối hệ thống!';
        return Promise.reject(errorMessage);
    }
);

export default axiosClient;
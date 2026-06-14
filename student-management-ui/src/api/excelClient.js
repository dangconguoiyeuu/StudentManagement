import { API_BASE } from './config';
import { getErrorMessage } from '../utils/messages';

function authHeaders(contentType) {
    const headers = {};
    const token = localStorage.getItem('token');
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    if (contentType) {
        headers['Content-Type'] = contentType;
    }
    return headers;
}

async function parseError(response) {
    try {
        const data = await response.json();
        return getErrorMessage({ code: data?.code, message: data?.message }, 'Lỗi kết nối hệ thống!');
    } catch {
        return 'Lỗi kết nối hệ thống!';
    }
}

export async function downloadExcel(path, filename) {
    const response = await fetch(`${API_BASE}${path}`, {
        headers: authHeaders(),
    });

    if (!response.ok) {
        throw new Error(await parseError(response));
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

export async function uploadExcel(path, file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE}${path}`, {
        method: 'POST',
        headers: authHeaders(),
        body: formData,
    });

    const data = await response.json();
    if (!response.ok || data.code !== 1000) {
        throw new Error(getErrorMessage({ code: data?.code, message: data?.message }, 'Nhập Excel thất bại!'));
    }
    return data.result;
}

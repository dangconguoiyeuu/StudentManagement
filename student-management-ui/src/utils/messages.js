export function getErrorMessage(err, fallback = 'Đã xảy ra lỗi. Vui lòng thử lại.') {
    if (typeof err === 'string') return err;
    return err?.response?.data?.message || err?.message || fallback;
}

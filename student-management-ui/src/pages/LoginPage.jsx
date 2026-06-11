import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Các State quản lý trạng thái ẩn/hiển thị của từng ô mật khẩu độc lập
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isFirstLoginMode, setIsFirstLoginMode] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await axiosClient.post('/auth/login', { username, password });

            // ✅ FIX: Java serialize boolean field "isFirstLogin" thành "firstLogin" trong JSON
            if (data.firstLogin) {
                setIsFirstLoginMode(true);
                alert("Hệ thống phát hiện đây là lần đầu bạn đăng nhập. Bạn bắt buộc phải đổi mật khẩu để bảo mật tài khoản!");
            } else {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('roles', data.roles);
                localStorage.setItem('userId', data.userId);

                if (data.studentId) localStorage.setItem('studentId', data.studentId);
                if (data.teacherId) localStorage.setItem('teacherId', data.teacherId);

                window.location.href = '/';
            }
        } catch (err) {
            setError(err || 'Email hoặc mật khẩu không chính xác!');
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword.length < 6) {
            setError('Mật khẩu mới phải từ 6 ký tự trở lên!');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Mật khẩu xác nhận không trùng khớp!');
            return;
        }

        try {
            setLoading(true);
            await axiosClient.post('/auth/change-password', { username, newPassword });
            alert('Đổi mật khẩu thành công mượt mà! Vui lòng đăng nhập lại bằng mật khẩu mới của bạn.');
            setIsFirstLoginMode(false);
            setPassword('');
            setNewPassword('');
            setConfirmPassword('');
            // Reset trạng thái mắt về ẩn
            setShowPassword(false);
            setShowNewPassword(false);
            setShowConfirmPassword(false);
        } catch (err) {
            setError(err || 'Có lỗi phát sinh khi đổi mật khẩu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '100px auto', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--text-main)' }}>

            {/* GIAO DIỆN 1: FORM BẮT BUỘC ĐỔI MẬT KHẨU LẦN ĐẦU */}
            {isFirstLoginMode ? (
                <form onSubmit={handleChangePassword}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--color-warning)' }}>🔒 ĐỔI MẬT KHẨU LẦN ĐẦU</h2>
                    {error && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{error}</div>}

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Mật khẩu mới:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} style={eyeButtonStyle}>
                                {showNewPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Xác nhận mật khẩu mới:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={eyeButtonStyle}>
                                {showConfirmPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} style={buttonStyle}>
                        {loading ? 'Đang xử lý...' : 'Xác Nhận Thay Đổi'}
                    </button>
                </form>
            ) : (
                /* GIAO DIỆN 2: FORM ĐĂNG NHẬP MẶC ĐỊNH */
                <form onSubmit={handleLogin}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--text-cyan)' }}>ĐĂNG NHẬP HỆ THỐNG</h2>
                    {error && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{error}</div>}

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        {/* 🔥 SỬA: Đổi nhãn từ Tên đăng nhập thành Email */}
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Email đăng nhập (@open.edu.vn):</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={inputStyleForUsername} />
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Mật khẩu:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={inputStyle}
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeButtonStyle}>
                                {showPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} style={buttonStyle}>
                        {loading ? 'Đang xác thực...' : 'Đăng Nhập'}
                    </button>
                </form>
            )}
        </div>
    );
}

// Style dùng chung cho ô nhập Mật khẩu (Có chừa khoảng trống phải 40px cho nút mắt)
const inputStyle = {
    width: '100%',
    padding: 'var(--spacing-sm)',
    paddingRight: '40px', // Chống tràn đè chữ lên icon mắt
    borderRadius: '4px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface-hover)',
    color: 'var(--text-main)',
    boxSizing: 'border-box',
    outline: 'none'
};

// Style riêng cho Username không cần căn lề phải chừa khoảng trống nút mắt
const inputStyleForUsername = {
    width: '100%',
    padding: 'var(--spacing-sm)',
    borderRadius: '4px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface-hover)',
    color: 'var(--text-main)',
    boxSizing: 'border-box',
    outline: 'none'
};

// Định vị nút Icon Mắt tuyệt đối nằm đè gọn gàng bên phải ô Input
const eyeButtonStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    userSelect: 'none'
};

const buttonStyle = { width: '100%', padding: 'var(--spacing-sm)', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };

export default LoginPage;
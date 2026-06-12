import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isFirstLoginMode, setIsFirstLoginMode] = useState(false);
    const [tempAuthData, setTempAuthData] = useState(null);

    const [showDropdown, setShowDropdown] = useState(false);
    const [hoveredAcc, setHoveredAcc] = useState('');

    const [savedAccounts, setSavedAccounts] = useState(() => {
        try {
            const saved = localStorage.getItem('savedAccounts');
            return saved ? JSON.parse(saved) : [];
        } catch { return []; }
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await axiosClient.post('/auth/login', { username, password });

            if (data.firstLogin === true || data.isFirstLogin === true) {
                setIsFirstLoginMode(true);
                setTempAuthData(data);
                alert("Hệ thống phát hiện đây là lần đầu bạn đăng nhập. Bạn bắt buộc phải đổi mật khẩu để bảo mật tài khoản!");
            } else {
                processSuccessfulLogin(data);
            }
        } catch (err) {
            setError(err || 'Email hoặc mật khẩu không chính xác!');
        } finally {
            setLoading(false);
        }
    };

    // 🔥 HÀM ĐÃ SỬA LỖI LƯU DỮ LIỆU: Đọc/Ghi trực tiếp từ nguồn LocalStorage loại bỏ Stale Closure
    const processSuccessfulLogin = (data) => {
        const saved = localStorage.getItem('savedAccounts');
        let accounts = saved ? JSON.parse(saved) : [];

        // Chuẩn hóa chuỗi Email lấy trực tiếp từ ô Input vừa nhập thành công
        const emailToSave = username.trim().toLowerCase();

        if (emailToSave && !accounts.includes(emailToSave)) {
            accounts.push(emailToSave);
            localStorage.setItem('savedAccounts', JSON.stringify(accounts));
            setSavedAccounts(accounts);
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('roles', data.roles);
        localStorage.setItem('userId', data.userId);

        if (data.studentId) localStorage.setItem('studentId', data.studentId);
        if (data.teacherId) localStorage.setItem('teacherId', data.teacherId);

        window.location.href = '/';
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
            alert('Đổi mật khẩu thành công mượt mà! Hệ thống sẽ tự động đăng nhập cho bạn.');

            if (tempAuthData) {
                processSuccessfulLogin(tempAuthData);
            }
        } catch (err) {
            setError(err || 'Có lỗi phát sinh khi đổi mật khẩu. Vui lòng thử lại!');
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveSavedAccount = (accToRemove) => {
        const newAccounts = savedAccounts.filter(acc => acc !== accToRemove);
        setSavedAccounts(newAccounts);
        localStorage.setItem('savedAccounts', JSON.stringify(newAccounts));
        if (username === accToRemove) setUsername('');
    };

    const filteredAccounts = savedAccounts.filter(acc => acc.toLowerCase().includes(username.toLowerCase()));

    return (
        <div style={{ maxWidth: '400px', margin: '100px auto', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--text-main)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>

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
                        {loading ? 'Đang xử lý...' : 'Xác Nhận & Đăng Nhập'}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleLogin}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--text-cyan)' }}>ĐĂNG NHẬP HỆ THỐNG</h2>
                    {error && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{error}</div>}

                    {/* CLICK TEXT TỰ ĐỘNG SỔ DROPDOWN */}
                    <div style={{ marginBottom: 'var(--spacing-lg)', position: 'relative' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Email đăng nhập (@open.edu.vn):</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => setShowDropdown(true)}
                            onClick={() => setShowDropdown(true)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                            autoComplete="off"
                            required
                            style={inputStyleForUsername}
                        />

                        {showDropdown && (
                            <div style={dropdownPanelStyle}>
                                {filteredAccounts.length > 0 ? (
                                    filteredAccounts.map(acc => (
                                        <div
                                            key={acc}
                                            onClick={() => { setUsername(acc); setShowDropdown(false); }}
                                            onMouseEnter={() => setHoveredAcc(acc)}
                                            onMouseLeave={() => setHoveredAcc('')}
                                            style={{
                                                ...dropdownItemStyle,
                                                backgroundColor: hoveredAcc === acc ? 'var(--color-surface-hover)' : 'transparent',
                                            }}
                                        >
                                            <span style={{ flex: 1, color: hoveredAcc === acc ? 'var(--text-cyan)' : 'var(--text-main)' }}>👤 {acc}</span>
                                            <span
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveSavedAccount(acc);
                                                }}
                                                style={{ color: 'var(--color-danger)', fontWeight: 'bold', padding: '0 8px', fontSize: '15px' }}
                                                title="Xóa tài khoản này khỏi bộ nhớ"
                                            >
                                                &times;
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ padding: '12px', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
                                        {savedAccounts.length === 0 ? 'Chưa có lịch sử đăng nhập nào.' : 'Không tìm thấy tài khoản phù hợp.'}
                                    </div>
                                )}
                            </div>
                        )}
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

const dropdownPanelStyle = { position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', zIndex: 99, maxHeight: '160px', overflowY: 'auto', boxShadow: '0 8px 16px rgba(0,0,0,0.4)', marginTop: '4px' };
const dropdownItemStyle = { padding: '10px 12px', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--color-border)', transition: 'all 0.1s ease' };
const inputStyle = { width: '100%', padding: '10px 12px', paddingRight: '40px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
const inputStyleForUsername = { width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
const eyeButtonStyle = { position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', padding: 0, userSelect: 'none' };
const buttonStyle = { width: '100%', padding: '12px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' };

export default LoginPage;
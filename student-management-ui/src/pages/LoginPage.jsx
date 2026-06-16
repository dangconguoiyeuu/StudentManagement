import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

function LoginPage() {
    const { notify } = useNotification();
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
            const data = await axiosClient.post('/auth/login', {
                username: username.trim().toLowerCase(),
                password,
            });

            if (!data) {
                setError('Lỗi phản hồi từ máy chủ (Dữ liệu rỗng). Vui lòng thử lại!');
                setLoading(false);
                return;
            }

            if (data.firstLogin === true || data.isFirstLogin === true) {
                setIsFirstLoginMode(true);
                setTempAuthData(data);
                notify.warning('Đây là lần đăng nhập đầu tiên. Bạn cần đổi mật khẩu để bảo mật tài khoản.');
            } else {
                processSuccessfulLogin(data);
            }
        } catch (err) {
            // 🔥 TH2: Bắt khoảnh khắc Máy B cố tình đăng nhập đè -> Chặn ngay lập tức
            if (err.code === 1043) {
                alert(err.message || 'Tài khoản đang đăng nhập ở thiết bị khác! Cả 2 thiết bị sẽ bị khóa phiên. Vui lòng đăng nhập lại.');
                setLoading(false);
                return;
            }
            setError(getErrorMessage(err, 'Không thể đăng nhập. Vui lòng thử lại.'));
        } finally {
            setLoading(false);
        }
    };

    const processSuccessfulLogin = (data) => {
        const saved = localStorage.getItem('savedAccounts');
        let accounts = saved ? JSON.parse(saved) : [];
        const emailToSave = username.trim().toLowerCase();

        if (emailToSave && !accounts.includes(emailToSave)) {
            accounts.push(emailToSave);
            localStorage.setItem('savedAccounts', JSON.stringify(accounts));
            setSavedAccounts(accounts);
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('roles', Array.isArray(data.roles) ? data.roles.join(',') : (data.roles || ''));
        localStorage.setItem('userId', data.userId);
        if (data.studentId) localStorage.setItem('studentId', data.studentId);
        if (data.teacherId) localStorage.setItem('teacherId', data.teacherId);

        localStorage.setItem('login_session_id', Date.now().toString());

        notify.success('Đăng nhập thành công! Chào mừng bạn trở lại.');
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
            await axiosClient.post('/auth/change-password', {
                username: username.trim().toLowerCase(),
                newPassword,
            });
            notify.success('Đổi mật khẩu thành công! Hệ thống sẽ tự động đăng nhập.');
            if (tempAuthData) processSuccessfulLogin(tempAuthData);
        } catch (err) {
            setError(getErrorMessage(err, 'Có lỗi phát sinh khi đổi mật khẩu. Vui lòng thử lại!'));
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
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__header">
                    <div className="login-card__logo">🎓</div>
                    <h2 className="login-card__title">
                        {isFirstLoginMode ? 'Đổi mật khẩu lần đầu' : 'Đăng nhập hệ thống'}
                    </h2>
                    <p className="login-card__subtitle">
                        {isFirstLoginMode
                            ? 'Thiết lập mật khẩu mới để bảo vệ tài khoản'
                            : 'Student Management System — Open University'}
                    </p>
                </div>

                {error && <div className="inline-alert inline-alert--error">{error}</div>}

                {isFirstLoginMode ? (
                    <form onSubmit={handleChangePassword}>
                        <div className="form-group">
                            <label className="form-label">Mật khẩu mới</label>
                            <div className="input-with-icon">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    className="form-control"
                                    placeholder="Nhập mật khẩu mới (tối thiểu 6 ký tự)"
                                />
                                <button type="button" className="input-toggle-btn" onClick={() => setShowNewPassword(!showNewPassword)}>
                                    {showNewPassword ? '👁️' : '🙈'}
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Xác nhận mật khẩu mới</label>
                            <div className="input-with-icon">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="form-control"
                                    placeholder="Nhập lại mật khẩu mới"
                                />
                                <button type="button" className="input-toggle-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? '👁️' : '🙈'}
                                </button>
                            </div>
                        </div>
                        <button type="submit" disabled={loading} className="btn btn--primary btn--block btn--lg">
                            {loading ? 'Đang xử lý...' : 'Xác nhận & Đăng nhập'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleLogin}>
                        <div className="form-group" style={{ position: 'relative' }}>
                            <label className="form-label">Email đăng nhập</label>
                            <input
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onFocus={() => setShowDropdown(true)}
                                onClick={() => setShowDropdown(true)}
                                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                                autoComplete="off"
                                required
                                className="form-control"
                                placeholder="msv@open.edu.vn"
                            />
                            {showDropdown && (
                                <div className="dropdown-panel">
                                    {filteredAccounts.length > 0 ? (
                                        filteredAccounts.map(acc => (
                                            <div
                                                key={acc}
                                                className="dropdown-item"
                                                onClick={() => { setUsername(acc); setShowDropdown(false); }}
                                                onMouseEnter={() => setHoveredAcc(acc)}
                                                onMouseLeave={() => setHoveredAcc('')}
                                                style={{ background: hoveredAcc === acc ? 'var(--color-surface-hover)' : undefined }}
                                            >
                                                <span style={{ flex: 1 }}>👤 {acc}</span>
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); handleRemoveSavedAccount(acc); }}
                                                    style={{ background: 'none', border: 'none', color: 'var(--color-danger)', cursor: 'pointer', fontSize: 16 }}
                                                    title="Xóa khỏi lịch sử"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div style={{ padding: 12, fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>
                                            {savedAccounts.length === 0 ? 'Chưa có lịch sử đăng nhập.' : 'Không tìm thấy tài khoản.'}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Mật khẩu</label>
                            <div className="input-with-icon">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="form-control"
                                    placeholder="Nhập mật khẩu"
                                />
                                <button type="button" className="input-toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? '👁️' : '🙈'}
                                </button>
                            </div>
                        </div>
                        <button type="submit" disabled={loading} className="btn btn--primary btn--block btn--lg">
                            {loading ? 'Đang xác thực...' : 'Đăng nhập'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import GradePage from './pages/GradePage';
import RegistrationPage from './pages/RegistrationPage'; // 🔥 THÊM MỚI: Import trang đăng ký tín chỉ

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [role, setRole] = useState(localStorage.getItem('roles') || '');
    const [activeTab, setActiveTab] = useState('dashboard');

    // 🔥 LOGIC KIỂM TRA PHIÊN ĐĂNG NHẬP THỜI GIAN THỰC (15 PHÚT) - GIỮ NGUYÊN
    useEffect(() => {
        const checkSession = () => {
            const lastExitTime = localStorage.getItem('lastExitTime');
            const currentToken = localStorage.getItem('token');

            if (currentToken && lastExitTime) {
                const timeAway = Date.now() - parseInt(lastExitTime, 10);
                const FIFTEEN_MINUTES = 15 * 60 * 1000;

                if (timeAway > FIFTEEN_MINUTES) {
                    localStorage.clear();
                    setToken(null);
                    setUsername(null);
                    setRole('');
                    alert("Phiên làm việc của bạn đã hết hạn do không hoạt động trong 15 phút. Vui lòng đăng nhập lại!");
                } else {
                    localStorage.removeItem('lastExitTime');
                }
            }
        };

        checkSession();

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                localStorage.setItem('lastExitTime', Date.now().toString());
            } else if (document.visibilityState === 'visible') {
                checkSession();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        const handleBeforeUnload = () => {
            localStorage.setItem('lastExitTime', Date.now().toString());
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setToken(null);
        setUsername(null);
        setRole('');
    };

    if (!token) {
        return <LoginPage />;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)' }}>

            {/* HEADER - GIỮ NGUYÊN */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing-sm) var(--spacing-xl)', backgroundColor: 'var(--color-surface)', color: 'var(--text-main)', borderBottom: '2px solid var(--text-cyan)' }}>
                <h3>CMS - STUDENT MANAGEMENT</h3>
                <div>
                    <span style={{ marginRight: 'var(--spacing-xl)', color: 'var(--text-muted)' }}>Xin chào: <b>{username}</b> ({role})</span>
                    <button onClick={handleLogout} style={{ padding: '6px 12px', backgroundColor: 'var(--color-danger)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Đăng xuất</button>
                </div>
            </div>

            {/* BODY */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                {/* SIDEBAR */}
                <div style={{ width: '240px', backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-xl) var(--spacing-sm)', borderRight: '1px solid var(--color-border)' }}>
                    <button onClick={() => setActiveTab('dashboard')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'dashboard' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>📊 Tổng Quan System</button>

                    {/* MENU QUẢN LÝ SINH VIÊN */}
                    {(role.includes('ADMIN') || role.includes('TEACHER')) && (
                        <button onClick={() => setActiveTab('students')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'students' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>👥 Quản Lý Sinh Viên</button>
                    )}

                    {/* MENU QUẢN LÝ GIẢNG VIÊN */}
                    {role.includes('ADMIN') && (
                        <button onClick={() => setActiveTab('teachers')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'teachers' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>💼 Quản Lý Giảng Viên</button>
                    )}

                    <button onClick={() => setActiveTab('grades')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'grades' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>🎯 Quản Lý Điểm Số</button>

                    {/* 🔥 THÊM MỚI: Menu Đăng ký tín chỉ dành cho tất cả mọi người hiển thị đồng bộ style */}
                    <button onClick={() => setActiveTab('registration')} style={{ width: '100%', padding: 'var(--spacing-md)', textAlign: 'left', backgroundColor: activeTab === 'registration' ? 'var(--color-primary)' : 'transparent', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: 'var(--spacing-sm)', fontWeight: 'bold' }}>⏰ Đăng Ký Tín Chỉ</button>
                </div>

                {/* CONTENT AREA CO-GIÃN */}
                <div style={{ flex: 1, overflowY: 'auto', backgroundColor: 'var(--color-bg)', padding: 'var(--spacing-xl)' }}>
                    {activeTab === 'dashboard' && (
                        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                            <h2>HỆ THỐNG QUẢN TRỊ ĐÀO TẠO TÍN CHỈ</h2>
                            <p>Chọn phân hệ bên thanh điều hướng để bắt đầu thực hiện kiểm tra dữ liệu.</p>
                        </div>
                    )}
                    {activeTab === 'students' && <StudentPage />}
                    {activeTab === 'teachers' && <TeacherPage />}
                    {activeTab === 'grades' && <GradePage />}

                    {/* 🔥 THÊM MỚI: Vùng render trang Đăng ký tín chỉ khi click chọn tab */}
                    {activeTab === 'registration' && <RegistrationPage />}
                </div>

            </div>
        </div>
    );
}

export default App;
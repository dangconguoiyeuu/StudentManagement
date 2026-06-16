import React, { useState, useEffect } from 'react';
import axiosClient from './api/axiosClient'; // Đảm bảo import axiosClient để gọi API Ping
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import GradePage from './pages/GradePage';
import RegistrationPage from './pages/RegistrationPage';
import DepartmentPage from './pages/DepartmentPage';
import SubjectPage from './pages/SubjectPage';
import CourseClassPage from './pages/CourseClassPage';
import AdministrativeClassPage from './pages/AdministrativeClassPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import { useNotification } from './context/NotificationContext';

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Tổng quan', icon: '📊', roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
    { id: 'students', label: 'Quản lý sinh viên', icon: '👥', roles: ['ADMIN'] },
    { id: 'teachers', label: 'Quản lý giảng viên', icon: '💼', roles: ['ADMIN'] },
    { id: 'departments', label: 'Quản lý khoa', icon: '🏛️', roles: ['ADMIN'] },
    { id: 'subjects', label: 'Quản lý môn học', icon: '📘', roles: ['ADMIN'] },
    { id: 'course-classes', label: 'Lớp học phần', icon: '📅', roles: ['ADMIN'] },
    { id: 'admin-classes', label: 'Lớp hành chính', icon: '🏫', roles: ['ADMIN'] },
    { id: 'registration', label: 'Đăng ký tín chỉ', icon: '📝', roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
    { id: 'schedule', label: 'Thời khóa biểu', icon: '🗓️', roles: ['TEACHER', 'STUDENT'] },
    { id: 'grades', label: 'Quản lý điểm số', icon: '💯', roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
];

function AppContent() {
    const { notify, confirm } = useNotification();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [role, setRole] = useState(localStorage.getItem('roles') || '');
    const [activeTab, setActiveTab] = useState('dashboard');

    const executeLogout = async (callApi = true) => {
        if (callApi && localStorage.getItem('token')) {
            try { await axiosClient.post('/auth/logout'); } catch(e){}
        }
        localStorage.clear();
        setToken(null);
        setUsername(null);
        setRole('');
        window.location.href = '/login';
    };

    useEffect(() => {
        const checkSession = () => {
            const lastExitTime = localStorage.getItem('lastExitTime');
            const currentToken = localStorage.getItem('token');

            if (currentToken && lastExitTime) {
                const timeAway = Date.now() - parseInt(lastExitTime, 10);
                const FIFTEEN_MINUTES = 15 * 60 * 1000;

                if (timeAway > FIFTEEN_MINUTES) {
                    executeLogout(true);
                    notify.warning('Phiên làm việc đã hết hạn do không hoạt động trong 15 phút. Vui lòng đăng nhập lại.');
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

        const handleBeforeUnload = () => localStorage.setItem('lastExitTime', Date.now().toString());

        // 🔥 PING NGẦM KIỂM TRA SESSION (MỖI 5 GIÂY)
        const pinger = setInterval(() => {
            if (localStorage.getItem('token')) {
                axiosClient.get('/auth/ping').catch(() => {});
            }
        }, 5000);

        // 🔥 XỬ LÝ 2 TAB CÙNG 1 MÁY
        const handleStorageChange = (e) => {
            if (e.key === 'login_session_id') {
                alert('Trình duyệt vừa đăng nhập một tài khoản khác. Trang sẽ tự động tải lại để đồng bộ.');
                window.location.reload();
            }
        };

        // 🔥 XỬ LÝ KHI MÁY BỊ KICK KHỎI HỆ THỐNG
        const handleForceLogout = (e) => {
            alert(e.detail || 'Tài khoản đang được đăng nhập ở nơi khác. Hệ thống đã đăng xuất. Nhấn OK để thoát.');
            executeLogout(false);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('force-logout', handleForceLogout);

        return () => {
            clearInterval(pinger);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('force-logout', handleForceLogout);
        };
    }, [notify]);

    const handleLogout = async () => {
        const ok = await confirm({
            title: 'Đăng xuất',
            message: 'Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?',
            confirmText: 'Đăng xuất',
            cancelText: 'Ở lại',
            variant: 'danger',
        });
        if (ok) {
            executeLogout(true);
            notify.info('Đã đăng xuất thành công.');
        }
    };

    if (!token) {
        return <LoginPage />;
    }

    const visibleNav = NAV_ITEMS.filter(item =>
        item.roles.some(r => role.includes(r))
    );

    const roleLabel = role.includes('ADMIN') ? 'Quản trị viên'
        : role.includes('TEACHER') ? 'Giảng viên'
            : role.includes('STUDENT') ? 'Sinh viên' : role;

    return (
        <div className="app-shell">
            <header className="app-header">
                <div className="app-header__brand">
                    <div className="app-header__logo">S</div>
                    <div>
                        <h1 className="app-header__title">Student Management</h1>
                        <div className="app-header__subtitle">Hệ thống quản lý sinh viên</div>
                    </div>
                </div>
                <div className="app-header__user">
                    <span className="app-header__username">
                        Xin chào, <b>{username}</b>
                    </span>
                    <span className="app-header__role">{roleLabel}</span>
                    <button type="button" className="btn btn--danger btn--sm" onClick={handleLogout}>
                        Đăng xuất
                    </button>
                </div>
            </header>

            <div className="app-body">
                <nav className="app-sidebar" aria-label="Menu chính">
                    <div className="app-sidebar__section">Menu</div>
                    {visibleNav.map(item => {
                        const label = item.labelFn ? item.labelFn(role) : item.label;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveTab(item.id)}
                                className={`sidebar-nav-btn${activeTab === item.id ? ' sidebar-nav-btn--active' : ''}`}
                            >
                                <span>{item.icon}</span>
                                <span>{label}</span>
                            </button>
                        );
                    })}
                </nav>

                <main className="app-main">
                    {activeTab === 'dashboard' && <DashboardPage />}
                    {activeTab === 'students' && <StudentPage />}
                    {activeTab === 'teachers' && <TeacherPage />}
                    {activeTab === 'grades' && <GradePage />}
                    {activeTab === 'registration' && <RegistrationPage />}
                    {activeTab === 'schedule' && <SchedulePage />}
                    {activeTab === 'departments' && <DepartmentPage />}
                    {activeTab === 'subjects' && <SubjectPage />}
                    {activeTab === 'course-classes' && <CourseClassPage />}
                    {activeTab === 'admin-classes' && <AdministrativeClassPage />}
                </main>
            </div>
        </div>
    );
}

export default function App() {
    return <AppContent />;
}
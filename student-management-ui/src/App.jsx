import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import GradePage from './pages/GradePage';
import RegistrationPage from './pages/RegistrationPage';
import TrainingPage from './pages/TrainingPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import { useNotification } from './context/NotificationContext';

const NAV_ITEMS = [
    { id: 'dashboard', icon: '📊', label: 'Tổng quan', roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
    { id: 'students', icon: '👥', label: 'Quản lý sinh viên', roles: ['ADMIN', 'TEACHER'] },
    { id: 'teachers', icon: '💼', label: 'Quản lý giảng viên', roles: ['ADMIN'] },
    { id: 'grades', icon: '🎯', label: 'Quản lý điểm số', roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
    { id: 'registration', icon: '⏰', label: 'Đăng ký tín chỉ', roles: ['ADMIN', 'STUDENT', 'TEACHER'] },
    { id: 'schedule', icon: '📅', label: 'Lịch học / dạy', roles: ['TEACHER', 'STUDENT'], labelFn: (r) => r.includes('TEACHER') ? 'Lịch dạy' : 'Lịch học' },
    { id: 'training', icon: '🏛️', label: 'Quản lý đào tạo', roles: ['ADMIN'] },
];

function AppContent() {
    const { notify, confirm } = useNotification();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [role, setRole] = useState(localStorage.getItem('roles') || '');
    const [activeTab, setActiveTab] = useState('dashboard');

    const executeLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('roles');
        localStorage.removeItem('userId');
        localStorage.removeItem('studentId');
        localStorage.removeItem('teacherId');
        localStorage.removeItem('lastExitTime');
        setToken(null);
        setUsername(null);
        setRole('');
    };

    useEffect(() => {
        const checkSession = () => {
            const lastExitTime = localStorage.getItem('lastExitTime');
            const currentToken = localStorage.getItem('token');

            if (currentToken && lastExitTime) {
                const timeAway = Date.now() - parseInt(lastExitTime, 10);
                const FIFTEEN_MINUTES = 15 * 60 * 1000;

                if (timeAway > FIFTEEN_MINUTES) {
                    executeLogout();
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

        document.addEventListener('visibilitychange', handleVisibilityChange);
        const handleBeforeUnload = () => localStorage.setItem('lastExitTime', Date.now().toString());
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('beforeunload', handleBeforeUnload);
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
            executeLogout();
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
                    {activeTab === 'training' && <TrainingPage />}
                </main>
            </div>
        </div>
    );
}

export default function App() {
    return <AppContent />;
}

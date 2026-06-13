import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function DashboardPage() {
    const username = localStorage.getItem('username') || 'Người dùng';
    const role = localStorage.getItem('roles') || '';
    const studentId = localStorage.getItem('studentId') || '';
    const teacherId = localStorage.getItem('teacherId') || '';

    // --- STATES SỐ LIỆU NÂNG CAO CHO ADMIN ---
    const [adminMetrics, setAdminMetrics] = useState({
        totalStudents: 0, activeStudents: 0, lockedStudents: 0,
        totalTeachers: 0, activeTeachers: 0, lockedTeachers: 0,
        totalSubjects: 0,
        totalClasses: 0, openClasses: 0
    });
    const [allPeriods, setAllPeriods] = useState([]); // Lưu toàn bộ lịch sử đợt mở cổng

    // --- STATES CHO TEACHER & STUDENT (GIỮ NGUYÊN ĐỒNG BỘ) ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [myClasses, setMyClasses] = useState([]);
    const [studentInfo, setStudentInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                setLoading(true);

                // 🛠️ LUỒNG BIẾN ĐỔI CHUYÊN SÂU 1: PHÂN HỆ ADMIN
                if (role.includes('ADMIN')) {
                    const [resStudents, resTeachers, resSubjects, resClasses, resPeriods] = await Promise.all([
                        axiosClient.get('/students?includeInactive=true'),
                        axiosClient.get('/teachers'),
                        axiosClient.get('/subjects'),
                        axiosClient.get('/course-classes'),
                        axiosClient.get('/registration/periods').catch(() => [])
                    ]);

                    // Thuật toán bóc tách trạng thái tài khoản từ mảng dữ liệu thật
                    const sActive = resStudents ? resStudents.filter(s => s.active).length : 0;
                    const sLocked = resStudents ? resStudents.filter(s => !s.active).length : 0;
                    const tActive = resTeachers ? resTeachers.filter(t => t.active).length : 0;
                    const tLocked = resTeachers ? resTeachers.filter(t => !t.active).length : 0;
                    const cOpen = resClasses ? resClasses.filter(c => c.openForRegistration).length : 0;

                    setAdminMetrics({
                        totalStudents: resStudents?.length || 0, activeStudents: sActive, lockedStudents: sLocked,
                        totalTeachers: resTeachers?.length || 0, activeTeachers: tActive, lockedTeachers: tLocked,
                        totalSubjects: resSubjects?.length || 0,
                        totalClasses: resClasses?.length || 0, openClasses: cOpen
                    });

                    if (resPeriods && resPeriods.length > 0) {
                        setAllPeriods([...resPeriods].sort((a, b) => b.id - a.id));
                    }
                }

                // 🛠️ LUỒNG BIẾN ĐỔI 2: PHÂN HỆ TEACHER
                if (role.includes('TEACHER')) {
                    if (teacherId) {
                        const classes = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
                        setTeacherClasses(classes || []);
                    }
                }

                // 🛠️ LUỒNG BIẾN ĐỔI 3: PHÂN HỆ STUDENT
                if (role.includes('STUDENT')) {
                    const [resMyClasses, resAllStudents] = await Promise.all([
                        axiosClient.get('/registration/my-classes'),
                        axiosClient.get('/students?includeInactive=true').catch(() => [])
                    ]);
                    setMyClasses(resMyClasses || []);

                    if (resAllStudents && resAllStudents.length > 0) {
                        const currentStudent = resAllStudents.find(s => s.studentCode === username || s.id === studentId);
                        setStudentInfo(currentStudent || null);
                    }
                }
            } catch (err) {
                console.error("Lỗi kết nối dữ liệu Dashboard:", err);
            } finally {
                setLoading(false);
            }
        };
        loadDashboardData();
    }, [role, username, studentId, teacherId]);

    const getPeriodStatusText = (period) => {
        if (!period) return { text: 'Chưa rõ', color: 'var(--text-muted)' };
        if (!period.isActive) return { text: '🔒 Đã đóng cổng', color: 'var(--color-danger)' };
        const now = new Date();
        const start = new Date(period.startTime);
        const end = new Date(period.endTime);
        if (now < start) return { text: '⏳ Chờ giờ hẹn', color: 'var(--color-warning)' };
        if (now > end) return { text: '⏰ Hết hạn đóng cổng', color: 'var(--color-danger)' };
        return { text: '🟢 ĐANG MỞ REALTIME', color: 'var(--color-success)' };
    };

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px' }}>Đang tổng hợp dữ liệu hệ thống đào tạo...</div>;

    // ==================== 🏛️ VÙNG 1: ĐẠI TU GIÀU CHI TIẾT DÀNH CHO ADMIN ====================
    if (role.includes('ADMIN')) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <div className="page-header">
                    <h2 className="page-header__title">Tổng quan hệ thống</h2>
                    <p className="page-header__desc">Giám sát dữ liệu vận hành và trạng thái đào tạo.</p>
                </div>

                {/* Khối Card số liệu chi tiết sâu (Deep Metrics Grid) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px' }}>
                    {/* Card Sinh viên */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>👥</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>QUẢN LÝ SINH VIÊN</div>
                            <div style={cardValueStyle}>{adminMetrics.totalStudents} <span style={{fontSize:'12px', fontWeight:'normal'}}>Tổng số</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--color-success)'}}>● Đang học: {adminMetrics.activeStudents}</span>
                                <span style={{color:'var(--color-danger)'}}>● Khóa: {adminMetrics.lockedStudents}</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Giảng viên */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>💼</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>QUẢN LÝ GIẢNG VIÊN</div>
                            <div style={cardValueStyle}>{adminMetrics.totalTeachers} <span style={{fontSize:'12px', fontWeight:'normal'}}>Nhân sự</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--color-success)'}}>● Đang dạy: {adminMetrics.activeTeachers}</span>
                                <span style={{color:'var(--color-danger)'}}>● Khóa: {adminMetrics.lockedTeachers}</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Đào tạo */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>📘</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>HỆ THỐNG ĐÀO TẠO</div>
                            <div style={cardValueStyle}>{adminMetrics.totalSubjects} <span style={{fontSize:'12px', fontWeight:'normal'}}>Môn học</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--text-cyan)'}}>● Lớp HP hệ thống: {adminMetrics.totalClasses}</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Điều phối đăng ký */}
                    <div style={deepCardStyle}>
                        <div style={{fontSize: '24px'}}>⏰</div>
                        <div style={{flex: 1}}>
                            <div style={cardTitleStyle}>ĐIỀU PHỐI TÍN CHỈ</div>
                            <div style={cardValueStyle}>{adminMetrics.openClasses} <span style={{fontSize:'12px', fontWeight:'normal'}}>Lớp mở đăng ký</span></div>
                            <div style={subMetricStyle}>
                                <span style={{color:'var(--color-warning)'}}>● Tổng số đợt hẹn: {allPeriods.length} đợt</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* KHỐI 2 BẢNG CHI TIẾT: LỊCH SỬ KHUNG GIỜ VÀ SYSTEM HEALTH */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '20px', flexWrap: 'wrap' }}>

                    {/* Bảng trái: Lịch sử toàn bộ các đợt mở cổng */}
                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-cyan)' }}>📋 LỊCH SỬ VÀ TIẾN ĐỘ CÁC ĐỢT MỞ ĐĂNG KÝ TÍN CHỈ</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={dashboardTableStyle}>
                                <thead>
                                <tr style={thStyle}>
                                    <th>Mã Đợt</th><th>Học Kỳ</th><th>Thời Gian Bắt Đầu</th><th>Thời Gian Kết Thúc</th><th style={{textAlign:'center'}}>Trạng Thái Thực Tế</th>
                                </tr>
                                </thead>
                                <tbody>
                                {allPeriods.map((p) => {
                                    const stat = getPeriodStatusText(p);
                                    return (
                                        <tr key={p.id} style={trStyle}>
                                            <td style={{fontWeight:'bold', color:'var(--text-muted)'}}>#RP_{p.id}</td>
                                            <td style={{fontWeight:'bold', color:'white'}}>{p.semester}</td>
                                            <td style={{fontSize:'12px'}}>{new Date(p.startTime).toLocaleString('vi-VN')}</td>
                                            <td style={{fontSize:'12px'}}>{new Date(p.endTime).toLocaleString('vi-VN')}</td>
                                            <td style={{textAlign:'center', fontSize:'12px', color: stat.color, fontWeight:'bold'}}>{stat.text}</td>
                                        </tr>
                                    );
                                })}
                                {allPeriods.length === 0 && (
                                    <tr><td colSpan="5" style={{textAlign:'center', color:'var(--text-muted)', padding:'10px'}}>Chưa có dữ liệu lịch sử đợt mở.</td></tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bảng phải: Giám sát Hệ thống / Audit Logs giả lập */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {/* Hộp System Performance */}
                        <div style={panelStyle}>
                            <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-warning)' }}>🖥️ MONITOR SYSTEM HEALTH</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
                                <div style={logItemStyle}>🚀 Server Status: <span style={{color:'var(--color-success)', fontWeight:'bold'}}>ONLINE</span></div>
                                <div style={logItemStyle}>⚙️ Core Version: <span>v2.4.0-Stable</span></div>
                                <div style={logItemStyle}>🧠 RAM Allocated: <span>412MB / 1024MB</span></div>
                                <div style={logItemStyle}>⚡ DB Pool: <span style={{color:'var(--text-cyan)'}}>Active (8/20)</span></div>
                            </div>
                        </div>

                        {/* Hộp Nhật ký hành động nhanh */}
                        <div style={panelStyle}>
                            <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-cyan)' }}>📑 SYSTEM AUDIT LOGS (NHẬT KÝ THỜI GIAN THỰC)</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', maxHeight: '140px', overflowY: 'auto', color: 'var(--text-muted)' }}>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>⏱️ [Just Now] Admin vừa thực hiện quy trình kiểm tra đồng bộ mảng dữ liệu.</div>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>🔑 [5 mins ago] Tài khoản mã số gán khóa học vừa nạp cấu hình thành công.</div>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>🗄️ [10 mins ago] JPA Hibernate đồng bộ hóa cột dữ liệu trường `cohort` thành công.</div>
                                <div style={{borderBottom:'1px solid #333', paddingBottom:'4px'}}>🔒 [30 mins ago] Cấu hình Filter Security bảo mật tầng URL định tuyến mở cổng thành công.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // ==================== 💼 VÙNG 2: GIAO DIỆN DÀNH CHO GIẢNG VIÊN (TEACHER) ====================
    if (role.includes('TEACHER')) {
        return (
            <div style={containerStyle}>
                <div style={panelStyle}>
                    <h2 style={{ margin: '0 0 5px 0', color: 'var(--text-cyan)' }}>💼 CỔNG THÔNG TIN TỔNG QUAN GIẢNG VIÊN</h2>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Xin chào Thầy/Cô <b>{username}</b>. Dưới đây là tóm tắt danh sách lớp đảm nhiệm trong học kỳ.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ ...cardStyle, justifyContent: 'center', textAlign: 'center', padding: '30px' }}>
                        <div>
                            <div style={cardTitleStyle}>HỌC PHẦN ĐANG ĐẢM NHIỆM</div>
                            <div style={{...cardValueStyle, fontSize:'36px', color:'var(--text-cyan)', marginTop:'8px'}}>{teacherClasses.length} Lớp</div>
                        </div>
                    </div>
                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--color-warning)', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>📅 THỜI KHÓA BIỂU GIẢNG DẠY CỦA THẦY/CÔ</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                            {teacherClasses.map((c, i) => (
                                <div key={i} style={itemStyle}>
                                    📖 <b>Lớp học phần: {c.code}</b> — Môn: {c.subjectName} | ⏰ Lịch lên lớp: <span style={{color:'var(--color-warning)', fontWeight:'bold'}}>{c.schedule || 'Chưa xếp lịch'}</span>
                                </div>
                            ))}
                            {teacherClasses.length === 0 && <p style={{color:'var(--text-muted)', margin:0}}>Học kỳ này Thầy/Cô chưa có lịch phân công giảng dạy.</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ==================== 🎓 VÙNG 3: GIAO DIỆN DÀNH CHO SINH VIÊN (STUDENT) ====================
    if (role.includes('STUDENT')) {
        const totalCredits = myClasses.reduce((sum, item) => sum + (item.credits || 0), 0);
        return (
            <div style={containerStyle}>
                <div style={panelStyle}>
                    <h2 style={{ margin: '0 0 5px 0', color: 'var(--text-cyan)' }}>🎓 CỔNG THÔNG TIN SINH VIÊN TRA CỨU HỒ SƠ</h2>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Quản lý thông tin lý lịch cá nhân và sơ đồ lịch trình lên lớp tuần cá nhân.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-cyan)', borderBottom:'1px solid var(--color-border)', paddingBottom:'6px' }}>👤 HỒ SƠ LÝ LỊCH CÁ NHÂN SV</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                            <div>• Mã số sinh viên: <b style={{color:'var(--color-warning)'}}>{studentInfo?.studentCode || username}</b></div>
                            <div>• Họ và tên học viên: <b>{studentInfo ? `${studentInfo.lastName} ${studentInfo.firstName}` : 'Học viên'}</b></div>
                            <div>• Lớp hành chính gốc: <span style={{color:'var(--text-cyan)', fontWeight:'bold'}}>{studentInfo?.className || 'Chưa xếp lớp'}</span></div>
                            <div>• Niên khóa đào tạo: <b style={{color:'var(--color-success)'}}>{studentInfo?.cohort || 'Khóa 1'}</b></div>
                            <div>• Hộp thư nhà trường: <span style={{color:'var(--text-muted)'}}>{studentInfo?.email || 'Chưa cấp'}</span></div>
                        </div>
                    </div>

                    <div style={panelStyle}>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--color-warning)', borderBottom:'1px solid var(--color-border)', paddingBottom:'6px' }}>📈 SƠ ĐỒ ĐĂNG KÝ HỌC PHẦN HỌC KỲ</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={metricBoxStyle}>
                                    <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>{myClasses.length}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop:'2px' }}>MÔN ĐÃ ĐK</div>
                                </div>
                                <div style={metricBoxStyle}>
                                    <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--color-success)' }}>{totalCredits}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop:'2px' }}>TỔNG TÍN CHỈ</div>
                                </div>
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                                💡 <b>Lưu ý cấu trúc:</b> Sinh viên chủ động rà soát Thời khóa biểu bên dưới để tránh trùng lặp khung giờ ca học đan xen động!
                            </div>
                        </div>
                    </div>
                </div>

                <div style={panelStyle}>
                    <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-success)' }}>📅 THỜI KHÓA BIỂU LỊCH HỌC TUẦN CỦA BẠN</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                        {myClasses.map((reg, i) => (
                            <div key={i} style={itemStyle}>
                                📝 <b>Mã lớp học phần: {reg.courseClassCode}</b> — Tên môn: {reg.subjectName} ({reg.credits} tín) | 📅 Lịch học: <span style={{color:'var(--color-success)', fontWeight:'bold'}}>{reg.schedule || 'Chưa xếp lịch'}</span>
                            </div>
                        ))}
                        {myClasses.length === 0 && (
                            <p style={{color:'var(--text-muted)', margin: 0, padding: '10px 0'}}>Bạn chưa thực hiện thao tác chọn đăng ký lớp học phần nào trong học kỳ này.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

// --- CẤU HÌNH INLINE CSS DESIGN CHUẨN ĐẸP ---
const containerStyle = { display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' };
const panelStyle = { backgroundColor: 'var(--color-surface)', padding: '15px 20px', borderRadius: '6px', border: '1px solid var(--color-border)' };
const cardStyle = { display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' };
const deepCardStyle = { display: 'flex', gap: '15px', backgroundColor: 'var(--color-surface)', padding: '18px 15px', borderRadius: '6px', border: '1px solid var(--color-border)' };
const cardTitleStyle = { fontSize: '11px', fontWeight: 'bold', color: 'var(--text-muted)', letterSpacing: '0.3px' };
const cardValueStyle = { fontSize: '20px', fontWeight: 'bold', color: 'white', marginTop: '2px', marginBottom: '6px' };
const subMetricStyle = { display: 'flex', gap: '10px', fontSize: '11px', fontWeight: 'bold' };
const itemStyle = { padding: '8px 12px', backgroundColor: 'var(--color-bg)', borderRadius: '4px', borderLeft: '3px solid var(--color-primary)' };
const metricBoxStyle = { backgroundColor: 'var(--color-bg)', padding: '12px', borderRadius: '6px', textAlign: 'center', minWidth: '95px', border: '1px solid var(--color-border)' };
const logItemStyle = { padding: '6px', backgroundColor: 'var(--color-bg)', borderRadius: '4px', color: 'var(--text-main)' };

// Style bảng bổ sung chuyên nghiệp
const dashboardTableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '5px' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', textAlign: 'left', padding: '8px', fontSize: '13px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '8px' };
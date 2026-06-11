import React, { useState, useEffect } from 'react';

export default function RegistrationPage() {
    // Tự động lấy thông tin từ localStorage đồng bộ với hệ thống cũ của bạn
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username') || '';
    const role = localStorage.getItem('roles') || '';

    // Lấy studentId và teacherId đã được đồng bộ từ Backend ở các phiên trước
    const studentId = localStorage.getItem('studentId') || '';
    const teacherId = localStorage.getItem('teacherId') || '';

    // State dùng chung để quản lý trạng thái hiển thị
    const [message, setMessage] = useState({ text: '', isError: false });

    // --- STATE PHÂN HỆ ADMIN ---
    const [periodForm, setPeriodForm] = useState({ semester: '', startTime: '', endTime: '' });
    const [stats, setStats] = useState([]);

    // --- STATE PHÂN HỆ TEACHER ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [classStudents, setClassStudents] = useState([]);

    // --- STATE PHÂN HỆ STUDENT ---
    const [availableClasses, setAvailableClasses] = useState([]);

    const getAuthHeaders = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    useEffect(() => {
        if (role.includes('ADMIN')) loadAdminStats();
        if (role.includes('TEACHER')) loadTeacherSchedule();
        if (role.includes('STUDENT')) loadAvailableClasses();
    }, [role]);

    const showMessage = (text, isError = false) => {
        setMessage({ text, isError });
        setTimeout(() => setMessage({ text: '', isError: false }), 4000);
    };

    // ==================== 🛠️ NGHIỆP VỤ ADMIN ====================
    const loadAdminStats = async () => {
        try {
            const res = await fetch('http://localhost:8081/registration/statistics', { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setStats(data.result);
        } catch (err) { showMessage('Không thể tải số liệu thống kê lớp học phần', true); }
    };

    const handleCreatePeriod = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8081/registration/periods', {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify(periodForm)
            });
            const data = await res.json();
            if (data.code === 1000) {
                showMessage('Mở cổng đăng ký tín chỉ thành công!');
                setPeriodForm({ semester: '', startTime: '', endTime: '' });
            } else {
                showMessage(data.message, true);
            }
        } catch (err) { showMessage('Lỗi kết nối Server quản lý lịch', true); }
    };

    // ==================== 💼 NGHIỆP VỤ TEACHER ====================
    const loadTeacherSchedule = async () => {
        if (!teacherId) return;
        try {
            const res = await fetch(`http://localhost:8081/registration/teacher/${teacherId}/classes`, { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setTeacherClasses(data.result);
        } catch (err) { showMessage('Không thể tải lịch dạy của giảng viên', true); }
    };

    const viewClassStudents = async (classId) => {
        setSelectedClassId(classId);
        try {
            const res = await fetch(`http://localhost:8081/registration/classes/${classId}/students`, { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setClassStudents(data.result);
        } catch (err) { showMessage('Không thể tải danh sách lớp học phần', true); }
    };

    // ==================== 🎓 NGHIỆP VỤ STUDENT ====================
    const loadAvailableClasses = async () => {
        try {
            // Lấy danh sách lớp học phần mở tạm thời từ endpoint tổng hợp hoặc tùy biến riêng theo nghiệp vụ
            const res = await fetch('http://localhost:8081/grades', { headers: getAuthHeaders() });
            // Cấu hình danh sách hiển thị mẫu cho sinh viên thực hiện test chức năng
            setAvailableClasses([
                { id: 1, code: 'LHP_CNPM_01', subject: { name: 'Công nghệ phần mềm', credits: 3 }, teacher: { firstName: 'Anh', lastName: 'Nguyễn Đình' }, semester: 'HK1-2026' },
                { id: 2, code: 'LHP_CSDL_02', subject: { name: 'Cơ sở dữ liệu', credits: 3 }, teacher: { firstName: 'An', lastName: 'Vương Đức' }, semester: 'HK1-2026' }
            ]);
        } catch (err) { console.error('Lỗi tải danh sách lớp mở: ', err); }
    };

    const handleEnroll = async (courseClassId) => {
        if (!studentId) { showMessage('Định danh sinh viên không hợp lệ!', true); return; }
        try {
            const res = await fetch(`http://localhost:8081/registration/enroll?studentId=${studentId}&courseClassId=${courseClassId}`, {
                method: 'POST',
                headers: getAuthHeaders()
            });
            const data = await res.json();
            if (data.code === 1000) {
                showMessage('Đăng ký lớp học phần thành công!');
                loadAdminStats();
            } else {
                showMessage(data.message, true);
            }
        } catch (err) { showMessage('Cổng đăng ký đang đóng hoặc đã hết hạn!', true); }
    };

    const handleUnenroll = async (courseClassId) => {
        if (!studentId) return;
        try {
            const res = await fetch(`http://localhost:8081/registration/unenroll?studentId=${studentId}&courseClassId=${courseClassId}`, {
                method: 'DELETE',
                headers: getAuthHeaders()
            });
            const data = await res.json();
            if (data.code === 1000) {
                showMessage('Hủy đăng ký môn học thành công!');
                loadAdminStats();
            } else {
                showMessage(data.message, true);
            }
        } catch (err) { showMessage('Không thể hủy (Đã quá hạn hoặc lớp học phần đã nhập điểm)', true); }
    };

    return (
        <div style={{ padding: 'var(--spacing-md)', color: 'var(--text-main)' }}>
            <h2 style={{ color: 'var(--text-cyan)', marginBottom: 'var(--spacing-xl)' }}>⏰ HỆ THỐNG ĐĂNG KÝ TÍN CHỈ REALTIME</h2>

            {message.text && (
                <div style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)', backgroundColor: message.isError ? 'var(--color-danger)' : 'var(--color-primary)', color: 'var(--text-main)', borderRadius: '4px', fontWeight: 'bold' }}>
                    {message.text}
                </div>
            )}

            {/* ==================== GIAO DIỆN ADMIN ==================== */}
            {role.includes('ADMIN') && (
                <div>
                    <h3 style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>⚙️ Bảng Điều Khiển Quản Trị Viên (Admin)</h3>
                    <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>

                        <form onSubmit={handleCreatePeriod} style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h4>📅 Thiết lập lịch mở cổng đăng ký</h4>
                            <input type="text" placeholder="Học kỳ (Ví dụ: HK1-2026)" value={periodForm.semester} onChange={e => setPeriodForm({...periodForm, semester: e.target.value})} required style={{ padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                            <label>Thời gian mở cổng:</label>
                            <input type="datetime-local" value={periodForm.startTime} onChange={e => setPeriodForm({...periodForm, startTime: e.target.value})} required style={{ padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                            <label>Thời gian đóng cổng:</label>
                            <input type="datetime-local" value={periodForm.endTime} onChange={e => setPeriodForm({...periodForm, endTime: e.target.value})} required style={{ padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                            <button type="submit" style={{ padding: '12px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Kích Hoạt Mở Cổng</button>
                        </form>

                        <div style={{ flex: '2', minWidth: '400px', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h4>📊 Thống kê lượng sinh viên đăng ký lớp học phần</h4>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 'var(--spacing-md)', textAlign: 'left' }}>
                                <thead style={{ borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)' }}>
                                <tr>
                                    <th style={{ padding: '10px' }}>Mã Lớp Học Phần</th>
                                    <th style={{ padding: '10px' }}>Tên Môn Học</th>
                                    <th style={{ padding: '10px' }}>Giảng Viên</th>
                                    <th style={{ padding: '10px' }}>Sĩ Số Hiện Tại</th>
                                </tr>
                                </thead>
                                <tbody>
                                {stats.map((stat, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '10px' }}>{stat.courseClassCode}</td>
                                        <td style={{ padding: '10px' }}>{stat.subjectName}</td>
                                        <td style={{ padding: '10px' }}>{stat.teacherName}</td>
                                        <td style={{ padding: '10px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>{stat.registeredStudents} SV</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== GIAO DIỆN TEACHER ==================== */}
            {role.includes('TEACHER') && !role.includes('ADMIN') && (
                <div>
                    <h3 style={{ color: 'var(--text-muted)' }}>💼 Phân hệ: Giảng Viên Hướng Dẫn</h3>
                    <p style={{ marginBottom: 'var(--spacing-lg)' }}>Chọn lớp học phần để xem danh sách sinh viên đăng ký tín chỉ:</p>
                    <div style={{ display: 'flex', gap: 'var(--spacing-xl)' }}>
                        <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            {teacherClasses.map(c => (
                                <button key={c.id} onClick={() => viewClassStudents(c.id)} style={{ padding: 'var(--spacing-md)', backgroundColor: selectedClassId === c.id ? 'var(--color-primary)' : 'var(--color-surface)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', textAlign: 'left', cursor: 'pointer', fontWeight: 'bold' }}>
                                    {c.code} ({c.semester})
                                </button>
                            ))}
                        </div>

                        {selectedClassId && (
                            <div style={{ flex: 1, padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                                <h4>👥 Danh sách sinh viên thuộc lớp học phần</h4>
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 'var(--spacing-md)', textAlign: 'left' }}>
                                    <thead style={{ borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)' }}>
                                    <tr>
                                        <th style={{ padding: '10px' }}>Mã Sinh Viên</th>
                                        <th style={{ padding: '10px' }}>Họ Và Tên</th>
                                        <th style={{ padding: '10px' }}>Giới Tính</th>
                                        <th style={{ padding: '10px' }}>Số Điện Thoại</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {classStudents.map((sv, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '10px' }}>{sv.studentCode}</td>
                                            <td style={{ padding: '10px' }}>{sv.firstName} {sv.lastName}</td>
                                            <td style={{ padding: '10px' }}>{sv.gender}</td>
                                            <td style={{ padding: '10px' }}>{sv.phoneNumber}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== GIAO DIỆN STUDENT ==================== */}
            {role.includes('STUDENT') && !role.includes('ADMIN') && (
                <div style={{ padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ color: 'var(--text-cyan)', marginBottom: 'var(--spacing-md)' }}>🎓 Danh Sách Môn Học Đang Mở Đăng Ký</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)' }}>
                        <tr>
                            <th style={{ padding: '12px' }}>Mã Lớp Học Phần</th>
                            <th style={{ padding: '12px' }}>Tên Môn Học</th>
                            <th style={{ padding: '12px' }}>Số Tín Chỉ</th>
                            <th style={{ padding: '12px' }}>Giảng Viên</th>
                            <th style={{ padding: '12px' }}>Thao Tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {availableClasses.map(c => (
                            <tr key={c.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                <td style={{ padding: '12px' }}>{c.code}</td>
                                <td style={{ padding: '12px' }}>{c.subject.name}</td>
                                <td style={{ padding: '12px' }}>{c.subject.credits} tín</td>
                                <td style={{ padding: '12px' }}>{c.teacher.lastName} {c.teacher.firstName}</td>
                                <td style={{ padding: '12px' }}>
                                    <button onClick={() => handleEnroll(c.id)} style={{ padding: '6px 14px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '8px', fontWeight: 'bold' }}>Đăng ký</button>
                                    <button onClick={() => handleUnenroll(c.id)} style={{ padding: '6px 14px', backgroundColor: 'var(--color-danger)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Hủy môn</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
import React, { useState, useEffect } from 'react';

// Giả định bạn lưu thông tin người dùng trong localStorage sau khi login
const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};

export default function CourseRegistration({ userRole, userId, studentId, teacherId }) {
    // State dùng chung
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', isError: false });

    // --- STATE ADMIN ---
    const [periodForm, setPeriodForm] = useState({ semester: '', startTime: '', endTime: '' });
    const [stats, setStats] = useState([]);

    // --- STATE TEACHER ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [classStudents, setClassStudents] = useState([]);

    // --- STATE STUDENT (Dùng chung danh sách lớp học phần mở để đăng ký) ---
    const [availableClasses, setAvailableClasses] = useState([]);

    useEffect(() => {
        if (userRole === 'ADMIN') loadAdminStats();
        if (userRole === 'TEACHER') loadTeacherSchedule();
        if (userRole === 'STUDENT') loadAvailableClasses();
    }, [userRole]);

    const showMessage = (text, isError = false) => {
        setMessage({ text, isError });
        setTimeout(() => setMessage({ text: '', isError: false }), 4000);
    };

    // ==================== 🛠️ LOGIC XỬ LÝ ADMIN ====================
    const loadAdminStats = async () => {
        try {
            const res = await fetch('http://localhost:8081/registration/statistics', { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setStats(data.result);
        } catch (err) { showMessage('Không thể tải số liệu thống kê', true); }
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
        } catch (err) { showMessage('Lỗi kết nối Server', true); }
    };

    // ==================== 💼 LOGIC XỬ LÝ TEACHER ====================
    const loadTeacherSchedule = async () => {
        try {
            const res = await fetch(`http://localhost:8081/registration/teacher/${teacherId}/classes`, { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setTeacherClasses(data.result);
        } catch (err) { showMessage('Không thể tải lịch dạy', true); }
    };

    const viewClassStudents = async (classId) => {
        setSelectedClassId(classId);
        try {
            const res = await fetch(`http://localhost:8081/registration/classes/${classId}/students`, { headers: getAuthHeaders() });
            const data = await res.json();
            if (data.code === 1000) setClassStudents(data.result);
        } catch (err) { showMessage('Không thể tải danh sách sinh viên', true); }
    };

    // ==================== 🎓 LOGIC XỬ LÝ STUDENT ====================
    const loadAvailableClasses = async () => {
        // Trong thực tế, bạn gọi API lấy danh sách CourseClass mở thuộc Học kỳ hiện tại
        try {
            const res = await fetch('http://localhost:8081/grades', { headers: getAuthHeaders() }); // Gọi tạm endpoint để có danh sách hoặc viết riêng API getAllCourseClasses
            // Giả lập danh sách lớp học phần hiển thị cho sinh viên đăng ký
            setAvailableClasses([
                { id: 1, code: 'LHP_CNPM_01', subject: { name: 'Công nghệ phần mềm', credits: 3 }, teacher: { firstName: 'Đăng', lastName: 'Trần' }, semester: 'HK1-2026' },
                { id: 2, code: 'LHP_CSDL_02', subject: { name: 'Cơ sở dữ liệu', credits: 3 }, teacher: { firstName: 'Hải', lastName: 'Nguyễn' }, semester: 'HK1-2026' }
            ]);
        } catch (err) { console.error(err); }
    };

    const handleEnroll = async (courseClassId) => {
        try {
            const res = await fetch(`http://localhost:8081/registration/enroll?studentId=${studentId}&courseClassId=${courseClassId}`, {
                method: 'POST',
                headers: getAuthHeaders()
            });
            const data = await res.json();
            if (data.code === 1000) showMessage('Đăng ký môn học thành công!');
            else showMessage(data.message, true);
        } catch (err) { showMessage('Cổng đăng ký đang đóng hoặc lỗi hệ thống', true); }
    };

    const handleUnenroll = async (courseClassId) => {
        try {
            const res = await fetch(`http://localhost:8081/registration/unenroll?studentId=${studentId}&courseClassId=${courseClassId}`, {
                method: 'DELETE',
                headers: getAuthHeaders()
            });
            const data = await res.json();
            if (data.code === 1000) showMessage('Hủy đăng ký thành công!');
            else showMessage(data.message, true);
        } catch (err) { showMessage('Không thể hủy (Quá hạn hoặc đã có điểm)', true); }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Hệ Thống Quản Lý Đăng Ký Tín Chỉ</h2>

            {message.text && (
                <div style={{ padding: '10px', margin: '10px 0', backgroundColor: message.isError ? '#f8d7da' : '#d4edda', color: message.isError ? '#721c24' : '#155724', borderRadius: '4px' }}>
                    {message.text}
                </div>
            )}

            <hr />

            {/* ==================== VIEW ADMIN ==================== */}
            {userRole === 'ADMIN' && (
                <div>
                    <h3>⚙️ Quyền hạn: Quản trị viên (Admin)</h3>
                    <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                        {/* Form mở cổng */}
                        <form onSubmit={handleCreatePeriod} style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <h4>⏰ Thiết lập lịch đăng ký mới</h4>
                            <input type="text" placeholder="Học kỳ (VD: HK1-2026)" value={periodForm.semester} onChange={e => setPeriodForm({...periodForm, semester: e.target.value})} required style={{ padding: '8px' }} />
                            <label>Thời gian bắt đầu:</label>
                            <input type="datetime-local" value={periodForm.startTime} onChange={e => setPeriodForm({...periodForm, startTime: e.target.value})} required style={{ padding: '8px' }} />
                            <label>Thời gian kết thúc:</label>
                            <input type="datetime-local" value={periodForm.endTime} onChange={e => setPeriodForm({...periodForm, endTime: e.target.value})} required style={{ padding: '8px' }} />
                            <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Kích Hoạt Mở Cổng</button>
                        </form>

                        {/* Bảng thống kê số lượng */}
                        <div style={{ flex: 1 }}>
                            <h4>📊 Thống kê lượng sinh viên đăng ký theo lớp học phần</h4>
                            <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead style={{ backgroundColor: '#f2f2f2' }}>
                                <tr>
                                    <th>Mã Lớp Học Phần</th>
                                    <th>Tên Môn Học</th>
                                    <th>Giảng Viên</th>
                                    <th>Số SV Đăng Ký</th>
                                    <th>Học Kỳ</th>
                                </tr>
                                </thead>
                                <tbody>
                                {stats.map((stat, i) => (
                                    <tr key={i}>
                                        <td>{stat.courseClassCode}</td>
                                        <td>{stat.subjectName}</td>
                                        <td>{stat.teacherName}</td>
                                        <td style={{ fontWeight: 'bold', color: '#0056b3' }}>{stat.registeredStudents} SV</td>
                                        <td>{stat.semester}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== VIEW TEACHER ==================== */}
            {userRole === 'TEACHER' && (
                <div>
                    <h3>💼 Quyền hạn: Giảng viên</h3>
                    <h4>📅 Lịch dạy và quản lý danh sách lớp của bạn</h4>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <ul style={{ width: '250px', listStyle: 'none', padding: 0 }}>
                            {teacherClasses.map(c => (
                                <li key={c.id} onClick={() => viewClassStudents(c.id)} style={{ padding: '10px', backgroundColor: selectedClassId === c.id ? '#007bff' : '#f8f9fa', color: selectedClassId === c.id ? '#fff' : '#000', margin: '5px 0', cursor: 'pointer', borderRadius: '4px' }}>
                                    {c.code} - {c.semester}
                                </li>
                            ))}
                        </ul>

                        {selectedClassId && (
                            <div style={{ flex: 1 }}>
                                <h4>👥 Danh sách sinh viên thuộc lớp học phần này</h4>
                                <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                    <tr>
                                        <th>Mã Sinh Viên</th>
                                        <th>Họ Và Tên</th>
                                        <th>Giới Tính</th>
                                        <th>Số Điện Thoại</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {classStudents.map((sv, i) => (
                                        <tr key={i}>
                                            <td>{sv.studentCode}</td>
                                            <td>{sv.firstName} {sv.lastName}</td>
                                            <td>{sv.gender}</td>
                                            <td>{sv.phoneNumber}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== VIEW STUDENT ==================== */}
            {userRole === 'STUDENT' && (
                <div>
                    <h3>🎓 Phân hệ: Sinh viên đăng ký tín chỉ</h3>
                    <h4>🏫 Danh sách môn học / lớp học phần đang mở</h4>
                    <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                        <tr>
                            <th>Mã Lớp Học Phần</th>
                            <th>Tên Môn Học</th>
                            <th>Số Tín Chỉ</th>
                            <th>Giảng Viên Đứng Lớp</th>
                            <th>Học Kỳ</th>
                            <th>Thao Tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {availableClasses.map(c => (
                            <tr key={c.id}>
                                <td>{c.code}</td>
                                <td>{c.subject.name}</td>
                                <td>{c.subject.credits} tín</td>
                                <td>{c.teacher.lastName} {c.teacher.firstName}</td>
                                <td>{c.semester}</td>
                                <td>
                                    <button onClick={() => handleEnroll(c.id)} style={{ padding: '6px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', marginRight: '8px', cursor: 'pointer' }}>Đăng Ký</button>
                                    <button onClick={() => handleUnenroll(c.id)} style={{ padding: '6px 12px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}>Hủy Môn</button>
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
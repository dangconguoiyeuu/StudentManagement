import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function StudentPage() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const userRole = localStorage.getItem('roles') || '';
    const isAdmin = userRole.includes('ADMIN');

    const [includeInactive, setIncludeInactive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState('');

    const [studentCode, setStudentCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [classId, setClassId] = useState('');

    useEffect(() => {
        fetchStudents();
    }, [includeInactive]);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get(`/students?includeInactive=${includeInactive}`);
            setStudents(data);
        } catch (err) {
            setError(err || 'Không thể tải danh sách sinh viên!');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateStudent = async (e) => {
        e.preventDefault();
        setModalError('');
        const payload = { studentCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId) };
        try {
            await axiosClient.post('/students', payload);
            alert(`Cấp tài khoản thành công!\nTài khoản: ${studentCode}\nMật khẩu mặc định: password1234`);
            setShowModal(false);
            resetForm();
            fetchStudents();
        } catch (err) {
            setModalError(err || 'Có lỗi xảy ra khi tạo sinh viên!');
        }
    };

    const handleDeleteStudent = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn khóa sinh viên [${code} - ${name}] không?`)) {
            try {
                await axiosClient.delete(`/students/${id}`);
                alert('Đã thực hiện khóa mềm hồ sơ sinh viên thành công!');
                fetchStudents();
            } catch (err) {
                alert(err || 'Không thể khóa sinh viên này!');
            }
        }
    };

    const resetForm = () => {
        setStudentCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setClassId(''); setModalError('');
    };

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang tải dữ liệu...</div>;
    if (error) return <div style={{ color: 'var(--color-danger)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>{error}</div>;

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>QUẢN LÝ DANH SÁCH SINH VIÊN</h2>

                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    {isAdmin && (
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', backgroundColor: 'var(--color-surface-hover)', padding: '8px 12px', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                            <input type="checkbox" checked={includeInactive} onChange={(e) => setIncludeInactive(e.target.checked)} style={{ cursor: 'pointer' }} />
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--color-warning)' }}>Hiển thị cả SV đã khóa</span>
                        </label>
                    )}
                    {isAdmin && (
                        <button onClick={() => setShowModal(true)} style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-success)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                            + Cấp Tài Khoản Sinh Viên
                        </button>
                    )}
                </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Sinh Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Đệm</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Lớp</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Email Hệ Thống</th>
                    {isAdmin && <th style={{ padding: 'var(--spacing-md)' }}>Hành Động</th>}
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: student.isActive ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {student.isActive ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang học</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold', backgroundColor: 'rgba(220,53,69,0.15)', padding: '2px 6px', borderRadius: '4px' }}>🔒 Đã khóa</span>}
                        </td>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{student.studentCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.lastName}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{student.className}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>{student.email}</td>
                        {isAdmin && (
                            <td style={{ padding: 'var(--spacing-md)' }}>
                                {student.isActive ? (
                                    <button onClick={() => handleDeleteStudent(student.id, student.studentCode, student.firstName)} style={{ padding: 'var(--spacing-xs) var(--spacing-sm)', backgroundColor: 'var(--color-danger)', color: 'var(--text-main)', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Khóa</button>
                                ) : <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Đã khóa</span>}
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>

            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>✍️ KHỞI TẠO HỒ SƠ & TỰ ĐỘNG CẤP TK</h3>
                        {modalError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>{modalError}</div>}
                        <form onSubmit={handleCreateStudent}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Mã Sinh Viên (Tài khoản):</label><input type="text" placeholder="B21CNPM001" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>ID Lớp Hành Chính:</label><input type="number" placeholder="ID" value={classId} onChange={(e) => setClassId(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Họ Và Tên Đệm:</label><input type="text" placeholder="Nguyễn Đình" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Tên Sinh Viên:</label><input type="text" placeholder="Anh" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px' }}>Số Điện Thoại:</label><input type="text" placeholder="0987654321" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ backgroundColor: 'var(--color-surface-hover)', padding: '10px', borderRadius: '4px', marginBottom: 'var(--spacing-xl)', fontSize: '13px', color: 'var(--color-warning)' }}>
                                💡 Mật khẩu mặc định tự tạo hệ thống là: <b>password1234</b>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy Bỏ</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Khởi Tạo & Cấp TK</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
export default StudentPage;
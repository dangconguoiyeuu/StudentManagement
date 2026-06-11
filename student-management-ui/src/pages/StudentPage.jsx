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
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingStudentId, setEditingStudentId] = useState(''); // 🔥 ĐÃ SỬA: Chuyển sang String trống làm mặc định

    // Form States
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditMode) {
            const payload = { firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId) };
            try {
                await axiosClient.put(`/students/${editingStudentId}`, payload);
                alert("Cập nhật hồ sơ sinh viên thành công!");
                setShowModal(false);
                resetForm();
                fetchStudents();
            } catch (err) {
                alert(err || 'Lỗi cập nhật hồ sơ!');
            }
        } else {
            const payload = { studentCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId) };
            try {
                await axiosClient.post('/students', payload);
                alert(`Cấp tài khoản thành công mượt mà!`);
                setShowModal(false);
                resetForm();
                fetchStudents();
            } catch (err) {
                alert(err || 'Có lỗi xảy ra khi tạo sinh viên!');
            }
        }
    };

    const handleOpenEdit = (student) => {
        setIsEditMode(true);
        setEditingStudentId(student.id); // Lưu chuỗi ID dạng 'HS_01' làm đích cập nhật
        setStudentCode(student.studentCode);
        setFirstName(student.firstName);
        setLastName(student.lastName);
        setDateOfBirth(student.dateOfBirth || '');
        setGender(student.gender || 'Nam');
        setPhoneNumber(student.phoneNumber || '');
        setClassId(student.classId || '');
        setShowModal(true);
    };

    const handleDeleteStudent = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn KHÓA tài khoản sinh viên [${code} - ${name}] không?`)) {
            try {
                await axiosClient.delete(`/students/${id}`);
                alert('Đã khóa hồ sơ sinh viên và đóng băng tài khoản thành công!');
                fetchStudents();
            } catch (err) {
                alert(err || 'Không thể khóa sinh viên này!');
            }
        }
    };

    const handleEnableStudent = async (id, code, name) => {
        if (window.confirm(`Bạn có chắc chắn muốn MỞ KHÓA cho sinh viên [${code} - ${name}] không?`)) {
            try {
                await axiosClient.put(`/students/${id}/enable`);
                alert('Tái kích hoạt hệ thống và mở khóa tài khoản thành công!');
                fetchStudents();
            } catch (err) {
                alert(err || 'Không thể mở khóa sinh viên này!');
            }
        }
    };

    const resetForm = () => {
        setStudentCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setClassId('');
        setIsEditMode(false); setEditingStudentId('');
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
                            <input type="checkbox" checked={includeInactive} onChange={(e) => setIncludeInactive(e.target.checked)} />
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--color-warning)' }}>Hiển thị cả SV đã khóa</span>
                        </label>
                    )}
                    {isAdmin && (
                        <button onClick={() => { resetForm(); setShowModal(true); }} style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-success)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                            + Cấp Tài Khoản Sinh Viên
                        </button>
                    )}
                </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Hệ thống ID</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Sinh Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Lớp Học Phần</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái</th>
                    {isAdmin && <th style={{ padding: 'var(--spacing-md)' }}>Hành Động Tác Vụ</th>}
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: student.active ? 1 : 0.55 }}>
                        {/* Hiển thị chuỗi định danh đồng bộ hóa dùng chung với User */}
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--text-muted)' }}>{student.id}</td>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{student.studentCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.lastName} {student.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{student.className}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {student.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang học</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa</span>}
                        </td>
                        {isAdmin && (
                            <td style={{ padding: 'var(--spacing-md)' }}>
                                {/* 🔥 HÀNH ĐỘNG: Phân tách nút bấm độc lập hoàn chỉnh ra bên ngoài danh sách */}
                                <button onClick={() => handleOpenEdit(student)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', fontWeight: 'bold' }}>Sửa</button>
                                {student.active ? (
                                    <button onClick={() => handleDeleteStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Khóa</button>
                                ) : (
                                    <button onClick={() => handleEnableStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Mở Khóa</button>
                                )}
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>

            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>{isEditMode ? '📝 CẬP NHẬT HỒ SƠ SINH VIÊN' : '✍️ KHỞI TẠO HỒ SƠ SYSTEM'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Mã Sinh Viên:</label><input type="text" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} disabled={isEditMode} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>ID Lớp Hành Chính:</label><input type="number" value={classId} onChange={(e) => setClassId(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Họ Và Tên Đệm:</label><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Tên Sinh Viên:</label><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px' }}>Số Điện Thoại:</label><input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>Hủy Bỏ</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>{isEditMode ? 'Lưu Thay Đổi' : 'Khởi Tạo & Cấp TK'}</button>
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
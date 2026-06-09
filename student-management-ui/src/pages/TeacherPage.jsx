import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function TeacherPage() {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState('');

    const [teacherCode, setTeacherCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/teachers');
            setTeachers(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateTeacher = async (e) => {
        e.preventDefault();
        setModalError('');
        const payload = { teacherCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, departmentId: Number(departmentId) };
        try {
            await axiosClient.post('/teachers', payload);
            alert(`Cấp tài khoản Giảng viên thành công!\nTài khoản: ${teacherCode}\nMật khẩu: password1234`);
            setShowModal(false);
            resetForm();
            fetchTeachers();
        } catch (err) {
            setModalError(err || 'Lỗi khởi tạo hồ sơ giảng viên.');
        }
    };

    const resetForm = () => {
        setTeacherCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setDepartmentId(''); setModalError('');
    };

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang tải danh sách giảng viên...</div>;

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>QUẢN LÝ DANH SÁCH GIẢNG VIÊN</h2>
                <button onClick={() => setShowModal(true)} style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-success)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    + Cấp Tài Khoản Giảng Viên
                </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Giảng Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Khoa Chuyên Môn</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Email Giảng Dạy</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Số Điện Thoại</th>
                </tr>
                </thead>
                <tbody>
                {teachers.map((t) => (
                    <tr key={t.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{t.teacherCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.lastName} {t.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{t.departmentName}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>{t.email}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.phoneNumber || '-'}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>✍️ THÊM MỚI HỒ SƠ GIẢNG VIÊN</h3>
                        {modalError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>{modalError}</div>}
                        <form onSubmit={handleCreateTeacher}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Mã Giảng Viên:</label><input type="text" placeholder="GV2026_01" value={teacherCode} onChange={(e) => setTeacherCode(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>ID Khoa/Viện:</label><input type="number" placeholder="ID" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Họ Và Tên Đệm:</label><input type="text" placeholder="Trần Quốc" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Tên Giảng Viên:</label><input type="text" placeholder="Tuấn" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px' }}>Số Điện Thoại:</label><input type="text" placeholder="0912345678" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>Hủy</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Khởi Tạo & Cấp TK</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
export default TeacherPage;
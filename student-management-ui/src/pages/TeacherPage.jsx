import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

function TeacherPage() {
    const { notify, confirm } = useNotification();
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState('');

    // Khởi tạo chế độ sửa
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingTeacherId, setEditingTeacherId] = useState('');

    // Form States
    const [teacherCode, setTeacherCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    // List States dữ liệu gợi ý Dropdown
    const [departmentList, setDepartmentList] = useState([]);

    // STATE TÌM KIẾM MÃ GIẢNG VIÊN
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTeachers();
        fetchDepartmentList();
    }, []);

    const fetchTeachers = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/teachers');
            setTeachers(data);
        } catch (err) {
            console.error(err);
        } finally { // 🔥 ĐÃ SỬA: Thay thế từ khóa lỗi 'fill' thành 'finally' chuẩn cú pháp
            setLoading(false);
        }
    };

    const fetchDepartmentList = async () => {
        try {
            const data = await axiosClient.get('/departments');
            setDepartmentList(data);
        } catch (err) {
            console.error("Lỗi nạp danh sách khoa dropdown:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalError('');

        if (isEditMode) {
            const payload = { firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber };
            try {
                await axiosClient.put(`/teachers/${editingTeacherId}`, payload);
                notify.success('Cập nhật hồ sơ giảng viên thành công!');
                setShowModal(false);
                resetForm();
                fetchTeachers();
            } catch (err) { setModalError(getErrorMessage(err, 'Lỗi cập nhật hồ sơ giảng viên.')); }
        } else {
            if (!departmentId) { setModalError('Vui lòng chọn Khoa/Viện chuyên môn!'); return; }
            const payload = { teacherCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, departmentId: Number(departmentId) };
            try {
                await axiosClient.post('/teachers', payload);
                notify.success(`Cấp tài khoản giảng viên thành công!\nTài khoản: ${teacherCode}\nMật khẩu mặc định: password1234`);
                setShowModal(false);
                resetForm();
                fetchTeachers();
            } catch (err) { setModalError(err || 'Lỗi khởi tạo hồ sơ giảng viên.'); }
        }
    };

    const handleOpenEdit = (t) => {
        setIsEditMode(true);
        setEditingTeacherId(t.id);
        setTeacherCode(t.teacherCode);
        setFirstName(t.firstName);
        setLastName(t.lastName);
        setDateOfBirth(t.dateOfBirth || '');
        setGender(t.gender || 'Nam');
        setPhoneNumber(t.phoneNumber || '');
        setDepartmentId(''); // Khóa chỉnh sửa khoa khi đang sửa thông tin cá nhân để bảo vệ toàn vẹn dữ liệu
        setShowModal(true);
    };

    const handleLockTeacher = async (id, code, name) => {
        const ok = await confirm({
            title: 'Khóa tài khoản giảng viên',
            message: `Bạn có chắc chắn muốn khóa giảng viên [${code} — ${name}]?\nTài khoản sẽ bị đóng băng quyền truy cập.`,
            confirmText: 'Khóa tài khoản',
            variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/teachers/${id}`);
            notify.success('Đã khóa tài khoản giảng viên thành công!');
            fetchTeachers();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể khóa giảng viên!')); }
    };

    const handleUnlockTeacher = async (id, code, name) => {
        const ok = await confirm({
            title: 'Mở khóa giảng viên',
            message: `Bạn có chắc chắn muốn mở khóa cho giảng viên [${code} — ${name}]?`,
            confirmText: 'Mở khóa',
            variant: 'success',
        });
        if (!ok) return;
        try {
            await axiosClient.put(`/teachers/${id}/enable`);
            notify.success('Mở khóa tài khoản giảng viên thành công!');
            fetchTeachers();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể mở khóa giảng viên!')); }
    };

    const resetForm = () => {
        setTeacherCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setDepartmentId(''); setModalError('');
        setIsEditMode(false); setEditingTeacherId('');
    };

    // BỘ LỌC TÌM KIẾM MÃ GIẢNG VIÊN REALTIME
    const filteredTeachers = teachers.filter(t =>
        t.teacherCode.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang tải danh sách giảng viên...</div>;

    return (
        <div>
            <div className="page-header flex-between">
                <div>
                    <h2 className="page-header__title">Quản lý giảng viên</h2>
                    <p className="page-header__desc">Thêm, sửa, khóa/mở khóa hồ sơ giảng viên.</p>
                </div>
                <button type="button" onClick={() => { resetForm(); setShowModal(true); }} className="btn btn--success btn--sm">
                    + Thêm giảng viên
                </button>
            </div>

            {/* THANH TÌM KIẾM MÃ GIẢNG VIÊN */}
            <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>🔍 Tìm kiếm nhanh theo Mã giảng viên:</label>
                <input
                    type="text"
                    placeholder="Nhập mã số giảng viên cần tìm kiếm..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', maxWidth: '400px', padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none' }}
                />
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Giảng Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Khoa Chuyên Môn</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Email Giảng Dạy</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái hệ thống</th>
                    <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Hành Động Tác Vụ</th>
                </tr>
                </thead>
                <tbody>
                {filteredTeachers.map((t) => (
                    <tr key={t.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: t.active ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{t.teacherCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.lastName} {t.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{t.departmentName}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>{t.email}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {t.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang giảng dạy</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa tài khoản</span>}
                        </td>
                        <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <button onClick={() => handleOpenEdit(t)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', fontWeight: 'bold' }}>Sửa</button>
                            {t.active ? (
                                <button onClick={() => handleLockTeacher(t.id, t.teacherCode, t.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Khóa</button>
                            ) : (
                                <button onClick={() => handleUnlockTeacher(t.id, t.teacherCode, t.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Mở Khóa</button>
                            )}
                        </td>
                    </tr>
                ))}
                {filteredTeachers.length === 0 && (
                    <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>Không có dữ liệu giảng viên tương thích với từ khóa tìm kiếm.</td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* MODAL CẤP TÀI KHOẢN / SỬA HỒ SƠ */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>{isEditMode ? '📝 CẬP NHẬT HỒ SƠ GIẢNG VIÊN' : '✍️ THÊM MỚI HỒ SƠ GIẢNG VIÊN'}</h3>
                        {modalError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>{modalError}</div>}
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Mã Giảng Viên:</label><input type="text" placeholder="GV2026_01" value={teacherCode} onChange={(e) => setTeacherCode(e.target.value)} required disabled={isEditMode} style={inputStyle} /></div>

                                {/* Dropdown menu bốc từ khoa chuyên môn thật dưới DB */}
                                <div>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Khoa Chuyên Môn:</label>
                                    <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required disabled={isEditMode} style={inputStyle}>
                                        <option value="">{isEditMode ? '-- Không hoán đổi khoa --' : '-- Chọn khoa chuyên môn --'}</option>
                                        {departmentList.map(dept => <option key={dept.id} value={dept.id}>{dept.name} ({dept.code})</option>)}
                                    </select>
                                </div>

                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Họ Và Tên Đệm:</label><input type="text" placeholder="Trần Quốc" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Tên Giảng Viên:</label><input type="text" placeholder="Tuấn" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Số Điện Thoại:</label><input type="text" placeholder="0912345678" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>{isEditMode ? 'Lưu Thay Đổi' : 'Khởi Tạo & Cấp TK'}</button>
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
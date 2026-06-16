import React, { useState, useEffect, useRef } from 'react';
import axiosClient from '../api/axiosClient';
import { downloadExcel, uploadExcel } from '../api/excelClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

function TeacherPage() {
    const { notify, confirm } = useNotification();
    const importFileRef = useRef(null);
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalError, setModalError] = useState('');

    const [isEditMode, setIsEditMode] = useState(false);
    const [editingTeacherId, setEditingTeacherId] = useState('');

    const [teacherCode, setTeacherCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    const [departmentList, setDepartmentList] = useState([]);
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
        } catch (err) { console.error(err); } finally { setLoading(false); }
    };

    const fetchDepartmentList = async () => {
        try {
            const data = await axiosClient.get('/departments');
            setDepartmentList(data);
        } catch (err) { console.error(err); }
    };

    // ==================== 📂 XỬ LÝ NHẬP/XUẤT EXCEL ====================
    const handleExportTeachers = async () => {
        try {
            await downloadExcel('/teachers/export/excel?includeInactive=true', 'danh-sach-giang-vien.xlsx');
            notify.success('Đã xuất danh sách giảng viên ra file Excel!');
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể xuất Excel.')); }
    };

    const handleDownloadTemplate = async () => {
        try {
            await downloadExcel('/teachers/export/template', 'mau-nhap-giang-vien.xlsx');
            notify.success('Đã tải file mẫu nhập giảng viên!');
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể tải file mẫu.')); }
    };

    const handleImportTeachers = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = '';

        const ok = await confirm({ title: 'Nhập Excel giảng viên', message: `Nhập dữ liệu từ file "${file.name}"?`, confirmText: 'Nhập file', variant: 'primary' });
        if (!ok) return;

        try {
            const result = await uploadExcel('/teachers/import/excel', file);
            if (result.errorCount > 0) notify.warning(`Nhập xong: ${result.successCount} thành công, ${result.errorCount} lỗi. Vui lòng kiểm tra lại data.`);
            else notify.success(`Đã thêm thành công ${result.successCount} hồ sơ giảng viên!`);
            fetchTeachers();
        } catch (err) { notify.error(getErrorMessage(err, 'Nhập Excel thất bại!')); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalError('');
        if (isEditMode) {
            const payload = { firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber };
            try {
                await axiosClient.put(`/teachers/${editingTeacherId}`, payload);
                notify.success('Cập nhật hồ sơ giảng viên thành công!');
                setShowModal(false); resetForm(); fetchTeachers();
            } catch (err) { setModalError(getErrorMessage(err, 'Lỗi cập nhật.')); }
        } else {
            if (!departmentId) { setModalError('Vui lòng chọn Khoa chuyên môn!'); return; }
            const payload = { teacherCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, departmentId: Number(departmentId) };
            try {
                await axiosClient.post('/teachers', payload);
                notify.success(`Cấp TK giảng viên thành công!\nTài khoản: ${teacherCode}\nMật khẩu: password1234`);
                setShowModal(false); resetForm(); fetchTeachers();
            } catch (err) { setModalError(getErrorMessage(err, 'Lỗi khởi tạo.')); }
        }
    };

    const handleOpenEdit = (t) => {
        setIsEditMode(true); setEditingTeacherId(t.id); setTeacherCode(t.teacherCode);
        setFirstName(t.firstName); setLastName(t.lastName); setDateOfBirth(t.dateOfBirth || '');
        setGender(t.gender || 'Nam'); setPhoneNumber(t.phoneNumber || ''); setDepartmentId('');
        setShowModal(true);
    };

    const handleLockTeacher = async (id, code, name) => {
        const ok = await confirm({ title: 'Khóa giảng viên', message: `Khóa giảng viên [${code} — ${name}]?`, confirmText: 'Khóa', variant: 'danger' });
        if (!ok) return;
        try {
            await axiosClient.delete(`/teachers/${id}`);
            notify.success('Đã khóa tài khoản thành công!');
            fetchTeachers();
        } catch (err) { notify.error('Không thể khóa giảng viên!'); }
    };

    const handleUnlockTeacher = async (id, code, name) => {
        const ok = await confirm({ title: 'Mở khóa giảng viên', message: `Mở khóa cho [${code} — ${name}]?`, confirmText: 'Mở khóa', variant: 'success' });
        if (!ok) return;
        try {
            await axiosClient.put(`/teachers/${id}/enable`);
            notify.success('Mở khóa tài khoản thành công!');
            fetchTeachers();
        } catch (err) { notify.error('Không thể mở khóa!'); }
    };

    const resetForm = () => {
        setTeacherCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setDepartmentId(''); setModalError('');
        setIsEditMode(false); setEditingTeacherId('');
    };

    const filteredTeachers = teachers.filter(t => t.teacherCode.toLowerCase().includes(searchQuery.trim().toLowerCase()));

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang tải danh sách giảng viên...</div>;

    return (
        <div>
            <div className="page-header flex-between">
                <div>
                    <h2 className="page-header__title">Quản lý giảng viên</h2>
                    <p className="page-header__desc">Thêm, sửa, khóa/mở khóa hồ sơ giảng viên.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button type="button" onClick={handleExportTeachers} className="btn btn--outline btn--sm">Xuất Excel</button>
                    <button type="button" onClick={handleDownloadTemplate} className="btn btn--outline btn--sm">Tải mẫu nhập</button>
                    <button type="button" onClick={() => importFileRef.current?.click()} className="btn btn--primary btn--sm">Nhập Excel</button>
                    <input ref={importFileRef} type="file" accept=".xlsx,.xls" style={{ display: 'none' }} onChange={handleImportTeachers} />
                    <button type="button" onClick={() => { resetForm(); setShowModal(true); }} className="btn btn--success btn--sm">+ Thêm giảng viên</button>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>🔍 Tìm kiếm nhanh theo Mã giảng viên:</label>
                <input type="text" placeholder="Nhập mã số giảng viên cần tìm kiếm..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', maxWidth: '400px', padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none' }} />
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã GV</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Khoa</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Lớp Đang Cố Vấn</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Email Giảng Dạy</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái</th>
                    <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {filteredTeachers.map((t) => (
                    <tr key={t.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: t.active ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{t.teacherCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.lastName} {t.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)' }}>{t.departmentName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)', fontWeight: 'bold' }}>{t.advisorClasses || 'Không có'}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>{t.email}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{t.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang dạy</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa</span>}</td>
                        <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            <button onClick={() => handleOpenEdit(t)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}>Sửa</button>
                            {t.active ? <button onClick={() => handleLockTeacher(t.id, t.teacherCode, t.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Khóa</button> : <button onClick={() => handleUnlockTeacher(t.id, t.teacherCode, t.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Mở Khóa</button>}
                        </td>
                    </tr>
                ))}
                {filteredTeachers.length === 0 && (
                    <tr><td colSpan="8" style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>Không có dữ liệu.</td></tr>
                )}
                </tbody>
            </table>

            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>{isEditMode ? '📝 CẬP NHẬT HỒ SƠ' : '✍️ THÊM MỚI HỒ SƠ'}</h3>
                        {modalError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>{modalError}</div>}
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Mã Giảng Viên:</label><input type="text" placeholder="GV26001" value={teacherCode} onChange={(e) => setTeacherCode(e.target.value)} required disabled={isEditMode} style={inputStyle} /></div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Khoa Chuyên Môn:</label>
                                    <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required disabled={isEditMode} style={inputStyle}>
                                        <option value="">{isEditMode ? '-- Không hoán đổi khoa --' : '-- Chọn khoa --'}</option>
                                        {departmentList.map(dept => <option key={dept.id} value={dept.id}>{dept.name}</option>)}
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
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>{isEditMode ? 'Lưu Thay Đổi' : 'Thêm'}</button>
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
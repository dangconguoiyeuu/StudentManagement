import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

export default function AdministrativeClassPage() {
    const { notify, confirm } = useNotification();
    const [classes, setClasses] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [teachers, setTeachers] = useState([]);

    // Quản lý sinh viên của lớp đang được chọn
    const [selectedClass, setSelectedClass] = useState(null);
    const [students, setStudents] = useState([]);
    const [loadingStudents, setLoadingStudents] = useState(false);

    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({ name: '', departmentId: '', advisorTeacherId: '' });

    useEffect(() => {
        loadClasses();
        loadDepartments();
        loadTeachers();
    }, []);

    const loadClasses = async () => { try { setClasses(await axiosClient.get('/classes')); } catch(e){} };
    const loadDepartments = async () => { try { setDepartments(await axiosClient.get('/departments')); } catch(e){} };
    const loadTeachers = async () => { try { setTeachers(await axiosClient.get('/teachers')); } catch(e){} };

    const handleSelectClass = async (cls) => {
        setSelectedClass(cls);
        setLoadingStudents(true);
        try {
            const data = await axiosClient.get(`/classes/${cls.id}/students`);
            setStudents(data);
        } catch (e) { notify.error('Không thể nạp danh sách sinh viên lớp'); }
        setLoadingStudents(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const payload = {
            name: form.name.trim(),
            departmentId: Number(form.departmentId),
            advisorTeacherId: form.advisorTeacherId || null
        };
        try {
            if (isEditMode) {
                await axiosClient.put(`/classes/${editingId}`, payload);
                notify.success('Cập nhật lớp hành chính gốc thành công!');
            } else {
                await axiosClient.post('/classes', payload);
                notify.success('Tạo mới lớp hành chính thành công!');
            }
            resetForm();
            loadClasses();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const handleOpenEdit = (cls) => {
        setIsEditMode(true);
        setEditingId(cls.id);
        const deptObj = departments.find(d => d.code === cls.departmentCode);
        setForm({ name: cls.name, departmentId: deptObj ? deptObj.id : '', advisorTeacherId: cls.advisorTeacherId || '' });
    };

    const handleDelete = async (id, name) => {
        const ok = await confirm({
            title: 'Xóa lớp hành chính',
            message: `Bạn có chắc chắn muốn giải tán lớp hành chính [${name}]?\nHành động chỉ thực hiện được nếu lớp không còn sinh viên học tập.`,
            confirmText: 'Xóa lớp', variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/classes/${id}`);
            notify.success('Đã xóa lớp hành chính!');
            if (selectedClass?.id === id) { setSelectedClass(null); setStudents([]); }
            loadClasses();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const resetForm = () => {
        setIsEditMode(false); setEditingId(null);
        setForm({ name: '', departmentId: '', advisorTeacherId: '' });
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <div className="page-header">
                <h2 className="page-header__title">Quản lý lớp hành chính gốc</h2>
                <p className="page-header__desc">Khởi tạo lớp hành chính niên khóa, gán cố vấn học tập và theo dõi sĩ số sinh viên</p>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
                <form onSubmit={handleSave} style={formStyle}>
                    <h4>{isEditMode ? '📝 HIỆU CHỈNH LỚP HÀNH CHÍNH' : '➕ THÊM LỚP HÀNH CHÍNH GỐC'}</h4>
                    <div>
                        <label className="form-label">Tên lớp hành chính:</label>
                        <input type="text" placeholder="Ví dụ: D21CNPM1" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required style={inputStyle} />
                    </div>
                    <div>
                        <label className="form-label">Thuộc Khoa chủ quản:</label>
                        <select value={form.departmentId} onChange={e => setForm({...form, departmentId: e.target.value})} required style={inputStyle}>
                            <option value="">-- Chọn Khoa của lớp --</option>
                            {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="form-label">Gán Giảng viên cố vấn:</label>
                        <select value={form.advisorTeacherId} onChange={e => setForm({...form, advisorTeacherId: e.target.value})} style={inputStyle}>
                            <option value="">-- Chọn cố vấn học tập (Nếu có) --</option>
                            {teachers.map(t => <option key={t.id} value={t.id}>{t.lastName} {t.firstName} ({t.teacherCode})</option>)}
                        </select>
                    </div>
                    <div style={{display:'flex', gap:'10px', marginTop:'5px'}}>
                        <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật' : 'Thêm Mới'}</button>
                        {isEditMode && <button type="button" onClick={resetForm} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy</button>}
                    </div>
                </form>

                <div style={{ flex: 1, minWidth: '400px' }}>
                    <table style={tableStyle}>
                        <thead>
                        <tr style={thStyle}><th>Tên lớp hành chính</th><th>Khoa đào tạo</th><th>Giảng viên cố vấn</th><th style={{textAlign:'center'}}>Tác vụ quản trị</th></tr>
                        </thead>
                        <tbody>
                        {classes.map(c => {
                            const isSelected = selectedClass?.id === c.id;
                            return (
                                <tr key={c.id} onClick={() => handleSelectClass(c)} style={{ ...trStyle, cursor: 'pointer', backgroundColor: isSelected ? 'rgba(13, 110, 253, 0.12)' : 'transparent' }}>
                                    <td style={{ fontWeight: 'bold', color: 'var(--text-cyan)' }}>👉 {c.name}</td>
                                    <td>{c.departmentName}</td>
                                    <td style={{ color: 'var(--color-warning)', fontWeight: '500' }}>{c.advisorTeacherName || <span style={{color:'var(--text-muted)', fontWeight:'normal'}}>Chưa phân công</span>}</td>
                                    <td style={{ textAlign: 'center' }} onClick={e => e.stopPropagation()}>
                                        <button onClick={() => handleOpenEdit(c)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDelete(c.id, c.name)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* KHỐI HIỂN THỊ CHI TIẾT SINH VIÊN KHI CLICK CHỌN DÒNG LỚP */}
            {selectedClass && (
                <div style={{ backgroundColor: 'var(--color-surface)', padding: '20px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ marginTop: 0, color: 'var(--text-cyan)', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                        👥 DANH SÁCH SINH VIÊN CHÍNH THỨC LỚP: {selectedClass.name} <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>({students.length} nhân sự)</span>
                    </h3>
                    {loadingStudents ? <p style={{color:'var(--text-muted)'}}>Đang truy vấn hồ sơ...</p> : (
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}><th>Mã Sinh Viên</th><th>Họ và tên lót</th><th>Tên gọi</th><th>Giới tính</th><th>Số điện thoại</th><th>Khóa học</th></tr>
                            </thead>
                            <tbody>
                            {students.map(s => (
                                <tr key={s.id} style={trStyle}>
                                    <td style={{ fontWeight: 'bold', color: 'var(--color-warning)' }}>{s.studentCode}</td>
                                    <td>{s.lastName}</td>
                                    <td>{s.firstName}</td>
                                    <td>{s.gender}</td>
                                    <td>{s.phoneNumber || '-'}</td>
                                    <td><span className="badge badge--success">{s.cohort}</span></td>
                                </tr>
                            ))}
                            {students.length === 0 && (
                                <tr><td colSpan="6" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Lớp hành chính trống, chưa được thêm sinh viên nhập học.</td></tr>
                            )}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}

const formStyle = { width: '330px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' };
const inputStyle = { width:'100%', padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const submitBtnStyle = { padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', flex: 1 };
const actionBtnStyle = { padding: '3px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px', marginRight: '4px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };
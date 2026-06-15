import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

export default function SubjectPage() {
    const { notify, confirm } = useNotification();
    const [subjects, setSubjects] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({ code: '', name: '', credits: 3 });
    const [loading, setLoading] = useState(false);

    useEffect(() => { loadSubjects(); }, []);

    const loadSubjects = async () => {
        setLoading(true);
        try {
            const data = await axiosClient.get('/subjects');
            setSubjects(data);
        } catch (e) { notify.error('Lỗi tải danh sách môn học'); }
        setLoading(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const payload = { ...form, credits: Number(form.credits) };
        try {
            if (isEditMode) {
                await axiosClient.put(`/subjects/${editingId}`, payload);
                notify.success('Cập nhật môn học thành công!');
            } else {
                await axiosClient.post('/subjects', payload);
                notify.success('Thêm môn học hệ thống mới thành công!');
            }
            resetForm();
            loadSubjects();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const handleOpenEdit = (sub) => {
        setIsEditMode(true);
        setEditingId(sub.id);
        setForm({ code: sub.code, name: sub.name, credits: sub.credits });
    };

    const handleDelete = async (id, name) => {
        const ok = await confirm({
            title: 'Xóa môn học',
            message: `Bạn có chắc chắn muốn xóa môn học [${name}] khỏi hệ thống?`,
            confirmText: 'Xóa môn học',
            variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/subjects/${id}`);
            notify.success('Đã xóa môn học thành công!');
            loadSubjects();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể xóa môn học này!')); }
    };

    const resetForm = () => {
        setIsEditMode(false);
        setEditingId(null);
        setForm({ code: '', name: '', credits: 3 });
    };

    return (
        <div>
            <div className="page-header">
                <h2 className="page-header__title">Quản lý môn học</h2>
                <p className="page-header__desc">Cấu hình danh mục môn học, số tín chỉ đào tạo hệ thống</p>
            </div>
            {loading ? <p style={{color:'var(--text-muted)'}}>Đang tải dữ liệu môn học...</p> : (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSave} style={formStyle}>
                        <h4>{isEditMode ? '📝 HIỆU CHỈNH THÔNG TIN MÔN' : '➕ THÊM MÔN HỌC HỆ THỐNG'}</h4>
                        <input type="text" placeholder="Mã Môn Học (VD: INT3110)" value={form.code} onChange={e => setForm({...form, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                        <input type="text" placeholder="Tên Môn Học (VD: Lập trình Spring Boot)" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required style={inputStyle} />
                        <input type="number" placeholder="Số tín chỉ" value={form.credits} onChange={e => setForm({...form, credits: e.target.value})} required style={inputStyle} min="1" />
                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật' : 'Thêm Mới'}</button>
                            {isEditMode && <button type="button" onClick={resetForm} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy</button>}
                        </div>
                    </form>
                    <div style={{ flex: 1, minWidth: '350px' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}><th>ID</th><th>Mã Môn</th><th>Tên Môn Học</th><th>Tín Chỉ</th><th style={{textAlign:'center'}}>Hành Động</th></tr>
                            </thead>
                            <tbody>
                            {subjects.map(s => (
                                <tr key={s.id} style={trStyle}>
                                    <td>{s.id}</td>
                                    <td style={{color:'var(--color-warning)', fontWeight:'bold'}}>{s.code}</td>
                                    <td>{s.name}</td>
                                    <td><span className="badge badge--info">{s.credits} tín chỉ</span></td>
                                    <td style={{textAlign:'center'}}>
                                        <button onClick={() => handleOpenEdit(s)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDelete(s.id, s.name)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

const formStyle = { width: '320px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' };
const inputStyle = { padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const submitBtnStyle = { padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', flex: 1 };
const actionBtnStyle = { padding: '3px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px', marginRight: '4px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };
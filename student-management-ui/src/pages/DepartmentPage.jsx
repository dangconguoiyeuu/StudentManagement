import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

export default function DepartmentPage() {
    const { notify, confirm } = useNotification();
    const [departments, setDepartments] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({ code: '', name: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => { loadDepartments(); }, []);

    const loadDepartments = async () => {
        setLoading(true);
        try {
            const data = await axiosClient.get('/departments');
            setDepartments(data);
        } catch (e) { notify.error('Lỗi tải danh sách khoa'); }
        setLoading(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axiosClient.put(`/departments/${editingId}`, form);
                notify.success('Cập nhật thông tin khoa thành công!');
            } else {
                await axiosClient.post('/departments', form);
                notify.success('Thêm khoa chuyên môn mới thành công!');
            }
            resetForm();
            loadDepartments();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const handleOpenEdit = (dept) => {
        setIsEditMode(true);
        setEditingId(dept.id);
        setForm({ code: dept.code, name: dept.name });
    };

    const handleDelete = async (id, name) => {
        const ok = await confirm({
            title: 'Xóa khoa',
            message: `Bạn có chắc chắn muốn xóa khoa [${name}]?\nHành động này có thể ảnh hưởng đến giảng viên thuộc khoa.`,
            confirmText: 'Xóa khoa',
            variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/departments/${id}`);
            notify.success('Đã xóa khoa khỏi hệ thống!');
            loadDepartments();
        } catch (err) {
            notify.error(getErrorMessage(err, 'Không thể xóa khoa do có ràng buộc dữ liệu!'));
        }
    };

    const resetForm = () => {
        setIsEditMode(false);
        setEditingId(null);
        setForm({ code: '', name: '' });
    };

    return (
        <div>
            <div className="page-header">
                <h2 className="page-header__title">Quản lý khoa chuyên môn</h2>
                <p className="page-header__desc">Quản lý danh mục các khoa và phòng ban đào tạo toàn trường</p>
            </div>
            {loading ? <p style={{color:'var(--text-muted)'}}>Đang đồng bộ dữ liệu...</p> : (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSave} style={formStyle}>
                        <h4>{isEditMode ? '📝 HIỆU CHỈNH THÔNG TIN KHOA' : '➕ THÊM KHOA CHUYÊN MÔN MỚI'}</h4>
                        <input type="text" placeholder="Mã Khoa (VD: CNTT)" value={form.code} onChange={e => setForm({...form, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                        <input type="text" placeholder="Tên Khoa (VD: Công nghệ thông tin)" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required style={inputStyle} />
                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật' : 'Thêm Mới'}</button>
                            {isEditMode && <button type="button" onClick={resetForm} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy</button>}
                        </div>
                    </form>
                    <div style={{ flex: 1, minWidth: '350px' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}><th>ID</th><th>Mã Khoa</th><th>Tên Khoa</th><th style={{textAlign:'center'}}>Hành Động</th></tr>
                            </thead>
                            <tbody>
                            {departments.map(d => (
                                <tr key={d.id} style={trStyle}>
                                    <td>{d.id}</td>
                                    <td style={{color:'var(--text-cyan)', fontWeight:'bold'}}>{d.code}</td>
                                    <td>{d.name}</td>
                                    <td style={{textAlign:'center'}}>
                                        <button onClick={() => handleOpenEdit(d)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDelete(d.id, d.name)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
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

// Style dùng chung đồng bộ layout CSS gốc của bạn
const formStyle = { width: '320px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' };
const inputStyle = { padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const submitBtnStyle = { padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', flex: 1 };
const actionBtnStyle = { padding: '3px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px', marginRight: '4px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };
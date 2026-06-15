import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

export default function CourseClassPage() {
    const { notify, confirm } = useNotification();
    const [activeTab, setActiveTab] = useState('info'); // 'info' hoặc 'schedule'
    const [courseClasses, setCourseClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);

    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [classForm, setClassForm] = useState({ code: '', semester: 'HK1-2026', subjectId: '', teacherId: '', maxStudents: 60 });
    const [scheduleSlots, setScheduleSlots] = useState([{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]);

    const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
    const shifts = ['Sáng (Tiết 1-4)', 'Chiều (Tiết 5-8)', 'Tối (Tiết 9-12)'];

    useEffect(() => {
        loadCourseClasses();
        loadSubjects();
        loadTeachers();
    }, []);

    const loadCourseClasses = async () => { try { setCourseClasses(await axiosClient.get('/course-classes')); } catch(e){} };
    const loadSubjects = async () => { try { setSubjects(await axiosClient.get('/subjects')); } catch(e){} };
    const loadTeachers = async () => { try { setTeachers(await axiosClient.get('/teachers')); } catch(e){} };

    const parseScheduleToSlots = (scheduleStr) => {
        if (!scheduleStr) return [{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }];
        try {
            return scheduleStr.split(' | ').map(part => {
                const subParts = part.split(' - ');
                const dayShift = subParts[0];
                const roomPart = subParts[1] || '';
                const roomValue = roomPart.replace('Phòng ', '').trim();
                const foundDay = daysOfWeek.find(d => dayShift.startsWith(d)) || 'Thứ 2';
                const shiftValue = dayShift.replace(foundDay, '').trim();
                return { day: foundDay, shift: shiftValue || 'Sáng (Tiết 1-4)', room: roomValue };
            });
        } catch (e) { return [{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]; }
    };

    const handleAddSlot = () => setScheduleSlots([...scheduleSlots, { day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]);
    const handleRemoveSlot = (idx) => { if (scheduleSlots.length > 1) setScheduleSlots(scheduleSlots.filter((_, i) => i !== idx)); };
    const handleSlotChange = (index, field, value) => {
        const updated = [...scheduleSlots];
        updated[index][field] = value;
        setScheduleSlots(updated);
    };

    const handleSaveClass = async (e) => {
        e.preventDefault();
        for (let slot of scheduleSlots) {
            if (!slot.room.trim()) { notify.warning('Vui lòng điền đầy đủ phòng học cho lịch!'); return; }
        }
        const compiledSchedule = scheduleSlots.map(s => `${slotDay(s.day)} ${s.shift} - Phòng ${s.room.trim()}`).join(' | ');
        const payload = { ...classForm, subjectId: Number(classForm.subjectId), maxStudents: Number(classForm.maxStudents), schedule: compiledSchedule };

        try {
            if (isEditMode) {
                await axiosClient.put(`/course-classes/${editingId}`, payload);
                notify.success('Cập nhật lớp học phần thành công!');
            } else {
                await axiosClient.post('/course-classes', payload);
                notify.success('Mở lớp học phần mới thành công!');
            }
            resetForm();
            loadCourseClasses();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const slotDay = (d) => d;

    const handleOpenEdit = (cls) => {
        setIsEditMode(true);
        setEditingId(cls.id);
        setClassForm({ code: cls.code, semester: cls.semester, subjectId: cls.subjectId || '', teacherId: cls.teacherId || '', maxStudents: cls.maxStudents || 60 });
        setScheduleSlots(parseScheduleToSlots(cls.schedule));
        setActiveTab('info');
    };

    const handleDeleteClass = async (id, code) => {
        const ok = await confirm({
            title: 'Xóa lớp học phần',
            message: `Bạn có chắc chắn muốn xóa lớp học phần [${code}]?`,
            confirmText: 'Xóa lớp', variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/course-classes/${id}`);
            notify.success('Đã xóa lớp học phần!');
            loadCourseClasses();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const resetForm = () => {
        setIsEditMode(false); setEditingId(null);
        setClassForm({ code: '', semester: 'HK1-2026', subjectId: '', teacherId: '', maxStudents: 60 });
        setScheduleSlots([{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]);
        setActiveTab('info');
    };

    return (
        <div>
            <div className="page-header">
                <h2 className="page-header__title">Quản lý lớp học phần & Tích hợp lịch</h2>
                <p className="page-header__desc">Điều phối danh sách lớp học phần và xếp thời khóa biểu không trùng lặp lịch dạy</p>
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ width: '460px', backgroundColor: 'var(--color-surface)', padding: '16px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', marginBottom: '15px' }}>
                        <button type="button" onClick={() => setActiveTab('info')} style={{ ...tabBtnStyle, borderBottom: activeTab === 'info' ? '2px solid var(--text-cyan)' : 'none', color: activeTab === 'info' ? 'var(--text-cyan)' : 'var(--text-muted)' }}>Tab 1: Thông tin học phần</button>
                        <button type="button" onClick={() => setActiveTab('schedule')} style={{ ...tabBtnStyle, borderBottom: activeTab === 'schedule' ? '2px solid var(--text-cyan)' : 'none', color: activeTab === 'schedule' ? 'var(--text-cyan)' : 'var(--text-muted)' }}>Tab 2: Lịch học chi tiết</button>
                    </div>
                    <form onSubmit={handleSaveClass} style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                        {activeTab === 'info' ? (
                            <>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    <div><label className="form-label">Mã lớp HP:</label><input type="text" placeholder="LHP_CNPM_01" value={classForm.code} onChange={e => setClassForm({...classForm, code: e.target.value})} required style={inputStyle} disabled={isEditMode} /></div>
                                    <div><label className="form-label">Học kỳ:</label><input type="text" placeholder="HK1-2026" value={classForm.semester} onChange={e => setClassForm({...classForm, semester: e.target.value})} required style={inputStyle} /></div>
                                </div>
                                <div>
                                    <label className="form-label">Chọn Môn học:</label>
                                    <select value={classForm.subjectId} onChange={e => setClassForm({...classForm, subjectId: e.target.value})} required style={inputStyle}>
                                        <option value="">-- Chọn Môn Học --</option>
                                        {subjects.map(s => <option key={s.id} value={s.id}>{s.name} ({s.code})</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label">Chọn Giảng viên dạy:</label>
                                    <select value={classForm.teacherId} onChange={e => setClassForm({...classForm, teacherId: e.target.value})} style={inputStyle}>
                                        <option value="">-- Chưa phân công giảng dạy --</option>
                                        {teachers.map(t => <option key={t.id} value={t.id}>{t.lastName} {t.firstName} ({t.teacherCode})</option>)}
                                    </select>
                                </div>
                                <div><label className="form-label">Sĩ số tối đa:</label><input type="number" value={classForm.maxStudents} onChange={e => setClassForm({...classForm, maxStudents: e.target.value})} required style={inputStyle} min="1" /></div>
                            </>
                        ) : (
                            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <label style={{ fontSize: '13px', fontWeight: 'bold' }}>📆 Khung thời gian học phần:</label>
                                    <button type="button" onClick={handleAddSlot} style={addBtnStyle}>+ Thêm buổi</button>
                                </div>
                                {scheduleSlots.map((slot, idx) => (
                                    <div key={idx} style={slotRowStyle}>
                                        <select value={slot.day} onChange={e => handleSlotChange(idx, 'day', e.target.value)} style={{ ...inputStyle, padding: '5px', fontSize: '12px', flex: 1 }}>
                                            {daysOfWeek.map(d => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                        <select value={slot.shift} onChange={e => handleSlotChange(idx, 'shift', e.target.value)} style={{ ...inputStyle, padding: '5px', fontSize: '12px', flex: 1.5 }}>
                                            {shifts.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                        <input type="text" placeholder="Phòng" value={slot.room} onChange={e => handleSlotChange(idx, 'room', e.target.value)} required style={{ ...inputStyle, padding: '5px', fontSize: '12px', width: '70px' }} />
                                        <button type="button" onClick={() => handleRemoveSlot(idx)} disabled={scheduleSlots.length === 1} style={delSlotBtnStyle}>Xóa</button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật Lớp' : 'Mở Lớp HP'}</button>
                            <button type="button" onClick={resetForm} style={{ ...submitBtnStyle, backgroundColor: '#6c757d' }}>Làm mới</button>
                        </div>
                    </form>
                </div>

                <div style={{ flex: 1, minWidth: '450px' }}>
                    <table style={tableStyle}>
                        <thead>
                        <tr style={thStyle}><th>Mã Lớp HP</th><th>Môn Học</th><th>Giảng Viên</th><th>Thời Khóa Biểu Hệ Thống</th><th style={{textAlign:'center'}}>Hành Động</th></tr>
                        </thead>
                        <tbody>
                        {courseClasses.map(c => (
                            <tr key={c.id} style={trStyle}>
                                <td style={{fontWeight:'bold', color:'var(--text-cyan)'}}>{c.code}</td>
                                <td>{c.subjectName}</td>
                                <td>{c.teacherName || <span style={{color:'var(--text-muted)'}}>Chưa xếp</span>}</td>
                                <td style={{color:'var(--color-warning)', fontWeight:'bold', fontSize: '12px'}}>{c.schedule || 'Chưa xếp lịch'}</td>
                                <td style={{textAlign:'center'}}>
                                    <button onClick={() => handleOpenEdit(c)} style={actionBtnStyle}>Sửa</button>
                                    <button onClick={() => handleDeleteClass(c.id, c.code)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const tabBtnStyle = { padding: '10px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' };
const inputStyle = { width: '100%', padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const addBtnStyle = { padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' };
const slotRowStyle = { display: 'flex', gap: '6px', alignItems: 'center', backgroundColor: 'var(--color-bg)', padding: '6px', borderRadius: '4px', border: '1px solid var(--color-border)' };
const delSlotBtnStyle = { padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' };
const submitBtnStyle = { padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', flex: 1 };
const actionBtnStyle = { padding: '3px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px', marginRight: '4px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };
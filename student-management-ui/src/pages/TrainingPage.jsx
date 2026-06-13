import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

function TrainingPage() {
    const { notify, confirm } = useNotification();
    const [subTab, setSubTab] = useState('departments');
    const [departments, setDepartments] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [courseClasses, setCourseClasses] = useState([]);
    const [teachers, setTeachers] = useState([]);

    // --- TRẠNG THÁI CHẾ ĐỘ SỬA (EDIT MODE STATES) ---
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Form states
    const [deptForm, setDeptForm] = useState({ code: '', name: '' });
    const [subjectForm, setSubjectForm] = useState({ code: '', name: '', credits: 3 });
    const [classForm, setClassForm] = useState({ code: '', semester: 'HK1-2026', subjectId: '', teacherId: '', maxStudents: 60 });

    // Quản lý danh sách các buổi học động
    const [scheduleSlots, setScheduleSlots] = useState([
        { day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }
    ]);

    const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
    const shifts = ['Sáng (Tiết 1-4)', 'Chiều (Tiết 5-8)', 'Tối (Tiết 9-12)'];

    useEffect(() => {
        loadDepartments();
        loadSubjects();
        loadCourseClasses();
        loadTeachers();
    }, []);

    // Mỗi khi chuyển đổi tiểu ban (subTab), tự động hủy trạng thái sửa cũ để tránh xung đột form
    useEffect(() => {
        resetAllForms();
    }, [subTab]);

    const loadDepartments = async () => { try { const data = await axiosClient.get('/departments'); setDepartments(data); } catch (e) { console.error(e); } };
    const loadSubjects = async () => { try { const data = await axiosClient.get('/subjects'); setSubjects(data); } catch (e) { console.error(e); } };
    const loadCourseClasses = async () => { try { const data = await axiosClient.get('/course-classes'); setCourseClasses(data); } catch (e) { console.error(e); } };
    const loadTeachers = async () => { try { const data = await axiosClient.get('/teachers'); setTeachers(data); } catch (e) { console.error(e); } };

    const resetAllForms = () => {
        setIsEditMode(false);
        setEditingId(null);
        setDeptForm({ code: '', name: '' });
        setSubjectForm({ code: '', name: '', credits: 3 });
        setClassForm({ code: '', semester: 'HK1-2026', subjectId: '', teacherId: '', maxStudents: 60 });
        setScheduleSlots([{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]);
    };

    // --- THUẬT TOÁN ĐỌC NGƯỢC CHUỖI LỊCH (SCHEDULE DECODER) ---
    // Biến đổi chuỗi "Thứ 2 Sáng (Tiết 1-4) - Phòng 402 | Thứ 6 Chiều (Tiết 5-8) - Phòng 301" thành mảng Object cấu trúc ban đầu
    const parseScheduleToSlots = (scheduleStr) => {
        if (!scheduleStr) return [{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }];
        try {
            const parts = scheduleStr.split(' | ');
            return parts.map(part => {
                const subParts = part.split(' - ');
                const dayShift = subParts[0]; // "Thứ 2 Sáng (Tiết 1-4)"
                const roomPart = subParts[1] || ''; // "Phòng 402"

                const roomValue = roomPart.replace('Phòng ', '').trim();
                const foundDay = daysOfWeek.find(d => dayShift.startsWith(d)) || 'Thứ 2';
                const shiftValue = dayShift.replace(foundDay, '').trim();

                return { day: foundDay, shift: shiftValue || 'Sáng (Tiết 1-4)', room: roomValue };
            });
        } catch (e) {
            return [{ day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }];
        }
    };

    // --- TÁC VỤ CHO LỊCH ĐỘNG ---
    const handleAddSlot = () => setScheduleSlots([...scheduleSlots, { day: 'Thứ 2', shift: 'Sáng (Tiết 1-4)', room: '' }]);
    const handleRemoveSlot = (index) => {
        if (scheduleSlots.length === 1) return;
        setScheduleSlots(scheduleSlots.filter((_, i) => i !== index));
    };
    const handleSlotChange = (index, field, value) => {
        const updatedSlots = [...scheduleSlots];
        updatedSlots[index][field] = value;
        setScheduleSlots(updatedSlots);
    };

    // ==================== 🏛️ XỬ LÝ KHỐI KHOA (DEPARTMENTS) ====================
    const handleSaveDept = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axiosClient.put(`/departments/${editingId}`, deptForm);
                notify.success('Cập nhật thông tin khoa thành công!');
            } else {
                await axiosClient.post('/departments', deptForm);
                notify.success('Thêm khoa chuyên môn mới thành công!');
            }
            resetAllForms();
            loadDepartments();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const handleOpenEditDept = (dept) => {
        setIsEditMode(true);
        setEditingId(dept.id);
        setDeptForm({ code: dept.code, name: dept.name });
    };

    const handleDeleteDept = async (id, name) => {
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
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể xóa khoa do có ràng buộc dữ liệu!')); }
    };

    // ==================== 📘 XỬ LÝ KHỐI MÔN HỌC (SUBJECTS) ====================
    const handleSaveSubject = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axiosClient.put(`/subjects/${editingId}`, subjectForm);
                notify.success('Cập nhật thông tin môn học thành công!');
            } else {
                await axiosClient.post('/subjects', subjectForm);
                notify.success('Thêm môn học mới thành công!');
            }
            resetAllForms();
            loadSubjects();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const handleOpenEditSubject = (sub) => {
        setIsEditMode(true);
        setEditingId(sub.id);
        setSubjectForm({ code: sub.code, name: sub.name, credits: sub.credits });
    };

    const handleDeleteSubject = async (id, name) => {
        const ok = await confirm({
            title: 'Xóa môn học',
            message: `Bạn có chắc chắn muốn xóa môn học [${name}]?`,
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

    // ==================== 📅 XỬ LÝ KHỐI LỚP HỌC PHẦN (COURSE CLASSES) ====================
    const handleSaveClass = async (e) => {
        e.preventDefault();
        for (let slot of scheduleSlots) {
            if (!slot.room.trim()) { notify.warning('Vui lòng điền phòng học cho tất cả các buổi!'); return; }
        }

        const compiledSchedule = scheduleSlots
            .map(slot => `${slot.day} ${slot.shift} - Phòng ${slot.room.trim()}`)
            .join(' | ');

        const payload = {
            ...classForm,
            subjectId: Number(classForm.subjectId),
            maxStudents: Number(classForm.maxStudents),
            schedule: compiledSchedule
        };

        try {
            if (isEditMode) {
                await axiosClient.put(`/course-classes/${editingId}`, payload);
                notify.success('Cập nhật lớp học phần và thời khóa biểu thành công!');
            } else {
                await axiosClient.post('/course-classes', payload);
                notify.success('Mở lớp học phần mới thành công!');
            }
            resetAllForms();
            loadCourseClasses();
        } catch (err) { notify.error(getErrorMessage(err)); }
    };

    const handleOpenEditClass = (cls) => {
        setIsEditMode(true);
        setEditingId(cls.id);
        setClassForm({
            code: cls.code,
            semester: cls.semester,
            subjectId: cls.subjectId || '',
            teacherId: cls.teacherId || '',
            maxStudents: cls.maxStudents || 60
        });
        // Giải mã chuỗi schedule ngược lại thành dạng mảng ô checkbox tương tác
        setScheduleSlots(parseScheduleToSlots(cls.schedule));
    };

    const handleDeleteClass = async (id, code) => {
        const ok = await confirm({
            title: 'Xóa lớp học phần',
            message: `Bạn có chắc chắn muốn hủy và xóa lớp học phần [${code}]?\nTất cả lịch học và danh sách sinh viên đăng ký sẽ bị hủy.`,
            confirmText: 'Xóa lớp',
            variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/course-classes/${id}`);
            notify.success('Đã xóa lớp học phần khỏi hệ thống!');
            loadCourseClasses();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể xóa lớp học phần này!')); }
    };

    return (
        <div>
            <div className="page-header">
                <h2 className="page-header__title">Quản lý đào tạo</h2>
                <p className="page-header__desc">Quản lý khoa, môn học, lớp học phần và thời khóa biểu</p>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={() => setSubTab('departments')} style={{ ...subTabBtn, backgroundColor: subTab === 'departments' ? 'var(--color-primary)' : 'var(--color-surface)' }}>Quản Lý Khoa</button>
                <button onClick={() => setSubTab('subjects')} style={{ ...subTabBtn, backgroundColor: subTab === 'subjects' ? 'var(--color-primary)' : 'var(--color-surface)' }}>Quản Lý Môn Học</button>
                <button onClick={() => setSubTab('classes')} style={{ ...subTabBtn, backgroundColor: subTab === 'classes' ? 'var(--color-primary)' : 'var(--color-surface)' }}>Lớp Học Phần & Xếp Lịch</button>
            </div>

            {/* PHÂN HỆ QUẢN LÝ KHOA */}
            {subTab === 'departments' && (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSaveDept} style={formStyle}>
                        <h4>{isEditMode ? '📝 HIỆU CHỈNH THÔNG TIN KHOA' : '➕ THÊM KHOA CHUYÊN MÔN MỚI'}</h4>
                        <input type="text" placeholder="Mã Khoa (VD: CNTT)" value={deptForm.code} onChange={e => setDeptForm({...deptForm, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                        <input type="text" placeholder="Tên Khoa (VD: Công nghệ thông tin)" value={deptForm.name} onChange={e => setDeptForm({...deptForm, name: e.target.value})} required style={inputStyle} />
                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật' : 'Thêm Mới'}</button>
                            {isEditMode && <button type="button" onClick={resetAllForms} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy</button>}
                        </div>
                    </form>
                    <div style={{ flex: 1, minWidth: '350px' }}>
                        <table style={tableStyle}>
                            <thead><tr style={thStyle}><th>ID</th><th>Mã Khoa</th><th>Tên Khoa</th><th style={{textAlign:'center'}}>Hành Động</th></tr></thead>
                            <tbody>
                            {departments.map(d => (
                                <tr key={d.id} style={trStyle}>
                                    <td>{d.id}</td><td style={{color:'var(--text-cyan)', fontWeight:'bold'}}>{d.code}</td><td>{d.name}</td>
                                    <td style={{textAlign:'center'}}>
                                        <button onClick={() => handleOpenEditDept(d)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDeleteDept(d.id, d.name)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* PHÂN HỆ QUẢN LÝ MÔN HỌC */}
            {subTab === 'subjects' && (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSaveSubject} style={formStyle}>
                        <h4>{isEditMode ? '📝 HIỆU CHỈNH THÔNG TIN MÔN' : '➕ THÊM MÔN HỌC HỆ THỐNG'}</h4>
                        <input type="text" placeholder="Mã Môn Học (VD: INT3110)" value={subjectForm.code} onChange={e => setSubjectForm({...subjectForm, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                        <input type="text" placeholder="Tên Môn Học (VD: Lập trình Spring Boot)" value={subjectForm.name} onChange={e => setSubjectForm({...subjectForm, name: e.target.value})} required style={inputStyle} />
                        <input type="number" placeholder="Số tín chỉ" value={subjectForm.credits} onChange={e => setSubjectForm({...subjectForm, credits: e.target.value})} required style={inputStyle} />
                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật' : 'Thêm Mới'}</button>
                            {isEditMode && <button type="button" onClick={resetAllForms} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy</button>}
                        </div>
                    </form>
                    <div style={{ flex: 1, minWidth: '350px' }}>
                        <table style={tableStyle}>
                            <thead><tr style={thStyle}><th>ID</th><th>Mã Môn</th><th>Tên Môn Học</th><th>Tín Chỉ</th><th style={{textAlign:'center'}}>Hành Động</th></tr></thead>
                            <tbody>
                            {subjects.map(s => (
                                <tr key={s.id} style={trStyle}>
                                    <td>{s.id}</td><td style={{color:'var(--color-warning)', fontWeight:'bold'}}>{s.code}</td><td>{s.name}</td><td>{s.credits} tín</td>
                                    <td style={{textAlign:'center'}}>
                                        <button onClick={() => handleOpenEditSubject(s)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDeleteSubject(s.id, s.name)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* PHÂN HỆ LỚP HỌC PHẦN ĐAN XEN BUỔI ĐỘNG */}
            {subTab === 'classes' && (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <form onSubmit={handleSaveClass} style={{ ...formStyle, width: '460px' }}>
                        <h4>{isEditMode ? '📝 ĐIỀU CHỈNH LỚP HỌC PHẦN & LỊCH BIỂU' : '📅 MỞ LỚP HỌC PHẦN & XẾP LỊCH TRÌNH'}</h4>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <input type="text" placeholder="Mã Lớp HP (VD: LHP_CNPM_01)" value={classForm.code} onChange={e => setClassForm({...classForm, code: e.target.value})} required style={inputStyle} disabled={isEditMode} />
                            <input type="text" placeholder="Học kỳ (VD: HK1-2026)" value={classForm.semester} onChange={e => setClassForm({...classForm, semester: e.target.value})} required style={inputStyle} />
                        </div>

                        <select value={classForm.subjectId} onChange={e => setClassForm({...classForm, subjectId: e.target.value})} required style={inputStyle}>
                            <option value="">-- Chọn Môn Học --</option>
                            {subjects.map(s => <option key={s.id} value={s.id}>{s.name} ({s.code})</option>)}
                        </select>

                        <select value={classForm.teacherId} onChange={e => setClassForm({...classForm, teacherId: e.target.value})} required style={inputStyle}>
                            <option value="">-- Chọn Giảng Viên Đứng Lớp --</option>
                            {teachers.map(t => <option key={t.id} value={t.id}>{t.lastName} {t.firstName} ({t.teacherCode})</option>)}
                        </select>

                        <input type="number" placeholder="Sĩ số tối đa" value={classForm.maxStudents} onChange={e => setClassForm({...classForm, maxStudents: e.target.value})} required style={inputStyle} />

                        {/* Cấu phần buổi học động */}
                        <div style={{ padding: '12px', backgroundColor: 'var(--color-bg)', borderRadius: '6px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-cyan)' }}>📆 Cấu hình chi tiết các buổi học:</label>
                                <button type="button" onClick={handleAddSlot} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>
                                    + Thêm buổi học
                                </button>
                            </div>

                            {scheduleSlots.map((slot, index) => (
                                <div key={index} style={{ display: 'flex', gap: '6px', alignItems: 'center', backgroundColor: 'var(--color-surface)', padding: '8px', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                                    <select value={slot.day} onChange={e => handleSlotChange(index, 'day', e.target.value)} style={{ ...inputStyle, padding: '5px', fontSize: '12px', flex: 1 }}>
                                        {daysOfWeek.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>

                                    <select value={slot.shift} onChange={e => handleSlotChange(index, 'shift', e.target.value)} style={{ ...inputStyle, padding: '5px', fontSize: '12px', flex: 1.5 }}>
                                        {shifts.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>

                                    <input type="text" placeholder="Phòng" value={slot.room} onChange={e => handleSlotChange(index, 'room', e.target.value)} required style={{ ...inputStyle, padding: '5px', fontSize: '12px', width: '80px' }} />

                                    <button type="button" onClick={() => handleRemoveSlot(index)} disabled={scheduleSlots.length === 1} style={{ padding: '5px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                                        Xóa
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div style={{display:'flex', gap:'10px'}}>
                            <button type="submit" style={submitBtnStyle}>{isEditMode ? 'Cập Nhật Lớp' : 'Mở Lớp Học Phần'}</button>
                            {isEditMode && <button type="button" onClick={resetAllForms} style={{...submitBtnStyle, backgroundColor:'#6c757d'}}>Hủy bỏ</button>}
                        </div>
                    </form>

                    <div style={{ flex: 1, minWidth: '450px' }}>
                        <table style={tableStyle}>
                            <thead><tr style={thStyle}><th>Mã Lớp HP</th><th>Môn Học</th><th>Giảng Viên</th><th>Thời Khóa Biểu Đồng Bộ</th><th style={{textAlign:'center'}}>Hành Động</th></tr></thead>
                            <tbody>
                            {courseClasses.map(c => (
                                <tr key={c.id} style={trStyle}>
                                    <td style={{fontWeight:'bold', color:'var(--text-cyan)'}}>{c.code}</td>
                                    <td>{c.subjectName}</td><td>{c.teacherName || 'Chưa xếp'}</td>
                                    <td style={{color:'var(--color-warning)', fontWeight:'bold', fontSize: '12px'}}>{c.schedule || 'Chưa xếp lịch'}</td>
                                    <td style={{textAlign:'center', display:'flex', gap:'4px', justifyContent:'center', padding:'12px 4px'}}>
                                        <button onClick={() => handleOpenEditClass(c)} style={actionBtnStyle}>Sửa</button>
                                        <button onClick={() => handleDeleteClass(c.id, c.code)} style={{...actionBtnStyle, backgroundColor:'var(--color-danger)'}}>Xóa</button>
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

const subTabBtn = { padding: '8px 16px', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
const formStyle = { width: '320px', display: 'flex', flexDirection: 'column', gap: '12px', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' };
const inputStyle = { padding: '10px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const submitBtnStyle = { padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', flex: 1 };
const actionBtnStyle = { padding: '3px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };

export default TrainingPage;
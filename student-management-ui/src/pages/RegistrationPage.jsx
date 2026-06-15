import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

export default function RegistrationPage() {
    const { notify, confirm } = useNotification();
    const role = localStorage.getItem('roles') || '';
    const teacherId = localStorage.getItem('teacherId') || '';

    const [selectedClassIds, setSelectedClassIds] = useState([]);
    const [tick, setTick] = useState(Date.now());
    const [periodForm, setPeriodForm] = useState({ semester: 'HK1-2026', startTime: '', endTime: '' });
    const [allPeriods, setAllPeriods] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [courseClasses, setCourseClasses] = useState([]);

    const [searchStudentId, setSearchStudentId] = useState('');
    const [searchedClasses, setSearchedClasses] = useState(null);
    const [isSearchingStudent, setIsSearchingStudent] = useState(false);

    // --- STATE MỚI CHO PHÂN HỆ TEACHER ---
    const [advisorRegistrations, setAdvisorRegistrations] = useState([]);

    // --- STATE PHÂN HỆ STUDENT ---
    const [availableClasses, setAvailableClasses] = useState([]);
    const [myRegisteredClasses, setMyRegisteredClasses] = useState([]);
    const [isRegistrationTime, setIsRegistrationTime] = useState(false);
    const [activePeriodInfo, setActivePeriodInfo] = useState(null);

    useEffect(() => {
        refreshData();
    }, [role]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTick(Date.now());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (activePeriodInfo) {
            const now = new Date();
            const start = new Date(activePeriodInfo.startTime);
            const end = new Date(activePeriodInfo.endTime);

            if (activePeriodInfo.isActive && now >= start && now <= end) {
                if (!isRegistrationTime) {
                    setIsRegistrationTime(true);
                    if (role.includes('STUDENT')) fetchOpenClassesForStudent(activePeriodInfo.semester);
                }
            } else {
                if (isRegistrationTime) {
                    setIsRegistrationTime(false);
                    if (role.includes('STUDENT')) setAvailableClasses([]);
                }
            }
        }
    }, [tick, activePeriodInfo, role]);

    const refreshData = () => {
        if (role.includes('ADMIN')) loadAdminPeriodsAndClasses();
        if (role.includes('TEACHER')) {
            fetchActivePeriodStatus();
            loadTeacherAdvisorRegistrations(); // 🔥 Đổi thành hàm gọi API mới
        }
        if (role.includes('STUDENT')) loadStudentRegistrationFlow();
    };

    const fetchActivePeriodStatus = async () => {
        try {
            const periods = await axiosClient.get('/registration/periods');
            if (periods && periods.length > 0) {
                const sorted = [...periods].sort((a, b) => b.id - a.id);
                setActivePeriodInfo(sorted[0]);
            }
        } catch (err) { console.error(err); }
    };

    // ==================== 🛠️ NGHIỆP VỤ ADMIN ====================
    // (Giữ nguyên toàn bộ logic Admin của bạn ở đây...)
    const loadAdminPeriodsAndClasses = async () => {
        try {
            const periodsData = await axiosClient.get('/registration/periods');
            if (periodsData && periodsData.length > 0) {
                const sortedPeriods = [...periodsData].sort((a, b) => b.id - a.id);
                setAllPeriods(sortedPeriods);
                setSelectedPeriod(selectedPeriod ? sortedPeriods.find(p => p.id === selectedPeriod.id) || sortedPeriods[0] : sortedPeriods[0]);
            }
            const classesData = await axiosClient.get('/course-classes');
            setCourseClasses(classesData);
        } catch (err) { notify.error('Không thể tải dữ liệu quản trị hệ thống'); }
    };

    const handleCreatePeriod = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.post('/registration/periods', periodForm);
            notify.success('Kích hoạt khung giờ đăng ký học kỳ mới thành công!');
            setPeriodForm({ semester: 'HK1-2026', startTime: '', endTime: '' });
            refreshData();
        } catch (err) { notify.error(getErrorMessage(err, 'Lỗi kích hoạt khung giờ')); }
    };

    const handleClosePeriod = async (id) => {
        const ok = await confirm({ title: 'Hủy kích hoạt đợt đăng ký', message: 'Bạn có chắc chắn?', confirmText: 'Hủy kích hoạt', variant: 'danger' });
        if (!ok) return;
        try {
            await axiosClient.put(`/registration/periods/${id}/close`);
            notify.success('Đã đóng cổng và hủy kích hoạt khung giờ thành công!');
            refreshData();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể thực hiện hủy kích hoạt!')); }
    };

    const handleToggleClassRegistration = async (id) => {
        try {
            await axiosClient.put(`/registration/course-class/${id}/toggle`);
            notify.success('Cập nhật trạng thái mở lớp học phần thành công!');
            const classesData = await axiosClient.get('/course-classes');
            setCourseClasses(classesData);
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể thay đổi trạng thái mở lớp')); }
    };

    const handleSearchStudent = async (e) => {
        if(e) e.preventDefault();
        if (!searchStudentId.trim()) return;
        setIsSearchingStudent(true);
        try {
            const res = await axiosClient.get(`/grades/student/${searchStudentId.trim()}?_t=${Date.now()}`);
            setSearchedClasses(res);
        } catch (err) {
            notify.error('Không tìm thấy dữ liệu sinh viên. Vui lòng kiểm tra lại mã SV.');
            setSearchedClasses([]);
        } finally {
            setIsSearchingStudent(false);
        }
    };

    const handleAdminDeleteRegistration = async (courseClassId, subjectName) => {
        const ok = await confirm({ title: 'Rút môn học khẩn cấp', message: `Bạn có chắc chắn muốn xóa môn này?`, confirmText: 'Xóa tín chỉ', variant: 'danger' });
        if (!ok) return;
        try {
            await axiosClient.delete(`/grades/student/${searchStudentId.trim()}/course-class/${courseClassId}`);
            notify.success(`Đã rút thành công môn ${subjectName}!`);
            setSearchedClasses(prev => prev.filter(item => item.courseClassId !== courseClassId));
        } catch (err) { notify.error(getErrorMessage(err, 'Lỗi khi Admin rút môn học của sinh viên.')); }
    };

    const checkScheduleConflicts = (selectedItems, existingItems) => {
        const slotsMap = {};
        const allItemsToCheck = [...existingItems, ...selectedItems];

        for (const item of allItemsToCheck) {
            const schedStr = (item.schedule || '').toLowerCase();
            if (!schedStr) continue;

            let dayKey = '';
            if (schedStr.includes('chủ nhật') || schedStr.includes('cn')) dayKey = 'CN';
            else {
                const dayMatch = schedStr.match(/thứ\s*(\d+)/) || schedStr.match(/t(\d+)/);
                if (dayMatch) dayKey = dayMatch[1];
            }

            if (!dayKey) continue;
            if (!slotsMap[dayKey]) slotsMap[dayKey] = {};

            let shiftKey = '';
            if (schedStr.includes('sáng') || schedStr.match(/tiết\s*[1-4]/)) shiftKey = 'Sáng';
            else if (schedStr.includes('chiều') || schedStr.match(/tiết\s*[5-8]/)) shiftKey = 'Chiều';
            else if (schedStr.includes('tối') || schedStr.match(/tiết\s*(9|10|11|12)/)) shiftKey = 'Tối';

            if (!shiftKey) continue;

            if (slotsMap[dayKey][shiftKey]) {
                const dayLabel = dayKey === 'CN' ? 'Chủ Nhật' : `Thứ ${dayKey}`;
                return `🚨 Xung đột lịch học: Bạn không thể đăng ký môn [${item.subjectName}] vì đã bị trùng vào Buổi ${shiftKey} ${dayLabel} với môn [${slotsMap[dayKey][shiftKey]}]!`;
            }

            slotsMap[dayKey][shiftKey] = item.subjectName;
        }
        return null;
    };

    // ==================== 💼 NGHIỆP VỤ TEACHER (LÀM MỚI 100% CỐ VẤN TÍN CHỈ) ====================
    const loadTeacherAdvisorRegistrations = async () => {
        if (!teacherId) return;
        try {
            const data = await axiosClient.get('/registration/teacher/advisor/pending-students');
            setAdvisorRegistrations(data || []);
        } catch (err) { notify.error('Không thể tải danh sách đăng ký tín chỉ của lớp cố vấn.'); }
    };

    const handleToggleApproveAdvisor = async (regId, isApproved) => {
        if (isApproved) {
            const ok = await confirm({
                title: 'Hủy duyệt đơn',
                message: 'Bạn có chắc chắn muốn hủy duyệt môn này?',
                confirmText: 'Hủy duyệt',
                variant: 'danger',
            });
            if (!ok) return;
        }
        try {
            await axiosClient.put(`/registration/teacher/advisor/approve/${regId}`);
            notify.success(isApproved ? 'Đã hủy duyệt môn thành công!' : 'Đã duyệt môn đăng ký thành công!');
            loadTeacherAdvisorRegistrations(); // Tải lại danh sách realtime
        } catch (err) {
            notify.error(getErrorMessage(err, 'Lỗi khi duyệt đơn.'));
        }
    };

    // ==================== 🎓 NGHIỆP VỤ STUDENT ====================
    const fetchOpenClassesForStudent = async (semester) => {
        try {
            const openClasses = await axiosClient.get('/registration/open-course-classes');
            const filteredOpenClasses = openClasses.filter(c => c.semester === semester);
            setAvailableClasses(filteredOpenClasses);
        } catch (err) { console.error("Lỗi khi tải danh sách môn học mở:", err); }
    };

    const loadStudentRegistrationFlow = async () => {
        try {
            const periods = await axiosClient.get('/registration/periods');
            let period = null;
            if (periods && periods.length > 0) {
                const sorted = [...periods].sort((a, b) => b.id - a.id);
                period = sorted[0];
                setActivePeriodInfo(period);
            }

            if (period && period.isActive) {
                const now = new Date();
                const start = new Date(period.startTime);
                const end = new Date(period.endTime);

                if (now >= start && now <= end) {
                    setIsRegistrationTime(true);
                    await fetchOpenClassesForStudent(period.semester);
                } else {
                    setIsRegistrationTime(false);
                    setAvailableClasses([]);
                }
            } else {
                setIsRegistrationTime(false);
                setAvailableClasses([]);
            }

            const myClasses = await axiosClient.get(`/registration/my-classes?_t=${Date.now()}`);
            const validClasses = myClasses.filter(c => c.status !== 'REJECTED');
            setMyRegisteredClasses(validClasses);
        } catch (err) { console.error(err); }
    };

    const handleBulkEnroll = async () => {
        if (selectedClassIds.length === 0) {
            notify.warning('Vui lòng chọn ít nhất 1 môn để đăng ký!');
            return;
        }

        const itemsToEnroll = availableClasses.filter(c => selectedClassIds.includes(c.id));
        const validExistingClasses = myRegisteredClasses.filter(reg => {
            const isCurrentSem = activePeriodInfo && reg.semester === activePeriodInfo.semester;
            const isApproved = reg.status === 'APPROVED';
            return !isCurrentSem || isApproved;
        });

        const conflictError = checkScheduleConflicts(itemsToEnroll, validExistingClasses);
        if (conflictError) { notify.error(conflictError); return; }

        try {
            for (const id of selectedClassIds) {
                await axiosClient.post(`/registration/enroll?courseClassId=${id}`);
            }

            notify.success('Đăng ký tín chỉ thành công! Đơn đang chờ giảng viên phê duyệt.');
            setSelectedClassIds([]);
            loadStudentRegistrationFlow();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể đăng ký học phần này!')); }
    };

    const handleUnenroll = async (courseClassId) => {
        const ok = await confirm({ title: 'Hủy đăng ký môn học', message: 'Bạn có chắc muốn rút đơn đăng ký môn học này?', confirmText: 'Hủy', variant: 'danger' });
        if (!ok) return;
        try {
            await axiosClient.delete(`/registration/unenroll?courseClassId=${courseClassId}`);
            notify.success('Đã hủy môn học thành công!');
            setMyRegisteredClasses(prev => prev.filter(item => item.courseClassId !== courseClassId));
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể hủy môn học này lúc này!')); }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} ngày ${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
    };

    const renderPeriodStatusLabel = (period) => {
        if (!period) return <span style={{color:'var(--text-muted)'}}>Chưa rõ</span>;
        if (!period.isActive) return <span style={{color:'var(--color-danger)', fontWeight:'bold'}}>🔒 Đã đóng / Hủy kích hoạt</span>;

        const now = new Date();
        const start = new Date(period.startTime);
        const end = new Date(period.endTime);

        if (now < start) return <span style={{color:'var(--color-warning)', fontWeight:'bold'}}>⏳ Chờ đến mốc giờ mở</span>;
        else if (now > end) return <span style={{color:'var(--color-danger)', fontWeight:'bold'}}>⏰ Đã hết hạn đóng cổng</span>;
        else return <span style={{color:'var(--color-success)', fontWeight:'bold'}}>🟢 Đang mở đăng ký</span>;
    };

    return (
        <div>
            <div className="page-header">
                <h2 className="page-header__title">Đăng ký tín chỉ</h2>
                <p className="page-header__desc">Quản lý đợt đăng ký, phê duyệt và rút môn học</p>
            </div>

            {/* ==================== VIEW ADMIN ==================== */}
            {role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ color: 'var(--text-cyan)', margin: '0 0 12px 0' }}>📂 LỊCH SỬ CÁC ĐỢT MỞ CỔNG ĐĂNG KÝ HỆ THỐNG</h3>
                        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
                            {allPeriods.map(p => {
                                const isSelected = selectedPeriod?.id === p.id;
                                let statusText = '🔒 Đã hủy/Đóng cổng';
                                let statusColor = 'var(--color-danger)';

                                if (p.isActive) {
                                    const now = new Date();
                                    const start = new Date(p.startTime);
                                    const end = new Date(p.endTime);
                                    if (now < start) { statusText = '⏳ Chờ mốc giờ'; statusColor = 'var(--color-warning)'; }
                                    else if (now > end) { statusText = '⏰ Đã hết hạn'; statusColor = 'var(--color-danger)'; }
                                    else { statusText = '● Đang hoạt động'; statusColor = 'var(--color-success)'; }
                                }

                                return (
                                    <div
                                        key={p.id}
                                        onClick={() => setSelectedPeriod(p)}
                                        style={{
                                            padding: '10px 15px',
                                            backgroundColor: isSelected ? 'rgba(0, 188, 212, 0.08)' : 'var(--color-bg)',
                                            border: isSelected ? '2px solid var(--text-cyan)' : '1px solid var(--color-border)',
                                            boxShadow: isSelected ? '0 0 10px rgba(0, 188, 212, 0.25)' : 'none',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            minWidth: '220px',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <div style={{ fontWeight: 'bold', fontSize: '14px', color: isSelected ? 'var(--text-cyan)' : 'white' }}>Học kỳ: {p.semester}</div>
                                        <div style={{ fontSize: '12px', color: isSelected ? 'white' : 'var(--text-muted)', marginTop: '4px' }}>Mã đợt: #RP_{p.id}</div>
                                        <div style={{ fontSize: '11px', marginTop: '6px', color: statusColor, fontWeight: 'bold' }}>{statusText}</div>
                                    </div>
                                );
                            })}
                            {allPeriods.length === 0 && <p style={{color:'var(--text-muted)', fontSize:'13px'}}>Chưa có dữ liệu lịch sử đợt mở đăng ký.</p>}
                        </div>
                    </div>

                    {selectedPeriod && (
                        <div style={{ padding: '15px 20px', backgroundColor: 'var(--color-surface)', borderLeft: '5px solid var(--color-success)', borderRadius: '4px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--color-border)' }}>
                            <div>
                                <h4 style={{ margin: '0 0 6px 0', color: 'var(--text-cyan)' }}>🟢 CHI TIẾT ĐỢT ĐANG CHỌN GIÁM SÁT REALTIME</h4>
                                <div style={{ fontSize: '13px' }}>
                                    Học kỳ áp dụng: <b style={{color:'var(--color-warning)'}}>{selectedPeriod.semester}</b> |
                                    Thời gian cấu hình: Từ <b>{formatDate(selectedPeriod.startTime)}</b> đến <b>{formatDate(selectedPeriod.endTime)}</b> |
                                    Trạng thái thực tế: {renderPeriodStatusLabel(selectedPeriod)}
                                </div>
                            </div>
                            {selectedPeriod && selectedPeriod.isActive && (
                                <button
                                    onClick={() => handleClosePeriod(selectedPeriod.id)}
                                    style={{ padding: '8px 14px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
                                >
                                    🛑 Hủy Kích Hoạt Đợt Này
                                </button>
                            )}
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
                        <form onSubmit={handleCreatePeriod} style={{ width: '310px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                            <style>{`.calendar-click-overlay { position: relative; } .calendar-click-overlay::-webkit-calendar-picker-indicator { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }`}</style>
                            <h4 style={{color: 'var(--text-cyan)', margin: 0}}>🔒 MỞ ĐĂNG KÝ TÍN CHỈ MỚI</h4>
                            <input type="text" placeholder="Học kỳ (VD: HK1-2026)" value={periodForm.semester} onChange={e => setPeriodForm({...periodForm, semester: e.target.value})} required style={inputStyle} />
                            <label style={{fontSize:'13px', fontWeight: 'bold'}}>Thời gian bắt đầu:</label>
                            <input type="datetime-local" value={periodForm.startTime} onChange={e => setPeriodForm({...periodForm, startTime: e.target.value})} required className="calendar-click-overlay" style={inputStyle} />
                            <label style={{fontSize:'13px', fontWeight: 'bold'}}>Thời gian kết thúc:</label>
                            <input type="datetime-local" value={periodForm.endTime} onChange={e => setPeriodForm({...periodForm, endTime: e.target.value})} required className="calendar-click-overlay" style={inputStyle} />
                            <button type="submit" style={{ padding: '12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', marginTop: '5px' }}>
                                Kích Hoạt Đợt Mở Mới
                            </button>
                        </form>

                        <div style={{ flex: 1, minWidth: '450px', padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h4>📋 Danh sách môn học phần thuộc học kỳ: {selectedPeriod?.semester || 'Chưa chọn'}</h4>
                            <table style={tableStyle}>
                                <thead>
                                <tr style={thStyle}>
                                    <th>Mã Lớp HP</th><th>Tên Môn Học</th><th>Số Tín</th><th>Giảng Viên</th><th>Thời Khóa Biểu (Lịch học)</th><th style={{textAlign: 'center'}}>Tích Chọn Mở Môn</th>
                                </tr>
                                </thead>
                                <tbody>
                                {courseClasses
                                    .filter(c => c.semester === selectedPeriod?.semester)
                                    .map((cls) => (
                                        <tr key={cls.id} style={trStyle}>
                                            <td style={{fontWeight:'bold', color: 'var(--text-cyan)'}}>{cls.code}</td>
                                            <td>{cls.subjectName}</td>
                                            <td>{cls.credits} tín</td>
                                            <td>{cls.teacherName || 'Chưa phân công'}</td>
                                            <td style={{color:'var(--color-warning)', fontSize:'13px', fontWeight:'bold'}}>{cls.schedule || 'Chưa xếp'}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <input type="checkbox" checked={cls.openForRegistration} onChange={() => handleToggleClassRegistration(cls.id)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                                            </td>
                                        </tr>
                                    ))}
                                {courseClasses.filter(c => c.semester === selectedPeriod?.semester).length === 0 && (
                                    <tr><td colSpan="6" style={{textAlign:'center', padding:'20px', color:'var(--text-muted)'}}>Học kỳ này chưa được Admin mở lớp học phần nào.</td></tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* QUẢN TRỊ ĐƠN RÚT MÔN CỦA PHÒNG ĐÀO TẠO */}
                    <div style={{ marginTop: '10px', padding: '20px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-danger)' }}>
                        <h3 style={{ color: 'var(--color-danger)', marginTop: 0, marginBottom: '15px' }}>🛠️ GIẢI QUYẾT ĐƠN RÚT MÔN CỦA SINH VIÊN (DÀNH CHO PHÒNG ĐÀO TẠO)</h3>
                        <form onSubmit={handleSearchStudent} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                            <input type="text" placeholder="Nhập Mã Sinh Viên..." value={searchStudentId} onChange={e => setSearchStudentId(e.target.value)} style={{ ...inputStyle, width: '300px' }} required />
                            <button type="submit" style={{ padding: '8px 24px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>{isSearchingStudent ? 'Đang tìm...' : '🔍 Tìm Hồ Sơ'}</button>
                        </form>

                        {searchedClasses !== null && (
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tableStyle}>
                                    <thead>
                                    <tr style={thStyle}>
                                        <th style={{ textAlign: 'center', width: '120px' }}>Trạng thái</th><th>Mã Lớp HP</th><th>Tên Môn Học</th><th>Số Tín Chỉ</th><th style={{ textAlign: 'center' }}>Thao Tác Quản Trị</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {searchedClasses.map(reg => (
                                        <tr key={reg.id} style={trStyle}>
                                            <td style={{ textAlign: 'center' }}>
                                                {reg.status === 'APPROVED' ? <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>✅ Đã duyệt</span> : <span style={{ color: 'var(--color-warning)', fontWeight: 'bold' }}>⏳ Chờ duyệt</span>}
                                            </td>
                                            <td style={{ fontWeight: 'bold', color: 'var(--text-cyan)' }}>{reg.courseClassCode}</td>
                                            <td>{reg.subjectName}</td>
                                            <td>{reg.credits} tín</td>
                                            <td style={{ textAlign: 'center' }}>
                                                <button onClick={() => handleAdminDeleteRegistration(reg.courseClassId, reg.subjectName)} style={{ padding: '8px 12px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }} title="Xóa vĩnh viễn môn học này khỏi hồ sơ sinh viên">🗑️ Hủy tín chỉ này</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {searchedClasses.length === 0 && (
                                        <tr><td colSpan="5" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Sinh viên này chưa có lịch sử đăng ký.</td></tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== 💼 VIEW TEACHER (SỬA LẠI KHÔNG CÓ DROPDOWN) ==================== */}
            {role.includes('TEACHER') && !role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {!isRegistrationTime ? (
                        <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h3 style={{ color: 'var(--color-success)', marginTop: 0 }}>👨‍🏫 PHÊ DUYỆT ĐĂNG KÝ TÍN CHỈ (CỐ VẤN HỌC TẬP)</h3>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '15px' }}>
                                Hệ thống tự động truy xuất danh sách sinh viên trực thuộc quyền cố vấn của bạn đã gửi đăng ký tín chỉ đợt này.
                            </p>

                            <table style={tableStyle}>
                                <thead>
                                <tr style={thStyle}>
                                    <th>Mã Sinh Viên</th>
                                    <th>Họ Và Tên</th>
                                    <th>Mã Lớp HP</th>
                                    <th>Môn Đăng Ký</th>
                                    <th style={{ textAlign: 'center' }}>Trạng Thái</th>
                                    <th style={{ textAlign: 'center' }}>Thao Tác Duyệt Đơn</th>
                                </tr>
                                </thead>
                                <tbody>
                                {advisorRegistrations.map((reg, i) => {
                                    const isApproved = reg.status === 'APPROVED';
                                    return (
                                        <tr key={i} style={trStyle}>
                                            <td style={{ fontWeight: 'bold', color: 'var(--color-warning)' }}>{reg.studentCode}</td>
                                            <td>{reg.studentName}</td>
                                            <td style={{ color: 'var(--text-cyan)' }}>{reg.courseClassCode}</td>
                                            <td><b>{reg.courseClassName}</b></td>
                                            <td style={{ textAlign: 'center' }}>
                                                {isApproved ? <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>✅ Đã duyệt</span> : <span style={{ color: 'var(--color-danger)', fontWeight: 'bold' }}>⏳ Chờ duyệt</span>}
                                            </td>
                                            <td style={{ textAlign: 'center' }}>
                                                <button
                                                    onClick={() => handleToggleApproveAdvisor(reg.registrationId, isApproved)}
                                                    style={{
                                                        padding: '6px 12px',
                                                        backgroundColor: isApproved ? 'var(--color-danger)' : 'var(--color-primary)',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    {isApproved ? 'Hủy duyệt' : 'Duyệt Đơn'}
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {advisorRegistrations.length === 0 && (
                                    <tr>
                                        <td colSpan="6" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>
                                            Tài khoản của bạn chưa được phân công làm Cố vấn học tập, hoặc hiện tại chưa có sinh viên nào gửi đơn đăng ký tín chỉ.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px dashed var(--color-border)' }}>
                            <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏳</div>
                            <h3 style={{ color: 'var(--color-warning)', margin: '0 0 5px 0' }}>HỆ THỐNG ĐANG TRONG THỜI GIAN ĐĂNG KÝ</h3>
                            <p style={{ margin: 0, fontSize: '13px' }}>Giảng viên chỉ có quyền duyệt đơn sau khi thời gian đăng ký của sinh viên đã kết thúc (Chốt sổ).</p>
                        </div>
                    )}
                </div>
            )}

            {/* ==================== 🎓 VIEW STUDENT ==================== */}
            {role.includes('STUDENT') && !role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {isRegistrationTime ? (
                        <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h3 style={{ color: 'var(--text-cyan)', marginBottom: '15px', marginTop: 0 }}>🛒 DANH SÁCH MÔN HỌC MỞ ĐĂNG KÝ (TÍCH CHỌN)</h3>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tableStyle}>
                                    <thead>
                                    <tr style={thStyle}>
                                        <th style={{ textAlign: 'center', width: '60px' }}>Chọn</th>
                                        <th>Mã Lớp HP</th>
                                        <th>Tên Môn Học</th>
                                        <th>Số Tín Chỉ</th>
                                        <th>Giảng Viên</th>
                                        <th>Thời Khóa Biểu</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {availableClasses.map(c => (
                                        <tr key={c.id} style={trStyle}>
                                            <td style={{ textAlign: 'center' }}>
                                                <input type="checkbox" checked={selectedClassIds.includes(c.id)} onChange={() => { setSelectedClassIds(prev => prev.includes(c.id) ? prev.filter(id => id !== c.id) : [...prev, c.id]); }} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                                            </td>
                                            <td style={{ fontWeight: 'bold', color: 'var(--text-cyan)' }}>{c.code}</td>
                                            <td>{c.subjectName}</td>
                                            <td>{c.credits} tín</td>
                                            <td>{c.teacherName || 'Chưa xếp'}</td>
                                            <td style={{ color: 'var(--color-warning)' }}>{c.schedule}</td>
                                        </tr>
                                    ))}
                                    {availableClasses.length === 0 && (
                                        <tr><td colSpan="6" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Không có môn học phần nào được mở đợt này.</td></tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>

                            {availableClasses.length > 0 && (
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
                                    <button onClick={handleBulkEnroll} style={{ padding: '10px 24px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                                        Đăng Ký
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px dashed var(--color-border)' }}>
                            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔒</div>
                            <h3 style={{ color: 'var(--color-warning)', margin: '0 0 5px 0' }}>CỔNG ĐĂNG KÝ TÍN CHỈ ĐANG ĐÓNG</h3>
                            <p style={{ margin: 0, fontSize: '13px' }}>Vui lòng đợi thông báo chính thức từ Phòng Đào tạo (Admin) để thực hiện đăng ký mới.</p>
                        </div>
                    )}

                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ color: 'var(--color-warning)', marginBottom: '15px', marginTop: 0 }}>📋 CÁC MÔN HỌC TRONG HỒ SƠ</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={tableStyle}>
                                <thead>
                                <tr style={thStyle}>
                                    <th style={{ textAlign: 'center', width: '130px' }}>Trạng thái</th>
                                    <th>Mã Lớp HP</th>
                                    <th>Tên Môn Học</th>
                                    <th>Số Tín Chỉ</th>
                                    <th>Giảng Viên</th>
                                    <th>Lịch Học</th>
                                </tr>
                                </thead>
                                <tbody>
                                {myRegisteredClasses.map(reg => {
                                    const isApproved = reg.status === 'APPROVED';

                                    return (
                                        <tr key={reg.id} style={trStyle}>
                                            <td style={{ textAlign: 'center' }}>
                                                {isApproved ? (
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--color-success)', fontWeight: 'bold', fontSize: '13px' }}>
                                                        <input type="checkbox" checked readOnly style={{ width: '16px', height: '16px', accentColor: 'var(--color-success)', cursor: 'default' }} />
                                                        <span>Đã duyệt</span>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                                        <span style={{ color: 'var(--color-warning)', fontWeight: 'bold', fontSize: '13px' }}>⏳ Chờ duyệt</span>

                                                        {isRegistrationTime && (
                                                            <button onClick={() => handleUnenroll(reg.courseClassId)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }} title="Rút đơn đăng ký môn này">✖ Hủy</button>
                                                        )}
                                                    </div>
                                                )}
                                            </td>
                                            <td style={{ fontWeight: 'bold', color: 'var(--text-cyan)' }}>{reg.courseClassCode}</td>
                                            <td>{reg.subjectName}</td>
                                            <td>{reg.credits} tín</td>
                                            <td>{reg.teacherName}</td>
                                            <td style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>{reg.schedule || 'Chưa xếp'}</td>
                                        </tr>
                                    );
                                })}
                                {myRegisteredClasses.length === 0 && (
                                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Chưa đăng ký môn học nào.</td></tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const inputStyle = { padding: '8px', backgroundColor: 'var(--color-bg)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', outline: 'none' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '10px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '10px' };
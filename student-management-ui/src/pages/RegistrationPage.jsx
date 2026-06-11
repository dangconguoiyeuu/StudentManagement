import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function RegistrationPage() {
    const role = localStorage.getItem('roles') || '';
    const teacherId = localStorage.getItem('teacherId') || '';

    const [message, setMessage] = useState({ text: '', isError: false });

    // --- STATE PHÂN HỆ ADMIN ---
    const [periodForm, setPeriodForm] = useState({ semester: 'HK1-2026', startTime: '', endTime: '' });
    const [allPeriods, setAllPeriods] = useState([]); // Lưu lịch sử tất cả các đợt mở cổng
    const [selectedPeriod, setSelectedPeriod] = useState(null); // Đợt đang được chọn để xem chi tiết
    const [courseClasses, setCourseClasses] = useState([]); // Lưu tất cả lớp học phần từ DB thật

    // --- STATE PHÂN HỆ TEACHER ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [classStudents, setClassStudents] = useState([]);

    // --- STATE PHÂN HỆ STUDENT ---
    const [availableClasses, setAvailableClasses] = useState([]);
    const [myRegisteredClasses, setMyRegisteredClasses] = useState([]);
    const [isRegistrationTime, setIsRegistrationTime] = useState(false);
    const [activePeriodInfo, setActivePeriodInfo] = useState(null);

    // 🔥 STATE ĐẾM GIÂY REALTIME: Đồng bộ thời gian thực cho cả hệ thống và bảng lịch sử
    const [tick, setTick] = useState(Date.now());

    useEffect(() => {
        refreshData();
    }, [role]);

    // Kích hoạt bộ đếm nhịp chạy ngầm mỗi 1 giây
    useEffect(() => {
        const timer = setInterval(() => {
            setTick(Date.now());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Tự động đóng/mở cổng chọn môn cho Sinh viên khi đồng hồ chạm mốc giờ hẹn
    useEffect(() => {
        if (role.includes('STUDENT') && activePeriodInfo) {
            const now = new Date();
            const start = new Date(activePeriodInfo.startTime);
            const end = new Date(activePeriodInfo.endTime);

            if (activePeriodInfo.isActive && now >= start && now <= end) {
                if (!isRegistrationTime) {
                    setIsRegistrationTime(true);
                    fetchOpenClassesForStudent(activePeriodInfo.semester);
                }
            } else {
                if (isRegistrationTime) {
                    setIsRegistrationTime(false);
                    setAvailableClasses([]);
                }
            }
        }
    }, [tick, activePeriodInfo, role]);

    const refreshData = () => {
        if (role.includes('ADMIN')) {
            loadAdminPeriodsAndClasses();
        }
        if (role.includes('TEACHER')) {
            loadTeacherSchedule();
        }
        if (role.includes('STUDENT')) {
            loadStudentRegistrationFlow();
        }
    };

    const showMessage = (text, isError = false) => {
        setMessage({ text, isError });
        setTimeout(() => setMessage({ text: '', isError: false }), 4000);
    };

    // ==================== 🛠️ NGHIỆP VỤ ADMIN ====================
    const loadAdminPeriodsAndClasses = async () => {
        try {
            const periodsData = await axiosClient.get('/registration/periods');
            if (periodsData && periodsData.length > 0) {
                const sortedPeriods = [...periodsData].sort((a, b) => b.id - a.id);
                setAllPeriods(sortedPeriods);

                if (selectedPeriod) {
                    const updated = sortedPeriods.find(p => p.id === selectedPeriod.id);
                    setSelectedPeriod(updated || sortedPeriods[0]);
                } else {
                    setSelectedPeriod(sortedPeriods[0]);
                }
            }

            const classesData = await axiosClient.get('/course-classes');
            setCourseClasses(classesData);
        } catch (err) { showMessage('Không thể tải dữ liệu quản trị hệ thống', true); }
    };

    const handleCreatePeriod = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.post('/registration/periods', periodForm);
            showMessage('Kích hoạt cấu hình khung giờ và lưu đợt mở đăng ký học kỳ mới thành công!');
            setPeriodForm({ semester: 'HK1-2026', startTime: '', endTime: '' });
            refreshData();
        } catch (err) { showMessage(err || 'Lỗi kích hoạt khung giờ', true); }
    };

    const handleClosePeriod = async (id) => {
        if (!window.confirm("⚠️ Bạn có chắc chắn muốn HỦY KÍCH HOẠT khung giờ đăng ký tín chỉ này không?")) return;
        try {
            await axiosClient.put(`/registration/periods/${id}/close`);
            showMessage('Đã đóng cổng và hủy kích hoạt khung giờ thành công!');
            refreshData();
        } catch (err) { showMessage(err || 'Không thể thực hiện hủy kích hoạt!', true); }
    };

    const handleToggleClassRegistration = async (id) => {
        try {
            await axiosClient.put(`/registration/course-class/${id}/toggle`);
            showMessage(`Cập nhật trạng thái tích chọn mở lớp học phần thành công!`);
            const classesData = await axiosClient.get('/course-classes');
            setCourseClasses(classesData);
        } catch (err) { showMessage(err || 'Không thể thay đổi trạng thái tích chọn môn', true); }
    };

    // ==================== 💼 NGHIỆP VỤ TEACHER ====================
    const loadTeacherSchedule = async () => {
        if (!teacherId) return;
        try {
            const data = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
            setTeacherClasses(data);
        } catch (err) { showMessage('Không thể tải lịch giảng dạy cá nhân', true); }
    };

    const viewClassStudents = async (classId) => {
        setSelectedClassId(classId);
        try {
            const data = await axiosClient.get(`/registration/classes/${classId}/students`);
            setClassStudents(data);
        } catch (err) { showMessage('Không thể tải danh sách sinh viên lớp học phần', true); }
    };

    // ==================== 🎓 NGHIỆP VỤ STUDENT ====================
    const fetchOpenClassesForStudent = async (semester) => {
        try {
            const allSystemClasses = await axiosClient.get('/course-classes');
            const filteredOpenClasses = allSystemClasses.filter(
                c => c.openForRegistration === true && c.semester === semester
            );
            setAvailableClasses(filteredOpenClasses);
        } catch (err) { console.error(err); }
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

            const myClasses = await axiosClient.get('/registration/my-classes');
            setMyRegisteredClasses(myClasses);
        } catch (err) { console.error(err); }
    };

    const handleEnroll = async (courseClassId) => {
        try {
            await axiosClient.post(`/registration/enroll?courseClassId=${courseClassId}`);
            showMessage('Đăng ký chọn lớp học phần thành công mượt mà!');
            loadStudentRegistrationFlow();
        } catch (err) { showMessage(err || 'Không thể đăng ký học phần này!', true); }
    };

    const handleUnenroll = async (courseClassId) => {
        if (!window.confirm("Bạn có chắc chắn muốn hủy học phần này không?")) return;
        try {
            await axiosClient.delete(`/registration/unenroll?courseClassId=${courseClassId}`);
            showMessage('Đã rút tên khỏi lớp học phần thành công!');
            loadStudentRegistrationFlow();
        } catch (err) { showMessage(err || 'Không thể hủy học phần này!', true); }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} ngày ${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
    };

    const renderPeriodStatusLabel = (period) => {
        if (!period) return <span style={{color:'var(--text-muted)'}}>Chưa rõ</span>;
        if (!period.isActive) {
            return <span style={{color:'var(--color-danger)', fontWeight:'bold'}}>🔒 Đã đóng / Hủy kích hoạt</span>;
        }

        const now = new Date();
        const start = new Date(period.startTime);
        const end = new Date(period.endTime);

        if (now < start) {
            return <span style={{color:'var(--color-warning)', fontWeight:'bold'}}>⏳ Chờ đến mốc giờ mở</span>;
        } else if (now > end) {
            return <span style={{color:'var(--color-danger)', fontWeight:'bold'}}>⏰ Đã hết hạn đóng cổng</span>;
        } else {
            return <span style={{color:'var(--color-success)', fontWeight:'bold'}}>🟢 Đang mở đăng ký</span>;
        }
    };

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <h2 style={{ color: 'var(--text-cyan)', marginBottom: 'var(--spacing-xl)' }}>⏰ TRUNG TÂM ĐIỀU PHỐI ĐĂNG KÝ TÍN CHỈ REALTIME</h2>

            {message.text && (
                <div style={{ padding: '12px', marginBottom: '20px', backgroundColor: message.isError ? 'var(--color-danger)' : 'var(--color-primary)', color: 'white', borderRadius: '4px', fontWeight: 'bold' }}>
                    {message.text}
                </div>
            )}

            {/* ==================== VIEW ADMIN ==================== */}
            {role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* KHU VỰC 1: LỊCH SỬ CÁC ĐỢT MỞ CỔNG ĐĂNG KÝ TÍN CHỈ CỦA TRƯỜNG */}
                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ color: 'var(--text-cyan)', margin: '0 0 12px 0' }}>📂 LỊCH SỬ CÁC ĐỢT MỞ CỔNG ĐĂNG KÝ HỆ THỐNG</h3>
                        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
                            {allPeriods.map(p => {
                                const isSelected = selectedPeriod?.id === p.id;

                                // 🔥 ĐÃ SỬA LUỒNG REALTIME: Tính toán nhãn trạng thái chính xác từng giây cho từng ô trong danh sách lịch sử
                                let statusText = '🔒 Đã hủy/Đóng cổng';
                                let statusColor = 'var(--color-danger)';

                                if (p.isActive) {
                                    const now = new Date();
                                    const start = new Date(p.startTime);
                                    const end = new Date(p.endTime);
                                    if (now < start) {
                                        statusText = '⏳ Chờ mốc giờ';
                                        statusColor = 'var(--color-warning)';
                                    } else if (now > end) {
                                        statusText = '⏰ Đã hết hạn';
                                        statusColor = 'var(--color-danger)';
                                    } else {
                                        statusText = '● Đang hoạt động';
                                        statusColor = 'var(--color-success)';
                                    }
                                }

                                return (
                                    <div
                                        key={p.id}
                                        onClick={() => setSelectedPeriod(p)}
                                        style={{
                                            padding: '10px 15px',
                                            // 🔥 ĐÃ ĐẠI TU UI: Giữ nền tối, nếu click chọn thì bật viền Cyan phát sáng và nhuộm màu chữ để nét căng, dễ nhìn
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
                                        <div style={{ fontSize: '11px', marginTop: '6px', color: statusColor, fontWeight: 'bold' }}>
                                            {statusText}
                                        </div>
                                    </div>
                                );
                            })}
                            {allPeriods.length === 0 && <p style={{color:'var(--text-muted)', fontSize:'13px'}}>Chưa có dữ liệu lịch sử đợt mở đăng ký.</p>}
                        </div>
                    </div>

                    {/* KHU VỰC 2: THANH GIÁM SÁT CHI TIẾT ĐỢT ĐANG CHỌN */}
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
                        {/* Form tạo đợt mới */}
                        <form onSubmit={handleCreatePeriod} style={{ width: '310px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                            <style>{`
                                .calendar-click-overlay { position: relative; }
                                .calendar-click-overlay::-webkit-calendar-picker-indicator { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }
                            `}</style>

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

                        {/* BẢNG ĐỒNG BỘ HIỂN THỊ CHI TIẾT MÔN THEO HỌC KỲ ĐƯỢC CHỌN */}
                        <div style={{ flex: 1, minWidth: '450px', padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <h4>📋 Danh sách môn học phần thuộc học kỳ: {selectedPeriod?.semester || 'Chưa chọn'}</h4>
                            <p style={{fontSize: '12px', color: 'var(--color-warning)', marginTop: 0, marginBottom: '12px'}}>
                                💡 <b>Tác vụ Admin:</b> Tích chọn checkbox để cho phép mở hoặc khóa môn học phần tương ứng của học kỳ đang xem.
                            </p>

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
                                                <input
                                                    type="checkbox"
                                                    checked={cls.openForRegistration}
                                                    onChange={() => handleToggleClassRegistration(cls.id)}
                                                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                {courseClasses.filter(c => c.semester === selectedPeriod?.semester).length === 0 && (
                                    <tr>
                                        <td colSpan="6" style={{textAlign:'center', padding:'20px', color:'var(--text-muted)'}}>Học kỳ này chưa được Admin mở lớp học phần nào ở trang Quản lý đào tạo.</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* ==================== VIEW TEACHER ==================== */}
            {role.includes('TEACHER') && !role.includes('ADMIN') && (
                <div>
                    <h3 style={{ color: 'var(--text-cyan)' }}>💼 DANH SÁCH LỚP VÀ LỊCH GIẢNG DẠY CỦA BẠN</h3>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {teacherClasses.map(c => (
                                <button key={c.id} onClick={() => viewClassStudents(c.id)} style={{ padding: '12px', backgroundColor: selectedClassId === c.id ? 'var(--color-primary)' : 'var(--color-surface)', color: 'var(--text-main)', border: '1px solid var(--color-border)', borderRadius: '4px', textAlign: 'left', cursor: 'pointer' }}>
                                    <div style={{fontWeight:'bold', color: 'var(--text-cyan)'}}>{c.code}</div>
                                    <div style={{fontSize:'12px', marginTop:'4px', color:'var(--color-warning)'}}>📅 Lịch dạy: {c.schedule || 'Chưa xếp lịch'}</div>
                                </button>
                            ))}
                        </div>

                        {selectedClassId && (
                            <div style={{ flex: 1, padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                                <h4>👥 Danh sách sinh viên đăng ký học phần lớp [{teacherClasses.find(x => x.id === selectedClassId)?.code}]</h4>
                                <table style={tableStyle}>
                                    <thead>
                                    <tr style={thStyle}><th>Mã Sinh Viên</th><th>Họ Và Tên</th><th>Giới Tính</th><th>Số Điện Thoại</th></tr>
                                    </thead>
                                    <tbody>
                                    {classStudents.map((sv, i) => (
                                        <tr key={i} style={trStyle}>
                                            <td style={{fontWeight:'bold', color:'var(--color-warning)'}}>{sv.studentCode}</td>
                                            <td>{sv.firstName} {sv.lastName}</td>
                                            <td>{sv.gender}</td><td>{sv.phoneNumber || '-'}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ==================== VIEW STUDENT ==================== */}
            {role.includes('STUDENT') && !role.includes('ADMIN') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                    {/* BẢNG THÔNG BÁO CHI TIẾT NGÀY GIỜ MỞ ĐĂNG KÝ CHO SINH VIÊN */}
                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderLeft: '5px solid var(--text-cyan)', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-cyan)' }}>📢 THÔNG BÁO KẾ HOẠCH ĐĂNG KÝ TÍN CHỈ HỆ THỐNG</h4>
                        {activePeriodInfo ? (
                            <div style={{ fontSize: '14px' }}>
                                Kế hoạch mở cổng đăng ký tín chỉ học kỳ <b>{activePeriodInfo.semester}</b>:
                                <ul style={{ margin: '5px 0 0 20px', padding: 0 }}>
                                    <li>⏱️ Thời gian bắt đầu mở hệ thống: <span style={{ color: 'var(--text-cyan)', fontWeight: 'bold' }}>{formatDate(activePeriodInfo.startTime)}</span></li>
                                    <li>⌛ Thời gian đóng hệ thống: <span style={{ color: 'var(--color-danger)', fontWeight: 'bold' }}>{formatDate(activePeriodInfo.endTime)}</span></li>
                                    <li style={{marginTop: '5px'}}>📌 Trạng thái: {isRegistrationTime ? (
                                        <span style={{ color: 'var(--color-success)', fontWeight: 'bold', backgroundColor: 'rgba(40, 167, 69, 0.1)', padding: '2px 6px', borderRadius: '3px' }}>● CỔNG ĐANG MỞ - ĐƯỢC PHÉP ĐĂNG KÝ CHỌN LỚP</span>
                                    ) : (
                                        <span style={{ color: 'var(--color-warning)', fontWeight: 'bold', backgroundColor: 'rgba(255, 193, 7, 0.1)', padding: '2px 6px', borderRadius: '3px' }}>🔒 HỆ THỐNG ĐANG KHÓA CHẶT (Chưa đến mốc thời gian hoặc đã đóng cổng)</span>
                                    )}</li>
                                </ul>
                            </div>
                        ) : (
                            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Hiện tại nhà trường chưa phát hành khung thời gian đăng ký học phần.</p>
                        )}
                    </div>

                    {/* Phần 1: Đăng ký tín chỉ trực tuyến */}
                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginBottom: '15px', marginTop: 0 }}>✍️ ĐĂNG KÝ HỌC PHẦN TRỰC TUYẾN</h3>

                        {!isRegistrationTime ? (
                            <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)', backgroundColor: 'var(--color-bg)', borderRadius: '4px', border: '1px dashed var(--color-border)' }}>
                                <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔒</div>
                                <h4 style={{ color: 'var(--color-warning)', margin: '0 0 5px 0' }}>CỔNG ĐĂNG KÝ TÍN CHỈ CHƯA ĐẾN GIỜ KHỞI CHẠY</h4>
                                <p style={{ margin: 0, fontSize: '13px' }}>Vui lòng quay lại khi đồng hồ chạm mốc thời gian quy định tại bảng thông báo phía trên.</p>
                            </div>
                        ) : availableClasses.length === 0 ? (
                            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', backgroundColor: 'var(--color-bg)', borderRadius: '4px' }}>
                                Cổng đã mở thành công nhưng chưa có môn học phần nào thuộc học kỳ {activePeriodInfo?.semester} được Ban giáo vụ tích chọn mở đăng ký.
                            </div>
                        ) : (
                            <table style={tableStyle}>
                                <thead>
                                <tr style={thStyle}><th>Mã Lớp HP</th><th>Tên Môn Học</th><th>Số Tín</th><th>Giảng Viên</th><th>Lịch Học Thiết Kế</th><th>Thao Tác</th></tr>
                                </thead>
                                <tbody>
                                {availableClasses.map(c => (
                                    <tr key={c.id} style={trStyle}>
                                        <td style={{fontWeight:'bold', color: 'var(--text-cyan)'}}>{c.code}</td>
                                        <td>{c.subjectName}</td><td>{c.credits} tín</td><td>{c.teacherName || 'Chưa xếp'}</td>
                                        <td style={{color:'var(--color-warning)', fontWeight:'bold'}}>{c.schedule}</td>
                                        <td>
                                            <button onClick={() => handleEnroll(c.id)} style={{ padding: '6px 12px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight:'bold' }}>Đăng ký chọn lớp</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Phần 2: Xem Thời khóa biểu lịch học cá nhân */}
                    <div style={{ padding: '15px', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ color: 'var(--color-warning)', marginBottom: '15px', marginTop: 0 }}>📅 THỜI KHÓA BIỂU & LỊCH HỌC CÁ NHÂN ĐÃ ĐĂNG KÝ ĐỒNG BỘ DATA</h3>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}><th>Mã Lớp HP</th><th>Tên Môn Học</th><th>Số Tín Nhiệm</th><th>Giảng Viên</th><th>Thời Khóa Biểu Lịch Học</th><th>Hành Động Rút Môn</th></tr>
                            </thead>
                            <tbody>
                            {myRegisteredClasses.map(reg => (
                                <tr key={reg.id} style={trStyle}>
                                    <td style={{fontWeight:'bold', color:'var(--text-cyan)'}}>{reg.courseClassCode}</td>
                                    <td>{reg.subjectName}</td><td>{reg.credits} tín</td><td>{reg.teacherName}</td>
                                    <td style={{color:'var(--color-success)', fontWeight:'bold'}}>{reg.schedule || 'Chưa xếp lịch'}</td>
                                    <td>
                                        <button
                                            onClick={() => handleUnenroll(reg.courseClassId)}
                                            disabled={!isRegistrationTime}
                                            style={{ padding: '6px 12px', backgroundColor: isRegistrationTime ? 'var(--color-danger)' : '#555', color: 'white', border: 'none', borderRadius: '4px', cursor: isRegistrationTime ? 'pointer' : 'not-allowed', fontWeight:'bold' }}
                                        >
                                            Hủy chọn lớp
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {myRegisteredClasses.length === 0 && (
                                <tr>
                                    <td colSpan="6" style={{textAlign: 'center', padding: '15px', color: 'var(--text-muted)'}}>Bạn chưa thực hiện thao tác chọn lớp học phần nào trong học kỳ này.</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
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
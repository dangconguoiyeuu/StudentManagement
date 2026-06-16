import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function SchedulePage() {
    const role = localStorage.getItem('roles') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';
    const teacherId = localStorage.getItem('teacherId') || '';

    const isStudent = role.includes('STUDENT');
    const isTeacher = role.includes('TEACHER');

    const [loading, setLoading] = useState(false);
    const [scheduleGrid, setScheduleGrid] = useState({
        'Sáng': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
        'Chiều': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
        'Tối': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] }
    });

    useEffect(() => {
        loadScheduleData();
    }, [role]);

    const loadScheduleData = async () => {
        setLoading(true);
        try {
            let validClasses = [];

            if (isStudent) {
                const myClasses = await axiosClient.get(`/registration/my-classes?_t=${Date.now()}`);
                validClasses = myClasses.filter(reg => reg.status === 'APPROVED');
            } else if (isTeacher && teacherId) {
                validClasses = await axiosClient.get(`/registration/teacher/${teacherId}/classes?_t=${Date.now()}`)
            }

            buildGrid(validClasses);
        } catch (err) {
            console.error('Lỗi tải thời khóa biểu:', err);
        } finally {
            setLoading(false);
        }
    };

    const buildGrid = (classes) => {
        // Khởi tạo lưới rỗng
        const newGrid = {
            'Sáng': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
            'Chiều': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] },
            'Tối': { '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], 'CN': [] }
        };

        classes.forEach(cls => {
            const rawSchedule = cls.schedule || '';
            if (!rawSchedule) return;

            const sessions = rawSchedule.split('|');

            sessions.forEach(sessionStr => {
                const lowerStr = sessionStr.toLowerCase();

                // 1. Bóc tách Thứ
                let dayKey = '';
                if (lowerStr.includes('chủ nhật') || lowerStr.includes('cn')) dayKey = 'CN';
                else {
                    const dayMatch = lowerStr.match(/thứ\s*(\d+)/) || lowerStr.match(/t(\d+)/);
                    if (dayMatch) dayKey = dayMatch[1];
                }

                // 2. Bóc tách Ca (Sáng/Chiều/Tối)
                let shiftKey = '';
                if (lowerStr.includes('sáng') || lowerStr.match(/tiết\s*[1-4]/)) shiftKey = 'Sáng';
                else if (lowerStr.includes('chiều') || lowerStr.match(/tiết\s*[5-8]/)) shiftKey = 'Chiều';
                else if (lowerStr.includes('tối') || lowerStr.match(/tiết\s*(9|10|11|12)/)) shiftKey = 'Tối';

                // 3. Bóc tách Tiết học
                const timeMatch = sessionStr.match(/\(Tiết\s*(.+?)\)/i);
                const timeStr = timeMatch ? `Tiết ${timeMatch[1]}` : shiftKey;

                // 4. Bóc tách Phòng học
                const roomMatch = sessionStr.match(/Phòng\s*(.+)/i);
                const roomStr = roomMatch ? roomMatch[1].trim() : 'Chưa xếp';

                // Ném vào ô tương ứng trên lưới kèm theo dữ liệu đã bóc tách
                if (dayKey && shiftKey && newGrid[shiftKey][dayKey]) {
                    newGrid[shiftKey][dayKey].push({
                        ...cls,
                        extractedTime: timeStr,
                        extractedRoom: roomStr
                    });
                }
            });
        });

        setScheduleGrid(newGrid);
    };

    const daysList = ['2', '3', '4', '5', '6', '7', 'CN'];
    const shiftsList = [
        { key: 'Sáng', label: 'Buổi Sáng', time: '(Tiết 1-4)' },
        { key: 'Chiều', label: 'Buổi Chiều', time: '(Tiết 5-8)' },
        { key: 'Tối', label: 'Buổi Tối', time: '(Tiết 9-12)' }
    ];

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>
                    {isTeacher ? '👨‍🏫 LỊCH GIẢNG DẠY CÁ NHÂN' : '🎓 THỜI KHÓA BIỂU HỌC TẬP'}
                </h2>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                    {isTeacher
                        ? 'Lịch hiển thị các lớp học phần bạn được phân công giảng dạy.'
                        : 'Lưu ý: Thời khóa biểu chỉ hiển thị những môn học đã được Giảng viên phê duyệt đơn đăng ký.'}
                </p>
            </div>

            {loading ? (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Đang xếp lịch...</p>
            ) : (
                <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-surface)', borderRadius: '6px', border: '1px solid var(--color-border)', padding: '15px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px', tableLayout: 'fixed' }}>
                        <thead>
                        <tr>
                            <th style={{ ...thStyle, width: '10%' }}>Ca Học</th>
                            {daysList.map(day => (
                                <th key={day} style={{ ...thStyle, width: '12.8%' }}>
                                    {day === 'CN' ? 'Chủ Nhật' : `Thứ ${day}`}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {shiftsList.map(shift => (
                            <tr key={shift.key}>
                                {/* Cột tiêu đề Ca học */}
                                <td style={{ ...tdShiftLabelStyle }}>
                                    <div style={{ fontWeight: 'bold', color: 'var(--color-warning)' }}>{shift.label}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{shift.time}</div>
                                </td>

                                {/* Các cột Thứ trong tuần */}
                                {daysList.map(day => {
                                    const classesInSlot = scheduleGrid[shift.key][day];
                                    return (
                                        <td key={day} style={{ ...tdStyle, verticalAlign: 'top', backgroundColor: classesInSlot.length > 0 ? 'rgba(0, 188, 212, 0.05)' : 'transparent' }}>
                                            {classesInSlot.length > 0 ? (
                                                classesInSlot.map((cls, index) => (
                                                    <div key={index} style={classCardStyle}>
                                                        {/* Tên môn */}
                                                        <div style={{ fontWeight: 'bold', color: 'var(--text-cyan)', fontSize: '13px', lineHeight: '1.4' }}>
                                                            {cls.subjectName}
                                                        </div>
                                                        {/* Tiết học */}
                                                        <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-warning)' }}>
                                                            {cls.extractedTime}
                                                        </div>
                                                        {/* GV */}
                                                        <div style={{ fontSize: '12px' }}>
                                                            <span style={{ color: 'var(--text-muted)' }}>GV:</span> {cls.teacherName || 'Chưa xếp'}
                                                        </div>
                                                        {/* Mã môn */}
                                                        <div style={{ fontSize: '12px' }}>
                                                            <span style={{ color: 'var(--text-muted)' }}>Mã:</span> {cls.code || cls.courseClassCode}
                                                        </div>
                                                        {/* Phòng */}
                                                        <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-success)' }}>
                                                            Phòng: {cls.extractedRoom}
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '20px', opacity: 0.5 }}>
                                                    Trống
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

// ================= CSS CHO BẢNG LỊCH =================
const thStyle = {
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface-hover)',
    color: 'var(--text-cyan)',
    padding: '12px',
    textAlign: 'center',
    fontWeight: 'bold'
};

const tdShiftLabelStyle = {
    border: '1px solid var(--color-border)',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: '15px',
    textAlign: 'center',
    verticalAlign: 'middle'
};

const tdStyle = {
    border: '1px solid var(--color-border)',
    padding: '10px',
    height: '140px'
};

const classCardStyle = {
    backgroundColor: 'var(--color-bg)',
    borderTop: '4px solid var(--color-success)', // Chuyển viền đánh dấu lên trên đỉnh để hợp với thiết kế căn giữa
    padding: '10px 8px',
    borderRadius: '6px',
    marginBottom: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    wordBreak: 'break-word',   // Tự động bẻ chữ nếu quá dài
    whiteSpace: 'normal',      // Ép tự động xuống dòng
    textAlign: 'center',       // Căn giữa toàn bộ chữ
    display: 'flex',
    flexDirection: 'column',
    gap: '3px'                 // Khoảng cách giữa các dòng
};
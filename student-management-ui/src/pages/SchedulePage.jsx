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
                // 🔥 SỬA 1: Bỏ localStorage, lọc lịch dựa vào trạng thái APPROVED từ Backend trả về
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
            const fullSchedule = (cls.schedule || '').toLowerCase();
            if (!fullSchedule) return;

            // 🔥 SỬA 2: Tách chuỗi theo dấu "|" để rải đều các ca học ra các ô tương ứng
            const sessions = fullSchedule.split('|');

            sessions.forEach(sessionStr => {
                // Bóc tách Thứ cho ca này
                let dayKey = '';
                if (sessionStr.includes('chủ nhật') || sessionStr.includes('cn')) dayKey = 'CN';
                else {
                    const dayMatch = sessionStr.match(/thứ\s*(\d+)/) || sessionStr.match(/t(\d+)/);
                    if (dayMatch) dayKey = dayMatch[1];
                }

                // Bóc tách Buổi cho ca này
                let shiftKey = '';
                if (sessionStr.includes('sáng') || sessionStr.match(/tiết\s*[1-4]/)) shiftKey = 'Sáng';
                else if (sessionStr.includes('chiều') || sessionStr.match(/tiết\s*[5-8]/)) shiftKey = 'Chiều';
                else if (sessionStr.includes('tối') || sessionStr.match(/tiết\s*(9|10|11|12)/)) shiftKey = 'Tối';

                // Ném vào ô tương ứng trên lưới
                if (dayKey && shiftKey && newGrid[shiftKey][dayKey]) {
                    newGrid[shiftKey][dayKey].push(cls);
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
                                                        <div style={{ fontWeight: 'bold', color: 'var(--text-cyan)', marginBottom: '4px' }}>
                                                            {cls.subjectName}
                                                        </div>
                                                        <div style={{ fontSize: '12px', marginBottom: '2px' }}>
                                                            <span style={{ color: 'var(--text-muted)' }}>Mã HP:</span> {cls.code || cls.courseClassCode}
                                                        </div>
                                                        {isStudent && (
                                                            <div style={{ fontSize: '12px', marginBottom: '2px' }}>
                                                                <span style={{ color: 'var(--text-muted)' }}>GV:</span> {cls.teacherName || 'Chưa xếp'}
                                                            </div>
                                                        )}
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
    borderLeft: '4px solid var(--color-success)',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    wordWrap: 'break-word'
};
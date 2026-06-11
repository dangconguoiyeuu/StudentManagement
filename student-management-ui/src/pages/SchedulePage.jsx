import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function SchedulePage() {
    const userRole = localStorage.getItem('roles') || '';
    const username = localStorage.getItem('username') || '';
    const teacherId = localStorage.getItem('teacherId') || '';
    const isTeacher = userRole.includes('TEACHER');
    const isStudent = userRole.includes('STUDENT');

    const [scheduleList, setScheduleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Khung danh sách 7 cột Thứ từ Thứ 2 đến Chủ Nhật nằm ngang
    const daysOfWeek = [
        { key: '2', label: 'Thứ 2' },
        { key: '3', label: 'Thứ 3' },
        { key: '4', label: 'Thứ 4' },
        { key: '5', label: 'Thứ 5' },
        { key: '6', label: 'Thứ 6' },
        { key: '7', label: 'Thứ 7' },
        { key: 'CN', label: 'Chủ Nhật' }
    ];

    useEffect(() => {
        if (isTeacher || isStudent) {
            fetchScheduleData();
        }
    }, [isTeacher, isStudent]);

    const fetchScheduleData = async () => {
        try {
            setLoading(true);
            setError('');
            if (isTeacher) {
                const response = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
                setScheduleList(response || []);
            } else if (isStudent) {
                const response = await axiosClient.get('/registration/my-classes');
                setScheduleList(response || []);
            }
        } catch (err) {
            setError('Không thể kết nối cơ sở dữ liệu lịch trình hệ thống!');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // 🔥 THUẬT TOÁN GỘP MÔN VÀO THỨ - TỰ ĐỘNG SẮP XẾP THEO THỨ TỰ SÁNG -> CHIỀU -> TỐI
    const getDayData = (dayKey) => {
        const items = scheduleList.filter(item => {
            const schedStr = (item.schedule || '').toLowerCase();
            if (!schedStr) return false;

            let isMatchedDay = false;
            if (dayKey === 'CN' && (schedStr.includes('chủ nhật') || schedStr.includes('cn'))) isMatchedDay = true;
            else if (schedStr.includes(`thứ ${dayKey}`) || schedStr.includes(`t${dayKey}`)) isMatchedDay = true;

            return isMatchedDay;
        });

        return items.map(item => {
            const schedStr = (item.schedule || '').toLowerCase();
            let priority = 1;

            if (schedStr.includes('sáng')) {
                priority = 1;
            } else if (schedStr.includes('chiều')) {
                priority = 2;
            } else if (schedStr.includes('tối')) {
                priority = 3;
            } else {
                const tietMatch = schedStr.match(/tiết\s*(\d+)/);
                if (tietMatch) {
                    const startTiet = parseInt(tietMatch[1], 10);
                    if (startTiet >= 6 && startTiet <= 10) {
                        priority = 2;
                    } else if (startTiet >= 11) {
                        priority = 3;
                    }
                }
            }
            return { ...item, priority };
        }).sort((a, b) => a.priority - b.priority); // Sắp xếp tăng dần theo mốc thời gian Sáng -> Chiều -> Tối trong ngày
    };

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px' }}>Đang nạp dữ liệu lịch trình tuần...</div>;
    if (error) return <div style={{ color: 'var(--color-danger)', textAlign: 'center', padding: '40px', fontWeight: 'bold' }}>⚠️ {error}</div>;

    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)', textAlign: 'left' }}>
            <div style={{ marginBottom: '25px', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
                <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>
                    {isTeacher ? '📅 LỊCH DẠY CỦA GIẢNG VIÊN' : '📅 LỊCH HỌC CỦA SINH VIÊN'}
                </h2>
                <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                    {isTeacher
                        ? `Xin chào Thầy/Cô ${username}. Xem lịch trình giảng dạy chi tiết học phần đảm nhiệm.`
                        : `Mã số học viên: ${username}. Hệ thống thời khóa biểu cá nhân phân tách theo ngày.`
                    }
                </p>
            </div>

            <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                <table style={matrixTableStyle}>
                    <thead>
                    <tr style={thRowStyle}>
                        {daysOfWeek.map(day => (
                            <th key={day.key} style={dayHeaderStyle}>{day.label}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={trStyle}>
                        {daysOfWeek.map(day => {
                            const cellItems = getDayData(day.key);

                            return (
                                <td key={day.key} style={cellTdStyle}>
                                    {cellItems.map((item, idx) => (
                                        <div key={idx} style={{
                                            ...miniCardStyle,
                                            borderTop: isTeacher ? '3px solid var(--color-warning)' : '3px solid var(--color-success)'
                                        }}>
                                            {/* 🔥 ĐÃ BỎ: Dòng hiển thị nhãn Ca Sáng/Chiều/Tối cũ đã xóa hoàn toàn tại đây */}

                                            {/* Tên Môn Học */}
                                            <div style={miniSubjectStyle}>
                                                {item.subjectName}
                                            </div>

                                            {/* Cấu trúc căn giữa: Nhãn hàng trên - Giá trị hàng dưới */}
                                            <div style={miniInfoBlock}>
                                                <span style={labelStyle}>Mã lớp HP:</span>
                                                <b style={{ color: 'var(--text-cyan)', fontSize: '13px' }}>{isTeacher ? item.code : item.courseClassCode}</b>
                                            </div>

                                            {isTeacher ? (
                                                <div style={miniInfoBlock}>
                                                    <span style={labelStyle}>Sĩ số lớp:</span>
                                                    <b style={{ color: 'white', fontSize: '13px' }}>{item.registeredStudents} SV</b>
                                                </div>
                                            ) : (
                                                <>
                                                    <div style={miniInfoBlock}>
                                                        <span style={labelStyle}>Số tín chỉ:</span>
                                                        <b style={{ color: 'var(--color-warning)', fontSize: '13px' }}>{item.credits} tín</b>
                                                    </div>
                                                    <div style={miniInfoBlock}>
                                                        <span style={labelStyle}>Cán bộ GD:</span>
                                                        <b style={{ color: 'white', fontSize: '13px' }}>{item.teacherName || 'Chưa xếp'}</b>
                                                    </div>
                                                </>
                                            )}

                                            <div style={miniScheduleBox}>
                                                📍 {item.schedule}
                                            </div>
                                        </div>
                                    ))}
                                    {cellItems.length === 0 && (
                                        <div style={{ color: 'rgba(255,255,255,0.03)', fontSize: '12px', fontStyle: 'italic', textAlign: 'center', padding: '40px 0' }}>
                                            Trống lịch
                                        </div>
                                    )}
                                </td>
                            );
                        })}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const matrixTableStyle = { width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', minWidth: '1050px' };
const thRowStyle = { backgroundColor: 'var(--color-bg)', borderBottom: '2px solid var(--text-cyan)' };
const dayHeaderStyle = { padding: '12px 6px', color: 'var(--text-cyan)', fontSize: '14px', fontWeight: 'bold', border: '1px solid var(--color-border)', textAlign: 'center' };
const trStyle = { borderBottom: '1px solid var(--color-border)' };
const cellTdStyle = { padding: '8px 5px', border: '1px solid var(--color-border)', verticalAlign: 'top', backgroundColor: 'rgba(255, 255, 255, 0.005)', width: '14.28%' };

const miniCardStyle = {
    backgroundColor: 'var(--color-bg)',
    padding: '12px 8px',
    borderRadius: '5px',
    border: '1px solid var(--color-border)',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    marginBottom: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.18)'
};

const miniSubjectStyle = {
    fontSize: '13.5px',
    fontWeight: 'bold',
    color: 'white',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    lineHeight: '1.3',
    marginBottom: '8px'
};

const miniInfoBlock = {
    margin: '5px 0',
    display: 'block',
    textAlign: 'center'
};

const labelStyle = {
    display: 'block',
    fontSize: '11px',
    color: 'var(--text-muted)',
    marginBottom: '2px'
};

const miniScheduleBox = {
    marginTop: '6px',
    padding: '6px 4px',
    backgroundColor: 'var(--color-surface-hover)',
    borderRadius: '4px',
    fontSize: '11px',
    color: 'var(--color-warning)',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    lineHeight: '1.4',
    textAlign: 'center'
};

const primaryBtnStyle = { padding: '8px 24px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
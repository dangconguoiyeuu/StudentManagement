import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function GradePage() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');

    const [summary, setSummary] = useState(null); // Điểm của 1 SV
    const [allGrades, setAllGrades] = useState([]); // Bảng điểm toàn trường
    const [loading, setLoading] = useState(false);

    const [courseClassId, setCourseClassId] = useState('');
    const [attendance, setAttendance] = useState('');
    const [midterm, setMidterm] = useState('');
    const [finalGrade, setFinalGrade] = useState('');
    const [inputError, setInputError] = useState('');

    const userRole = localStorage.getItem('roles') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';

    const isAdmin = userRole.includes('ADMIN');
    const isTeacher = userRole.includes('TEACHER');
    const canViewAll = isAdmin || isTeacher;

    useEffect(() => {
        if (canViewAll) {
            // Lấy danh sách SV để đưa vào Dropdown
            axiosClient.get('/students').then(res => setStudents(res)).catch(err => console.error(err));
            // Lấy BẢNG ĐIỂM TOÀN TRƯỜNG làm mặc định
            fetchAllSystemGrades();
        } else {
            // Sinh viên thì khóa chặt ID của mình
            setSelectedStudent(loggedInStudentId);
        }
    }, [canViewAll, loggedInStudentId]);

    useEffect(() => {
        if (selectedStudent) {
            fetchAcademicSummary(selectedStudent);
        } else if (canViewAll) {
            setSummary(null); // Trở về chế độ xem toàn trường
        }
    }, [selectedStudent]);

    // Gọi API lấy điểm 1 Sinh Viên
    const fetchAcademicSummary = async (studentId) => {
        try {
            setLoading(true);
            const data = await axiosClient.get(`/grades/student/${studentId}/summary`);
            setSummary(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Gọi API lấy BẢNG ĐIỂM TOÀN HỆ THỐNG
    const fetchAllSystemGrades = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/grades');
            setAllGrades(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputGrade = async (e) => {
        e.preventDefault();
        setInputError('');
        if (!selectedStudent || !courseClassId) {
            setInputError('Vui lòng chọn Sinh viên cụ thể từ danh sách bên trên trước khi nhập điểm!');
            return;
        }
        try {
            await axiosClient.post('/grades', {
                // ✅ FIX: Giữ nguyên String "HS_01", KHÔNG ép thành Number
                studentId: selectedStudent,
                courseClassId: Number(courseClassId),
                attendanceGrade: attendance !== '' ? Number(attendance) : null,
                midtermGrade: midterm !== '' ? Number(midterm) : null,
                finalGrade: finalGrade !== '' ? Number(finalGrade) : null
            });
            alert('Nhập điểm thành công!');
            setCourseClassId(''); setAttendance(''); setMidterm(''); setFinalGrade('');
            fetchAcademicSummary(selectedStudent);
        } catch (err) {
            setInputError(err || 'Lỗi nhập điểm!');
        }
    };

    return (
        <div style={{ color: 'var(--text-main)', padding: 'var(--spacing-sm)' }}>
            <h2 style={{ color: 'var(--text-cyan)', marginBottom: 'var(--spacing-xl)' }}>
                QUẢN LÝ ĐIỂM SỐ & GPA HỆ THỐNG
            </h2>

            {canViewAll ? (
                <div style={{ backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: '6px', marginBottom: 'var(--spacing-xl)', border: '1px solid var(--color-border)' }}>
                    <label style={{ fontWeight: 'bold', marginRight: 'var(--spacing-md)' }}>🔍 Tra cứu điểm số:</label>
                    <select
                        value={selectedStudent}
                        onChange={(e) => setSelectedStudent(e.target.value)}
                        style={{ padding: 'var(--spacing-sm)', borderRadius: '4px', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', border: '1px solid var(--color-border)', outline: 'none', minWidth: '300px' }}
                    >
                        <option value="">📋 Xem bảng điểm Tổng hợp Toàn trường</option>
                        {students.map(s => (
                            <option key={s.id} value={s.id}>SV: {s.studentCode} - {s.lastName} {s.firstName}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <div style={{ backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-md)', borderRadius: '6px', marginBottom: 'var(--spacing-xl)', border: '1px solid var(--color-border)', color: 'var(--color-warning)', fontWeight: 'bold' }}>
                    🔒 Chế độ: Sinh viên đang xem kết quả học tập cá nhân
                </div>
            )}

            <div style={{ display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'flex-start' }}>

                {/* CỘT BÊN TRÁI: HIỂN THỊ BẢNG ĐIỂM */}
                <div style={{ flex: 2, backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-xl)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>

                    {/* CHẾ ĐỘ 1: XEM 1 SINH VIÊN CỤ THỂ */}
                    {summary && (
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: 'var(--spacing-lg)', color: 'var(--color-warning)' }}>📋 Kết Quả Tích Lũy Cá Nhân</h3>
                            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                                <div style={{ flex: 1, backgroundColor: 'var(--color-primary)', padding: 'var(--spacing-lg)', borderRadius: '6px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '13px', opacity: 0.9 }}>Tín Chỉ Tích Lũy</span>
                                    <h2 style={{ margin: '5px 0 0 0', fontSize: 'var(--font-title)' }}>{summary.totalCredits}</h2>
                                </div>
                                <div style={{ flex: 1, backgroundColor: 'var(--color-success)', padding: 'var(--spacing-lg)', borderRadius: '6px', textAlign: 'center' }}>
                                    <span style={{ fontSize: '13px', opacity: 0.9 }}>GPA Hệ 10</span>
                                    <h2 style={{ margin: '5px 0 0 0', fontSize: 'var(--font-title)' }}>{summary.gpaSystem10}</h2>
                                </div>
                                <div style={{ flex: 1, backgroundColor: 'var(--color-warning)', padding: 'var(--spacing-lg)', borderRadius: '6px', textAlign: 'center', color: '#000' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>GPA Hệ 4</span>
                                    <h2 style={{ margin: '5px 0 0 0', fontSize: 'var(--font-title)' }}>{summary.gpaSystem4}</h2>
                                </div>
                            </div>

                            {/* Bảng chi tiết điểm từng môn */}
                            {summary.details && summary.details.length > 0 && (
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 'var(--spacing-sm)' }}>
                                    <thead>
                                    <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Môn Học</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Lớp HP</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>CC</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>GK</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>CK</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Tổng</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Chữ</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Hệ 4</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {summary.details.map((d, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: 'var(--spacing-md)' }}>{d.subjectName}</td>
                                            <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-warning)' }}>{d.courseClassCode}</td>
                                            <td style={{ padding: 'var(--spacing-md)' }}>{d.attendanceGrade}</td>
                                            <td style={{ padding: 'var(--spacing-md)' }}>{d.midtermGrade}</td>
                                            <td style={{ padding: 'var(--spacing-md)' }}>{d.finalGrade}</td>
                                            <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold' }}>{d.overallGrade}</td>
                                            <td style={{ padding: 'var(--spacing-md)', color: d.letterGrade === 'F' ? 'var(--color-danger)' : 'var(--color-success)', fontWeight: 'bold' }}>{d.letterGrade}</td>
                                            <td style={{ padding: 'var(--spacing-md)' }}>{d.grade4}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}

                    {/* CHẾ ĐỘ 2: XEM TOÀN TRƯỜNG (KHI ADMIN/TEACHER CHƯA CHỌN SV NÀO) */}
                    {!summary && canViewAll && (
                        <div>
                            <h3 style={{ marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>🌍 Bảng Điểm Toàn Hệ Thống</h3>
                            {loading ? <p>Đang tải dữ liệu...</p> : (
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 'var(--spacing-sm)' }}>
                                    <thead>
                                    <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Sinh Viên</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Môn Học</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Lớp HP</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Điểm Tổng</th>
                                        <th style={{ padding: 'var(--spacing-md)' }}>Điểm Chữ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {allGrades.map((g, index) => (
                                        <tr key={index} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: 'var(--spacing-md)' }}><b>{g.studentName}</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>{g.studentCode}</span></td>
                                            <td style={{ padding: 'var(--spacing-md)' }}>{g.subjectName}</td>
                                            <td style={{ padding: 'var(--spacing-md)', color: 'var(--color-warning)' }}>{g.courseClassCode}</td>
                                            <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold' }}>{g.overallGrade}</td>
                                            <td style={{ padding: 'var(--spacing-md)', color: g.letterGrade === 'F' ? 'var(--color-danger)' : 'var(--color-success)', fontWeight: 'bold' }}>{g.letterGrade}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}

                    {/* CHẾ ĐỘ 3: SINH VIÊN XEM ĐIỂM NHƯNG CHƯA CÓ DỮ LIỆU */}
                    {!summary && !canViewAll && !loading && (
                        <p style={{ color: 'var(--text-muted)' }}>Chưa có dữ liệu điểm nào được ghi nhận.</p>
                    )}
                </div>

                {/* CỘT BÊN PHẢI: FORM NHẬP ĐIỂM (CHỈ TEACHER) */}
                {isTeacher && (
                    <div style={{ flex: 1, backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-xl)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                        <h3>✍️ Nhập Điểm Thành Phần</h3>
                        {inputError && <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-sm)' }}>{inputError}</div>}

                        {!selectedStudent ? (
                            <div style={{ color: 'var(--color-warning)', fontSize: '14px' }}>
                                ⚠️ Vui lòng chọn một sinh viên ở Menu bên trên để kích hoạt Form nhập điểm.
                            </div>
                        ) : (
                            <form onSubmit={handleInputGrade}>
                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 'bold' }}>ID Lớp Học Phần:</label>
                                    <input type="number" placeholder="Ví dụ: 2" value={courseClassId} onChange={(e) => setCourseClassId(e.target.value)} style={inputStyle} />
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Điểm Chuyên Cần:</label>
                                    <input type="number" step="0.1" min="0" max="10" value={attendance} onChange={(e) => setAttendance(e.target.value)} style={inputStyle} />
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Điểm Giữa Kỳ:</label>
                                    <input type="number" step="0.1" min="0" max="10" value={midterm} onChange={(e) => setMidterm(e.target.value)} style={inputStyle} />
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Điểm Cuối Kỳ:</label>
                                    <input type="number" step="0.1" min="0" max="10" value={finalGrade} onChange={(e) => setFinalGrade(e.target.value)} style={inputStyle} />
                                </div>
                                <button type="submit" style={{ width: '100%', padding: 'var(--spacing-sm) var(--spacing-lg)', backgroundColor: 'var(--color-primary)', color: 'var(--text-main)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Lưu & Xác Nhận Điểm</button>
                            </form>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };
export default GradePage;

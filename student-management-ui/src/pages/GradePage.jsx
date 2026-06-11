import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function GradePage() {
    const userRole = localStorage.getItem('roles') || '';
    const username = localStorage.getItem('username') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';

    const isTeacher = userRole.includes('TEACHER');
    const isAdmin = userRole.includes('ADMIN');
    const isStudent = userRole.includes('STUDENT');

    // --- STATES NẠP DỮ LIỆU GỐC TỪ DATABASE ---
    const [allGrades, setAllGrades] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [classList, setClassList] = useState([]);

    // --- STATES GIÁ TRỊ BỘ LỌC ĐANG CHỌN ---
    const [selectedCohort, setSelectedCohort] = useState('');
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    // --- STATES DROPDOWN ĐAN XEN ĐỘNG (DASHBOARD CASCADING) ---
    const [cohortOptions, setCohortOptions] = useState([]);
    const [deptOptions, setDeptOptions] = useState([]);
    const [classOptions, setClassOptions] = useState([]);

    // --- STATES QUẢN LÝ BẢNG ĐIỂM HIỂN THỊ REALTIME ---
    const [displayGrades, setDisplayGrades] = useState([]);
    const [editGradesMap, setEditGradesMap] = useState({});
    const [isBulkEdit, setIsBulkEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', isError: false });

    // --- STATE ĐỘC QUYỀN CHO SINH VIÊN ---
    const [studentSummary, setStudentSummary] = useState(null);

    // ==================== 🔄 LUỒNG LOAD DỮ LIỆU BAN ĐẦU ====================
    useEffect(() => {
        if (isAdmin || isTeacher) {
            loadSystemInitialData();
        }
        if (isStudent && loggedInStudentId) {
            fetchStudentTranscript(loggedInStudentId);
        }
    }, [isStudent, loggedInStudentId]);

    // BỘ LỌC REALTIME KẾT HỢP ĐAN XEN CASCADING 2 CHIỀU
    useEffect(() => {
        if (allStudents.length === 0) return;

        const availCohorts = allStudents.filter(s =>
            (!selectedDept || s.departmentName === departments.find(d => d.id === Number(selectedDept))?.name) &&
            (!selectedClass || s.classId === Number(selectedClass))
        ).map(s => s.cohort).filter(Boolean);
        setCohortOptions([...new Set(availCohorts)].sort());

        const availDeptNames = allStudents.filter(s =>
            (!selectedCohort || s.cohort === selectedCohort) &&
            (!selectedClass || s.classId === Number(selectedClass))
        ).map(s => s.departmentName).filter(Boolean);
        setDeptOptions(departments.filter(d => availDeptNames.includes(d.name)));

        const availClassIds = allStudents.filter(s =>
            (!selectedCohort || s.cohort === selectedCohort) &&
            (!selectedDept || s.departmentName === departments.find(d => d.id === Number(selectedDept))?.name)
        ).map(s => s.classId).filter(Boolean);
        setClassOptions(classList.filter(c => availClassIds.includes(c.id)));

        recalculateFiltersAndData();
    }, [selectedCohort, selectedDept, selectedClass, allGrades, allStudents, departments, classList]);

    const showMessage = (text, isError = false) => {
        setMessage({ text, isError });
        setTimeout(() => setMessage({ text: '', isError: false }), 4000);
    };

    const loadSystemInitialData = async () => {
        try {
            setLoading(true);
            const [deptsData, classesData, studentsData, gradesData] = await Promise.all([
                axiosClient.get('/departments'),
                axiosClient.get('/classes'),
                axiosClient.get('/students?includeInactive=false'),
                axiosClient.get('/grades').catch(() => [])
            ]);

            setDepartments(deptsData || []);
            setClassList(classesData || []);
            setAllStudents(studentsData || []);
            setAllGrades(gradesData || []);
        } catch (err) {
            showMessage('Không thể nạp cơ sở dữ liệu hệ thống học phần!', true);
        } finally {
            setLoading(false);
        }
    };

    const recalculateFiltersAndData = () => {
        let filtered = allGrades.map(grade => {
            const studentObj = allStudents.find(s => s.id === grade.studentId);
            return {
                ...grade,
                studentCode: studentObj?.studentCode || 'N/A',
                studentName: studentObj ? `${studentObj.lastName} ${studentObj.firstName}` : 'Ẩn danh',
                cohort: studentObj?.cohort || 'Khóa 1',
                classId: studentObj?.classId || null,
                departmentName: studentObj?.departmentName || ''
            };
        });

        if (selectedCohort) filtered = filtered.filter(g => g.cohort === selectedCohort);
        if (selectedDept) {
            const deptObj = departments.find(d => d.id === Number(selectedDept));
            if (deptObj) filtered = filtered.filter(g => g.departmentName === deptObj.name);
        }
        if (selectedClass) filtered = filtered.filter(g => g.classId === Number(selectedClass));

        setDisplayGrades(filtered);

        const newEditMap = {};
        filtered.forEach(g => {
            newEditMap[g.id] = {
                cc: g.attendanceGrade !== undefined && g.attendanceGrade !== null ? String(g.attendanceGrade) : '',
                gk: g.midtermGrade !== undefined && g.midtermGrade !== null ? String(g.midtermGrade) : '',
                ck: g.finalGrade !== undefined && g.finalGrade !== null ? String(g.finalGrade) : '',
                studentId: g.studentId,
                courseClassId: g.courseClassId
            };
        });
        setEditGradesMap(newEditMap);
    };

    const fetchStudentTranscript = async (studentId) => {
        try {
            setLoading(true);
            const data = await axiosClient.get(`/grades/student/${studentId}/summary`);
            setStudentSummary(data);
        } catch (err) {
            showMessage('Không thể tải bảng điểm tích lũy cá nhân!', true);
        } finally {
            setLoading(false);
        }
    };

    const handleGradeInputChange = (gradeId, field, value) => {
        if (value !== '') {
            if (!/^\d*\.?\d*$/.test(value)) return;
            const num = parseFloat(value);
            if (!isNaN(num) && (num < 0 || num > 10)) return;
        }
        setEditGradesMap(prev => ({
            ...prev,
            [gradeId]: { ...prev[gradeId], [field]: value }
        }));
    };

    const handleBulkSave = async () => {
        try {
            setLoading(true);
            const savePromises = displayGrades.map(g => {
                const editData = editGradesMap[g.id];
                return axiosClient.put(`/grades/${g.id}`, {
                    studentId: editData.studentId,
                    courseClassId: editData.courseClassId,
                    attendanceGrade: editData.cc === '' ? 0 : Number(editData.cc),
                    midtermGrade: editData.gk === '' ? 0 : Number(editData.gk),
                    finalGrade: editData.ck === '' ? 0 : Number(editData.ck)
                });
            });

            await Promise.all(savePromises);
            showMessage('Đã cập nhật đồng bộ toàn bộ bảng điểm lớp học thành công!');
            setIsBulkEdit(false);

            const gradesData = await axiosClient.get('/grades').catch(() => []);
            setAllGrades(gradesData);
        } catch (err) {
            showMessage(err || 'Có lỗi xảy ra trong quá trình thực thi lưu bảng điểm!', true);
        } finally {
            setLoading(false);
        }
    };

    const handleDeptChange = (deptId) => {
        setSelectedDept(deptId);
        setSelectedClass('');
    };

    const handleClassChange = (classId) => {
        setSelectedClass(classId);
        if (classId) {
            const clsObj = classList.find(c => c.id === Number(classId));
            if (clsObj) {
                const matchedDept = departments.find(d => d.name === clsObj.departmentName);
                if (matchedDept) setSelectedDept(String(matchedDept.id));
            }
        }
    };

    const getAdminAggregatedRows = () => {
        let filteredStudents = [...allStudents];
        if (selectedCohort) filteredStudents = filteredStudents.filter(s => s.cohort === selectedCohort);
        if (selectedDept) {
            const deptObj = departments.find(d => d.id === Number(selectedDept));
            if (deptObj) filteredStudents = filteredStudents.filter(s => s.departmentName === deptObj.name);
        }
        if (selectedClass) filteredStudents = filteredStudents.filter(s => s.classId === Number(selectedClass));

        return filteredStudents.map((student, index) => {
            const studentGrades = allGrades.filter(g => g.studentId === student.id);
            let overallAvg = 0;
            let letterGrade = '-';

            if (studentGrades.length > 0) {
                const validValues = studentGrades.map(g => g.overallGrade).filter(v => v !== undefined && v !== null);
                if (validValues.length > 0) {
                    overallAvg = validValues.reduce((sum, v) => sum + v, 0) / validValues.length;
                    const num = parseFloat(overallAvg.toFixed(2));
                    if (num >= 9.0) letterGrade = 'A';
                    else if (num >= 8.5) letterGrade = 'B+';
                    else if (num >= 8.0) letterGrade = 'B';
                    else if (num >= 7.0) letterGrade = 'C+';
                    else if (num >= 6.5) letterGrade = 'C';
                    else if (num >= 5.5) letterGrade = 'D+';
                    else if (num >= 4.0) letterGrade = 'D';
                    else letterGrade = 'F';
                }
            }

            return {
                ...student,
                stt: index + 1,
                studentName: `${student.lastName} ${student.firstName}`,
                gpa: studentGrades.length > 0 ? overallAvg.toFixed(2) : '-',
                letterGrade: letterGrade
            };
        });
    };

    const adminRows = getAdminAggregatedRows();

    // ==================== 🎓 GIAO DIỆN 1: SINH VIÊN (STUDENT VIEW) ====================
    if (isStudent) {
        return (
            <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)', textAlign: 'left' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>📋 XEM ĐIỂM HỌC TẬP</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>Hồ sơ kết quả kết quả học tập và tích lũy cá nhân.</p>
                </div>

                {loading ? (
                    <p style={{textAlign:'center', color:'var(--text-muted)'}}>Đang tải bảng điểm học viên...</p>
                ) : studentSummary ? (
                    <div>
                        {/* Khối Card tóm tắt tích lũy cá nhân */}
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-primary)', padding: '15px', borderRadius: '6px', textAlign: 'center' }}>
                                <span style={{ fontSize: '13px', opacity: 0.9 }}>Tín Chỉ Tích Lũy</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{studentSummary.totalCredits || 0} tín</h2>
                            </div>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-success)', padding: '15px', borderRadius: '6px', textAlign: 'center' }}>
                                <span style={{ fontSize: '13px', opacity: 0.9 }}>GPA Hệ 10</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{studentSummary.gpa10 !== undefined ? studentSummary.gpa10 : studentSummary.gpaSystem10 || 0}</h2>
                            </div>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-warning)', padding: '15px', borderRadius: '6px', textAlign: 'center', color: '#000' }}>
                                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>GPA Hệ 4</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{studentSummary.gpa4 !== undefined ? studentSummary.gpa4 : studentSummary.gpaSystem4 || 0}</h2>
                            </div>
                        </div>

                        {/* Bảng chi tiết điểm các học phần */}
                        <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tableStyle}>
                                    <thead>
                                    <tr style={thStyle}>
                                        <th>Môn Học Học Phần</th>
                                        <th>Mã Lớp HP</th>
                                        <th style={thCenterStyle}>Chuyên cần</th>
                                        <th style={thCenterStyle}>Giữa kỳ</th>
                                        <th style={thCenterStyle}>Cuối kỳ</th>
                                        <th style={thCenterStyle}>Tổng Kết</th>
                                        <th style={thCenterStyle}>Điểm Chữ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {studentSummary.details?.map((d, i) => (
                                        <tr key={i} style={trStyle}>
                                            <td style={{ fontWeight: 'bold' }}>{d.subjectName}</td>
                                            <td style={{ color: 'var(--text-cyan)', fontWeight: 'bold' }}>{d.courseClassCode}</td>
                                            <td style={{ textAlign: 'center' }}>{d.attendanceGrade !== null && d.attendanceGrade !== undefined ? d.attendanceGrade : '-'}</td>
                                            <td style={{ textAlign: 'center' }}>{d.midtermGrade !== null && d.midtermGrade !== undefined ? d.midtermGrade : '-'}</td>
                                            <td style={{ textAlign: 'center' }}>{d.finalGrade !== null && d.finalGrade !== undefined ? d.finalGrade : '-'}</td>
                                            <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-success)' }}>{d.overallGrade}</td>
                                            <td style={{ textAlign: 'center', fontWeight: 'bold', color: d.letterGrade === 'F' ? 'var(--color-danger)' : 'var(--color-success)' }}>{d.letterGrade}</td>
                                        </tr>
                                    ))}
                                    {(!studentSummary.details || studentSummary.details.length === 0) && (
                                        <tr>
                                            <td colSpan="7" style={{ textAlign: 'center', padding: '15px', color: 'var(--text-muted)' }}>Chưa có dữ liệu điểm môn học nào được ghi nhận.</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p style={{ color: 'var(--text-muted)' }}>Chưa có dữ liệu kết quả học tập nào.</p>
                )}
            </div>
        );
    }

    // ==================== 👨‍🏫 GIÁO VIÊN & QUẢN TRỊ VIÊN (ADMIN & TEACHER) ====================
    return (
        <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                    <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>
                        {isTeacher ? '👨‍🏫 BẢNG NHẬP ĐIỂM THÀNH PHẦN' : '🏛️ BẢNG ĐIỂM TỔNG HỢP TOÀN TRƯỜNG'}
                    </h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                        {isTeacher ? 'Quyền hạn Giảng viên: Sửa để gõ điểm và chọn Lưu để cập nhật.' : 'Quyền hạn Quản trị viên: Theo dõi điểm số tổng kết tích lũy của từng học viên.'}
                    </p>
                </div>

                {displayGrades.length > 0 && isTeacher && (
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {!isBulkEdit ? (
                            <button onClick={() => setIsBulkEdit(true)} style={primaryBtnStyle}>Sửa</button>
                        ) : (
                            <>
                                <button onClick={() => { setIsBulkEdit(false); recalculateFiltersAndData(); }} style={{ ...primaryBtnStyle, backgroundColor: '#6c757d' }}>Hủy</button>
                                <button onClick={handleBulkSave} style={{ ...primaryBtnStyle, backgroundColor: 'var(--color-success)' }}>Lưu</button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {message.text && (
                <div style={{ padding: '12px', marginBottom: '20px', backgroundColor: message.isError ? 'var(--color-danger)' : 'var(--color-primary)', color: 'white', borderRadius: '4px', fontWeight: 'bold' }}>
                    {message.text}
                </div>
            )}

            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '140px' }}>
                    <label style={labelStyle}>⏳ Lọc theo Khóa học:</label>
                    <select value={selectedCohort} onChange={(e) => setSelectedCohort(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả các Khóa --</option>
                        {cohortOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <div style={{ flex: '1', minWidth: '180px' }}>
                    <label style={labelStyle}>🏛️ Lọc theo Khoa:</label>
                    <select value={selectedDept} onChange={(e) => handleDeptChange(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả các Khoa --</option>
                        {deptOptions.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                </div>

                <div style={{ flex: '1.2', minWidth: '180px' }}>
                    <label style={labelStyle}>👥 Lọc theo Lớp hành chính:</label>
                    <select value={selectedClass} onChange={(e) => handleClassChange(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả các Lớp --</option>
                        {classOptions.map(cls => <option key={cls.id} value={cls.id}>{cls.name}</option>)}
                    </select>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                {loading ? (
                    <p style={{textAlign:'center', color:'var(--text-muted)'}}>Đang đồng bộ cơ sở dữ liệu điểm số...</p>
                ) : isAdmin ? (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}>
                                <th style={{ width: '60px' }}>STT</th>
                                <th>Mã Sinh Viên</th>
                                <th>Họ Và Tên Học Viên</th>
                                <th>Lớp Hành Chính</th>
                                <th>Khoa Chuyên Môn</th>
                                <th>Niên Khóa</th>
                                <th style={thCenterStyle}>GPA Tích Lũy</th>
                                <th style={thCenterStyle}>Điểm Chữ Tổng Hợp</th>
                            </tr>
                            </thead>
                            <tbody>
                            {adminRows.map((row) => (
                                <tr key={row.id} style={trStyle}>
                                    <td>{row.stt}</td>
                                    <td style={{ fontWeight: 'bold', color: 'var(--color-warning)' }}>{row.studentCode}</td>
                                    <td>{row.studentName}</td>
                                    <td>{row.className || 'Chưa xếp'}</td>
                                    <td style={{ color: 'var(--text-cyan)' }}>{row.departmentName || 'Chưa xếp'}</td>
                                    <td>{row.cohort}</td>
                                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-success)', fontSize: '15px' }}>{row.gpa}</td>
                                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: row.letterGrade === 'F' ? 'var(--color-danger)' : 'var(--color-success)' }}>{row.letterGrade}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}>
                                <th style={{ width: '50px' }}>STT</th>
                                <th style={{ width: '150px' }}>Sinh Viên / Mã Số</th>
                                <th>Môn Học Phần</th>
                                <th>Mã Lớp HP</th>
                                <th style={{ ...thCenterStyle, width: '120px' }}>Chuyên cần</th>
                                <th style={{ ...thCenterStyle, width: '120px' }}>Giữa kỳ</th>
                                <th style={{ ...thCenterStyle, width: '120px' }}>Cuối kỳ</th>
                                <th style={thCenterStyle}>Tổng Kết</th>
                                <th style={thCenterStyle}>Điểm Chữ</th>
                            </tr>
                            </thead>
                            <tbody>
                            {displayGrades.map((g, index) => {
                                const editRow = editGradesMap[g.id] || { cc: '', gk: '', ck: '' };
                                const ccVal = editRow.cc === '' ? 0 : parseFloat(editRow.cc);
                                const gkVal = editRow.gk === '' ? 0 : parseFloat(editRow.gk);
                                const ckVal = editRow.ck === '' ? 0 : parseFloat(editRow.ck);
                                const currentFinal = ((ccVal * 0.1) + (gkVal * 0.3) + (ckVal * 0.6)).toFixed(2);

                                return (
                                    <tr key={g.id} style={trStyle}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <b>{g.studentName}</b><br/>
                                            <span style={{fontSize:'12px', color:'var(--color-warning)', fontWeight:'bold'}}>{g.studentCode}</span>
                                        </td>
                                        <td style={{fontWeight:'500'}}>{g.subjectName}</td>
                                        <td style={{color:'var(--text-cyan)', fontWeight:'bold'}}>{g.courseClassCode}</td>
                                        <td style={{ width: '120px', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.cc} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'cc', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>
                                        <td style={{ width: '120px', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.gk} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'gk', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>
                                        <td style={{ width: '120px', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.ck} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'ck', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-success)', fontSize: '15px' }}>
                                            {isBulkEdit ? currentFinal : g.overallGrade}
                                        </td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: g.letterGrade === 'F' ? 'var(--color-danger)' : 'var(--color-success)' }}>
                                            {g.letterGrade}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

const labelStyle = { display: 'block', fontSize: '13px', marginBottom: '6px', fontWeight: 'bold', color: 'var(--text-cyan)', textAlign: 'left' };
const selectStyle = { width: '100%', padding: '10px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none', cursor: 'pointer' };
const gradeInputStyle = { width: '65px', padding: '6px', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', textAlign: 'center', outline: 'none', transition: 'all 0.2s' };
const primaryBtnStyle = { padding: '8px 24px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '12px' };
const thCenterStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'center', padding: '12px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '12px' };
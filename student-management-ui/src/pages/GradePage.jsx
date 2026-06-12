import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export default function GradePage() {
    const userRole = localStorage.getItem('roles') || '';
    const username = localStorage.getItem('username') || '';
    const loggedInStudentId = localStorage.getItem('studentId') || '';

    const isTeacher = userRole.includes('TEACHER');
    const isAdmin = userRole.includes('ADMIN');
    const isStudent = userRole.includes('STUDENT');

    const [allGrades, setAllGrades] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [classList, setClassList] = useState([]);

    const [selectedCohort, setSelectedCohort] = useState('');
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    const [cohortOptions, setCohortOptions] = useState([]);
    const [deptOptions, setDeptOptions] = useState([]);
    const [classOptions, setClassOptions] = useState([]);

    const [displayGrades, setDisplayGrades] = useState([]);
    const [editGradesMap, setEditGradesMap] = useState({});
    const [isBulkEdit, setIsBulkEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', isError: false });

    useEffect(() => {
        if (isAdmin || isTeacher || isStudent) {
            loadSystemInitialData();
        }
    }, [isAdmin, isTeacher, isStudent]);

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
                axiosClient.get('/departments').catch(() => []),
                axiosClient.get('/classes').catch(() => []),
                axiosClient.get('/students?includeInactive=false').catch(() => []),
                axiosClient.get('/grades').catch(() => [])
            ]);

            setDepartments(deptsData || []);
            setClassList(classesData || []);
            setAllStudents(studentsData || []);

            if (isStudent && loggedInStudentId) {
                setAllGrades((gradesData || []).filter(g => String(g.studentId) === String(loggedInStudentId)));
            } else {
                setAllGrades(gradesData || []);
            }
        } catch (err) {
            showMessage('Lỗi tải dữ liệu hệ thống!', true);
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
            showMessage('Đã cập nhật điểm thành công!');
            setIsBulkEdit(false);

            const gradesData = await axiosClient.get('/grades').catch(() => []);
            setAllGrades(gradesData);
        } catch (err) {
            showMessage(err || 'Có lỗi xảy ra khi lưu bảng điểm!', true);
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

    // ==================== 🔥 LÕI TÍNH ĐIỂM CHUẨN TÍN CHỈ ====================

    // 1. Tính TỪNG MÔN HỌC (Trả về Điểm Chữ: A+, A, B+, B...)
    const getSubjectGradeDetails = (cc, gk, ck) => {
        const overall10 = (cc * 0.1 + gk * 0.3 + ck * 0.6);
        let g4 = 0.0;
        let letter = 'F';

        if (overall10 >= 9.0) { g4 = 4.0; letter = 'A+'; }
        else if (overall10 >= 8.5) { g4 = 3.8; letter = 'A'; }
        else if (overall10 >= 8.0) { g4 = 3.5; letter = 'B+'; }
        else if (overall10 >= 7.0) { g4 = 3.0; letter = 'B'; }
        else if (overall10 >= 6.5) { g4 = 2.5; letter = 'C+'; }
        else if (overall10 >= 5.5) { g4 = 2.0; letter = 'C'; }
        else if (overall10 >= 5.0) { g4 = 1.5; letter = 'D+'; }
        else if (overall10 >= 4.0) { g4 = 1.0; letter = 'D'; }

        return { overall10: Number(overall10.toFixed(2)), g4, letter };
    };

    // 2. Tính TỔNG KẾT TÍCH LŨY (Trả về Xếp Loại Học Lực chuẩn: Xuất sắc, Giỏi, Khá...)
    const calculateWeightedGPA = (gradesArray) => {
        let totalCredits = 0;
        let sum10 = 0;
        let sum4 = 0;

        gradesArray.forEach(g => {
            const credits = g.credits || 3;
            const ccVal = g.attendanceGrade !== undefined && g.attendanceGrade !== null ? Number(g.attendanceGrade) : 0;
            const gkVal = g.midtermGrade !== undefined && g.midtermGrade !== null ? Number(g.midtermGrade) : 0;
            const ckVal = g.finalGrade !== undefined && g.finalGrade !== null ? Number(g.finalGrade) : 0;

            const { overall10, g4 } = getSubjectGradeDetails(ccVal, gkVal, ckVal);

            totalCredits += credits;
            sum10 += overall10 * credits;
            sum4 += g4 * credits;
        });

        if (totalCredits === 0) return { gpa10: '-', gpa4: '-', rank: 'Chưa có' };

        const gpa10 = (sum10 / totalCredits).toFixed(2);
        const gpa4Num = sum4 / totalCredits;
        const gpa4 = gpa4Num.toFixed(2);

        // 🔥 ĐÃ FIX: Chỉ sử dụng Xếp loại học lực cho Tổng kết (Không dùng điểm chữ)
        let rank = 'Kém';
        if (gpa4Num >= 3.6) rank = 'Xuất sắc';
        else if (gpa4Num >= 3.2) rank = 'Giỏi';
        else if (gpa4Num >= 2.5) rank = 'Khá';
        else if (gpa4Num >= 2.0) rank = 'Trung bình';
        else if (gpa4Num >= 1.0) rank = 'Yếu';

        return { gpa10, gpa4, rank };
    };

    const groupGradesBySemester = (gradesArray) => {
        const grouped = {};
        gradesArray.forEach(g => {
            const sem = g.semester || 'Học kỳ tiêu chuẩn';
            if (!grouped[sem]) grouped[sem] = [];
            grouped[sem].push(g);
        });
        return grouped;
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
            const cumulative = calculateWeightedGPA(studentGrades);

            const grouped = groupGradesBySemester(studentGrades);
            const semesters = Object.keys(grouped).sort();
            const latestSem = semesters.length > 0 ? semesters[semesters.length - 1] : null;
            const latestSemGrades = latestSem ? grouped[latestSem] : [];
            const semesterGpa = calculateWeightedGPA(latestSemGrades);

            return {
                ...student,
                stt: index + 1,
                studentName: `${student.lastName} ${student.firstName}`,
                semGpa10: semesterGpa.gpa10,
                semGpa4: semesterGpa.gpa4,
                semRank: semesterGpa.rank,
                cumGpa10: cumulative.gpa10,
                cumGpa4: cumulative.gpa4,
                cumRank: cumulative.rank
            };
        });
    };

    const adminRows = getAdminAggregatedRows();

    // ==================== 🎓 GIAO DIỆN 1: SINH VIÊN (STUDENT VIEW) ====================
    if (isStudent) {
        const studentGrades = allGrades;
        const cumulative = calculateWeightedGPA(studentGrades);
        const groupedGrades = groupGradesBySemester(studentGrades);

        return (
            <div style={{ padding: 'var(--spacing-sm)', color: 'var(--text-main)', textAlign: 'left' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ margin: 0, color: 'var(--text-cyan)' }}>📋 XEM ĐIỂM HỌC TẬP CÁ NHÂN</h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>Mã học viên: {username}. Xem toàn bộ chi tiết điểm học phần và GPA phân rã theo từng học kỳ.</p>
                </div>

                {loading ? (
                    <p style={{textAlign:'center', color:'var(--text-muted)'}}>Đang tải bảng điểm học viên...</p>
                ) : (
                    <div>
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-primary)', padding: '15px', borderRadius: '6px', textAlign: 'center' }}>
                                <span style={{ fontSize: '13px', opacity: 0.9 }}>Tín Chỉ Tích Lũy</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{studentGrades.reduce((sum, g) => sum + (g.credits || 3), 0)} tín</h2>
                            </div>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-success)', padding: '15px', borderRadius: '6px', textAlign: 'center' }}>
                                <span style={{ fontSize: '13px', opacity: 0.9 }}>GPA Tổng Hệ 10</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{cumulative.gpa10}</h2>
                            </div>
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-warning)', padding: '15px', borderRadius: '6px', textAlign: 'center', color: '#000' }}>
                                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>GPA Tổng Hệ 4</span>
                                <h2 style={{ margin: '5px 0 0 0' }}>{cumulative.gpa4}</h2>
                            </div>
                            {/* 🔥 ĐÃ FIX: Chỉ hiển thị Xếp loại Học Lực toàn khóa */}
                            <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--color-danger)', padding: '15px', borderRadius: '6px', textAlign: 'center', color: '#fff' }}>
                                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Xếp Loại Tích Lũy</span>
                                <h2 style={{ margin: '5px 0 0 0', fontSize: '18px' }}>{cumulative.rank}</h2>
                            </div>
                        </div>

                        {Object.keys(groupedGrades).sort().map(sem => {
                            const semGrades = groupedGrades[sem];
                            const semGpa = calculateWeightedGPA(semGrades);

                            return (
                                <div key={sem} style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', marginBottom: '25px' }}>
                                    <h3 style={{ color: 'var(--color-warning)', marginTop: 0, marginBottom: '15px', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
                                        📅 {sem}
                                    </h3>
                                    <div style={{ overflowX: 'auto' }}>
                                        <table style={tableStyle}>
                                            <thead>
                                            <tr style={thStyle}>
                                                <th>Môn Học Phần</th>
                                                <th>Mã Lớp HP</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>Tín chỉ</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>CC</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>GK</th>
                                                <th style={{...thCenterStyle, width: '60px'}}>CK</th>
                                                <th style={thCenterStyle}>Hệ 10</th>
                                                <th style={thCenterStyle}>Hệ 4</th>
                                                <th style={thCenterStyle}>Điểm Chữ</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {semGrades.map((g, i) => {
                                                const ccVal = g.attendanceGrade !== undefined && g.attendanceGrade !== null ? Number(g.attendanceGrade) : 0;
                                                const gkVal = g.midtermGrade !== undefined && g.midtermGrade !== null ? Number(g.midtermGrade) : 0;
                                                const ckVal = g.finalGrade !== undefined && g.finalGrade !== null ? Number(g.finalGrade) : 0;

                                                // 🔥 TỪNG MÔN: Giữ nguyên quy đổi Điểm Chữ A+, B+, C...
                                                const details = getSubjectGradeDetails(ccVal, gkVal, ckVal);

                                                return (
                                                    <tr key={i} style={trStyle}>
                                                        <td style={{ fontWeight: 'bold' }}>{g.subjectName}</td>
                                                        <td style={{ color: 'var(--text-cyan)', fontWeight: 'bold' }}>{g.courseClassCode}</td>
                                                        <td style={{ textAlign: 'center', color: 'var(--color-warning)' }}>{g.credits || 3}</td>
                                                        <td style={{ textAlign: 'center' }}>{g.attendanceGrade !== null ? g.attendanceGrade : '-'}</td>
                                                        <td style={{ textAlign: 'center' }}>{g.midtermGrade !== null ? g.midtermGrade : '-'}</td>
                                                        <td style={{ textAlign: 'center' }}>{g.finalGrade !== null ? g.finalGrade : '-'}</td>
                                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-success)' }}>{details.overall10}</td>
                                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-warning)' }}>{details.g4}</td>
                                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: details.letter.includes('F') ? 'var(--color-danger)' : 'var(--color-success)' }}>{details.letter}</td>
                                                    </tr>
                                                );
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', justifyContent: 'flex-end', gap: '25px', fontSize: '14px' }}>
                                        <span><b>Tín chỉ đạt:</b> <span style={{ color: 'var(--color-warning)' }}>{semGrades.reduce((sum, g) => sum + (g.credits || 3), 0)}</span></span>
                                        <span><b>TB Kỳ (Hệ 10):</b> <span style={{ color: 'var(--text-cyan)' }}>{semGpa.gpa10}</span></span>
                                        <span><b>TB Kỳ (Hệ 4):</b> <span style={{ color: 'var(--color-warning)' }}>{semGpa.gpa4}</span></span>
                                        {/* 🔥 ĐÃ FIX: Footer học kỳ tính theo Xếp loại Học Lực */}
                                        <span><b>Xếp loại học lực:</b> <span style={{ color: semGpa.rank === 'Yếu' || semGpa.rank === 'Kém' ? 'var(--color-danger)' : 'var(--color-success)' }}>{semGpa.rank}</span></span>
                                    </div>
                                </div>
                            );
                        })}
                        {studentGrades.length === 0 && (
                            <p style={{ color: 'var(--text-muted)' }}>Chưa có dữ liệu kết quả học tập nào.</p>
                        )}
                    </div>
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
                    <label style={labelStyle}>⏳ Lọc Khóa học:</label>
                    <select value={selectedCohort} onChange={(e) => setSelectedCohort(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả Khóa --</option>
                        {cohortOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <div style={{ flex: '1', minWidth: '180px' }}>
                    <label style={labelStyle}>🏛️ Lọc Khoa chuyên môn:</label>
                    <select value={selectedDept} onChange={(e) => handleDeptChange(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả Khoa --</option>
                        {deptOptions.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                </div>

                <div style={{ flex: '1.2', minWidth: '180px' }}>
                    <label style={labelStyle}>👥 Lọc Lớp hành chính:</label>
                    <select value={selectedClass} onChange={(e) => handleClassChange(e.target.value)} style={selectStyle}>
                        <option value="">-- Tất cả Lớp --</option>
                        {classOptions.map(cls => <option key={cls.id} value={cls.id}>{cls.name}</option>)}
                    </select>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                {loading ? (
                    <p style={{textAlign:'center', color:'var(--text-muted)'}}>Đang đồng bộ cơ sở dữ liệu điểm số...</p>
                ) : isAdmin ? (
                    /* 🏛️ BẢNG ĐIỂM ĐỘC QUYỀN ADMIN - ĐÃ ĐỔI NHÃN THÀNH XẾP LOẠI */
                    <div style={{ overflowX: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}>
                                <th style={{ width: '50px' }}>STT</th>
                                <th>Mã Sinh Viên</th>
                                <th>Họ Và Tên Học Viên</th>
                                <th>Lớp Hành Chính</th>
                                <th style={thCenterStyle}>TB Kỳ Gần Nhất<br/><span style={{fontSize:'10.5px', color:'var(--text-muted)'}}>(Hệ 10 / Hệ 4 / Xếp loại)</span></th>
                                <th style={thCenterStyle}>TB Tích Lũy Khóa<br/><span style={{fontSize:'10.5px', color:'var(--text-muted)'}}>(Hệ 10 / Hệ 4 / Xếp loại)</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {adminRows.map((row) => (
                                <tr key={row.id} style={trStyle}>
                                    <td>{row.stt}</td>
                                    <td style={{ fontWeight: 'bold', color: 'var(--color-warning)' }}>{row.studentCode}</td>
                                    <td>{row.studentName}</td>
                                    <td>{row.className || 'Chưa xếp'}</td>

                                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        <span style={{ color: 'var(--text-cyan)' }}>{row.semGpa10}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: 'var(--color-warning)' }}>{row.semGpa4}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: row.semRank === 'Yếu' || row.semRank === 'Kém' || row.semRank === 'Chưa có' ? 'var(--color-danger)' : 'var(--color-success)' }}>{row.semRank}</span>
                                    </td>

                                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        <span style={{ color: 'var(--text-cyan)' }}>{row.cumGpa10}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: 'var(--color-warning)' }}>{row.cumGpa4}</span> <span style={{ color: 'var(--text-muted)' }}>/</span> <span style={{ color: row.cumRank === 'Yếu' || row.cumRank === 'Kém' || row.cumRank === 'Chưa có' ? 'var(--color-danger)' : 'var(--color-success)' }}>{row.cumRank}</span>
                                    </td>
                                </tr>
                            ))}
                            {adminRows.length === 0 && (
                                <tr><td colSpan="6" style={{textAlign:'center', padding:'15px', color:'var(--text-muted)'}}>Không tìm thấy hồ sơ sinh viên phù hợp.</td></tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    /* 👨‍🏫 BẢNG ĐIỂM DÀNH CHO GIẢNG VIÊN (TEACHER) - HIỂN THỊ ĐỦ CÁC HỆ ĐIỂM ĐỂ SỬA */
                    <div style={{ overflowX: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                            <tr style={thStyle}>
                                <th style={{ width: '40px' }}>STT</th>
                                <th style={{ width: '130px' }}>Sinh Viên / Mã Số</th>
                                <th>Môn Học Phần</th>
                                <th style={{ width: '60px', textAlign: 'center' }}>Tín chỉ</th>
                                <th style={{ ...thCenterStyle, width: '70px' }}>CC (10%)</th>
                                <th style={{ ...thCenterStyle, width: '70px' }}>GK (30%)</th>
                                <th style={{ ...thCenterStyle, width: '70px' }}>CK (60%)</th>
                                <th style={thCenterStyle}>Hệ 10</th>
                                <th style={thCenterStyle}>Hệ 4</th>
                                <th style={thCenterStyle}>Điểm Chữ</th>
                            </tr>
                            </thead>
                            <tbody>
                            {displayGrades.map((g, index) => {
                                const editRow = editGradesMap[g.id] || { cc: '', gk: '', ck: '' };
                                const ccVal = editRow.cc === '' ? 0 : parseFloat(editRow.cc);
                                const gkVal = editRow.gk === '' ? 0 : parseFloat(editRow.gk);
                                const ckVal = editRow.ck === '' ? 0 : parseFloat(editRow.ck);

                                // Preview điểm số Realtime cho Teacher khi nhập liệu (Điểm Chữ từng môn)
                                const details = getSubjectGradeDetails(ccVal, gkVal, ckVal);

                                return (
                                    <tr key={g.id} style={trStyle}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <b>{g.studentName}</b><br/>
                                            <span style={{fontSize:'12px', color:'var(--color-warning)', fontWeight:'bold'}}>{g.studentCode}</span>
                                        </td>
                                        <td style={{fontWeight:'500'}}>{g.subjectName}</td>
                                        <td style={{color:'var(--text-cyan)', fontWeight:'bold', textAlign: 'center'}}>{g.credits || 3}</td>

                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.cc} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'cc', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.gk} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'gk', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <input
                                                    type="text" value={editRow.ck} disabled={!isBulkEdit}
                                                    onChange={(e) => handleGradeInputChange(g.id, 'ck', e.target.value)}
                                                    style={{ ...gradeInputStyle, backgroundColor: isBulkEdit ? 'var(--color-bg)' : 'rgba(255,255,255,0.02)' }}
                                                />
                                            </div>
                                        </td>

                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-success)', fontSize: '14.5px' }}>{details.overall10}</td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-warning)', fontSize: '14.5px' }}>{details.g4}</td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: details.letter.includes('F') ? 'var(--color-danger)' : 'var(--color-success)' }}>{details.letter}</td>
                                    </tr>
                                );
                            })}
                            {displayGrades.length === 0 && (
                                <tr><td colSpan="10" style={{textAlign:'center', padding:'15px', color:'var(--text-muted)'}}>Không tìm thấy bảng điểm môn học phù hợp.</td></tr>
                            )}
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
const gradeInputStyle = { width: '55px', padding: '6px', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', textAlign: 'center', outline: 'none', transition: 'all 0.2s' };
const primaryBtnStyle = { padding: '8px 24px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)' };
const thStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'left', padding: '12px' };
const thCenterStyle = { borderBottom: '2px solid var(--text-cyan)', color: 'var(--text-cyan)', backgroundColor: 'var(--color-surface-hover)', textAlign: 'center', padding: '12px' };
const trStyle = { borderBottom: '1px solid var(--color-border)', padding: '12px' };
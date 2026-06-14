import React, { useState, useEffect, useRef } from 'react';
import axiosClient from '../api/axiosClient';
import { downloadExcel, uploadExcel } from '../api/excelClient';
import { useNotification } from '../context/NotificationContext';
import { getErrorMessage } from '../utils/messages';

function StudentPage() {
    const { notify, confirm } = useNotification();
    const importFileRef = useRef(null);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const userRole = localStorage.getItem('roles') || '';
    const isAdmin = userRole.includes('ADMIN');
    const isTeacher = userRole.includes('TEACHER');
    const teacherId = localStorage.getItem('teacherId') || '';

    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingStudentId, setEditingStudentId] = useState('');

    // Form States
    const [studentCode, setStudentCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [classId, setClassId] = useState('');
    const [studentCohort, setStudentCohort] = useState('Khóa 1');

    // List States tải từ DB phục vụ Admin
    const [classList, setClassList] = useState([]);
    const [departments, setDepartments] = useState([]);

    // --- STATES BỘ LỌC CASCADING CHO ADMIN ---
    const [selectedCohort, setSelectedCohort] = useState('');
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // --- STATES ĐỘC QUYỀN CHO GIẢNG VIÊN (TEACHER) ---
    const [teacherClasses, setTeacherClasses] = useState([]);
    const [selectedCourseClass, setSelectedCourseClass] = useState('');

    // Danh sách khóa mặc định của hệ thống
    const [cohorts, setCohorts] = useState(() => {
        const saved = localStorage.getItem('system_cohorts');
        return saved ? JSON.parse(saved) : ['Khóa 1', 'Khóa 2', 'Khóa 3'];
    });

    useEffect(() => {
        if (isAdmin) {
            fetchStudents();
            loadFiltersData();
        } else if (isTeacher && teacherId) {
            fetchTeacherClasses();
        }
    }, [isAdmin, isTeacher, teacherId]);

    // ==================== 🏛️ NGHIỆP VỤ CỦA ADMIN ====================
    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/students?includeInactive=true');
            setStudents(data || []);
        } catch (err) {
            setError(err || 'Không thể tải danh sách sinh viên!');
        } finally {
            setLoading(false);
        }
    };

    const loadFiltersData = async () => {
        try {
            const [deptsData, classesData] = await Promise.all([
                axiosClient.get('/departments'),
                axiosClient.get('/classes')
            ]);
            setDepartments(deptsData || []);
            setClassList(classesData || []);
        } catch (err) {
            console.error('Lỗi nạp cấu trúc bộ lọc danh mục', err);
        }
    };

    const handleAddNewCohort = () => {
        const nextCohortNumber = cohorts.length + 1;
        const newCohortName = `Khóa ${nextCohortNumber}`;
        const updatedCohorts = [...cohorts, newCohortName];
        setCohorts(updatedCohorts);
        localStorage.setItem('system_cohorts', JSON.stringify(updatedCohorts));
        notify.success(`Khởi tạo niên khóa mới thành công: ${newCohortName}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!classId) { notify.warning('Vui lòng lựa chọn một lớp hành chính!'); return; }

        if (isEditMode) {
            const payload = { firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId), cohort: studentCohort };
            try {
                await axiosClient.put(`/students/${editingStudentId}`, payload);
                notify.success('Cập nhật hồ sơ sinh viên thành công!');
                setShowModal(false);
                resetForm();
                fetchStudents();
            } catch (err) { notify.error(getErrorMessage(err, 'Lỗi cập nhật hồ sơ!')); }
        } else {
            const payload = { studentCode, firstName, lastName, dateOfBirth: dateOfBirth || null, gender, phoneNumber, classId: Number(classId), cohort: studentCohort };
            try {
                await axiosClient.post('/students', payload);
                notify.success('Cấp tài khoản sinh viên thành công!');
                setShowModal(false);
                resetForm();
                fetchStudents();
            } catch (err) { notify.error(getErrorMessage(err, 'Có lỗi xảy ra khi tạo sinh viên!')); }
        }
    };

    const handleOpenEdit = (student) => {
        setIsEditMode(true);
        setEditingStudentId(student.id);
        setStudentCode(student.studentCode);
        setFirstName(student.firstName);
        setLastName(student.lastName);
        setDateOfBirth(student.dateOfBirth || '');
        setGender(student.gender || 'Nam');
        setPhoneNumber(student.phoneNumber || '');
        setClassId(student.classId || '');
        setStudentCohort(student.cohort || 'Khóa 1');
        setShowModal(true);
    };

    const handleDeleteStudent = async (id, code, name) => {
        const ok = await confirm({
            title: 'Khóa tài khoản sinh viên',
            message: `Bạn có chắc chắn muốn khóa sinh viên [${code} — ${name}]?\nTài khoản sẽ bị đóng băng quyền truy cập.`,
            confirmText: 'Khóa tài khoản',
            variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/students/${id}`);
            notify.success('Đã khóa hồ sơ sinh viên thành công!');
            fetchStudents();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể khóa sinh viên này!')); }
    };

    const handleEnableStudent = async (id, code, name) => {
        const ok = await confirm({
            title: 'Mở khóa sinh viên',
            message: `Bạn có chắc chắn muốn mở khóa cho sinh viên [${code} — ${name}]?`,
            confirmText: 'Mở khóa',
            variant: 'success',
        });
        if (!ok) return;
        try {
            await axiosClient.put(`/students/${id}/enable`);
            notify.success('Mở khóa tài khoản sinh viên thành công!');
            fetchStudents();
        } catch (err) { notify.error(getErrorMessage(err, 'Không thể mở khóa sinh viên này!')); }
    };

    const resetForm = () => {
        setStudentCode(''); setFirstName(''); setLastName(''); setDateOfBirth(''); setGender('Nam'); setPhoneNumber(''); setClassId(''); setStudentCohort('Khóa 1');
        setIsEditMode(false); setEditingStudentId('');
    };

    const handleDeptChange = (deptId) => {
        setSelectedDept(deptId);
        setSelectedClass('');
    };

    const handleExportStudents = async () => {
        try {
            await downloadExcel('/students/export/excel?includeInactive=true', 'danh-sach-sinh-vien.xlsx');
            notify.success('Đã xuất danh sách sinh viên ra Excel!');
        } catch (err) {
            notify.error(getErrorMessage(err, 'Không thể xuất Excel.'));
        }
    };

    const handleDownloadStudentTemplate = async () => {
        try {
            await downloadExcel('/students/export/template', 'mau-nhap-sinh-vien.xlsx');
            notify.success('Đã tải file mẫu nhập sinh viên!');
        } catch (err) {
            notify.error(getErrorMessage(err, 'Không thể tải file mẫu.'));
        }
    };

    const handleImportStudents = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = '';

        const ok = await confirm({
            title: 'Nhập Excel sinh viên',
            message: `Bạn có chắc muốn nhập dữ liệu từ file "${file.name}"?\nCác mã sinh viên trùng sẽ bị bỏ qua.`,
            confirmText: 'Nhập file',
            variant: 'primary',
        });
        if (!ok) return;

        try {
            const result = await uploadExcel('/students/import/excel', file);
            if (result.errorCount > 0) {
                notify.warning(`Nhập xong: ${result.successCount} thành công, ${result.errorCount} lỗi.`);
                console.warn('Import errors:', result.errors);
            } else {
                notify.success(`Nhập thành công ${result.successCount} sinh viên!`);
            }
            fetchStudents();
        } catch (err) {
            notify.error(getErrorMessage(err, 'Nhập Excel thất bại!'));
        }
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

    const filteredClassOptions = selectedDept
        ? classList.filter(c => c.departmentName === departments.find(d => d.id === Number(selectedDept))?.name)
        : classList;


    // ==================== 👨‍🏫 NGHIỆP VỤ CỦA GIẢNG VIÊN (TEACHER) ====================
    const fetchTeacherClasses = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get(`/registration/teacher/${teacherId}/classes`);
            const data = response || [];
            setTeacherClasses(data);
            if (data.length > 0) {
                // Tự động load trước sinh viên của lớp học phần đầu tiên
                setSelectedCourseClass(String(data[0].id));
                fetchStudentsInCourseClass(data[0].id);
            } else {
                setStudents([]);
                setLoading(false);
            }
        } catch (err) {
            setError('Không thể tải lịch trình lớp học phần đang dạy!');
            setLoading(false);
        }
    };

    const fetchStudentsInCourseClass = async (courseClassId) => {
        try {
            setLoading(true);
            const response = await axiosClient.get(`/registration/classes/${courseClassId}/students`);
            setStudents(response || []);
        } catch (err) {
            setError('Lỗi tải danh sách sinh viên thuộc lớp học phần phụ trách!');
        } finally {
            setLoading(false);
        }
    };

    const handleTeacherClassChange = (courseClassId) => {
        setSelectedCourseClass(courseClassId);
        if (courseClassId) {
            fetchStudentsInCourseClass(courseClassId);
        } else {
            setStudents([]);
        }
    };


    // ==================== 🔄 THUẬT TOÁN QUÉT MẢNG LỌC HIỂN THỊ CHUNG ====================
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.studentCode.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
            `${student.lastName} ${student.firstName}`.toLowerCase().includes(searchQuery.trim().toLowerCase());

        if (isAdmin) {
            const matchesCohort = !selectedCohort || student.cohort === selectedCohort;
            const matchesClass = !selectedClass || student.classId === Number(selectedClass);
            const selectedDeptObj = departments.find(d => d.id === Number(selectedDept));
            const matchesDept = !selectedDept || student.departmentName === selectedDeptObj?.name;
            return matchesSearch && matchesCohort && matchesDept && matchesClass;
        }

        return matchesSearch; // Với Giáo viên chỉ cần lọc theo ô tìm kiếm trên mảng sinh viên lớp học phần
    });

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang đồng bộ cơ sở dữ liệu học viên...</div>;
    if (error) return <div style={{ color: 'var(--color-danger)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>{error}</div>;

    return (
        <div style={{ textAlign: 'left' }}>
            <div className="page-header flex-between">
                <div>
                    <h2 className="page-header__title">
                        {isAdmin ? 'Quản lý sinh viên' : 'Danh sách sinh viên'}
                    </h2>
                    <p className="page-header__desc">
                        {isAdmin ? 'Thêm, sửa, khóa/mở khóa hồ sơ sinh viên.' : 'Xem danh sách sinh viên các lớp đang giảng dạy.'}
                    </p>
                </div>
                {isAdmin && (
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <button type="button" onClick={handleExportStudents} className="btn btn--outline btn--sm">
                            Xuất Excel
                        </button>
                        <button type="button" onClick={handleDownloadStudentTemplate} className="btn btn--outline btn--sm">
                            Tải mẫu nhập
                        </button>
                        <button type="button" onClick={() => importFileRef.current?.click()} className="btn btn--primary btn--sm">
                            Nhập Excel
                        </button>
                        <input ref={importFileRef} type="file" accept=".xlsx,.xls" style={{ display: 'none' }} onChange={handleImportStudents} />
                        <button type="button" onClick={handleAddNewCohort} className="btn btn--primary btn--sm">
                            + Thêm khóa mới
                        </button>
                        <button type="button" onClick={() => { resetForm(); setShowModal(true); }} className="btn btn--success btn--sm">
                            + Thêm sinh viên
                        </button>
                    </div>
                )}
                {isTeacher && !isAdmin && (
                    <button type="button" onClick={handleExportStudents} className="btn btn--outline btn--sm">
                        Xuất Excel
                    </button>
                )}
            </div>

            {/* 🔥 THANH BỘ LỌC ĐA CẤP PHÂN RÃ THEO ROLE */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', flexWrap: 'wrap' }}>

                {isAdmin ? (
                    /* LUỒNG HIỂN THỊ CASCADING DROPDOWN CỦA ADMIN */
                    <>
                        <div style={{ width: '200px' }}>
                            <label style={labelStyle}>⏳ Lọc theo Khóa học:</label>
                            <select value={selectedCohort} onChange={(e) => setSelectedCohort(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các khóa</option>
                                {cohorts.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div style={{ width: '220px' }}>
                            <label style={labelStyle}>🏛️ Lọc theo Khoa:</label>
                            <select value={selectedDept} onChange={(e) => handleDeptChange(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các Khoa</option>
                                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                            </select>
                        </div>

                        <div style={{ width: '220px' }}>
                            <label style={labelStyle}>👥 Lọc theo Lớp hành chính:</label>
                            <select value={selectedClass} onChange={(e) => handleClassChange(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các Lớp</option>
                                {filteredClassOptions.map(cls => <option key={cls.id} value={cls.id}>{cls.name}</option>)}
                            </select>
                        </div>
                    </>
                ) : (
                    /* 🔥 LUỒNG HIỂN THỊ ĐỘC QUYỀN CỦA GIẢNG VIÊN (TEACHER) */
                    <div style={{ width: '350px' }}>
                        <label style={labelStyle}>📖 Lựa chọn Lớp học phần đang đảm nhiệm:</label>
                        <select value={selectedCourseClass} onChange={(e) => handleTeacherClassChange(e.target.value)} style={selectStyle}>
                            {teacherClasses.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.code} — {c.subjectName} ({c.registeredStudents} SV)
                                </option>
                            ))}
                            {teacherClasses.length === 0 && <option value="">Chưa có lớp học phần phân công</option>}
                        </select>
                    </div>
                )}

                <div style={{ flex: '1', minWidth: '200px' }}>
                    <label style={labelStyle}>🔍 Tìm nhanh học viên (Mã số / Họ tên):</label>
                    <input
                        type="text"
                        placeholder="Nhập từ khóa cần tìm kiếm..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none' }}
                    />
                </div>
            </div>

            {/* BẢNG RENDERING HIỂN THỊ DANH SÁCH */}
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Sinh Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Thuộc Niên Khóa</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Khoa Chuyên Môn</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Lớp Hành Chính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Giới Tính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái tài khoản</th>
                    {isAdmin && <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Hành Động Tác Vụ</th>}
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: student.active ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{student.studentCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.lastName} {student.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)', fontWeight: 'bold' }}>{student.cohort || 'Khóa 1'}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'white', fontWeight: '500' }}>{student.departmentName || 'Chưa cập nhật'}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.className}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.gender}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {student.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang học</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa tài khoản</span>}
                        </td>
                        {isAdmin && (
                            <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                <button onClick={() => handleOpenEdit(student)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', fontWeight: 'bold' }}>Sửa</button>
                                {student.active ? (
                                    <button onClick={() => handleDeleteStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Khóa</button>
                                ) : (
                                    <button onClick={() => handleEnableStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}>Mở Khóa</button>
                                )}
                            </td>
                        )}
                    </tr>
                ))}
                {filteredStudents.length === 0 && (
                    <tr>
                        <td colSpan={isAdmin ? 8 : 7} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                            Không tìm thấy dữ liệu sinh viên nào phù hợp.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* MODAL BIỂU MẪU CỦA ADMIN (CHỈ GENERATE KHI LÀ ADMIN) */}
            {showModal && isAdmin && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '550px' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>{isEditMode ? '📝 CẬP NHẬT HỒ SƠ SINH VIÊN' : '✍️ KHỞI TẠO HỒ SƠ SYSTEM'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Mã Sinh Viên:</label><input type="text" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} disabled={isEditMode} required style={inputStyle} /></div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Lớp Hành Chính:</label>
                                    <select value={classId} onChange={(e) => setClassId(e.target.value)} required style={inputStyle}>
                                        <option value="">-- Chọn lớp gợi ý --</option>
                                        {classList.map(cls => <option key={cls.id} value={cls.id}>{cls.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Phân vào Khóa học:</label>
                                    <select value={studentCohort} onChange={(e) => setStudentCohort(e.target.value)} required style={inputStyle}>
                                        {cohorts.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Giới Tính:</label><select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Họ Và Tên Đệm:</label><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} /></div>
                                <div><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Tên Sinh Viên:</label><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} /></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Ngày Sinh:</label><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} /></div>
                                <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Số Điện Thoại:</label><input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} /></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hủy Bỏ</button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>{isEditMode ? 'Lưu Thay Đổi' : 'Khởi Tạo & Cấp TK'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const labelStyle = { display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold', color: 'var(--text-cyan)' };
const selectStyle = { width: '100%', padding: '9px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none', cursor: 'pointer' };
const inputStyle = { width: '100%', padding: 'var(--spacing-sm)', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-main)', boxSizing: 'border-box', outline: 'none' };

export default StudentPage;
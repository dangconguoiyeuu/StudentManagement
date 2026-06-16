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

    // Thông tin lớp cố vấn dành riêng cho Giảng viên
    const [advisorClassName, setAdvisorClassName] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingStudentId, setEditingStudentId] = useState('');
    const [modalError, setModalError] = useState('');

    // Form States (Admin)
    const [studentCode, setStudentCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Nam');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [classId, setClassId] = useState('');
    const [studentCohort, setStudentCohort] = useState('Khóa 1');

    // List States (Admin)
    const [classList, setClassList] = useState([]);
    const [departments, setDepartments] = useState([]);

    // Filters (Admin)
    const [selectedCohort, setSelectedCohort] = useState('');
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [cohorts, setCohorts] = useState(() => {
        const saved = localStorage.getItem('system_cohorts');
        return saved ? JSON.parse(saved) : ['Khóa 1', 'Khóa 2', 'Khóa 3'];
    });

    useEffect(() => {
        if (isAdmin) {
            fetchStudentsForAdmin();
            loadAdminFiltersData();
        } else if (isTeacher) {
            fetchAdvisorClassData();
        }
    }, [isAdmin, isTeacher]);

    // ==================== 🏛️ LỜI GỌI API CỦA ADMIN ====================
    const fetchStudentsForAdmin = async () => {
        try {
            setLoading(true);
            const data = await axiosClient.get('/students?includeInactive=true');
            setStudents(data || []);
        } catch (err) {
            setError(getErrorMessage(err, 'Không thể tải danh sách sinh viên!'));
        } finally {
            setLoading(false);
        }
    };

    const loadAdminFiltersData = async () => {
        try {
            const [deptsData, classesData] = await Promise.all([
                axiosClient.get('/departments'),
                axiosClient.get('/classes')
            ]);
            setDepartments(deptsData || []);
            setClassList(classesData || []);
        } catch (err) {
            console.error(err);
        }
    };

    // ==================== 👨‍🏫 LỜI GỌI API ĐỘC QUYỀN CỦA CỐ VẤN ====================
    const fetchAdvisorClassData = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get('/registration/teacher/advisor-class');
            if (response) {
                setAdvisorClassName(response.className);
                setStudents(response.students || []);
            }
        } catch (err) {
            setError('Bạn chưa được phân công cố vấn học tập lớp nào hoặc hệ thống có lỗi.');
        } finally {
            setLoading(false);
        }
    };

    const handleToggleApprove = async (studentId, studentName) => {
        try {
            await axiosClient.put(`/registration/advisor/students/${studentId}/toggle-approve`);
            notify.success(`Đã xử lý cập nhật trạng thái duyệt đăng ký của SV: ${studentName}`);
            fetchAdvisorClassData();
        } catch (err) {
            notify.error(getErrorMessage(err, 'Thao tác duyệt đơn thất bại.'));
        }
    };

    // ==================== 📂 XỬ LÝ NHẬP/XUẤT EXCEL ====================
    const handleExportStudents = async () => {
        try {
            await downloadExcel('/students/export/excel?includeInactive=true', 'danh-sach-sinh-vien.xlsx');
            notify.success('Đã xuất danh sách sinh viên ra file Excel!');
        } catch (err) {
            notify.error(getErrorMessage(err, 'Không thể xuất Excel.'));
        }
    };

    const handleDownloadTemplate = async () => {
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
            message: `Bạn có chắc muốn thêm danh sách sinh viên từ file "${file.name}"?`,
            confirmText: 'Nhập file',
            variant: 'primary',
        });
        if (!ok) return;

        try {
            const result = await uploadExcel('/students/import/excel', file);
            if (result.errorCount > 0) {
                notify.warning(`Nhập xong: ${result.successCount} thành công, ${result.errorCount} lỗi. Vui lòng kiểm tra lại data.`);
            } else {
                notify.success(`Đã thêm thành công ${result.successCount} hồ sơ sinh viên!`);
            }
            fetchStudentsForAdmin();
        } catch (err) {
            notify.error(getErrorMessage(err, 'Nhập Excel thất bại!'));
        }
    };

    // ==================== 🛠️ CÁC HÀM CRUD CỦA ADMIN ====================
    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalError('');

        if (isEditMode) {
            const payload = {
                firstName,
                lastName,
                dateOfBirth: dateOfBirth || null,
                gender,
                phoneNumber,
                classId: classId ? Number(classId) : null,
                cohort: studentCohort
            };
            try {
                await axiosClient.put(`/students/${editingStudentId}`, payload);
                notify.success('Cập nhật hồ sơ sinh viên thành công!');
                setShowModal(false);
                resetForm();
                fetchStudentsForAdmin();
            } catch (err) {
                setModalError(getErrorMessage(err, 'Lỗi cập nhật hồ sơ.'));
            }
        } else {
            if (!classId) {
                setModalError('Vui lòng chọn Lớp hành chính!');
                return;
            }
            const payload = {
                studentCode,
                firstName,
                lastName,
                dateOfBirth: dateOfBirth || null,
                gender,
                phoneNumber,
                classId: Number(classId),
                cohort: studentCohort
            };
            try {
                await axiosClient.post('/students', payload);
                notify.success(`Đã cấp tài khoản sinh viên thành công!\nMã SV: ${studentCode}\nMật khẩu mặc định: password1234`);
                setShowModal(false);
                resetForm();
                fetchStudentsForAdmin();
            } catch (err) {
                setModalError(getErrorMessage(err, 'Lỗi khởi tạo hồ sơ sinh viên.'));
            }
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
        setModalError('');
        setShowModal(true);
    };

    const handleDeleteStudent = async (id, code, name) => {
        const ok = await confirm({
            title: 'Khóa tài khoản sinh viên',
            message: `Bạn có chắc chắn muốn khóa tài khoản của SV [${code} - ${name}]?\nTài khoản sẽ bị đóng băng.`,
            confirmText: 'Khóa tài khoản',
            variant: 'danger',
        });
        if (!ok) return;
        try {
            await axiosClient.delete(`/students/${id}`);
            notify.success('Đã khóa tài khoản sinh viên thành công!');
            fetchStudentsForAdmin();
        } catch (err) {
            notify.error(getErrorMessage(err, 'Không thể khóa sinh viên này!'));
        }
    };

    const handleEnableStudent = async (id, code, name) => {
        const ok = await confirm({
            title: 'Mở khóa sinh viên',
            message: `Bạn có chắc chắn muốn mở khóa cho sinh viên [${code} - ${name}]?`,
            confirmText: 'Mở khóa',
            variant: 'success',
        });
        if (!ok) return;
        try {
            await axiosClient.put(`/students/${id}/enable`);
            notify.success('Mở khóa tài khoản sinh viên thành công!');
            fetchStudentsForAdmin();
        } catch (err) {
            notify.error(getErrorMessage(err, 'Không thể mở khóa!'));
        }
    };

    const resetForm = () => {
        setIsEditMode(false);
        setEditingStudentId('');
        setStudentCode('');
        setFirstName('');
        setLastName('');
        setDateOfBirth('');
        setGender('Nam');
        setPhoneNumber('');
        setClassId('');
        setStudentCohort('Khóa 1');
        setModalError('');
    };

    // ==================== 🔎 BỘ LỌC TÌM KIẾM ====================
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
        return matchesSearch;
    });

    if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>Đang đồng bộ cơ sở dữ liệu học viên...</div>;
    if (error) return <div style={{ color: 'var(--color-danger)', textAlign: 'center', padding: 'var(--spacing-xl)' }}>{error}</div>;

    return (
        <div style={{ textAlign: 'left' }}>
            <div className="page-header flex-between">
                <div>
                    <h2 className="page-header__title">
                        {isAdmin ? 'Quản lý danh sách sinh viên toàn trường' : `Lớp cố vấn học tập: ${advisorClassName}`}
                    </h2>
                    <p className="page-header__desc">
                        {isAdmin ? 'Quản lý thông tin, cấp và khóa tài khoản học viên.' : 'Xem thông tin sinh viên thuộc lớp chủ nhiệm và thực hiện duyệt đơn đăng ký tín chỉ.'}
                    </p>
                </div>
                {isAdmin ? (
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <button type="button" onClick={handleExportStudents} className="btn btn--outline btn--sm">Xuất Excel</button>
                        <button type="button" onClick={handleDownloadTemplate} className="btn btn--outline btn--sm">Tải mẫu nhập</button>
                        <button type="button" onClick={() => importFileRef.current?.click()} className="btn btn--primary btn--sm">Nhập Excel</button>
                        <input ref={importFileRef} type="file" accept=".xlsx,.xls" style={{ display: 'none' }} onChange={handleImportStudents} />
                        <button type="button" onClick={() => { resetForm(); setShowModal(true); }} className="btn btn--success btn--sm">+ Thêm sinh viên</button>
                    </div>
                ) : isTeacher ? (
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <button type="button" onClick={handleExportStudents} className="btn btn--outline btn--sm">
                            Xuất Excel danh sách lớp
                        </button>
                    </div>
                ) : null}
            </div>

            {/* THANH BỘ LỌC TÌM KIẾM TỐI GIẢN */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '6px', border: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
                {isAdmin && (
                    <>
                        <div style={{ width: '200px' }}>
                            <label style={labelStyle}>⏳ Khóa học:</label>
                            <select value={selectedCohort} onChange={(e) => setSelectedCohort(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các khóa</option>
                                {cohorts.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div style={{ width: '220px' }}>
                            <label style={labelStyle}>🏛️ Khoa:</label>
                            <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} style={selectStyle}>
                                <option value="">Tất cả các Khoa</option>
                                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                            </select>
                        </div>
                    </>
                )}

                <div style={{ flex: '1', minWidth: '200px' }}>
                    <label style={labelStyle}>🔍 Tìm nhanh (Mã số / Họ tên):</label>
                    <input
                        type="text"
                        placeholder="Nhập mã sinh viên hoặc họ tên cần tìm..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '9px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none' }}
                    />
                </div>
            </div>

            {/* BẢNG DỮ LIỆU HIỂN THỊ */}
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <thead>
                <tr style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--text-cyan)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--spacing-md)' }}>Mã Sinh Viên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Họ Và Tên</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Lớp Hành Chính</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Cố Vấn Học Tập</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Số Điện Thoại</th>
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái</th>
                    <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: student.active ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{student.studentCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.lastName} {student.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)', fontWeight: 'bold' }}>{student.className}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'white' }}>{student.advisorTeacherName || 'Chưa phân công'}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.phoneNumber || '-'}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {student.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang học</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa</span>}
                        </td>
                        <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                            {isAdmin ? (
                                <>
                                    <button onClick={() => handleOpenEdit(student)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}>Sửa</button>
                                    {student.active ? (
                                        <button onClick={() => handleDeleteStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-danger)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Khóa</button>
                                    ) : (
                                        <button onClick={() => handleEnableStudent(student.id, student.studentCode, student.firstName)} style={{ padding: '4px 8px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Mở Khóa</button>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => handleToggleApprove(student.id, `${student.lastName} ${student.firstName}`)}
                                    style={{ padding: '6px 12px', backgroundColor: 'var(--color-success)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    Duyệt/Đổi trạng thái ĐKTC
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                {filteredStudents.length === 0 && (
                    <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                            Không có dữ liệu sinh viên tương thích với từ khóa tìm kiếm.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* MODAL THÊM / SỬA SINH VIÊN DÀNH CHO ADMIN */}
            {showModal && isAdmin && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: '8px', width: '600px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                        <h3 style={{ color: 'var(--text-cyan)', marginTop: 0, marginBottom: 'var(--spacing-lg)' }}>
                            {isEditMode ? '📝 CẬP NHẬT HỒ SƠ SINH VIÊN' : '✍️ THÊM MỚI HỒ SƠ SINH VIÊN'}
                        </h3>
                        {modalError && (
                            <div style={{ color: 'var(--color-danger)', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: 'var(--spacing-sm)', borderRadius: '4px', marginBottom: 'var(--spacing-md)' }}>
                                {modalError}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                                <div>
                                    <label style={labelStyle}>Mã Sinh Viên:</label>
                                    <input type="text" placeholder="VD: 26K1CNTT01" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} required disabled={isEditMode} style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Lớp Hành Chính:</label>
                                    <select value={classId} onChange={(e) => setClassId(e.target.value)} required style={selectStyle}>
                                        <option value="">-- Chọn lớp chủ quản --</option>
                                        {classList.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>Họ Và Tên Đệm:</label>
                                    <input type="text" placeholder="VD: Nguyễn Văn" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Tên Sinh Viên:</label>
                                    <input type="text" placeholder="VD: Nam" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Giới Tính:</label>
                                    <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle}>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>Ngày Sinh:</label>
                                    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Số Điện Thoại:</label>
                                    <input type="text" placeholder="09xxxxxxx" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Niên Khóa:</label>
                                    <select value={studentCohort} onChange={(e) => setStudentCohort(e.target.value)} style={selectStyle}>
                                        {cohorts.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-md)' }}>
                                <button type="button" onClick={() => { setShowModal(false); resetForm(); }} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                    Hủy
                                </button>
                                <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                                    {isEditMode ? 'Lưu Thay Đổi' : 'Thêm & Cấp TK'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const labelStyle = { display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold', color: 'var(--text-cyan)' };
const inputStyle = { width: '100%', padding: '9px 12px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', color: 'white', boxSizing: 'border-box', outline: 'none' };
const selectStyle = { width: '100%', padding: '9px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none', cursor: 'pointer' };

export default StudentPage;
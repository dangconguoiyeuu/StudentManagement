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
            fetchAdvisorClassData(); // Giảng viên load thẳng dữ liệu lớp cố vấn học tập
        }
    }, [isAdmin, isTeacher]);

    // ==================== 🏛️ LỜI GỌI API CỦA ADMIN ====================
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

    // ==================== 👨‍🏫 LỜI GỌI API ĐỘC QUYỀN CỦA CỐ VẤN (TEACHER) ====================
    const fetchAdvisorClassData = async () => {
        try {
            setLoading(true);
            // Gọi API mới tạo lấy thẳng thông tin lớp cố vấn duy nhất của giảng viên này
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

    // Hàm xử lý Duyệt/Hủy duyệt đơn đăng ký của sinh viên trong lớp cố vấn
    const handleToggleApprove = async (studentId, studentName) => {
        try {
            await axiosClient.put(`/registration/advisor/students/${studentId}/toggle-approve`);
            notify.success(`Đã xử lý cập nhật trạng thái duyệt đăng ký của SV: ${studentName}`);
            fetchAdvisorClassData(); // Reload lại danh sách
        } catch (err) {
            notify.error(getErrorMessage(err, 'Thao tác duyệt đơn thất bại.'));
        }
    };

    // Các hàm CRUD phụ trợ của Admin giữ nguyên logic của bạn...
    const handleSubmit = async (e) => { /* Giữ nguyên code xử lý submit cũ của bạn */ };
    const handleOpenEdit = (student) => { /* Giữ nguyên code cũ của bạn */ };
    const handleDeleteStudent = async (id, code, name) => { /* Giữ nguyên code cũ của bạn */ };
    const handleEnableStudent = async (id, code, name) => { /* Giữ nguyên code cũ của bạn */ };
    const resetForm = () => { /* Giữ nguyên code cũ của bạn */ };

    // Thuật toán tìm kiếm học viên realtime
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
                {isAdmin && (
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <button type="button" onClick={() => { resetForm(); setShowModal(true); }} className="btn btn--success btn--sm">
                            + Thêm sinh viên
                        </button>
                    </div>
                )}
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
                    <label style={labelStyle}>🔍 Tìm nhanh sinh viên lớp cố vấn (Mã số / Họ tên):</label>
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
                    <th style={{ padding: 'var(--spacing-md)' }}>Trạng thái học tập</th>
                    <th style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>Hành Động Tác Vụ</th>
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid var(--color-border)', opacity: student.active ? 1 : 0.55 }}>
                        <td style={{ padding: 'var(--spacing-md)', fontWeight: 'bold', color: 'var(--color-warning)' }}>{student.studentCode}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>{student.lastName} {student.firstName}</td>
                        <td style={{ padding: 'var(--spacing-md)', color: 'var(--text-cyan)', fontWeight: 'bold' }}>{student.className}</td>

                        {/* Hiển thị rõ ràng Ai là cố vấn của học viên này */}
                        <td style={{ padding: 'var(--spacing-md)', color: 'white' }}>
                            {student.advisorTeacherName || 'Chưa phân công'}
                        </td>

                        <td style={{ padding: 'var(--spacing-md)' }}>{student.phoneNumber || '-'}</td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                            {student.active ? <span style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 'bold' }}>● Đang học</span> : <span style={{ color: 'var(--color-danger)', fontSize: '12px', fontWeight: 'bold' }}>🔒 Đã khóa tài khoản</span>}
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
                                /* Nút xử lý duyệt đơn dành riêng cho Cố vấn học tập */
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
                            Không tìm thấy dữ liệu sinh viên nào.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

const labelStyle = { display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold', color: 'var(--text-cyan)' };
const selectStyle = { width: '100%', padding: '9px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'white', outline: 'none', cursor: 'pointer' };

export default StudentPage;
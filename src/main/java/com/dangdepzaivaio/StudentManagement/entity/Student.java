package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "students")
public class Student extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_code", nullable = false, unique = true, length = 20)
    private String studentCode; // Mã sinh viên (Ví dụ: B21DCCN001)

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName; // Tên (Ví dụ: Anh)

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName; // Họ và đệm (Ví dụ: Nguyễn Đình)

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "phone_number", length = 15)
    private String phoneNumber;

    @Builder.Default
    @Column(name = "is_active", nullable = false, columnDefinition = "TINYINT(1)")
    private boolean isActive = true;

    // Mỗi sinh viên sở hữu duy nhất 1 tài khoản hệ thống
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    // Nhiều sinh viên học chung 1 lớp hành chính
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "class_id", nullable = false)
    private Class studentClass;
}
package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "classes")
public class Class extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, unique = true, length = 50)
    private String name; // Ví dụ: D21CNPM1, D22HTTT2

    // Mối quan hệ: Nhiều lớp thuộc về một Khoa
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "advisor_teacher_id")
    private Teacher advisorTeacher;
}
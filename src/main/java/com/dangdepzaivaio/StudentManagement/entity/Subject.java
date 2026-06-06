package com.dangdepzaivaio.StudentManagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "subjects")
public class Subject extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 20)
    private String code; // Ví dụ: THVP01, INT3110

    @Column(name = "name", nullable = false, length = 150)
    private String name; // Ví dụ: Lập trình Spring Boot

    @Column(name = "credits", nullable = false)
    private Integer credits; // Số tín chỉ (Ví dụ: 3)
}
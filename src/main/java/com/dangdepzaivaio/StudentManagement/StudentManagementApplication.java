package com.dangdepzaivaio.StudentManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling; // 🔥 THÊM DÒNG NÀY

@SpringBootApplication
@EnableJpaAuditing
@EnableScheduling // 🔥 THÊM ANNOTATION NÀY ĐỂ KÍCH HOẠT TÍNH NĂNG HẸN GIỜ TỰ ĐỘNG CHỐT SỔ ĐÓNG CỔNG
public class StudentManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementApplication.class, args);
	}

}
# Student Management System (Hệ thống Quản lý Sinh viên)

Hệ thống Backend RESTful API quản lý đào tạo và điểm số cấp bậc đại học, được xây dựng dựa trên kiến trúc phân tầng chuyên nghiệp (Layered Architecture) với các công nghệ tối tân nhất hiện nay.

---

## 🛠 1. Công nghệ Sử dụng (Tech Stack)
* **Core Language:** Java 26 (Tận dụng tối đa Java Records, Pattern Matching)
* **Framework:** Spring Boot 4.0.6 (Bản phát hành mới nhất)
* **Database Layer:** MySQL 8.0, Spring Data JPA (Hibernate 7.x)
* **Security & Auth:** Spring Security, JWT (JSON Web Token) - *Tạm thời disable ở môi trường Dev để test API*
* **Data Mapping & Utilities:** MapStruct 1.6.3, Lombok, Jakarta Validation
* **Build Tool:** Maven Wrapper (`./mvnw`)

---

## 🏗 2. Kiến trúc Hệ thống (Layered Architecture)
Dự án được phân chia thư mục nghiêm ngặt theo các tầng độc lập để đảm bảo tính dễ mở rộng và bảo trì:
* `entity`: Ánh xạ các bảng trong cơ sở dữ liệu với chiến lược tối ưu `FetchType.LAZY` để kiểm soát hiệu năng.
* `repository`: Tầng giao tiếp dữ liệu trực tiếp với MySQL thông qua JpaRepository, tích hợp các truy vấn tùy chỉnh với `JOIN FETCH` để tối ưu hóa hiệu năng truy vấn.
* `dto`: Đối tượng truyền tải dữ liệu, sử dụng **Java Records** bất biến (Immutable) siêu nhẹ kèm bộ lọc Validation đầu vào.
* `mapper`: Chuyển đổi tự động hiệu năng cao giữa Entity <-> DTO bằng MapStruct phẳng hóa dữ liệu lồng nhau.
* `exception`: Bộ lọc quản lý và bắt lỗi tập trung toàn hệ thống (`@RestControllerAdvice`).
* `service`: Nơi xử lý logic nghiệp vụ cốt lõi và các thuật toán tính toán phức tạp.
* `controller`: Định nghĩa các RESTful API Endpoint phục vụ Client.

---

## ✅ 3. Tiến độ Dự án (Project Progress)

### 🔹 Giai đoạn 1: Khởi tạo và Cấu hình Nền tảng
* Khởi tạo thành công dự án Spring Boot 4.0.6 phối hợp Java 26 trên hệ thống Maven.
* Cấu hình đồng bộ tệp kết nối `application.yaml` tới MySQL, xử lý triệt để các cảnh báo bảo mật JDBC.

### 🔹 Giai đoạn 2: Thiết kế Hệ thống Thực thể (Entities)
Dựng hoàn thiện cấu trúc quan hệ lồng nhau giữa 8 thực thể lõi, kế thừa tự động hóa mốc thời gian từ `BaseEntity` (JPA Auditing):
1. **`Role`**: Danh mục vai trò hệ thống (ADMIN, STUDENT).
2. **`User`**: Định danh tài khoản hệ thống (Quan hệ `@ManyToMany` tự sinh bảng trung gian `user_roles`).
3. **`Department`**: Quản lý các Khoa/Viện đào tạo.
4. **`Class`**: Lớp hành chính gốc của sinh viên (`@ManyToOne` thuộc về Department).
5. **`Subject`**: Danh mục môn học và số tín chỉ tương ứng.
6. **`Student`**: Hồ sơ lý lịch sinh viên (Liên kết `@OneToOne` với User và `@ManyToOne` với Class).
7. **`CourseClass`**: Lớp học phần mở theo từng học kỳ (Liên kết `@ManyToOne` với Subject).
8. **`Grade`**: Bảng điểm số thành phần của sinh viên (Ràng buộc `@UniqueConstraint` kép giữa `student_id` và `course_class_id`).

### 🔹 Giai đoạn 3: Phân hệ Quản lý Tài khoản & Hồ sơ Sinh viên (CRUD & Soft Delete Kép)
* **API lồng nhau phức tạp (Nested JSON):** Xây dựng bộ hàm tạo mới sinh viên đi kèm tài khoản hệ thống cùng lúc, tự động map cấu trúc qua MapStruct dưới sự bảo vệ của `@Transactional`.
* **Xóa mềm liên kết hai tầng (Cascading Soft Delete):** Triển khai hàm `disableStudent` và `disableUser` nhằm vô hiệu hóa đồng thời trạng thái hoạt động của cả hồ sơ Sinh viên lẫn tài khoản Người dùng (`User`) thông qua cờ trạng thái `is_active`.

### 🔹 Giai đoạn 4: Nghiệp vụ Đào tạo & Thuật toán Tính Điểm Tín chỉ (Core Business Completed)
* **CRUD Môn học (`Subject`):** Hoàn thành trọn gói phân hệ môn học, áp dụng `SubjectResponse` bảo mật dữ liệu đầu ra phẳng lỳ, lọc sạch các thuộc tính thời gian hệ thống.
* **CRUD Lớp học phần (`CourseClass`):** Hoàn thiện đầy đủ bộ 5 API mở lớp học phần theo từng học kỳ (Ví dụ: `HK1-2026`), liên kết chặt chẽ khóa ngoại mượt mà.
* **CRUD Điểm số & Thuật toán Quy đổi (`Grade`):** * API nhập/sửa điểm thành phần (`attendanceGrade`, `midtermGrade`, `finalGrade`) kiểm soát chặt chẽ giá trị đầu vào từ `0` đến `10`.
  * Logic tự động tính toán Điểm tổng kết hệ 10 theo trọng số tiêu chuẩn: `10% Chuyên cần - 30% Giữa kỳ - 60% Cuối kỳ`.
  * Thuật toán tự động quy đổi từ hệ điểm 10 sang Điểm chữ (`A, B+, B, C+, C, D+, D, F`) và Điểm số hệ 4 (`4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0`) chuẩn quy chế tín chỉ Đại học.
* **API Tổng hợp học tập & Tính GPA tích lũy:** Triển khai thuật toán tính tổng số tín chỉ tích lũy và điểm trung bình tích lũy (GPA) theo công thức **bình quân gia quyền** của số tín chỉ môn học.
* **Tối ưu hóa Hiệu năng (Performance Optimization):** Áp dụng kỹ thuật `JOIN FETCH` trong `GradeRepository` xử lý triệt để lỗi truy vấn **N+1**, giúp gom toàn bộ dữ liệu lồng nhau phức tạp về duy nhất một câu lệnh SQL.

---

## 🚀 4. Lộ trình Triển khai Tiếp theo (Roadmap)

### 🔲 Giai đoạn 5: Hoàn thiện Phân hệ Quản lý Hành chính
* Xây dựng trọn bộ API CRUD cho phân hệ Khoa/Viện (`Department`) và Lớp hành chính (`Class`) nhằm khép kín hoàn toàn quy trình nạp dữ liệu hệ thống, loại bỏ việc viết lệnh SQL thủ công.

### 🔲 Giai đoạn 6: Tích hợp Hệ thống Bảo mật Chuyên sâu (Spring Security & JWT)
* Kích hoạt lại Spring Security trên file `pom.xml`.
* Thực hiện mã hóa mật khẩu một chiều bằng thuật toán `BCryptPasswordEncoder`.
* Xây dựng API Đăng nhập (`POST /auth/login`), kiểm tra thông tin và cấp phát chuỗi mã hóa bảo mật Token JWT.
* Thiết lập cấu hình phân quyền chặt chẽ (Chỉ Giảng viên/Admin được nhập/sửa điểm, Sinh viên chỉ được quyền xem điểm cá nhân).

### 🔲 Giai đoạn 7: Đóng gói và Triển khai hệ thống (Dockerize)
* Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java.
* Viết file liên kết đồng bộ `docker-compose.yml` để vận hành cùng lúc Container Spring Boot và Container Database MySQL độc lập trên mọi môi trường.

---

## 🔗 5. Quy trình Quản lý Mã nguồn (Git Workflow)
Dự án tuân thủ chặt chẽ quy trình Git Workflow chuyên nghiệp nhằm quản lý lịch sử commit và tích hợp tính năng an toàn:
* **`main`**: Nhánh Production lưu trữ các phiên bản mã nguồn đã đạt trạng thái ổn định tuyệt đối và có thể đem đi chạy thực tế.
* **`develop`**: Nhánh tích hợp (nơi gom các tính năng mới hoàn thiện để kiểm thử trước khi merge vào main).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển các chức năng riêng lẻ tách biệt từ nhánh `develop`.

---

### 📜 6. Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup-entities` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, kết nối MySQL và khởi dựng thành công 8 thực thể nền tảng. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman (Loại bỏ lỗi kẹt cổng 401). |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản `@Transactional`, tự động phân quyền hệ thống và cơ chế Xóa mềm (Soft Delete) kép liên kết. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành trọn gói Nghiệp vụ Môn học (`Subject`), Lớp học phần (`CourseClass`), phân hệ Điểm số (`Grade`), thuật toán quy đổi GPA tín chỉ và tối ưu hóa loại bỏ hoàn toàn lỗi truy vấn N+1. |


### 📜 7. SQL
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: student_management
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
`department_id` bigint NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKpgs3gcxax70h9jugbt24ugwcg` (`name`),
KEY `FKeerjjltjmtwpjo3jlr7037vxt` (`department_id`),
CONSTRAINT `FKeerjjltjmtwpjo3jlr7037vxt` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-07 05:23:21.000000','2026-06-07 05:23:21.000000','D21CNPM1',1),(2,'2026-06-08 16:09:33.690979','2026-06-08 16:09:33.690979','D22CNPM2',1),(3,'2026-06-08 16:25:38.022113','2026-06-08 16:25:38.022113','D22KHMT1',2),(4,'2026-06-08 16:25:43.674327','2026-06-08 16:25:43.674327','D22DTVT1',3);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_classes`
--

DROP TABLE IF EXISTS `course_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_classes` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`code` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
`semester` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`subject_id` bigint NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKmdeewqfqfih9ft75b0gbp9nrc` (`code`),
KEY `FKpxijwa2w0cvst789igk5x2fpu` (`subject_id`),
CONSTRAINT `FKpxijwa2w0cvst789igk5x2fpu` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (2,'2026-06-07 07:39:44.047946','2026-06-07 07:39:44.047946','CPP_BASE_01','HK1-2026',3);
/*!40000 ALTER TABLE `course_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKl7tivi5261wxdnvo6cct9gg6t` (`code`),
UNIQUE KEY `UKj6cwks7xecs5jov19ro8ge3qk` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-07 05:23:21.000000','2026-06-07 05:23:21.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-08 16:07:51.653195','2026-06-08 16:29:59.021126','KHMT_ADV','Khoa Khoa học Máy tính Chuyên sâu'),(3,'2026-06-08 16:25:11.287147','2026-06-08 16:25:11.287147','KHMT','Khoa Khoa học máy tính'),(4,'2026-06-08 16:25:18.436674','2026-06-08 16:25:18.436674','KTTC','Khoa Kinh tế Tài chính');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`attendance_grade` double DEFAULT NULL,
`final_grade` double DEFAULT NULL,
`letter_grade` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`midterm_grade` double DEFAULT NULL,
`overall_grade` double DEFAULT NULL,
`course_class_id` bigint NOT NULL,
`student_id` bigint NOT NULL,
`grade_4` double DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKko1u7sub9pfixo5kagdclh8sj` (`student_id`,`course_class_id`),
KEY `FK5c6jpjp7bty7q1flkpcc6pi4a` (`course_class_id`),
CONSTRAINT `FK13a16545m7vvrcspc999r15s9` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
CONSTRAINT `FK5c6jpjp7bty7q1flkpcc6pi4a` FOREIGN KEY (`course_class_id`) REFERENCES `course_classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKofx66keruapi6vyqpv6f2or37` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-06 15:42:59.479477','2026-06-06 15:42:59.479477','ADMIN'),(2,'2026-06-06 15:42:59.522480','2026-06-06 15:42:59.522480','STUDENT');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`date_of_birth` date DEFAULT NULL,
`first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
`gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`student_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`class_id` bigint NOT NULL,
`user_id` bigint NOT NULL,
`is_active` bit(1) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKcgcf3r5xk73o0etbduc1qxnol` (`student_code`),
UNIQUE KEY `UKg4fwvutq09fjdlb4bb0byp7t` (`user_id`),
KEY `FKhnslh0rm5bthlble8vjunbnwe` (`class_id`),
CONSTRAINT `FKdt1cjx5ve5bdabmuuf3ibrwaq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
CONSTRAINT `FKhnslh0rm5bthlble8vjunbnwe` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'2026-06-07 05:23:56.212382','2026-06-07 06:37:33.669294','2005-02-02','Anh','Nam','Nguyễn Đình','0987654323','B21DCCN001',1,3,_binary '\0'),(2,'2026-06-07 05:27:11.178181','2026-06-07 05:27:11.178181','2005-05-23','Đăng','Nam','Trần Minh','0123456789','K25TMD002',1,5,_binary ''),(3,'2026-06-07 05:28:07.320240','2026-06-07 05:28:07.320820','2005-01-01','Anh','Nam','Nguyễn Đình','0987654322','K25TMD001',1,6,_binary ''),(4,'2026-06-08 16:27:11.975218','2026-06-08 16:27:11.975218','2004-10-15','Hải','Nam','Nguyễn Hoàng','0912345678','B22CNPM001',1,7,_binary ''),(5,'2026-06-08 16:27:18.333620','2026-06-08 16:27:18.333620','2004-05-20','Linh','Nữ','Phạm Khánh','0923456789','B22KHMT001',2,8,_binary ''),(6,'2026-06-08 16:27:22.690037','2026-06-08 16:27:22.690037','2004-12-01','Tùng','Nam','Vũ Sơn','0934567890','B22DTVT001',3,9,_binary '');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`credits` int NOT NULL,
`name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKrg7x1lyii7kdyycw98d45vep5` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (3,'2026-06-07 06:35:32.807481','2026-06-07 06:35:32.807481','C++_Base',3,'Lập trình C++ cơ bản');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
`user_id` bigint NOT NULL,
`role_id` bigint NOT NULL,
PRIMARY KEY (`user_id`,`role_id`),
KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (3,2),(5,2),(6,2),(7,2),(8,2),(9,2);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`is_active` bit(1) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2026-06-06 16:20:40.847736','2026-06-06 16:20:40.847736','minhdang@open.edu.vn','password123','minhdangtran',_binary ''),(2,'2026-06-06 16:21:57.950655','2026-06-06 16:37:24.756683','anhnd.updated@open.edu.vn','newpassword123456','nguyendinhanh',_binary ''),(3,'2026-06-07 05:23:56.176308','2026-06-07 06:37:33.674291','anh.nguyen@open.edu.vn','password123','nguyendinhanh2003',_binary '\0'),(5,'2026-06-07 05:27:11.172961','2026-06-07 05:27:11.172961','minhdangdask@open.edu.vn','password123','dangdepzaivaio',_binary ''),(6,'2026-06-07 05:28:07.315346','2026-06-07 05:28:07.315346','dinhanhboyhot2@open.edu.vn','password123','dinhanhboyhot2',_binary ''),(7,'2026-06-08 16:27:11.964323','2026-06-08 16:27:11.964323','hai.nh@open.edu.vn','$2a$10$..HvSxCUfLbulwGq0uUqJuNtctxuIp8mAGV4pSMXnIyTLdjwdbWXe','hoanghai2004',_binary ''),(8,'2026-06-08 16:27:18.328010','2026-06-08 16:27:18.328010','linh.pk@open.edu.vn','$2a$10$I13BwRkk9BhfgNPdP.XvLeirmFo3xWdEZryYUVz..pWRJ.9owgA0u','khanhlinh2004',_binary ''),(9,'2026-06-08 16:27:22.685722','2026-06-08 16:27:22.685722','tung.vs@open.edu.vn','$2a$10$.paoWU6SAujvCNcV46RxT.WohPQmj2TlIJnNBSkIMONrXWIfwB0W2','sontung2004',_binary '');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-08 23:38:00



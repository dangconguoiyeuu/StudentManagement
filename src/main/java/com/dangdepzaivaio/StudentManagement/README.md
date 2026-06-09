# Student Management System (Hệ thống Quản lý Sinh viên)

Hệ thống Backend RESTful API quản lý đào tạo và điểm số cấp bậc đại học, được xây dựng dựa trên kiến trúc phân tầng chuyên nghiệp (Layered Architecture) với các công nghệ tối tân nhất hiện nay.

---

## 🛠 1. Công nghệ Sử dụng (Tech Stack)
* **Core Language:** Java 26 (Tận dụng tối đa Java Records, Pattern Matching)
* **Framework:** Spring Boot 4.0.6 (Bản phát hành mới nhất)
* **Database Layer:** MySQL 8.0, Spring Data JPA (Hibernate 7.x)
* **Security & Auth:** Spring Security, JWT (JSON Web Token) qua Nimbus JOSE + JWT 9.37.3 (Đã kích hoạt toàn diện kèm phân hệ CORS)
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

## 📌 3. Mô tả Chi tiết các Phân hệ Chức năng (Functional Modules)

### 🔐 3.1. Phân hệ Xác thực & Tài khoản (Auth & User Module)
* **Xác thực an toàn:** API Đăng nhập (`POST /auth/login`) tiếp nhận thông tin, kiểm tra tính hợp lệ bằng PasswordEncoder (BCrypt) và sinh chuỗi mã hóa bảo mật JWT Token có thời hạn hoạt động 2 giờ.
* **Mở rộng Payload dữ liệu:** Payload trả về cho Client được bổ sung đầy đủ các trường thiết yếu bao gồm `userId`, `username`, và chuỗi quyền hạn `roles` để hỗ trợ hiển thị thông tin và phân quyền giao diện phía Client.
* **Quản trị tài khoản:** Quản trị viên hệ thống có toàn quyền quản lý danh mục tài khoản người dùng (`User`). Khi một tài khoản mới được khởi tạo thông qua API độc lập, hệ thống sẽ tự động liên kết gán vai trò `ADMIN` cho người dùng đó.

### 🏢 3.2. Phân hệ Quản lý Hành chính (Administrative Module)
* **Danh mục Khoa/Viện đào tạo (`Department`):** Hỗ trợ lưu trữ thông tin mã khoa (bắt trùng lặp) và tên khoa chuyên môn. Tích hợp logic ràng buộc khóa ngoại nghiêm ngặt: Tuyệt đối chặn đứng hành vi xóa Khoa nếu như tồn tại các lớp hành chính đang trực thuộc phân hệ Khoa đó.
* **Lớp hành chính sinh viên (`Class`):** Quản lý tên lớp sinh viên và liên kết khóa ngoại với Khoa chủ quản. Áp dụng cơ chế phòng vệ dữ liệu: Không cho phép xóa lớp hành chính nếu lớp đó đang chứa hồ sơ sinh viên học tập bên dưới.

### 📚 3.3. Phân hệ Nghiệp vụ Đào tạo (Academic Module)
* **Môn học gốc (`Subject`):** Quản lý mã môn học, tên môn học và định mức số tín chỉ tích lũy đào tạo. Hệ thống tự động chặn hành vi xóa môn học nếu môn học đó đã được dùng để lên lịch mở các lớp học phần.
* **Lớp học phần mở theo kỳ (`CourseClass`):** Quản lý mã lớp học phần, học kỳ tổ chức giảng dạy và liên kết với môn học gốc. Hệ thống tích hợp hàm chặn xóa lớp học phần nếu như đã phát sinh dữ liệu nhập điểm thành phần của sinh viên.

### 👥 3.4. Phân hệ Hồ sơ Sinh viên (Student Module)
* **Nested JSON Creation:** API tạo mới sinh viên cho phép tiếp nhận một cấu trúc JSON lồng nhau, xử lý tạo đồng thời hồ sơ lý lịch và tài khoản User đăng nhập hệ thống đi kèm mượt mà, tự động gán vai trò `STUDENT` dưới sự bảo vệ của tầng giao dịch `@Transactional`.
* **Cascading Soft Delete:** Khi thực hiện xóa hồ sơ sinh viên, hệ thống thực hiện cơ chế xóa mềm: Chuyển cờ trạng thái `is_active = false` đồng thời trên cả thực thể Sinh viên lẫn thực thể tài khoản User liên kết, đảm bảo an toàn dữ liệu lịch sử.

### 🎯 3.5. Phân hệ Điểm số & GPA Tín chỉ (Grade Module)
* **Nhập liệu an toàn (Null-Safe):** Hệ thống hỗ trợ nhập các đầu điểm thành phần hệ 10. Thuật toán xử lý ngầm tích hợp cơ chế phòng vệ toán học: Nếu giảng viên bỏ trống đầu điểm (giá trị gửi lên từ Client là `null`), hệ thống tự động quy đổi thành `0.0` để tiếp tục tính toán mà không gây lỗi hệ thống.
* **Tự động quy đổi quy chế:** Hệ thống tự động tính điểm tổng kết dựa trên trọng số chuẩn `10% Chuyên cần - 30% Giữa kỳ - 60% Cuối kỳ`, đồng thời tự động ánh xạ sang Điểm chữ (`A`, `B+`, `B`...) và Điểm số hệ 4 (`4.0`, `3.5`, `3.0`...).
* **Thuật toán GPA tích lũy nghiệp vụ lõi:** Endpoint tính tổng kết học tập hỗ trợ bóc tách, tự động tính toán tổng số tín chỉ tích lũy đạt chuẩn và điểm trung bình tích lũy GPA (cả hệ 10 và hệ 4) theo phương pháp tính **bình quân gia quyền** với số tín chỉ của từng môn học cụ thể.

---

## ✅ 4. Tiến độ Dự án (Project Progress)

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

## 🚀 5. Lộ trình Triển khai Tiếp theo (Roadmap)

### ☑️ Giai đoạn 5: Hoàn thiện Phân hệ Quản lý Hành chính (ĐÃ HOÀN THÀNH)
* [x] Xây dựng trọn bộ API CRUD hoàn chỉnh cho phân hệ Khoa/Viện (`Department`) và Lớp hành chính (`Class`) nhằm khép kín hoàn toàn quy trình nạp dữ liệu hệ thống, loại bỏ việc viết lệnh SQL thủ công.
* [x] Tích hợp logic bảo vệ toàn vẹn dữ liệu khóa ngoại (`existsBy...`), tự động ném mã lỗi nghiệp vụ tương ứng (`1017`, `1018`) ra ngoài Client khi dính ràng buộc.

### ☑️ Giai đoạn 6: Tích hợp Hệ thống Bảo mật Chuyên sâu & CORS (ĐÃ HOÀN THÀNH)
* [x] Kích hoạt và cấu hình lớp bảo vệ tự động Spring Security, vô hiệu hóa lỗ hổng CSRF.
* [x] Thực hiện mã hóa một chiều mật khẩu tài khoản người dùng bằng thuật toán mạnh `BCryptPasswordEncoder`.
* [x] Hoàn thiện API Đăng nhập (`POST /auth/login`), tự động kiểm tra thông tin tài khoản và cấp phát chuỗi mã hóa bảo mật Token JWT chuẩn thuật toán HS256.
* [x] **Cấu hình CORS toàn cục:** Cấu hình bộ lọc chia sẻ tài nguyên nguồn gốc chéo (CORS) trực tiếp trong cấu hình Security, cấp phép tường minh cho môi trường chạy Frontend (`http://localhost:3000` và `http://localhost:5173`) được phép gọi đầy đủ các phương thức HTTP và đính kèm Credentials an toàn.
* [x] Mở bộ lọc chấp nhận vô điều kiện các request thăm dò trình duyệt `HttpMethod.OPTIONS` (Preflight Request) để chống kẹt lỗi CORS khi Frontend tích hợp.

### 🔲 Giai đoạn 7: Đóng gói và Triển khai hệ thống (Dockerize)
* [ ] Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java sử dụng cơ chế Multi-stage build nhằm tối ưu hóa dung lượng file Image đầu ra.
* [ ] Viết file liên kết đồng bộ `docker-compose.yml` để thiết lập mạng ảo độc lập, vận hành cùng lúc Container ứng dụng Spring Boot và Container cơ sở dữ liệu MySQL một cách tự động chỉ bằng một lệnh duy nhất.

### 🔲 Giai đoạn 8: Thiết lập và Phát triển Phân hệ UI Client (Frontend Roadmap)
* [ ] Khởi tạo dự án Single Page Application (SPA) bằng công nghệ React.js thế hệ 19 phối hợp với bộ đóng gói siêu tốc **Vite**.
* [ ] Cài đặt các thư viện kết nối cốt lõi bao gồm `axios` phục vụ gọi API và `react-router-dom` xử lý điều hướng trang điều khiển.
* [ ] Thiết lập cấu hình **Axios Client tập trung** (`src/api/axiosClient.js`):
  * Tích hợp Request Interceptor tự động quét và lôi Token bảo mật từ `localStorage` để gắn vào Header dạng `Authorization: Bearer <Token>`.
  * Tích hợp Response Interceptor tự động giải nén cấu trúc bọc `ApiResponse` của Spring Boot để trả thẳng cục dữ liệu sạch `result` cho các thành phần UI tiêu thụ, đồng thời bắt tập trung mã code nghiệp vụ để hiển thị Toast thông báo lỗi trực quan.
* [ ] Xây dựng màn hình Đăng nhập (`LoginPage.jsx`) thu thập form dữ liệu, lưu giữ thông tin định danh và phân phối quyền hạn.
* [ ] Phát triển hệ thống View dữ liệu dạng bảng (Data Table) và các Form nhập liệu động phục vụ đầy đủ phân hệ CRUD hành chính đào tạo và bảng tổng hợp GPA của sinh viên.

---

## 🔗 6. Quy trình Quản lý Mã nguồn (Git Workflow)
Dự án tuân thủ chặt chẽ quy trình Git Workflow chuyên nghiệp nhằm quản lý lịch sử commit và tích hợp tính năng an toàn:
* **`main`**: Nhánh Production lưu trữ các phiên bản mã nguồn đã đạt trạng thái ổn định tuyệt đối và có thể đem đi chạy thực tế.
* **`develop`**: Nhánh tích hợp (nơi gom các tính năng mới hoàn thiện để kiểm thử trước khi merge vào main).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển các chức năng riêng lẻ tách biệt từ nhánh `develop`.
* *Quy tắc đặt tên commit:* `type: message` (Ví dụ: `feat: add global cors configuration`, `fix: resolve grade service null pointer check`).

---

### 📜 7. Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup-entities` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, kết nối MySQL và khởi dựng thành công 8 thực thể nền tảng. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman (Loại bỏ lỗi kẹt cổng 401). |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản `@Transactional`, tự động phân quyền hệ thống và cơ chế Xóa mềm (Soft Delete) kép liên kết. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành trọn gói Nghiệp vụ Môn học (`Subject`), Lớp học phần (`CourseClass`), phân hệ Điểm số (`Grade`), thuật toán quy đổi GPA tín chỉ và tối ưu hóa loại bỏ hoàn toàn lỗi truy vấn N+1. |
| 08/06/2026 | `develop` | **Cập nhật** | Hoàn thiện toàn phân hệ CRUD danh mục hành chính Khoa/Viện (`Department`) và Lớp hành chính (`Class`) kèm cơ chế `JOIN FETCH` chống lỗi N+1. |
| 09/06/2026 | `develop` | **Cập nhật** | Cấu hình CORS toàn cục mở đường kết nối ReactJS, làm giàu Payload phản hồi Login, vá triệt để lỗ hổng sập luồng `NullPointerException` tại `GradeServiceImpl` và `UserServiceImpl`. |

---

### 📜 8. SQL
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21CNPM1',1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D22KHMT1',2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21DTVT2',3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D22ATTT1',4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','D21HTTT1',5);
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
`teacher_id` bigint DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UKmdeewqfqfih9ft75b0gbp9nrc` (`code`),
KEY `FKpxijwa2w0cvst789igk5x2fpu` (`subject_id`),
KEY `FK_course_class_teacher` (`teacher_id`),
CONSTRAINT `FK_course_class_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
CONSTRAINT `FKpxijwa2w0cvst789igk5x2fpu` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','CPP_CLASS_01','HK1-2026',1,1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DSA_CLASS_01','HK1-2026',2,2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','JAVA_CLASS_01','HK1-2026',3,3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','NET_CLASS_01','HK1-2026',4,4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','OS_CLASS_01','HK1-2026',5,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','KHMT','Khoa học máy tính'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DTVT','Điện tử viễn thông'),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','ATTT','An toàn thông tin'),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','HTTT','Hệ thống thông tin');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',9,9,'A',8.5,8.85,1,1,4),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',8,8.5,'B+',8,8.3,2,2,3.5),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',10,9.5,'A',9,9.4,3,3,4),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',7.5,8,'B',7,7.65,4,4,3),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000',6,7,'C+',6.5,6.75,5,5,2.5);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','ADMIN'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','STUDENT'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','TEACHER');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2003-04-05','Anh','Nam','Nguyễn Đình','0987654321','B21CNPM001',1,2,_binary ''),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-05-23','Đăng','Nam','Trần Minh','0987654322','B21CNPM002',2,3,_binary ''),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-10-15','Hải','Nam','Nguyễn Hoàng','0987654323','B21CNPM003',3,4,_binary ''),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-05-20','Linh','Nữ','Phạm Khánh','0987654324','B21CNPM004',4,5,_binary ''),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','2004-12-01','Tùng','Nam','Vũ Sơn','0987654325','B21CNPM005',5,6,_binary '');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','C_PLUS_BASE',3,'Lập trình C++ cơ bản'),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','DSA_STRUCTURE',4,'Cấu trúc dữ liệu & Giải thuật'),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','JAVA_WEB_DEV',3,'Lập trình Web nâng cao với Java'),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','NET_COMPUTER',3,'Cơ sở mạng máy tính'),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','OS_OPERATION',3,'Hệ điều hành máy tính');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(6) DEFAULT NULL,
`updated_at` datetime(6) DEFAULT NULL,
`teacher_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
`first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
`last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`date_of_birth` date DEFAULT NULL,
`gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`is_active` bit(1) NOT NULL DEFAULT b'1',
`user_id` bigint NOT NULL,
`department_id` bigint NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `UK_teacher_code` (`teacher_code`),
UNIQUE KEY `UK_teacher_user` (`user_id`),
KEY `FK_teacher_department` (`department_id`),
CONSTRAINT `FK_teacher_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
CONSTRAINT `FK_teacher_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_01','Tuấn','Trần Quốc','1985-04-12','Nam','0912111222',_binary '',7,1),(2,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_02','Minh','Nguyễn Thị','1988-08-24','Nữ','0912333444',_binary '',8,2),(3,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_03','Nam','Lê Hoàng','1982-11-05','Nam','0912555666',_binary '',9,3),(4,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_04','Hải','Phạm Văn','1979-02-18','Nam','0912777888',_binary '',10,4),(5,'2026-06-09 17:11:49.000000','2026-06-09 17:11:49.000000','GV2026_05','Linh','Vũ Khánh','1991-06-30','Nữ','0912999000',_binary '',11,5);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
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
INSERT INTO `user_roles` VALUES (1,1),(2,2),(3,2),(4,2),(5,2),(6,2),(7,3),(8,3),(9,3),(10,3),(11,3);
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
`is_first_login` bit(1) NOT NULL DEFAULT b'1',
PRIMARY KEY (`id`),
UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2026-06-09 17:11:49.000000','2026-06-09 18:10:10.935037','admin@open.edu.vn','$2a$10$Nuln0JaFYxBJ92H8tcenfOS7il02iWjIQHp4BoNV.lsHJwiTAHqtu','admin',_binary '',_binary '\0'),(2,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.044169','b21cnpm001@open.edu.vn','$2a$10$Yms/lS91daUUygnYFTouHeLFaQtzuj8FwbGdiODj7DqZYeGMkOtbu','B21CNPM001',_binary '',_binary '\0'),(3,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.155671','b21cnpm002@open.edu.vn','$2a$10$MARRm1W43sRk4jf5Xr8s7eLhT4U8/FwF93UJ2ZlmcyP72XTVfr/Ky','B21CNPM002',_binary '',_binary ''),(4,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.262629','b21cnpm003@open.edu.vn','$2a$10$Ty4oV7qRla7JBxfPNDWU7O/PGZl8rbwQdWnKLm.mddVzZOyt2ey4G','B21CNPM003',_binary '',_binary ''),(5,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.366777','b21cnpm004@open.edu.vn','$2a$10$NRwrvdYgyRlrnHriPdOfQ.cOfeDE9sIeDMkCLZ9f8xpTb3YwEpCDa','B21CNPM004',_binary '',_binary ''),(6,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.483766','b21cnpm005@open.edu.vn','$2a$10$5ap5383vHtSQISzx5Ghn7.nNy2GfthpKk7mBCea1Vum26WEfXtSR2','B21CNPM005',_binary '',_binary ''),(7,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.594227','tuan.tq@teacher.open.edu.vn','$2a$10$aMbmK8V8gTKPiaWvBbVH4e1y/q3PvQjdN9EoZItZLLJrvg4GpGr9i','GV2026_01',_binary '',_binary ''),(8,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.719566','minh.nt@teacher.open.edu.vn','$2a$10$rWpDKdQvXp6X4ftwMH4PNeDIozCUOuqhzORMQtg.dLcTGD3sfOVJu','GV2026_02',_binary '',_binary ''),(9,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.832910','nam.lh@teacher.open.edu.vn','$2a$10$RD1rSRZoix4QBI1rNOrXMegIKrJOtroS7ufrRMRYaIvzBT0Z19wDK','GV2026_03',_binary '',_binary ''),(10,'2026-06-09 17:11:49.000000','2026-06-09 18:10:11.947974','hai.pv@teacher.open.edu.vn','$2a$10$cvqnA2diirlOFBgqsWd/wuApEUXh/WGu/a9Q5SQqYlYVADRzkMh8S','GV2026_04',_binary '',_binary ''),(11,'2026-06-09 17:11:49.000000','2026-06-09 18:10:12.056122','linh.vk@teacher.open.edu.vn','$2a$10$mR6GbQbKiBuDzQEXpXaQgeV00eCNhHBPyLUIYx51q8apmAhuw5YCm','GV2026_05',_binary '',_binary '');
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

-- Dump completed on 2026-06-10  1:12:14



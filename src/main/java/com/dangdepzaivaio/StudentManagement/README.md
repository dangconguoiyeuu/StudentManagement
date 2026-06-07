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
* `entity`: Ánh xạ các bảng trong cơ sở dữ liệu với chiến lược tối ưu `FetchType.LAZY`.
* `repository`: Tầng giao tiếp dữ liệu trực tiếp với MySQL thông qua JpaRepository.
* `dto`: Đối tượng truyền tải dữ liệu, sử dụng **Java Records** bất biến (Immutable) siêu nhẹ kèm bộ lọc Validation đầu vào.
* `mapper`: Chuyển đổi tự động hiệu năng cao giữa Entity <-> DTO bằng MapStruct.
* `exception`: Bộ lọc quản lý và bắt lỗi tập trung toàn hệ thống.
* `service`: Nơi xử lý logic nghiệp vụ cốt lõi.
* `controller`: Định nghĩa các RESTful API Endpoint phục vụ Client.

---

## ✅ 3. Tiến độ Dự án: ĐÃ HOÀN THÀNH

### Giai đoạn 1: Khởi tạo và Cấu hình Nền tảng
* Khởi tạo thành công dự án Spring Boot 4.0.6 phối hợp Java 26 trên hệ thống Maven.
* Cấu hình đồng bộ tệp kết nối `application.yaml` tới MySQL Workbench, xử lý triệt để các cảnh báo bảo mật JDBC (`allowPublicKeyRetrieval=true`).
* Kiểm thử khởi động server cục bộ mượt mà trên cổng `8081`.

### Giai đoạn 2: Thiết kế và Ánh xạ 100% Hệ thống Thực thể (Entities)
Dựng hoàn thiện cấu trúc quan hệ lồng nhau giữa 8 thực thể lõi, kế thừa tự động hóa mốc thời gian từ `BaseEntity` (JPA Auditing):
1. **`Role`**: Danh mục vai trò hệ thống (ADMIN, TEACHER, STUDENT).
2. **`User`**: Định danh tài khoản hệ thống (Quan hệ `@ManyToMany` tự sinh bảng trung gian `user_roles` liên kết với Role).
3. **`Department`**: Quản lý các Khoa/Viện đào tạo.
4. **`Class`**: Lớp hành chính gốc của sinh viên (Quan hệ `@ManyToOne` thuộc về Department).
5. **`Student`**: Hồ sơ lý lịch sinh viên (Liên kết `@OneToOne` với User bảo mật và `@ManyToOne` với Class).
6. **`Subject`**: Danh mục môn học và số tín chỉ tương ứng.
7. **`CourseClass`**: Lớp học phần mở theo từng học kỳ (Quan hệ `@ManyToOne` liên kết Subject).
8. **`Grade`**: Bảng điểm số thành phần của sinh viên (Ràng buộc `@UniqueConstraint` kép giữa `student_id` và `course_class_id`).

### Giai đoạn 3: Tầng Truy xuất dữ liệu (Repository) & DTO gốc
* Khởi tạo đầy đủ 8 Interface JpaRepository kết nối trực tiếp database phục vụ truy vấn nâng cao.
* Thiết lập các bản ghi Request DTO sử dụng Java Records tích hợp chặt chẽ cơ chế kiểm tra lỗi dữ liệu đầu vào.
* Cấu hình tầng ánh xạ `StudentMapper` tự động sinh mã nguồn xử lý các đối tượng phức tạp lồng nhau.

### Giai đoạn 4: Bộ cấu trúc xử lý lỗi toàn cục (Global Exception)
* Khởi tạo thành công class khuôn mẫu dữ liệu trả về `ApiResponse` đồng nhất mọi luồng dữ liệu (ẩn các thuộc tính Null tự động).
* Thiết lập Enum `ErrorCode` quản lý tập trung mã lỗi nội bộ kèm HTTP Status chuẩn doanh nghiệp.
* Hoàn thiện bộ lọc `@RestControllerAdvice` bắt trọn vẹn lỗi Runtime hệ thống, lỗi logic nghiệp vụ (`AppException`), và tự động bóc tách chuỗi thông báo lỗi của Jakarta Validation trả ra ngoài Client.

### Giai đoạn 5: Xây dựng và Kiểm thử Toàn diện CRUD User API
* **Hoàn thiện Logic Tầng Service & Controller:** Thiết lập thành công trọn bộ 4 Endpoints cốt lõi cho `User`.
* **Cô lập & Sửa lỗi Xung đột Bảo mật (401 Unauthorized):** Phát hiện và xử lý triệt để tiến trình chạy ngầm, giải phóng cổng `8081` cho việc test logic thuần thục.
* **Nâng cấp Bộ bắt lỗi Chẩn đoán Nhanh trên Postman:** Tối ưu hóa hàm xử lý lỗi tổng quát trong `GlobalExceptionHandler` để bóc tách và trả thẳng chuỗi định danh lỗi (`ExceptionClass -> Message`) trực tiếp về Postman.
* **Kết quả Kiểm thử:** Toàn bộ 4 API vượt qua các kịch bản test trên Postman, ghi nhận trạng thái thành công mã `1000` (`200 OK`).

### Giai đoạn 6: Hoàn thiện Nghiệp vụ & Toàn bộ CRUD Student API
* **Thiết lập chuỗi API lồng nhau dữ liệu phức tạp (Nested JSON):** Xây dựng thành công bộ hàm tạo mới sinh viên đi kèm tài khoản hệ thống cùng lúc, tự động map cấu trúc DTO qua MapStruct.
* **Bảo vệ tính thực thi toàn vẹn bằng `@Transactional`:** Ràng buộc chặt chẽ quá trình lưu dữ liệu xuống bảng `users` và `students`. Đảm bảo hệ thống tự động Rollback (hủy bỏ) toàn luồng nếu xảy ra lỗi xung đột, không sinh dữ liệu rác.
* **Hoàn thành trọn vẹn các Endpoints cho Student:**
  * `POST /students`: Tạo mới sinh viên, tự động gán cứng Role `STUDENT` và xác thực logic tồn tại của Lớp hành chính (`classId`).
  * `GET /students`: Lấy danh sách toàn bộ hồ sơ sinh viên kèm theo dữ liệu "gia phả" đa tầng lồng nhau (User, Role, Class, Department).
  * `GET /students/{studentId}`: Xem thông tin chi tiết một sinh viên theo ID.
  * `PUT /students/{studentId}`: Cập nhật lý lịch cá nhân linh hoạt (Họ tên, ngày sinh, giới tính, số điện thoại) và hỗ trợ bốc dỡ điều chuyển lớp hành chính an toàn.
* **Kiểm thử Toàn diện:** Vượt qua toàn bộ kịch bản lỗi ràng buộc dữ liệu đầu vào (Trùng mã sinh viên, trùng Email, sai định dạng hoặc không tồn tại Lớp hành chính) trên môi trường Postman cục bộ.

---

## 🚀 4. Lộ trình Triển khai: CẦN LÀM TIẾP

### Giai đoạn 7: Nghiệp vụ Tính toán Điểm số & GPA Lõi (Chi tiết triển khai)
Để chuẩn bị cho việc lập trình bài toán cốt lõi của hệ thống, Giai đoạn 7 được chia nhỏ thành các bước thực thi nghiêm ngặt sau:

* **Mục 7.1: Hoàn thiện CRUD Môn học (`Subject`)**
  * Xây dựng `SubjectRequest` DTO kiểm tra điều kiện mã môn và số tín chỉ (>0).
  * Viết Service xử lý logic kiểm tra trùng `code` môn học trước khi lưu.
  * Mở các Endpoint: `POST`, `GET`, `PUT`, `DELETE` cho `/subjects`.
* **Mục 7.2: Quản lý Lớp học phần (`CourseClass`)**
  * Viết API mở lớp học phần theo học kỳ, liên kết chặt chẽ với một ID môn học gốc (`Subject`).
* **Mục 7.3: Xây dựng Tầng xử lý Điểm số (`Grade`) và Thuật toán quy đổi**
  * Thiết lập API nhập điểm thành phần cho sinh viên theo lớp học phần (`attendanceGrade`, `midtermGrade`, `finalGrade`).
  * Xây dựng logic tự động tính toán Điểm tổng kết hệ 10: `overallGrade = (Điểm_CC * 0.1) + (Điểm_GK * 0.3) + (Điểm_CK * 0.6)` *(Tỷ lệ cấu hình linh hoạt)*.
  * Thiết lập thuật toán quy đổi tự động từ Điểm hệ 10 sang Điểm chữ (`letter Grade`) và Điểm hệ 4 dựa theo quy chế đào tạo tín chỉ:
    * Từ 8.5 - 10.0: **A** (Điểm hệ 4: 4.0)
    * Từ 8.0 - 8.4: **B+** (Điểm hệ 4: 3.5)
    * Từ 7.0 - 7.9: **B** (Điểm hệ 4: 3.0)
    * Từ 6.5 - 6.9: **C+** (Điểm hệ 4: 2.5)
    * Từ 5.5 - 6.4: **C** (Điểm hệ 4: 2.0)
    * Từ 5.0 - 5.4: **D+** (Điểm hệ 4: 1.5)
    * Từ 4.0 - 4.9: **D** (Điểm hệ 4: 1.0)
    * Dưới 4.0: **F** (Điểm hệ 4: 0.0 - Học lại)
* **Mục 7.4: API Truy vấn học tập và Tính GPA tổng hợp**
  * Viết API lấy bảng điểm chi tiết của một sinh viên cụ thể.
  * Xây dựng hàm tính toán Điểm trung bình học kỳ (GPA) và Điểm trung bình tích lũy (CPA) theo công thức bình quân gia quyền của số tín chỉ môn học.

### Giai đoạn 8: Tích hợp Hệ thống Bảo mật Chuyên sâu (Spring Security & JWT)
* Kích hoạt lại Spring Security trên file `pom.xml`.
* Hiện thực hóa cơ chế mã hóa mật khẩu một chiều bằng thuật toán `BCryptPasswordEncoder`.
* Xây dựng API Đăng nhập (`POST /auth/login`), kiểm tra thông tin và cấp phát chuỗi mã hóa bảo mật Token JWT.
* Thiết lập cấu hình phân quyền chặt chẽ (Phân biệt vai trò: Chỉ Giảng viên/Admin được nhập và chỉnh sửa điểm, Sinh viên chỉ được quyền truy cập xem điểm cá nhân).

### Giai đoạn 9: Đóng gói và Triển khai hệ thống (Docker)
* Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java.
* Viết file liên kết đồng bộ `docker-compose.yml` để vận hành cùng lúc Container Spring Boot và Container Database MySQL độc lập trên mọi môi trường.

---

## 🔗 5. Quy trình quản lý mã nguồn (Git Workflow)
* **`main`**: Nhánh Production (chứa code ổn định).
* **`develop`**: Nhánh tích hợp (nơi gom tính năng).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển tính năng riêng lẻ.

---

### 📜 6. Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup-entities` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, MySQL. |
| 06/06/2026 | `feature/setup-entities` | **Hoàn thành** | Xây dựng 8 Entities, Repo, DTO, Mapper, Exception Handler. |
| 06/06/2026 | `main` | **Merge** | Gộp code từ `feature/setup-entities` vào `main`. |
| 06/06/2026 | `develop` | **Tạo mới** | Tạo nhánh `develop` từ `main`. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman (Loại bỏ thành công lỗi kẹt cổng 401). |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản @Transactional và gán tự động phân quyền hệ thống. |
| 07/06/2026 | `develop` | **Tài liệu** | Đẩy mã nguồn an toàn lên GitHub bảo mật hai nhánh độc lập; bổ sung chi tiết cấu trúc thuật toán quy đổi điểm cốt lõi cho Giai đoạn 7. |
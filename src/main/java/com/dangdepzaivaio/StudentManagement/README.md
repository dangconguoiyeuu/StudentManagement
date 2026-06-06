# Student Management System (Hệ thống Quản lý Sinh viên)

Hệ thống Backend RESTful API quản lý đào tạo và điểm số cấp bậc đại học, được xây dựng dựa trên kiến trúc phân tầng chuyên nghiệp (Layered Architecture) với các công nghệ tối tân nhất hiện nay.

---

## 🛠 1. Công nghệ Sử dụng (Tech Stack)
* **Core Language:** Java 26 (Tận dụng tối đa Java Records, Pattern Matching)
* **Framework:** Spring Boot 4.0.6 (Bản phát hành mới nhất)
* **Database Layer:** MySQL 8.0, Spring Data JPA (Hibernate 7.x)
* **Security & Auth:** Spring Security, JWT (JSON Web Token)
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
* Kiểm thử khởi động server cục bộ mượt mà trên cổng `8080`.

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
* Biên dịch dự án hoàn tất: Lệnh `./mvnw clean compile` báo trạng thái **`BUILD SUCCESS`**.

---

## 🚀 4. Lộ trình Triển khai: CẦN LÀM TIẾP

### Giai đoạn 4 (Tiếp tục): Xây dựng Tầng Logic Nghiệp vụ (Service Layer)
* Viết toàn bộ các xử lý CRUD (Thêm, sửa, xóa, tìm kiếm) cho Sinh viên, Lớp học, Khoa, Môn học.
* **Nghiệp vụ tính điểm cốt lõi:** Lập trình thuật toán tự động tính điểm tổng kết môn học hệ 10 từ các điểm thành phần, tự động quy đổi sang hệ điểm chữ (A, B+, B, C...) và quy đổi sang hệ 4 để tính toán chính xác điểm GPA tích lũy của sinh viên theo từng học kỳ.

### Giai đoạn 5: Tầng Giao tiếp API (Controller Layer)
* Xây dựng các Endpoint RESTful API an toàn cho tất cả các thực thể.
* Bọc toàn bộ kết quả thành công trong cấu trúc `ApiResponse`.
* Sử dụng Postman để viết kịch bản kiểm thử toàn diện luồng dữ liệu.

### Giai đoạn 6: Bảo mật nâng cao (Spring Security & JWT)
* Cấu hình phân quyền nghiêm ngặt trên các đường dẫn API (Ví dụ: Chỉ Giảng viên được nhập/sửa điểm, Sinh viên chỉ có quyền xem điểm cá nhân).
* Viết logic Authentication thực hiện mã hóa mật khẩu bằng BCrypt, cấp phát và xác thực chuỗi Token bảo mật JWT.

### Giai đoạn 7: Đóng gói và Triển khai hệ thống (Docker)
* Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng.
* Viết file liên kết đồng bộ `docker-compose.yml` để vận hành cùng lúc Container Spring Boot và Container Database MySQL độc lập.
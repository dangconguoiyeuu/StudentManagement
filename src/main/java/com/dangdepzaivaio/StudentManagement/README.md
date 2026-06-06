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

### Giai đoạn 5 (Mới cập nhật): Xây dựng và Kiểm thử Toàn diện CRUD User API
* **Hoàn thiện Logic Tầng Service & Controller:** Thiết lập thành công trọn bộ 4 Endpoints cốt lõi cho `User`:
    * `POST /users`: Tạo mới tài khoản (kiểm tra trùng lặp tài khoản qua `existsByUsername`).
    * `GET /users`: Lấy danh sách toàn bộ người dùng trong hệ thống.
    * `GET /users/{userId}`: Lấy chi tiết thông tin một người dùng cụ thể.
    * `PUT /users/{userId}`: Cập nhật linh hoạt mật khẩu/email (bảo vệ trường `username` và `createdAt` không bị chỉnh sửa sai lệch).
* **Cô lập & Sửa lỗi Xung đột Bảo mật (401 Unauthorized):** Phát hiện và xử lý triệt để tiến trình chạy ngầm (zombie process) bằng cách tạm thời vô hiệu hóa bộ lọc tự động của Spring Security trong file `pom.xml`, giải phóng hoàn toàn cổng `8081` cho việc test logic thuần thục.
* **Nâng cấp Bộ bắt lỗi Chẩn đoán Nhanh trên Postman:** Tối ưu hóa hàm xử lý lỗi tổng quát `handlingRuntimeException` trong `GlobalExceptionHandler`. Thay vì ẩn lỗi dưới mã `9999` với câu chữ chung chung, hệ thống hiện tại tự động bóc tách và trả thẳng chuỗi định danh lỗi (`ExceptionClass -> Message`) trực tiếp về Postman. Giúp lập trình viên nhận diện ngay lập tức lỗi thiếu Body (`HttpMessageNotReadableException`) hoặc lỗi cú pháp mà không cần lội qua hàng chục dòng log Terminal rối mắt.
* **Kết quả Kiểm thử:** Toàn bộ 4 API vượt qua các kịch bản test trên Postman và lệnh `curl` môi trường Windows MINGW64, ghi nhận trạng thái thành công mã `1000` (`200 OK`) đồng hành cùng cơ chế tự động điền mốc thời gian `createdAt`/`updatedAt` từ JPA Auditing.

---

## 🚀 4. Lộ trình Triển khai: CẦN LÀM TIẾP

### Giai đoạn 6: Triển khai Logic Nghiệp vụ Sinh viên (Student Service & CRUD)
* Viết toàn bộ các xử lý CRUD cho Sinh viên (`Student`), liên kết logic tạo sinh viên đồng thời với tài khoản hệ thống (`User`) thông qua `StudentMapper` và MapStruct.
* Tiếp tục mở rộng sang quản lý Lớp học hành chính, Khoa, Môn học.

### Giai đoạn 7: Nghiệp vụ Tính toán Điểm số & GPA Lõi
* Lập trình thuật toán tự động tính điểm tổng kết môn học hệ 10 từ các điểm thành phần (Chuyên cần, Giữa kỳ, Cuối kỳ).
* Tự động quy đổi điểm số sang hệ điểm chữ (A, B+, B, C, D, F...) theo quy chế đào tạo tín chỉ.
* Xây dựng hàm tính điểm trung bình học kỳ (GPA) và điểm tích lũy hệ 4 của sinh viên phục vụ xét học bổng, cảnh báo học vụ.

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
| 06/06/2026 | `develop` | **Cập nhật** | **Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman (Loại bỏ thành công lỗi kẹt cổng 401).** |
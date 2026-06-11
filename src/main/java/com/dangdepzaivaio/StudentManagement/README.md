# 🎓 Hệ thống Quản trị Đào tạo & Điểm số Sinh viên (Student Management System)

Dự án Hệ thống Quản lý Sinh viên toàn diện được thiết kế theo kiến trúc **Layered Architecture** sát với nghiệp vụ thực tế của các trường Đại học. Hệ thống áp dụng mô hình phân quyền chặt chẽ (RBAC) với 3 vai trò: Quản trị viên (ADMIN), Giảng viên (TEACHER) và Sinh viên (STUDENT).

## 🛠 Công nghệ sử dụng (Tech Stack)

### ⚙️ Backend
* **Ngôn ngữ:** Java 26
* **Framework:** Spring Boot 4.0.6
* **Cơ sở dữ liệu:** MySQL 8.0 & Spring Data JPA (Hibernate)
* **Bảo mật:** Spring Security & JSON Web Token (JWT) qua Nimbus JOSE
* **Tiện ích:** MapStruct 1.6.3 (Mapper), Lombok, Jakarta Validation

### 🎨 Frontend
* **Core:** React 19 & Vite
* **Routing:** React Router v7
* **HTTP Client:** Axios (Tích hợp tự động gắn Token)
* **Styling:** CSS Design Tokens thuần (Tối ưu Dark Theme bảo vệ mắt)

## ✨ Tính năng nổi bật (Key Features)
1. **Phân quyền 3 tầng (RBAC):**
  * **ADMIN:** Quản lý cơ cấu phòng ban, lớp học, môn học, khởi tạo và cấp tài khoản tự động. Không được phép can thiệp sửa điểm sinh viên.
  * **TEACHER:** Đặc quyền nhập điểm, sửa điểm cho các lớp học phần và tra cứu tổng quan bảng điểm toàn trường.
  * **STUDENT:** Chỉ được phép tra cứu kết quả học tập cá nhân của chính mình.
2. **Thuật toán GPA Tín chỉ:** Tự động tính điểm tổng kết (10% CC - 30% GK - 60% CK), quy đổi tự động sang Điểm chữ (A, B, C, D, F) và hệ 4 (4.0, 3.5...). Tính toán GPA bình quân gia quyền.
3. **Bảo mật Vòng đời Tài khoản:** Mọi tài khoản cấp mới có mật khẩu mặc định được băm BCrypt. Người dùng bị ép buộc đổi mật khẩu mới trong lần đăng nhập đầu tiên. Tích hợp UI ẩn/hiện mật khẩu thông minh.
4. **An toàn Dữ liệu:** Áp dụng Cascading Soft Delete (Xóa mềm), bảo vệ toàn vẹn khóa ngoại. Auto-map chính xác định danh tài khoản thông qua liên kết `user_id` chống sai lệch dữ liệu.

## 🚀 Hướng dẫn cài đặt & Chạy dự án (How to run)

### 1. Chuẩn bị Cơ sở dữ liệu
* Tạo một database trong MySQL có tên là: `student_management`.
* Thông tin kết nối mặc định (Sửa trong `src/main/resources/application.yaml`):
  * Username: `root`
  * Password: `dcnyuu`
* Import file `student_management.sql` đi kèm để có ngay bộ dữ liệu mẫu chuẩn hóa. (Lưu ý: Hệ thống đã tích hợp `DatabaseInitializer` tự động reset mật khẩu toàn bộ Database về chuẩn `password1234` khi khởi động Spring Boot để chống sai lệch chuỗi băm BCrypt).

### 2. Khởi chạy Backend (Spring Boot)
Di chuyển vào thư mục gốc của dự án và chạy:
\`\`\`bash
./mvnw spring-boot:run
\`\`\`
*Backend sẽ khởi chạy ở cổng: `http://localhost:8081`*

### 3. Khởi chạy Frontend (ReactJS)
Mở một Terminal mới, di chuyển vào thư mục giao diện và chạy:
\`\`\`bash
cd student-management-ui
npm install
npm run dev
\`\`\`
*Frontend sẽ khởi chạy ở cổng: `http://localhost:5173`*

## 🔑 Tài khoản thử nghiệm (Test Accounts)
Sau khi Backend khởi động, toàn bộ mật khẩu mặc định là: **`password1234`**.

* **ADMIN:** Tên đăng nhập: `admin`
* **TEACHER:** Tên đăng nhập: `GV2026_01` (đến `GV2026_05`)
* **STUDENT:** Tên đăng nhập: `B21CNPM001` (đến `B21CNPM005`)

---

## ✅ Tiến độ Dự án (Project Progress)

### ☑️ Giai đoạn 1 đến 6: Hoàn thiện Kiến trúc & Nghiệp vụ Backend (ĐÃ HOÀN THÀNH)
* Xây dựng trọn bộ API CRUD liên kết lồng nhau 8 thực thể nền tảng.
* Xử lý triệt để truy vấn N+1 bằng `JOIN FETCH`. Tích hợp Cascading Soft Delete.
* Cấu hình Spring Security, JWT Auth, CORS toàn cục và Auto-Reset Password cốt lõi.

### ☑️ Giai đoạn 7: Thiết lập và Phát triển Phân hệ UI Client (ĐÃ HOÀN THÀNH)
* [x] Khởi tạo dự án Single Page Application (SPA) bằng công nghệ React 19 + Vite.
* [x] Thiết lập cấu hình **Axios Client tập trung** xử lý gắn Token ngầm và bóc tách `ApiResponse`.
* [x] Xây dựng màn hình Đăng nhập (`LoginPage.jsx`) tích hợp tính năng ẩn/hiện mật khẩu (👁️) và luồng ép đổi mật khẩu lần đầu.
* [x] Phát triển hệ thống View dữ liệu phân cấp nghiêm ngặt: Admin quản lý tài khoản, Teacher nhập điểm, Student xem điểm cá nhân.
* [x] Tích hợp tính năng Tra cứu điểm toàn trường (System-wide Grades) chuyên nghiệp dành riêng cho Ban giáo vụ và Giảng viên.

---

## 🚀 Lộ trình Triển khai Tiếp theo (Roadmap)

### 🔲 Giai đoạn 8: Nâng cấp Nghiệp vụ Nâng cao
* [ ] Tích hợp tính năng Xuất/Nhập danh sách sinh viên và bảng điểm bằng file Excel (Apache POI).
* [ ] Thiết kế Dashboard vẽ biểu đồ thống kê học lực sinh viên trực quan bằng Chart.js hoặc Recharts.
* [ ] Tính năng Quên mật khẩu qua Email (Java Mail Sender).

### 🔲 Giai đoạn 9: Đóng gói và Triển khai hệ thống (DevOps)
* [ ] Viết file cấu hình `Dockerfile` đóng gói mã nguồn ứng dụng Java (Multi-stage build).
* [ ] Viết file `docker-compose.yml` để thiết lập mạng ảo vận hành đồng bộ Spring Boot và MySQL.
* [ ] Triển khai (Deploy) Backend lên Cloud (Render/Railway) và Frontend lên Vercel.

---

## 🔗 Quy trình Quản lý Mã nguồn (Git Workflow)
* **`main`**: Nhánh Production lưu trữ các phiên bản mã nguồn đã đạt trạng thái ổn định tuyệt đối.
* **`develop`**: Nhánh tích hợp (nơi gom các tính năng mới hoàn thiện để kiểm thử).
* **`feature/<tên-tính-năng>`**: Nhánh phát triển các chức năng riêng lẻ tách biệt.

---

### 📜 Nhật ký hành trình (Project Changelog)
| Thời gian | Nhánh | Thao tác | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| 06/06/2026 | `feature/setup` | **Khởi tạo** | Tạo dự án, cấu hình Spring Boot, kết nối MySQL và khởi dựng thành công 8 thực thể nền tảng. |
| 06/06/2026 | `develop` | **Cập nhật** | Hoàn thành bộ API CRUD User & Nâng cấp bộ chẩn đoán lỗi chi tiết trực tiếp trên Postman. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành toàn diện bộ API CRUD Student, xử lý giao dịch cô lập tài khoản `@Transactional` và cơ chế Xóa mềm. |
| 07/06/2026 | `develop` | **Cập nhật** | Hoàn thành trọn gói Nghiệp vụ Môn học, Lớp học phần, phân hệ Điểm số, thuật toán quy đổi GPA tín chỉ và chống lỗi N+1. |
| 08/06/2026 | `develop` | **Cập nhật** | Hoàn thiện toàn phân hệ CRUD danh mục hành chính Khoa/Viện và Lớp hành chính. |
| 09/06/2026 | `develop` | **Cập nhật** | Cấu hình CORS toàn cục, làm giàu Payload phản hồi Login, vá triệt để lỗ hổng `NullPointerException`. |
| 10/06/2026 | `develop` | **Push Code**| Vá lỗi định danh `studentId/teacherId`, tước quyền can thiệp điểm của Admin giao cho Teacher. Hoàn thiện UI tra cứu điểm toàn trường, nút ẩn/hiện mật khẩu và kích hoạt Auto-Reset Password. |

## 📝 Hướng dẫn cập nhật tài liệu & Push Code (Cheatsheet)

### 1. Quy tắc cấu trúc cập nhật README (Bắt buộc tuân thủ)
Để đảm bảo tệp tài liệu luôn ngăn nắp và không bị mất các thông tin cốt lõi khi nâng cấp hệ thống, quy trình cập nhật tệp `README.md` phải tuân theo nguyên tắc phân tách nội dung sau:

* **🚫 GIỮ NGUYÊN T TUYỆT ĐỐI (Không chỉnh sửa cấu trúc gốc):**
  * Tiêu đề dự án và mô tả tổng quan.
  * Danh mục công nghệ sử dụng (**Tech Stack** - Backend & Frontend).
  * Danh sách tính năng nổi bật (**Key Features**).
  * Hướng dẫn cài đặt & Khởi chạy dự án (**How to run**).
  * Thông tin tài khoản thử nghiệm (**Test Accounts**).
* **🔄 CHỈ SỬA ĐỔI / CẬP NHẬT 3 PHẦN ĐỘNG SAU:**
  1.  **Tiến độ Dự án (Project Progress):** Khi một tính năng ở mục Lộ trình được hoàn thiện, chuyển tính năng đó lên mục này và đánh dấu tích chọn `- [x]`.
  2.  **Lộ trình Tiếp theo (Roadmap):** Bổ sung hoặc loại bỏ các đầu việc, tính năng nâng cao dự kiến phát triển tiếp theo dưới dạng ô trống `- [ ]`.
  3.  **Nhật ký hành trình (Project Changelog):** Mỗi khi push code thành công, bắt buộc thêm 1 dòng mới vào cuối bảng theo cấu trúc: `| Ngày/Tháng/Năm | Nhánh | Thao tác | Mô tả chi tiết các file đã sửa và tính năng vừa vá |`.
  






# Student Management System

Student Management System is a full-stack academic administration platform designed to streamline operations for universities. It connects administrators, teachers, and students to effectively manage academic records, course registrations, grading, and scheduling. The project features a secure, robust Spring Boot REST API paired with a fast, responsive React UI.

## Live Demo & Deployment

You can test the application online immediately without any local setup. The project is fully deployed to the cloud:

[Try the Live Demo Here](https://student-management-wine-ten.vercel.app/)

**Important Note:** The backend API is hosted on Render's free tier, which spins down after periods of inactivity. Your very first login or request might take 2–3 minutes to wake the server up. Please be patient! Subsequent requests will be fast and responsive.

**Test Credentials:**

### Admin Account
- **Email:** admin@open.edu.vn
- **Password:** admin123

### Student / Teacher Accounts
- Accounts are automatically generated upon creating a new student or teacher profile.
- **Email Format:** `[student_or_teacher_code]@open.edu.vn`
- Example: `sv01@open.edu.vn`, `gv01@open.edu.vn`
- **Default Password:** `password1234`

> The system enforces a mandatory password change on the first login.

## Cloud Infrastructure

- Frontend UI: Vercel
- Backend API: Render  
  https://studentmanagement-backend-zihh.onrender.com
- Database: Aiven MySQL

---

## Overview

Developed as a comprehensive software engineering project by Tran Minh Dang (Hanoi Open University), this platform prioritizes a clear separation of concerns, secure role-based access control (RBAC), and efficient bulk-data handling via Excel integrations.

Core experience areas:

- Manage departments, subjects, administrative classes, and course classes.
- Facilitate real-time, time-bound course registration.
- Academic advisor review and approval workflows.
- Grade tracking and GPA calculation (10-point & 4-point scales).
- Bulk import/export using Excel templates.

---

## Key Features

### Admin Experience

- System Configuration
- User Management
- Academic Directory
- Data Operations
- Dashboard & Analytics

### Teacher Experience

- Teacher Dashboard
- Grade Management
- Academic Advising
- Excel Integration

### Student Experience

- Academic Profile
- Course Registration
- Grade Tracking
- Schedule View

---

## Tech Stack

### Backend
- Java 26
- Spring Boot 3.x
- Spring Security
- Nimbus JOSE JWT
- Spring Data JPA
- Hibernate
- MySQL
- MapStruct
- Apache POI

### Frontend
- React 19.2.6
- Vite
- React Router DOM 7.17.0
- Axios

---

## Project Structure

```text
.
|-- docker-compose.yml
|-- pom.xml
|-- src/main/java/com/.../
|   |-- configuration/
|   |-- controller/
|   |-- dto/
|   |-- entity/
|   |-- exception/
|   |-- mapper/
|   |-- repository/
|   `-- service/
`-- student-management-ui/
    |-- package.json
    |-- vite.config.js
    `-- src/
        |-- api/
        |-- components/
        |-- context/
        `-- pages/
```

## Getting Started

### Requirements
- JDK 26
- Node.js
- Docker & Docker Compose
- Maven

### Install Dependencies

```bash
docker-compose up -d
./mvnw clean package -DskipTests

cd student-management-ui
npm install
```

### Run the App

Backend:

```bash
./mvnw spring-boot:run
```

Frontend:

```bash
cd student-management-ui
npm run dev
```

Default route:

```text
/login
```

## Common Commands

```bash
docker-compose up -d
./mvnw clean compile
npm install
npm run dev
npm run build
```

## Navigation

Defined in `student-management-ui/src/App.jsx`

- /login
- /dashboard
- /students
- /teachers
- /departments
- /subjects
- /admin-classes
- /course-classes
- /registration
- /schedule
- /grades

## Design System

- Responsive layout
- CSS variables
- Bootstrap semantic colors
- Shared reusable components

## Current Status

Operational features:

- JWT authentication
- CRUD for academic entities
- Excel import/export
- Registration validation
- GPA and ranking

## Suggested Next Steps

- PDF transcript export
- WebSocket / email notifications
- Redux Toolkit or Zustand
- Automated testing
- Branding assets

## License

No license has been declared yet.
Add a LICENSE file before commercial distribution.

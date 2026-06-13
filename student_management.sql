CREATE DATABASE  IF NOT EXISTS `student_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `student_management`;
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
  UNIQUE KEY `UK_classes_name` (`name`),
  KEY `FK_classes_department` (`department_id`),
  CONSTRAINT `FK_classes_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D21CNPM1',1),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D22KHMT1',2),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D21DTVT2',3),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D22ATTT1',4),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','D21HTTT1',5);
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
  `teacher_id` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `max_students` int NOT NULL,
  `is_open` bit(1) NOT NULL,
  `schedule` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_course_classes_code` (`code`),
  KEY `FK_course_classes_subject` (`subject_id`),
  KEY `FK_course_classes_teacher` (`teacher_id`),
  CONSTRAINT `FK_course_classes_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  CONSTRAINT `FK_course_classes_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (1,'2026-06-12 16:24:12.623643','2026-06-12 16:30:31.852410','CPP','HK1-2026',1,'GV_01',60,_binary '','Thứ 2 Sáng (Tiết 1-4) - Phòng 1 | Thứ 2 Tối (Tiết 9-12) - Phòng 1'),(2,'2026-06-12 16:24:32.850587','2026-06-12 16:30:32.787485','CTDLGT','HK1-2026',2,'GV_01',60,_binary '','Thứ 3 Sáng (Tiết 1-4) - Phòng 2 | Thứ 6 Chiều (Tiết 5-8) - Phòng 2');
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
  UNIQUE KEY `UK_departments_code` (`code`),
  UNIQUE KEY `UK_departments_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','KHMT','Khoa học máy tính'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DTVT','Điện tử viễn thông'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','ATTT','An toàn thông tin'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HTTT','Hệ thống thông tin'),(6,'2026-06-11 09:39:09.417069','2026-06-11 09:39:09.417069','DULICH','Du Lịch');
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
  `student_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_class_id` bigint NOT NULL,
  `attendance_grade` double DEFAULT NULL,
  `midterm_grade` double DEFAULT NULL,
  `final_grade` double DEFAULT NULL,
  `overall_grade` double DEFAULT NULL,
  `letter_grade` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `grade_4` double DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_grades_student_course_class` (`student_id`,`course_class_id`),
  UNIQUE KEY `UKko1u7sub9pfixo5kagdclh8sj` (`student_id`,`course_class_id`),
  KEY `FK_grades_course_class` (`course_class_id`),
  CONSTRAINT `FK_grades_course_class` FOREIGN KEY (`course_class_id`) REFERENCES `course_classes` (`id`),
  CONSTRAINT `FK_grades_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration_periods`
--

DROP TABLE IF EXISTS `registration_periods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration_periods` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `semester` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time` datetime(6) NOT NULL,
  `end_time` datetime(6) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration_periods`
--

LOCK TABLES `registration_periods` WRITE;
/*!40000 ALTER TABLE `registration_periods` DISABLE KEYS */;
INSERT INTO `registration_periods` VALUES (1,'2026-06-10 15:11:57.000000','2026-06-11 04:14:30.183580','HK1-2026','2026-06-01 00:00:00.000000','2026-06-25 23:59:59.000000',0),(2,'2026-06-11 03:54:58.270392','2026-06-11 04:14:28.315677','HK1-2026','2026-06-11 03:54:00.000000','2026-06-11 04:54:00.000000',0),(3,'2026-06-11 03:56:29.583737','2026-06-11 04:14:26.297399','HK1-2026','2026-06-11 03:56:00.000000','2026-06-11 04:56:00.000000',0),(4,'2026-06-11 04:00:34.818292','2026-06-11 04:04:29.772842','HK1-2026','2026-06-11 04:00:00.000000','2026-06-10 17:00:00.000000',0),(5,'2026-06-11 04:04:49.418445','2026-06-11 04:04:52.888943','HK1-2026','2026-06-11 04:04:00.000000','2026-06-11 05:04:00.000000',0),(6,'2026-06-11 04:05:05.732900','2026-06-11 04:05:55.054830','HK1-2026','2026-06-11 04:04:00.000000','2026-06-11 05:04:00.000000',0),(7,'2026-06-11 04:06:01.927453','2026-06-11 04:14:42.336858','HK1-2026','2026-06-11 04:05:00.000000','2026-06-11 04:11:00.000000',0),(8,'2026-06-11 04:45:35.417758','2026-06-11 09:54:49.377681','HK1-2026','2026-06-11 04:45:00.000000','2026-06-11 04:50:00.000000',0),(9,'2026-06-11 09:50:32.262679','2026-06-11 09:55:27.900801','HK1-2026','2026-06-11 09:50:00.000000','2026-06-11 09:52:00.000000',0),(10,'2026-06-11 09:55:39.544839','2026-06-11 10:08:13.599534','HK1-2026','2026-06-11 09:55:00.000000','2026-06-11 09:57:00.000000',0),(11,'2026-06-12 06:43:47.972880','2026-06-12 06:45:08.222916','HK1-2026','2026-06-12 06:43:00.000000','2026-06-12 06:45:00.000000',0),(12,'2026-06-12 06:47:02.923115','2026-06-12 06:50:08.305889','HK1-2026','2026-06-12 06:46:00.000000','2026-06-12 06:50:00.000000',0),(13,'2026-06-12 08:25:01.498266','2026-06-12 08:26:09.979764','HK1-2026','2026-06-12 08:24:00.000000','2026-06-12 08:26:00.000000',0),(14,'2026-06-12 08:27:12.835165','2026-06-12 08:43:10.316230','HK1-2026','2026-06-12 08:27:00.000000','2026-06-12 08:43:00.000000',0),(15,'2026-06-12 14:47:07.097377','2026-06-12 14:49:57.579706','HK1-2026','2026-06-12 14:47:00.000000','2026-06-12 14:49:00.000000',0),(16,'2026-06-12 15:16:18.382069','2026-06-12 15:18:55.428633','HK1-2026','2026-06-12 15:16:00.000000','2026-06-12 15:20:00.000000',0),(17,'2026-06-12 15:18:43.156361','2026-06-12 15:20:58.172764','HK1-2026','2026-06-12 15:18:00.000000','2026-06-12 15:20:00.000000',0),(18,'2026-06-12 15:46:19.478428','2026-06-12 15:47:02.031618','HK1-2026','2026-06-12 15:46:00.000000','2026-06-12 15:50:00.000000',0),(19,'2026-06-12 15:48:09.878298','2026-06-12 15:52:58.691415','HK1-2026','2026-06-12 15:48:00.000000','2026-06-12 15:52:00.000000',0),(20,'2026-06-12 16:24:40.329530','2026-06-12 16:26:18.983108','HK1-2026','2026-06-12 16:24:00.000000','2026-06-12 16:26:00.000000',0),(21,'2026-06-12 16:30:36.750688','2026-06-12 16:33:19.724343','HK1-2026','2026-06-12 16:30:00.000000','2026-06-12 16:33:00.000000',0),(22,'2026-06-12 17:35:07.890248','2026-06-13 05:18:54.572985','HK1-2026','2026-06-12 17:35:00.000000','2026-06-12 17:40:00.000000',0);
/*!40000 ALTER TABLE `registration_periods` ENABLE KEYS */;
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
  UNIQUE KEY `UK_roles_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','ADMIN'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','STUDENT'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','TEACHER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `student_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `class_id` bigint NOT NULL,
  `cohort` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'Khóa 1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_students_code` (`student_code`),
  KEY `FK_students_class` (`class_id`),
  CONSTRAINT `FK_students_class` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`),
  CONSTRAINT `FK_students_user` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('HS_01','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM001','Anh','Nguyễn Đình','2003-04-05','Nam','0987654321',1,1,'Khóa 1'),('HS_02','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM002','Đăng','Trần Minh','2004-05-23','Nam','0987654322',1,2,'Khóa 1'),('HS_03','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM003','Hải','Nguyễn Hoàng','2004-10-15','Nam','0987654323',1,3,'Khóa 1'),('HS_04','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM004','Linh','Phạm Khánh','2004-05-20','Nữ','0987654324',1,4,'Khóa 1'),('HS_05','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM005','Tùng','Vũ Sơn','2004-12-01','Nam','0987654325',1,5,'Khóa 1'),('HS_06','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM006','Bình','Nguyễn Văn','2003-01-12','Nam','0981000006',1,1,'Khóa 1'),('HS_07','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM007','Cường','Trần Mạnh','2003-02-14','Nam','0981000007',1,1,'Khóa 1'),('HS_08','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM008','Dũng','Lê Hoàng','2003-03-16','Nam','0981000008',1,1,'Khóa 1'),('HS_09','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM009','Đạt','Phạm Tiến','2003-04-18','Nam','0981000009',1,1,'Khóa 1'),('HS_10','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM010','Giang','Vũ Trường','2003-05-20','Nam','0981000010',1,1,'Khóa 1'),('HS_11','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM011','Hùng','Hoàng Minh','2003-06-22','Nam','0981000011',1,1,'Khóa 1'),('HS_12','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM012','Huy','Phan Quốc','2003-07-24','Nam','0981000012',1,1,'Khóa 1'),('HS_13','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM013','Khanh','Đỗ Duy','2003-08-26','Nam','0981000013',1,1,'Khóa 1'),('HS_14','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM014','Linh','Đặng Nhật','2003-09-28','Nữ','0981000014',1,1,'Khóa 1'),('HS_15','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM015','Minh','Bùi Quang','2003-10-30','Nam','0981000015',1,1,'Khóa 1'),('HS_16','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM016','Nam','Nguyễn Hoài','2003-11-01','Nam','0981000016',1,1,'Khóa 1'),('HS_17','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM017','Phong','Trần Thanh','2003-12-03','Nam','0981000017',1,1,'Khóa 1'),('HS_18','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM018','Quân','Lê Anh','2003-05-05','Nam','0981000018',1,1,'Khóa 1'),('HS_19','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM019','Sơn','Phạm Ngọc','2003-06-07','Nam','0981000019',1,1,'Khóa 1'),('HS_20','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT001','Tâm','Vũ Đức','2004-01-10','Nam','0982000001',1,2,'Khóa 1'),('HS_21','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT002','Tuấn','Hoàng Minh','2004-02-12','Nam','0982000002',1,2,'Khóa 1'),('HS_22','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT003','Thành','Phan Công','2004-03-14','Nam','0982000003',1,2,'Khóa 1'),('HS_23','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT004','Việt','Đỗ Quốc','2004-04-16','Nam','0982000004',1,2,'Khóa 1'),('HS_24','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT005','Vy','Đặng Thu','2004-05-18','Nữ','0982000005',1,2,'Khóa 1'),('HS_25','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT006','Yến','Bùi Hải','2004-06-20','Nữ','0982000006',1,2,'Khóa 1'),('HS_26','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT007','Ngọc','Nguyễn Bích','2004-07-22','Nữ','0982000007',1,2,'Khóa 1'),('HS_27','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT008','Long','Trần Bảo','2004-08-24','Nam','0982000008',1,2,'Khóa 1'),('HS_28','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT009','Quang','Lê Minh','2004-09-26','Nam','0982000009',1,2,'Khóa 1'),('HS_29','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT010','Tiến','Phạm Hồng','2004-10-28','Nam','0982000010',1,2,'Khóa 1'),('HS_30','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT011','Trung','Vũ Đình','2004-11-30','Nam','0982000011',1,2,'Khóa 1'),('HS_31','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT012','Tú','Hoàng Anh','2004-12-15','Nam','0982000012',1,2,'Khóa 1'),('HS_32','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT013','Phước','Phan Gia','2004-08-11','Nam','0982000013',1,2,'Khóa 1'),('HS_33','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT014','Hoàng','Đỗ Huy','2004-09-19','Nam','0982000014',1,2,'Khóa 1'),('HS_34','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT001','An','Nguyễn Thành','2003-02-22','Nam','0983000001',1,3,'Khóa 1'),('HS_35','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT002','Bách','Trần Xuân','2003-03-24','Nam','0983000002',1,3,'Khóa 1'),('HS_36','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT003','Chi','Lê Linh','2003-04-26','Nữ','0983000003',1,3,'Khóa 1'),('HS_37','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT004','Duy','Phạm Đức','2003-05-28','Nam','0983000004',1,3,'Khóa 1'),('HS_38','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT005','Đông','Vũ Phương','2003-06-30','Nam','0983000005',1,3,'Khóa 1'),('HS_39','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT006','Hà','Hoàng Thu','2003-07-12','Nữ','0983000006',1,3,'Khóa 1'),('HS_40','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT007','Hiếu','Phan Trọng','2003-08-14','Nam','0983000007',1,3,'Khóa 1'),('HS_41','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT008','Hoa','Đỗ Thị','2003-09-16','Nữ','0983000008',1,3,'Khóa 1'),('HS_42','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT009','Hạnh','Đặng Thúy','2003-10-18','Nữ','0983000009',1,3,'Khóa 1'),('HS_43','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT010','Khôi','Bùi Nguyên','2003-11-20','Nam','0983000010',1,3,'Khóa 1'),('HS_44','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT011','Khoa','Nguyễn Đăng','2003-12-22','Nam','0983000011',1,3,'Khóa 1'),('HS_45','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT012','Khánh','Trần Nhật','2003-01-25','Nam','0983000012',1,3,'Khóa 1'),('HS_46','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT013','Kiên','Lê Trung','2003-02-27','Nam','0983000013',1,3,'Khóa 1'),('HS_47','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT014','Lâm','Phạm Tùng','2003-03-29','Nam','0983000014',1,3,'Khóa 1'),('HS_48','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT001','Mai','Vũ Tuyết','2004-03-11','Nữ','0984000001',1,4,'Khóa 1'),('HS_49','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT002','Nghĩa','Hoàng Trọng','2004-04-13','Nam','0984000002',1,4,'Khóa 1'),('HS_50','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT003','Nguyên','Phan Thảo','2004-05-15','Nữ','0984000003',1,4,'Khóa 1'),('HS_51','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT004','Nhân','Đỗ Thành','2004-06-17','Nam','0984000004',1,4,'Khóa 1'),('HS_52','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT005','Nhi','Đặng Thục','2004-07-19','Nữ','0984000005',1,4,'Khóa 1'),('HS_53','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT006','Phát','Bùi Tấn','2004-08-21','Nam','0984000006',1,4,'Khóa 1'),('HS_54','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT007','Phúc','Nguyễn Hồng','2004-09-23','Nam','0984000007',1,4,'Khóa 1'),('HS_55','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT008','Phương','Trần Mai','2004-10-25','Nữ','0984000008',1,4,'Khóa 1'),('HS_56','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT009','Phượng','Lê Thị','2004-11-27','Nữ','0984000009',1,4,'Khóa 1'),('HS_57','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT010','Quốc','Phạm Anh','2004-12-29','Nam','0984000010',1,4,'Khóa 1'),('HS_58','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT011','Quỳnh','Vũ Thúy','2004-01-05','Nữ','0984000011',1,4,'Khóa 1'),('HS_59','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT012','Sang','Hoàng Tấn','2004-02-07','Nam','0984000012',1,4,'Khóa 1'),('HS_60','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT013','Thảo','Phan Thu','2004-03-09','Nữ','0984000013',1,4,'Khóa 1'),('HS_61','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT014','Thắng','Đỗ Đức','2004-04-11','Nam','0984000014',1,4,'Khóa 1'),('HS_62','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT001','Thịnh','Đặng Hùng','2003-04-15','Nam','0985000001',1,5,'Khóa 1'),('HS_63','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT002','Thư','Bùi Minh','2003-05-17','Nữ','0985000002',1,5,'Khóa 1'),('HS_64','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT003','Thương','Nguyễn Hoài','2003-06-19','Nữ','0985000003',1,5,'Khóa 1'),('HS_65','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT004','Trâm','Trần Ngọc','2003-07-21','Nữ','0985000004',1,5,'Khóa 1'),('HS_66','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT005','Trí','Lê Minh','2003-08-23','Nam','0985000005',1,5,'Khóa 1'),('HS_67','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT006','Trọng','Phạm Đức','2003-09-25','Nam','0985000006',1,5,'Khóa 1'),('HS_68','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT007','Trực','Vũ Duy','2003-10-27','Nam','0985000007',1,5,'Khóa 1'),('HS_69','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT008','Trường','Hoàng Xuân','2003-11-29','Nam','0985000008',1,5,'Khóa 1'),('HS_70','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT009','Tường','Phan Cát','2003-12-31','Nam','0985000009',1,5,'Khóa 1'),('HS_71','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT010','Vinh','Đỗ Quang','2003-01-05','Nam','0985000010',1,5,'Khóa 1'),('HS_72','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT011','Vượng','Đặng Công','2003-02-07','Nam','0985000011',1,5,'Khóa 1'),('HS_73','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT012','Xuyên','Bùi Hà','2003-03-09','Nữ','0985000012',1,5,'Khóa 1'),('HS_74','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT013','Huy','Nguyễn Gia','2003-04-11','Nam','0985000013',1,5,'Khóa 1'),('HS_75','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT014','Long','Trần Thượng','2003-05-13','Nam','0985000014',1,5,'Khóa 1'),('HS_76','2026-06-11 04:44:23.693513','2026-06-11 09:23:21.126488','B21CNPM020','Độ','Phùng Thanh ','2007-05-17','Nam','0987561856',0,1,'Khóa 1');
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
  UNIQUE KEY `UK_subjects_code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','C_PLUS_BASE',3,'Lập trình C++ cơ bản'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DSA_STRUCTURE',4,'Cấu trúc dữ liệu & Giải thuật'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','JAVA_WEB_DEV',3,'Lập trình Web nâng cao với Java'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','NET_COMPUTER',3,'Cơ sở mạng máy tính'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','OS_OPERATION',3,'Hệ điều hành máy tính'),(6,'2026-06-11 03:35:18.071164','2026-06-11 03:35:18.071164','GIAITICH1',4,'Giải tích 1'),(7,'2026-06-11 03:35:34.290606','2026-06-11 03:35:34.290606','GIAITICH2',4,'Giải tích 2');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `teacher_code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `department_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_teachers_code` (`teacher_code`),
  KEY `FK_teachers_department` (`department_id`),
  CONSTRAINT `FK_teachers_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `FK_teachers_user` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES ('GV_01','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_01','Tuấn','Trần Quốc','1985-04-12','Nam','0912111222',1,1),('GV_02','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_02','Minh','Nguyễn Thị','1988-08-24','Nữ','0912333444',1,2),('GV_03','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_03','Nam','Lê Hoàng','1982-11-05','Nam','0912555666',1,3),('GV_04','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_04','Hải','Phạm Văn','1979-02-18','Nam','0912777888',1,4),('GV_05','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_05','Linh','Vũ Khánh','1991-06-30','Nữ','0912999000',1,5),('GV_06','2026-06-11 04:40:47.859467','2026-06-11 04:40:47.859467','GV2026_06','Hiền','Nguyễn Thị ','1990-02-14','Nữ','0874659175',1,1),('GV_07','2026-06-12 06:45:54.683407','2026-06-12 06:45:54.683407','GV2026_07','Hoàng','Nguyễn Văn ','1998-06-25','Nam','0123854976',1,6);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FK_user_roles_role` (`role_id`),
  CONSTRAINT `FK_user_roles_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FK_user_roles_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES ('AD',1),('HS_01',2),('HS_02',2),('HS_03',2),('HS_04',2),('HS_05',2),('HS_06',2),('HS_07',2),('HS_08',2),('HS_09',2),('HS_10',2),('HS_11',2),('HS_12',2),('HS_13',2),('HS_14',2),('HS_15',2),('HS_16',2),('HS_17',2),('HS_18',2),('HS_19',2),('HS_20',2),('HS_21',2),('HS_22',2),('HS_23',2),('HS_24',2),('HS_25',2),('HS_26',2),('HS_27',2),('HS_28',2),('HS_29',2),('HS_30',2),('HS_31',2),('HS_32',2),('HS_33',2),('HS_34',2),('HS_35',2),('HS_36',2),('HS_37',2),('HS_38',2),('HS_39',2),('HS_40',2),('HS_41',2),('HS_42',2),('HS_43',2),('HS_44',2),('HS_45',2),('HS_46',2),('HS_47',2),('HS_48',2),('HS_49',2),('HS_50',2),('HS_51',2),('HS_52',2),('HS_53',2),('HS_54',2),('HS_55',2),('HS_56',2),('HS_57',2),('HS_58',2),('HS_59',2),('HS_60',2),('HS_61',2),('HS_62',2),('HS_63',2),('HS_64',2),('HS_65',2),('HS_66',2),('HS_67',2),('HS_68',2),('HS_69',2),('HS_70',2),('HS_71',2),('HS_72',2),('HS_73',2),('HS_74',2),('HS_75',2),('HS_76',2),('GV_01',3),('GV_02',3),('GV_03',3),('GV_04',3),('GV_05',3),('GV_06',3),('GV_07',3);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_first_login` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_users_email` (`email`),
  UNIQUE KEY `UK_users_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('AD','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','admin@open.edu.vn','$2a$10$Nuln0JaFYxBJ92H8tcenfOS7il02iWjIQHp4BoNV.lsHJwiTAHqtu','admin',1,0),('GV_01','2026-06-10 06:16:53.000000','2026-06-10 09:03:59.718134','gv2026_01@open.edu.vn','$2a$10$.RGawvRE0Wxz0a.tXXPESOV9OJIVvuOrhBNjpXLzvbKPRo56czjLK','GV2026_01',1,0),('GV_02','2026-06-10 06:16:53.000000','2026-06-12 15:29:14.517382','gv2026_02@open.edu.vn','$2a$10$EfXE18aNQqA5DL77WnSx.O9Bb/lLJuuAHO4yjIoAbyKh8ADnGiVqG','GV2026_02',1,0),('GV_03','2026-06-10 06:16:53.000000','2026-06-13 09:15:00.750366','gv2026_03@open.edu.vn','$2a$10$uf.T7y9zNh.O11UjlO1OPeQfFHDFLuVNVkTsCC9wxUlLuJkGLJbZa','GV2026_03',1,1),('GV_04','2026-06-10 06:16:53.000000','2026-06-13 09:15:00.940580','gv2026_04@open.edu.vn','$2a$10$923urHlVc1HkR2vXNVM.CuGQBeOPRU2P9UgUyI2H6EaX7cQswl0lq','GV2026_04',1,1),('GV_05','2026-06-10 06:16:53.000000','2026-06-13 09:15:01.163226','gv2026_05@open.edu.vn','$2a$10$IT4p4ZDSTy2fU3aWXIPxsOlwzwhNbFO9Q6E.8mZUxaPA0ApbCwWW6','GV2026_05',1,1),('GV_06','2026-06-11 04:40:47.859467','2026-06-13 09:15:01.302668','gv2026_06@open.edu.vn','$2a$10$.W0CQUN3INAVEpPgjFice.4uUZfNQvdgcTzD/YcdjQ98Pg6PivCdO','GV2026_06',1,1),('GV_07','2026-06-12 06:45:54.681386','2026-06-13 09:15:01.441972','gv2026_07@open.edu.vn','$2a$10$XVQzgc65y6LZo4tPsEsFt.RBqKj8usTTIGLFt6FdkLpjUm0QbuOtS','GV2026_07',1,1),('HS_01','2026-06-10 06:16:53.000000','2026-06-10 09:05:31.412679','b21cnpm001@open.edu.vn','$2a$10$7bkFYKJvL.OMBgeUGMw/r.GhddEa1HWNIRsLrVnoF2VE22.oYfDSC','B21CNPM001',1,0),('HS_02','2026-06-10 06:16:53.000000','2026-06-12 06:15:11.864242','b21cnpm002@open.edu.vn','$2a$10$S5ZYaifgj0DWv/MolkG9sOYrnWC4b1vyUuyI10BC9KB5zAQM06WLq','B21CNPM002',1,0),('HS_03','2026-06-10 06:16:53.000000','2026-06-13 09:15:01.637342','b21cnpm003@open.edu.vn','$2a$10$6brqXQs4wwhjIFMjpJZZQuRw.6HQD8yD2Wb9gHBdDUD/zNB/3DReK','B21CNPM003',1,1),('HS_04','2026-06-10 06:16:53.000000','2026-06-13 09:15:01.796120','b21cnpm004@open.edu.vn','$2a$10$giqC5N8wQvA.nYGeemlPGOLo39fTKe5JS/3fOVetfz73g3Sqi0Vrm','B21CNPM004',1,1),('HS_05','2026-06-10 06:16:53.000000','2026-06-13 09:15:01.957003','b21cnpm005@open.edu.vn','$2a$10$z3ArG.qe3sUWVMukoKN3deBKRH.qPnj3oPwNWB4NQX8s0RiMiBlWq','B21CNPM005',1,1),('HS_06','2026-06-10 06:16:53.000000','2026-06-13 09:15:02.149405','b21cnpm006@open.edu.vn','$2a$10$ENbSjS/vY8s4BvAfJZKeguFs5/lhieKwKF7sKRV1wiPQKBgx9eA7e','B21CNPM006',1,1),('HS_07','2026-06-10 06:16:53.000000','2026-06-13 09:15:02.317002','b21cnpm007@open.edu.vn','$2a$10$NtiSvhrehR4gm46GaX9I/ODemK/GEST0GLkydDhLS2Xz70WVM3G0e','B21CNPM007',1,1),('HS_08','2026-06-10 06:16:53.000000','2026-06-13 09:15:02.481610','b21cnpm008@open.edu.vn','$2a$10$AYzgjScK4VGPU1RVdHKsMOpk0HMZHGMiLK4/sG8Z/Du.tOpJm1KBS','B21CNPM008',1,1),('HS_09','2026-06-10 06:16:53.000000','2026-06-13 09:15:02.635892','b21cnpm009@open.edu.vn','$2a$10$wDVm91lxkrFki5D/B8B/TuRV6HxshbRBDTiZ6WrYJLED/2Hy7nc6K','B21CNPM009',1,1),('HS_10','2026-06-10 06:16:53.000000','2026-06-13 09:15:02.753372','b21cnpm010@open.edu.vn','$2a$10$05qB652AtC7eX1UkYDpueupnqJVwz4vCrDHDQRRM5pabqh4oBnBRe','B21CNPM010',1,1),('HS_11','2026-06-10 06:16:53.000000','2026-06-13 09:15:02.927265','b21cnpm011@open.edu.vn','$2a$10$88lBw9WlQkkMqnM1Emhd4.rRIIRbzCBj4rdqbwqiIuZ8qwkGIaTQi','B21CNPM011',1,1),('HS_12','2026-06-10 06:16:53.000000','2026-06-13 09:15:03.094973','b21cnpm012@open.edu.vn','$2a$10$JPFV7HyBmVJpWgxXwCHZ4ug3CgmQyX8y6LMfmH2YSNkB6.cfsYjAu','B21CNPM012',1,1),('HS_13','2026-06-10 06:16:53.000000','2026-06-13 09:15:03.267442','b21cnpm013@open.edu.vn','$2a$10$xzvCqwRvvsGIhXn8kpye2eOxVgMUZ3iX50nOrQWhrIe4ul1KLi2Wi','B21CNPM013',1,1),('HS_14','2026-06-10 06:16:53.000000','2026-06-13 09:15:03.429563','b21cnpm014@open.edu.vn','$2a$10$iMXc9w9zc7/JvF49Ji7ZGeFMOdhtM4OJ/OSLEC3UNFhd8ZUrjxKpi','B21CNPM014',1,1),('HS_15','2026-06-10 06:16:53.000000','2026-06-13 09:15:03.609410','b21cnpm015@open.edu.vn','$2a$10$.fl9NcTK/yXE.cXcGDUK3uKyKnuP.CRrOpeWbVRRMbLj3H4vf8qxq','B21CNPM015',1,1),('HS_16','2026-06-10 06:16:53.000000','2026-06-13 09:15:03.772741','b21cnpm016@open.edu.vn','$2a$10$/8NxbYU.z/LgwOJpY0To8Oi7Kw/prihjcMu6f0hS3cWbxvJ3r7oey','B21CNPM016',1,1),('HS_17','2026-06-10 06:16:53.000000','2026-06-13 09:15:03.915213','b21cnpm017@open.edu.vn','$2a$10$GxPoMKierREHGbYmV4jawuaPFrznpqjEHnEe..9d.7oX6XU3mL3FG','B21CNPM017',1,1),('HS_18','2026-06-10 06:16:53.000000','2026-06-13 09:15:04.044198','b21cnpm018@open.edu.vn','$2a$10$/JDqlkXDtT5kQYIu7fEDbeDCFY7t3govEEaaApLUEB10jssx0tXe.','B21CNPM018',1,1),('HS_19','2026-06-10 06:16:53.000000','2026-06-13 09:15:04.175061','b21cnpm019@open.edu.vn','$2a$10$n3S/dvfEKRdBxLP2PQ10VeG5A/PF1fYuptiQz62kXxKea7.agItA2','B21CNPM019',1,1),('HS_20','2026-06-10 06:16:53.000000','2026-06-13 09:15:04.315127','b22khmt001@open.edu.vn','$2a$10$PnRrT74iqv7.NAMTTTG9XuBAz03mdF8of9kkJ6HPJxbGw9wnMTL42','B22KHMT001',1,1),('HS_21','2026-06-10 06:16:53.000000','2026-06-13 09:15:04.430996','b22khmt002@open.edu.vn','$2a$10$2A5cl17wbH6UNkr4W8qWsOZD9wtMOm47hlcwiaEogYrRI4vJztr92','B22KHMT002',1,1),('HS_22','2026-06-10 06:16:53.000000','2026-06-13 09:15:04.568603','b22khmt003@open.edu.vn','$2a$10$Kr1BTXRAIMRWZutrhR8xeuYvFh5B0Y.OXO6GD3jkpbLX/w1JvnH1O','B22KHMT003',1,1),('HS_23','2026-06-10 06:16:53.000000','2026-06-13 09:15:04.728452','b22khmt004@open.edu.vn','$2a$10$IaSh.NLW56WkY0LVBi3rHuU.KrrISlCjB9y8hltAklIx3bki5W5kG','B22KHMT004',1,1),('HS_24','2026-06-10 06:16:53.000000','2026-06-13 09:15:04.879575','b22khmt005@open.edu.vn','$2a$10$qJGnJinInMl7mvwUQ6k.eOVmJwq62Fg2y2ItQ8a5JyYJWL.PAMs4y','B22KHMT005',1,1),('HS_25','2026-06-10 06:16:53.000000','2026-06-13 09:15:05.021423','b22khmt006@open.edu.vn','$2a$10$zZkTH512DJ9.c6Yjxg.MQu2dQoCcPZ7LdOFaeB5eYCoZ84BNyKn.y','B22KHMT006',1,1),('HS_26','2026-06-10 06:16:53.000000','2026-06-13 09:15:05.148483','b22khmt007@open.edu.vn','$2a$10$wUg2/RorjIlm6mjU4dO3pezwTxbvnxKmqsJ46.TifiNQ1eDufEW8G','B22KHMT007',1,1),('HS_27','2026-06-10 06:16:53.000000','2026-06-13 09:15:05.314835','b22khmt008@open.edu.vn','$2a$10$gWd7414NN6U/B2oedmCKbeanUzZtSbqp.YDUsZ2berEHVrZJfBOGC','B22KHMT008',1,1),('HS_28','2026-06-10 06:16:53.000000','2026-06-13 09:15:05.482607','b22khmt009@open.edu.vn','$2a$10$feRdVkxx7tFl4J7vRw4BAuf/3LkZO3bAkearrwU0HIPF8xMJTfsXq','B22KHMT009',1,1),('HS_29','2026-06-10 06:16:53.000000','2026-06-13 09:15:05.655120','b22khmt010@open.edu.vn','$2a$10$mgCMEIjAZcwd6X5haB.kMOAsG3zjX3xB.xUoUkc.sun5HqOAyt7ee','B22KHMT010',1,1),('HS_30','2026-06-10 06:16:53.000000','2026-06-13 09:15:05.808027','b22khmt011@open.edu.vn','$2a$10$KsbCY5gLlyu4K7luBd6xS.rdqH0dCqvn7hkz3wnjoD/Jg3UWdAH8u','B22KHMT011',1,1),('HS_31','2026-06-10 06:16:53.000000','2026-06-13 09:15:05.958013','b22khmt012@open.edu.vn','$2a$10$Aaq2W4T/r39bbUaGnOELOulrjg/ux/0Nrd7XkCz2iq/HkNlDOkbU6','B22KHMT012',1,1),('HS_32','2026-06-10 06:16:53.000000','2026-06-13 09:15:06.131889','b22khmt013@open.edu.vn','$2a$10$xY4d.uN4PIR6wRbY2qLgBeBBRhBeFB5mOS9gI5gZ26mNAazA70VM.','B22KHMT013',1,1),('HS_33','2026-06-10 06:16:53.000000','2026-06-13 09:15:06.300069','b22khmt014@open.edu.vn','$2a$10$lMEpJbds4qB8piyw6WIfne5HzvZ5RA.gQU7CtfA31fo/9Xg/505IG','B22KHMT014',1,1),('HS_34','2026-06-10 06:16:53.000000','2026-06-13 09:15:06.433841','b21dtvt001@open.edu.vn','$2a$10$wThyJyowXnS0fvLmTG8mCe.3YIg5vtFE8Ko.3MxnqqzsF86l3iuM.','B21DTVT001',1,1),('HS_35','2026-06-10 06:16:53.000000','2026-06-13 09:15:06.639111','b21dtvt002@open.edu.vn','$2a$10$JFnSJDpT4JXbyzT926m8weQ53w4FFDDzQdSiv5t7tENZw5JjVJZU6','B21DTVT002',1,1),('HS_36','2026-06-10 06:16:53.000000','2026-06-13 09:15:06.778114','b21dtvt003@open.edu.vn','$2a$10$.hlIgT2fYcnUDuIz1hr/4OP17xxVdfcBksdi0JCYq.CtCGQiQWAxC','B21DTVT003',1,1),('HS_37','2026-06-10 06:16:53.000000','2026-06-13 09:15:06.907239','b21dtvt004@open.edu.vn','$2a$10$AMwgrBNZDz6rR9jrTDrxc.XSM4VefbYJYP3UEYRGfY/pao0IGpYcm','B21DTVT004',1,1),('HS_38','2026-06-10 06:16:53.000000','2026-06-13 09:15:07.082681','b21dtvt005@open.edu.vn','$2a$10$mwCyLAkatf706lybdpFBVevrjFHcu3VXzNkPD62R5jblSjh/Hlbem','B21DTVT005',1,1),('HS_39','2026-06-10 06:16:53.000000','2026-06-13 09:15:07.253704','b21dtvt006@open.edu.vn','$2a$10$TnoIeScKHtLjpGUrf5BEDOXBnlq46/oXk4hmbX81CUh/INGU9qvB6','B21DTVT006',1,1),('HS_40','2026-06-10 06:16:53.000000','2026-06-13 09:15:07.436651','b21dtvt007@open.edu.vn','$2a$10$mPWuqXwHMeizXX7WU9cAs.PeTMITmsQs02vjZPaHUGcrhEDoikNS2','B21DTVT007',1,1),('HS_41','2026-06-10 06:16:53.000000','2026-06-13 09:15:07.585029','b21dtvt008@open.edu.vn','$2a$10$09/2kGtRlsxEJqJmcbMgousMiQglA8cCA8T/qgHLD7bkRd7noUV.W','B21DTVT008',1,1),('HS_42','2026-06-10 06:16:53.000000','2026-06-13 09:15:07.704282','b21dtvt009@open.edu.vn','$2a$10$0lpiyalSlM2bmp3T6hD4QuIec2T3rvbwIg6OiyDrLkWxFY5BhHyLq','B21DTVT009',1,1),('HS_43','2026-06-10 06:16:53.000000','2026-06-13 09:15:07.852268','b21dtvt010@open.edu.vn','$2a$10$vVqWdv5CDYyH9hu.MXVhAeRudy1d6.tWHmFv5DYrx.qSDsRgDSq7m','B21DTVT010',1,1),('HS_44','2026-06-10 06:16:53.000000','2026-06-13 09:15:07.997523','b21dtvt011@open.edu.vn','$2a$10$w0r5bxDVF6Xz6JWiEGUzt.6ce8Oc3hEQZo3TNM3X/BxBNXZ7qUr2O','B21DTVT011',1,1),('HS_45','2026-06-10 06:16:53.000000','2026-06-13 09:15:08.131255','b21dtvt012@open.edu.vn','$2a$10$S5ZlfZV1F8SKJld59s1n6uiAgO5LnKoxTwiy3lyWI7TsEzBabBmby','B21DTVT012',1,1),('HS_46','2026-06-10 06:16:53.000000','2026-06-13 09:15:08.256505','b21dtvt013@open.edu.vn','$2a$10$9k0i3/RdO5Q7npvx.Ih.SuqWHf8U.BIquSAatURSa.FhTr6ZgHxkq','B21DTVT013',1,1),('HS_47','2026-06-10 06:16:53.000000','2026-06-13 09:15:08.420633','b21dtvt014@open.edu.vn','$2a$10$sigCgHa8hH2sVE2akLF93u3Y9hMcxSQJmjdN.xQW2TeUfw4wdJ5Zi','B21DTVT014',1,1),('HS_48','2026-06-10 06:16:53.000000','2026-06-13 09:15:08.605358','b22attt001@open.edu.vn','$2a$10$Gd77GAKosZBZApd9WCihyeBw6sBmXdAjytbOZyH9pA0ttsWKcj1ja','B22ATTT001',1,1),('HS_49','2026-06-10 06:16:53.000000','2026-06-13 09:15:08.785417','b22attt002@open.edu.vn','$2a$10$k0gUISafSFpdAaqald8AVe3btMf5koel/g2vWyTx4jCV4PeWRWzau','B22ATTT002',1,1),('HS_50','2026-06-10 06:16:53.000000','2026-06-13 09:15:08.944032','b22attt003@open.edu.vn','$2a$10$u6Lpey4Xa3kuEw45djejs.yy07PdYDRIDiuAPUgUxQC8HEFssTb8S','B22ATTT003',1,1),('HS_51','2026-06-10 06:16:53.000000','2026-06-13 09:15:09.112444','b22attt004@open.edu.vn','$2a$10$yM/WFXKBInJm3TYYvm.q0uu4l5R7ZOB7SW57HWN56SySYFrNv7x/O','B22ATTT004',1,1),('HS_52','2026-06-10 06:16:53.000000','2026-06-13 09:15:09.261820','b22attt005@open.edu.vn','$2a$10$wIL1vQMJnMIVAtCtalKlquAck3C3bt.amzuwkR98m5aEPBxVtLAba','B22ATTT005',1,1),('HS_53','2026-06-10 06:16:53.000000','2026-06-13 09:15:09.414769','b22attt006@open.edu.vn','$2a$10$nCybPx6TfQkE89vCn8TRM.jgUgamx634LMXXKmHhx6hoBONr5wr46','B22ATTT006',1,1),('HS_54','2026-06-10 06:16:53.000000','2026-06-13 09:15:09.574438','b22attt007@open.edu.vn','$2a$10$CATd2KenMGhRjbeZyBDMf.zwoG2.h3C4rGqz6iS3OWnBM8JKt28fe','B22ATTT007',1,1),('HS_55','2026-06-10 06:16:53.000000','2026-06-13 09:15:09.719783','b22attt008@open.edu.vn','$2a$10$vdFOy.bLh4vh6BXd/DoHJeJ/KPgE6qWihXBFY.mJYo0BX188fW.9i','B22ATTT008',1,1),('HS_56','2026-06-10 06:16:53.000000','2026-06-13 09:15:09.864000','b22attt009@open.edu.vn','$2a$10$a.qfEnup.Q741ZtkqJxW.Oh2FgImmU5ny9PJ9yCVEZK9VOCLbDv8q','B22ATTT009',1,1),('HS_57','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.001756','b22attt010@open.edu.vn','$2a$10$O6nO4/OmaxKjOf45VJjbj.XXTd7WLAXhBh3bQgMGGatsP8/DHopA6','B22ATTT010',1,1),('HS_58','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.154813','b22attt011@open.edu.vn','$2a$10$D7ZE/KpIFlLFOEwUNc9aQu3mQvanl.9CK3mLx1wQKB5L197rHFKvG','B22ATTT011',1,1),('HS_59','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.270337','b22attt012@open.edu.vn','$2a$10$5dUZo4B8qeec8kcxbl4FPOmMjwldKi/J5AH64TPMewYKHYfuNr/MG','B22ATTT012',1,1),('HS_60','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.394954','b22attt013@open.edu.vn','$2a$10$YNNgWS8RO/AeXglUi2UlUOH2CEA5YhxvzkCKgHZoCBH0gi2P1H3vK','B22ATTT013',1,1),('HS_61','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.572736','b22attt014@open.edu.vn','$2a$10$JN/Sq2Eh/0NplQUmUBlATewvuK5hGM1jdFe7UN6byI.JEsUtmevZS','B22ATTT014',1,1),('HS_62','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.702299','b21httt001@open.edu.vn','$2a$10$VrusalUJV5O.VOQG9APmiO7Rbk.Y3DJF1ZLWJvV8OFEGrI3dEQMVS','B21HTTT001',1,1),('HS_63','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.824581','b21httt002@open.edu.vn','$2a$10$kZpSmLGJND0MdagkFUz8ye4vTGCWzCgFc6D6LlHymToPo5iXMWIe.','B21HTTT002',1,1),('HS_64','2026-06-10 06:16:53.000000','2026-06-13 09:15:10.985021','b21httt003@open.edu.vn','$2a$10$vLaYYwcxVehMKq.WXfpHUeeXV9YXCZzal4s5iWDNym3Tvm9AiTq5.','B21HTTT003',1,1),('HS_65','2026-06-10 06:16:53.000000','2026-06-13 09:15:11.139666','b21httt004@open.edu.vn','$2a$10$H.C7HyH03R8Kq0rSglgXYu/HbrqhMyWgHXPYrbt4unrx4w5AvP.ha','B21HTTT004',1,1),('HS_66','2026-06-10 06:16:53.000000','2026-06-13 09:15:11.259412','b21httt005@open.edu.vn','$2a$10$GjpBbkvjiSEETotBvkW/GOqYM4c8jY.GCOweHCijdxOU5kOahVqGu','B21HTTT005',1,1),('HS_67','2026-06-10 06:16:53.000000','2026-06-13 09:15:11.404138','b21httt006@open.edu.vn','$2a$10$tZfthBDUE8OnNlPP9pca7eSmyYNgtsf4BpjhUEpOhoYzQmL4yr276','B21HTTT006',1,1),('HS_68','2026-06-10 06:16:53.000000','2026-06-13 09:15:11.536019','b21httt007@open.edu.vn','$2a$10$UwHNLLlCDWHNL7mwf7TBSuO8pvAfMAZezihuipkvcrrc.jCvfm73G','B21HTTT007',1,1),('HS_69','2026-06-10 06:16:53.000000','2026-06-13 09:15:11.684683','b21httt008@open.edu.vn','$2a$10$15Yk9h6qCkUa7tOgATJPP.RJcfqT/ZAk08wZkVaEuhp43ZHATlCgq','B21HTTT008',1,1),('HS_70','2026-06-10 06:16:53.000000','2026-06-13 09:15:11.837649','b21httt009@open.edu.vn','$2a$10$sMXTw7PAZGFo5yyc2K77qefh4DRKMKdfxY71gnQXWZAkuEsUEnVA.','B21HTTT009',1,1),('HS_71','2026-06-10 06:16:53.000000','2026-06-13 09:15:11.986818','b21httt010@open.edu.vn','$2a$10$W1aWRJjHPb0xYADOSFwQEuYsDKKlIOu7pCZSMo8XPgIf4GTiutWU.','B21HTTT010',1,1),('HS_72','2026-06-10 06:16:53.000000','2026-06-13 09:15:12.141209','b21httt011@open.edu.vn','$2a$10$UmB13BG/KXeC1oxoHtqNAuWamksrcITjPg0.U0ZszOzufppPovpU2','B21HTTT011',1,1),('HS_73','2026-06-10 06:16:53.000000','2026-06-13 09:15:12.292936','b21httt012@open.edu.vn','$2a$10$3snEmLeka4lY3u1LJMYLMePAsBHufKQRjqzQWprlJfDiCn2ohEr1.','B21HTTT012',1,1),('HS_74','2026-06-10 06:16:53.000000','2026-06-13 09:15:12.435735','b21httt013@open.edu.vn','$2a$10$YvFwir.xpJB2oK3VB/AC1.CO.sMQaIl4MVHUlwytqckvzZg1wkjR6','B21HTTT013',1,1),('HS_75','2026-06-10 06:16:53.000000','2026-06-13 09:15:12.587465','b21httt014@open.edu.vn','$2a$10$UCTPFaddtDhTnq0ovC/1AOMHsyY5ZSynX5X3tXmA0GpDpKmPwCRS2','B21HTTT014',1,1),('HS_76','2026-06-11 04:44:23.690569','2026-06-13 09:15:12.719827','b21cnpm020@open.edu.vn','$2a$10$.5Q/OomHfC/RAxr6DGkAPeUXl5B26y7AKedpqx9RWeQTKJ413YaVy','B21CNPM020',0,1);
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

-- Dump completed on 2026-06-13 16:21:01

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
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_course_classes_code` (`code`),
  KEY `FK_course_classes_subject` (`subject_id`),
  KEY `FK_course_classes_teacher` (`teacher_id`),
  CONSTRAINT `FK_course_classes_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  CONSTRAINT `FK_course_classes_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_classes`
--

LOCK TABLES `course_classes` WRITE;
/*!40000 ALTER TABLE `course_classes` DISABLE KEYS */;
INSERT INTO `course_classes` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','CPP_CLASS_01','HK1-2026',1,'GV_01'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DSA_CLASS_01','HK1-2026',2,'GV_02'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','JAVA_CLASS_01','HK1-2026',3,'GV_03'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','NET_CLASS_01','HK1-2026',4,'GV_04'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','OS_CLASS_01','HK1-2026',5,'GV_05');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','CNTT','Công nghệ thông tin'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','KHMT','Khoa học máy tính'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DTVT','Điện tử viễn thông'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','ATTT','An toàn thông tin'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HTTT','Hệ thống thông tin');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_grades_student_course_class` (`student_id`,`course_class_id`),
  UNIQUE KEY `UKko1u7sub9pfixo5kagdclh8sj` (`student_id`,`course_class_id`),
  KEY `FK_grades_course_class` (`course_class_id`),
  CONSTRAINT `FK_grades_course_class` FOREIGN KEY (`course_class_id`) REFERENCES `course_classes` (`id`),
  CONSTRAINT `FK_grades_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=234 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_01',1,9,8.5,9,8.85,'A',4),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_02',2,8,8,8.5,8.3,'B+',3.5),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_03',3,10,9,9.5,9.4,'A',4),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_04',4,7.5,7,8,7.65,'B',3),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','HS_05',5,6,6.5,7,6.75,'C+',2.5);
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
INSERT INTO `students` VALUES ('HS_01','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM001','Anh','Nguyễn Đình','2003-04-05','Nam','0987654321',1,1),('HS_02','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM002','Đăng','Trần Minh','2004-05-23','Nam','0987654322',1,2),('HS_03','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM003','Hải','Nguyễn Hoàng','2004-10-15','Nam','0987654323',1,3),('HS_04','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM004','Linh','Phạm Khánh','2004-05-20','Nữ','0987654324',1,4),('HS_05','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM005','Tùng','Vũ Sơn','2004-12-01','Nam','0987654325',1,5),('HS_06','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM006','Bình','Nguyễn Văn','2003-01-12','Nam','0981000006',1,1),('HS_07','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM007','Cường','Trần Mạnh','2003-02-14','Nam','0981000007',1,1),('HS_08','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM008','Dũng','Lê Hoàng','2003-03-16','Nam','0981000008',1,1),('HS_09','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM009','Đạt','Phạm Tiến','2003-04-18','Nam','0981000009',1,1),('HS_10','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM010','Giang','Vũ Trường','2003-05-20','Nam','0981000010',1,1),('HS_11','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM011','Hùng','Hoàng Minh','2003-06-22','Nam','0981000011',1,1),('HS_12','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM012','Huy','Phan Quốc','2003-07-24','Nam','0981000012',1,1),('HS_13','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM013','Khanh','Đỗ Duy','2003-08-26','Nam','0981000013',1,1),('HS_14','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM014','Linh','Đặng Nhật','2003-09-28','Nữ','0981000014',1,1),('HS_15','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM015','Minh','Bùi Quang','2003-10-30','Nam','0981000015',1,1),('HS_16','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM016','Nam','Nguyễn Hoài','2003-11-01','Nam','0981000016',1,1),('HS_17','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM017','Phong','Trần Thanh','2003-12-03','Nam','0981000017',1,1),('HS_18','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM018','Quân','Lê Anh','2003-05-05','Nam','0981000018',1,1),('HS_19','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21CNPM019','Sơn','Phạm Ngọc','2003-06-07','Nam','0981000019',1,1),('HS_20','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT001','Tâm','Vũ Đức','2004-01-10','Nam','0982000001',1,2),('HS_21','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT002','Tuấn','Hoàng Minh','2004-02-12','Nam','0982000002',1,2),('HS_22','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT003','Thành','Phan Công','2004-03-14','Nam','0982000003',1,2),('HS_23','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT004','Việt','Đỗ Quốc','2004-04-16','Nam','0982000004',1,2),('HS_24','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT005','Vy','Đặng Thu','2004-05-18','Nữ','0982000005',1,2),('HS_25','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT006','Yến','Bùi Hải','2004-06-20','Nữ','0982000006',1,2),('HS_26','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT007','Ngọc','Nguyễn Bích','2004-07-22','Nữ','0982000007',1,2),('HS_27','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT008','Long','Trần Bảo','2004-08-24','Nam','0982000008',1,2),('HS_28','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT009','Quang','Lê Minh','2004-09-26','Nam','0982000009',1,2),('HS_29','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT010','Tiến','Phạm Hồng','2004-10-28','Nam','0982000010',1,2),('HS_30','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT011','Trung','Vũ Đình','2004-11-30','Nam','0982000011',1,2),('HS_31','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT012','Tú','Hoàng Anh','2004-12-15','Nam','0982000012',1,2),('HS_32','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT013','Phước','Phan Gia','2004-08-11','Nam','0982000013',1,2),('HS_33','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22KHMT014','Hoàng','Đỗ Huy','2004-09-19','Nam','0982000014',1,2),('HS_34','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT001','An','Nguyễn Thành','2003-02-22','Nam','0983000001',1,3),('HS_35','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT002','Bách','Trần Xuân','2003-03-24','Nam','0983000002',1,3),('HS_36','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT003','Chi','Lê Linh','2003-04-26','Nữ','0983000003',1,3),('HS_37','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT004','Duy','Phạm Đức','2003-05-28','Nam','0983000004',1,3),('HS_38','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT005','Đông','Vũ Phương','2003-06-30','Nam','0983000005',1,3),('HS_39','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT006','Hà','Hoàng Thu','2003-07-12','Nữ','0983000006',1,3),('HS_40','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT007','Hiếu','Phan Trọng','2003-08-14','Nam','0983000007',1,3),('HS_41','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT008','Hoa','Đỗ Thị','2003-09-16','Nữ','0983000008',1,3),('HS_42','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT009','Hạnh','Đặng Thúy','2003-10-18','Nữ','0983000009',1,3),('HS_43','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT010','Khôi','Bùi Nguyên','2003-11-20','Nam','0983000010',1,3),('HS_44','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT011','Khoa','Nguyễn Đăng','2003-12-22','Nam','0983000011',1,3),('HS_45','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT012','Khánh','Trần Nhật','2003-01-25','Nam','0983000012',1,3),('HS_46','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT013','Kiên','Lê Trung','2003-02-27','Nam','0983000013',1,3),('HS_47','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21DTVT014','Lâm','Phạm Tùng','2003-03-29','Nam','0983000014',1,3),('HS_48','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT001','Mai','Vũ Tuyết','2004-03-11','Nữ','0984000001',1,4),('HS_49','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT002','Nghĩa','Hoàng Trọng','2004-04-13','Nam','0984000002',1,4),('HS_50','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT003','Nguyên','Phan Thảo','2004-05-15','Nữ','0984000003',1,4),('HS_51','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT004','Nhân','Đỗ Thành','2004-06-17','Nam','0984000004',1,4),('HS_52','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT005','Nhi','Đặng Thục','2004-07-19','Nữ','0984000005',1,4),('HS_53','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT006','Phát','Bùi Tấn','2004-08-21','Nam','0984000006',1,4),('HS_54','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT007','Phúc','Nguyễn Hồng','2004-09-23','Nam','0984000007',1,4),('HS_55','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT008','Phương','Trần Mai','2004-10-25','Nữ','0984000008',1,4),('HS_56','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT009','Phượng','Lê Thị','2004-11-27','Nữ','0984000009',1,4),('HS_57','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT010','Quốc','Phạm Anh','2004-12-29','Nam','0984000010',1,4),('HS_58','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT011','Quỳnh','Vũ Thúy','2004-01-05','Nữ','0984000011',1,4),('HS_59','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT012','Sang','Hoàng Tấn','2004-02-07','Nam','0984000012',1,4),('HS_60','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT013','Thảo','Phan Thu','2004-03-09','Nữ','0984000013',1,4),('HS_61','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B22ATTT014','Thắng','Đỗ Đức','2004-04-11','Nam','0984000014',1,4),('HS_62','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT001','Thịnh','Đặng Hùng','2003-04-15','Nam','0985000001',1,5),('HS_63','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT002','Thư','Bùi Minh','2003-05-17','Nữ','0985000002',1,5),('HS_64','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT003','Thương','Nguyễn Hoài','2003-06-19','Nữ','0985000003',1,5),('HS_65','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT004','Trâm','Trần Ngọc','2003-07-21','Nữ','0985000004',1,5),('HS_66','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT005','Trí','Lê Minh','2003-08-23','Nam','0985000005',1,5),('HS_67','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT006','Trọng','Phạm Đức','2003-09-25','Nam','0985000006',1,5),('HS_68','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT007','Trực','Vũ Duy','2003-10-27','Nam','0985000007',1,5),('HS_69','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT008','Trường','Hoàng Xuân','2003-11-29','Nam','0985000008',1,5),('HS_70','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT009','Tường','Phan Cát','2003-12-31','Nam','0985000009',1,5),('HS_71','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT010','Vinh','Đỗ Quang','2003-01-05','Nam','0985000010',1,5),('HS_72','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT011','Vượng','Đặng Công','2003-02-07','Nam','0985000011',1,5),('HS_73','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT012','Xuyên','Bùi Hà','2003-03-09','Nữ','0985000012',1,5),('HS_74','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT013','Huy','Nguyễn Gia','2003-04-11','Nam','0985000013',1,5),('HS_75','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','B21HTTT014','Long','Trần Thượng','2003-05-13','Nam','0985000014',1,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','C_PLUS_BASE',3,'Lập trình C++ cơ bản'),(2,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','DSA_STRUCTURE',4,'Cấu trúc dữ liệu & Giải thuật'),(3,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','JAVA_WEB_DEV',3,'Lập trình Web nâng cao với Java'),(4,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','NET_COMPUTER',3,'Cơ sở mạng máy tính'),(5,'2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','OS_OPERATION',3,'Hệ điều hành máy tính');
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
INSERT INTO `teachers` VALUES ('GV_01','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_01','Tuấn','Trần Quốc','1985-04-12','Nam','0912111222',1,1),('GV_02','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_02','Minh','Nguyễn Thị','1988-08-24','Nữ','0912333444',1,2),('GV_03','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_03','Nam','Lê Hoàng','1982-11-05','Nam','0912555666',1,3),('GV_04','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_04','Hải','Phạm Văn','1979-02-18','Nam','0912777888',1,4),('GV_05','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','GV2026_05','Linh','Vũ Khánh','1991-06-30','Nữ','0912999000',1,5);
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
INSERT INTO `user_roles` VALUES ('AD',1),('HS_01',2),('HS_02',2),('HS_03',2),('HS_04',2),('HS_05',2),('HS_06',2),('HS_07',2),('HS_08',2),('HS_09',2),('HS_10',2),('HS_11',2),('HS_12',2),('HS_13',2),('HS_14',2),('HS_15',2),('HS_16',2),('HS_17',2),('HS_18',2),('HS_19',2),('HS_20',2),('HS_21',2),('HS_22',2),('HS_23',2),('HS_24',2),('HS_25',2),('HS_26',2),('HS_27',2),('HS_28',2),('HS_29',2),('HS_30',2),('HS_31',2),('HS_32',2),('HS_33',2),('HS_34',2),('HS_35',2),('HS_36',2),('HS_37',2),('HS_38',2),('HS_39',2),('HS_40',2),('HS_41',2),('HS_42',2),('HS_43',2),('HS_44',2),('HS_45',2),('HS_46',2),('HS_47',2),('HS_48',2),('HS_49',2),('HS_50',2),('HS_51',2),('HS_52',2),('HS_53',2),('HS_54',2),('HS_55',2),('HS_56',2),('HS_57',2),('HS_58',2),('HS_59',2),('HS_60',2),('HS_61',2),('HS_62',2),('HS_63',2),('HS_64',2),('HS_65',2),('HS_66',2),('HS_67',2),('HS_68',2),('HS_69',2),('HS_70',2),('HS_71',2),('HS_72',2),('HS_73',2),('HS_74',2),('HS_75',2),('GV_01',3),('GV_02',3),('GV_03',3),('GV_04',3),('GV_05',3);
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
INSERT INTO `users` VALUES ('AD','2026-06-10 06:16:53.000000','2026-06-10 06:16:53.000000','admin@open.edu.vn','$2a$10$Nuln0JaFYxBJ92H8tcenfOS7il02iWjIQHp4BoNV.lsHJwiTAHqtu','admin',1,0),('GV_01','2026-06-10 06:16:53.000000','2026-06-10 09:03:59.718134','gv2026_01@open.edu.vn','$2a$10$.RGawvRE0Wxz0a.tXXPESOV9OJIVvuOrhBNjpXLzvbKPRo56czjLK','GV2026_01',1,0),('GV_02','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.356486','gv2026_02@open.edu.vn','$2a$10$xVRlLbPl.wnhQ0hXfENDN./uxbLfTwyOSX7.9ADaaHgQrIFh8f14i','GV2026_02',1,1),('GV_03','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.469802','gv2026_03@open.edu.vn','$2a$10$m1oc8MxjQXER0HiuqoY1reKDBRR73dr/k7p6vy/vUji.N2f8enXPC','GV2026_03',1,1),('GV_04','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.569917','gv2026_04@open.edu.vn','$2a$10$cMKoa2WK0FetlKLRidzWX.tfC0U.39iJ0FFtx4xIXFq985hzkV7wW','GV2026_04',1,1),('GV_05','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.665974','gv2026_05@open.edu.vn','$2a$10$F4jnw/VglMPV5keV3WTm0eDHcIBgaZ6pF35zlxMVQ02vXZsZrMEXS','GV2026_05',1,1),('HS_01','2026-06-10 06:16:53.000000','2026-06-10 09:05:31.412679','b21cnpm001@open.edu.vn','$2a$10$7bkFYKJvL.OMBgeUGMw/r.GhddEa1HWNIRsLrVnoF2VE22.oYfDSC','B21CNPM001',1,0),('HS_02','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.764012','b21cnpm002@open.edu.vn','$2a$10$9YPi4NVJPRcHQuPaaGJrZeiMDbb2MSKzgIOl56WwBgrT27zct3OZG','B21CNPM002',1,1),('HS_03','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.863545','b21cnpm003@open.edu.vn','$2a$10$on5UjQGlulZu44qMfo59TORT09PqEw/ZpN9qSzSnjn3PRbZ22qw/O','B21CNPM003',1,1),('HS_04','2026-06-10 06:16:53.000000','2026-06-10 10:39:23.960249','b21cnpm004@open.edu.vn','$2a$10$MugjdSVqlHUOQ2iIUcSkauNC9n7qSwb/HV6PBWpCnFKTaSu0oF37u','B21CNPM004',1,1),('HS_05','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.064485','b21cnpm005@open.edu.vn','$2a$10$Vg7UbDj/esMRqNeUFsm7yOadmGnL/AsyAjtSrlEziYiNG3EbmSFQa','B21CNPM005',1,1),('HS_06','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.160788','b21cnpm006@open.edu.vn','$2a$10$YEzWbW9GYwLRsioLcuBS0uUNDdTjqzU74E/qhSPEYGl32pz2ce8bC','B21CNPM006',1,1),('HS_07','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.271347','b21cnpm007@open.edu.vn','$2a$10$t4ta8IpYML38tgq3E1H9uOKuhapAPJuPSmv8MzMgL5vS.aN2XChOS','B21CNPM007',1,1),('HS_08','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.377376','b21cnpm008@open.edu.vn','$2a$10$FTFlq1mfI/qCAVMTdl70kuv85a9j7v2ReX4r8xuFYTuNEraYEp1Ey','B21CNPM008',1,1),('HS_09','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.479662','b21cnpm009@open.edu.vn','$2a$10$bsx70KVBHD8bH2lPPZ.UPOwg/bCcmUPFJrk7hFxyv.ChlSk5C8RKi','B21CNPM009',1,1),('HS_10','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.577040','b21cnpm010@open.edu.vn','$2a$10$nXtvYBuZZn.B2l2zHFtHne8gTs0j6w5jUEQWHzmMpUyUzFxXY.Q5a','B21CNPM010',1,1),('HS_11','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.673554','b21cnpm011@open.edu.vn','$2a$10$3XfvwdzFsviYrdfq2Y2FWOrsKXCVwselaoPHC09eNq126IdEwmE4O','B21CNPM011',1,1),('HS_12','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.773053','b21cnpm012@open.edu.vn','$2a$10$xKHpqd5.cns0YxYIHTT.CuHyjrJQiosEGMlEgiJeqCRkpPYYgGTgK','B21CNPM012',1,1),('HS_13','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.872714','b21cnpm013@open.edu.vn','$2a$10$pWUVa7LPRGVFYKG3fgyUv.Rd5VFb11.jrNfQEd6AXqdEE.EhCD.CG','B21CNPM013',1,1),('HS_14','2026-06-10 06:16:53.000000','2026-06-10 10:39:24.970166','b21cnpm014@open.edu.vn','$2a$10$V46G1EQ2SyLRh/ALvtVa7u2PILB2bNSiIASbjA2rqW6cJN7zXCUjy','B21CNPM014',1,1),('HS_15','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.069406','b21cnpm015@open.edu.vn','$2a$10$AUDuzCuSr/LvyzrDsXbH/ORjkQVlt4bJLdDa5feaWpghi3I8Sr3wC','B21CNPM015',1,1),('HS_16','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.165639','b21cnpm016@open.edu.vn','$2a$10$n6BJPyCDPAxAFkDJjASY9u5X5NPFiUhPwiJaPNuoVsRFSGwJIYJoa','B21CNPM016',1,1),('HS_17','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.263094','b21cnpm017@open.edu.vn','$2a$10$Al.mDKuM4zZINQuzMBJGquWnDXQDm0ESFahm75mU5IYODIUAoq5OO','B21CNPM017',1,1),('HS_18','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.362424','b21cnpm018@open.edu.vn','$2a$10$LSbiXDRpQ6DAYxtNuV1wdO0apnKeaEmbUDMVAwuapPX/GhvazKEZu','B21CNPM018',1,1),('HS_19','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.466864','b21cnpm019@open.edu.vn','$2a$10$uM7Ao4ts8cxpZIkn5lzZFe7UlJWmXXc3bdMlsuC2Wixbi4xNsV4Pm','B21CNPM019',1,1),('HS_20','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.568504','b22khmt001@open.edu.vn','$2a$10$LHMXLaq8Ibm.zz3njXl6nuqulAi7YVzd2yjq74To0mN9hI9JxbCx6','B22KHMT001',1,1),('HS_21','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.673930','b22khmt002@open.edu.vn','$2a$10$CD0xaw6l6/FSgZHJ0woMTeVjv3Db4RXP5PmHSck8kJwZrPOgelqte','B22KHMT002',1,1),('HS_22','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.782310','b22khmt003@open.edu.vn','$2a$10$.tEMweY46IlMpVWAKFCRbOPTFE/TJ7I7c28Ranm0tGqDIkFAffXlK','B22KHMT003',1,1),('HS_23','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.886469','b22khmt004@open.edu.vn','$2a$10$GeKmCyYkIGH1uCXxfKKqseUPo0HZNbMKUQSZUp7S9Ps1qtDu3mI/6','B22KHMT004',1,1),('HS_24','2026-06-10 06:16:53.000000','2026-06-10 10:39:25.992611','b22khmt005@open.edu.vn','$2a$10$iKbF9RzouVpms9LwzlaZsemr7Xdy8TssD1eIMhihLmx4BzdtWkpRi','B22KHMT005',1,1),('HS_25','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.091567','b22khmt006@open.edu.vn','$2a$10$mi0StUmvBzOQV/uulUuUNOT0qIE91rlWYiMB4tAiH8Uqj7abr0PIa','B22KHMT006',1,1),('HS_26','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.188505','b22khmt007@open.edu.vn','$2a$10$Qz3izIg8Hnjq/00r6nximOkRLgMZ2rnaEjEObIIjIR1LjcxkwRN4W','B22KHMT007',1,1),('HS_27','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.294118','b22khmt008@open.edu.vn','$2a$10$vmi/kjoAqS4Q7S/ehrEqteLoE26XG7xvr0hIVbIWvf9s9u5BEvVX2','B22KHMT008',1,1),('HS_28','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.399726','b22khmt009@open.edu.vn','$2a$10$az5c7ANg7QMuY4/Fg7IQMe15pqGZ5PxeDaCkhQEmoi/snAew.dybG','B22KHMT009',1,1),('HS_29','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.519372','b22khmt010@open.edu.vn','$2a$10$1LtCkPD.ZanhgXPLLeB..uvOU.opz1A0GpIWNgR.j5vHyONCZLCvC','B22KHMT010',1,1),('HS_30','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.627876','b22khmt011@open.edu.vn','$2a$10$f438q6r2Tg82j3pS5SeGTeHhIdyE7ZItvm2svKNhYmoIA8LZtiaBK','B22KHMT011',1,1),('HS_31','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.731051','b22khmt012@open.edu.vn','$2a$10$Og4syPafSgY2kE2vruTJEu2VfcD3lVqVrPYzSSUtigLOnpM3ZdQVy','B22KHMT012',1,1),('HS_32','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.830395','b22khmt013@open.edu.vn','$2a$10$MS2/DUOpIZDxH0dwVh2cX.fcsH9D/KVLBdmE0fY6gogGFUwZO/GoK','B22KHMT013',1,1),('HS_33','2026-06-10 06:16:53.000000','2026-06-10 10:39:26.934205','b22khmt014@open.edu.vn','$2a$10$N5LNoyI9QMExBujaSl4SreOkgrAt5vK26Jj1M3UHhqjzVo/LCmo8O','B22KHMT014',1,1),('HS_34','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.039301','b21dtvt001@open.edu.vn','$2a$10$HjPFwIST.PRzZRC6/cXJoOlpxQUY3wJCMIpUcCSZ/L77NgE9ybTUG','B21DTVT001',1,1),('HS_35','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.147823','b21dtvt002@open.edu.vn','$2a$10$ZFdJ1pex5xVyXLsEGS7AheK5TJZ4oEiXysHhJhTTJUPMZjSgjERq.','B21DTVT002',1,1),('HS_36','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.252309','b21dtvt003@open.edu.vn','$2a$10$c4yMex.OZO7BbXJvCNXfx.kRXPdl.fTVFy5EMNH.y7dKtRXlnbFey','B21DTVT003',1,1),('HS_37','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.352462','b21dtvt004@open.edu.vn','$2a$10$98J3Zo6cy3DU8NUHE10yPOU4WuQT5U4Vcyi7Crogy3ZYum5hik/cm','B21DTVT004',1,1),('HS_38','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.455277','b21dtvt005@open.edu.vn','$2a$10$uPJNy/JZTeIXzWodRPQJwOJV0oe4APLllldnuHxmjkdOfQSIQIn7.','B21DTVT005',1,1),('HS_39','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.552515','b21dtvt006@open.edu.vn','$2a$10$iaUjCY3OHBBPaKfRPPKNQO0EsU4yxrceit2c8wufKZcuCqL.xMy6a','B21DTVT006',1,1),('HS_40','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.661477','b21dtvt007@open.edu.vn','$2a$10$T3/ZkOsSfw6Tr1n.zBjjBOWUMaClDnjwTY5O0lV1.N90U9/LrG0nO','B21DTVT007',1,1),('HS_41','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.759405','b21dtvt008@open.edu.vn','$2a$10$2g4wsLmKcnOHVaHTfnES1uikLj3auDywcGzpOeS41SJ0ee1eAs2jq','B21DTVT008',1,1),('HS_42','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.857100','b21dtvt009@open.edu.vn','$2a$10$Aii0QRsAC8a0s6eQxZNCNezYoAcXwqdak3C5YQYowGbe94YaxpmQC','B21DTVT009',1,1),('HS_43','2026-06-10 06:16:53.000000','2026-06-10 10:39:27.960693','b21dtvt010@open.edu.vn','$2a$10$hwngUEV3A3RJ7tsaNoKGjek9NQqAsHv2FhOZm/XMKn3SxwVVzZKde','B21DTVT010',1,1),('HS_44','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.067755','b21dtvt011@open.edu.vn','$2a$10$/NsJowOSNpWsF8enIISHl.ogccdYIZcA8PYPq3KmQ2ziY5SOh5qem','B21DTVT011',1,1),('HS_45','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.172172','b21dtvt012@open.edu.vn','$2a$10$D2QsVIiuliEQBdLIP8GzwuoqOCVdATuQyrs5g39/hq/KGBDWKbuuC','B21DTVT012',1,1),('HS_46','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.272045','b21dtvt013@open.edu.vn','$2a$10$nxmNZN9pvnNQEIFC9KP4AOAZ1m1aILWUtUnn4Xsk9FjiYs3jaVusK','B21DTVT013',1,1),('HS_47','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.373255','b21dtvt014@open.edu.vn','$2a$10$tbbaXFtZpp1g6q5R1RaxbugMH4KtJ/ujDCVnR3CeCAPsY4JWCromi','B21DTVT014',1,1),('HS_48','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.487328','b22attt001@open.edu.vn','$2a$10$mJ4tXqhS8.8wjnVwcbHp4utmNav4PdspEBbSgkEElDLC6qLUhqGam','B22ATTT001',1,1),('HS_49','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.610425','b22attt002@open.edu.vn','$2a$10$GZMQRzf2d2BWjjVgofBbFO1f91UtrA5ijDRuluOgnMT8oHOs7IkP6','B22ATTT002',1,1),('HS_50','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.729181','b22attt003@open.edu.vn','$2a$10$ane5OIKDlAnSg9CLBi8/r.TcU4G4X1ahI.dNKEg8GKoHGa9ySocv.','B22ATTT003',1,1),('HS_51','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.844046','b22attt004@open.edu.vn','$2a$10$s0/8oztoM9djJ4wmUQ5qq.7DTfyImbXFiVIgsyBNBVt74zjBEVSdq','B22ATTT004',1,1),('HS_52','2026-06-10 06:16:53.000000','2026-06-10 10:39:28.958703','b22attt005@open.edu.vn','$2a$10$jbhJjhyFWPVvka3MvbawbO.T/pEwXkUiXSbq0HHqpO2syrRMsMjSC','B22ATTT005',1,1),('HS_53','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.068866','b22attt006@open.edu.vn','$2a$10$e5hWKwqgfHdniSUc0/rP4.D5VsKgMuk1XgUSyJOIjvkQAJpYUIosi','B22ATTT006',1,1),('HS_54','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.176601','b22attt007@open.edu.vn','$2a$10$1D2Was7/tb4fvtPdMhBeGeAqC7qiYCww/QzkIi7fTeOXyJgEs.MEK','B22ATTT007',1,1),('HS_55','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.285418','b22attt008@open.edu.vn','$2a$10$gJ7RaVhRVe9CgatTdCzH6OqiImqWmXC0HU67N8H4L63RZVpOFWj5O','B22ATTT008',1,1),('HS_56','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.387477','b22attt009@open.edu.vn','$2a$10$dowfK62h.zr3cI.7bglGjub6LdKXPkg3iEs.HPbcAF5KiP7vW5zqq','B22ATTT009',1,1),('HS_57','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.486792','b22attt010@open.edu.vn','$2a$10$4X2Lar8AQf.CsGTT0fUXKOBN4OasdoZeWRidB5DE.aTMHfYQpBjJK','B22ATTT010',1,1),('HS_58','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.584695','b22attt011@open.edu.vn','$2a$10$Wh5zlj9ddY0F/0qNGZwP3OkvFyHdifMiqvgweeuXQLJO/LZ1x/lWm','B22ATTT011',1,1),('HS_59','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.684449','b22attt012@open.edu.vn','$2a$10$slEOhUledQkBeUtbB8YAgeqdF6ww6HDFfMzC4cwJWu0hJ59kNR09C','B22ATTT012',1,1),('HS_60','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.780955','b22attt013@open.edu.vn','$2a$10$.BVaP/GdGt5JfNPxEuZwIePyNe3p4yVV5srAbs.KKkapUQ.NrPcPm','B22ATTT013',1,1),('HS_61','2026-06-10 06:16:53.000000','2026-06-10 10:39:29.877333','b22attt014@open.edu.vn','$2a$10$SI.uD713ltuIzgJ0VgVFVeZIYNjiUtuOKDXkGfa3pDpnPYEO7Vj7u','B22ATTT014',1,1),('HS_62','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.044317','b21httt001@open.edu.vn','$2a$10$dKjJpUS3IklssL47TPqVie34IDu7zbVWg/9sH7moRqFdurI9ufcT.','B21HTTT001',1,1),('HS_63','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.222250','b21httt002@open.edu.vn','$2a$10$mxO8aHRFQzF/3LSWVDHrb.Kp7KGJ0ID1aNgShMJqRyKmUIuGL69uy','B21HTTT002',1,1),('HS_64','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.381542','b21httt003@open.edu.vn','$2a$10$n2APctre735no2cqk4jVX.VxNsj9HVgQERteLPpEL0Mw3rPgBEV2a','B21HTTT003',1,1),('HS_65','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.539373','b21httt004@open.edu.vn','$2a$10$7HAPtw0U70LvhvdhdVSUEuavYQEIlmkTY9uVSyvnTha790uGOE.ZG','B21HTTT004',1,1),('HS_66','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.726112','b21httt005@open.edu.vn','$2a$10$DU5UH/CJisZduSrl51PdFun/nYGPC0bo.sCuux4Cj2JR0zn.rO4yK','B21HTTT005',1,1),('HS_67','2026-06-10 06:16:53.000000','2026-06-10 10:39:30.909696','b21httt006@open.edu.vn','$2a$10$bUFVwHo0dImrsUFaOpowZ.mejsm7l0nM1hXWxzkuNJAq8NxQA1sum','B21HTTT006',1,1),('HS_68','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.080902','b21httt007@open.edu.vn','$2a$10$1l17VsDTCHxvxPMy3PUBF.21PENy3pN1qK.ThR8LTE6zZfZ2UeV0q','B21HTTT007',1,1),('HS_69','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.210738','b21httt008@open.edu.vn','$2a$10$/qww584wr00nxjkgziaIIeK4UMswu63IYOZNImuuCaAKnFIg3Dl06','B21HTTT008',1,1),('HS_70','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.378097','b21httt009@open.edu.vn','$2a$10$chC8zxi0Ws61KInLkJ98Ke/FIiEBA/uFalR9Bq2YnJdHXgSNPShiS','B21HTTT009',1,1),('HS_71','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.551319','b21httt010@open.edu.vn','$2a$10$BuND6CX58Pi3Hhe7j64R4.nSWb.CEvscaRWh4qHZjCVgCYzYcJCzC','B21HTTT010',1,1),('HS_72','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.679195','b21httt011@open.edu.vn','$2a$10$hKZBE6nKkElpKrmyELbiNOqhDVGxAjp9CJUwC876lGRV5tCQVWttq','B21HTTT011',1,1),('HS_73','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.797086','b21httt012@open.edu.vn','$2a$10$pkbLt/xwKOXMDxfA/cx4PebTdVWjzM.J.cnqobO7MKkeUnrPEGc8W','B21HTTT012',1,1),('HS_74','2026-06-10 06:16:53.000000','2026-06-10 10:39:31.946957','b21httt013@open.edu.vn','$2a$10$rt1PV.KBcMaqsfk.DHXJbuaudcdoT.vk.yX/A7WMR/fn9apBALBdW','B21HTTT013',1,1),('HS_75','2026-06-10 06:16:53.000000','2026-06-10 10:39:32.105871','b21httt014@open.edu.vn','$2a$10$eSd.jmV261I6jqrpdELMK.NOrHoHmQI5QLi4IP.8N4DBlR7XhrWea','B21HTTT014',1,1);
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

-- Dump completed on 2026-06-10 17:56:00

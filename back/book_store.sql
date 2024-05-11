CREATE DATABASE  IF NOT EXISTS `book_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `book_store`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: book_store
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `cover` varchar(100) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `category` char(25) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (5,'Orgullo y Prejuicio','Jane Austen','front/assets/ficcion/orgullo-y-prejuicio.jpg',1800,'recetas',26),(6,'El Guardián entre el Centeno','J.D. Salinger','front/assets/ficcion/guardian-en-el-centeno.jpg',2000,'ficción',22),(7,'El Hobbit','J.R.R. Tolkien','front/assets/ficcion/el-hobbit.jpg',2200,'ficción',25),(8,'Harry Potter y la Piedra Filosofal','J.K. Rowling','front/assets/ficcion/harry-potter-ylpf.jpg',2500,'ficción',30),(9,'El Señor de los Anillos','J.R.R. Tolkien','front/assets/ficcion/el-senor-de-los-anillos.jpg',2300,'ficción',28),(10,'Los Juegos del Hambre','Suzanne Collins','front/assets/ficcion/los-juegos-del-hambre.jpg',1900,'ficción',20),(11,'El Código Da Vinci','Dan Brown','front/assets/ficcion/el-codigo-da-vinci.jpg',2100,'ficción',25),(12,'Crepúsculo','Stephenie Meyer','front/assets/ficcion/crepusculo.jpg',2000,'ficción',18),(13,'El Alquimista','Paulo Coelho','front/assets/ficcion/el-alquimista.jpg',2200,'ficción',23),(14,'Las Crónicas de Narnia','C.S. Lewis','front/assets/ficcion/las-cronicas-de-narnia.jpg',2100,'ficción',27),(15,'Lo que el Viento se Llevó','Margaret Mitchell','front/assets/ficcion/lo-que-el-viento-se-llevo.jpg',2300,'ficción',24),(16,'Bajo la Misma Estrella','John Green','front/assets/ficcion/bajo-la-misma-estrella.jpg',1800,'ficción',20),(17,'Las Aventuras de Huckleberry Finn','Mark Twain','front/assets/ficcion/las-aventuras-de-huckleberry-finn.jpg',1900,'ficción',15),(18,'Breve Historia del Mundo','Ernst H. Gombrich','front/assets/historia/breve-historia-del-mundo.jpg',2200,'historia',20),(19,'Sapiens De Animales a Dioses','Yuval Noah Harari','front/assets/historia/de-animales-a-dioses.jpg',2500,'historia',18),(20,'La Segunda Guerra Mundial','Antony Beevor','front/assets/historia/la-segunda-guerra-mundial.jpg',2000,'historia',15),(21,'El Diario de Ana Frank','Ana Frank','front/assets/historia/diario-de-anne-frank.jpg',2300,'historia',22),(22,'La Historia del Mundo en 100 Objetos','Neil MacGregor','front/assets/historia/la-historia-del-mundo-en-100-objetos.jpg',2100,'historia',17),(23,'Breve Historia de España','Fernando García de Cortázar','front/assets/historia/breve-historia-de-espana.jpg',2400,'historia',25),(24,'Los Mitos Griegos','Robert Graves','front/assets/historia/los-mitos-griegos.jpg',1900,'historia',20),(25,'La Guerra Civil Española','Hugh Thomas','front/assets/historia/la-guerra-civil-espanola.jpg',1800,'historia',16),(26,'El Holocausto','Martin Gilbert','front/assets/historia/el-holocausto.jpg',2100,'historia',19),(27,'Breve Historia de la Revolución Rusa','Richard Pipes','front/assets/historia/la-revolucion-rusa.jpg',2300,'historia',21),(28,'Watchmen','Alan Moore','front/assets/cómics/watchmen.jpg',2200,'cómics',20),(29,'Maus','Art Spiegelman','front/assets/cómics/maus.jpg',2500,'cómics',18),(30,'Batman El Regreso del Caballero Oscuro','Frank Miller','front/assets/cómics/el-regreso-del-caballero-oscuro.jpg',2000,'cómics',15),(31,'Sandman','Neil Gaiman','front/assets/cómics/sandman.jpg',2300,'cómics',22),(32,'Saga','Brian K. Vaughan','front/assets/cómics/saga.jpg',2100,'cómics',17),(33,'Y El Último Hombre','Brian K. Vaughan','front/assets/cómics/y-el-ultimo-hombre.jpg',2400,'cómics',25),(34,'Persépolis','Marjane Satrapi','front/assets/cómics/persepolis.jpg',1900,'cómics',20),(35,'The Walking Dead','Robert Kirkman','front/assets/cómics/the-walking-dead.jpg',1800,'cómics',16),(36,'Pantera Negra','Ta-Nehisi Coates','front/assets/cómics/pantera-negra.jpg',2100,'cómics',19),(37,'Mantas','Craig Thompson','front/assets/cómics/mantas.jpg',2300,'cómics',21),(38,'La Alegría de Cocinar','Irma S. Rombauer','front/assets/recetas/la-alegria-de-cocinar.jpg',2200,'recetas',20),(39,'Dominando el Arte de la Cocina Francesa','Julia Child','front/assets/recetas/el-arte-de-la-cocina-francesa.jpg',2500,'recetas',18),(40,'Cómo Cocinar Todo','Mark Bittman','front/assets/recetas/como-cocinar-todo.jpg',2000,'recetas',15),(41,'Sal, Grasa, Ácido, Calor','Samin Nosrat','front/assets/recetas/sal-grasa-acido-calor.jpg',2300,'recetas',22),(42,'Plenty','Yotam Ottolenghi','front/assets/recetas/plenty.jpg',2100,'recetas',17),(43,'La Cuchara de Plata','Varios Autores','front/assets/recetas/la-cuchara-de-plata.jpg',2400,'recetas',25),(44,'Esenciales de la Cocina Italiana','Marcella Hazan','front/assets/recetas/esenciales-de-la-comida-italiana.jpg',1900,'recetas',20),(45,'Jerusalén','Yotam Ottolenghi','front/assets/recetas/jerusalen.jpg',1800,'recetas',16),(46,'El Libro del Sabor','Karen Page','front/assets/recetas/el-libro-del-sabor.jpg',2100,'recetas',19),(47,'Cocina Vegetariana para Todos','Deborah Madison','front/assets/recetas/cocina-vegetariana-para-todos.jpg',2300,'recetas',21);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_items`
--

DROP TABLE IF EXISTS `favorite_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_items` (
  `user_id` int DEFAULT NULL,
  `book_id` int DEFAULT NULL,
  KEY `user_id` (`user_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `favorite_items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `favorite_items_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_items`
--

LOCK TABLES `favorite_items` WRITE;
/*!40000 ALTER TABLE `favorite_items` DISABLE KEYS */;
INSERT INTO `favorite_items` VALUES (10,18),(10,6),(10,38),(10,6),(10,19);
/*!40000 ALTER TABLE `favorite_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_id` int NOT NULL,
  `book_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`order_id`,`book_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,15,2),(1,17,3),(6,6,1),(7,6,1),(8,6,1),(8,18,1),(8,19,1),(9,6,1),(9,38,1),(10,6,1),(10,7,1),(11,18,1),(11,19,1),(12,6,1),(12,7,1),(15,19,1),(15,20,1),(16,6,1),(16,7,1),(17,39,1),(18,20,1),(18,30,1),(19,20,1),(21,30,1),(22,21,1),(23,20,1),(24,20,1),(25,5,1),(26,20,1),(27,7,3),(27,20,3),(28,8,4),(28,9,2),(29,20,3),(29,21,5);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2024-05-01 01:36:42'),(2,NULL,'2024-05-01 14:19:22'),(3,NULL,'2024-05-01 14:21:05'),(4,1,'2024-05-01 15:27:24'),(5,1,'2024-05-01 15:33:55'),(6,1,'2024-05-01 15:40:58'),(7,1,'2024-05-01 15:43:07'),(8,1,'2024-05-01 15:45:49'),(9,1,'2024-05-01 16:45:16'),(10,1,'2024-05-01 16:47:32'),(11,1,'2024-05-01 16:50:01'),(12,1,'2024-05-01 16:53:20'),(13,NULL,'2024-05-04 22:30:10'),(14,NULL,'2024-05-04 22:38:14'),(15,NULL,'2024-05-04 22:41:09'),(16,10,'2024-05-04 23:37:26'),(17,10,'2024-05-05 14:08:38'),(18,10,'2024-05-05 14:11:11'),(19,10,'2024-05-05 14:15:52'),(20,10,'2024-05-05 14:19:20'),(21,10,'2024-05-05 14:22:13'),(22,10,'2024-05-05 20:15:25'),(23,10,'2024-05-05 20:17:02'),(24,10,'2024-05-05 20:18:19'),(25,10,'2024-05-05 20:20:56'),(26,10,'2024-05-05 20:42:48'),(27,10,'2024-05-07 21:46:11'),(28,10,'2024-05-07 23:09:19'),(29,10,'2024-05-07 23:15:33');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'leandro','leandro@leandro.com','password','none','admin'),(2,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL),(4,'leandro2','leandro2@leandro.com','password','none','user'),(5,NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL,NULL),(9,NULL,NULL,NULL,NULL,NULL),(10,'1111','1111@1111.com','1111','11111','user'),(11,'hola','hola@hola.com','Hola1','hola','user');
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

-- Dump completed on 2024-05-09 12:48:45

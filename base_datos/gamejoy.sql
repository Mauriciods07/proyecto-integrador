-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: tiendagamejoy
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id_compra` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `fecha_compra` date NOT NULL,
  PRIMARY KEY (`id_compra`),
  KEY `id_usuario_compras` (`id_usuario`),
  KEY `id_producto_compras` (`id_producto`),
  CONSTRAINT `id_producto_compras` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `id_usuario_compras` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,4,6,3,'2022-03-20'),(2,5,4,3,'2022-01-11'),(3,6,5,3,'2022-02-14'),(4,4,6,3,'2022-03-20'),(5,5,4,3,'2022-01-11'),(6,6,5,3,'2022-02-14'),(7,7,10,1,'2022-02-17'),(8,8,11,1,'2022-02-17'),(9,9,12,1,'2022-02-17'),(10,10,10,1,'2022-02-20'),(11,11,11,2,'2022-01-30'),(12,12,12,1,'2022-02-15'),(13,13,13,1,'2022-02-21'),(14,14,14,10,'2022-02-21'),(15,15,15,1,'2022-02-21'),(16,16,7,1,'2021-01-01'),(17,16,8,4,'2022-01-02'),(18,7,9,2,'2020-12-23');
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `nombre_producto` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `costo` float NOT NULL,
  `cantidad` int NOT NULL,
  `categoria` enum('Lanzamiento','Ofertas','Accesorios','PlayStation','Nintendo','Xbox') NOT NULL DEFAULT 'Lanzamiento',
  `fecha_producto` date NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `id_usuario_productos` (`id_usuario`),
  CONSTRAINT `id_usuario_productos` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'Crash Bandicoot 4: It´s About Time','Cuarta entrega de Crash Bandicoot para plataformas de nueva generación','imagen',1599,50,'PlayStation','2022-02-21'),(2,1,'Halo Infinite','Sexta entrega de la franquicia Halo','imagen',1499,30,'Xbox','2022-02-21'),(3,1,'Super Mario Oddisey','Primer juego first party del mundo de mario para Nintendo Switch','imagen',1899,10,'Nintendo','2022-02-21'),(4,5,'Control','Control es el nuevo juego de acción en tercera persona de Remedy Entertainment, responsables de títulos como Max Payne, Alan Wake y Quantum Break. Desarrollado gracias al apoyo de 505 Games, este nuevo videojuego llegará a Xbox One, PS4 y PC.','Control_12',1500,5,'Xbox','2022-01-12'),(5,6,'Elden Ring','ELDEN RING es uno de los juegos más esperados de los últimos meses, por lo que no sería nada agradable que alguien arruine tu experiencia de juego con spoilers. Hay algo importante que debes saber si mueres por jugar el título de FromSoftware: algunos streamers ya lo están haciendo y podrías encontrar spoilers en Internet.','Elden_Ring',1234.3,1,'PlayStation','2022-05-11'),(6,4,'Mario Party Superstars','El glaseado y las flores estarán presentes mientras compites por obtener el mayor número de estrellas en el tablero Peachs Birthday Cake del juego original de Mario Party. Mira la cuenta regresiva que desata el Bowser Coin Beam y guarda las monedas en el tablero Space Land. Tu suerte podría cambiar rápidamente en Mario Party, así que mantente alerta. ¡Además, este y todos los otros modos también se podrán jugar en línea*!','Super_Mario',1439.2,3,'Lanzamiento','2022-03-15'),(7,7,'minecraft','ES UN VIDEOJUEGO DE MUNDO ABIERTO DONDE LA EXPLORACIÓN Y LAS CONSTRUCCIONES SON FUNDAMENTALES','imagen_minecraft',799,1,'Nintendo','2022-02-17'),(8,8,'GRAND THEFT AUTO THE TRILOGY','GRAND THEFT AUTO THE TRILOGY THE DEFINITIVE EDITION NSW\nGRAND THEFT AUTO: THE TRILOGY THE DEFINITIVE EDITION INCLUYE LOS JUEGOS: GTA III, GTA: VICE CITY Y GTA: SAN ANDREAS. REVIVE LOS GRANDES MOMENTOS DE LOS CLÁSICOS JUEGOS DE LA SAGA.','imagengta',1499,1,'PlayStation','2022-02-17'),(9,9,'POKEMON CHARIZARD','¡ATRAPA A ESTE CHARIZARD Y LLÉVALO A TU COLECCIÓN DE FIGURAS! ¡LANZA YA TU POKEBOLA!.','imagencharizard',399,1,'Lanzamiento','2022-02-17'),(10,10,'Tales of Arise','Durante 300 años ...','imagen_tales',1085,5,'PlayStation','2022-02-17'),(11,11,'Tormented Souls','Durante 300 años ...','imagen_tormented',685,2,'PlayStation','2022-01-24'),(12,12,'The Medium','Durante 300 años ...','imagen_medium',1249,5,'PlayStation','2022-01-15'),(13,13,'Call of Duty',' videojuego','imagen_callOfDuty',965,1,'PlayStation','2022-02-17'),(14,14,'Control Xbos One',' Control','imagen_control',865,3,'Accesorios','2022-02-20'),(15,15,'Assassins',' videojuego','imagen_Assassins',565,2,'Xbox','2022-02-21'),(19,15,'Mario Kart 8','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi saepe optio vero animi assumenda non quas corporis corrupti eius eum facere quod sunt repellendus, recusandae quo veritatis dolorem? Molestias.','src/img/productos/mario_kart8_deluxe.jpg',1400.5,5,'Ofertas','2020-05-11'),(20,16,'Luigi\'s Mansion','Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat voluptatum ullam quis recusandae rem id excepturi tempore magni! Doloremque laudantium vero assumenda illum, reprehenderit atque sunt necessitatibus expedita ipsum?','src/img/productos/luigis_mansion3.jpg',1500,80,'Lanzamiento','2019-09-22'),(21,17,'Pokémon Diamante','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta cupiditate, repellat nihil quisquam minima enim expedita cum molestiae natus accusantium fugiat voluptates laboriosam, quas modi perspiciatis laudantium temporibus nemo accusamus.','src/img/productos/pokemon_brilliant_diamond.jpg',1300.5,70,'Xbox','2021-03-14');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL DEFAULT 'INGRESA DIRECCION',
  `fecha_ingreso` date NOT NULL DEFAULT '2022-01-25',
  `numero_tarjeta` varchar(16) DEFAULT NULL,
  `fecha_expiracion` varchar(5) DEFAULT NULL,
  `cvv` varchar(3) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `es_vendedor` tinyint(1) NOT NULL DEFAULT '0',
  `comercio` varchar(255) DEFAULT NULL,
  `correo_empresa` varchar(255) DEFAULT NULL,
  `telefono_empresa` varchar(255) DEFAULT NULL,
  `direccion_empresa` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'GameJoy','GameJoy','gamejoy@gorgonitas.com','260793','55849173370','INGRESA DIRECCION','2022-02-15',NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(2,'Jonathan','Quino','jonathan@gorgonitas.com','260793','5584917337','INGRESA DIRECCION','2022-02-15',NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(3,'Omar','Reyes','jonathan@gorgonitas.com','260793','5584917337','INGRESA DIRECCION','2022-02-15',NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(4,'Marja','Castañeda','marja.17@gamejoy.com','14566','5514567894','Carrera 11 #95- 37, Bogotá','2022-02-17','4152414618492367','22/09','567','marja',1,'Game Joy','Gorgonitas@gamejoy','5531678978','Calle Puentezuelas, 55, Granada, España'),(5,'Ricardo','Mejia','mricardo@gmail.com','17899','5514191893','Santa Maria 2670, Providencia, Santiago.','2022-11-24','4156232106628124','22/05','674','richr',1,'Jueguitos divertidos','juegos_diverti@gmail.com','5536788456','Santa Maria 2670, Providencia, Santiago.'),(6,'Pedro','Camarillo','Hola_lola@gmail.com','14544','5514191893','Lake Como, Colonia Anahuac Section I, Miguel Hidalgo.','2022-03-15','4145672456781245','22/01','545','pedro',1,'Pedro Games','Pedro.juegoss@gmail.com','5536788978','Lake Como, Colonia Anahuac Section I, Miguel Hidalgo.'),(7,'Alexis','Gonzalez','alexis@gorgonitas.com','43564','5544851234','Av. morelos 134, 54449 San Jose el vidrio, Méx.','2022-01-20','1234565478901535','02/25','031','imagenale',1,'Gamejoy','gamejoyalexis@gmail.com','4455661234','Centro Comercial Mundo E, Local 31-A. Blvd. Manuel Ávila Camacho N°1007, San Lucas Tepetlacalco Tlalnepantla de Baz, Méx. '),(8,'Brayan','Becerril','bray03@gmail.com','64535','5547128965','Hidalgo, 99, San Martin, 54600 Tepotzotlán, Méx.','2022-01-20','5243458712540624','06/23','142','imagenbray',1,'Biligame','biligame@gmail.com','5543763465','Isidro Fabela 6, Villa del Carbon, 54300 Villa del Carbón, Méx.'),(9,'Maria','Vega','mariaVusuariosega1@gmail.com','243546','5537512498','Viad. Río de las Avenidas 701, Terrazas, 42098 Pachuca de Soto, Hgo.','2022-01-20','0254127683028375','02/24','134','imagenmaria',1,'sportsvg','sportsvg@gmail.com','5509840124','Hacienda de Sierra Vieja 2, Hacienda del Parque, 54769 Cuautitlán Izcalli, Méx.'),(10,'Diana','Rangel','dianaR21@gamejoy.com','aaaaaa1','5554126985','Calle Leonardo da Vinci, 7, 41092.','2022-02-17','4152414618492367','23/09','269','imagen_diana',1,'Game Joy','Gorgonitas@gamejoy','5588888888',' Nº 1007, Perif. Blvd. Manuel Ávila Camacho, Hab Jardines de Santa Monica, 54055 Tlalnepantla de Baz, Méx.'),(11,'Angel','Soto','as93@gmail.com','bbbbbb2','5565214858','Pastor, 1 Urbanización Industrial Salinetas, Telde Las Palmas de Gran Canaria.','2022-01-24','4156232106628124','24/05','695','imagen_angel',1,'Juegos en el cielo','juegos_en_el_cielo@gmail.com','5552145201','Pastor, 1 Urbanización Industrial Salinetas, Telde Las Palmas de Gran Canaria.'),(12,'Laura','MArquez','lau15421@gmail.com','ccccccc3','5552103698','Las Ninfas No. 18, esquina con Los Helios.','2022-01-15','4145672456781245','25/01','521','imagen_laura',1,'Juega con L','ljuegos@gmail.com','5558475219','Las Ninfas No. 18, esquina con Los Helios.'),(13,'Nayelli ','Gutiérrez','nayelli.gutierrez@gamejoy.com','123ab','5535877422',' Av. Miguel Hidalgo No. 6 ','2022-02-15','1730963827013793','23/10','123','imagen_nayelli',1,'Game Joy','Gorgonitas@gamejoy','5523345689','Calle Puentezuelas, 55, Granada, España'),(14,'Nelsy ','Pérez','nelsyp@gmail.com','125ac','5535296487',' Calle Silverio Perez No. 12 ','2022-02-17','2856270479209573','23/12','146','imagen_nelsy',1,'La Joya','nelsy@joya.com','5539056922','Calle 5 de Marzo no. 6,Texcoco EDO. México'),(15,'Irvin ','Silva','silva32@gmail.com','231mn','5549871094',' Calle Allende No. 3b','2022-02-20','8947294782308482','25/10','987','imagen_irvin',0,NULL,NULL,NULL,NULL),(16,'Mauricio','Díaz','mauricio@gorgonitas.com','noesunacontrasenia1234','5522334455','Mixcoac, 03910 Mexico City, CDMX','2021-11-29','1234567887654321','03/24','123','src/assets/img/usuarios/mauricio_diaz_001.png',1,'GameJoy','mauricio@gamejoy.com','5525255533','C. Dinamarca 60, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX'),(17,'Yair','Uriostegui','yair@gmail.com','contraseniaseria4321','5544321254','Balderas, Colonia Centro, Centro, 06000 Ciudad de México, CDMX','2021-12-14','5678123487654321','01/24','236','src/assets/img/usuarios/yair_uriostegui_001.png',0,'Siafi','yair@siafi.com','5554652575','Copilco, Eje 10 Sur (Copilco), Copilco Universidad, 04310 Ciudad de México, CDMX');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-21 13:21:00
-- Hola 2
-- 
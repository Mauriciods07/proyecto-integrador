

--  DROP DATABASE  tiendaGameJoy;

CREATE SCHEMA tiendaGameJoy;
USE tiendagamejoy;
CREATE TABLE usuarios(id_usuario int NOT NULL auto_increment, primary key(id_usuario));
ALTER TABLE usuarios ADD COLUMN nombre VARCHAR(255) NOT NULL;
ALTER TABLE usuarios ADD COLUMN apellido VARCHAR(255) NOT NULL;
ALTER TABLE usuarios ADD COLUMN correo VARCHAR(255) NOT NULL;
ALTER TABLE usuarios ADD COLUMN contrasenia VARCHAR(255) NOT NULL;
ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(255) NOT NULL;
ALTER TABLE usuarios ADD COLUMN direccion VARCHAR(255) NOT NULL DEFAULT 'INGRESA DIRECCION';
ALTER TABLE usuarios ADD COLUMN fecha_ingreso DATE NOT NULL DEFAULT '2022-01-25';
ALTER TABLE usuarios ADD COLUMN numero_tarjeta VARCHAR(16) NULL DEFAULT NULL;
ALTER TABLE usuarios ADD COLUMN fecha_expiracion VARCHAR(5) NULL DEFAULT NULL;
ALTER TABLE usuarios ADD COLUMN cvv VARCHAR(3) NULL DEFAULT NULL;
ALTER TABLE usuarios ADD COLUMN foto VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE usuarios ADD COLUMN es_vendedor BOOLEAN NOT NULL DEFAULT '0';
ALTER TABLE usuarios ADD COLUMN comercio VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE usuarios ADD COLUMN correo_empresa VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE usuarios ADD COLUMN telefono_empresa VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE usuarios ADD COLUMN direccion_empresa VARCHAR(255) NULL DEFAULT NULL;

CREATE TABLE productos(id_producto INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id_producto));
ALTER TABLE productos ADD COLUMN id_usuario INT NOT NULL;
ALTER TABLE productos ADD CONSTRAINT id_usuario_productos FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE productos ADD COLUMN nombre_producto VARCHAR(255) NOT NULL;
ALTER TABLE productos ADD COLUMN descripcion TEXT NOT NULL;
ALTER TABLE productos ADD COLUMN imagen VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE productos ADD COLUMN costo 	FLOAT NOT NULL;
ALTER TABLE productos ADD COLUMN cantidad INT NOT NULL;
ALTER TABLE productos ADD COLUMN categoria ENUM('Lanzamiento','Ofertas','Accesorios','PlayStation','Nintendo','Xbox') NOT NULL DEFAULT 'Lanzamiento';
ALTER TABLE productos ADD COLUMN fecha_producto DATE NOT NULL;

CREATE TABLE compras(id_compra INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id_compra));
ALTER TABLE compras ADD COLUMN id_usuario INT NOT NULL;
ALTER TABLE compras ADD CONSTRAINT id_usuario_compras FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario);
ALTER TABLE compras ADD COLUMN id_producto INT NOT NULL;
ALTER TABLE compras ADD CONSTRAINT id_producto_compras FOREIGN KEY(id_producto) REFERENCES productos(id_producto);
ALTER TABLE compras ADD COLUMN cantidad INT NOT NULL;
ALTER TABLE compras ADD COLUMN fecha_compra DATE NOT NULL;

-- 1) Crear una base de datos llamada 'mibase'
create database mibase;
use mibase;

-- 2) Crear una tabla dentro de esa base con el nombre 'usuarios' que contenga los siguientes campos:
-- 'nombre' del tipo varchar no nulo
-- 'apellido' del tipo varchar no nulo
-- 'edad' del tipo entero sin signo
-- 'email' del tipo varchar no nulo
-- 'id' clave primaria autoincremental no nula
create table usuarios(
	id int unsigned not null auto_increment,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    edad int unsigned not null,
    email varchar(50) not null,
    primary key(id)
);

-- 3) Insertar estos 3 usuarios en esa tabla
-- Juan Perez edad 23 jp@gmail.com
-- Pedro Mei edad 21 pm@gmail.com
-- Juana Suarez edad 25 js@gmail.com
insert into usuarios (nombre, apellido, edad, email) values
('Juan', 'Perez', 23, 'jp@gmail.com'),
('Pedro', 'Mei', 21, 'pm@gmail.com'),
('Juana', 'Suarez', 25, 'js@gmail.com');

-- 4) Listar los usuarios agregados
select * from usuarios;

-- 5) Borrar el usuario con id = 2
delete from usuarios where id = 2;

-- 6) Actualizar la edad del usuario con id = 1 a 24 años
update usuarios set edad = 24 where id = 1;

-- 7) Listar los registros comprobando que los datos esten actualizados según las acciones realizadas.
select * from usuarios;

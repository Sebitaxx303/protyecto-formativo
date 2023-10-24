create database solctext
go
use solctext
go ----------------------------------------------
create table taller_availability(
    id int identity(1,1),
    u_state varchar(30) primary key
)
go ----------------------------------------------
insert into taller_availability (u_state) VALUES ('Activo'), ('Inactivo')

go ----------------------------------------------
create table user_types(
id int identity(1,1),
user_type varchar (30) primary key
)
go ----------------------------------------------
insert into user_types (user_type) values ('empresa'), ('taller'), ('administrador')

go ----------------------------------------------
create table users(
user_type varchar (30) foreign key references user_types,
id int primary key identity(1,1),
manager_name varchar(40) NOT NULL,
company_name varchar(30) UNIQUE NOT NULL,
rut varchar (9) UNIQUE NOT NULL,
u_address  varchar(30) NOT NULL,
phone_number varchar(15) UNIQUE,
register_date date,
u_state varchar(30) FOREIGN KEY REFERENCES taller_availability,
email varchar(30) UNIQUE NOT NULL,
u_password nvarchar (max)  NOT NULL
)
go ----------------------------------------------
create table machine_types(
id_type int identity(1,1),
machine_type varchar(30) primary key
)
go ----------------------------------------------
insert into machine_types (machine_type) values ('Máquina plana de una aguja'),('Máquina fileteadora'),('Máquina collarín'),('Máquina cerradora de codo'),('Máquina Flat Seamer'),('Máquina botonadora'),('Máquina ojaladora'),('Máquina presilladora'),('Máquina pretinadora'),('Máquina plana de dos agujas')
go ----------------------------------------------
create table machines(
id_machine int primary key identity(1,1),
id_user int foreign key references users,
machine_type varchar(30) foreign key references machine_types,
mach_description nvarchar(500),
photo varbinary(max)
)
go ----------------------------------------------
create table d_users_machines(
id_user int foreign key references users,
id_machine int foreign key references machines,
)
go ----------------------------------------------
create table request_types(
id_request int  identity(1,1),
request_type varchar (30) primary key
)
insert into request_types (request_type) values ('tintura'),('hilatura'),('tejeduria'),('acabados')
go ----------------------------------------------
create table request_availability (
id int  identity(1,1),
r_state varchar (30) primary key
)
go ----------------------------------------------
insert into request_availability (r_state) values ('Activa'),('Inactiva')
go ----------------------------------------------
create table requests(
id int identity (1,1) primary key,
id_user_request int foreign key references users,
request_type varchar(30) FOREIGN key REFERENCES request_types,
start_date date not null,
description nvarchar(500),
r_state varchar(30) FOREIGN key REFERENCES request_availability,
amount int,
)
go ----------------------------------------------
create table d_requests_talleres (
    id_d_r_t int identity (1,1) primary KEY,
    id_request int FOREIGN KEY REFERENCES requests,
    id_user int FOREIGN KEY REFERENCES users
)
go ----------------------------------------------
create table ratings(
id_rating int primary key identity(1,1),
service_status varchar(30),
recommendations nvarchar(500)
)
go ----------------------------------------------



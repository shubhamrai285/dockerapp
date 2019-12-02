create table product (id int primary key auto_increment,title varchar(100),description varchar(1000),price float);
create table category (id int primary key auto_increment,title varchar(100),description varchar(1000));
create table user (id int primary key auto_increment,name varchar(100),email varchar(1000),phone varchar(20));

insert into category (title,description) values ('home','home application');
insert into category (title,description) values ('electronics','electronics');
insert into category (title,description) values ('fashion','fashion1');
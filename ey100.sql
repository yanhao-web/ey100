#创建数据库ey100
set names utf8;
drop database if exists ey100;
create database ey100 charset=utf8;
use ey100;

#创建用户表

create table ey100_user(
  uid int primary key auto_increment,       #用户编号
  city varchar(32),                         #地区城市
  email varchar(32),                        #邮箱地址
  upwd varchar(16),                         #密码
  phone varchar(11)                         #手机号
);
insert into ey100_user values(null,'北京','11111@163.com','111111','12345678910');
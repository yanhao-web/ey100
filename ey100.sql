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


#创建商品详情表
create table ey100_details(
  id int primary key auto_increment,
  pname varchar(102),
  pid varchar(64),
  price decimal(2),
  pimg varchar(64)
);
insert into ey100_details values(null,"国誉 半包胶档案夹 (黑) A4/3寸 W-FUAL290D ","8018-9559","9.80","8018-9559.jpg");
insert into ey100_details values(null,"国誉 粘扣档案盒 (黑) A4  EB0910D","8016-4138","7.90","8016-4138.jpg");
insert into ey100_details values(null,"易优百 二页文件保护套 (透明) A4 20个/包 E310 ","7001-4698","15.00","7001-4698.jpg");
insert into ey100_details values(null,"易优百 横式按扣文件袋 A4  W209","8024-3625","1.60","8024-3625.jpg");
insert into ey100_details values(null,"国誉 COLOR TAG多页文件保护套 (混色) A4 WCN-TFB2610","8025-5857","7.20","8025-5857.jpg");
insert into ey100_details values(null,"齐心 彩色胶质分类索引 (彩色) 10级 IX902","8020-9293","7.00","8020-9293.jpg"); 
insert into ey100_details values(null,"树德 旋转报告夹 (混色) A4  QW328","8027-3897","58.00","8027-3897.jpg");
insert into ey100_details values(null,"国誉 进口装订夹条 (米白) 100套/盒 FA-2N","8006-7845","99.00","8006-7845.jpg");
insert into ey100_details values(null,"树德 UT系列30孔活页名片册 (黑) A4 300枚  U2300W","8025-7089","42.00","8025-7089.jpg");
insert into ey100_details values(null,"国誉 淡彩曲奇竖式风琴包 (透明) A4 6袋 WSG-DFC65T ","8027-2005","16.80","8027-2005.jpg");
insert into ey100_details values(null,"树德 彩虹直板夹 (蓝) A4 竖式  U6132","8028-2576","18.00","8028-2576.jpg");
insert into ey100_details values(null,"易达 快捞文件袋 (绿) A4 25个/盒 393121","8010-7932","80.00","8010-7932.jpg");
insert into ey100_details values(null,"国誉 NOVITA α可替换型背幅可调节收纳册(含外壳) (蓝)  RA-NT24B","8028-6767","69.00","8028-6767.jpg");
insert into ey100_details values(null,"得力 拉边袋 (混色) A4 5588","8019-5576","2.40","8019-55761.jpg");
insert into ey100_details values(null,"齐心 半包胶档案夹 (蓝) A4/3寸 A106A ","8015-3345","14.50","8015-3345.jpg");
insert into ey100_details values(null,"齐心 D型夹附压纸条 (蓝) 1.5寸2孔 TC532A-D-X ","8021-0569","18.20","8021-0569.jpg");
insert into ey100_details values(null,"易优百 纸制文件整理夹 (蓝) 30个/包 A4  EB-F40B","7000-1101","58.00","7000-1101.jpg");
insert into ey100_details values(null,"国誉 抽杆文件夹 (白) 10个/包 EB0902-10P","7000-9274","9.90","7000-9274.jpg");
insert into ey100_details values(null,"齐心 便携式纤维板夹 (棕) A4 竖式 A754","8026-5548","8.00","8026-5548.jpg");
insert into ey100_details values(null,"吉丽 塑胶装订夹 (混色) 50付/盒 G2227","8026-4613","7.20","8026-4613.jpg");
insert into ey100_details values(null,"齐心 超坚固PP文件夹 (绯蓝) 单长押夹＋插袋  AL151A-P-X","8001-4360","11.50","8001-4360.jpg");
insert into ey100_details values(null,"普乐士 可调式背宽装订文件夹 (淡绿) A4 FL-021SS-10P-NGR","8022-1954","11.90","8022-1954.jpg");
insert into ey100_details values(null,"易达 5索引文件保护套 A4 11孔  76010","8027-9067","7.20","8027-9067.jpg");
insert into ey100_details values(null,"易达 5索引文件保护套 A4 11孔  76010","8027-9067","7.20","8027-9067.jpg");
insert into ey100_details values(null,"国誉 半包胶档案夹 (黑) A4/3寸 W-FUAL290D ","8018-9559","9.80","8018-9559.jpg");
insert into ey100_details values(null,"国誉 粘扣档案盒 (黑) A4  EB0910D","8016-4138","7.90","8016-4138.jpg");
insert into ey100_details values(null,"易优百 二页文件保护套 (透明) A4 20个/包 E310 ","7001-4698","15.00","7001-4698.jpg");
insert into ey100_details values(null,"易优百 横式按扣文件袋 A4  W209","8024-3625","1.60","8024-3625.jpg");
insert into ey100_details values(null,"国誉 COLOR TAG多页文件保护套 (混色) A4 WCN-TFB2610","8025-5857","7.20","8025-5857.jpg");
insert into ey100_details values(null,"齐心 彩色胶质分类索引 (彩色) 10级 IX902","8020-9293","7.00","8020-9293.jpg"); 
insert into ey100_details values(null,"树德 旋转报告夹 (混色) A4  QW328","8027-3897","58.00","8027-3897.jpg");
insert into ey100_details values(null,"国誉 进口装订夹条 (米白) 100套/盒 FA-2N","8006-7845","99.00","8006-7845.jpg");
insert into ey100_details values(null,"树德 UT系列30孔活页名片册 (黑) A4 300枚  U2300W","8025-7089","42.00","8025-7089.jpg");
insert into ey100_details values(null,"国誉 淡彩曲奇竖式风琴包 (透明) A4 6袋 WSG-DFC65T ","8027-2005","16.80","8027-2005.jpg");
insert into ey100_details values(null,"树德 彩虹直板夹 (蓝) A4 竖式  U6132","8028-2576","18.00","8028-2576.jpg");
insert into ey100_details values(null,"易达 快捞文件袋 (绿) A4 25个/盒 393121","8010-7932","80.00","8010-7932.jpg");
insert into ey100_details values(null,"国誉 NOVITA α可替换型背幅可调节收纳册(含外壳) (蓝)  RA-NT24B","8028-6767","69.00","8028-6767.jpg");
insert into ey100_details values(null,"得力 拉边袋 (混色) A4 5588","8019-5576","2.40","8019-55761.jpg");
insert into ey100_details values(null,"齐心 半包胶档案夹 (蓝) A4/3寸 A106A ","8015-3345","14.50","8015-3345.jpg");
insert into ey100_details values(null,"齐心 D型夹附压纸条 (蓝) 1.5寸2孔 TC532A-D-X ","8021-0569","18.20","8021-0569.jpg");
insert into ey100_details values(null,"易优百 纸制文件整理夹 (蓝) 30个/包 A4  EB-F40B","7000-1101","58.00","7000-1101.jpg");
insert into ey100_details values(null,"国誉 抽杆文件夹 (白) 10个/包 EB0902-10P","7000-9274","9.90","7000-9274.jpg");
insert into ey100_details values(null,"齐心 便携式纤维板夹 (棕) A4 竖式 A754","8026-5548","8.00","8026-5548.jpg");
insert into ey100_details values(null,"吉丽 塑胶装订夹 (混色) 50付/盒 G2227","8026-4613","7.20","8026-4613.jpg");
insert into ey100_details values(null,"齐心 超坚固PP文件夹 (绯蓝) 单长押夹＋插袋  AL151A-P-X","8001-4360","11.50","8001-4360.jpg");
insert into ey100_details values(null,"普乐士 可调式背宽装订文件夹 (淡绿) A4 FL-021SS-10P-NGR","8022-1954","11.90","8022-1954.jpg");
insert into ey100_details values(null,"易达 5索引文件保护套 A4 11孔  76010","8027-9067","7.20","8027-9067.jpg");
insert into ey100_details values(null,"易达 5索引文件保护套 A4 11孔  76010","8027-9067","7.20","8027-9067.jpg");


create table ey100_cart(
  id        int primary key auto_increment,
  pid       varchar(32),
  price     decimal(10,2),
  count     int,
  pname     varchar(255),
  pimg      varchar(255),
  ischecked int,
  uid       int
);
insert into ey100_cart values(null,"8027-9067",7.20,1,"易达 5索引文件保护套 A4 11孔  76010","8027-9067.jpg",0,1);







const express=require('express');
const parser=require('body-parser');
const user=require('./router/user.js');
const product=require('./router/product.js');
const session=require("express-session");
const cors=require("cors");
var app=express();
app.listen(8080);

//配置session    !!!容易出错
app.use(session({
  //安全字符串   把session对象发送给客户端cookie中，把session对象的编号加密，将安全字符串的值放在加密算法中再加密    128位字符串
  secret:"128位字符串",
  //每次请求是否更新
  resave:true,
  //保存初始化数据
  saveUninitialized:true
}));

app.use(cors({
  origin:["http://127.0.0.1:5501","http://127.0.0.1:8080"]//不能用*
}));
app.use(express.static('public'));
app.use(parser.urlencoded({extended:false}));
app.use("/user",user);
app.use("/product",product);

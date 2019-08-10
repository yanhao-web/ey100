const express=require('express');
var router=express.Router();
var pool=require('../pool');
//验证手机注册用户
router.get("/v1/check/:phone",(req,res)=>{
  var $phone=req.params.phone;
  pool.query('select * from ey100_user where phone=?',[$phone],(err,result)=>{
    if(err)throw err;
	console.log(result);
    if(result.length>0){res.send('1');}else{res.send('0');}
  });
});
//手机号注册用户
router.post("/v1/regphone",(req,res)=>{
  var $body=req.body;
  pool.query('insert into ey100_user set ?',[$body],(err,result)=>{
    if(err)throw err; 
	console.log(result);
    if(result.affectedRows>0){res.send('1');}else{res.send('0');}
  });
});
//验证邮箱注册用户
router.get("/v1/check/:email",(req,res)=>{
  var $email=req.params.email;
  pool.query('select * from ey100_user where email=?',[$email],(err,result)=>{
    if(err)throw err;
    if(result.length>0){res.send('1');}else{res.send('0');}
  });
});
//邮箱注册用户
router.post("/v1/regphone",(req,res)=>{
  var $body=req.body;
  pool.query('insert into ey100_user set ?',[$body],(err,result)=>{
    if(err)throw err; 
	console.log(result);
    if(result.affectedRows>0){res.send('1');}else{res.send('0');}
  });
});
//用户手机登录
router.get('/v1/login/:phone/:upwd',(req,res)=>{
  var $phone=req.params.phone;
   var $upwd=req.params.upwd;
  pool.query('select * from ey100_user where phone=?&&upwd=?',[$phone,$upwd],(err,result)=>{
    if(err)throw err;
    if(result.length>0){res.send('1');}else{res.send('0');}
  });
});
//用户邮箱登录
router.get('/v1/login/:email/:upwd',(req,res)=>{
  var $email=req.params.email;
  var $upwd=req.params.upwd;
  pool.query('select * from ey100_user where email=?&&upwd=?',[$email,$upwd],(err,result)=>{
    if(err)throw err;
    if(result.length>0){res.send('1');}else{res.send('0');}
  });
});
module.exports=router;
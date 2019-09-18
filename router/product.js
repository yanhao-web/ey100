const express=require("express");
const session=require("express-session");
var router=express.Router();//配置session    !!!容易出错
router.use(session({
  //安全字符串   把session对象发送给客户端cookie中，把session对象的编号加密，将安全字符串的值放在加密算法中再加密    128位字符串
  secret:"128位字符串",
  //每次请求是否更新
  resave:true,
  //保存初始化数据
  saveUninitialized:true
}));
var pool=require("../pool");
//商品分页查询
router.get("/list",(req,res)=>{  
    var p=req.query.pno;
    var c=req.query.count;
    if(!p){
        p=1;
    }
    if(!c){
        c=16;
    }
    p=parseInt(p);
    c=parseInt(c);
    var s=(p-1)*c;
    var sql="select pname,pid,price,pimg from ey100_details limit ?,?";
    pool.query(sql,[s,c],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询成功",data:result});
    });
});

//将商品添加至商品购物车
router.get("/addcart",(req,res)=>{
    var pid=req.query.pid;
    var price=req.query.price;
    var pname=req.query.pname;
    var pimg=req.query.pimg;
    var uid=req.query.uid;
    var sql="select id from ey100_cart where uid=? and pid=?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            var sql=`insert into ey100_cart values(null,'${pid}',${price},1,'${pname}','${pimg}',0,${uid})`;
        }else{
            var sql=`update ey100_cart set count=count+1 where uid=${uid} and pid='${pid}'`;
        }
        pool.query(sql,(err,result)=>{
            if(err)throw err;
            if(result.affectedRows>0){
                res.send({code:1,msg:"商品添加成功"});
            }else {
                res.send({code:-2,msg:"商品添加失败"});
            }
        });
    });
});


//购物车商品选中的状态修改
router.get("/check",(req,res)=>{
    var pid=req.query.pid;
    var uid=req.query.uid;
    var checked=req.query.checked;
    var sql=`update ey100_cart set ischecked=${checked} where uid=${uid} and pid='${pid}'`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"修改成功"});
        }else{
            res.send({code:-1,msg:"修改失败"});
        }
    });
});
//购物车商品全选的状态
router.get("/all",(req,res)=>{
    //判断用户是否登录
    var uid=req.query.uid;
    //1.获取参数  id=1,2,3
    var pid=req.query.pid;
    var id=req.query.id;
    var checked=req.query.checked;
    //console.log(id);
    //2.创建sql语句
    var sql=`update ey100_cart set ischecked=${checked} where id in (${id})`;
    //3.执行sql语句
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"修改成功"});
        }else{
            res.send({code:-1,msg:"修改失败"});
        }
    });
});

//商品购物车减少
router.get("/less",(req,res)=>{
    var uid=req.session.uid;
    var pid=req.query.pid;
    var price=req.query.price;
    var pname=req.query.pname;
    var pimg=req.query.pimg;
    var uid=req.query.uid;
    var sql=`update ey100_cart set count=count-1 where uid=${uid} and pid='${pid}'`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"商品减少成功"});
        }else {
            res.send({code:-2,msg:"商品减少失败"});
        }
    });
});
//功能四：查询指定用户购物车信息
router.get('/shopping',(req,res)=>{
    var uid=req.query.uid;
    var sql="select id,pid,pname,count,price,pimg,ischecked from ey100_cart where uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询成功",data:result});
    });
});

//功能五  删除购物车指定的数据
router.get('/delitem',(req,res)=>{
    //0.判断是否登录
    var uid=req.query.uid;
    // 1.获取客户端发送的数据id
    var id=req.query.id;
    // 2.创建sql语句
    var sql="delete from ey100_cart where id=?";
    // 3.执行sql语句
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err;
        // 4.获取服务器获取结果是否删除成功
        if(result.affectedRows>0){  
            res.send({code:1,msg:"删除成功"});
        }else{
            res.send({code:-1,msg:"删除失败"});
        }
    });
});



//功能六  删除购物车中多个商品
router.get('/delitems',(req,res)=>{
    //判断用户是否登录
    var uid=req.query.uid;
    //1.获取参数  id=1,2,3
    var id=req.query.id;
    //console.log(id);
    //2.创建sql语句
    var sql=`delete from ey100_cart where id in (${id})`;
    //3.执行sql语句
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功"});
        }else{
            res.send({code:-1,msg:"删除失败"});
        }
    });
});

module.exports=router;


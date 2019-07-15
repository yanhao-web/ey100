const express=require('express');
const parser=require('body-parser');
const user=require('./router/user.js');
var app=express();
app.listen(8080);
app.use(express.static('public'));
app.use(parser.urlencoded({extended:false}));
app.use("/user",user);
$(function(){
    $.ajax({url:"demo.html",type:"get",success:function(result){
        $(result).replaceAll($("#demo"));
        $(`<link rel="stylesheet" href="demo.css">`).appendTo("head");
    }});
})
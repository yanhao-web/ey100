
        //城市的下拉菜单
        // 
        // var s2=document.getElementById("s2");
        // var s1=document.getElementById("s1");
        // var s3=document.getElementById("s3");
        // var s1_o=s1.children[0];
        // var frag=document.createDocumentFragment();
        // for(var i=0;i<sheng.length;i++){
        //     var opt=new Option(sheng[i]);
        //     frag.appendChild(opt);
        // }
        // s2.appendChild(frag);
        // s2.onchange=function(){
        //     s1_o.innerHTML=s2.value;
        // };
        // 对商品数量进行获取
       var rg=document.querySelector("p.s_l");
       var btns=rg.children;
       var input=btns[1];
       var b1=btns[0];
       var b2=btns[2];
       b1.onclick=function(){
           input.value--;
           if(input.value<1){
              input.value=1;
           }
       };
       b2.onclick=function(){
           input.value++;
       };
       $(".r_1.spx").show();
    //    绑定单机事件
    $(".btns").on("click","button",function(){
        $(this).each(function(i,elem){
            var $e=($(this).attr("data-target"));
            $(elem).next().css("border-left-color","red");
            $(elem).prev().css("border-right-color","red");
            $(`.${$e}`).show();
            $(`.${$e}`).siblings().hide();
            var $e0=$(`.${$e}`).parent().children()[0];
            $($e0).show();
            $(".r_2 .area").focus();
            if($e=="spx"){
                $("#footer").css("margin-top",`24400px`);
            }else if($e=="gkp"){ 
                $("#footer").css("margin-top",`-200px`);
            }else if($e=="cpz"){
                $("#footer").css("margin-top",`200px`);
            }else if($e=="shf"){
                $("#footer").css("margin-top",`20px`);
            }else if($e=="dgf"){
                $("#footer").css("margin-top","650px");
            }else if($e=="thh"){
                $("#footer").css("margin-top","700px");
            }
        });
    });



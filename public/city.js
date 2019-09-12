Vue.component("city",{
    template:`<div class="ct">
                <div>
                    配送至：<div class="ps">{{psz}}{{psz1}}{{psz2}}<div class="xsj"></div></div> 可配送
                </div>
               <div class="ssq">
                    <ul>
                      <li @mouseover="check1"><div>{{sf}}</div><div class="xsj"></div></li>
                      <li @mouseover="check2"><div>{{cs}}</div><div class="xsj"></div></li>
                      <li @mouseover="check3"><div>{{qx}}</div><div class="xsj"></div></li>
                    </ul>
                    <div :class="show==1?'':'d-none'" >
                        <div v-for="(she,i) of sheng" :key="i" :data-i="i">
                           <span :title="she" @click="change1(i,$event)">{{she.slice(0,5)}}</span> 
                        </div>
                    </div>
                    <div :class="show==2?'':'d-none'">
                        <div v-for="(ci,j) of city[i]" :key="j" :data-j="j">
                            <span :title="ci" @click="change2(j,$event)"  :data-j="j">{{ci.slice(0,5)}}</span>
                        </div>
                    </div>
                    <div :class="show==3?'':'d-none'">
                        <div v-for="(q,z) of qu[i][j]" :key="z" :data-z="z">
                            <span :title="q" @click="change3(i,$event)">{{q.slice(0,5)}}</span>
                        </div>
                    </div>
               </div>
            </div> `,
     //props:["sheng","city","qu"],
    data(){
        return {
        sf:"",
        cs:"",
        qx:"",
        psz:"",
        psz1:"",
        psz2:"",
        i:0,
        j:0,
        z:0,
        show:false,
        show1:false,
        sheng:["北京","江苏省","河南省","上海", "其它省","天津", "安徽省","福建省", "甘肃省", "广东省","广西", "贵州省", "广西壮族自治区", "新疆维吾尔自治区", "宁夏回族自治区", "西藏自治区", "内蒙古自治区", "海南省" ,"河北省",  "黑龙江省" ,"湖北省" ,"湖南省" ,"吉林省", "江西省" ,"辽宁省", "内蒙古", "宁夏", "青海省", "山东省", "山西省", "陕西省", "四川省", "云南省", "浙江省", "重庆市"],
        city:[["北京市"],["太仓市","南京市","苏州市"],["郑州市","许昌市","开封市"],["上海市"],["其他市"]],
        qu:[[["东城区","西城区","宣武区","崇文区","朝阳区","丰台区","海淀区","亦庄经济开发区","天竺空港工业区","其他区域","大兴亦庄以外区域","顺义空港以外区域","昌平区","大兴区","亦庄开发区","顺义区","天竺空港区","通州区","平谷区","密云县","延庆县","石景山区","门头沟区","房山区"]],[["城厢镇","浏河镇","浮桥镇","沙溪镇","璜泾镇","双凤镇","科教新城区","娄东街道办事处","太仓港经济开发区","太仓港","港口开发区","其它区"],["玄武区","白下区","秦淮区","建邺区","鼓楼区","下关区","浦口区","栖霞区","雨花台区","江宁区","六合区","溧水县","高淳县","其它"],["张家港市","吴江区","吴中区","相城区","平江区","沧浪区","金阊区","苏州工业园区","虎丘区","苏州新区","新区"]],[["中原区","二七区","管城回族区","金水区","上街区","惠济区","中牟县","巩义市","荥阳市","新密市","新郑市","登封市","郑东新区","高新区","其它区"],["魏都区","许昌县","鄢陵县","襄城县","禹州市","长葛市","其它区"],["龙亭区","顺河回族区","鼓楼区","禹王台区","金明区","杞县","通许县","尉氏县","开封县","兰考县","其它区"]],[["浦东新区","徐汇区","长宁区","普陀区","闸北区","虹口区","杨浦区","黄浦区","卢湾区","静安区","宝山区","闵行区","嘉定区","金山区","松江区","青浦区","奉贤区","南汇区","其它"]],[["其他区"]]],
        }
    },
    methods:{
        change3(i,e){
            this.qx=e.target.title;
            this.psz2=this.qx;
            this.z=parseFloat(i);
        },
        change2(i,e){
            this.cs=e.target.title;
            this.psz1=this.cs;
            this.j=parseFloat(i);
        },
        change1(i,e){
            this.sf=e.target.title;
            this.psz=e.target.title;
            this.i=parseFloat(i);
        },
        check1(e){
            this.show=1;
        },
        check2(e){
            this.show=2;
        },
        check3(e){
            this.show=3;
        }
    }
});
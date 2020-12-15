<template>
    <div>
        <canvas id="canvas" width="900" height="680">您的浏览器太老，请使用新版谷歌或火狐浏览器访问！</canvas>
    </div>
</template>

<script>
//import func from '../../vue-temp/vue-editor-bridge';
export default {
    name:"draft",
    data () {
        return {
            //ele: null , 
            //cxt:null,
            angle:50,
            circle_x : 350, // 圆心坐标
            circle_y :350,
            circle_r : 200, // 半径
            team_num : 30, // 小圆数目
            colors : ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"] //随机颜色组
        }
    },
    methods:{       
    // var circle_x = 350, // 圆心坐标
    // circle_y = 350,
    // circle_r = 200, // 半径
    // team_num = 30, // 小圆数目
    // colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];  //随机颜色组
    //加载布局模拟图
        loadTeams: function(cxt) {    
        cxt.beginPath();
        cxt.strokeStyle = 'green';
        cxt.arc(circle_x, circle_y, circle_r, 0, 2 * Math.PI);
        cxt.stroke();
        cxt.closePath();
        seating(cxt)
        //setInterval("seating(canvas.getContext('2d'))",1000);
        setInterval("this.seating(cxt)",1000);
        },
        //分配小圆座次
        seating :function (cxt) {
            var angle = 360 / team_num; //角度
            var team_x = 0, team_y = 0;
            var team_r = team_num < 20 ? 30 : Math.sqrt(circle_r * circle_r * 2 * (1 - Math.cos(changeRadian(angle)))) / 2;  
        //余弦定理  计算小圆的最大半径     BC²=AB²＋AC²－2×AB×AC×cosα  如果小圆数目小于20个，半径最大30（上限）
        for (var i = 0; i < team_num; i < i++) {
            team_x = circle_x + Math.sin(this.changeRadian(i * angle)) * circle_r;  //角度转弧度
            team_y = circle_y - Math.cos(this.changeRadian(i * angle)) * circle_r;
            cxt.beginPath();
            //cxt.strokeStyle = 'red';
            cxt.arc(team_x, team_y, team_r, 0, 2 * Math.PI);
            cxt.stroke();
            cxt.fillStyle = "rgb(0,102,153)";
            cxt.fillStyle = colors[ Math.floor( Math.random()*colors.length ) ];
            cxt.fill();
            //cxt.closePath();
            }
        },
    //x=358;
    //y=358;
    //drawLine(cxt,x,y);
    //setInterval(function(){
    //   x=x+1;
    //    y=y+1;
    //    drawLine(cxt,x,y);
    //},5);
    
//function drawLine(cxt,x,y) {
//    console.log(x+"---"+y);
//    //cxt.clearRect(0,0,1000,1000);
//    cxt.beginPath();
//    cxt.strokeStyle = "black";
//    cxt.lineWidth = 2;
//    cxt.moveTo(x, y);
//    cxt.lineTo(x+1,y+1);
//    cxt.stroke();
//    cxt.closePath();
//    //cxt.rotate((Math.PI/180)*15);
//}

        //角度转换为弧度
        changeRadian: function(angle){
            return Math.PI / 180 * angle;
        }
    },
    mounted:function(){      
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        this.loadTeams(context);     
    }
        
}
</script>
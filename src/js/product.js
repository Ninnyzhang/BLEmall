/**
 * Created by Administrator on 2016/10/3.
 */
$(function () {
    $("#main .right .txt").html("1");
    $("#main .right .add").click(function () {
        $("#main .right .txt").html(parseInt($("#main .right .txt").html()) + 1);
    });
    $("#main .right .reduce").click(function () {
        if($("#main .right .txt").html() == 0){
            return false;
        }
        $("#main .right .txt").html(parseInt($("#main .right .txt").html()) - 1);
    });
    //放大镜
    $("#main .left .smallImg").bind({
       mouseenter : function () {
           $("#main .left .big").fadeIn();
       },
       mousemove : function (e) {
           var x = e.offsetX - $(".move").width() / 2;
           var y = e.offsetY - $(".move").width() / 2;

           if(x >= this.offsetWidth - $(".move").width()){
               x = this.offsetWidth - $(".move").width();
           } else if(x <= 0){
               x = 0;
           }
           if(y >= this.offsetHeight - $(".move").height()){
               y = this.offsetHeight - $(".move").height();
           } else if(y <= 0){
               y = 0;
           }
           var bigW = $("#main .bigImg").width();
           var bigH = $("#main .bigImg").height();
           var smallW = $("#main .left .smallImg").width();
           var smallH = $("#main .left .smallImg").height();
           var imgX = - (bigW / smallW) * x;
           var imgY = - (bigH / smallH) * y;
           $(".move").css({
               "left": x + "px",
               "top": y + "px"
           });
           $(".bigImg").css({
               "left": imgX + "px",
               "top": imgY + "px"
           });
       },
        mouseleave : function () {
            $("#main .left .big").fadeOut();
        }
    });

    //添加购物车
    $("#main .right .car").click(function () {
        $.cookie.setAll("shop",{"shopName":$("#main .product .title").html(),"price":$("#main .right .red").html(),
            "num":$("#main .right .number .txt").html(),"img":$("#main .left .small img").attr("src")},getDate(7),"/")
    });

    //倒计时
    promote();
    setInterval(promote,1000);

    //打分
    $("#main .rank .li1 a").bind("click",function () {
        var num = null;
        if ( $(this).index() == 0 ) {
            num = "2.0" ;
        }else if ($(this).index() == 1 ) {
            num = "3.0" ;
        }else if($(this).index() == 2 ) {
            num = "4.0" ;
        }else if($(this).index() == 3 ) {
            num = "5.0" ;
        }
        $("#main .score span").html(num);
    });

    //评价列表切换
    $("#main .satisfied a").mouseenter(function () {
        $("#main .satisfied a").removeClass("a1").eq($(this).index()).addClass("a1");
    })
});
var time = (Date.parse("2016-10-10") - Date.parse(new Date())) / 1000;
function promote() {
    var d = Math.floor((time / 3600) / 24);
    var h = Math.floor((time - d * 24 * 3600) / 3600);
    var m = Math.floor((time - d * 24 * 3600 - h * 3600) / 60);
    var s = (time - h * 3600) % 60;
    // $("#main .title .day").html(d);
    // $("#main .title .hours").html(h);
    // $("#main .title .minutes").html(m);
    // $("#main .title .seconds").html(s);
    var html = "剩余时间" + d + "天" + h + "时" + m + "分" + s + "秒";
    $("#main .right .time").html(html);
    time--;
}

function getDate(num){
    var d = new Date();
    var ms = 24 * 60 * 60 * 1000 * num + d.getTime();
    return new Date(ms);
}
/**
 * Created by Administrator on 2016/9/28.
 */
var i = 0 ;
$(function () {
    //搜索框显示
    $("#search .txt").focus(function () {
        $("#search .form dl").show();
    });
    $("#search .txt").blur(function () {
        $("#search .form dl").hide();
    })
    setTimeout(function () {
        $("#nav .nav img").hide();
    },3000);
    //轮播图
    $("#nav .img img").eq(0).fadeToggle();
    $("#nav .img-bottom li").eq(0).css("background","#666");
    interval();
    $("#nav .img").bind({
        mouseenter : function () {
            $("#nav .img div").animate({"opacity":"0.8"},1000);
        },
        mouseleave : function () {
            $("#nav .img div").animate({"opacity":"0"},1000);
        }
    });
    $("#nav .img div").bind("click",function () {
        clearInterval(timer);
        if($(this).index() == 0){
            i <= 0 ? i = 7 : i--;
        }else{
            i >= 7 ? i = 0 : i++;
        }
        $("#nav .img img").fadeOut().eq(i).fadeToggle();
        $("#nav .img-bottom li").css("background","#ccc").eq(i).css("background","#666")
        interval();
    });
    $("#nav .img-bottom li").bind("mouseover",function () {
        clearInterval(timer);
        i = $(this).index();
        $("#nav .img img").fadeOut().eq(i).fadeToggle();
        $("#nav .img-bottom li").css("background","#ccc").eq(i).css("background","#666")
        interval();
    });
    //二级菜单
    $("#nav .left").bind({
        mouseenter : function () {
            $("#nav .left .message").show();
            $("#nav .left li").bind("mouseenter",function () {
                $("#nav .left .message h3").html("");
                $("#nav .left .message a").html("");
                $("#nav .left .message h3").html(leftTitle[$(this).index()]);
                $("#nav .left .message a").html(leftTxt[$(this).index()]);
            })
        },
        mouseleave : function () {
            $("#nav .left .message").hide();
        }
    });
    //计时器
    getDate();
    setInterval(getDate,100);
    //列表切换
    $("#main .title li").bind("mouseenter",function () {
        if(!$(this).hasClass("li1")){
            $("#main .title li").removeClass("li2");
            $(this).addClass("li2");
        }
    })
});
function interval(str) {
    timer = setInterval(function () {
        if(i == 7){
            i = 0 ;
        }else{
            i++;
        }
        $("#nav .img img").fadeOut().eq(i).fadeToggle();
        $("#nav .img-bottom li").css("background","#ccc").eq(i).css("background","#666")
    },3000)
};

function getDate() {
    var d = new Date();
    var hours = 24 - d.getHours() >= 10 ?  d.getHours() : "0" + d.getHours();
    var minutes = 60 - d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
    var seconds = 60 - d.getSeconds() >= 10 ? d.getSeconds() : "0" + d.getSeconds();
    hours = 24 - hours;
    minutes = 60 - minutes;
    seconds = 60 - seconds;
    $("#nav .center .li2 .hour").html(hours);
    $("#nav .center .li2 .minutes").html(minutes);
    $("#nav .center .li2 .second").html(seconds);
}

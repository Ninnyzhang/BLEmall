/**
 * Created by Administrator on 2016/9/28.
 */
var i = 0 ;
$(function () {
    //广告
    $(".adver").animate({"height":"90"},1000);
    setTimeout(function () {
        $(".adver").animate({"height":"0"},1000);
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
    setInterval(time,100);
    //列表切换
    $("#main .title li").bind("mouseenter",function () {
        if(!$(this).hasClass("li1")){
            $("#main .title li").removeClass("li2");
            $(this).addClass("li2");
        }
    });
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
}
function time() {
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
$("#floorNav ul li").not(".last").hover(function() {
    //鼠标滑上去
    $(this).addClass("hover");
}, function() {
    //鼠标移开
    $(this).removeClass("hover");
});
//鼠标点击
var mark = 1;
$("#floorNav ul li").not(".last").click(function() {
    mark = 2; //改变标记
    $("#floorNav ul li").find("span").removeClass("active");
    $(this).find("span").addClass("active");
    //点击左边导航 然后跳到指定的楼层
    var $index = $(this).index(); //找到了对应的序列号
    var $top = $("#main .floor").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
    $("body,html").animate({
        scrollTop: $top
    }, 500, function() {
        mark = 1;
    }); //浏览器滚动的高度
});
//浏览器串口滚动事件
$(window).scroll(function() {
    if (mark == 1) {
        var $t = $(this).scrollTop(); //获取滚动条滚动的高度
        if ($t > 1000) { //通过滚动条来判断
            $("#floorNav").fadeIn(); //淡入 导航慢慢显示出来
        } else {
            $("#floorNav").fadeOut(); //淡出 导航慢慢消失
        }
        var $obj = $("#main .floor");
        //循环每一个Louti 然后找到最先满足条件的那个 Louti
        $obj.each(function() {
            var $index = $(this).index();
            //楼层与浏览器上面的高度
            var $height = $obj.eq($index).offset().top + $(this).height() / 2;
            if ($t < $height) {
                $("#floorNav ul li").find("span").removeClass("active")
                $("#floorNav ul li").eq($index).find("span").addClass("active");
                return false;
            }
        });
    }
});
//点击 Top按钮 跳转到浏览器顶部
$("#floorNav ul li.last").click(function() {
    $("body,html").animate({
        scrollTop: 0
    }, 0, function() {
        mark = 1;
    });
});
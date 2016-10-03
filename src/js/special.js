/**
 * Created by Administrator on 2016/10/2.
 */
$(function () {
    setTimeout(function () {
        $("#nav .nav img").hide();
    },3000);

    $("#nav .classify a").bind("mouseenter",function () {
        $("#nav .classify a").css("background","none");
        $(this).css("background","url(../images/special/nav-bg.jpg)no-repeat center bottom");
    });


    setInterval(promote,1000);

});
var date = new Date();
var time = (Date.parse("2016-10-10") - Date.parse(date)) / 1000;
function promote() {
    var d = Math.floor((time / 3600) / 24);
    var h = Math.floor((time - d * 24 * 3600) / 3600);
    var m = Math.floor((time - d * 24 * 3600 - h * 3600) / 60);
    var s = (time - h * 3600) % 60;
    // $("#main .title .day").html(d);
    // $("#main .title .hours").html(h);
    // $("#main .title .minutes").html(m);
    // $("#main .title .seconds").html(s);
    var html = "剩余" + d + "天" + h + "时" + m + "分" + s + "秒";
    $("#main .time h1").html(html);
    time--;
}
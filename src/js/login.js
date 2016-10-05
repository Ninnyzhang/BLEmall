/**
 * Created by Administrator on 2016/10/1.
 */
var userName = "";
var pwd = "";
$(function () {
    $(".form input").val("");
    //随机产生验证码
    $(".form .random").html(random());
    //重新生成验证码
    $(".form .random").click(function () {
        $(".form .random").html(random());
    });
    //验证登录信息
    $(".form input").blur(function () {
        if($(this).hasClass("uName")){
            userName = $.cookie.getSub($(this).val(),"uName");
            console.log(typeof userName);
        }else if($(this).hasClass("pwd")){
            pwd = $.cookie.getSub(userName,"pwd");
        }
    });

    $(".form .btn").click(function () {
        if($(".form .pwd").val() == pwd && $(".form .verify").val() == $(".form .random").html()){
            alert("登陆成功");
            $.cookie.setAll("login",{"user":userName},getDate(7),"/");
            window.location.replace("index.html");
        }else{
            alert("用户名密码错误");
        }
    })
});
function random() {
    var str = "";
    while(str.length < 4){
        var num = Math.random() * 76 + 48;
        if (num >= 48 && num <= 57) {
            str += String.fromCharCode(num);
        } else if (num >= 65 && num <= 91) {
            str += String.fromCharCode(num);
        } else if (num >= 97 && num <= 123) {
            str += String.fromCharCode(num);
        }
    }
    return str;
}

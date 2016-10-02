/**
 * Created by Administrator on 2016/10/1.
 */
var flag = null;
$(function () {
    //随机产生验证码
    $(".form .random").html(random());
    //重新生成验证码
    $(".form .random").click(function () {
        $(".form .random").html(random());
    });
    //验证登录信息
    $(".form input").blur(function () {
        if($(this).hasClass("uName")){
            var userName = $.cookie.getSub($(this).val(),"uName");
            userName == undefined ? flag = true : flag = false;
        }else if($(this).hasClass("pwd")){
            var pwd = $.cookie.getSub($(".form .uName").val(),"pwd");
            $(this).val() == pwd ? flag = true : flag = false;
        }else if($(this).hasClass("verify")){
            $(this).html() == $(".form .random").val() ? flag = true : flag = false;
        }
    });

    $(".form .btn").click(function () {
        if(flag && $(".checkbox input:selected")){
            alert("登陆成功");
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
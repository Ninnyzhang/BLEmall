/**
 * Created by Administrator on 2016/9/30.
 */
var regName = /^[a-z0-9_-]{6,16}$/;
var regPwd = /^[a-z0-9_-]{6,18}$/;
var regEmail = 	/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var reg =  null;
var i = 0 ;
$(function () {
    //随机产生验证码
    $(".message .random").html(random());
    //表单验证
    $(".message input").blur(function () {
        if($(this).hasClass("uName")){
            reg = regName;
            if($.cookie.getSub($(this).val(),"uName") == undefined){
                regTest(this);
            }else{
                $(this).css("background","url(../images/register/false.png)no-repeat right center");
            }
        }else if($(this).hasClass("pwd")){
            reg = regPwd;
            regTest(this);
        }else if($(this).hasClass("email")){
            reg = regEmail;
            regTest(this);
        }else if($(this).hasClass("Pwd")){
            if($(this).val() == $(".message .pwd").val() && $(this).val() != ""){
                $(this).css("background","url(../images/register/true.png)no-repeat right center");
                i++;
            }else{
                $(this).css("background","url(../images/register/false.png)no-repeat right center");
            }
        }else if($(this).hasClass("verify")){
            if($(this).val() == $(".message .random").html() && $(this).val() != ""){
                $(this).css("background","url(../images/register/true.png)no-repeat right center");
                i++;
            }else{
                $(this).css("background","url(../images/register/false.png)no-repeat right center");
            }
        }
    });
    //重新生成验证码
    $(".message .btn").click(function () {
        $(".message .random").html(random());
    });
    //提交注册信息
    $(".message .register").click(function () {
        if(i == 5 && $(".message .bottom input:selected")){
            $.cookie.setAll($(".uName").val(),{"uName":$(".uName").val(),"pwd":$(".pwd").val()},getDate(7),"/");
            alert("注册成功");
        }else{
            alert("注册信息有误");
        }
    })
});

function regTest(obj) {
    if(reg.test($(obj).val()) && $(obj).val()!= "" ){
        $(obj).css("background","url(../images/register/true.png)no-repeat right center");
        i++;
    }else{
        $(obj).css("background","url(../images/register/false.png)no-repeat right center");
    }
}

function getDate(num){
    var d = new Date();
    var ms = 24 * 60 * 60 * 1000 * num + d.getTime();
    return new Date(ms);
}

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

/**
 * Created by Administrator on 2016/10/4.
 */
var str = "";
var key = "";
var value = "";
var flag = false;
$(function () {
    // if($.cookie.getAll("login")){
    //     $("#header a").eq(0).html($.cookie.getSub("login","user"));
    //     $("#header a").eq(1).addClass("exit").html("退出登录");
    // }
    //
    // if($("#header a").eq(1).hasClass("exit")){
    //     $("#header a").eq(1).click(function () {
    //      $("#header a").eq(1).addClass("exit").html("免费注册");
    //         $.cookie.setAll("login","",new Date(0),"/");
    //         location.reload();
    //     })
    // }
    //购物车
    if( $.cookie.get("login") == "undefined" ){
        alert("请登录");
    }else{
        key = $.cookie.getSub("login","user") + "shop";
        if($.cookie.get(key) == "undefined"){
            $("#main .none").show();
            return false;
        };
        for(var i in $.cookie.getAll(key)){
            str += $.cookie.getAll(key)[i];
        };
        value = str ;
        $("#main .car").show();
        str = str.split("&");
        for(var i = 0 ; i < str.length ; i++){
            var val = str[i].split(":");
            switch(val[0]){
                case "name" : $("#main .name").html(val[1]); break;
                case "price" : $("#main .price").html(val[1]); break;
                case "num" : $("#main .num .txt").html(val[1]); break;
                case "img" : $("#main .img img").attr("src",val[1]); break;
            }
        }
    };
    //删除
    $("#main .car .remove").click(function () {
        $.cookie.setAll(key,"",new Date(0),"/");
        location.reload();
    });
    //数量变化
    $("#main .add").click(function () {
        $("#main .txt").html(parseInt($("#main .txt").html()) + 1);
        cookieChange();
        Sum(flag);
    });
    $("#main .reduce").click(function () {
        if($("#main .txt").html() == 1){
            return false;
        }
        $("#main .txt").html(parseInt($("#main .txt").html()) - 1);
        cookieChange(this);
        Sum(flag);
    });
    //全选
    $("#main .all").change(function () {
        if($(this).attr("checked")){
            $("#main input").attr("checked","checked");
        }else{
            $("#main input").removeAttr("checked");
        }
    });
    //总计
    $("#main table input").not(".all").bind("click",function () {
        if($(this).attr("checked")){
            flag = true;
            Sum(flag);
        }else{
            flag = false;
            Sum(flag);
        }
    })
});

function cookieChange(obj) {
    value = value.split("num")[0] + "num:" + $("#main .txt").html();
    $.cookie.setAll(key,value,getDate(7),"/");
}

function Sum(flag) {
    var sum = parseInt($("#main .price").html().split("￥")[1]) * parseInt($("#main .num .txt").html());
    if(!flag){
        $("#main .cart span").html("");
        return false;
    }
    $("#main .cart span").html(sum);
}

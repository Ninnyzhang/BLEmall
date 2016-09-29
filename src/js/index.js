/**
 * Created by Administrator on 2016/9/28.
 */
var i = 0 ;
var search1 = ["0元试用","特色中国","乔家栅重阳糕","重阳糕","卡西欧","膳魔师","德运","洗面奶","耳机"];
var search2 = ["连衣裙","四件套","短裤","女鞋","墙纸","短裤","男鞋","奶粉","饮料"];
var search3 = ["打底衫","大闸蟹","蓝牙耳机","文胸","冲锋衣","女包","衬衫","零食","吹风机"];
var leftTitle = ["手机","数码","家电","黄金","名酒","母婴用品","图书商城","全球购","家居建材","个人护理","厨卫清洁","精品百货"
    ,"生活日用","每日通贩","入驻商户","票务保险","生活缴费"];
var leftTxt = ["手机配件","电脑整机","平板电视","收藏金银","粮油干货","寝具服饰","图书商城","全球购","家居建材","个人护理"
    ,"厨卫清洁","精品百货","办公劳防","每日通贩","入驻商户","机票旅游","生活缴费"]
$(function () {
    //切换
    $("#search .form span").eq(0).addClass("click");
    $("#search .form span").bind("click",function () {
        $("#search .ul a").html("");
        $("#search .form span").removeClass().eq($(this).index()).addClass("click");
        if($(this).index() == 0){
            str = search1;
        }else if($(this).index() == 1){
            str = search2;
        }else{
            str = search3;
        }
        for(var x = 0; x < str.length ; x++){
            $("#search .ul a").eq(x).html(str[x]);
        }
    });
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
    $("#nav .img-bottom li").bind("click",function () {
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
}

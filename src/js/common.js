/**
 * Created by Administrator on 2016/9/28.
 */
var search1 = ["0元试用","特色中国","乔家栅重阳糕","重阳糕","卡西欧","膳魔师","德运","洗面奶","耳机"];
var search2 = ["连衣裙","四件套","短裤","女鞋","墙纸","短裤","男鞋","奶粉","饮料"];
var search3 = ["打底衫","大闸蟹","蓝牙耳机","文胸","冲锋衣","女包","衬衫","零食","吹风机"];
var leftTitle = ["手机","数码","家电","黄金","名酒","母婴用品","图书商城","全球购","家居建材","个人护理","厨卫清洁","精品百货"
    ,"生活日用","每日通贩","入驻商户","票务保险","生活缴费"];
var leftTxt = ["手机配件","电脑整机","平板电视","收藏金银","粮油干货","寝具服饰","图书商城","全球购","家居建材","个人护理"
    ,"厨卫清洁","精品百货","办公劳防","每日通贩","入驻商户","机票旅游","生活缴费"]

$("#header ul li").has("dl").bind({
    mouseenter: function () {
        $(this).find("dl").show();
    },
    mouseleave:function () {
        $(this).find("dl").hide();
    }
});
setTimeout(function () {
    $("#nav .nav img").hide();
},3000);
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
//搜索框
$.widget( "custom.catcomplete", $.ui.autocomplete, {
    _create: function () {
        this._super();
        this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function (ul, items) {
        var that = this,
            currentCategory = "";
        $.each(items, function (index, item) {
            var li;
            if (item.category != currentCategory) {
                ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                currentCategory = item.category;
            }
            li = that._renderItemData(ul, item);
            if (item.category) {
                li.attr("aria-label", item.category + " : " + item.label);
            }
        });
    }
});
var data = [
    { label: "anders", category: "" },
    { label: "andreas", category: "" },
    { label: "antal", category: "" },
    { label: "annhhx10", category: "Products" },
    { label: "annk K12", category: "Products" },
    { label: "annttop C13", category: "Products" },
    { label: "anders andersson", category: "People" },
    { label: "andreas andersson", category: "People" },
    { label: "andreas johnson", category: "People" }
];

$( "#search .txt" ).catcomplete({
    delay: 0,
    source: data
});

function getDate(num){
    var d = new Date();
    var ms = 24 * 60 * 60 * 1000 * num + d.getTime();
    return new Date(ms);
}
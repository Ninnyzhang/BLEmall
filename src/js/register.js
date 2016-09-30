/**
 * Created by Administrator on 2016/9/30.
 */
var regName = /^[a-z0-9_-]{6,16}$/;
var regPwd = /^[a-z0-9_-]{6,18}$/;
var regEmail = 	/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
$(function () {
    $("input").focus(function () {
        // console.log(this.index);
        // console.log($("input").eq($(this).index()-1));
        // if( regName.test($(this).val()) && $(this).val()!= "" ){
        //     $(".message img").eq($(this).index()-1).attr("src","../images/register/true.png");
        // }else{
        //     $(".message img").eq($(this).index()-1).attr("src","../images/register/false.png");
        // }
    });
    // $("input").blur(function () {
    //     console.log($(this).index());
    //     if( regPwd.test($(this).val()) && $(this).val()!= "" ){
    //         $(".message img").eq($(this).index()).attr("src","../images/register/true.png");
    //     }else{
    //         $(".message img").eq($(this).index()).attr("src","../images/register/false.png");
    //     }
    // })
    console.log($("input").eq(4));
});

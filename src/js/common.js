/**
 * Created by Administrator on 2016/9/28.
 */
$("#header ul li").has("dl").bind({
    mouseenter: function () {
        $(this).find("dl").show();
    },
    mouseleave:function () {
        $(this).find("dl").hide();
    }
});


/**
 * Created by acer on 2017/10/6.
 */

$(function () {
    //调用扫描二维码的动画函数
    line_move(".line","-7px","90px");

    //二维码显示
    $(".erweima").hover(function () {
        $(".erweima_box").css("display","block")
    },function () {
        $(".erweima_box").css("display","none")
    })



    //扫描二维码的动画函数
    function line_move(y,from,to) {
        var $y = $(y).css("top");
        if($y==from){
            $(y).stop().animate({top:to},1500,"linear",function () {
                $(y).stop().animate({top:from},1500,"linear")
            });
        }
        clearInterval(timeId)
        var timeId = setInterval(function () {
            if($y==from){
                $(y).stop().animate({top:to},1500,"linear",function () {
                    $(y).stop().animate({top:from},1500,"linear")
                });
            }
        },3000);
    }

    //点击main_hd的下一页按钮
    $(".main_hd .next_page").click(function () {
        $("html,body").stop().animate({scrollTop:970})
    })
});


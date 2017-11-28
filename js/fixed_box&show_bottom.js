/**
 * Created by acer on 2017/10/7.
 */
$(function () {
    var timeId = null;
    $(".fixed_box span").hover(function () {
        line_move(".fixed_box span","-25px","-40px");
    },function () {
        clearInterval(timeId);
        $(".fixed_box span").css("top","-25px");
    })
    function line_move(y,from,to) {
        var $y = $(y).css("top");
        if($y==from){
            $(y).stop().animate({top:to},500,"linear",function () {
                $(y).stop().animate({top:from},500,"linear")
            });
        }
        clearInterval(timeId)
        timeId = setInterval(function () {
            if($y==from){
                $(y).stop().animate({top:to},500,"linear",function () {
                    $(y).stop().animate({top:from},500,"linear")
                });
            }
        },1000);
    }

    $(".fixed_box").click(function () {
        $(this).stop().animate({right:-390},400);
        $(".show_bottom").stop().animate({bottom:0},400);
    })
    $(".show_bottom .banxin .close").click(function () {
        $(".show_bottom").stop().animate({bottom:-260},400);
        $(".fixed_box").stop().animate({right:0},400)
    })

    $(".show_bottom .banxin .show_btn").hover(function () {
        $(".show_bottom .banxin .show_btn .back").stop().animate({width:168},500);
    },function () {
        $(".show_bottom .banxin .show_btn .back").stop().animate({width:0},500);
    })

});
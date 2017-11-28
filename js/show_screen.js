/**
 * Created by acer on 2017/10/8.
 */
$(function () {
    $(".show_screen .client .system .left").click(function () {
            $(".show_screen .client .system .left div").addClass("checked");
            $(".show_screen .client .system .right div").removeClass("checked");
    });

    $(".show_screen .client .system .right").click(function () {
        $(".show_screen .client .system .right div").addClass("checked");
        $(".show_screen .client .system .left div").removeClass("checked");
    })

    $(".show_screen .client .confirm").hover(function () {
        $(".show_screen .client .confirm .back").stop().animate({width:366},500);
    },function () {
        $(".show_screen .client .confirm .back").stop().animate({width:0},500);
    })

    $(".show_bottom .banxin .show_btn").click(function () {
        $(".show_screen").css("display","block")
    })

    $(".show_screen .close_line .x").click(function () {
        $(".show_screen").css("display","none")
    })
});
/**
 * Created by acer on 2017/10/7.
 */
$(function () {
    // var side = ["./images/main_bottom/bjez-0_673adfb.png",
    //     "./images/main_bottom/td-0_6967a5b.png",
    //     "./images/main_bottom/jssj-0_51af960.png",
    //     "./images/main_bottom/mrwt-0_d148ecb.png",
    //     "./images/main_bottom/sczl-0_04a0587.png"
    // ];
    var a = 4;
    var b =a;
    var move = function () {
        $(".main_bottom .left_box .pic").eq(a).stop().animate({opacity:1},200).siblings().stop().animate({opacity:0},200);
        $(".main_bottom .right_box .pic").eq(a).stop().animate({opacity:1},200).siblings().stop().animate({opacity:0},200);
        $(".main_bottom .center_box .pic").eq(a).stop().animate({opacity:1},200).siblings().stop().animate({opacity:0},200);
        $(".main_bottom .move_left .word").eq(a).siblings().stop().css("left","-672px");
        $(".main_bottom .move_left .word").eq(a).stop().animate({left:0},200,function(){
            $(".main_bottom .move_left .word").eq(a).animate({left:-20},200,function () {
                $(".main_bottom .move_left .word").eq(a).animate({left:0},100);
            })
        })
            // .animate({left:-20},200).animate({left:0},100);
        $(".main_bottom .move_right .people").eq(a).siblings().stop().css("right","-836px");
        $(".main_bottom .move_right .people").eq(a).stop().animate({right:0},200,function () {
            $(".main_bottom .move_right .people").eq(a).animate({right:-20},200,function () {
                $(".main_bottom .move_right .people").eq(a).animate({right:0},100);
            })
        })
    };
    $(".main_bottom .prev").click(function () {
        // if(a>0){
        //     a--;
        //     move();
        // }else{
        //     a=4;
        //     move();
        // }
        if(a==4){
            a=0;
            $(".main_bottom .point li").eq(a).addClass("point_ab").siblings().removeClass("point_ab");
            move();
        }else{
            a++;
            $(".main_bottom .point li").eq(a).addClass("point_ab").siblings().removeClass("point_ab");
            move();
        }
    })
    $(".main_bottom .next").click(function () {
        // if(a<4){
        //     a++;
        //     move();
        // }else{
        //     a=0;
        //     move();
        // }
        if(a==0){
            a=4;
            $(".main_bottom .point li").eq(a).addClass("point_ab").siblings().removeClass("point_ab");
            move();
        }else{
            a--;
            $(".main_bottom .point li").eq(a).addClass("point_ab").siblings().removeClass("point_ab");
            move();
        }
    })

    $(".main_bottom .point li").eq(a).addClass("point_ab");
    $(".main_bottom .point li").click(function () {
        a =$(this).index();
        b =$(this).index();
        console.log(a)
        $(this).addClass("point_ab").siblings().removeClass("point_ab");
        move()
    })
    $(".main_bottom .point li").hover(function () {
        $(this).removeClass("point_mie").addClass("point_liang").siblings().removeClass("point_liang").addClass("point_mie");
    },function () {
        $(".main_bottom .point li").removeClass("point_liang").addClass("point_mie")
    })
});
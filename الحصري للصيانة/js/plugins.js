
$(document).ready(function () {

    "use strict";

    // Nice Scroll

    $("html").niceScroll();
    $("body").niceScroll({
        cursorcolor: "#0075ff",
        cursorwidth: "10px"
    });

    // carousel

    $('.carousel').carousel({

        interval: 6000

    });

    // scroll to top

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 700) {

            $(".scroll-top").fadeIn("slow");
        } else {
            $(".scroll-top").fadeOut("slow");
        };


    });
    $(".scroll-top").click(function () {

        $("html,body").animate({ scrollTop: 0 }, 600)
    }
    );

    // hover in section features




    $(".features .box-img  .opacity").hover(function () {
        $(this).css("backgroundColor", "rgba(0, 0, 0, 0.9)");
    }, function () {
        $(this).css("backgroundColor","");

    });
    $(".why-us .boxs .box .opacity").hover(function () {
        $(this).css("backgroundColor", "rgba(228, 144, 19, 0.87)");
    }, function () {
        $(this).css("backgroundColor","");

    });

   

})
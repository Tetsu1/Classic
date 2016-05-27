/*global $, console, alert*/

$(function () {
   
    "use strict";
    
    $("header").height($(window).height());
    
    $(window).resize(function () {
       
        $("header").height($(window).height());
        
        $("header ul").css("paddingTop", ($(window).height() - $("header ul li").height()) / 2);

    });
    
    $("nav ul li a").click(function () {
       
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    $("header ul").css("paddingTop", ($(window).height() - $("header ul li").height()) / 2);
        
    // Trigger Slide 
    
    $('.bxslider').bxSlider();
    
    // Start Smooth Scroll Links 
    
    $("nav ul li a").click(function () {
       
        $("html, body").animate({
           
            scrollTop: $("#" + $(this).data("link")).offset().top
            
        }, 1000);
        
    });
    
    // Testimonials Slider 
    
    (function autoSlider() {
        
        $(".slider .active").each(function () {
            
            if (!$(this).is(":last-child")) {
               
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                   
                    autoSlider();
                   
                });
               
            } else {
                
                $(this).delay(3000).fadeOut(1000);
                
                $(this).removeClass("active");
               
                $(".slider > div").eq(0).addClass("active").fadeIn(1000);
               
                autoSlider();
            }
            
        });
        
    }());
    
    $('#Container').mixItUp();
    
    $(".projects ul li").click(function () {
       
        $(this).addClass("selected").siblings().removeClass("selected");
        
    });
    
    $("html").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "20px",
        cursorborder: "1px solid #1abc9c",
        cursorborderradius: 0
    });
    
    
});

















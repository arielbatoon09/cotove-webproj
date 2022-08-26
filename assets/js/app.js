$(function(){
    $(".hamburger").click(function(){
        $('.hamburger').toggleClass('active');
    });
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
            $('nav').removeClass('stick');
        }
        else{
            $('nav').addClass('stick');
        }
    });
});

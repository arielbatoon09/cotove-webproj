$(function(){
    $(".hamburger").click(function(){
        $('.hamburger').toggleClass('active');
    });

    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
            $('.bar').addClass('hambuger-scrolled');
            $('nav').addClass('stickyadd');
            $('nav').removeClass('stick');
        }
        else{
            $('.bar').removeClass('hambuger-scrolled');
            $('nav').removeClass('stickyadd');
            $('nav').addClass('stick');
        }
    });

    particlesJS.load('particles-js', 'assets/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

});

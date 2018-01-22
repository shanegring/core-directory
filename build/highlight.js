

// Fixed Nav
jQuery(document).ready(function ($) {
    $(window).scroll(function(){
        var scrollTop = 142;
        if($(window).scrollTop() >= scrollTop){
            $('nav').css({
                position : 'fixed',
                top : '0'
            });
        }
        if($(window).scrollTop() < scrollTop){
            $('nav').removeAttr('style');   
        }
    })
  
  // Active Nav Link
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });
})


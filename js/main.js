$(function(){
    /**  easing plugin **/
        $('.mainmenu ul li a,.arrow').bind('click', function(event) {
        var $anchor=$(this);
        $('html, body').stop().animate( {
            scrollTop: $($anchor.attr('href')).offset().top
        }
        , 1500, 'easeInOutExpo');
        event.preventDefault();
    }
    );
           /**  easing plugin **/
    $("html").niceScroll();
    
    new WOW().init();
     

})


    
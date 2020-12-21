
jQuery(function ($) {
    $(document).ready(function () {
        $('.show-user-dropdown').click( function(){
            if($('.dropdown-user').is(':visible')){
                $('.dropdown-user').fadeOut(300)
            }
            else {
                $('.dropdown-user').fadeIn(300)
            }
        });
        
        $(document).click(function(event) { 
            var $target = $(event.target);
            if(!$target.closest('.show-user-dropdown').length && 
            $('.dropdown-user').is(':visible')){
                $('.dropdown-user').fadeOut(300)
            }        
            if($( window ).width() < 769){
                if((!$target.closest('.toggle-sidebar').length && !$target.closest('.sidebar').length) && 
                $('.content').hasClass('full-width')){
                    $('.toggle-sidebar').click()
                }  
            }
        });
        $('.dropdown-level').click( function(){
            if($(this).parents('li').hasClass('active')){
                $(this).parents('li').removeClass('active');
                $(this).parents('li').find('.second-level').css('height', '0px');
            }
            else {
                $('.sidebar-nav li').removeClass('active');
                $('.sidebar-nav li .second-level').css('height', '0px');
                $(this).parents('li').addClass('active');
                $(this).parents('li').find('.second-level').css('height', 'auto');
            }
        });
        $('.toggle-sidebar').click( function(){
            $('.sidebar').toggleClass('hide');
            $('.header').toggleClass('full-width');
            $('.content').toggleClass('full-width');
        });
        $('.accordeon').on('click', '.accordeon-header', function(e){
            if($(this).parents('.accordeon-block').hasClass('active')){
                $(this).parents('.accordeon-block').removeClass('active');
                $(this).parents('.accordeon-block').find('.accordeon-content').fadeOut(300);
            }
            else {
                $('.accordeon').find('.accordeon-block').removeClass('active');
                $('.accordeon').find('.accordeon-block .accordeon-content').fadeOut(0);
                $(this).parents('.accordeon-block').addClass('active');
                $(this).parents('.accordeon-block').find('.accordeon-content').fadeIn(300);
                var topScroll =  $(this).parents('.accordeon-block').find('.accordeon-content').offset().top - 150;
                $('html, body').animate({
                    scrollTop: topScroll
                  }, 800);
                // $(this).parents('.accordeon-block').find('.accordeon-content')[0].scrollIntoView({block: "start", behavior: "smooth"});
            }
        });
    });
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
});
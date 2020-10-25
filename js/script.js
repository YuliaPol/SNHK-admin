
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
'use strict';

(function () {
    $(document).on('ready',function () {
        $('.sliderTop').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrow: true,
            fade: true,
            cssEase: 'linear'
        });

        $('.slider2').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrow: true,
            fade: true,
            cssEase: 'linear'
        });

        $('.slider3').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrow: true,
            fade: true,
            cssEase: 'linear'
        });
        

    });

    $('.slideClickLeft').on('click', function (event) {
        var indexElem = $(this).index();
        var indexSlide = $('.slideClick').index();
        var dotsActive = $('.slick-dots').find('.slick-active').index();
        console.log(dotsActive)
        $('.slick-dots').children('li').eq(indexElem).trigger( "click" );

    });
})();
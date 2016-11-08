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
            dots: false,
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
})();
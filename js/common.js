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
        $('.slideClickLeft').on('click', function (event) {
            var indexElem = $(this).index();
            var indexSlide = $('.slideClick').index();

            $('.slideClickLeft').removeClass('activeSlide2');
            $(this).addClass('activeSlide2');
            $('.slider2').find('.slick-dots').children('li').eq(indexElem).trigger( "click" );
        });

        $('.slider2').find('.slick-next').on('click', function (event) {
            resetClassActiveSlider2();
        });
        $('.slider2').find('.slick-prev').on('click', function (event) {
            resetClassActiveSlider2();
        });
        function resetClassActiveSlider2() {
            setTimeout(function () {
                $('.slideClickLeft').removeClass('activeSlide2');
                //console.log($('.slider2').find('.slick-track').children('.slick-active').children('div').css('background-image'));
                $('.slideClickLeft').eq($('.slider2').find('.slick-track').children('.slick-active').attr('data-slick-index')).addClass('activeSlide2');
            },500);
        };

    });


})();
(function ($) {
    "use_strict";
    // meanmenu active
    jQuery('#tj-mobile-menu').meanmenu({
        meanMenuContainer: '.tj-mobile-menu-pos',
        meanScreenWidth: "992"
    });
    $('.tj-sidebar-action').on('click', function () {
        $('.tj-side-info').addClass('tj-side-info-open')
        $('.offcanvas-overlay').addClass('offcanvas-overlay-open')
    });
    $('.tj-side-info-close').on('click', function () {
        $('.tj-side-info').removeClass('tj-side-info-open')
        $('.offcanvas-overlay').removeClass('offcanvas-overlay-open')
    });
    $('.offcanvas-overlay').on('click', function () {
        $('.tj-side-info').removeClass('tj-side-info-open')
        $('.offcanvas-overlay').removeClass('offcanvas-overlay-open')
    });

    //portfolio popup  
    $('.portfolio-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: ' <button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
    // counter js 
    $('.tj-funfact__number').counterUp({
        delay: 10,
        time: 1000
    });

})(jQuery);
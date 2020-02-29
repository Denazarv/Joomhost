$(function () {

    $('.reviews-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        speed: 700,
        responsive:[
            {
                breakpoint: 1106,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.btn_menu').on('click', function () {
        $('.menu__list').slideToggle();
    })

});
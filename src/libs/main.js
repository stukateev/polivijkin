$(function (){
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',

    });

    $('.advantages').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,


    })
})
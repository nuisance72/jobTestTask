$('.mySlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    appendDots: $('.dots'),
    prevArrow: '.button__left',
    nextArrow: '.button__right'
});
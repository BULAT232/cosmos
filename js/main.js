$(function(){
    $('.slider__box').slick({
        prevArrow: '<img src="img/arrow-left.svg" alt="" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="img/arrow-right.svg" alt="" class="slider__arrow slider__arrow-right">',
    });


    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });

});
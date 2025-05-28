$(document).ready(function() {
    // управление слайдером
    $('.carousel .next').click(function() {
        let carousel = $(this).closest('.carousel'), activeSlide = carousel.find('.carousel-item.active');
        if (carousel.find('.carousel-item').length > 1) {
            activeSlide.toggleClass('active');
            if (activeSlide.next().length > 0) activeSlide.next().toggleClass('active');
            else activeSlide.siblings('.carousel-item').first().toggleClass('active');
        }
    });
    $('.carousel .prev').click(function() {
        let carousel = $(this).closest('.carousel'), activeSlide = carousel.find('.carousel-item.active');
        if (carousel.find('.carousel-item').length > 1) {
            activeSlide.toggleClass('active');
            if (activeSlide.prev().length > 0) activeSlide.prev().toggleClass('active');
            else activeSlide.siblings('.carousel-item').first().toggleClass('active');
        }
    });
});
$(document).ready(function() {
    // управление слайдером
    $('.tab-panels .next').click(function () {
        let tabs = $(this).closest('.tab-panels'), active = tabs.find('.show');
        if (tabs.find('.tab').length > 1) {
            active.toggleClass('show');
            if (active.next().length > 0) active.next().toggleClass('show');
        }
    });
    $('.tab-panels .prev').click(function () {
        let tabs = $(this).closest('.tab-panels'), active = tabs.find('.show');
        if (tabs.find('.tab').length > 1) {
            active.toggleClass('show');
            if (active.prev().length > 0) active.prev().toggleClass('show');
        }
    });
});
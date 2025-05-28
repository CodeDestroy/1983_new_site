$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $('.navbar-burger').click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });
    $('.delete').click(function () {
        $(this).closest('.block').remove();
    });
    // Modals
    // Add a click event on buttons to open a specific modal
    $('.js-modal-trigger').click(function () {
        $(`#${this.dataset.target}`).addClass('is-active');
        return false;
    })
    // Add a click event on various child elements to close the parent modal
    $('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').click(modalClose);
});
$(document).on('keydown', (event) => {
    if (event.key === "Escape") $('.modal').removeClass('is-active');
});

function modalClose() {
    $('.modal').removeClass('is-active');
}
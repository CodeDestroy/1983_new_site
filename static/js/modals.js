$(document).ready(function() {
    // Add a click event on buttons to open a specific modal
    $('.js-modal-trigger').click(function () {
        $(`#${this.dataset.target}`).addClass('is-active');
    })
    // Add a click event on various child elements to close the parent modal
    $('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').click(() => {
        $('.modal').removeClass('is-active');
    });
});
// Add a keyboard event to close all modals
$(document).on('keydown', (event) => {
    if (event.key === "Escape") $('.modal').removeClass('is-active');
});
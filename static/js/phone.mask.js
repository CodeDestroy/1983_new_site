$(function () {
    $('.phone-mask').mask('+7 (000) 000 00 00', {
        onKeyPress: function (cep, event, currentField, options) {
            if (cep == '+7 (8') $('.phone-mask').val('+7 (');
        },
        placeholder: "+7 (___) ___ __ __",
    });
});
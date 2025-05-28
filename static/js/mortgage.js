let percantage, price, program, initialFee, term;
(() => {
    'use strict'
    let range = document.querySelectorAll('[type="range"]');
    for (let i = 0; i < range.length; i++) {
        drawRangeBg(range[i]);
        range[i].closest('.field-body').querySelector('.output').value = parseInt(range[i].value);
        range[i].addEventListener('input', (evt) => {
            range[i].closest('.field-body').querySelector('.output').value = parseInt(range[i].value);
            drawRangeBg(evt.target);
        });
    }
    // Ипотека
    program = document.querySelector('select[name="program"]');
    percantage = document.querySelector('input[name="percantage"]');
    // Цена
    price = document.querySelector('input[name="price"]');
    // Первоначальный взнос
    initialFee = document.querySelector('input[name="initial_fee"]');
    // Срок
    term = document.querySelector('input[name="term"]');
    percantage.addEventListener('change', (evt) => {
        document.getElementById('percentage').innerText = `${percantage.value}%`
        drawRangeBg(initialFee);
        calculate();
    });
    program.addEventListener('change', (evt) => {
        percantage.value = program.value;
        document.getElementById('percentage').innerText = `${percantage.value}%`;
        initialFee.min = parseInt((price.value * program.options[program.selectedIndex].dataset.init) / 100);
        initialFee.max = parseInt((price.value * 95) / 100);
        if (initialFee.value < initialFee.min) initialFee.value = initialFee.min;
        if (initialFee.value > initialFee.max) initialFee.value = initialFee.max;
        initialFee.closest('.field-body').querySelector('.output').value = initialFee.value;
        initialFee.closest('.field-body').querySelector('.start').innerText = initialFee.min.toLocaleString();
        initialFee.closest('.field-body').querySelector('.end').innerText = initialFee.max.toLocaleString();
        drawRangeBg(initialFee);
        calculate();
    });
    price.addEventListener('input', (evt) => {
        initialFee.min = parseInt((price.value * program.options[program.selectedIndex].dataset.init) / 100);
        initialFee.max = parseInt((price.value * 95) / 100);
        if (initialFee.value < initialFee.min) initialFee.value = initialFee.min;
        if (initialFee.value > initialFee.max) initialFee.value = initialFee.max;
        initialFee.closest('.field-body').querySelector('.output').value = initialFee.value;
        initialFee.closest('.field-body').querySelector('.start').innerText = initialFee.min.toLocaleString();
        initialFee.closest('.field-body').querySelector('.end').innerText = initialFee.max.toLocaleString();
        drawRangeBg(initialFee);
        calculate();
    });
    price.closest('.summ').querySelector('.output').addEventListener('input', (e) => {
        price.value = parseInt(e.target.value);
        drawRangeBg(price);
        initialFee.min = parseInt((price.value * 20.1) / 100);
        initialFee.max = parseInt((price.value * 95) / 100);
        if (initialFee.value < initialFee.min) initialFee.value = initialFee.min;
        if (initialFee.value > initialFee.max) initialFee.value = initialFee.max;
        initialFee.closest('.field-body').querySelector('.start').innerText = initialFee.min.toLocaleString();
        initialFee.closest('.field-body').querySelector('.end').innerText = initialFee.max.toLocaleString();
        drawRangeBg(initialFee);
        calculate();
    });
    initialFee.addEventListener('input', calculate);
    initialFee.closest('.field-body').querySelector('.output').addEventListener('input', (e) => {
        initialFee.value = parseInt(e.target.value);
        drawRangeBg(initialFee);
        calculate();
    });
    term.addEventListener('input', calculate);
    term.closest('.field-body').querySelector('.output').addEventListener('input', (e) => {
        term.value = parseInt(e.target.value);
        drawRangeBg(term);
        calculate();
    });
    calculate();
})();

function drawRangeBg(elem) {
    let percent = (elem.value - elem.min + 0.1)/(elem.max - elem.min)*100;
    elem.closest('.field-body').style = `--cx: ${percent}%`;
}

function calculate() {
    const percentagePerMoth = percantage.value / 1200, numberOfMonths = term.value * 12,
        sumCredit = price.value - initialFee.value;
    // A = K * (П / (1 - (1 + П)^-М))
    // К – сумма кредита, П – процентная ставка, М – количество месяцев
    document.getElementById('summ').innerText = Math.round(sumCredit * (percentagePerMoth / (1 - Math.pow(1 + percentagePerMoth, -numberOfMonths)))).toLocaleString();
}
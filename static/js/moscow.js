(() => {
    'use strict'
    let next = document.querySelectorAll('#questions .next'),
        prev = document.querySelectorAll('#questions .prev');

    for (let i = 0; i < next.length; i++) {
        next[i].addEventListener('click', (evt) => {
            let tab = next[i].closest('.tab-pane');
            tab.classList.remove('show', 'active');
            tab.nextElementSibling.classList.add('show', 'active');
            evt.preventDefault();
        });
    }
    for (let i = 0; i < prev.length; i++) {
        prev[i].addEventListener('click', (evt) => {
            let tab = prev[i].closest('.tab-pane');
            tab.classList.remove('show', 'active');
            tab.previousElementSibling.classList.add('show', 'active');
            evt.preventDefault();
        });
    }
})();
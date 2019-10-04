'use strict';
const modal = () => {
    const freeVisitOpen = document.querySelector('.open-popup'),
    freeVisitForm = document.querySelector('#free_visit_form'),
    callbackForm = document.querySelector('#callback_form'),
    callbackBtn = document.querySelector('.callback-btn'),
    overlay = document.querySelectorAll('.overlay'),
    closeForm = document.querySelectorAll('.close-form'),
    fixedGift = document.querySelector('.fixed-gift'),
    gift = document.querySelector('#gift'),
    popups = document.querySelectorAll('.popup'),
    clubSelect = document.querySelector('.club-select'),
    clubList = clubSelect.querySelector('ul'),
    headerMain = document.querySelector('.header-main');

const openModal = (form) => {
    form.style.display = 'block';
}

headerMain.addEventListener('click', (e) => {
    let target = e.target;
    if(target == freeVisitOpen){
        openModal(freeVisitForm);
        overlay.forEach((elem) => {
            elem.addEventListener('click', () => {
                 freeVisitForm.style.display = 'none';
            });
        });
        closeForm.forEach((elem) => {
            elem.addEventListener('click', () => {
                freeVisitForm.style.display = 'none';
            });
        });
    }
    
    if(target == callbackBtn){
        openModal(callbackForm);
        overlay.forEach((elem) => {
            elem.addEventListener('click', () => {
                callbackForm.style.display = 'none';
            });
        });
        closeForm.forEach((elem) => {
            elem.addEventListener('click', () => {
                callbackForm.style.display = 'none';
            });
        });
    }
})

fixedGift.addEventListener('click', () => {
    openModal(gift);
    overlay.forEach((elem) => {
        elem.addEventListener('click', () => {
            gift.style.display = 'none';
        });
    });
    closeForm.forEach((elem) => {
        elem.addEventListener('click', () => {
            gift.style.display = 'none';
        });
    });
    fixedGift.style.display = 'none';
    gift.querySelector('.close-btn').addEventListener('click', () => {
        gift.style.display = 'none';
    })
});
clubSelect.addEventListener('click', () => {
    clubList.classList.toggle('d-block');
});
}
modal();
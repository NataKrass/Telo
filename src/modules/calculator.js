'use strict';

const calculator = () => {
    let priceInput = document.querySelector('.price-message input'),
        priceTotal = document.getElementById('price-total');
        let priceTotalValue;
    const teloMozaika = document.getElementById('card_leto_mozaika'),
        teloShelkovo = document.getElementById('card_leto_schelkovo'),
        m1 = document.getElementById('m1'),
        m2 = document.getElementById('m2'),
        m3 = document.getElementById('m3'),
        m4 = document.getElementById('m4'),
        cardOrder = document.getElementById('card_order'),
        timeInput = document.querySelectorAll('.time input'),
        inputText = document.querySelectorAll('.input-text input'),
        clubs = document.querySelectorAll('.club input');
        priceInput.name = 'promo';

    const promo = () => {
        priceInput = document.querySelector('.price-message input');
            if(priceInput.value === 'ТЕЛО2019'){
                priceTotalValue = priceTotal.textContent;
                console.log(priceTotalValue);
                priceTotalValue = Math.floor(+priceTotalValue - (priceTotalValue * 30 / 100));
                console.log(priceTotalValue);
                priceTotal.textContent = priceTotalValue;
                return priceTotalValue;
            }
    }

  
    cardOrder.addEventListener('click', (e) => {
        let target = e.target;
        priceInput = document.querySelector('.price-message input');
        if(teloMozaika.checked && m1.checked){
            priceTotal.textContent = '1999';
            promo();
        }
        if(teloMozaika.checked && m2.checked){
            priceTotal.textContent = '9900';
            promo();
        }
        if(teloMozaika.checked && m3.checked){
            priceTotal.textContent = '13900';
            promo();
        }
        if(teloMozaika.checked && m4.checked){
            priceTotal.textContent = '19900';
            promo();
        }
        if(teloShelkovo.checked && m1.checked){
            priceTotal.textContent = '2999';
        }
        if(teloShelkovo.checked && m2.checked){
            priceTotal.textContent = '14990';
        }
        if(teloShelkovo.checked && m3.checked){
            priceTotal.textContent = '21990';
        }
        if(teloShelkovo.checked && m4.checked){
            priceTotal.textContent = '24990';
        }
        timeInput.forEach((item) => {
            if(target == item){
                priceInput.value = '';
            }
        })
        clubs.forEach((item) => {
            if(target == item){
                priceInput.value = '';
            }
        })
      
        if(target == priceInput){
            promo();
            console.log(target)
        }
    });        
    priceInput.addEventListener('input', promo);
}

calculator();
'use strict';

const calculator = () => {
    let priceInput = document.querySelector('.price-message input'),
        priceTotal = document.getElementById('price-total');
        
    priceInput.name = 'price';

    priceInput.addEventListener('keyup', () => {
        let priceTotalValue = priceTotal.textContent;
        console.log(priceTotalValue);
        if(priceInput.value === 'ТЕЛО2019'){
           priceTotalValue = Math.floor(+priceTotalValue - (priceTotalValue * 30 / 100));
           priceTotal.textContent = priceTotalValue;
        }
    });
    
}

calculator();
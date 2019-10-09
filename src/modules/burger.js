'use strict';
const burger = () => {

    window.addEventListener('scroll', function() {
        if(pageYOffset > 200) {
           document.querySelector('nav').style.position = 'fixed';
           document.querySelector('.fixed-gift').style.top = '95px';
        } else {
            document.querySelector('nav').style.position = 'static';
            document.querySelector('.fixed-gift').style.top = '15px';
        }
    });

    const popupMenu = document.querySelector('.popup-menu'),
        menuButton = document.querySelector('.menu-button'),
        closeBtn = document.querySelector('.close-menu-btn img'),
        popupMenuUl = popupMenu.querySelector('ul');
    
    menuButton.addEventListener('click', () => {
        popupMenu.style.display = 'block';
    });
    popupMenu.addEventListener('click', () => {
           
        popupMenu.style.display = 'none';
        
    });
}

burger();
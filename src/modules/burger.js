'use strict';
const burger = () => {

    window.addEventListener('scroll', function() {
        if(pageYOffset > 200) {
           document.querySelector('nav').style.position = 'fixed';
        } else {
            document.querySelector('nav').style.position = 'static';
        }
    });

    const popupMenu = document.querySelector('.popup-menu'),
        menuButton = document.querySelector('.menu-button'),
        closeBtn = document.querySelector('.close-menu-btn'),
        popupMenuUl = popupMenu.querySelector('nav');
    
    menuButton.addEventListener('click', () => {
        popupMenu.style.display = 'block';
    });
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;
        if(target == closeBtn){
            console.log(target)
        popupMenu.style.display = 'none';
        }
    });
}

burger();
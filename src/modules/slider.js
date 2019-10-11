const slider = () => {
    const slider = document.querySelector('.main-slider'),
        slide = slider.querySelectorAll('.slide');
        
    let currentSlide = 0,
        dots,
        dotNew,
        interval;
   
    slide[0].classList.add('slider-active');
    dots = document.createElement('ul');
    dots.classList.add('dots');
    slider.appendChild(dots);
    for(let i = 0; i < slide.length; i++){
        dotNew = document.createElement('li');
    dotNew.classList.add('dot');
    dots.appendChild(dotNew);
    }
    
    let  dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');
    const prevSlide = (elem, index, strClass) => {
           elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slider-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slider-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
         if(!target.matches('.portfolio-btn, .dot')){
             return;
         }

        prevSlide(slide, currentSlide, 'slider-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if( target.matches('.dot')){
            dot.forEach((elem, index) => {
                if(elem === target) {
                    currentSlide = index;
                }
            });
        }
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'slider-active');
        nextSlide(dot, currentSlide, 'dot-active');
    })

    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.dot')){
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.dot')){
            startSlide();
        }
    });
    startSlide(2000); 
};

export default slider;
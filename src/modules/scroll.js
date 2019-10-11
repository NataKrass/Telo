const scroll = () => {
    const arrow = document.getElementById('totop');

    const show = () => {
        arrow.style.display = 'block'; 
    }
    const close = () => {
        arrow.style.display = 'none'; 
    }
    arrow.style.display = 'none';
    window.addEventListener('scroll', function() {
        if(pageYOffset > 600) {
            show();
        } else {
            close();
        }
    });
}
export default scroll;

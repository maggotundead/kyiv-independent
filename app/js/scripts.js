document.querySelector('.burger-btn').addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    window.scrollTo(0, 0);
    document.querySelector('.square-grid').scrollIntoView({
        behavior: 'smooth'
    });
});

const InfoPopupCloseBtns = document.querySelectorAll('.info-popup-close');
InfoPopupCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.remove('open');
    })
});
// navbar changes its color when the page is scrolled
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#f43030'; 
    } else {
        navbar.style.backgroundColor = '#043e90'; 
    }
});

navbar.addEventListener('mouseover',()=>{
    navbar.style.backgroundColor = '#f43030';
});
navbar.addEventListener('mouseout',()=>{
    navbar.style.backgroundColor = '#043e90';
});
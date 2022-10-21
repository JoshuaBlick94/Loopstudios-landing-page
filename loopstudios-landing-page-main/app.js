const menu = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});
let logo = document.querySelector('.logo');
let toggle = document.querySelector('#toggleIcon');
let menu = document.getElementById('navigation-menu');
let orderServicesbtn = document.querySelector('#orderServicesbtn')
toggle.addEventListener('click', function(e) {
    menu.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    toggle.classList.toggle('fa-times');
    orderServicesbtn.classList.toggle('show');
});
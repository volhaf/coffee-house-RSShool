// alert ('привет, буду очень благодарна, если посмотришь мою работу в конце кроссчека. Я в процессе выполнения. Спасибо большое за понимание :) ')

"use strict"

// burger 

document.addEventListener('DOMContentLoaded', () => {
const iconBurger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.navigation__wrapper');
if(iconBurger) {
    iconBurger.addEventListener("click", function(e){
        iconBurger.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    })
}



    // const burger = document.getElementById('burger');

    // burger.addEventListener('click', function() {
    //     this.classList.toggle('active_menu');
    //     document.querySelector('.navigation__list').classList.toggle('open');
    // })

});
// alert ('привет, спасибо, что посмотрели мою работу позже. К сожалению успела только видео и частично бургер. Бургер работает, но не согласно ТЗ. Времени нет, поэтому пушу что есть, дико извиняюсь за такую работу, но пока не могу уделить время :) ')

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
});
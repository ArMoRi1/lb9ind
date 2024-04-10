let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function()
{
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    body.classList.List.toggle('lock');
}
header__list.onclick = function()
{
    header__list.classList.remove('active');
    body.classList.toggle('lock');
}


let menu = document.querySelector('.header__mobile');

function openMenu() {
    menu.style.display = 'block';
}
function closeMenu() {
    menu.style.display = 'none';
}


let slider = document.querySelector('.features__slider');
let slide = document.querySelectorAll('.features__slide');
let index = 0;
let left = document.querySelector('.features__left');
let right = document.querySelector('.features__right');
let currentSlide = document.querySelector('.features__index');

slide[0].style.display = 'flex';
left.disabled = true;
currentSlide.textContent = `01`;

right.addEventListener('click', moveLeft);
function moveLeft(){
    left.disabled = false;
    slide[index].style.display = 'none'; 
    slide[++index].style.display = 'flex';
    if (index === slide.length - 1) { 
        right.disabled = true;
    }
    currentSlide.textContent = `02`;
}


left.addEventListener('click', moveRight);
function moveRight(){
    right.disabled = false;
    slide[index].style.display = 'none';
    slide[--index].style.display = 'flex';
    if (index === 0) {
    left.disabled = true;
    }
    currentSlide.textContent = `01`;
}

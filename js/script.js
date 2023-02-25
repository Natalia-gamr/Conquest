
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
let vw = document.documentElement.clientWidth;


slide[0].style.display = 'flex';
left.style.display = 'none';

right.addEventListener('click', moveLeft);
function moveLeft(){
    left.style.display = 'block';
    slide[index].style.display = 'none'; // Скрываем текущий слайд
    slide[++index].style.display = 'flex'; // Инкрементируем индекс и показываем следующий слайд
    if (index === slide.length - 1) { // Убираем "правую" стрелку, если справа слайдов больше нет
    right.style.display = 'none';
    }
}

//Аналогично, только для левой стрелки
left.addEventListener('click', moveRight);
function moveRight(){
    right.style.display = 'block';
    slide[index].style.display = 'none';
    slide[--index].style.display = 'flex';
    if (index === 0) {
    left.style.display = 'none';
    }
}

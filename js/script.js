
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
currentSlide.append(`01`)

right.addEventListener('click', moveLeft);
function moveLeft(){
    left.disabled = false;
    slide[index].style.display = 'none'; // Скрываем текущий слайд
    slide[++index].style.display = 'flex';
    currentSlide.remove().append(`0${index + 1}`); // Инкрементируем индекс и показываем следующий слайд
    if (index === slide.length - 1) { // Убираем "правую" стрелку, если справа слайдов больше нет
        right.disabled = true;
    }
}

//Аналогично, только для левой стрелки
left.addEventListener('click', moveRight);
function moveRight(){
    right.disabled = false;
    slide[index].style.display = 'none';
    slide[--index].style.display = 'flex';
    currentSlide.append(`0${index + 1}`);
    if (index === 0) {
        left.disabled = true;
    }
}

'use srtict';

//слайдер
const breakpoint = '(max-width: 767px)';
const sliderClasses = ['.brands__slider', '.types__slider', '.price__slider'];
const paginationClasses = ['.brands__pagination', '.types__pagination', '.price__pagination'];
   
const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let slider;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      slider = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (slider !== undefined) slider.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
}

function sliderInit (sliderArr, paginationArr) {
    const sliderSetings = {
        speed: 400,
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1.2,
        breakpoints: {
            576: {
            slidesPerView: 2.2, 
            },
        },
        autoplay: {
            delay: 5000,
        },
    };

    for (let i = 0; i < sliderArr.length; i++) {
        sliderSetings.pagination.el = paginationArr[i];
        resizableSwiper(breakpoint, sliderArr[i], sliderSetings);
    }
}
sliderInit(sliderClasses, paginationClasses);


//кнопки спойлеры
const spoilerBtns = document.querySelectorAll('.spoiler-button');
spoilerBtns.forEach(btn => btn.addEventListener('click', toggleSpoiler))


function toggleSpoiler(e) {
    let hiddenBlock = e.target.previousSibling;

    if(hiddenBlock.classList.contains('hidden-block')) {
        hiddenBlock.classList.remove('hidden-block');
        e.target.innerHTML = 'Скрыть';
        e.target.classList.add('spoiler-button_open');
    } else {
        hiddenBlock.classList.add('hidden-block');
        e.target.innerHTML = 'Показать все';
        e.target.classList.remove('spoiler-button_open');
    }    
}


//модалки
const modals = document.querySelectorAll('.modal');
console.log(modals);

const burgerOpen = document.querySelector('[data-burger]');
const messageOpen = document.querySelectorAll('[data-message]');
const callOpen = document.querySelectorAll('[data-call]');
const modalCloseBtns = document.querySelectorAll('.button-close');

const burgerMenu = document.querySelector('.modal-burger');
const messageMenu = document.querySelector('.modal-message');
const callMenu = document.querySelector('.modal-call');
const wraperContent = document.querySelector('.wraper__content');

function toggleModal(openTriggers, modalSelector, closeTriggers) {
    const openBtns = openTriggers;
    const closeBtns = closeTriggers;
    const modal = modalSelector;

    if(NodeList.prototype.isPrototypeOf(openBtns)) {
       openBtns.forEach(openBtn => openBtn.addEventListener('click', () => {
            modal.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
            wraperContent.style.filter = 'blur(5px)';
        })); 
    } else {
        openBtns.addEventListener('click', () => {
            modal.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
            wraperContent.style.filter = 'blur(5px)';
        });
    }
    

    closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal-open');
        document.body.style.overflow = '';
        wraperContent.style.filter = 'blur(0)';
    }));
}

toggleModal(burgerOpen, burgerMenu, modalCloseBtns);
toggleModal(messageOpen, messageMenu, modalCloseBtns);
toggleModal(callOpen, callMenu, modalCloseBtns);

const main = document.querySelector('.main')

main.addEventListener('click', () => {
    wraperContent.style.filter = 'blur(0)';
    burgerMenu.classList.remove('modal-open');
    messageMenu.classList.remove('modal-open');
    callMenu.classList.remove('modal-open');
});
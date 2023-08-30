'use strict';

const slider = new Swiper('.slider', {
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
    }
    // autoplay: {
    //     delay: 5000,
    // },
});

export default slider;
// const typesSlider = new Swiper('.slider', {
//     speed: 400,
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//         el: '.types__slider-pagination',
//     },
//     slidesPerView: 1.2,
//     breakpoints: {
//         576: {
//         slidesPerView: 2.2, 
//         }
//     }
//     // autoplay: {
//     //     delay: 5000,
//     // },
// });
// const priceSlider = new Swiper('.slider', {
//     speed: 400,
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//         el: '.price__slider-pagination',
//     },
//     slidesPerView: 1.1,
//     breakpoints: {
//         576: {
//         slidesPerView: 2.1, 
//         }
//     }
//     // autoplay: {
//     //     delay: 5000,
//     // },
// });
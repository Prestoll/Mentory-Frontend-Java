'use strict'

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  type: 'bullets',
},

breakpoints: {
  0: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
},

});
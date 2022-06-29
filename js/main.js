const swiper_1 = document.querySelector('.slider-container'),
   swiper_2 = document.querySelector('.swiper-container'),
   burger = document.querySelector('.burger'),
   close = document.querySelector('.menu__close'),
   menu = document.querySelector('.menu'),
   playButtonsFirst = document.querySelectorAll('.main-slider__play');

let swiperSlider1 = new Swiper(swiper_1, {
   centeredSlides: true,
   slidesPerView: 'auto',
   loop: true,
   spaceBetween: 100,
});

let swiperSlider2 = new Swiper(swiper_2, {
   centeredSlides: true,
   slidesPerView: 1,
   loop: true,
   spaceBetween: 10,
   fadeEffect: {
      crossFade: true
   },
   effect: 'fade',
});

burger.addEventListener('click', () => {
   menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
   menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
   el.addEventListener('click', (e) => {
      let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
      video.play();
      e.currentTarget.style.display = 'none';
      setTimeout(() => {
         video.volume = 1;
      }, 1000);
   });
});
const swiper = new Swiper('.pupels-left__slider', {
   loop: true,
   spaceBetween: 120,
   simulateTouch: false,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
   speed: 3000,
   // pagination: {
   //    el: '.controll-main-block__dots',
   //    clickable: true,
   // },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
   breakpoints: {
      300: {
         slidesPerView: 1,
      },
      400: {
         slidesPerView: 2,
      },
      710: {
         direction: 'vertical',
         slidesPerView: 1.8,
      },
   },
});

const swiper2 = new Swiper('.pupels-left__slider2', {
   loop: true,
   spaceBetween: 120,
   slidesPerView: 1.8,
   direction: 'vertical',
   simulateTouch: false,
   centeredSlides: true,
   freeMode: true,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
      paused: false,
      reverseDirection: true,
   },
   speed: 3000,
   // pagination: {
   //    el: '.controll-main-block__dots',
   //    clickable: true,
   // },
   on: {
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});


const swiper3 = new Swiper('.main-proof__slider', {
   loop: true,
   spaceBetween: 24,
   centeredSlides: true,
   grabCursor: true,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
      paused: false,
   },
   speed: 3000,
   pagination: {
      el: '.main-proof__pagination',
      clickable: true,
   },
   breakpoints: {
      520: {
         slidesPerView: 2,
      },
      780: {
         slidesPerView: 3,
      },
      1200: {
         slidesPerView: 4,
      }
   },
   on: {
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});
document.addEventListener('DOMContentLoaded', function() {
  // проверка JS
// console.log('testimonialsSlider')


  // из сайта Swiper JS
  var testimonialsSwiper = new Swiper(".testimonials__mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    // autoplay: true,
    autoplayDuration: 3000,
    autoplayPauseOnHover: true,
    keyboard: {
      enabled: true,      
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    navigation: {
      nextEl: ".testimonials__button_next",
      prevEl: ".testimonials__button_prev",
    },
    pagination: {
      el: ".testimonials__pagination",
      clickable: true,
    },
  });

   
    /*Боковые блоки маленькие, пока не встанут в центр*/
  // $(document).ready(function(){

    /* slide_prev */
  //   $('.testimonials__slide').roundabout({
  //     minScale:0.53,
  //       autoplay: true,
  //       autoplayDuration: 3000,
  //       autoplayPauseOnHover: true
  //   });
  // });

});
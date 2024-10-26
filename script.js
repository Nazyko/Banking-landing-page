const swiper = new Swiper('.top-slide', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

});


const partnerSlide = new Swiper('.partners-slide', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 10,

  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 140,
      },
    },

});


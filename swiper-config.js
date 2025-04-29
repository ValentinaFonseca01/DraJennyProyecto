var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2, 
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: false,       
    pagination: {
        el: ".swiper-navigation .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-navigation .swiper-button-next",
      prevEl: ".swiper-navigation .swiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1, /* También aquí en móvil */
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        }
      }
    });
  
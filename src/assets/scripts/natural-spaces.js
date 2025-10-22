// Import Swiper bundle and modules
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.natural-spaces__swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.natural-spaces__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.natural-spaces__button--next',
      prevEl: '.natural-spaces__button--prev',
    },
    // breakpoints: {
    //   768: { slidesPerView: 2 },
    //   1200: { slidesPerView: 3 },
    // },
  });
});

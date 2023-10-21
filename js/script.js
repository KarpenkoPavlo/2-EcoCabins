const swiper = new Swiper('.materials__slider', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

window.addEventListener('scroll', function () {
  scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll')
})
var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 10,
      shadowScale: 0.94
    },
    
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".swiper-pagination"
    },
  });
window.addEventListener('resize', slideImage);


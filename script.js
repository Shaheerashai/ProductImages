var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".swiper-pagination"
    },
  });
 // function setSize(){
   // width = window.innerWidth;
    //console.log(width);
//}
  //window.addEventListener('resize', setSize, false);


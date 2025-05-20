// banner_slider js
var swiper = new Swiper(".main_banner", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".banner_pagination",
        clickable: true,
    },
});

// about js
var swiper = new Swiper(".about_slide", {
  navigation: {
     nextEl: ".about_btn_next",
     prevEl: ".about_btn_prev",
    },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 480,
  });

// about js 2
var swiper = new Swiper(".about_slide_2", {
  navigation: {
     nextEl: ".about_btn_next2",
     prevEl: ".about_btn_prev2",
    },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 480,
  });

  // about js 3
  var swiper = new Swiper(".about_slide3", {
    navigation: {
       nextEl: ".about_btn_next3",
       prevEl: ".about_btn_prev3",
      },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 480,
    });



feather.replace();
AOS.init();
var tabNum= ['1', '2', '3', '4'];
var tab= ['베이직 뉴트리언트', '라포좀 비타민C', '비타민D 1000', '올 인 원데이 비타민'];
var inc02Swiper = new Swiper("#atc02 .r_inner .swiper-container", {
  slidesPerView: 'auto',
  loop: true,
  speed: 1000,
  spaceBetween : 30,
  slideActiveClass: 'on',
    pagination: {
    el: '#atc02 .pager_txt',
    clickable: true,
    bulletActiveClass : 'on',
    renderBullet: function (index, className) {
      return '<p class="' + className + '"><span>'+ (tabNum[index]) +'</span><span>' + (tab[index]) + '</span></p>';
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
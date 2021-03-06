"use strict";

// Lang 
$(document).on('click', '.js-lang', function () {
  var $parent = $(this).closest('.lang');
  $parent.toggleClass('show');
}); //SWIPER

var swiper = new Swiper('.project__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    768: {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 40,
      centeredSlides: true
    }
  }
}); //Swiper reviews

var swiperReviews = new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      centeredSlides: true,
      slidesPerView: 'auto'
    },
    1440: {
      slidesPerView: 2,
      centeredSlides: false
    }
  }
}); //   Burger

var burger = $('.js-burger'),
    navContent = $('.js-mob-menu'),
    activeClass = 'is-active';
burger.on('click', function (e) {
  if ($(this).hasClass(activeClass)) {
    $(this).removeClass(activeClass);
    navContent.removeClass(activeClass);
  } else {
    $(this).addClass(activeClass);
    navContent.addClass(activeClass);
  }
});
$('.menu-link').click(function () {
  $('.js-burger, .js-mob-menu').removeClass('is-active');
}); // Header Scroll

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 52) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});

if ($(window).scrollTop() > 100) {
  $(".header").addClass("active");
} // MODALS


var openModalButtons = $('[data-modal-target]'),
    closeModalButtons = $('[data-close-button]'),
    overlay = $('#overlay');
openModalButtons.each(function () {
  $(this).on('click', function () {
    var modal = $(this).data('modalTarget');
    openModal(modal);
  });
});
closeModalButtons.each(function () {
  $(this).on('click', function () {
    var modal = $(this).closest('.modal');
    closeModal(modal);
  });
});
overlay.on('click', function () {
  var modals = $('.modal.active');
  modals.each(function () {
    closeModal(this);
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }

  $(modal).addClass('active');
  overlay.addClass('active');
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }

  $(modal).removeClass('active');
  overlay.removeClass('active');
} // SWIPER For mobile
// const breakpoint = window.matchMedia( '(min-width: 768px)');
// let categorySwiper;
// const breakpointChecker = function() {
//     if ( breakpoint.matches === true ) {
//         console.log(categorySwiper)
//         if ( categorySwiper !== undefined ) categorySwiper.destroy( true, true );
//         return
//     } else if ( breakpoint.matches === false ) {
//         return enableSwiper();
//     }
// }
// const enableSwiper = function() {
//     categorySwiper = new Swiper('.category-swiper', {
//         slidesPerView: 3.5,
//         grabCursor: true,
//     })
// }
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
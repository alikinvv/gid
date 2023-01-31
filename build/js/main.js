"use strict";

$('body').on('click', '.header__lang div', function (e) {
  $('.header__lang div').removeClass('active');
  $(e.currentTarget).addClass('active');
});
$('body').on('click', '.header__search button', function (e) {
  $('.header__search').toggleClass('active');
  $(document).mouseup(function (e) {
    var container = $('.header__search');
    if (container.has(e.target).length === 0) {
      container.removeClass('active');
      $(document).unbind('mouseup');
      return false;
    }
  });
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('.header__search').removeClass('active');
      $(document).unbind('keyup');
      return false;
    }
  });
  $('.header__search input').focus();
});
var masks = document.querySelectorAll('.phone-mask');
masks.forEach(function (el) {
  IMask(el, {
    mask: '+{7} (000) 000 00 00'
  });
});
var main = new Swiper('.main .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.main .swiper-pagination'
  },
  on: {
    afterInit: function afterInit() {
      $('.jquery-background-video').bgVideo({
        fadeIn: 2000
      });
    }
  }
});
var gid = new Swiper('.gid .swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.gid .swiper-button-next',
    prevEl: '.gid .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var popular = new Swiper('.popular:not(.padding) .swiper-container', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 94,
  loop: true,
  navigation: {
    nextEl: '.popular:not(.padding) .swiper-button-next',
    prevEl: '.popular:not(.padding) .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var popularPadding = new Swiper('.popular.padding .swiper-container', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.popular.padding .swiper-button-next',
    prevEl: '.popular.padding .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var tours = new Swiper('.tours .swiper-container', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 94,
  loop: true,
  navigation: {
    nextEl: '.tours .swiper-button-next',
    prevEl: '.tours .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var reviews = new Swiper('.reviews .swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.reviews__link').matchHeight();
      $('.reviews__card').matchHeight();
    }
  }
});
var blog = new Swiper('.blog .swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.blog .swiper-button-next',
    prevEl: '.blog .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.blog__title').matchHeight();
      $('.blog__text').matchHeight();
      $('.blog__card').matchHeight();
    }
  }
});
var thumbs = new Swiper('.thumbs .swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 6,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.thumbs .swiper-pagination'
  }
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', function (e) {
  if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
  $('.modal.active').removeClass('active');
  $(".modal[data-modal=\"".concat($(e.currentTarget).attr('data-modal'), "\"]")).addClass('active');
  $('html, body').toggleClass('overflow');
  if ($(e.currentTarget).attr('data-modal') === 'thanks') {
    setTimeout(function () {
      $('.modal.active').find('svg').addClass('animate');
    }, 100);
  }
});

// close modal events
var closeModal = function closeModal() {
  $('.backdrop').removeClass('active');
  $('.modal').removeClass('active');
  $('.hamburger').removeClass('active');
  $('.menu').removeClass('active');
  $('.modal').find('svg').removeClass('animate');
  $('html, body').removeClass('overflow');
};
$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.mobile-sidebar .close', closeModal);
$('body').on('click', '.backdrop', function (e) {
  if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});
$('body').on('submit', 'form', function (e) {
  e.preventDefault();
});

// tabs .bar animation

if ($('.footer__menu .active').length > 0) {
  $('.footer__menu .bar').stop().animate({
    left: $('.footer__menu .active').offset().left - $('.footer__menu').offset().left,
    width: $('.footer__menu .active').outerWidth()
  });
}
$('body').on('mouseenter', '.footer__menu a', function (e) {
  $('.footer__menu .bar').stop().animate({
    left: $(e.currentTarget).offset().left - $('.footer__menu').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.footer__menu', function (e) {
  if ($('.footer__menu .active').length > 0) {
    $('.footer__menu .bar').stop().animate({
      left: $('.footer__menu .active').offset().left - $('.footer__menu').offset().left,
      width: $('.footer__menu .active').outerWidth()
    });
  } else {
    $('.footer__menu .bar').stop().animate({
      left: 0,
      width: 0
    });
  }
});
$('body').on('click', '.footer__menu a', function (e) {
  $('.footer__menu .active').removeClass('active');
  $(e.currentTarget).addClass('active');
  $('.footer__menu .bar').css({
    left: $('.footer__menu .active').offset().left - $('.footer__menu').offset().left,
    width: $('.footer__menu .active').outerWidth()
  });
});
$('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 50);
$(window).on('resize', function () {
  if ($(window).width() < 1366) {
    $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 10);
  } else {
    $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 50);
  }
});
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) $('.scrolltop').addClass('active');else $('.scrolltop').removeClass('active');
});
$('body').on('click', '.scrolltop', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});
$('body').on('click', '.scrollto', function (e) {
  e.preventDefault();
  var target = $(e.currentTarget).attr('data-scrollto');
  $('html, body').animate({
    scrollTop: $(target).offset().top - 100
  }, 500);
});
$('body').on('click', '.items .btn', function (e) {
  e.preventDefault();
  $(e.currentTarget).hide();
  $(e.currentTarget).prev().slideDown().css('display', 'flex');
});
$('body').on('click', '.program__toggle', function (e) {
  e.preventDefault();
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle().toggleClass('active');
});
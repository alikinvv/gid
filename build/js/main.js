"use strict";

$('body').on('click', '.header__lang div', function (e) {
  $('.header__lang div').removeClass('active');
  $(e.currentTarget).addClass('active');
});
$('body').on('click', '.header__search button', function (e) {
  console.log(e.target);
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
    el: '.main .swiper-pagination',
    clickable: true
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
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.gid .swiper-button-next',
    prevEl: '.gid .swiper-button-prev'
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var popular = new Swiper('.popular:not(.padding) .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.popular:not(.padding) .swiper-button-next',
    prevEl: '.popular:not(.padding) .swiper-button-prev'
  },
  breakpoints: {
    1280: {
      spaceBetween: 94,
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var popularPadding = new Swiper('.popular.padding .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.popular.padding .swiper-button-next',
    prevEl: '.popular.padding .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var tours = new Swiper('.tours .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.tours .swiper-button-next',
    prevEl: '.tours .swiper-button-prev'
  },
  breakpoints: {
    1280: {
      spaceBetween: 94,
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.gid__title').matchHeight();
      $('.gid__text').matchHeight();
    }
  }
});
var reviews = new Swiper('.reviews .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev'
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.reviews__link').matchHeight();
      $('.reviews__card').matchHeight();
    }
  }
});
var blog = new Swiper('.blog .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.blog .swiper-button-next',
    prevEl: '.blog .swiper-button-prev'
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
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
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 6,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
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
  if ($(e.currentTarget).attr('data-modal') === 'thanks') {
    setTimeout(function () {
      $('.modal.active').find('svg').addClass('animate');
    }, 100);
  }
  if ($(e.currentTarget).attr('data-modal') === 'guide') {
    $('html, body').addClass('overflow');
    $('.modal .guide__main.active #play-btn').removeClass('pause');
    $('.modal .guide__main.active .guide__body').scrollTop(0);
    $('.modal .guide__item.active').removeClass('active');
    $('.modal .guide__item').removeClass('active');
    $('.modal .guide__main').removeClass('active');
    $('.modal .guide__content.active').removeClass('active');
    $(".modal .guide__item[data-id=\"".concat($(e.currentTarget).attr('data-id'), "\"]")).addClass('active');
    $(".modal .guide__main[data-id=\"".concat($(e.currentTarget).attr('data-id'), "\"]")).addClass('active');
    $('.modal .guide__sidebar').stop().animate({
      scrollTop: $('.modal .guide__item.active').offset().top - $('.modal .guide__sidebar').offset().top + $('.modal .guide__sidebar').scrollTop()
    }, 500);
    $('audio').each(function () {
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
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
$('body').on('click', '[data-scrollto]', function (e) {
  e.preventDefault();
  var target = $(e.currentTarget).attr('data-scrollto');
  $('html, body').animate({
    scrollTop: $(target).offset().top - 100
  }, 500);
});
$('body').on('click', '.items .btn', function (e) {
  e.preventDefault();
  $(e.currentTarget).prev().addClass('active');
  $(e.currentTarget).hide();
});
$('body').on('click', '.program__toggle', function (e) {
  e.preventDefault();
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle().toggleClass('active');
});
var guideInit = function guideInit(myMap) {
  $('body').on('click', 'section.guide .guide-next', function (e) {
    e.preventDefault();
    var current = $('section.guide .guide__item.active');
    var next = current.next();
    if (next.length > 0) {
      current.removeClass('active');
      next.addClass('active');
      $('section.guide .guide__main.active #play-btn').removeClass('pause');
      $('section.guide .guide__main.active .guide__body').scrollTop(0);
      $('section.guide .guide__main.active').removeClass('active');
      $('section.guide .guide__main[data-id="' + next.attr('data-id') + '"]').addClass('active');
      $('html, body').stop().animate({
        scrollTop: $('section.guide').offset().top - 20
      }, 500);
      $('section.guide .guide__sidebar').stop().animate({
        scrollTop: $('section.guide .guide__item.active').offset().top - $('section.guide .guide__sidebar').offset().top + $('section.guide .guide__sidebar').scrollTop()
      }, 500);
      myMap && myMap.setCenter([Number(next.attr('data-coordinate').match(/(.*), (.*)/)[1]), Number(next.attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
      $('audio').each(function () {
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
      });
    }
  });

  $('body').on('click', '.modal .guide-next', function (e) {
    e.preventDefault();
    var current = $('.modal .guide__item.active');
    var next = current.next();
    if (next.length > 0) {
      current.removeClass('active');
      next.addClass('active');
      $('.modal .guide__main.active #play-btn').removeClass('pause');
      $('.modal .guide__main.active .guide__body').scrollTop(0);
      $('.modal .guide__main.active').removeClass('active');
      $('.modal .guide__main[data-id="' + next.attr('data-id') + '"]').addClass('active');
      $('.modal .guide__sidebar').stop().animate({
        scrollTop: $('.modal .guide__item.active').offset().top - $('.modal .guide__sidebar').offset().top + $('.modal .guide__sidebar').scrollTop()
      }, 500);
      myMap && myMap.setCenter([Number(next.attr('data-coordinate').match(/(.*), (.*)/)[1]), Number(next.attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
      $('audio').each(function () {
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
      });
    }
  });

  $('body').on('click', 'section.guide .guide-prev', function (e) {
    e.preventDefault();
    var current = $('section.guide .guide__item.active');
    var prev = current.prev();
    if (prev.length > 0) {
      current.removeClass('active');
      prev.addClass('active');
      $('section.guide .guide__main.active #play-btn').removeClass('pause');
      $('section.guide .guide__main.active .guide__body').scrollTop(0);
      $('section.guide .guide__main.active').removeClass('active');
      $('section.guide .guide__main[data-id="' + prev.attr('data-id') + '"]').addClass('active');
      $('html, body').stop().animate({
        scrollTop: $('section.guide').offset().top - 20
      }, 500);
      $('section.guide .guide__sidebar').stop().animate({
        scrollTop: $(' section.guide .guide__item.active').offset().top - $('section.guide .guide__sidebar').offset().top + $('section.guide .guide__sidebar').scrollTop()
      }, 500);
      myMap && myMap.setCenter([Number(prev.attr('data-coordinate').match(/(.*), (.*)/)[1]), Number(prev.attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
      $('audio').each(function () {
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
      });
    }
  });

  $('body').on('click', '.modal .guide-prev', function (e) {
    e.preventDefault();
    var current = $('.modal .guide__item.active');
    var prev = current.prev();
    if (prev.length > 0) {
      current.removeClass('active');
      prev.addClass('active');
      $('.modal .guide__main.active #play-btn').removeClass('pause');
      $('.modal .guide__main.active .guide__body').scrollTop(0);
      $('.modal .guide__main.active').removeClass('active');
      $('.modal .guide__main[data-id="' + prev.attr('data-id') + '"]').addClass('active');
      $('.modal .guide__sidebar').stop().animate({
        scrollTop: $('.modal .guide__item.active').offset().top - $('.modal .guide__sidebar').offset().top + $('.modal .guide__sidebar').scrollTop()
      }, 500);
      myMap && myMap.setCenter([Number(prev.attr('data-coordinate').match(/(.*), (.*)/)[1]), Number(prev.attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
    }
    $('audio').each(function () {
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
  });

  $('body').on('click', 'section.guide .guide__item', function (e) {
    e.preventDefault();
    var target = $(e.currentTarget).attr('data-target');
    $('section.guide .guide__main.active #play-btn').removeClass('pause');
    $('section.guide .guide__item.active').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('section.guide .guide__content.active').removeClass('active');
    $(target).addClass('active');
    $('section.guide .guide__main.active .guide__body').scrollTop(0);
    $('section.guide .guide__main.active').removeClass('active');
    $('section.guide .guide__main[data-id="' + $(e.currentTarget).attr('data-id') + '"]').addClass('active');
    $('section.guide .guide__sidebar').stop().animate({
      scrollTop: $('section.guide .guide__item.active').offset().top - $('section.guide .guide__sidebar').offset().top + $('section.guide .guide__sidebar').scrollTop()
    }, 500);
    myMap && myMap.setCenter([Number($(e.currentTarget).attr('data-coordinate').match(/(.*), (.*)/)[1]), Number($(e.currentTarget).attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
    $('audio').each(function () {
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
  });

  $('body').on('click', '.modal .guide__item', function (e) {
    e.preventDefault();
    var target = $(e.currentTarget).attr('data-target');
    $('.modal .guide__main.active #play-btn').removeClass('pause');
    $('.modal .guide__item.active').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.modal .guide__content.active').removeClass('active');
    $(target).addClass('active');
    $('.modal .guide__main.active .guide__body').scrollTop(0);
    $('.modal .guide__main.active').removeClass('active');
    $('.modal .guide__main[data-id="' + $(e.currentTarget).attr('data-id') + '"]').addClass('active');
    $('.modal .guide__sidebar').stop().animate({
      scrollTop: $('.modal .guide__item.active').offset().top - $('.modal .guide__sidebar').offset().top + $('.modal .guide__sidebar').scrollTop()
    }, 500);
    myMap && myMap.setCenter([Number($(e.currentTarget).attr('data-coordinate').match(/(.*), (.*)/)[1]), Number($(e.currentTarget).attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
    $('audio').each(function () {
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
  });
};

if ($('#map').length) {
  ymaps.ready(init);
} else {
  guideInit();
}
function init() {
  var myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    }),
    objectManager = new ymaps.ObjectManager({
      geoObjectOpenBalloonOnClick: false,
      clusterOpenBalloonOnClick: false
    });
  objectManager.objects.options.set({
    iconLayout: 'default#imageWithContent',
    iconImageHref: 'img/icons/point.svg',
    iconImageSize: [33, 37],
    iconImageOffset: [-5, -38],
    iconContentOffset: [11, 10]
  });
  myMap.geoObjects.add(objectManager);
  $.ajax({
    url: 'js/objects.json'
  }).done(function (data) {
    objectManager.add(data);
  });
  myMap.behaviors.disable('scrollZoom');
  function onObjectEvent(e) {
    var objectId = e.get('objectId');
    if (e.get('type') == 'mousedown') {
      for (var i = 0; i < objectManager.objects.getLength(); i++) {
        if (i != objectId) {
          objectManager.objects.setObjectOptions(i, {
            iconImageHref: 'img/icons/point.svg'
          });
        }
      }
      objectManager.objects.setObjectOptions(objectId, {
        iconImageHref: 'img/icons/point-active.svg'
      });
      $('section.guide .guide__main.active #play-btn').removeClass('pause');
      $('section.guide .guide__item.active').removeClass('active');
      $('section.guide .guide__item[data-id="' + objectId + '"]').addClass('active');
      $('section.guide .guide__main.active .guide__body').scrollTop(0);
      $('section.guide .guide__main.active').removeClass('active');
      $('section.guide .guide__main[data-id="' + objectId + '"]').addClass('active');
      $('html, body').animate({
        scrollTop: $('.guide').offset().top - 20
      }, 500);
      $('section.guide .guide__sidebar').stop().animate({
        scrollTop: $('section.guide .guide__item.active').offset().top - $('section.guide .guide__sidebar').offset().top + $('section.guide .guide__sidebar').scrollTop()
      }, 500);
      myMap.setCenter([Number($('section.guide .guide__item[data-id="' + objectId + '"]').attr('data-coordinate').match(/(.*), (.*)/)[1]), Number($('section.guide .guide__item[data-id="' + objectId + '"]').attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
      $('audio').each(function () {
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
      });
    }
  }

  guideInit(myMap);
  objectManager.objects.events.add(['mousedown', 'mouseup'], onObjectEvent);
}
$('.hamburger').on('click', function () {
  $(this).toggleClass('active');
  $('.header__menu').toggleClass('active');
});
var ww = $(window).width();
var initTablet768 = function initTablet768() {
  if (ww >= 768 && ww <= 1023 && !$('body').hasClass('s-768')) {
    $('body').addClass('s-768');
    $('.article__contacts').after($('.article__sidebar'));
    $('.article__item.author').append($('.article__item.contact'));
  } else if (ww >= 1024 && $('body').hasClass('s-768')) {
    $('body').removeClass('s-768');
    $('.article__wrapper').append($('.article__sidebar'));
    $('.article__item.author').after($('.article__item.contact'));
  }
  if (ww <= 1023) {
    if ($('body').hasClass('s-768') || $('body').hasClass('s-320')) {}
  } else {
    // try {
    //     swiperItemThree.destroy();
    //     swiperRubricThree.destroy();
    // } catch {}
  }
};
var initMobile = function initMobile() {
  if (ww <= 767 && !$('body').hasClass('s-312')) {
    $('body').addClass('s-312');
    $('.article__contacts').after($('.article__sidebar'));
    $('.header__search').after($('.header__lang'));
  } else if (ww >= 768 && $('body').hasClass('s-312')) {
    $('body').removeClass('s-312');
    $('.article__wrapper').append($('.article__sidebar'));
    $('.header__row.top').append($('.header__lang'));
  }
};
initTablet768();
initMobile();
$(window).on('resize', function () {
  ww = $(window).width();
  initTablet768();
  initMobile();
});
$('body').on('click', '.article__share > button', function () {
  $('.article__share').toggleClass('active');
  if ($('.article__share').hasClass('active')) {
    $('.article__share .dropdown > button').removeClass('active').html('копировать  <svg class="icon" fill="#1CCE79"><use xlink:href="img/symbol-defs.svg#icon-link"></use></svg>');
  }
});
$('body').on('click', '.article__share .dropdown > button', function (e) {
  $(e.currentTarget).addClass('active').html('скопировано <svg class="icon" fill="#1CCE79"><use xlink:href="img/symbol-defs.svg#icon-check"></use></svg>');
});
$(document).on('click', function (e) {
  if (!$(e.target).closest('.article__share').length) {
    $('.article__share').removeClass('active');
  }
});
if ($(window).width() >= 1280) {
  if ($('.article__sidebar').length > 0) {
    $('.article__sidebar').stickySidebar({
      topSpacing: 20,
      bottomSpacing: 20,
      containerSelector: '.article'
    });
  }
} else {
  var left = $('.breadcrumbs__list').width();
  $('.breadcrumbs__list').scrollLeft(left);
}
function calculateTotalValue(length) {
  var minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ':' + seconds;
  return time;
}
function calculateCurrentValue(currentTime) {
  var current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed(),
    current_time = (current_minute < 10 ? '0' + current_minute : current_minute) + ':' + (current_seconds < 10 ? '0' + current_seconds : current_seconds);
  return current_time;
}
function initProgressBar() {
  var _loop = function _loop() {
    var player = $('.player').eq(i).find('audio')[0];
    var length = player.duration;
    var current_time = player.currentTime;
    $('.player').eq(i).find('.start-time').html(calculateCurrentValue(current_time));
    $('.player').eq(i).find('.end-time').html(calculateTotalValue(length));
    var progressbar = $('.player').eq(i).find('progress')[0];
    progressbar.value = player.currentTime / player.duration;
    progressbar.addEventListener('click', seek);
    if (player.currentTime == player.duration) {
      $('.player').eq(i).find('#play-btn').removeClass('pause');
    }
    function seek(evt) {
      var percent = evt.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      progressbar.value = percent / 100;
    }
  };
  for (var i = 0; i < $('.player').length; i++) {
    _loop();
  }
}
function initPlayers(num) {
  var _loop2 = function _loop2(i) {
    (function () {
      var player = $('.player').eq(i).find('audio')[0],
        isPlaying = false,
        playBtn = $('.player').eq(i).find('#play-btn')[0];
      if (playBtn != null) {
        playBtn.addEventListener('click', function () {
          togglePlay();
        });
      }
      function togglePlay() {
        if (player.paused === false) {
          player.pause();
          isPlaying = false;
          $(playBtn).removeClass('pause');
        } else {
          player.play();
          $(playBtn).addClass('pause');
          isPlaying = true;
        }
      }
    })();
  };
  for (var i = 0; i < num; i++) {
    _loop2(i);
  }
}
initPlayers($('.player').length);
$('body').on('click', '.header__mobile', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(document).mouseup(function (e) {
    var container = $('.header__mobile');
    if (container.has(e.target).length === 0) {
      container.removeClass('active');
      $(document).unbind('mouseup');
      return false;
    }
  });
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('.header__mobile').removeClass('active');
      $(document).unbind('keyup');
      return false;
    }
  });
});
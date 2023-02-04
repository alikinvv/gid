$('body').on('click', '.header__lang div', (e) => {
    $('.header__lang div').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.header__search button', (e) => {
    $('.header__search').toggleClass('active');

    $(document).mouseup(function (e) {
        let container = $('.header__search');
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

let masks = document.querySelectorAll('.phone-mask');

masks.forEach((el) => {
    IMask(el, { mask: '+{7} (000) 000 00 00' });
});

let main = new Swiper('.main .swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main .swiper-pagination',
    },
    on: {
        afterInit: function () {
            $('.jquery-background-video').bgVideo({ fadeIn: 2000 });
        },
    },
});

let gid = new Swiper('.gid .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.gid .swiper-button-next',
        prevEl: '.gid .swiper-button-prev',
    },
    breackpoints: {
        1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
    on: {
        afterInit: function () {
            $('.gid__title').matchHeight();
            $('.gid__text').matchHeight();
        },
    },
});

let popular = new Swiper('.popular:not(.padding) .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.popular:not(.padding) .swiper-button-next',
        prevEl: '.popular:not(.padding) .swiper-button-prev',
    },
    breackpoints: {
        1280: {
            spaceBetween: 94,
        },
    },
    on: {
        afterInit: function () {
            $('.gid__title').matchHeight();
            $('.gid__text').matchHeight();
        },
    },
});

let popularPadding = new Swiper('.popular.padding .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.popular.padding .swiper-button-next',
        prevEl: '.popular.padding .swiper-button-prev',
    },
    on: {
        afterInit: function () {
            $('.gid__title').matchHeight();
            $('.gid__text').matchHeight();
        },
    },
});

let tours = new Swiper('.tours .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.tours .swiper-button-next',
        prevEl: '.tours .swiper-button-prev',
    },
    breackpoints: {
        1280: {
            spaceBetween: 94,
        },
    },
    on: {
        afterInit: function () {
            $('.gid__title').matchHeight();
            $('.gid__text').matchHeight();
        },
    },
});

let reviews = new Swiper('.reviews .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.reviews .swiper-button-next',
        prevEl: '.reviews .swiper-button-prev',
    },
    breackpoints: {
        1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
    on: {
        afterInit: function () {
            $('.reviews__link').matchHeight();
            $('.reviews__card').matchHeight();
        },
    },
});

let blog = new Swiper('.blog .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.blog .swiper-button-next',
        prevEl: '.blog .swiper-button-prev',
    },
    breackpoints: {
        1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
    on: {
        afterInit: function () {
            $('.blog__title').matchHeight();
            $('.blog__text').matchHeight();
            $('.blog__card').matchHeight();
        },
    },
});

let thumbs = new Swiper('.thumbs .swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 6,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.thumbs .swiper-pagination',
    },
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');
    $('html, body').toggleClass('overflow');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.menu').removeClass('active');
    $('.modal').find('svg').removeClass('animate');
    $('html, body').removeClass('overflow');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.mobile-sidebar .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
});

// tabs .bar animation

if ($('.footer__menu .active').length > 0) {
    $('.footer__menu .bar')
        .stop()
        .animate({
            left: $('.footer__menu .active').offset().left - $('.footer__menu').offset().left,
            width: $('.footer__menu .active').outerWidth(),
        });
}

$('body').on('mouseenter', '.footer__menu a', (e) => {
    $('.footer__menu .bar')
        .stop()
        .animate({ left: $(e.currentTarget).offset().left - $('.footer__menu').offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.footer__menu', (e) => {
    if ($('.footer__menu .active').length > 0) {
        $('.footer__menu .bar')
            .stop()
            .animate({
                left: $('.footer__menu .active').offset().left - $('.footer__menu').offset().left,
                width: $('.footer__menu .active').outerWidth(),
            });
    } else {
        $('.footer__menu .bar').stop().animate({ left: 0, width: 0 });
    }
});

$('body').on('click', '.footer__menu a', (e) => {
    $('.footer__menu .active').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.footer__menu .bar').css({
        left: $('.footer__menu .active').offset().left - $('.footer__menu').offset().left,
        width: $('.footer__menu .active').outerWidth(),
    });
});

$('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 50);

$(window).on('resize', () => {
    if ($(window).width() < 1366) {
        $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 10);
    } else {
        $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 50);
    }
});

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 100) $('.scrolltop').addClass('active');
    else $('.scrolltop').removeClass('active');
});

$('body').on('click', '.scrolltop', () => {
    $('html, body').animate({ scrollTop: 0 }, 500);
});

$('body').on('click', '.scrollto', (e) => {
    e.preventDefault();
    let target = $(e.currentTarget).attr('data-scrollto');
    $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 500);
});

$('body').on('click', '.items .btn', (e) => {
    e.preventDefault();
    $(e.currentTarget).hide();
    $(e.currentTarget).prev().slideDown().css('display', 'flex');
});

$('body').on('click', '.program__toggle', (e) => {
    e.preventDefault();
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle().toggleClass('active');
});

function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds;

    return time;
}

function calculateCurrentValue(currentTime) {
    var current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? '0' + current_minute : current_minute) + ':' + (current_seconds < 10 ? '0' + current_seconds : current_seconds);

    return current_time;
}

function initProgressBar() {
    var player = document.getElementById('player');
    var length = player.duration;
    var current_time = player.currentTime;

    console.log(player.duration);
    $('.start-time').html(calculateCurrentValue(current_time));
    $('.end-time').html(calculateTotalValue(length));

    var progressbar = document.getElementById('seekObj');
    progressbar.value = player.currentTime / player.duration;
    progressbar.addEventListener('click', seek);

    if (player.currentTime == player.duration) {
        $('#play-btn').removeClass('pause');
    }

    function seek(evt) {
        var percent = evt.offsetX / this.offsetWidth;
        player.currentTime = percent * player.duration;
        progressbar.value = percent / 100;
    }
}

function initPlayers(num) {
    // pass num in if there are multiple audio players e.g 'player' + i

    for (var i = 0; i < num; i++) {
        (function () {
            // Variables
            // ----------------------------------------------------------
            // audio embed object
            var playerContainer = document.getElementById('player-container'),
                player = document.getElementById('player'),
                isPlaying = false,
                playBtn = document.getElementById('play-btn');

            // Controls Listeners
            // ----------------------------------------------------------
            if (playBtn != null) {
                playBtn.addEventListener('click', function () {
                    togglePlay();
                });
            }

            // Controls & Sounds Methods
            // ----------------------------------------------------------
            function togglePlay() {
                if (player.paused === false) {
                    player.pause();
                    isPlaying = false;
                    $('#play-btn').removeClass('pause');
                } else {
                    player.play();
                    $('#play-btn').addClass('pause');
                    isPlaying = true;
                }
            }
        })();
    }
}

initPlayers($('#player-container').length);

if ($('#player-container').length) {
    document.getElementById('player').addEventListener('loadedmetadata', function (_event) {
        var player = document.getElementById('player');
        var length = player.duration;
        var current_time = player.currentTime;

        $('.start-time').html(calculateCurrentValue(current_time));
        $('.end-time').html(calculateTotalValue(length));
    });
}

if ($('#map').length) {
    ymaps.ready(init);
}

function init() {
    var myMap = new ymaps.Map(
            'map',
            {
                center: [55.76, 37.64],
                zoom: 10,
            },
            {
                searchControlProvider: 'yandex#search',
            }
        ),
        objectManager = new ymaps.ObjectManager({
            geoObjectOpenBalloonOnClick: false,
            clusterOpenBalloonOnClick: false,
        });

    objectManager.objects.options.set({
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/icons/point.svg',
        iconImageSize: [33, 37],
        iconImageOffset: [-5, -38],
        iconContentOffset: [11, 10],
    });
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: 'js/objects.json',
    }).done(function (data) {
        objectManager.add(data);
    });

    function onObjectEvent(e) {
        var objectId = e.get('objectId');
        if (e.get('type') == 'mousedown') {
            $('.guide__item.active').removeClass('active');
            $('.guide__item[data-id="' + objectId + '"]').addClass('active');

            myMap.setCenter(
                [
                    Number(
                        $('.guide__item[data-id="' + objectId + '"]')
                            .attr('data-coordinate')
                            .match(/(.*), (.*)/)[1]
                    ),
                    Number(
                        $('.guide__item[data-id="' + objectId + '"]')
                            .attr('data-coordinate')
                            .match(/(.*), (.*)/)[2]
                    ),
                ],
                14
            );
        }
    }

    objectManager.objects.events.add(['mousedown', 'mouseup'], onObjectEvent);

    $('body').on('click', '.guide-next', (e) => {
        e.preventDefault();
        let current = $('.guide__item.active');
        let next = current.next();
        if (next.length > 0) {
            current.removeClass('active');
            next.addClass('active');
            myMap.setCenter([Number(next.attr('data-coordinate').match(/(.*), (.*)/)[1]), Number(next.attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
        }
    });

    $('body').on('click', '.guide-prev', (e) => {
        e.preventDefault();
        let current = $('.guide__item.active');
        let prev = current.prev();
        if (prev.length > 0) {
            current.removeClass('active');
            prev.addClass('active');
            myMap.setCenter([Number(prev.attr('data-coordinate').match(/(.*), (.*)/)[1]), Number(prev.attr('data-coordinate').match(/(.*), (.*)/)[2])], 14);
        }
    });

    $('body').on('click', '.guide__item', (e) => {
        e.preventDefault();
        let target = $(e.currentTarget).attr('data-target');
        $('.guide__item.active').removeClass('active');
        $(e.currentTarget).addClass('active');
        $('.guide__content.active').removeClass('active');
        $(target).addClass('active');
        myMap.setCenter(
            [
                Number(
                    $(e.currentTarget)
                        .attr('data-coordinate')
                        .match(/(.*), (.*)/)[1]
                ),
                Number(
                    $(e.currentTarget)
                        .attr('data-coordinate')
                        .match(/(.*), (.*)/)[2]
                ),
            ],
            14
        );
    });
}

$('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('overflow');
});

let ww = $(window).width();

let initTablet768 = () => {
    if (ww >= 768 && ww <= 1023 && !$('body').hasClass('s-768')) {
        $('body').addClass('s-768');
        $('.header__row.bottom').prepend($('.header__row.top .header__contacts'));
    } else if (ww >= 1024 && $('body').hasClass('s-768')) {
        $('body').removeClass('s-768');
        $('.header__row.top').prepend($('.header__row.bottom .header__contacts'));
    }

    if (ww <= 1023) {
        if ($('body').hasClass('s-768') || $('body').hasClass('s-320')) {
        }
    } else {
        // try {
        //     swiperItemThree.destroy();
        //     swiperRubricThree.destroy();
        // } catch {}
    }
};

initTablet768();

$(window).on('resize', () => {
    ww = $(window).width();

    initTablet768();
});

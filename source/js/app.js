$(document).ready(function () {

// slick-carousel

    $('.siema').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        // make it responsive
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 548,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

// timer

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);

// Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
// On click
    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
    });

// menu

    var link = document.querySelector('.hamburger');
    var items = document.querySelectorAll('.menu__item');
    var menu = document.querySelector('.menu');

    link.addEventListener('click', function (e) {
        e.preventDefault();

        menu.classList.toggle('animated');

        if (menu.classList.contains('animated')) {
            [].slice.call(items).forEach(function (item) {
                item.firstElementChild.classList.remove('bounce-in');
            });
        }
    }, true);

    document.querySelector('.menu__left')
        .addEventListener('transitionend', showItems);


    function showItems() {
        var counter = 0;

        function recursion() {
            items[counter].firstElementChild.classList.add('bounce-in');
            counter++;

            if (counter < items.length) {
                setTimeout(recursion, 200);
            }
        }

        recursion();
    }
// header responsive fix
    $(window).scroll(function() {

        var scrollTop = $("body").scrollTop();

        if (window.matchMedia('(max-width: 768px)').matches){
            if( scrollTop > 0 ) {

                $(".header__menu").addClass("header__menu--responsive");

            } else {

                $(".header__menu").removeClass("header__menu--responsive");

            }
        }
// class-remove fix
    }).resize(function() {

        if( window.screen.width > 768 ) {

            $(".header__menu").removeClass("header__menu--responsive");

        }

    });

});

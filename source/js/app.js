$(document).ready(function () {

    // add siema
    const mySiema = new Siema({

        perPage: {
            1920: 4,
            1300: 4,
            992: 3,
            768: 2,
            480: 1
        },
        easing: 'cubic-bezier(.17,.67,.32,1.34)',
        duration: 800

    });
    document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
    document.querySelector('.next').addEventListener('click', () => mySiema.next());

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
// header responsive fixed
function headerFix() {

    $(window).scroll(function() {

        var scrollTop = $("body").scrollTop();

        if( scrollTop > 0 ) {

            $(".header__menu").addClass("header__menu--responsive");

        } else {

            $(".header__menu").removeClass("header__menu--responsive");

        }

    });
}

function checkPosition() {
    if (window.matchMedia('(max-width: 768px)').matches){
        headerFix()
    }
}

    checkPosition()

});

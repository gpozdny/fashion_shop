// add siema
const mySiema = new Siema({

    easing: 'cubic-bezier(.17,.67,.32,1.34)',
    duration: 800

});
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
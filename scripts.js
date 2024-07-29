document.addEventListener('DOMContentLoaded', function () {

    document.body.classList.add('no-scroll');


    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');


        loadingScreen.classList.add('break-animation');


        setTimeout(function () {
            loadingScreen.classList.add('hidden');

            document.body.classList.remove('no-scroll');
        }, 1000);
    }, 1000);
});


document.getElementById('nav-bar-icon').addEventListener('click', function () {
    location.reload();
});


document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        observer.observe(item);
    });
});






document.getElementById('about-link').addEventListener('click', function () {

    var section = document.getElementById('about');
    var position = section.offsetTop - 200;
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
});


document.getElementById('team-link').addEventListener('click', function () {

    var section = document.getElementById('team');
    var position = section.offsetTop - 150;
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
});




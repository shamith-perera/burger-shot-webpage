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
        threshold: 0.05
    });

    items.forEach(item => {
        observer.observe(item);
    });
});






document.getElementById('about-link').addEventListener('click', function () {

    var section = document.getElementById('about');
    var position = section.offsetTop - 300;
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

const words = ["Leap.", "After.", "Lucy."];
        let currentWordIndex = 0;
        const textWrapper = document.getElementById("textWrapper");

        function createLetters(word) {
            textWrapper.innerHTML = ""; 
            word.split("").forEach(letter => {
                const span = document.createElement("span");
                span.className = "letter";
                span.textContent = letter;
                textWrapper.appendChild(span);
            });
        }

        function animateLetters() {
            const letters = document.querySelectorAll(".letter");
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.classList.add("visible");
                }, index * 100); 
            });

           
            setTimeout(() => {
                letters.forEach(letter => {
                    letter.classList.remove("visible");
                });
            }, letters.length * 100 + 1000); 
        }

        function changeText() {
            const currentWord = words[currentWordIndex];
            createLetters(currentWord);
            animateLetters();

            currentWordIndex = (currentWordIndex + 1) % words.length;
        }

        setInterval(changeText, 2000); 
        changeText();



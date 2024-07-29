document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('break-animation');
        setTimeout(function () {
            loadingScreen.classList.add('hidden');
        }, 1000);
    }, 1500);
});
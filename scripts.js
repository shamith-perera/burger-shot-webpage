document.addEventListener('DOMContentLoaded', function() {
    
    document.body.classList.add('no-scroll');

    
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');

       
        loadingScreen.classList.add('break-animation');

      
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
          
            document.body.classList.remove('no-scroll');
        }, 1000); 
    }, 1000);
});


document.getElementById('nav-bar-icon').addEventListener('click', function() {
    location.reload();
});
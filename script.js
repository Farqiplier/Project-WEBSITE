

document.addEventListener('DOMContentLoaded', (event) => {
    loadPage('home'); 
    addScrollAnimations(); 
});

function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html; 
        });
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
} 

function addScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.slide-up, .fade-in');

    function checkScroll() {
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.8) {
                element.classList.add('active');
            } 

            element.classList.add('active'); 
        });
    }

    window.addEventListener('scroll', checkScroll); 
    checkScroll(); 
}

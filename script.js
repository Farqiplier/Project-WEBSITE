// C:\Users\TAKR211206\Desktop\Project WEBSITE\script.js

document.addEventListener('DOMContentLoaded', (event) => {
    loadPage('home'); // Make sure home.html loads by default
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

            // Force elements to be 'active' on initial load:
            element.classList.add('active'); 
        });
    }

    window.addEventListener('scroll', checkScroll); 
    checkScroll(); 
}

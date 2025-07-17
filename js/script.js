// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Issue card click functionality
document.querySelectorAll('.issue-card').forEach((card, index) => {
    card.addEventListener('click', function() {
        const names = [
            'Michele Bolton',
            'Moneeka Sawyer', 
            'Maxim Ivanchuk',
            'Gintare Sido',
            'Nicola Pighi',
            'James W. Keyes',
            'Sims Alagan',
            'Robyn Hills',
            'Carrie Anne Yu',
            'Ana Pastor & Armando Coviello'
        ];
        alert(`View ${names[index] || 'this'} issue - Feature coming soon!`);
    });
});

// Form submission handler
document.querySelector('.subscription-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest. We will review your application.');
});
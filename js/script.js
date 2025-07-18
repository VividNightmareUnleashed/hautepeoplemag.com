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

// Issue card functionality
document.querySelectorAll('.issue-card').forEach((card) => {
    const orderUrl = card.getAttribute('data-order-url');
    const coverImage = card.getAttribute('data-cover');
    
    // Set background image if cover is available
    if (coverImage) {
        const cardCover = card.querySelector('.issue-card-cover');
        if (cardCover) {
            cardCover.style.backgroundImage = `url('${coverImage}')`;
        }
    }
    
    if (orderUrl) {
        // Add click handler only for cards with order URLs
        card.addEventListener('click', function() {
            window.open(orderUrl, '_blank');
        });
        
        // Add a subtle indicator that the card is clickable
        card.title = 'Click to order print copy';
    }
});

// Form submission handler
document.querySelector('.subscription-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest. We will review your application.');
});
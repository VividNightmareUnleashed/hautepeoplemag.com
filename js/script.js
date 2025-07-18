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
    const flipbookUrl = card.getAttribute('data-flipbook');
    
    // Set background image if cover is available
    if (coverImage) {
        const cardCover = card.querySelector('.issue-card-cover');
        if (cardCover) {
            cardCover.style.backgroundImage = `url('${coverImage}')`;
        }
    }
    
    if (flipbookUrl) {
        // Add click handler to open flipbook
        card.addEventListener('click', function(e) {
            // Don't open flipbook if clicking on action buttons
            if (!e.target.closest('.issue-card-actions')) {
                window.open(flipbookUrl, '_blank');
            }
        });
        
        // Add a subtle indicator that the card is clickable
        card.title = 'Click to read digital edition';
    }
});


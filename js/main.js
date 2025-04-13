// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .value-item, .testimonial-item, .gallery-item, .faq-item').forEach(item => {
    observer.observe(item);
});

// Catalog filters (mock)
const filters = document.querySelectorAll('.filter');
const productCards = document.querySelectorAll('.product-card');

filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const styleFilter = document.querySelector('[data-filter="style"]').value;
        const colorFilter = document.querySelector('[data-filter="color"]').value;
        const materialFilter = document.querySelector('[data-filter="material"]').value;

        productCards.forEach(card => {
            const style = card.dataset.style;
            const color = card.dataset.color;
            const material = card.dataset.material;

            const styleMatch = styleFilter === 'all' || styleFilter === style;
            const colorMatch = colorFilter === 'all' || colorFilter === color;
            const materialMatch = materialFilter === 'all' || materialFilter === material;

            card.style.display = styleMatch && colorMatch && materialMatch ? 'block' : 'none';
        });
    });
});

// Product page gallery
const mainImage = document.querySelector('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

if (mainImage && thumbnails) {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            mainImage.src = thumbnail.src;
        });
    });
}

// FAQ accordion
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}
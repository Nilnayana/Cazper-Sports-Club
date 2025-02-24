// Page loader
window.addEventListener('load', () => {
    // Hide loader after page is fully loaded
    const loader = document.querySelector('.page-loader');
    loader.classList.add('loaded');
    
    // Remove loader from DOM after animation completes
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // matches the transition time in CSS
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.facility-card, .history-content, .contact-container')
    .forEach(element => observer.observe(element));

// Form submission
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Image lazy loading
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Plan Selection
document.querySelectorAll('.select-plan').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.dataset.plan;
        document.getElementById('selectedPlan').value = plan.charAt(0).toUpperCase() + plan.slice(1);
        document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission
document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your registration! We will contact you shortly.');
    this.reset();
});
// Initialize AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');

// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form values
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const subject = document.getElementById('subject').value;
//         const message = document.getElementById('message').value;
        
//         // Here you would typically send the form data to a server
//         // For now, we'll just log it and show an alert
//         console.log({ name, email, subject, message });
        
//         alert('Thank you for your message! I will get back to you soon.');
//         contactForm.reset();
//     });
// }
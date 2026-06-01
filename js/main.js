/* =============================================
   JAGESHWAR RANA PORTFOLIO — main.js
   ============================================= */

/* ---------- AOS Init ---------- */
AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60
});

/* ---------- Mobile Menu ---------- */
const mobileMenuBtn  = document.getElementById('mobile-menu-button');
const mobileMenu     = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close when a link is clicked
document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ---------- Smooth Scroll ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
        }
    });
});

/* ---------- Active Nav on Scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActiveNav() {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', setActiveNav, { passive: true });

/* ---------- Back to Top Button ---------- */
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- Contact Form — Fetch + FormSubmit ----------
   FormSubmit.co works with both <form> POST and fetch().
   Using fetch gives us full control: show success/error
   messages without redirecting away from the portfolio.
   -------------------------------------------------------- */
const form       = document.getElementById('contact-form');
const submitBtn  = document.getElementById('form-submit-btn');
const successMsg = document.getElementById('form-success');
const errorMsg   = document.getElementById('form-error');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();   // stop normal POST redirect

        // Button loading state
        submitBtn.disabled    = true;
        submitBtn.innerHTML   = '<i class="fas fa-spinner fa-spin text-sm"></i> Sending…';

        // Hide any previous messages
        successMsg.classList.remove('show');
        errorMsg.classList.remove('show');

        // Build form data
        const data = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/jageshwarrana25@gmail.com', {
                method:  'POST',
                headers: { 'Accept': 'application/json' },
                body:    data
            });

            if (response.ok) {
                successMsg.classList.add('show');
                form.reset();
            } else {
                errorMsg.classList.add('show');
            }
        } catch (err) {
            // Network error
            errorMsg.classList.add('show');
        } finally {
            submitBtn.disabled  = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane text-sm"></i> Send Message';
        }
    });
}
// ===== Toggle Navbar =====
const header = document.querySelector('header');
const menuButton = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuButton.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', navbar.classList.contains('active'));
};

// ===== Active Navbar Links on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        const activeLink = document.querySelector(`header nav a[href*="${id}"]`);

        if (top >= offset && top < offset + height && activeLink) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            activeLink.classList.add('active');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', top > 100);

    // Close menu on scroll (mobile)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    });
});

// ===== Scroll Reveal Animation =====
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 1600,
        delay: 150
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-image, .skill-box, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}






if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['Undergraduate Student', 'Software Developer', 'Frontend Developer'],
        typeSpeed: 90,
        backSpeed: 70,
        backDelay: 1200,
        loop: true
    });
}

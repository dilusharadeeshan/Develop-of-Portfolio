// ===== Toggle Navbar =====
let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== Active Navbar Links on Scroll =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', top > 100);

    // Close menu on scroll (mobile)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ===== Scroll Reveal Animation =====
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });






const typed = new Typed('.multiple-text', {
  strings: ['Undergraduater', 'Software Developer', 'Student'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
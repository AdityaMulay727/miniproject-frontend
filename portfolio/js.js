// ✅ Scroll to Contact section smoothly
function scrollToContact() {
    const contact = document.getElementById('contact');
    const navHeight = document.getElementById('navbar').offsetHeight;
    window.scrollTo({
        top: contact.offsetTop - navHeight,
        behavior: 'smooth'
    });
}

// ✅ Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ✅ Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navHeight = document.getElementById('navbar').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// ✅ Active nav link highlight on scroll
const sections = document.querySelectorAll('section, .hero-section, .about, .contact, #portfolio');
const navLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
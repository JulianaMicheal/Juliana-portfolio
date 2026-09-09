const menu = document.getElementById('nav-menu');
const toggle = document.getElementById('nav-toggle');
const close = document.getElementById('nav-close');

function setMenu(open) {
  menu.classList.toggle('show-menu', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => setMenu(true));
close.addEventListener('click', () => setMenu(false));
document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', () => setMenu(false)));

const header = document.getElementById('header');
addEventListener('scroll', () => header.classList.toggle('is-scrolled', scrollY > 12), { passive: true });
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

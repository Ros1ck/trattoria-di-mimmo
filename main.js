const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const target = link.getAttribute('href');
  if (target === current) link.classList.add('active');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('[data-demo-form]');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.querySelector('[name="nome"]').value.trim();
    const people = form.querySelector('[name="persone"]').value;
    const date = form.querySelector('[name="data"]').value;
    const message = encodeURIComponent(`Ciao, sono ${name}. Vorrei prenotare un tavolo per ${people} persone in data ${date}.`);
    window.open(`https://wa.me/393278627286?text=${message}`, '_blank', 'noopener');
  });
}

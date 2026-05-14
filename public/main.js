/* ============================================
   NAMENLOS TATTOO — main.js
   ============================================ */

// Language switcher
function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
  document.getElementById('btn-de').classList.toggle('active', lang === 'de');
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

// Restore saved language on load
try {
  if (localStorage.getItem('lang') === 'de') setLang('de');
} catch(e) {}

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.innerHTML = open
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

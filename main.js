/* ═══════════════════════════════════════════════════════════════
   ADRIANOS SPORTSWEAR — main.js
   1. Hamburger menu
   2. Navbar shrink al scroll
   3. Fade-in de secciones al entrar en pantalla
═══════════════════════════════════════════════════════════════ */
 
document.addEventListener('DOMContentLoaded', () => {
 
  /* ══════════════════════════════════
     1. HAMBURGER
  ══════════════════════════════════ */
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
 
  hamburger && hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
 
    // Animar las 3 líneas a una X
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });
 
  // Cerrar menú al hacer click en un link
  mobileMenu && mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });
 
  /* ══════════════════════════════════
     2. NAVBAR SHRINK AL SCROLL
  ══════════════════════════════════ */
  const navbar = document.querySelector('.navbar');
 
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
 
  /* ══════════════════════════════════
     3. FADE-IN DE SECCIONES
  ══════════════════════════════════ */
  const revealEls = document.querySelectorAll('[data-reveal]');
 
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // solo una vez
        }
      });
    }, {
      threshold: 0.12,   // aparece cuando el 12% es visible
      rootMargin: '0px 0px -40px 0px'
    });
 
    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback para navegadores viejos
    revealEls.forEach(el => el.classList.add('revealed'));
  }
 
});
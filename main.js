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
  
  /*  ══════════════════════════════════
     4. SLIDE DE IMG
  ══════════════════════════════════ */
    const total = 4;         // Número de imágenes
    const intervalo = 3000;  // Milisegundos entre cada cambio (3 segundos)
    let actual = 0;
    let timer;

    // Crear puntos de navegación dinámicamente
    const dotsEl = document.getElementById('dots');
    for (let i = 0; i < total; i++) {
      const d = document.createElement('div');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.onclick = () => irA(i);
      dotsEl.appendChild(d);
    }

    function irA(n) {
      actual = (n + total) % total;
      document.getElementById('slides').style.transform = `translateX(-${actual * 100}%)`;
      document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === actual);
      });
    }

    function cambiar(dir) {
      irA(actual + dir);
      reiniciarTimer(); // Reinicia el temporizador al hacer clic
    }

    function reiniciarTimer() {
      clearInterval(timer);
      timer = setInterval(() => irA(actual + 1), intervalo);
    }

    // Iniciar el autoplay
    reiniciarTimer();

    /*===============================
    CARRUSEL COLECCION
    ==================================*/ 
const carouselTrack = document.getElementById('carouselTrack');
let carouselIndex = 0;

function actualizarCarousel() {
  if (!carouselTrack) return;
  const items = [...carouselTrack.querySelectorAll('.carousel-item')];
  if (!items.length) return;

  const itemW = 300; // mismo valor que el CSS
  const gap = 24;
  const wrapperW = carouselTrack.parentElement.offsetWidth;

  // Centrar el item activo
  const offset = (wrapperW / 2) - (itemW / 2) - (carouselIndex * (itemW + gap));
  carouselTrack.style.transform = `translateX(${offset}px)`;

  items.forEach((item, i) => {
    const dist = Math.abs(i - carouselIndex);
    item.classList.toggle('active', i === carouselIndex);
    item.style.opacity = dist === 0 ? '1' : dist === 1 ? '0.4' : '0.2';
    item.style.transform = dist === 0 ? 'scale(1)' : 'scale(0.88)';
  });
}

function moverCarousel(dir) {
  if (!carouselTrack) return;
  const total = carouselTrack.querySelectorAll('.carousel-item').length;
  carouselIndex = (carouselIndex + dir + total) % total;
  actualizarCarousel();
}

document.getElementById('prevBtn')?.addEventListener('click', () => moverCarousel(-1));
document.getElementById('nextBtn')?.addEventListener('click', () => moverCarousel(1));

actualizarCarousel();
window.addEventListener('resize', actualizarCarousel);
});
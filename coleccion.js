/* ══════════════════════════════════════════════════════════════
   ① CATÁLOGO DE PRODUCTOS
   imgs: [ principal, hover, extra1, extra2, ... ]
         La primera imagen es la que se ve en la card.
         La segunda es la que aparece al pasar el mouse (hover).
         Las demás aparecen en la galería del modal.
   colores:  azul | crema | negro | rojo | blanco | verde | cafe
   calidad:  premium | basica
   badge:    "Nuevo" | "Popular" | "Ed. Limitada" | ""
   tallas:   las que apliquen al producto
═══════════════════════════════════════════════════════════ */
const PRODUCTOS = [
  {
    id: 1,
    nombre:  "Tetakawi Classic",
    descripcion:    "La esencia de San Carlos en una sola prenda. Corte recto, tela 100% algodón peinado de 180g. Perfecta para el malecón o la playa.",
    precio:  350,
    calidad: "premium",
    colores: ["blanco"],
    badge:   "Nuevo",
    tallas:  ["XS", "S", "M", "L", "XL", "XXL"],
    imgs:    ["img/prueba.webp", "img/tetakawi.webp", "img/logo.webp", "img/prueba.webp"]
  },
  {
    id: 2,
    nombre:  "Costa Brava",
    descripcion:    "Cómoda, fresca y lista para cualquier aventura. Diseño oversize con estampado exclusivo de San Carlos.",
    precio:  380,
    calidad: "premium",
    colores: ["crema"],
    badge:   "Popular",
    tallas:  ["S", "M", "L", "XL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 3,
    nombre:  "Marea Alta",
    descripcion:    "Estilo relajado, calidad que se nota. Ideal para el día a día con un toque costero.",
    precio:  280,
    calidad: "basica",
    colores: ["negro"],
    badge:   "",
    tallas:  ["S", "M", "L", "XL", "XXL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 4,
    nombre:  "Atardecer Sonorense",
    descripcion:    "Inspirada en los cielos únicos del golfo. Edición limitada con paleta de colores cálidos.",
    precio:  420,
    calidad: "premium",
    colores: ["crema"],
    badge:   "Nuevo",
    tallas:  ["S", "M", "L"],
    imgs:    ["img/prueba.webp", "img/prueba.webp", "img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 5,
    nombre:  "Mar de Cortés",
    descripcion:    "El azul del golfo, siempre contigo. Tela ligera perfecta para el calor de Sonora.",
    precio:  370,
    calidad: "premium",
    colores: ["azul"],
    badge:   "",
    tallas:  ["XS", "S", "M", "L", "XL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 6,
    nombre:  "Playa Algodones",
    descripcion:    "Fresca como la brisa del Golfo. Corte unisex y tela transpirable.",
    precio:  260,
    calidad: "basica",
    colores: ["blanco"],
    badge:   "",
    tallas:  ["S", "M", "L", "XL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 7,
    nombre:  "Desierto & Mar",
    descripcion:    "Donde el sonorense vive dos mundos. Tonos tierra inspirados en el paisaje sonorense.",
    precio:  270,
    calidad: "basica",
    colores: ["cafe"],
    badge:   "",
    tallas:  ["S", "M", "L", "XL", "XXL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 8,
    nombre:  "Rojo Verano",
    descripcion:    "Atrévete a destacar en la orilla. Estampado bold con referencia al Tetakawi.",
    precio:  390,
    calidad: "premium",
    colores: ["rojo"],
    badge:   "Nuevo",
    tallas:  ["XS", "S", "M", "L", "XL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp", "img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 9,
    nombre:  "Sonora Soul",
    descripcion:    "El alma de Sonora en hilo y tela. Diseño minimalista con alma costera.",
    precio:  360,
    calidad: "premium",
    colores: ["blanco"],
    badge:   "",
    tallas:  ["S", "M", "L", "XL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 10,
    nombre:  "Brisa Verde",
    descripcion:    "Naturaleza y costa en un solo look. Verde selva que combina con la arena.",
    precio:  250,
    calidad: "basica",
    colores: ["verde"],
    badge:   "",
    tallas:  ["S", "M", "L", "XL", "XXL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 11,
    nombre:  "Noche de Verano",
    descripcion:    "Para cuando el sol cae y sigue la fiesta. Oscura, limpia, perfecta.",
    precio:  400,
    calidad: "premium",
    colores: ["azul"],
    badge:   "",
    tallas:  ["XS", "S", "M", "L", "XL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp", "img/prueba.webp"]
  },
  {
    id: 12,
    nombre:  "Casual San Carlos",
    descripcion:    "Lo de siempre, pero con estilo propio. Para el día a día en la ciudad o la costa.",
    precio:  255,
    calidad: "basica",
    colores: ["rojo"],
    badge:   "",
    tallas:  ["S", "M", "L", "XL", "XXL"],
    imgs:    ["img/prueba.webp", "img/prueba.webp"]
  }
];
 
/* ══════════════════════════════════════════════════════════════
   ② CONFIG DE COLORES
══════════════════════════════════════════════════════════════ */
const COLOR_HEX = {
  azul:   { hex: "#3B6FA0", border: false },
  crema:  { hex: "#F5F0E8", border: true  },
  negro:  { hex: "#111111", border: false },
  rojo:   { hex: "#C0392B", border: false },
  blanco: { hex: "#FFFFFF", border: true  },
  verde:  { hex: "#2E7D50", border: false },
  cafe:   { hex: "#7B4F2E", border: false }
};
 
/* ══════════════════════════════════════════════════════════════
   ③ GENERADOR DE CARDS
══════════════════════════════════════════════════════════════ */
function crearCard(producto, delay = 0) {
  const { id, nombre, descripcion, precio, calidad, colores, badge, imgs } = producto;
 
  const imgPrincipal = imgs[0];
  const imgHover     = imgs[1] || imgs[0];
 
  const badgeHTML = badge
    ? `<span class="product-badge ${badge === 'Popular' ? 'popular' : ''}">${badge}</span>`
    : '';
 
  const dotsHTML = colores.map(c => {
    const { hex, border } = COLOR_HEX[c] || { hex: '#ccc', border: false };
    return `<span style="background:${hex};${border ? 'border:1.5px solid #ccc;' : ''}" title="${c}"></span>`;
  }).join('');
 
  const calidadLabel = calidad === 'premium' ? 'Premium' : 'Básica';
 
  const card = document.createElement('article');
  card.className = 'product-card';
  card.style.animationDelay = `${delay}ms`;
  card.dataset.id      = id;
  card.dataset.nombre  = nombre.toLowerCase();
  card.dataset.calidad = calidad;
  card.dataset.colores = colores.join(',');
 
  card.innerHTML = `
    <div class="product-img-wrap" data-img-principal="${imgPrincipal}" data-img-hover="${imgHover}">
      <img src="${imgPrincipal}" alt="${nombre}" loading="lazy" class="card-img" />
      <div class="product-overlay">
        <button class="btn-ver-mas">Ver producto</button>
      </div>
      ${badgeHTML}
    </div>
    <div class="product-info">
      <h3>${nombre}</h3>
      <p class="product-descripcion">${descripcion}</p>
      <div class="product-footer">
        <span class="product-price">$${precio} MXN</span>
        <div class="color-dots">${dotsHTML}</div>
      </div>
      <span class="quality-tag ${calidad}">${calidadLabel}</span>
    </div>
  `;
 
  const wrap = card.querySelector('.product-img-wrap');
  const img  = card.querySelector('.card-img');
 
  wrap.addEventListener('mouseenter', () => {
    img.classList.add('img-transitioning');
    img.src = imgHover;
  });
  wrap.addEventListener('mouseleave', () => {
    img.src = imgPrincipal;
    setTimeout(() => img.classList.remove('img-transitioning'), 300);
  });
 
  wrap.querySelector('.btn-ver-mas').addEventListener('click', (e) => {
    e.stopPropagation();
    abrirModal(id);
  });
  card.querySelector('.product-info').addEventListener('click', () => abrirModal(id));
 
  return card;
}
 
/* ══════════════════════════════════════════════════════════════
   ④ MODAL
══════════════════════════════════════════════════════════════ */
let modalImgActual = 0;
 
function abrirModal(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return;
 
  modalImgActual = 0;
 
  const calidadLabel = p.calidad === 'premium' ? 'Premium' : 'Básica';
  const badgeHTML    = p.badge
    ? `<span class="modal-badge ${p.badge === 'Popular' ? 'popular' : ''}">${p.badge}</span>`
    : '';
 
  const thumbsHTML = p.imgs.map((src, i) => `
    <button class="modal-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
      <img src="${src}" alt="${p.nombre} vista ${i + 1}" />
    </button>
  `).join('');
 
  const dotsHTML = p.colores.map(c => {
    const { hex, border } = COLOR_HEX[c] || { hex: '#ccc', border: false };
    return `<span class="modal-color-dot" style="background:${hex};${border ? 'border:1.5px solid #ccc;' : ''}" title="${c}"></span>`;
  }).join('');
 
  const tallasHTML = p.tallas.map(t => `<button class="talla-btn">${t}</button>`).join('');
 
  const bulletsHTML = p.imgs.map((_, i) =>
    `<span class="modal-bullet ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');
 
  const modal = document.getElementById('productoModal');
  modal.innerHTML = `
    <div class="modal-backdrop" id="modalBackdrop"></div>
    <div class="modal-box" role="dialog" aria-modal="true" aria-label="${p.nombre}">
      <button class="modal-close" id="modalClose" aria-label="Cerrar">
        <i class="fas fa-times"></i>
      </button>
      <div class="modal-gallery">
        <div class="modal-img-main">
          <img src="${p.imgs[0]}" alt="${p.nombre}" id="modalImgPrincipal" />
          ${p.imgs.length > 1 ? `
            <button class="gallery-arrow left" id="galleryPrev"><i class="fas fa-chevron-left"></i></button>
            <button class="gallery-arrow right" id="galleryNext"><i class="fas fa-chevron-right"></i></button>
          ` : ''}
          <div class="modal-bullets">${bulletsHTML}</div>
        </div>
        ${p.imgs.length > 1 ? `<div class="modal-thumbs">${thumbsHTML}</div>` : ''}
      </div>
      <div class="modal-info">
        <div class="modal-info-top">
          ${badgeHTML}
          <span class="modal-calidad ${p.calidad}">${calidadLabel}</span>
        </div>
        <h2 class="modal-nombre">${p.nombre}</h2>
        <p class="modal-precio">$${p.precio} <span>MXN</span></p>
        <p class="modal-descripcion">${p.descripcion}</p>
        <div class="modal-section">
          <p class="modal-label">Colores disponibles</p>
          <div class="modal-colors">${dotsHTML}</div>
        </div>
        <div class="modal-section">
          <p class="modal-label">Selecciona tu talla</p>
          <div class="modal-tallas">${tallasHTML}</div>
        </div>
        <p class="talla-error" style="display:none; color:#e74c3c; font-size:0.82rem; font-family:var(--font-condensed); font-weight:700; letter-spacing:0.08em; text-transform:uppercase; align-items:center; gap:0.4rem;">
          <i class="fas fa-exclamation-circle"></i> Debes seleccionar una talla
        </p>
        <button class="btn-modal-carrito">
          <i class="fas fa-shopping-bag"></i> Agregar al carrito
        </button>
        <p class="modal-envio">
          <i class="fas fa-truck"></i> Envío disponible a todo México
        </p>
      </div>
    </div>
  `;
 
  document.getElementById('modalClose').addEventListener('click', cerrarModal);
  document.getElementById('modalBackdrop').addEventListener('click', cerrarModal);
 
  const btnPrev = document.getElementById('galleryPrev');
  const btnNext = document.getElementById('galleryNext');
  if (btnPrev) btnPrev.addEventListener('click', () => cambiarImgModal(p, modalImgActual - 1));
  if (btnNext) btnNext.addEventListener('click', () => cambiarImgModal(p, modalImgActual + 1));
 
  modal.querySelectorAll('.modal-thumb').forEach(btn => {
    btn.addEventListener('click', () => cambiarImgModal(p, parseInt(btn.dataset.index)));
  });
 
  modal.querySelectorAll('.modal-bullet').forEach(b => {
    b.addEventListener('click', () => cambiarImgModal(p, parseInt(b.dataset.index)));
  });
 
   modal.querySelectorAll('.talla-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.querySelectorAll('.talla-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      modal.querySelector('.talla-error').style.display = 'none';
    }); 
  });
 
  let touchStartX = 0;
  const modalBox = modal.querySelector('.modal-box');
  modalBox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  modalBox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) cambiarImgModal(p, modalImgActual + (diff > 0 ? 1 : -1));
  });
 
  document.addEventListener('keydown', onKeyModal);
 
  /* Botón agregar al carrito */
  modal.querySelector('.btn-modal-carrito').addEventListener('click', () => {
  const tallaActiva = modal.querySelector('.talla-btn.active');
  const errorEl = modal.querySelector('.talla-error');
  if (!tallaActiva) {
    errorEl.style.display = 'flex';
    return;
  }
  errorEl.style.display = 'none';
  agregarAlCarrito(p, tallaActiva.textContent.trim());
});
 
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function cambiarImgModal(producto, nuevoIndex) {
  const total = producto.imgs.length;
  modalImgActual = (nuevoIndex + total) % total;
 
  const imgEl   = document.getElementById('modalImgPrincipal');
  const thumbs  = document.querySelectorAll('.modal-thumb');
  const bullets = document.querySelectorAll('.modal-bullet');
 
  imgEl.classList.add('fade-out');
  setTimeout(() => {
    imgEl.src = producto.imgs[modalImgActual];
    imgEl.classList.remove('fade-out');
  }, 150);
 
  thumbs.forEach((t, i)  => t.classList.toggle('active', i === modalImgActual));
  bullets.forEach((b, i) => b.classList.toggle('active', i === modalImgActual));
}
 
function cerrarModal() {
  const modal = document.getElementById('productoModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onKeyModal);
}
 
function onKeyModal(e) {
  if (e.key === 'Escape') cerrarModal();
}
 
/* ══════════════════════════════════════════════════════════════
   ⑤ CARRITO — scope global para que abrirModal pueda accederlo
══════════════════════════════════════════════════════════════ */
let carrito = JSON.parse(localStorage.getItem('adrianos_carrito') || '[]'); 

function guardarCarrito() {
  localStorage.setItem('adrianos_carrito', JSON.stringify(carrito));
}

function abrirCarrito() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function cerrarCarrito() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
 
function agregarAlCarrito(producto, talla) {
  const existente = carrito.find(i => i.id === producto.id && i.talla === talla);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      talla: talla,
      img: producto.imgs[0],
      cantidad: 1
    });
  }
  guardarCarrito();
  renderCarrito();
  actualizarContadorNav();
  cerrarModal();
  abrirCarrito();
}
 
function renderCarrito() {
  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl  = document.getElementById('cartTotalPrice');
  const waBtn    = document.getElementById('btnWhatsapp');

  itemsEl.innerHTML = '';

  if (carrito.length === 0) {
    footerEl.style.display = 'none';
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Tu carrito está vacío</p>
      </div>
    `;
    return;
  }

  footerEl.style.display = 'block';
  
  carrito.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.nombre}" />
      </div>
      <div class="cart-item-info">
        <h4>${item.nombre}</h4>
        <p class="cart-item-talla">Talla: ${item.talla}</p>
        <div class="cart-item-qty-row">
          <button class="qty-btn" data-id="${item.id}" data-talla="${item.talla}" data-action="menos">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="qty-btn" data-id="${item.id}" data-talla="${item.talla}" data-action="mas">+</button>
        </div>
        <span class="cart-item-price">$${item.precio * item.cantidad} MXN</span>
      </div>
      <button class="cart-item-delete" data-id="${item.id}" data-talla="${item.talla}" aria-label="Eliminar">
        <i class="fas fa-times"></i>
      </button>
    `;
    itemsEl.appendChild(div);
  });
 
  itemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = carrito.find(i => i.id == btn.dataset.id && i.talla === btn.dataset.talla);
      if (!item) return;
      if (btn.dataset.action === 'mas') {
        item.cantidad++;
      } else {
        item.cantidad--;
        if (item.cantidad <= 0) {
          carrito = carrito.filter(i => !(i.id == btn.dataset.id && i.talla === btn.dataset.talla));
        }
      }
      guardarCarrito();
      renderCarrito();
      actualizarContadorNav();
    });
  });
 
  itemsEl.querySelectorAll('.cart-item-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      carrito = carrito.filter(i => !(i.id == btn.dataset.id && i.talla === btn.dataset.talla));
      guardarCarrito();
      renderCarrito();
      actualizarContadorNav();
    });
  });
 
  const total = carrito.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  totalEl.innerHTML = `$${total} <span>MXN</span>`;
 
  const numero = '526221743318';
  let msg = '¡Hola! Me gustaría realizar el siguiente pedido de Adrianos Sportswear:\n\n';
  carrito.forEach(i => {
    msg += `• ${i.nombre} — Talla ${i.talla} × ${i.cantidad} = $${i.precio * i.cantidad} MXN\n`;
  });
  msg += `\n*Total: $${total} MXN*\n\n¿Cómo procedo con el pago?`;
  waBtn.href = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}
 
function actualizarContadorNav() {
  const total = carrito.reduce((sum, i) => sum + i.cantidad, 0);
  document.querySelector('.cart-count').textContent = total;
}
 
/* ══════════════════════════════════════════════════════════════
   ⑥ FILTROS, BÚSQUEDA Y EVENT LISTENERS DEL DOM
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
 
  const grid             = document.getElementById('productsGrid');
  const noResults        = document.getElementById('noResults');
  const resultsCount     = document.getElementById('resultsCount');
  const searchInput      = document.getElementById('searchInput');
  const clearSearchBtn   = document.getElementById('clearSearch');
  const toggleFiltersBtn = document.getElementById('toggleFilters');
  const filtersPanel     = document.getElementById('filtersPanel');
  const filterBadge      = document.getElementById('filterBadge');
  const applyFiltersBtn  = document.getElementById('applyFilters');
  const clearFiltersBtn  = document.getElementById('clearFilters');
  const activeFiltersBar = document.getElementById('activeFiltersBar');
  const activeTags       = document.getElementById('activeTags');
  const clearAllTags     = document.getElementById('clearAllTags');
  const resetSearch      = document.getElementById('resetSearch');
  const hamburger        = document.querySelector('.hamburger');
  const mobileMenu       = document.querySelector('.mobile-menu');
 
  let activeFilters = { calidad: [], color: [] };
  let searchTerm    = '';
  let allCards      = [];
 
  /* ─── Render inicial ─── */
  function renderAll() {
    grid.innerHTML = '';
    allCards = [];
    PRODUCTOS.forEach((p, i) => {
      const card = crearCard(p, i * 40);
      grid.appendChild(card);
      allCards.push(card);
    });
    updateCount(PRODUCTOS.length);
  }
 
  renderAll();
 
  /* ─── Búsqueda ─── */
  searchInput.addEventListener('input', () => {
    searchTerm = searchInput.value.trim().toLowerCase();
    clearSearchBtn.classList.toggle('visible', searchTerm.length > 0);
    applyAndRender();
  });
 
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    clearSearchBtn.classList.remove('visible');
    searchInput.focus();
    applyAndRender();
  });
 
  /* ─── Toggle filtros ─── */
  toggleFiltersBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = filtersPanel.classList.toggle('open');
    toggleFiltersBtn.classList.toggle('active', isOpen);
    toggleFiltersBtn.setAttribute('aria-expanded', isOpen);
  });
 
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar-zone')) {
      filtersPanel.classList.remove('open');
      toggleFiltersBtn.classList.remove('active');
      toggleFiltersBtn.setAttribute('aria-expanded', 'false');
    }
  });
 
  /* ─── Aplicar / limpiar filtros ─── */
  applyFiltersBtn.addEventListener('click', () => {
    activeFilters.calidad = [...document.querySelectorAll('input[name="calidad"]:checked')].map(cb => cb.value);
    activeFilters.color   = [...document.querySelectorAll('input[name="color"]:checked')].map(cb => cb.value);
    filtersPanel.classList.remove('open');
    toggleFiltersBtn.classList.remove('active');
    applyAndRender();
    renderActiveTags();
    updateFilterBadge();
  });
 
  clearFiltersBtn.addEventListener('click', resetFilters);
  clearAllTags.addEventListener('click', resetFilters);
  resetSearch && resetSearch.addEventListener('click', () => {
    searchInput.value = ''; searchTerm = '';
    clearSearchBtn.classList.remove('visible');
    resetFilters();
  });
 
  /* ─── Filtrado ─── */
  function applyAndRender() {
    let visible = 0;
    allCards.forEach(card => {
      const ok =
        (searchTerm === '' || card.dataset.nombre.includes(searchTerm)) &&
        (activeFilters.calidad.length === 0 || activeFilters.calidad.includes(card.dataset.calidad)) &&
        (activeFilters.color.length === 0   || activeFilters.color.some(c => card.dataset.colores.split(',').includes(c)));
      card.classList.toggle('hidden', !ok);
      if (ok) visible++;
    });
    updateCount(visible);
    grid.style.display      = visible > 0 ? '' : 'none';
    noResults.style.display = visible > 0 ? 'none' : 'block';
  }
 
  function updateCount(n) {
    resultsCount.textContent = n === 1 ? '1 producto' : `${n} productos`;
  }
 
  /* ─── Tags activos ─── */
  const LABELS = {
    calidad: { premium: '⭐ Premium', basica: 'Básica' },
    color: { azul:'🔵 Azul', crema:'Crema', negro:'⚫ Negro', rojo:'🔴 Rojo', blanco:'⚪ Blanco', verde:'🟢 Verde', cafe:'🟤 Café' }
  };
 
  function renderActiveTags() {
    activeTags.innerHTML = '';
    const all = [
      ...activeFilters.calidad.map(v => ({ group: 'calidad', value: v })),
      ...activeFilters.color.map(v   => ({ group: 'color',   value: v }))
    ];
    activeFiltersBar.style.display = all.length > 0 ? 'block' : 'none';
    all.forEach(({ group, value }) => {
      const tag = document.createElement('div');
      tag.className = 'active-tag';
      tag.innerHTML = `<span>${LABELS[group][value]}</span><button><i class="fas fa-times"></i></button>`;
      tag.querySelector('button').addEventListener('click', () => {
        document.querySelector(`input[name="${group}"][value="${value}"]`).checked = false;
        activeFilters[group] = activeFilters[group].filter(v => v !== value);
        applyAndRender(); renderActiveTags(); updateFilterBadge();
      });
      activeTags.appendChild(tag);
    });
  }
 
  function updateFilterBadge() {
    const total = activeFilters.calidad.length + activeFilters.color.length;
    filterBadge.textContent = total;
    filterBadge.style.display = total > 0 ? 'flex' : 'none';
  }
 
  function resetFilters() {
    document.querySelectorAll('input[name="calidad"], input[name="color"]').forEach(cb => cb.checked = false);
    activeFilters = { calidad: [], color: [] };
    applyAndRender(); renderActiveTags(); updateFilterBadge();
  }
 
  /* ─── Hamburger ─── */
  hamburger && hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
 
  /* ─── Event listeners del carrito ─── */
  document.getElementById('cartCloseBtn').addEventListener('click', cerrarCarrito);
  document.getElementById('cartOverlay').addEventListener('click', cerrarCarrito);
  document.querySelector('.btn-cart').addEventListener('click', abrirCarrito);
 
  actualizarContadorNav();
  renderCarrito();
});
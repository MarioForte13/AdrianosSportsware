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
    if (typeof cerrarModal === 'function') cerrarModal();
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
 
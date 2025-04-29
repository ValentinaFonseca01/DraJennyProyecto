// Elementos necesarios
const servicios = document.querySelectorAll('.servicio');
const categoriaBotones = document.querySelectorAll('.menu-categorias button');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('pagination-dots');

// Variables de control
let paginaActual = 0;
const serviciosPorPagina = 4;
let categoriaActual = 'todos';

// Filtrar servicios según categoría
function filtrarServicios() {
  if (categoriaActual === 'todos') {
    return Array.from(servicios);
  } else {
    return Array.from(servicios).filter(servicio => servicio.dataset.category === categoriaActual);

  }
}

// Para mostrar los servicios de la página actual
function mostrarServicios() {
  servicios.forEach(servicio => servicio.style.display = 'none');

  const filtrados = filtrarServicios();
  const inicio = paginaActual * serviciosPorPagina;
  const fin = inicio + serviciosPorPagina;
  const pagina = filtrados.slice(inicio, fin);

  pagina.forEach(servicio => servicio.style.display = 'block');

  actualizarDots();
}

// Para actualizar los circulitos de paginación
function actualizarDots() {
  dotsContainer.innerHTML = '';
  const filtrados = filtrarServicios();
  const totalPaginas = Math.ceil(filtrados.length / serviciosPorPagina);

  for (let i = 0; i < totalPaginas; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === paginaActual) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      paginaActual = i;
      mostrarServicios();
    });
    dotsContainer.appendChild(dot);
  }
}

// Función para cambiar categoría
categoriaBotones.forEach(boton => {
  boton.addEventListener('click', () => {
    categoriaActual = boton.dataset.category;
    // 
    paginaActual = 0; // Volvemos a la primera página al cambiar de categoría
    mostrarServicios();

    categoriaBotones.forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');
  });
});

// Funciones para los botones de navegación
nextBtn.addEventListener('click', () => {
  const filtrados = filtrarServicios();
  const totalPaginas = Math.ceil(filtrados.length / serviciosPorPagina);

  paginaActual++;
  if (paginaActual >= totalPaginas) {
    paginaActual = 0; // Si llegamos al final, volvemos al principio
  }
  mostrarServicios();
});

prevBtn.addEventListener('click', () => {
  const filtrados = filtrarServicios();
  const totalPaginas = Math.ceil(filtrados.length / serviciosPorPagina);

  paginaActual--;
  if (paginaActual < 0) {
    paginaActual = totalPaginas - 1; // Si estamos en el principio, vamos al final
  }
  mostrarServicios();
});

// Inicializar todo al cargar
mostrarServicios();

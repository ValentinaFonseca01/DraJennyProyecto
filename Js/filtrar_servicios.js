document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll('.categoria-btn');
    const servicios = document.querySelectorAll('.servicio');
  
    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        const categoriaSeleccionada = boton.getAttribute('data-category');
  
        // Actualiza visualmente el botón activo
        botones.forEach(b => b.classList.remove('active'));
        boton.classList.add('active');
  
        // Muestra u oculta servicios según categoría
        servicios.forEach(servicio => {
          const categoriaServicio = servicio.getAttribute('data-category');
          if (categoriaSeleccionada === 'todos' || categoriaServicio === categoriaSeleccionada) {
            servicio.classList.remove('hidden');
          } else {
            servicio.classList.add('hidden');
          }
        });
      });
    });
  });
  
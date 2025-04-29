document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const carruselInner = document.querySelector(".carrusel-inner");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const indicadoresContainer = document.querySelector(".indicadores");
  
    const visibles = 3;
    const totalSlides = slides.length;
    const totalPaginas = totalSlides - visibles + 1;

  
    let indice = 0;
  
    // Crear indicadores dinámicamente
    indicadoresContainer.innerHTML = ""; // Limpiar por si ya hay puntos en el HTML
    for (let i = 0; i < totalPaginas; i++) {
      const punto = document.createElement("span");
      punto.classList.add("punto");
      if (i === 0) punto.classList.add("activo");
      punto.addEventListener("click", () => {
        indice = i;
        actualizarCarrusel();
      });
      indicadoresContainer.appendChild(punto);
    }
  
    const puntos = document.querySelectorAll(".punto");
  
    function actualizarCarrusel() {
      const anchoVisible = carrusel.offsetWidth;
      const desplazamiento = indice * anchoVisible;
      carruselInner.style.transform = `translateX(-${desplazamiento}px)`;
  
      puntos.forEach((p, i) => {
        p.classList.toggle("activo", i === indice);
      });
    }
  
    prevBtn.addEventListener("click", function () {
      if (indice > 0) {
        indice--;
        actualizarCarrusel();
      }
    });
  
    nextBtn.addEventListener("click", function () {
      if (indice < totalPaginas - 1) {
        indice++;
        actualizarCarrusel();
      }
    });
  
    actualizarCarrusel();
  });
  
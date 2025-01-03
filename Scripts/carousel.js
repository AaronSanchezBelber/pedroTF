function initCarousel() {
    const sliders = document.querySelectorAll('.custom-slider');
    if (!sliders.length) return; // Si no hay slider, no hace nada
  
    sliders.forEach(slider => {
      const slides = slider.querySelectorAll('.slide');
      if (!slides.length) return; // Si no hay slides, no hacemos nada
  
      let currentSlideIndex = 0;
      let slideInterval;
  
      // Mostrar  diapo segun indice
      function showSlide(index) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (index + slides.length) % slides.length;
        slides[currentSlideIndex].classList.add('active');
      }
  
      // Avanzar
      function nextSlide() {
        showSlide(currentSlideIndex + 1);
      }
  
      // Autoplay
      slideInterval = setInterval(nextSlide, 5000);
  
      // Uso de flechas
      function moveSlide(direction) {
        // Cancelar autoplay para evitar solapamientos
        clearInterval(slideInterval);
        showSlide(currentSlideIndex + direction);
  
        // reaunudar autoplay:
        slideInterval = setInterval(nextSlide, 5000);
      }
  
      // Asignar eventos a las flechas
      const leftArrow = slider.querySelector('.left-arrow');
      const rightArrow = slider.querySelector('.right-arrow');
      
      if (leftArrow) {
        leftArrow.addEventListener('click', e => {
          e.stopPropagation(); // Evita clic en el slider mismo
          moveSlide(-1);
        });
      }
  
      if (rightArrow) {
        rightArrow.addEventListener('click', e => {
          e.stopPropagation();
          moveSlide(1);
        });
      }
  
      // Cambiar diapo sin tener en cuenta flechas
      // slider.addEventListener('click', nextSlide);
  
      // Primera diapo siempre activa
      slides[0].classList.add('active');
    });
  }
  
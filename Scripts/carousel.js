 function initCarousel() {
      const sliders = document.querySelectorAll('.custom-slider');
      if (!sliders.length) return; // Si no hay slider, no hace nada
  
      const isMobile = window.innerWidth < 768;
  
      sliders.forEach(slider => {
          const slides = slider.querySelectorAll('.slide');
          if (!slides.length) return;
  
          let currentSlideIndex = 0;
          let slideInterval;
  
          function showSlide(index) {
              slides[currentSlideIndex].classList.remove('active');
              currentSlideIndex = (index + slides.length) % slides.length;
              slides[currentSlideIndex].classList.add('active');
          }
  
          function nextSlide() {
              showSlide(currentSlideIndex + 1);
          }
  
          if (!isMobile) {
              slideInterval = setInterval(nextSlide, 5000); // Autoplay solo en desktop
          }
  
          const leftArrow = slider.querySelector('.left-arrow');
          const rightArrow = slider.querySelector('.right-arrow');
  
          if (leftArrow) {
              leftArrow.addEventListener('click', e => {
                  e.stopPropagation();
                  clearInterval(slideInterval);
                  showSlide(currentSlideIndex - 1);
                  if (!isMobile) slideInterval = setInterval(nextSlide, 5000);
              });
          }
  
          if (rightArrow) {
              rightArrow.addEventListener('click', e => {
                  e.stopPropagation();
                  clearInterval(slideInterval);
                  showSlide(currentSlideIndex + 1);
                  if (!isMobile) slideInterval = setInterval(nextSlide, 5000);
              });
          }
  
          slides[0].classList.add('active'); // Activa la primera diapositiva
      });
  }
  
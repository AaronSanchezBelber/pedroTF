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

  // Inyecta el favicon en todas las paginas que carguen este script
  (function injectFavicon() {
      // Si ya hay un favicon puesto a mano en esta pagina, no lo duplica
      if (document.querySelector('link[rel*="icon"]')) return;

      const icons = [
          { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
          { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/favicon/favicon-192x192.png' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
      ];

      icons.forEach(attrs => {
          const link = document.createElement('link');
          Object.entries(attrs).forEach(([key, value]) => link.setAttribute(key, value));
          document.head.appendChild(link);
      });
  })();
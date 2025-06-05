// js/main.js
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.add('hidden');
    });
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
          navbar.classList.add('navbar-scrolled');
      } else {
          navbar.classList.remove('navbar-scrolled');
      }
  });

  // Scroll animations
  const observerOptions = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.1
  };

  // Observer para animaciones de entrada
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              if (entry.target.id === 'project-title' || 
                  entry.target.id === 'project-desc-1' || 
                  entry.target.id === 'project-desc-2' ||
                  entry.target.id === 'integration-title' ||
                  entry.target.id === 'integration-text' ||
                  entry.target.id === 'amenities-title') {
                  entry.target.classList.remove('opacity-0', '-translate-y-10');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
              } else if (entry.target.id === 'animated-text') {
                  entry.target.classList.remove('opacity-0', 'translate-y-20');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                  // Animar cada línea con un retraso
                  const lines = entry.target.querySelectorAll('h2');
                  lines.forEach((line, index) => {
                      setTimeout(() => {
                          line.classList.add('animate-fade-in-up');
                      }, index * 200);
                  });
              } else if (entry.target.id.startsWith('gallery-img-')) {
                  entry.target.classList.remove('opacity-0', 'translate-y-8');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
              } else if (entry.target.id.startsWith('amenity-')) {
                  entry.target.classList.remove('opacity-0', 'translate-y-8');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
              }
          }
      });
  }, {
      threshold: 0.1,
      rootMargin: '0px'
  });

  // Observer específico para la sección statement
  const statementObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const lines = entry.target.querySelectorAll('.statement-line');
              lines.forEach(line => {
                  line.classList.add('animate-statement');
              });
              statementObserver.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.2
  });

  // Inicializar observadores cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', function() {
      // Hero animations
      const heroTitles = document.querySelectorAll('.hero-title');
      heroTitles.forEach(title => {
          title.style.opacity = '1';
          title.style.transform = 'translateY(0)';
      });

      // Observer para animaciones de secciones
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const target = entry.target;
                  
                  // Hero section
                  if (target.classList.contains('hero-title')) {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }
                  
                  // About section
                  if (target.id === 'project-title' || target.id === 'project-desc-1' || target.id === 'project-desc-2') {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }
                  
                  // Integration section
                  if (target.id === 'integration-title' || target.id === 'integration-text') {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }
                  
                  // Gallery section
                  if (target.id === 'gallery-title' || target.id === 'gallery-subtitle') {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }
                  
                  // Gallery images
                  if (target.id.startsWith('gallery-img-')) {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }
                  
                  // Amenities section
                  if (target.id === 'amenities-title') {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }
                  
                  // Amenity items
                  if (target.id.startsWith('amenity-')) {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }

                  // Animated text section
                  if (target.id === 'animated-text') {
                      const lines = target.querySelectorAll('[class*="line-"]');
                      lines.forEach((line, index) => {
                          setTimeout(() => {
                              requestAnimationFrame(() => {
                                  line.style.opacity = '1';
                                  setTimeout(() => {
                                      line.style.transform = 'translateY(0)';
                                  }, 50);
                              });
                          }, index * 300);
                      });
                      observer.unobserve(target);
                  }

                  // Statement section
                  if (target.id === 'statement-container') {
                      const lines = target.querySelectorAll('.statement-line');
                      lines.forEach((line, index) => {
                          setTimeout(() => {
                              requestAnimationFrame(() => {
                                  line.style.opacity = '1';
                                  setTimeout(() => {
                                      line.style.transform = 'translateY(0)';
                                  }, 50);
                              });
                          }, index * 400);
                      });
                      observer.unobserve(target);
                  }
              }
          });
      }, observerOptions);

      // Observar elementos del hero
      heroTitles.forEach(title => observer.observe(title));

      // Observar elementos de About
      const aboutElements = document.querySelectorAll('#project-title, #project-desc-1, #project-desc-2');
      aboutElements.forEach(el => observer.observe(el));

      // Observar elementos de integración urbana
      const integrationElements = document.querySelectorAll('#integration-title, #integration-text');
      integrationElements.forEach(el => observer.observe(el));

      // Observar elementos de la galería
      const galleryElements = document.querySelectorAll('#gallery-title, #gallery-subtitle, [id^="gallery-img-"]');
      galleryElements.forEach(el => observer.observe(el));

      // Observar elementos de amenidades
      const amenitiesTitle = document.getElementById('amenities-title');
      if (amenitiesTitle) observer.observe(amenitiesTitle);

      const amenityItems = document.querySelectorAll('[id^="amenity-"]');
      amenityItems.forEach(item => observer.observe(item));

      // Observar texto animado
      const animatedText = document.getElementById('animated-text');
      if (animatedText) observer.observe(animatedText);

      // Observar statement section
      const statementContainer = document.getElementById('statement-container');
      if (statementContainer) observer.observe(statementContainer);

      // Secciones de integración urbana
      const integration1 = document.getElementById('integration-1');
      const integration2 = document.getElementById('integration-2');

      if (integration1) {
          Array.from(integration1.children).forEach(child => observer.observe(child));
      }

      if (integration2) {
          Array.from(integration2.children).forEach(child => observer.observe(child));
      }

      // Animaciones de la galería al hacer scroll
      const galleryObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Activar animaciones del título y subtítulo
                  entry.target.querySelectorAll('.gallery-animate').forEach(el => {
                      el.classList.add('active');
                  });

                  // Activar animación de la línea
                  entry.target.querySelector('.gallery-line-animate').classList.add('active');

                  // Activar animaciones de los items de la galería
                  entry.target.querySelectorAll('.gallery-item-animate').forEach(el => {
                      el.classList.add('active');
                  });

                  // Dejar de observar una vez que se han activado las animaciones
                  galleryObserver.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.2 // Activar cuando el 20% de la sección sea visible
      });

      // Observar la sección de galería
      const gallerySection = document.querySelector('#galeria');
      if (gallerySection) {
          galleryObserver.observe(gallerySection);
      }

      // Observar sección de estadísticas
      const statsSection = document.getElementById('estadisticas');
      if (statsSection) {
          statsObserver.observe(statsSection);
      }

      // Map animation
      const mapImage = document.querySelector('.map-svg');
      if (mapImage) {
          // Create intersection observer for map
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      mapImage.classList.add('loaded');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.3 });

          observer.observe(mapImage);
      }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });
  
  // Slide-in animation al hacer scroll
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-x-0');
      }
    });
  }, {
    threshold: 0.6,
  });
  
  document.querySelectorAll('.animate-slide-left-on-scroll').forEach(el => {
    slideObserver.observe(el);
  });
  
  // Fade-in-up animación al hacer scroll
const fadeInElements = document.querySelectorAll('.animate-fade-in-up-on-scroll');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

fadeInElements.forEach(el => fadeObserver.observe(el));

// Galería fade-in al hacer scroll
const gallery = document.querySelector('.animate-gallery-fade');
const galleryObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

if (gallery) galleryObserver.observe(gallery);

// Observer para las estadísticas
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.stats-item');
            items.forEach(item => {
                item.classList.add('active');
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '-50px'
  });

// Modal de galería
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('gallery-modal-img');
const closeModal = document.getElementById('gallery-modal-close');

// Agregar evento click a todas las imágenes de la galería
document.querySelectorAll('[id^="gallery-img-"]').forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    });
});

// Cerrar modal al hacer click en el botón de cerrar
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restaurar scroll
});

// Cerrar modal al hacer click fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
});
  
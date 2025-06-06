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

  // Inicializar observadores cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', function() {
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
              const menu = document.getElementById('mobile-menu');
              if (menu) menu.classList.add('hidden');
          });
      });

      // Mobile menu toggle
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      if (menuToggle && mobileMenu) {
          menuToggle.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
          });
      }

      // Hero animations
      const heroTitles = document.querySelectorAll('.hero-title');
      heroTitles.forEach(title => {
          title.style.opacity = '1';
          title.style.transform = 'translateY(0)';
      });

      // Main animation observer
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const target = entry.target;
                  
                  // Animated text section
                  if (target.id === 'animated-text') {
                      const lines = target.querySelectorAll('h2');
                      lines.forEach((line, index) => {
                          setTimeout(() => {
                              line.style.opacity = '1';
                              line.style.transform = 'translateY(0)';
                          }, index * 200);
                      });
                  }
                  
                  // Other sections...
                  if (target.classList.contains('hero-title')) {
                      target.style.opacity = '1';
                      target.style.transform = 'translateY(0)';
                  }
                  
                  if (target.id === 'project-title' || 
                      target.id === 'project-desc-1' || 
                      target.id === 'project-desc-2') {
                      target.classList.remove('opacity-0', '-translate-y-10');
                      target.classList.add('opacity-100', 'translate-y-0');
                  }
                  
                  if (target.id === 'integration-title' || 
                      target.id === 'integration-text') {
                      target.classList.remove('opacity-0', '-translate-y-10');
                      target.classList.add('opacity-100', 'translate-y-0');
                  }
                  
                  if (target.id.startsWith('gallery-img-')) {
                      target.classList.remove('opacity-0', 'translate-y-8');
                      target.classList.add('opacity-100', 'translate-y-0');
                  }
                  
                  if (target.id === 'amenities-title') {
                      target.classList.remove('opacity-0', '-translate-y-10');
                      target.classList.add('opacity-100', 'translate-y-0');
                  }
                  
                  if (target.id.startsWith('amenity-')) {
                      target.classList.remove('opacity-0', 'translate-y-8');
                      target.classList.add('opacity-100', 'translate-y-0');
                  }

                  if (target.id === 'statement-container') {
                      target.querySelectorAll('.statement-enter').forEach(el => {
                          el.classList.add('is-visible');
                      });
                  }

                  if (target.id === 'estadisticas') {
                      target.querySelectorAll('.stats-item').forEach(item => {
                          item.classList.remove('opacity-0', 'translate-y-10');
                          item.classList.add('opacity-100', 'translate-y-0');
                      });
                  }
              }
          });
      }, {
          threshold: 0.1,
          rootMargin: '-50px'
      });

      // Observe all animated elements
      const animatedElements = [
          ...document.querySelectorAll('.hero-title'),
          ...document.querySelectorAll('#project-title, #project-desc-1, #project-desc-2'),
          ...document.querySelectorAll('#integration-title, #integration-text'),
          ...document.querySelectorAll('[id^="gallery-img-"]'),
          ...document.querySelectorAll('#amenities-title'),
          ...document.querySelectorAll('[id^="amenity-"]'),
          ...document.querySelectorAll('#animated-text'),
          ...document.querySelectorAll('#statement-container'),
          ...document.querySelectorAll('#estadisticas')
      ];

      animatedElements.forEach(el => {
          if (el) observer.observe(el);
      });

      // Gallery modal functionality
      const modal = document.getElementById('gallery-modal');
      const modalImg = document.getElementById('gallery-modal-img');
      const closeModal = document.getElementById('gallery-modal-close');

      if (modal && modalImg && closeModal) {
          document.querySelectorAll('[id^="gallery-img-"]').forEach(img => {
              img.addEventListener('click', () => {
                  modal.classList.remove('hidden');
                  modalImg.src = img.src;
                  modalImg.alt = img.alt;
                  document.body.style.overflow = 'hidden';
              });
          });

          closeModal.addEventListener('click', () => {
              modal.classList.add('hidden');
              document.body.style.overflow = '';
          });

          modal.addEventListener('click', (e) => {
              if (e.target === modal) {
                  modal.classList.add('hidden');
                  document.body.style.overflow = '';
              }
          });
      }
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
  
// Galería de imágenes
const galleryImages = document.querySelectorAll('#conocenos img');
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('gallery-modal-img');
const closeBtn = document.getElementById('gallery-modal-close');
const prevBtn = document.getElementById('gallery-modal-prev');
const nextBtn = document.getElementById('gallery-modal-next');
let currentImageIndex = 0;

// Abrir modal
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        modalImg.src = img.src;
        modal.classList.remove('hidden');
        updateNavigationButtons();
    });
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
    }
});

// Navegación
function updateNavigationButtons() {
    prevBtn.style.visibility = currentImageIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = currentImageIndex === galleryImages.length - 1 ? 'hidden' : 'visible';
}

prevBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        modalImg.src = galleryImages[currentImageIndex].src;
        updateNavigationButtons();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        modalImg.src = galleryImages[currentImageIndex].src;
        updateNavigationButtons();
    }
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
}); 
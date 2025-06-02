// Progressive Image Loading System - Only for Gallery
document.addEventListener('DOMContentLoaded', function() {
    // Only apply to gallery images, not logos or navbar images
    const galleryImages = document.querySelectorAll('#galeria img[loading="lazy"]');
    
    galleryImages.forEach(img => {
        // Add loading class
        img.classList.add('loading');
        
        // Handle image load
        if (img.complete) {
            handleImageLoad(img);
        } else {
            img.addEventListener('load', () => handleImageLoad(img));
            img.addEventListener('error', () => handleImageError(img));
        }
    });
    
    function handleImageLoad(img) {
        img.classList.remove('loading');
        img.classList.add('loaded');
    }
    
    function handleImageError(img) {
        console.error('Failed to load image:', img.src);
        img.classList.remove('loading');
    }
});

// Intersection Observer for lazy loading with better performance
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Load the image
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            
            // Stop observing this image
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px 0px', // Start loading 50px before entering viewport
    threshold: 0.01
});

// Only observe gallery images with data-src
document.querySelectorAll('#galeria img[data-src]').forEach(img => {
    imageObserver.observe(img);
}); 
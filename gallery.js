// =========================
// GALLERY PAGE JS
// =========================
document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // GLightbox INIT
  // =========================
  const galleryLightbox = GLightbox({
    selector: '.glightbox',
    width: '45%',          // Slightly smaller than default
    height: 'auto',        // Maintain aspect ratio
    openEffect: 'fade',
    closeEffect: 'fade',
    loop: true,
    touchNavigation: true,
    closeButton: true,     // Ensures cancel button is visible
    plyr: false,           // Not using video player here
  });

  // Optional: Make the close button more visible with styling
  const styleLightboxClose = () => {
    const closeBtns = document.querySelectorAll('.glightbox-close');
    closeBtns.forEach(btn => {
      btn.style.color = '#ffd700';
      btn.style.fontSize = '1.8rem';
      btn.style.top = '15px';
      btn.style.right = '15px';
      btn.style.opacity = '0.9';
      btn.style.zIndex = '9999';
      btn.style.transition = 'all 0.3s ease';
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.2)';
        btn.style.opacity = '1';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.opacity = '0.9';
      });
    });
  };

  // Apply styling after lightbox opens
  galleryLightbox.on('open', () => {
    setTimeout(styleLightboxClose, 100); // small delay to ensure elements exist
  });
});

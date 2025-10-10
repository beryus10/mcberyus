document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // Fade Up on Scroll
  // =========================
  const fadeUpElements = document.querySelectorAll('.animate-fade-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  fadeUpElements.forEach(el => fadeObserver.observe(el));

  // =========================
  // Fade on Scroll (optional for text/cards)
  // =========================
  const fadeElements = document.querySelectorAll('.animate-fade');
  const fadeSimpleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  fadeElements.forEach(el => fadeSimpleObserver.observe(el));

  // =========================
  // Toast Trigger Function
  // =========================
  window.showToast = function(message, duration = 3500) {
    let toast = document.createElement('div');
    toast.className = 'toast-classy';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => document.body.removeChild(toast), 500);
    }, duration);
  };
});

// =========================
// ANIMATION
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));

  // =========================
  // NAVBAR SCROLL EFFECT
  // =========================
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // =========================
  // TOGGLER FUNCTIONALITY
  // =========================
  const toggler = document.querySelector('.custom-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Toggle the X icon immediately
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('collapsed');
  });

  // Close the navbar when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
        toggler.classList.add('collapsed');
      }
    });
  });

  // Ensure toggler resets when menu closes (click outside or ESC)
  navbarCollapse.addEventListener('hidden.bs.collapse', () => {
    toggler.classList.add('collapsed');
  });
  navbarCollapse.addEventListener('shown.bs.collapse', () => {
    toggler.classList.remove('collapsed');
  });

  // =========================
  // PARALLAX EFFECT
  // =========================
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty('--before-transform', `translateY(${offset}px)`);
      document.documentElement.style.setProperty('--after-transform', `translateY(${offset * -0.5}px)`);
    }
  });
});

// =========================
// BACK TO TOP BUTTON
// =========================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// =========================
// SMOOTH SCROLL FOR ARROW
// =========================
const scrollArrow = document.querySelector('.scroll-down');
if (scrollArrow) {
  scrollArrow.addEventListener('click', () => {
    const nextSection = document.querySelector('#about'); // Adjust to the next section's ID
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
};
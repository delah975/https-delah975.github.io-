// Reveal sections/cards on scroll
window.addEventListener('scroll', function() {
  document.querySelectorAll('.section-framed, .animated-card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60)
      el.style.opacity = 1;
  });
});
// Fade in hero section elements on page load
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.hero-img, .main-title, .subtitle, .cta-button, .section-title, .about-img, .animated-card').forEach((el, i) => {
    setTimeout(() => { el.style.opacity = 1; }, 400 + i*200);
  });
});

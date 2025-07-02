ScrollReveal().reveal('.hero-left', { origin: 'left', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.hero-right', { origin: 'right', distance: '50px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.navbar', { origin: 'top', distance: '20px', duration: 800, delay: 200 });

ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});


ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
});
/* ✅ FINAL MOBILE TWEAKS */

@media (max-width: 480px) {
  .hero-right img {
    width: 250px;
    height: 250px;
  }

  .skill-icon {
    width: 80px;
    height: 60px;
  }

  .skill-card {
    max-width: 100%;
    padding: 15px 10px;
  }

  .project-card {
    height: 180px;
  }

  .about-img img {
    width: 90%;
    height: auto;
  }

  .about-content p,
  .about-details p {
    font-size: 14px;
  }

  .project-info h3 {
    font-size: 16px;
  }

  .project-info a {
    font-size: 14px;
    padding: 5px 10px;
  }

  .hero-left h1 {
    font-size: 1.8rem;
  }

  .btn {
    font-size: 14px;
    padding: 10px 18px;
  }
}

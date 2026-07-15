// ============================================
// TYPEWRITER
// ============================================
const roles = [
  'Data Analyst',
  'IoT Developer',
  'Full-Stack Builder',
  'Power BI Specialist'
];

const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typewriterEl.textContent = current.substring(0, charIndex);

  let delay = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === current.length) {
    delay = 1600;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }

  setTimeout(typeLoop, delay);
}

typeLoop();

// ============================================
// STAT COUNT-UP (triggers once hero stats are visible)
// ============================================
function animateStats() {
  const stats = document.querySelectorAll('.stat__value');
  stats.forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// Run stat count-up shortly after load (hero is always in view first)
window.addEventListener('load', () => setTimeout(animateStats, 500));

// ============================================
// SCROLL REVEAL
// ============================================
const revealTargets = document.querySelectorAll(
  '.section__head, .about__grid, .skills__grid, .filters, .projects__grid, .timeline, .certs, .contact__inner'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

// ============================================
// PROJECT FILTERING
// ============================================
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const tags = card.getAttribute('data-tags');
      const match = filter === 'all' || tags.includes(filter);
      card.classList.toggle('is-hidden', !match);
    });
  });
});

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// NAV BACKGROUND ON SCROLL
// ============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 4px 20px rgba(0,0,0,0.3)'
    : 'none';
});

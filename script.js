// ---------- footer year ----------
document.querySelectorAll('[data-year]').forEach(function(el){
  el.textContent = new Date().getFullYear();
});

// ---------- mark active nav link ----------
(function () {
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ---------- service chips (replaces dropdown) ----------
(function () {
  var group = document.querySelector('.chip-group');
  if (!group) return;
  var hidden = document.getElementById('service-value');
  group.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    group.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('selected'); });
    chip.classList.add('selected');
    if (hidden) hidden.value = chip.textContent.trim();
  });
})();

// ---------- booking form placeholder submit ----------
(function () {
  var form = document.getElementById('booking-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = "Thanks! This demo form isn't connected yet — see AUTOMATIONS.md to wire it up to email & reminders.";
    status.style.color = "#B14B5A";
  });
})();

// ---------- GSAP animations ----------
document.addEventListener('DOMContentLoaded', function () {
  if (!window.gsap) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // Header entrance
  gsap.from('header', { y: -40, opacity: 0, duration: 0.6, ease: 'power2.out' });

  // Hero sequence (only on pages that have .hero)
  var hero = document.querySelector('.hero');
  if (hero) {
    var tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
    tl.from('.hero .eyebrow', { y: 16, opacity: 0 })
      .from('.hero h1', { y: 24, opacity: 0 }, '-=0.55')
      .from('.hero .lede', { y: 18, opacity: 0 }, '-=0.55')
      .from('.hero-ctas .btn, .hero-ctas .btn-ghost', { y: 14, opacity: 0, stagger: 0.12 }, '-=0.4')
      .from('.stat-row .stat', { y: 14, opacity: 0, stagger: 0.1 }, '-=0.35')
      .from('.rate-stamp', { scale: 0.85, opacity: 0, rotate: -14, duration: 0.9, ease: 'back.out(1.6)' }, '-=0.7');
  }

  // Page banner (non-home pages)
  var banner = document.querySelector('.page-banner');
  if (banner) {
    gsap.from('.page-banner .eyebrow, .page-banner h1, .page-banner p', {
      y: 20, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out'
    });
  }

  // Signature dividers: draw the henna vine line as it scrolls into view
  document.querySelectorAll('.divider path').forEach(function (path) {
    var len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.1,
      ease: 'power1.inOut',
      scrollTrigger: { trigger: path, start: 'top 90%' }
    });
  });
  document.querySelectorAll('.divider circle').forEach(function (c) {
    gsap.from(c, {
      scale: 0, opacity: 0, transformOrigin: '50% 50%', duration: 0.4,
      scrollTrigger: { trigger: c, start: 'top 90%' }
    });
  });

  // Generic scroll reveals for section content
  var revealGroups = [
    '.about .wrap > *',
    '.teaser-grid .teaser-card',
    '.menu-group',
    '.review-grid .review-card',
    '.steps li',
    '.visit .wrap > *',
    '.cta-banner .wrap > *',
    'form'
  ];
  revealGroups.forEach(function (sel) {
    var els = document.querySelectorAll(sel);
    if (!els.length) return;
    gsap.from(els, {
      y: 24, opacity: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: els[0].closest('section') || els[0], start: 'top 82%' }
    });
  });

  // Sticky WhatsApp button: pop in once, then gentle hover lift is CSS
  gsap.from('.sticky-wa', { scale: 0, opacity: 0, duration: 0.5, delay: 0.8, ease: 'back.out(2)' });
});

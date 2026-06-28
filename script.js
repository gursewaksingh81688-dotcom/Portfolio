/* =====================================================
   GURSEWAK SINGH — ACADEMIC PORTFOLIO v2
   script.js
   ===================================================== */

'use strict';

/* =====================================================
   PROJECT → GITHUB URL MAP
   To change a link, just update the URL here.
   The id matches data-project-id on each .proj-card.
   ===================================================== */
const PROJECTS = {
  'wimp-solar-mc':      'https://github.com/gursewaksingh81688-dotcom',
  'presolar-grain-sim': 'https://github.com/gursewaksingh81688-dotcom',
};

/* ── Helpers ─────────────────────────────────────── */
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* =====================================================
   1. PROJECT CARDS — open GitHub on click / Enter
   ===================================================== */
$$('.proj-card').forEach(card => {
  const id  = card.dataset.projectId;
  const url = PROJECTS[id];
  if (!url) return;

  // Click
  card.addEventListener('click', () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  // Keyboard: Enter or Space
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
});

/* =====================================================
   2. NAVIGATION — sticky + active section highlight
   ===================================================== */
(function initNav() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks  = $('#navLinks');
  const links     = $$('.nav-link');
  const sections  = $$('section[id]');

  /* Scrolled state */
  function onScroll() {
    /* Sticky shadow */
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 1px 12px rgba(0,0,0,0.08)' : '';

    /* Active link */
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
    });
    links.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      link.classList.toggle('active', href === current);
    });

    /* Scroll-to-top button */
    const btn = $('#scrollTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 500);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile hamburger */
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  /* Close mobile menu on link click */
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
})();

/* =====================================================
   3. SCROLL-TO-TOP BUTTON
   ===================================================== */
$('#scrollTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =====================================================
   4. SCROLL REVEAL
   Uses threshold:0 so any pixel entering viewport triggers.
   Also runs an immediate check on DOMContentLoaded so
   elements visible on first paint don't stay hidden.
   ===================================================== */
(function initReveal() {
  const items = $$('.reveal');

  function revealEl(el) {
    el.classList.add('visible');
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealEl(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0,
    rootMargin: '0px 0px -20px 0px'
  });

  items.forEach(el => observer.observe(el));

  /* Immediately reveal anything already in the viewport */
  function checkVisible() {
    items.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        revealEl(el);
        observer.unobserve(el);
      }
    });
  }

  /* Run on load and after a short delay (handles async font/image shifts) */
  checkVisible();
  setTimeout(checkVisible, 300);
})();

/* =====================================================
   5. LIVE IST CLOCK in hero
   ===================================================== */
(function initClock() {
  const el = $('#liveTime');
  if (!el) return;

  function tick() {
    const now    = new Date();
    const utcMs  = now.getTime() + now.getTimezoneOffset() * 60000;
    const ist    = new Date(utcMs + 5.5 * 3600000);
    const hh     = String(ist.getHours()).padStart(2, '0');
    const mm     = String(ist.getMinutes()).padStart(2, '0');
    const ss     = String(ist.getSeconds()).padStart(2, '0');
    el.textContent = `IST ${hh}:${mm}:${ss}`;
  }

  tick();
  setInterval(tick, 1000);
})();

/* =====================================================
   6. FOOTER YEAR
   ===================================================== */
const fyEl = $('#footerYear');
if (fyEl) fyEl.textContent = new Date().getFullYear();

/* =====================================================
   7. CONTACT FORM — builds a mailto link
   ===================================================== */
function handleContact(e) {
  e.preventDefault();
  const name  = $('#cName')?.value.trim();
  const email = $('#cEmail')?.value.trim();
  const msg   = $('#cMsg')?.value.trim();
  const note  = $('#formNote');

  if (!name || !email || !msg) {
    note.style.color = '#B91C1C';
    note.textContent = 'Please fill in all fields.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.style.color = '#B91C1C';
    note.textContent = 'Please enter a valid email.';
    return;
  }

  const subject  = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body     = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
  window.location.href = `mailto:gursewaksingh81688@gmail.com?subject=${subject}&body=${body}`;

  note.style.color = '#166534';
  note.textContent  = 'Opening your email client…';

  /* Clear */
  ['cName','cEmail','cMsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

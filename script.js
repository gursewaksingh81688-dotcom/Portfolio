/* =====================================================
   GURSEWAK SINGH — ACADEMIC PORTFOLIO
   script.js
   All interactivity: stars, typing, scroll reveal,
   nav, cursor glow, contact form, scroll-to-top.
   ===================================================== */

'use strict';

/* ---- Helpers ---- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* =====================================================
   1. ANIMATED STAR CANVAS
   Three-layer parallax: slow distant stars, medium
   mid-field, fast close — mouse offsets each layer.
   ===================================================== */
(function initStars() {
  const canvas = $('#starCanvas');
  const ctx    = canvas.getContext('2d');

  let W, H;
  let mouse = { x: 0, y: 0 };
  let animId;

  // Three depth layers
  const layers = [
    { count: 180, speed: 0.008, size: 0.8, alpha: 0.55 },
    { count:  80, speed: 0.022, size: 1.4, alpha: 0.75 },
    { count:  30, speed: 0.06,  size: 2.0, alpha: 0.9  },
  ];

  let stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildStars();
  }

  function buildStars() {
    stars = [];
    layers.forEach((layer, li) => {
      for (let i = 0; i < layer.count; i++) {
        // Some stars twinkle, most don't — keeps it elegant
        const twinkle = Math.random() < 0.25;
        stars.push({
          x:       Math.random() * W,
          y:       Math.random() * H,
          r:       layer.size * (0.6 + Math.random() * 0.8),
          alpha:   layer.alpha * (0.4 + Math.random() * 0.6),
          layer:   li,
          speed:   layer.speed,
          twinkle,
          phase:   Math.random() * Math.PI * 2,
          freq:    0.4 + Math.random() * 1.2,
        });
      }
    });
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);

    // Subtle vignette
    const vignette = ctx.createRadialGradient(W/2, H/2, H*0.2, W/2, H/2, H*0.85);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, W, H);

    const cx = W / 2;
    const cy = H / 2;

    stars.forEach(s => {
      // Parallax offset based on mouse position and layer depth
      const ox = (mouse.x - cx) * s.speed;
      const oy = (mouse.y - cy) * s.speed;
      const sx = s.x + ox;
      const sy = s.y + oy;

      // Twinkle
      let a = s.alpha;
      if (s.twinkle) {
        a *= 0.55 + 0.45 * Math.sin(t * 0.001 * s.freq + s.phase);
      }

      ctx.beginPath();
      ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();

      // Tiny glow for large stars
      if (s.r > 1.5) {
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 4);
        grad.addColorStop(0, `rgba(147,197,253,${a * 0.25})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(sx, sy, s.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    });

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  resize();
  animId = requestAnimationFrame(draw);
})();


/* =====================================================
   2. CURSOR GLOW (follows mouse)
   ===================================================== */
(function initCursorGlow() {
  const glow = $('#cursorGlow');
  let px = window.innerWidth / 2;
  let py = window.innerHeight / 2;
  let tx = px, ty = py;

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
    glow.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  // Smooth lag follow
  (function loop() {
    px += (tx - px) * 0.1;
    py += (ty - py) * 0.1;
    glow.style.left = px + 'px';
    glow.style.top  = py + 'px';
    requestAnimationFrame(loop);
  })();
})();


/* =====================================================
   3. TYPING ANIMATION (Hero subtitle)
   ===================================================== */
(function initTyping() {
  const el = $('#typingText');
  if (!el) return;

  const words = [
    'Dark Matter',
    'Cosmology',
    'Gravitational Waves',
    'WIMP Dynamics',
    'Presolar Grains',
    'The Dark Universe',
  ];

  let wi = 0, ci = 0, deleting = false;

  function tick() {
    const word = words[wi];

    if (!deleting) {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) {
        // Pause at full word then start deleting
        setTimeout(() => { deleting = true; tick(); }, 2200);
        return;
      }
      setTimeout(tick, 68);
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 38);
    }
  }

  setTimeout(tick, 800);
})();


/* =====================================================
   4. NAVBAR — sticky scroll + active link + hamburger
   ===================================================== */
(function initNav() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks  = $('#navLinks');
  const links     = $$('.nav-link');

  // Scroll: add .scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Active link based on scroll position
  function updateActiveLink() {
    const sections = $$('section[id]');
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }
})();


/* =====================================================
   5. SCROLL REVEAL — IntersectionObserver
   ===================================================== */
(function initReveal() {
  const targets = $$('.reveal-up, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after reveal to keep performance lean
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => observer.observe(t));
})();


/* =====================================================
   6. SCROLL-TO-TOP BUTTON
   ===================================================== */
(function initScrollTop() {
  const btn = $('#scrollTop');

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* =====================================================
   7. LIVE UTC+5:30 TIME in hero coords
   ===================================================== */
(function initTime() {
  const el = $('#utcTime');
  if (!el) return;

  function updateTime() {
    const now = new Date();
    // IST = UTC + 5:30
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const ist   = new Date(utcMs + 5.5 * 3600000);
    const hh    = String(ist.getHours()).padStart(2, '0');
    const mm    = String(ist.getMinutes()).padStart(2, '0');
    const ss    = String(ist.getSeconds()).padStart(2, '0');
    el.textContent = `IST ${hh}:${mm}:${ss}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
})();


/* =====================================================
   8. FOOTER YEAR
   ===================================================== */
(function initYear() {
  const el = $('#footerYear');
  if (el) el.textContent = new Date().getFullYear();
})();


/* =====================================================
   9. CONTACT FORM (client-side only — opens mailto)
   ===================================================== */
function handleContact() {
  const name  = $('#cName').value.trim();
  const email = $('#cEmail').value.trim();
  const msg   = $('#cMsg').value.trim();
  const note  = $('#formNote');

  // Basic validation
  if (!name || !email || !msg) {
    note.style.color = '#F87171';
    note.textContent = 'Please fill in all fields.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.style.color = '#F87171';
    note.textContent = 'Please enter a valid email address.';
    return;
  }

  // Build a mailto link
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
  const mailto  = `mailto:gursewaksingh81688@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailto;

  note.style.color = '#34D399';
  note.textContent  = '✓ Opening your email client…';

  // Clear form
  $('#cName').value  = '';
  $('#cEmail').value = '';
  $('#cMsg').value   = '';
}


/* =====================================================
   10. BUTTON RIPPLE EFFECT
   ===================================================== */
(function initRipple() {
  $$('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect   = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size   = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        width:${size}px;
        height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
        background:rgba(255,255,255,0.22);
        transform:scale(0);
        animation:rippleAnim 0.55s linear forwards;
        pointer-events:none;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframes once
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleAnim {
      to { transform: scale(2.5); opacity: 0; }
    }
    .btn { position: relative; overflow: hidden; }
  `;
  document.head.appendChild(style);
})();


/* =====================================================
   11. SMOOTH SECTION ENTRANCE for skill/score bars
   (Trigger animation only when in view)
   ===================================================== */
(function initBarAnimations() {
  const bars = $$('.skill-bar, .score-bar');

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Re-trigger CSS animation by cloning the element in place
        const el = entry.target;
        el.style.animationPlayState = 'running';
        barObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(b => {
    b.style.animationPlayState = 'paused';
    barObserver.observe(b);
  });
})();

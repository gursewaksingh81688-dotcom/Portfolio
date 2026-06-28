/* =====================================================
   GURSEWAK SINGH — ACADEMIC PORTFOLIO v2
   style.css
   Direction: archival-paper light theme
   Palette: off-white · near-black · deep academic blue
   Typography: EB Garamond (name) · DM Sans · DM Mono
   ===================================================== */

/* ── Custom Properties ──────────────────────────────── */
:root {
  /* Palette */
  --bg:          #F7F6F2;   /* archival paper off-white */
  --bg-tint:     #F0EFE9;   /* slightly warmer tinted sections */
  --ink:         #111318;   /* near-black */
  --ink-2:       #3D4148;   /* secondary text */
  --ink-3:       #6B717A;   /* muted / captions */
  --accent:      #1A3A6B;   /* deep physics blue */
  --accent-lt:   #2E5CB8;   /* lighter accent for links */
  --rule:        #D8D6CF;   /* hairline rules */
  --tag-bg:      #E8E6DF;   /* pill tags */

  /* Type */
  --garamond:    'EB Garamond', Georgia, serif;
  --sans:        'DM Sans', system-ui, sans-serif;
  --mono:        'DM Mono', 'Courier New', monospace;

  /* Spacing */
  --nav-h:       64px;
  --max-w:       1080px;
  --sec-pad:     6rem;

  /* Transitions */
  --ease:        cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Reset ──────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1rem;
  line-height: 1.75;
  overflow-x: hidden;
}
a  { color: var(--accent-lt); text-decoration: none; }
a:hover { text-decoration: underline; }
img { display: block; max-width: 100%; }
ul  { list-style: none; }
button { cursor: pointer; font-family: inherit; }
input, textarea { font-family: inherit; }

/* Utility */
.mono { font-family: var(--mono); }

/* ── Container ──────────────────────────────────────── */
.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
}

/* =====================================================
   NAVIGATION
   ===================================================== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2.5rem;
  background: rgba(247, 246, 242, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--rule);
}

.nav-logo {
  font-family: var(--garamond);
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--ink);
  letter-spacing: 0.04em;
  flex-shrink: 0;
}
.nav-logo:hover { text-decoration: none; color: var(--accent); }

.nav-links {
  display: flex;
  gap: 0.25rem;
  flex: 1;
  flex-wrap: wrap;
}

.nav-link {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--ink-3);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
  text-decoration: none;
}
.nav-link:hover,
.nav-link.active {
  color: var(--accent);
  background: rgba(26, 58, 107, 0.07);
  text-decoration: none;
}

/* CV download — the one call-to-action in the nav */
.nav-cv-btn {
  flex-shrink: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--bg);
  background: var(--accent);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  transition: background 0.2s;
  text-decoration: none;
  white-space: nowrap;
}
.nav-cv-btn:hover {
  background: var(--accent-lt);
  text-decoration: none;
  color: #fff;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: var(--ink-2);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.2s;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* =====================================================
   HERO
   ===================================================== */
.hero {
  padding-top: calc(var(--nav-h) + 4rem);
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--rule);
}

.hero-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 4rem;
  align-items: center;
}

/* Left text block */
.hero-eyebrow {
  display: block;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero-name {
  font-family: var(--garamond);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 400;         /* Garamond is elegant at regular weight */
  line-height: 1.08;
  color: var(--ink);
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
}

.hero-sub {
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink-2);
  letter-spacing: 0.01em;
  margin-bottom: 1.25rem;
}

.hero-desc {
  max-width: 520px;
  color: var(--ink-2);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: var(--accent);
  padding: 0.65rem 1.4rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
}
.btn-primary:hover {
  background: var(--accent-lt);
  text-decoration: none;
  color: #fff;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent);
  background: transparent;
  padding: 0.65rem 1.4rem;
  border-radius: 4px;
  border: 1.5px solid var(--accent);
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
}
.btn-ghost:hover {
  background: rgba(26, 58, 107, 0.06);
  text-decoration: none;
  color: var(--accent);
}

/* Social icons row */
.hero-social {
  display: flex;
  gap: 1rem;
}
.hero-social a {
  color: var(--ink-3);
  font-size: 1.1rem;
  transition: color 0.2s;
  text-decoration: none;
}
.hero-social a:hover { color: var(--accent); }

/* Right: photo + award tag */
.hero-photo-wrap {
  position: relative;
  align-self: start;
}

.hero-photo {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  object-position: top;
  border-radius: 6px;
  border: 1px solid var(--rule);
  display: block;
}

/* Award badge — small sign beside photo */
.award-tag {
  position: absolute;
  bottom: -14px;
  right: -14px;
  background: var(--accent);
  color: #fff;
  border-radius: 6px;
  padding: 0.55rem 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  line-height: 1.4;
  box-shadow: 0 4px 16px rgba(26, 58, 107, 0.25);
  cursor: default;
  border: 2px solid #fff;
}
.award-tag i { font-size: 0.95rem; flex-shrink: 0; }

/* Hero meta line */
.hero-meta {
  max-width: var(--max-w);
  margin: 2.5rem auto 0;
  padding: 0 2rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.72rem;
  color: var(--ink-3);
}
.dot-sep { color: var(--rule); }

/* =====================================================
   SECTIONS — shared
   ===================================================== */
.section {
  padding: var(--sec-pad) 0;
  border-bottom: 1px solid var(--rule);
}

.section-tinted { background: var(--bg-tint); }

/* Section header: label + large title + hairline rule
   This is the "signature" structural device — looks like
   a physics paper section heading */
.sec-head {
  margin-bottom: 3rem;
}

.sec-label {
  display: block;
  font-size: 0.68rem;
  color: var(--accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.sec-title {
  font-family: var(--garamond);
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 400;
  color: var(--ink);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.rule {
  height: 1px;
  background: var(--rule);
}

/* =====================================================
   ABOUT
   ===================================================== */
.about-body {
  max-width: 760px;
  margin-bottom: 2.5rem;
}

.about-body p {
  color: var(--ink-2);
  margin-bottom: 1.1rem;
}

.about-body strong { color: var(--ink); font-weight: 600; }

/* Currently box */
.currently-box {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  margin-top: 1.75rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--rule);
  border-left: 3px solid var(--accent);
  border-radius: 4px;
  background: rgba(26, 58, 107, 0.03);
}

.currently-dot {
  flex-shrink: 0;
  margin-top: 4px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,100% { opacity:1; }
  50%      { opacity:0.35; }
}

.currently-label {
  display: block;
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.currently-text {
  font-size: 0.9rem;
  color: var(--ink-2);
  line-height: 1.6;
}

/* Stats row */
.stats-row {
  display: flex;
  align-items: center;
  gap: 0;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--rule);
  flex-wrap: wrap;
}

.stat {
  flex: 1;
  min-width: 120px;
  padding: 0.5rem 1.5rem 0.5rem 0;
}

.stat-n {
  display: block;
  font-family: var(--garamond);
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.2rem;
}

.stat-l {
  font-size: 0.67rem;
  color: var(--ink-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.stat-div {
  width: 1px;
  height: 40px;
  background: var(--rule);
  flex-shrink: 0;
  margin-right: 1.5rem;
}

/* =====================================================
   RESEARCH TIMELINE
   ===================================================== */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.tl-item {
  display: grid;
  grid-template-columns: 160px 28px 1fr;
  gap: 0 1.5rem;
  padding-bottom: 3rem;
}

.tl-left {
  text-align: right;
  padding-top: 2px;
}

.tl-date {
  display: block;
  font-size: 0.72rem;
  color: var(--ink-3);
  margin-bottom: 0.35rem;
}

.tl-status {
  display: inline-block;
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  border: 1px solid var(--rule);
  color: var(--ink-3);
}

.tl-status.ongoing {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(26,58,107,0.05);
}

.tl-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tl-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 4px;
}

.tl-line {
  flex: 1;
  width: 1px;
  background: var(--rule);
  margin-top: 6px;
}

.tl-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.25rem;
}

.tl-org {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.tl-body {
  font-size: 0.9rem;
  color: var(--ink-2);
  line-height: 1.75;
  margin-bottom: 0.9rem;
}

/* Tag pills — shared across sections */
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-3);
  background: var(--tag-bg);
  border: 1px solid var(--rule);
  border-radius: 50px;
  padding: 0.2rem 0.6rem;
}

/* =====================================================
   PROJECTS
   ===================================================== */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Each project card is a full-width clickable row */
.proj-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--rule);
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 4px;
}

.proj-card:first-child { border-top: 1px solid var(--rule); }

.proj-card:hover {
  background: rgba(26, 58, 107, 0.03);
  padding-left: 1rem;
}

.proj-card:hover .proj-arrow { transform: translateX(4px); }

.proj-inner { flex: 1; }

.proj-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
}

.proj-num {
  font-size: 0.72rem;
  color: var(--ink-3);
  letter-spacing: 0.06em;
}

.proj-field {
  font-size: 0.68rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.proj-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}

.proj-card:hover .proj-title { color: var(--accent); }

.proj-desc {
  font-size: 0.88rem;
  color: var(--ink-2);
  line-height: 1.7;
  margin-bottom: 0.75rem;
  max-width: 680px;
}

.proj-arrow {
  color: var(--accent);
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: transform 0.2s var(--ease);
}

/* =====================================================
   EDUCATION
   ===================================================== */
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.edu-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

.edu-rule {
  height: 1px;
  background: var(--rule);
}

.edu-year {
  font-size: 0.72rem;
  color: var(--ink-3);
  padding-top: 4px;
}

.edu-degree {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.25rem;
}

.edu-school {
  font-size: 0.875rem;
  color: var(--ink-2);
  margin-bottom: 0.5rem;
}

.edu-score {
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.04em;
}

/* =====================================================
   RESEARCH INTERESTS
   ===================================================== */
.interests-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.interest-item {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--rule);
}

.interest-item:first-child { border-top: 1px solid var(--rule); }

.interest-num {
  font-size: 0.72rem;
  color: var(--ink-3);
  min-width: 30px;
  padding-top: 3px;
  flex-shrink: 0;
}

.interest-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.3rem;
}

.interest-item p {
  font-size: 0.875rem;
  color: var(--ink-2);
  line-height: 1.7;
}

/* =====================================================
   SKILLS
   Chip-based — no bars, no percentages
   ===================================================== */
.skills-table {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.skills-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  align-items: start;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--rule);
}

.skills-row:first-child { border-top: 1px solid var(--rule); }

.skills-cat {
  font-size: 0.72rem;
  color: var(--ink-3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding-top: 4px;
}

.skills-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--ink-2);
  background: var(--tag-bg);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 0.3rem 0.7rem;
}

.chip em {
  font-style: normal;
  color: var(--ink-3);
  font-size: 0.7rem;
}

/* =====================================================
   CONFERENCES & WORKSHOPS
   ===================================================== */
.events-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.event-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--rule);
}

.event-item:first-child { border-top: 1px solid var(--rule); }

.event-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 2px;
}

.event-year {
  font-size: 0.72rem;
  color: var(--ink-3);
}

/* Type badges */
.event-type-badge {
  display: inline-block;
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  border: 1px solid;
}

.event-type-badge.conference { color: #1A3A6B; border-color: #1A3A6B; background: rgba(26,58,107,0.06); }
.event-type-badge.workshop   { color: #166534; border-color: #166534; background: rgba(22,101,52,0.06); }
.event-type-badge.school     { color: #92400E; border-color: #92400E; background: rgba(146,64,14,0.06); }
.event-type-badge.mooc       { color: #5B21B6; border-color: #5B21B6; background: rgba(91,33,182,0.06); }

.event-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.2rem;
}

.event-venue {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.event-desc {
  font-size: 0.875rem;
  color: var(--ink-2);
  line-height: 1.7;
}

/* =====================================================
   CONTACT
   ===================================================== */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-lead {
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 400px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.875rem;
  color: var(--ink-2);
}

.contact-icon {
  width: 32px; height: 32px;
  border-radius: 4px;
  background: rgba(26,58,107,0.07);
  border: 1px solid var(--rule);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 0.85rem;
  flex-shrink: 0;
}

.contact-list a {
  color: var(--ink-2);
  transition: color 0.2s;
}
.contact-list a:hover { color: var(--accent); }

/* Form */
.form-field {
  margin-bottom: 1.1rem;
}

.form-field label {
  display: block;
  font-size: 0.68rem;
  color: var(--ink-3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.form-field input,
.form-field textarea {
  width: 100%;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 0.7rem 0.9rem;
  font-size: 0.875rem;
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(26,58,107,0.08);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--ink-3);
}

.form-submit {
  width: 100%;
  justify-content: center;
  margin-top: 0.25rem;
}

.form-note {
  font-size: 0.8rem;
  color: var(--ink-3);
  margin-top: 0.75rem;
  text-align: center;
  min-height: 1.2rem;
}

/* =====================================================
   FOOTER
   ===================================================== */
.footer {
  padding: 2.5rem 0;
  background: var(--bg-tint);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 2rem;
}

.footer-name {
  font-size: 0.8rem;
  color: var(--ink);
  font-weight: 500;
}

.footer-line {
  font-size: 0.72rem;
  color: var(--ink-3);
  flex: 1;
}

.footer-links {
  display: flex;
  gap: 1rem;
}
.footer-links a {
  color: var(--ink-3);
  font-size: 0.95rem;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent); }

.footer-copy {
  font-size: 0.68rem;
  color: var(--ink-3);
  width: 100%;
}

/* =====================================================
   SCROLL-TO-TOP
   ===================================================== */
.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  width: 40px; height: 40px;
  border-radius: 4px;
  background: var(--accent);
  border: none;
  color: #fff;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s, background 0.2s;
  box-shadow: 0 2px 12px rgba(26,58,107,0.25);
}
.scroll-top.visible { opacity: 1; visibility: visible; }
.scroll-top:hover { background: var(--accent-lt); }

/* =====================================================
   FADE-IN & REVEAL ANIMATIONS
   One animation only — clean fade up on scroll.
   ===================================================== */
.fade-in {
  animation: fadeInUp 0.7s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Reveal-on-scroll (JS adds .visible) */
.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.55s ease, transform 0.55s ease;
  transition-delay: var(--delay, 0s);
}
.reveal.visible {
  opacity: 1;
  transform: none;
}

/* =====================================================
   RESPONSIVE
   ===================================================== */
@media (max-width: 860px) {
  :root { --sec-pad: 4rem; }

  /* Nav */
  .nav-links {
    display: none;
    position: fixed;
    top: var(--nav-h);
    left: 0; right: 0;
    background: rgba(247, 246, 242, 0.98);
    flex-direction: column;
    gap: 0;
    border-bottom: 1px solid var(--rule);
    padding: 1rem 0;
  }
  .nav-links.open { display: flex; }
  .nav-link { padding: 0.75rem 2rem; font-size: 0.9rem; }
  .nav-cv-btn { display: none; }
  .hamburger { display: flex; }

  /* Hero */
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .hero-photo-wrap { max-width: 220px; }
  .award-tag { font-size: 0.58rem; padding: 0.4rem 0.65rem; }

  /* Timeline */
  .tl-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .tl-left { text-align: left; display: flex; gap: 0.75rem; align-items: center; }
  .tl-connector { display: none; }

  /* Skills */
  .skills-row { grid-template-columns: 1fr; gap: 0.75rem; }

  /* Events */
  .event-item { grid-template-columns: 1fr; gap: 0.5rem; }
  .event-left { flex-direction: row; gap: 0.75rem; align-items: center; }

  /* Education */
  .edu-item { grid-template-columns: 1fr; gap: 0.35rem; }

  /* Contact */
  .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
}

@media (max-width: 540px) {
  .container { padding: 0 1.25rem; }
  .hero-inner { padding: 0 1.25rem; }
  .hero-meta  { padding: 0 1.25rem; }
  .stats-row  { flex-direction: column; gap: 1.25rem; }
  .stat-div   { display: none; }
}

/* Honour prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

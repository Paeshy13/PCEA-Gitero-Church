:root {
  --bg: #edf3ff;
  --bg-strong: #dfe9ff;
  --panel: rgba(255, 255, 255, 0.84);
  --panel-strong: #ffffff;
  --text: #171b3c;
  --muted: #4d567f;
  --line: rgba(120, 138, 201, 0.36);
  --primary: #2d2a82;
  --primary-soft: #e8ecff;
  --accent: #f1b129;
  --accent-strong: #f4c14b;
  --danger: #c53138;
  --shadow: 0 18px 45px rgba(27, 31, 72, 0.12);
}

:root[data-theme='dark'] {
  --bg: #0d112d;
  --bg-strong: #121a3c;
  --panel: rgba(18, 23, 49, 0.9);
  --panel-strong: #171d40;
  --text: #edf1ff;
  --muted: #b4bedf;
  --line: rgba(175, 188, 255, 0.18);
  --primary: #aeb9ff;
  --primary-soft: rgba(104, 116, 210, 0.22);
  --accent: #ffd76b;
  --accent-strong: #f6c753;
  --danger: #ff8a7c;
  --shadow: 0 18px 45px rgba(2, 5, 18, 0.45);
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4.5rem;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Source Sans 3', sans-serif;
  background:
    radial-gradient(circle at top, rgba(153, 170, 255, 0.35), transparent 30%),
    linear-gradient(180deg, var(--bg-strong) 0%, var(--bg) 26%, var(--bg) 100%);
  color: var(--text);
}

a { color: inherit; text-decoration: none; }

button, input, textarea, select { font: inherit; }

button { cursor: pointer; }

img { max-width: 100%; display: block; }

#root {
  min-height: 100vh;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.section {
  padding: 5rem 0;
}

.section-heading {
  margin-bottom: 1rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: var(--danger);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 700;
}

.section-heading h2,
.hero-copy h1,
.group-panel h3,
.group-panel h4,
.service-card strong,
.district-card-top h3 {
  font-family: 'Bitter', serif;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
}

.lead {
  margin: 0;
  color: var(--muted);
  max-width: 60ch;
  font-size: 1.1rem;
  line-height: 1.7;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(30, 30, 86, 0.88);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.5rem;
}

.brand {
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.02em;
  font-family: 'Bitter', serif;
  font-size: 1.15rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  transition: 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.theme-toggle {
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  border-radius: 999px;
  padding: 0.6rem 1rem;
  font-weight: 600;
}

.hero {
  background: linear-gradient(135deg, #1e1f67 0%, #39388f 45%, #2a2b7d 100%);
  color: #fff;
  border-bottom: 6px solid var(--danger);
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: center;
  gap: 2rem;
  padding: 5.5rem 0 6rem;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 6vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  max-width: 12ch;
}

.hero-eyebrow {
  color: rgba(233, 236, 255, 0.8);
  letter-spacing: 0.13em;
}

.scripture {
  margin: 1.25rem 0 2rem;
  color: var(--accent);
  font-weight: 700;
  font-size: 1.2rem;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
  padding: 0.9rem 1.4rem;
  background: var(--accent);
  color: #1b1b1b;
  border-radius: 0.9rem;
  font-weight: 700;
  box-shadow: 0 10px 25px rgba(241, 177, 41, 0.4);
  transition: transform 0.2s ease;
}

.primary-button:hover,
.primary-button:focus-visible {
  transform: translateY(-1px);
}

.hero-art {
  display: flex;
  justify-content: center;
}

.crest-mark {
  width: min(320px, 82vw);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 1.5rem;
  background: linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.06));
  border: 3px solid rgba(255, 219, 113, 0.9);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18), 0 18px 40px rgba(12, 13, 35, 0.35);
  position: relative;
  overflow: hidden;
}

.crest-mark::before {
  content: "";
  position: absolute;
  inset: 18% 18% 22% 18%;
  border: 2px solid rgba(255,255,255,0.45);
  border-radius: 50%;
}

.crest-mark span {
  position: relative;
  z-index: 1;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-family: 'Bitter', serif;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.crest-mark small {
  position: absolute;
  left: 50%;
  bottom: 2.6rem;
  transform: translateX(-50%);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.service-card,
.district-card,
.group-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 1.1rem;
  box-shadow: var(--shadow);
}

.service-card {
  padding: 1.4rem 1.5rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 6px solid transparent;
}

.service-card p {
  margin: 0 0 0.9rem;
  color: var(--muted);
  font-size: 1rem;
}

.service-card span,
.service-card strong {
  display: block;
  font-family: 'Bitter', serif;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  line-height: 1.4;
}

.service-card.red { border-top-color: var(--danger); }
.service-card.gold { border-top-color: var(--accent); }
.service-card.muted { border-top-color: rgba(135, 143, 208, 0.8); }

.leaders-grid .service-card {
  min-height: 160px;
}

.districts-band {
  background: rgba(255, 255, 255, 0.2);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.district-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.district-card {
  text-align: left;
  padding: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.district-card:hover {
  transform: translateY(-2px);
}

.district-card.open {
  border-color: rgba(46, 87, 211, 0.8);
}

.district-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.district-card-top h3 {
  margin: 0;
  font-size: 1.6rem;
}

.district-card-top span {
  color: var(--muted);
  font-size: 0.84rem;
  font-weight: 600;
}

.district-card-body {
  display: grid;
  gap: 0.35rem;
  color: var(--muted);
}

.district-card-body strong {
  color: var(--text);
  font-family: 'Bitter', serif;
  font-size: 1.05rem;
}

.tabs {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tab {
  border: 1px solid var(--line);
  background: var(--panel-strong);
  color: var(--text);
  border-radius: 999px;
  padding: 0.75rem 1.1rem;
  font-weight: 700;
  transition: 0.2s ease;
}

.tab.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.group-panel {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.group-copy,
.group-aside {
  display: grid;
  gap: 0.8rem;
  align-content: start;
}

.group-copy p,
.group-aside p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.group-title-block {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.group-badge {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.9rem;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-soft), rgba(255,255,255,0.15));
  border: 1px solid var(--line);
  font-family: 'Bitter', serif;
}

.group-title-block h3 {
  margin: 0;
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
}

.group-tag {
  margin: 0.3rem 0 0;
  color: var(--danger);
  font-weight: 700;
}

.group-panel h4 {
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
}

.group-aside {
  padding: 0.5rem 0;
}

.aside-heading {
  margin-top: 0.4rem;
}

.motto {
  position: relative;
  padding-left: 1rem;
  border-left: 4px solid var(--accent);
  font-family: 'Bitter', serif;
  color: var(--text) !important;
  font-size: 1.1rem;
}

.motto small {
  display: block;
  margin-top: 0.5rem;
  color: var(--muted);
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.9rem;
}

.value-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  margin: 0.2rem 0 0;
  padding: 0;
}

.value-list li {
  border: 1px solid var(--line);
  background: rgba(145, 155, 216, 0.08);
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
  font-size: 0.92rem;
}

.site-footer {
  background: #1d1d63;
  color: rgba(255,255,255,0.8);
  border-top: 6px solid var(--accent);
  padding: 2rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-inner strong {
  color: #fff;
  font-family: 'Bitter', serif;
}

@media (max-width: 900px) {
  .hero-inner,
  .group-panel {
    grid-template-columns: 1fr;
  }

  .district-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .nav-inner {
    flex-wrap: wrap;
    padding: 0.75rem 0;
    justify-content: center;
  }

  .nav-links {
    width: 100%;
  }

  .service-grid,
  .district-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 4rem 0;
  }

  .hero-inner {
    padding-top: 4rem;
  }
}

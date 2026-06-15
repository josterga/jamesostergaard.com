import './style.css';

// Mark JS available so entrance animation CSS selector fires
document.documentElement.classList.add('js');

/* ----------------------------------------------------------------
   Generative thumbnails — ported from design handoff app.jsx
   ---------------------------------------------------------------- */

function ringPath(cx: number, cy: number, r: number, wobble: number, seed: number): string {
  const steps = 64;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const n =
      Math.sin(a * 3 + seed) * 0.5 +
      Math.sin(a * 5 + seed * 1.7) * 0.3 +
      Math.sin(a * 2 + seed * 0.4) * 0.6;
    const rr = r * (1 + n * wobble);
    d += (i === 0 ? 'M' : 'L') +
      (cx + Math.cos(a) * rr).toFixed(1) + ' ' +
      (cy + Math.sin(a) * rr * 0.92).toFixed(1) + ' ';
  }
  return d + 'Z';
}

function emanantThumb(): string {
  const rings: string[] = [];
  for (let i = 0; i < 6; i++) {
    const opacity = (0.85 - i * 0.07).toFixed(2);
    rings.push(
      `<path d="${ringPath(0, 0, 8 + i * 11, 0.07 + i * 0.01, i * 2.1 + 1)}" fill="none" stroke="#b9682f" stroke-width="1.4" style="opacity:${opacity}" />`
    );
  }
  return `<svg viewBox="-66 -46 132 92" xmlns="http://www.w3.org/2000/svg" style="background:oklch(0.965 0.02 75)">
    ${rings.join('\n    ')}
    <circle r="3.2" fill="#b9682f" />
  </svg>`;
}


function packetThumb(): string {
  const glyphs = ['○', '△', '→', '⊕', '↑', '⊘', '□', '↗'];
  const colors = ['#5566c9', '#4a90b8', '#6aa86a', '#9a8fc0', '#c98a4a'];
  const cells: string[] = [];
  let k = 0;
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 10; c++) {
      const color = colors[(r + c * 2) % colors.length];
      const glyph = glyphs[(r * 3 + c * 5 + k) % glyphs.length];
      cells.push(
        `<text x="${9 + c * 13.5}" y="${16 + r * 12}" font-size="9" font-family="monospace" fill="${color}" style="opacity:0.78">${glyph}</text>`
      );
      k++;
    }
  }
  return `<svg viewBox="0 0 132 92" xmlns="http://www.w3.org/2000/svg" style="background:#15171f">
    ${cells.join('\n    ')}
  </svg>`;
}

/* ----------------------------------------------------------------
   Data
   ---------------------------------------------------------------- */

const PROJECTS = [
  {
    id: 'emanant',
    title: 'Emanant',
    tag: 'Isochrone map',
    desc: "A map without a destination. Visualizes what's reachable on foot or by bike from where you stand.",
    meta: ['Web', 'Mapping'],
    href: 'https://emanant.app',
    thumb: emanantThumb(),
  },
  {
    id: 'dispatch',
    title: 'Dispatch',
    tag: 'Agent runner',
    desc: 'Scheduled agentic searches, delivered as a digest. Define agents (prompts) that run on a schedule and surface what you care about. Self-hosted, free search APIs, runs on Ollama or any LLM.',
    meta: ['Self-hosted', 'LLM'],
    href: 'https://github.com/josterga/dispatch',
    thumb: '<img src="/dispatch.png" alt="Dispatch — agent list view" />',
  },
  {
    id: 'packet',
    title: 'Packet Pressure',
    tag: 'Card game',
    desc: 'An original card game that turns internet routing into social play. Players build shared paths through a network, hold endpoints, and negotiate when routes collapse. The logic of how packets actually move, made tangible.',
    meta: ['Tabletop', 'Original'],
    href: 'https://packetpressure.com',
    thumb: packetThumb(),
  },
];

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/josterga' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jamesostergaard/' },
  { label: 'parcl0 — art & design', href: 'https://parcl0.com' },
  { label: 'Contact', href: 'mailto:mail@jamesostergaard.com' },
];

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/* ----------------------------------------------------------------
   Render
   ---------------------------------------------------------------- */

function projectRow(p: typeof PROJECTS[0], n: number): string {
  const metaSpans = p.meta.map(m => `<span>${m}</span>`).join('');
  return `
    <a class="row" href="${p.href}" target="_blank" rel="noopener" data-reveal>
      <div class="num">${pad(n)}</div>
      <div class="body">
        <div class="title">
          <h3>${p.title}</h3>
          <span class="tag">${p.tag}</span>
        </div>
        <p class="desc">${p.desc}</p>
        <div class="meta">
          ${metaSpans}
          <span class="go">View <span aria-hidden="true">→</span></span>
        </div>
      </div>
      <div class="thumb">${p.thumb}</div>
    </a>`;
}

function footLink(l: { label: string; href: string }): string {
  return `<a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${l.label} <span class="arr" aria-hidden="true">↗</span></a>`;
}

const year = new Date().getFullYear();

const html = `
  <button class="theme-toggle" aria-label="Toggle light / dark" title="Toggle light / dark">
    <svg viewBox="-10 -10 20 20" width="16" height="16" aria-hidden="true">
      <circle r="8.2" fill="none" stroke="currentColor" stroke-width="1.5" />
      <path d="M0 -8.2 A8.2 8.2 0 0 1 0 8.2 Z" fill="currentColor" />
    </svg>
  </button>

  <div class="shell">
    <section class="hero">
      <p class="kicker" data-reveal>Portfolio · ${year}</p>
      <h1 data-reveal>James<br />Ostergaard</h1>
      <p class="statement" data-reveal>
        I’m a generalist. At work I build AI infrastructure. Outside of work I look for what technology
        passes over: <em>the reachable but unmapped</em>, <span class="quiet">the relevant but unranked.</span>
      </p>
    </section>

    <section id="work">
      <div class="sec-head" data-reveal><span>Projects</span><span class="count">${pad(PROJECTS.length)}</span></div>
      <div class="index">
        ${PROJECTS.map((p, i) => projectRow(p, i + 1)).join('')}
      </div>
    </section>

    <footer class="foot">
      <div class="links" data-reveal>
        ${LINKS.map(footLink).join('\n        ')}
      </div>
    </footer>
  </div>
`;

const root = document.getElementById('root')!;
root.innerHTML = html;

/* ----------------------------------------------------------------
   Theme toggle — instant swap, no transition on html element
   ---------------------------------------------------------------- */

function getTheme(): string {
  return document.documentElement.getAttribute('data-theme') || 'paper';
}

document.querySelector<HTMLButtonElement>('.theme-toggle')!
  .addEventListener('click', () => {
    const next = getTheme() === 'dark' ? 'paper' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('jo-theme', next); } catch (e) {}
  });

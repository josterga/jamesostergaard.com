import './style.css';
import { PROJECTS as PROJECTS_DATA } from './data/projects';
import type { ProjectData } from './data/projects';
import { WRITING } from './data/writings';
import type { Writing } from './data/writings';

// Mark JS available so entrance animation CSS selector fires
document.documentElement.classList.add('js');

/* ----------------------------------------------------------------
   Generative thumbnails
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

function hatchThumb(): string {
  return `<svg viewBox="0 0 132 92" xmlns="http://www.w3.org/2000/svg" style="background:var(--bg-sunk)">
    <defs>
      <pattern id="ph-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="9" stroke="var(--rule)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="132" height="92" fill="url(#ph-hatch)" />
  </svg>`;
}

const THUMBS: Record<string, string> = {
  emanant: emanantThumb(),
  dispatch: '<img src="/dispatch.png" alt="Dispatch — agent list view" />',
  packet: packetThumb(),
};

/* ----------------------------------------------------------------
   Data
   ---------------------------------------------------------------- */

interface Project extends ProjectData { thumb: string; }

const PROJECTS: Project[] = PROJECTS_DATA.map(p => ({
  ...p,
  thumb: THUMBS[p.id] ?? hatchThumb(),
}));

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/josterga' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jamesostergaard/' },
  { label: 'parcl0 — art & design', href: 'https://parcl0.com' },
  { label: 'Contact', href: 'mailto:mail@jamesostergaard.com' },
];

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/* ----------------------------------------------------------------
   Tab state
   ---------------------------------------------------------------- */

type Tab = 'projects' | 'writing';

function getInitialTab(): Tab {
  return WRITING.length > 0 && location.hash === '#writing' ? 'writing' : 'projects';
}

/* ----------------------------------------------------------------
   Row renderers
   ---------------------------------------------------------------- */

function projectRow(p: Project, n: number): string {
  const metaSpans = p.meta.map(m => `<span>${m}</span>`).join('');
  const hasCaseStudy = !!p.caseStudy;
  const metaAction = hasCaseStudy
    ? `<span class="go">Case Study <span aria-hidden="true">→</span></span>
          <a class="meta-ext-link" href="${p.href}" target="_blank" rel="noopener">View <span aria-hidden="true">↗</span></a>`
    : `<span class="go">View <span aria-hidden="true">↗</span></span>`;
  const inner = `
      <div class="num">${pad(n)}</div>
      <div class="body">
        <div class="title">
          <h3>${p.title}</h3>
          <span class="tag">${p.tag}</span>
        </div>
        <p class="desc">${p.desc}</p>
        <div class="meta">
          ${metaSpans}
          ${metaAction}
        </div>
      </div>
      <div class="thumb">${p.thumb}</div>`;
  if (hasCaseStudy) {
    return `<div class="row" role="button" tabindex="0" data-project-id="${p.id}" data-reveal>${inner}</div>`;
  }
  return `<a class="row" href="${p.href}" target="_blank" rel="noopener" data-reveal>${inner}</a>`;
}

function writingRow(w: Writing, i: number): string {
  const isIdea = w.kind !== 'Essay';
  return `
    <div class="row wrow${isIdea ? ' wrow-idea' : ''}" role="button" tabindex="0" data-writing-idx="${i}" data-reveal>
      <div class="wdate">${w.date}</div>
      <div class="body">
        <div class="title">
          <h3>${w.title}</h3>
          <span class="tag">${w.kind}</span>
        </div>
        ${w.dek ? `<p class="desc">${w.dek}</p>` : ''}
        ${w.read ? `<div class="meta"><span>${w.read} read</span><span class="go">Read <span aria-hidden="true">→</span></span></div>` : ''}
      </div>
    </div>`;
}

function footLink(l: { label: string; href: string }): string {
  return `<a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${l.label} <span class="arr" aria-hidden="true">↗</span></a>`;
}

/* ----------------------------------------------------------------
   Overlay content renderers
   ---------------------------------------------------------------- */

function renderCaseStudy(p: Project): string {
  const cs = p.caseStudy!;
  const metaDots = p.meta.map(m =>
    `<span class="ov-dot" aria-hidden="true">·</span><span class="ov-meta-sm">${m}</span>`
  ).join('');
  const sections = cs.sections.map((s, i) => `
    <div class="ov-section">
      <p class="ov-sec-label"><span class="ov-sec-n">${pad(i + 1)}</span>${s.label}</p>
      <div class="ov-sec-body">${(Array.isArray(s.body) ? s.body : [s.body]).map(para => `<p>${para}</p>`).join('')}</div>
    </div>`).join('');
  return `
    <article>
      <header class="ov-header">
        <div class="ov-eyebrow">
          <span class="tag">${p.tag}</span>${metaDots}
        </div>
        <h1 class="ov-h1">${p.title}</h1>
        ${cs.overview ? `<p class="ov-dek">${cs.overview}</p>` : ''}
        <a href="${p.href}" target="_blank" rel="noopener" class="ov-proj-link">View project <span aria-hidden="true">↗</span></a>
      </header>
      <div class="ov-thumb-lg">${p.thumb}</div>
      <div class="ov-sections">${sections}</div>
    </article>`;
}

function renderArticle(w: Writing): string {
  const readPart = w.read
    ? `<span class="ov-dot" aria-hidden="true">·</span><span class="ov-meta-sm">${w.read} read</span>`
    : '';
  const body = w.body?.length
    ? `<hr class="ov-rule" /><div class="ov-prose">${w.body.map(para => `<p>${para}</p>`).join('')}</div>`
    : '';
  return `
    <article>
      <header class="ov-header">
        <div class="ov-eyebrow">
          <span class="tag">${w.kind}</span>
          <span class="ov-dot" aria-hidden="true">·</span>
          <span class="ov-meta-sm">${w.date}</span>
          ${readPart}
        </div>
        <h1 class="ov-h1">${w.title}</h1>
        ${w.dek ? `<p class="ov-dek">${w.dek}</p>` : ''}
      </header>
      ${body}
    </article>`;
}

/* ----------------------------------------------------------------
   Page HTML
   ---------------------------------------------------------------- */

const initialTab = getInitialTab();
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
        I'm a generalist. At work I build AI infrastructure. Outside of work I look for what technology
        passes over: <em>the reachable but unmapped</em>, <span class="quiet">the relevant but unranked.</span>
      </p>
    </section>

    <section id="work">
      ${WRITING.length > 0 ? `
      <div class="tabs" role="tablist" data-reveal>
        <button class="tab" role="tab" data-tab="projects" aria-selected="${initialTab === 'projects'}">
          Projects <span class="ct">${pad(PROJECTS.length)}</span>
        </button>
        <button class="tab" role="tab" data-tab="writing" aria-selected="${initialTab === 'writing'}">
          Writing <span class="ct">${pad(WRITING.length)}</span>
        </button>
      </div>` : `
      <div class="sec-head" data-reveal><span>Projects</span><span class="count">${pad(PROJECTS.length)}</span></div>`}
      <div class="index" id="projects-index"${initialTab !== 'projects' ? ' hidden' : ''}>
        ${PROJECTS.map((p, i) => projectRow(p, i + 1)).join('')}
      </div>
      ${WRITING.length > 0 ? `
      <div class="index" id="writing-index"${initialTab !== 'writing' ? ' hidden' : ''}>
        ${WRITING.map((w, i) => writingRow(w, i)).join('')}
      </div>` : ''}
    </section>

    <footer class="foot">
      <div class="links" data-reveal>
        ${LINKS.map(footLink).join('\n        ')}
      </div>
      <div class="colophon" data-reveal>
        jamesostergaard.com<br />
        &copy; ${year} James Ostergaard
      </div>
    </footer>
  </div>
`;

const root = document.getElementById('root')!;
root.innerHTML = html;

/* ----------------------------------------------------------------
   Overlay
   ---------------------------------------------------------------- */

const overlayEl = document.createElement('div');
overlayEl.id = 'overlay';
overlayEl.className = 'overlay';
overlayEl.setAttribute('role', 'dialog');
overlayEl.setAttribute('aria-modal', 'true');
overlayEl.hidden = true;
document.body.appendChild(overlayEl);

const OV_BAR = `
  <div class="ov-bar">
    <button class="ov-back" id="ov-back-btn">
      <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <path d="M10 3L5 8l5 5" />
      </svg>
      Portfolio
    </button>
    <button class="ov-close" id="ov-close-btn" aria-label="Close">
      <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
        <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
      </svg>
    </button>
  </div>`;

let overlayClosing = false;

function openOverlay(content: string): void {
  overlayEl.innerHTML = OV_BAR + `<div class="ov-scroll"><div class="ov-col">${content}</div></div>`;
  overlayEl.classList.remove('overlay-out');
  overlayEl.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('ov-back-btn')?.addEventListener('click', closeOverlay);
  document.getElementById('ov-close-btn')?.addEventListener('click', closeOverlay);
}

function closeOverlay(): void {
  if (overlayClosing) return;
  overlayClosing = true;
  overlayEl.classList.add('overlay-out');
  setTimeout(() => {
    overlayEl.hidden = true;
    overlayEl.classList.remove('overlay-out');
    document.body.style.overflow = '';
    overlayClosing = false;
  }, 340);
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !overlayEl.hidden) closeOverlay();
});

/* ----------------------------------------------------------------
   Tabs
   ---------------------------------------------------------------- */

function setTab(tab: Tab): void {
  if (tab === 'writing') {
    history.replaceState(null, '', '#writing');
  } else {
    history.replaceState(null, '', location.pathname);
  }
  document.querySelectorAll<HTMLElement>('.tab').forEach(btn => {
    btn.setAttribute('aria-selected', String(btn.dataset.tab === tab));
  });
  const pi = document.getElementById('projects-index');
  const wi = document.getElementById('writing-index');
  if (pi) pi.hidden = tab !== 'projects';
  if (wi) wi.hidden = tab !== 'writing';
}

document.querySelectorAll<HTMLElement>('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab as Tab;
    if (tab) setTab(tab);
  });
});

/* ----------------------------------------------------------------
   Project row interactions
   ---------------------------------------------------------------- */

function handleProjectActivate(target: HTMLElement): void {
  if (target.closest('a')) return;
  const row = target.closest<HTMLElement>('[data-project-id]');
  if (!row) return;
  const project = PROJECTS.find(p => p.id === row.dataset.projectId);
  if (project?.caseStudy) openOverlay(renderCaseStudy(project));
}

const projectsIndex = document.getElementById('projects-index');
projectsIndex?.addEventListener('click', (e) => handleProjectActivate(e.target as HTMLElement));
projectsIndex?.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  if ((e.target as HTMLElement).closest('a')) return;
  e.preventDefault();
  handleProjectActivate(e.target as HTMLElement);
});

/* ----------------------------------------------------------------
   Writing row interactions
   ---------------------------------------------------------------- */

function handleWritingActivate(target: HTMLElement): void {
  const row = target.closest<HTMLElement>('[data-writing-idx]');
  if (!row) return;
  const idx = parseInt(row.dataset.writingIdx!, 10);
  const writing = WRITING[idx];
  if (writing) openOverlay(renderArticle(writing));
}

const writingIndex = document.getElementById('writing-index');
writingIndex?.addEventListener('click', (e) => handleWritingActivate(e.target as HTMLElement));
writingIndex?.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  e.preventDefault();
  handleWritingActivate(e.target as HTMLElement);
});

/* ----------------------------------------------------------------
   Theme
   ---------------------------------------------------------------- */

const THEME_COLORS = { paper: '#f9f8f5', dark: '#1b1712' };

function getTheme(): string {
  return document.documentElement.getAttribute('data-theme') || 'paper';
}

function applyTheme(t: string, persist: boolean) {
  document.documentElement.setAttribute('data-theme', t);
  const tc = document.getElementById('theme-color');
  if (tc) tc.setAttribute('content', THEME_COLORS[t as keyof typeof THEME_COLORS] ?? THEME_COLORS.paper);
  if (persist) {
    try { localStorage.setItem('jo-theme', t); } catch (e) {}
  }
}

document.querySelector<HTMLButtonElement>('.theme-toggle')!
  .addEventListener('click', () => {
    applyTheme(getTheme() === 'dark' ? 'paper' : 'dark', true);
  });

try {
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let stored: string | null = null;
    try { stored = localStorage.getItem('jo-theme'); } catch (_) {}
    if (!stored) applyTheme(e.matches ? 'dark' : 'paper', false);
  });
} catch (_) {}

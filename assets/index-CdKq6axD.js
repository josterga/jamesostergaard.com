(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();const S=[{id:"emanant",title:"Emanant",tag:"Isochrone map",desc:"A map without a destination. Visualizes what's reachable on foot or by bike from where you stand.",meta:["Web","Mapping"],href:"https://emanant.app",caseStudy:{overview:"A map without a destination — what you can reach, not where you're going.",sections:[{label:"What it is",body:"Emanant is an isochrone map for walkers and cyclists. It draws the area you can reach in the next 5, 10, 20, or 30 minutes. It accounts for terrain and shows neighborhoods that fall within the reachable area. The idea is exploration, not navigation."},{label:"Why I built it",body:["I love wandering. Walking, biking, just getting lost. “Poetry is in the street” is something I live by — there are moments, images, and sounds you only find when you slow down. When I think back to my childhood, I walked or biked everywhere, and exploring the neighborhood was an activity in itself. I still explore like that; when I’m waiting to pick up a food order I’ll loop the block a few times. When I’m in a new city, one of the first things I want to know is what I can walk to from where I stand.","Every major map app is built around destinations, which require knowing exactly where you want to go. Traditional mapping defines a linear relationship with your surroundings and discourages deviating from the route; it always optimizes for the shortest time spent traveling. I had jotted down an idea: <em>time-based travel/discovery app</em>. I was familiar with isochrones from urban planning contexts and wanted to see how real this idea could be. I fired up Claude Code.","What I wanted was a map that started with where I already was, not where I was going."]},{label:"Who it’s for",body:"Anyone who moves through a city on foot or by bike. People who are new somewhere and want to understand a neighborhood before committing to it. People with 20 minutes of free time and no plan. People who just want to walk somewhere and don’t know where to start. Wanderers."},{label:"Core pipeline",body:["The app is built on React, TypeScript, and Mapbox GL. The core feature is a two-API chain: Mapbox Isochrone returns a GeoJSON polygon for the reachable area, then Mapbox Tilequery queries that polygon against street-level neighborhood data to build the reach list. The result is a list like “↗ NE · Market · 0.4 km” — reachable neighborhoods with bearing and distance, pulled from real map data.","Terrain is handled by Mapbox’s routing engine, and to make that visible I added a hillshade layer over the map. Without it, the shape can look arbitrary. With it, you can see exactly why the boundary cuts off where it does."]},{label:"GPS",body:"On mobile, the app polls your location every 10 seconds and refreshes the isochrone when you’ve moved more than 10 meters. If the initial GPS fix fails, the app keeps trying rather than showing a dead error state."},{label:"Sharing",body:"The share feature encodes your location and settings into a URL. Raw coordinates felt like unnecessary exposure, so I XOR-ciphered and base64-encoded them to add a layer of obfuscation. The recipient of the URL sees the pinned view, not their own location."},{label:"Privacy",body:"Analytics use Google Analytics 4, but only at city-level precision — no exact coordinates reach Google."},{label:"Pin mode and search",body:"Pin mode was a later addition but opened up a different use case: exploring a neighborhood you’re not in. Long-press anywhere on the map to drop a pin, or search an address; the same isochrone and neighborhood lookup run relative to the pinned location."},{label:"The approach",body:["I built this entirely in Claude Code. The workflow was simple: build, test, repeat. My prompts reflected the scope of what I was trying to achieve; scoping a new feature used a longer, more detailed prompt. Fixing a bug or a small change only needed a few words.","The first fully functional version with GPS polling, isochrone rendering, and neighborhood list shipped within roughly 24 hours of starting. The bulk of the initial build happened across three or four days. Everything after that was iteration."]},{label:"What I learned",body:["When to stop. I loaded the live website on my phone in Safari and noticed there was a massive whitespace between the lower navbar and the bottom of the app — that definitely wasn’t there before. I spent about an hour trying to figure out what was causing it, and after five failed commits I decided to stop and revert those changes entirely. The issue was caused by iOS liquid glass viewport rendering, and I confirmed other websites (like LinkedIn) were similarly impacted. Just not something worth pushing on.","How to work smarter. While I was scoping out how much I wanted to build and what features to add to the app, I was investigating the idea of a persona of an ‘apartment hunter’ who would use the app to discover how walkable or bikeable potential apartments were. I found the use case insightful and instead of describing the feature in my own words, I asked Claude to “generate a prompt that will get that feature generated as part of the code,” fed that into a new session, and kept moving forward.","What not to build. I initially included a drive mode alongside walking and biking, but it generated such a large isochrone that it felt out of character with the rest of the app. Not to mention that I’d advocate that you should stick to a destination when driving, both to save fuel and to eliminate distractions."]},{label:"Where I’d take it",body:["Richer data overlays. Walking comfort isn’t just about distance. Wind, temperature, and air quality affect where it makes sense to go. I’d love to see weather at each neighborhood as well as on the map.","Social isochrone. Given two locations, draw the isochrone that represents the overlap: where both people can reach in N minutes on foot. A useful tool for meeting someone in the middle without requiring either person to be the one who “comes to you.”"]},{label:"Conclusion",body:["Emanant started as a question — what can I reach from here? — and ended up as the map I always wanted but couldn't find.","The best tools change how you move through the world. I built this to find out if that was possible in a weekend. It was."]}]}},{id:"dispatch",title:"Dispatch",tag:"Agent runner",desc:"Scheduled agentic searches, delivered as a digest. Define agents (prompts) that run on a schedule and surface what you care about. Self-hosted, free search APIs, runs on Ollama or any LLM.",meta:["Self-hosted","LLM"],href:"https://github.com/josterga/dispatch"},{id:"packet",title:"Packet Pressure",tag:"Card game",desc:"An original card game that turns internet routing into social play. Players build shared paths through a network, hold endpoints, and negotiate when routes collapse. The logic of how packets actually move, made tangible.",meta:["Tabletop","Original"],href:"https://packetpressure.com"}],l=[];document.documentElement.classList.add("js");function T(e,t,o,n,a){let r="";for(let d=0;d<=64;d++){const u=d/64*Math.PI*2,E=Math.sin(u*3+a)*.5+Math.sin(u*5+a*1.7)*.3+Math.sin(u*2+a*.4)*.6,b=o*(1+E*n);r+=(d===0?"M":"L")+(e+Math.cos(u)*b).toFixed(1)+" "+(t+Math.sin(u)*b*.92).toFixed(1)+" "}return r+"Z"}function j(){const e=[];for(let t=0;t<6;t++){const o=(.85-t*.07).toFixed(2);e.push(`<path d="${T(0,0,8+t*11,.07+t*.01,t*2.1+1)}" fill="none" stroke="#b9682f" stroke-width="1.4" style="opacity:${o}" />`)}return`<svg viewBox="-66 -46 132 92" xmlns="http://www.w3.org/2000/svg" style="background:oklch(0.965 0.02 75)">
    ${e.join(`
    `)}
    <circle r="3.2" fill="#b9682f" />
  </svg>`}function L(){const e=["○","△","→","⊕","↑","⊘","□","↗"],t=["#5566c9","#4a90b8","#6aa86a","#9a8fc0","#c98a4a"],o=[];let n=0;for(let a=0;a<7;a++)for(let s=0;s<10;s++){const r=t[(a+s*2)%t.length],d=e[(a*3+s*5+n)%e.length];o.push(`<text x="${9+s*13.5}" y="${16+a*12}" font-size="9" font-family="monospace" fill="${r}" style="opacity:0.78">${d}</text>`),n++}return`<svg viewBox="0 0 132 92" xmlns="http://www.w3.org/2000/svg" style="background:#15171f">
    ${o.join(`
    `)}
  </svg>`}function A(){return`<svg viewBox="0 0 132 92" xmlns="http://www.w3.org/2000/svg" style="background:var(--bg-sunk)">
    <defs>
      <pattern id="ph-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="9" stroke="var(--rule)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="132" height="92" fill="url(#ph-hatch)" />
  </svg>`}const P={emanant:j(),dispatch:'<img src="/dispatch.png" alt="Dispatch — agent list view" />',packet:L()},m=S.map(e=>({...e,thumb:P[e.id]??A()})),M=[{label:"GitHub",href:"https://github.com/josterga"},{label:"LinkedIn",href:"https://www.linkedin.com/in/jamesostergaard/"},{label:"parcl0 — art & design",href:"https://parcl0.com"},{label:"Contact",href:"mailto:mail@jamesostergaard.com"}];function p(e){return String(e).padStart(2,"0")}function C(){return l.length>0&&location.hash==="#writing"?"writing":"projects"}function O(e,t){const o=e.meta.map(r=>`<span>${r}</span>`).join(""),n=!!e.caseStudy,a=n?`<span class="meta-actions"><span class="go">Case Study <span aria-hidden="true">→</span></span><a class="meta-ext-link" href="${e.href}" target="_blank" rel="noopener">View <span aria-hidden="true">↗</span></a></span>`:'<span class="meta-actions"><span class="go">View <span aria-hidden="true">↗</span></span></span>',s=`
      <div class="num">${p(t)}</div>
      <div class="body">
        <div class="title">
          <h3>${e.title}</h3>
          <span class="tag">${e.tag}</span>
        </div>
        <p class="desc">${e.desc}</p>
        <div class="meta">
          ${o}
          ${a}
        </div>
      </div>
      <div class="thumb">${e.thumb}</div>`;return n?`<div class="row" role="button" tabindex="0" data-project-id="${e.id}" data-reveal>${s}</div>`:`<a class="row" href="${e.href}" target="_blank" rel="noopener" data-reveal>${s}</a>`}function W(e,t){return`
    <div class="row wrow${e.kind!=="Essay"?" wrow-idea":""}" role="button" tabindex="0" data-writing-idx="${t}" data-reveal>
      <div class="wdate">${e.date}</div>
      <div class="body">
        <div class="title">
          <h3>${e.title}</h3>
          <span class="tag">${e.kind}</span>
        </div>
        ${e.dek?`<p class="desc">${e.dek}</p>`:""}
        ${e.read?`<div class="meta"><span>${e.read} read</span><span class="go">Read <span aria-hidden="true">→</span></span></div>`:""}
      </div>
    </div>`}function B(e){return`<a href="${e.href}"${e.href.startsWith("http")?' target="_blank" rel="noopener"':""}>${e.label} <span class="arr" aria-hidden="true">↗</span></a>`}function R(e){const t=e.caseStudy,o=e.meta.map(a=>`<span class="ov-dot" aria-hidden="true">·</span><span class="ov-meta-sm">${a}</span>`).join(""),n=t.sections.map((a,s)=>`
    <div class="ov-section">
      <p class="ov-sec-label"><span class="ov-sec-n">${p(s+1)}</span>${a.label}</p>
      <div class="ov-sec-body">${(Array.isArray(a.body)?a.body:[a.body]).map(r=>`<p>${r}</p>`).join("")}</div>
    </div>`).join("");return`
    <article>
      <header class="ov-header">
        <div class="ov-eyebrow">
          <span class="tag">${e.tag}</span>${o}
        </div>
        <h1 class="ov-h1">${e.title}</h1>
        ${t.overview?`<p class="ov-dek">${t.overview}</p>`:""}
        <a href="${e.href}" target="_blank" rel="noopener" class="ov-proj-link">View ${e.title} <span aria-hidden="true">↗</span></a>
      </header>
      <div class="ov-thumb-lg">${e.thumb}</div>
      <div class="ov-sections">${n}</div>
      <a href="${e.href}" target="_blank" rel="noopener" class="ov-proj-link" style="margin: 40px 0 0">View ${e.title} <span aria-hidden="true">↗</span></a>
    </article>`}function q(e){var n;const t=e.read?`<span class="ov-dot" aria-hidden="true">·</span><span class="ov-meta-sm">${e.read} read</span>`:"",o=(n=e.body)!=null&&n.length?`<hr class="ov-rule" /><div class="ov-prose">${e.body.map(a=>`<p>${a}</p>`).join("")}</div>`:"";return`
    <article>
      <header class="ov-header">
        <div class="ov-eyebrow">
          <span class="tag">${e.kind}</span>
          <span class="ov-dot" aria-hidden="true">·</span>
          <span class="ov-meta-sm">${e.date}</span>
          ${t}
        </div>
        <h1 class="ov-h1">${e.title}</h1>
        ${e.dek?`<p class="ov-dek">${e.dek}</p>`:""}
      </header>
      ${o}
    </article>`}const g=C(),w=new Date().getFullYear(),G=`
  <button class="theme-toggle" aria-label="Toggle light / dark" title="Toggle light / dark">
    <svg viewBox="-10 -10 20 20" width="16" height="16" aria-hidden="true">
      <circle r="8.2" fill="none" stroke="currentColor" stroke-width="1.5" />
      <path d="M0 -8.2 A8.2 8.2 0 0 1 0 8.2 Z" fill="currentColor" />
    </svg>
  </button>

  <div class="shell">
    <section class="hero">
      <p class="kicker" data-reveal>Portfolio · ${w}</p>
      <h1 data-reveal>James<br />Ostergaard</h1>
      <p class="statement" data-reveal>
        I'm a generalist. At work I build AI infrastructure. Outside of work I look for what technology
        passes over: <em>the reachable but unmapped</em>, <span class="quiet">the relevant but unranked.</span>
      </p>
    </section>

    <section id="work">
      ${l.length>0?`
      <div class="tabs" role="tablist" data-reveal>
        <button class="tab" role="tab" data-tab="projects" aria-selected="${g==="projects"}">
          Projects <span class="ct">${p(m.length)}</span>
        </button>
        <button class="tab" role="tab" data-tab="writing" aria-selected="${g==="writing"}">
          Writing <span class="ct">${p(l.length)}</span>
        </button>
      </div>`:`
      <div class="sec-head" data-reveal><span>Projects</span><span class="count">${p(m.length)}</span></div>`}
      <div class="index" id="projects-index"${g!=="projects"?" hidden":""}>
        ${m.map((e,t)=>O(e,t+1)).join("")}
      </div>
      ${l.length>0?`
      <div class="index" id="writing-index"${g!=="writing"?" hidden":""}>
        ${l.map((e,t)=>W(e,t)).join("")}
      </div>`:""}
    </section>

    <footer class="foot">
      <div class="links" data-reveal>
        ${M.map(B).join(`
        `)}
      </div>
      <div class="colophon" data-reveal>
        jamesostergaard.com<br />
        &copy; ${w} James Ostergaard
      </div>
    </footer>
  </div>
`,N=document.getElementById("root");N.innerHTML=G;const i=document.createElement("div");i.id="overlay";i.className="overlay";i.setAttribute("role","dialog");i.setAttribute("aria-modal","true");i.hidden=!0;document.body.appendChild(i);const _=`
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
  </div>`;let f=!1;function k(e){var t,o;i.innerHTML=_+`<div class="ov-scroll"><div class="ov-col">${e}</div></div>`,i.classList.remove("overlay-out"),i.hidden=!1,document.body.style.overflow="hidden",(t=document.getElementById("ov-back-btn"))==null||t.addEventListener("click",v),(o=document.getElementById("ov-close-btn"))==null||o.addEventListener("click",v)}function v(){f||(f=!0,i.classList.add("overlay-out"),setTimeout(()=>{i.hidden=!0,i.classList.remove("overlay-out"),document.body.style.overflow="",f=!1},340))}window.addEventListener("keydown",e=>{e.key==="Escape"&&!i.hidden&&v()});function D(e){e==="writing"?history.replaceState(null,"","#writing"):history.replaceState(null,"",location.pathname),document.querySelectorAll(".tab").forEach(n=>{n.setAttribute("aria-selected",String(n.dataset.tab===e))});const t=document.getElementById("projects-index"),o=document.getElementById("writing-index");t&&(t.hidden=e!=="projects"),o&&(o.hidden=e!=="writing")}document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.tab;t&&D(t)})});function $(e){if(e.closest("a"))return;const t=e.closest("[data-project-id]");if(!t)return;const o=m.find(n=>n.id===t.dataset.projectId);o!=null&&o.caseStudy&&k(R(o))}const c=document.getElementById("projects-index");c==null||c.addEventListener("click",e=>$(e.target));c==null||c.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||e.target.closest("a")||(e.preventDefault(),$(e.target))});function I(e){const t=e.closest("[data-writing-idx]");if(!t)return;const o=parseInt(t.dataset.writingIdx,10),n=l[o];n&&k(q(n))}const h=document.getElementById("writing-index");h==null||h.addEventListener("click",e=>I(e.target));h==null||h.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),I(e.target))});const y={paper:"#f9f8f5",dark:"#1b1712"};function F(){return document.documentElement.getAttribute("data-theme")||"paper"}function x(e,t){document.documentElement.setAttribute("data-theme",e);const o=document.getElementById("theme-color");if(o&&o.setAttribute("content",y[e]??y.paper),t)try{localStorage.setItem("jo-theme",e)}catch{}}document.querySelector(".theme-toggle").addEventListener("click",()=>{x(F()==="dark"?"paper":"dark",!0)});try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{let t=null;try{t=localStorage.getItem("jo-theme")}catch{}t||x(e.matches?"dark":"paper",!1)})}catch{}

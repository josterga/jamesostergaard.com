(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();document.documentElement.classList.add("js");function f(e,a,r,o,t){let n="";for(let i=0;i<=64;i++){const c=i/64*Math.PI*2,m=Math.sin(c*3+t)*.5+Math.sin(c*5+t*1.7)*.3+Math.sin(c*2+t*.4)*.6,l=r*(1+m*o);n+=(i===0?"M":"L")+(e+Math.cos(c)*l).toFixed(1)+" "+(a+Math.sin(c)*l*.92).toFixed(1)+" "}return n+"Z"}function g(){const e=[];for(let a=0;a<6;a++){const r=(.85-a*.07).toFixed(2);e.push(`<path d="${f(0,0,8+a*11,.07+a*.01,a*2.1+1)}" fill="none" stroke="#b9682f" stroke-width="1.4" style="opacity:${r}" />`)}return`<svg viewBox="-66 -46 132 92" xmlns="http://www.w3.org/2000/svg" style="background:oklch(0.965 0.02 75)">
    ${e.join(`
    `)}
    <circle r="3.2" fill="#b9682f" />
  </svg>`}function b(){const e=["○","△","→","⊕","↑","⊘","□","↗"],a=["#5566c9","#4a90b8","#6aa86a","#9a8fc0","#c98a4a"],r=[];let o=0;for(let t=0;t<7;t++)for(let s=0;s<10;s++){const n=a[(t+s*2)%a.length],i=e[(t*3+s*5+o)%e.length];r.push(`<text x="${9+s*13.5}" y="${16+t*12}" font-size="9" font-family="monospace" fill="${n}" style="opacity:0.78">${i}</text>`),o++}return`<svg viewBox="0 0 132 92" xmlns="http://www.w3.org/2000/svg" style="background:#15171f">
    ${r.join(`
    `)}
  </svg>`}const d=[{id:"emanant",title:"Emanant",tag:"Isochrone map",desc:"A map without a destination. Visualizes what's reachable on foot or by bike from where you stand.",meta:["Web","Mapping"],href:"https://emanant.app",thumb:g()},{id:"dispatch",title:"Dispatch",tag:"Agent runner",desc:"Scheduled agentic searches, delivered as a digest. Define agents (prompts) that run on a schedule and surface what you care about. Self-hosted, free search APIs, runs on Ollama or any LLM.",meta:["Self-hosted","LLM"],href:"https://github.com/josterga/dispatch",thumb:'<img src="/dispatch.png" alt="Dispatch — agent list view" />'},{id:"packet",title:"Packet Pressure",tag:"Card game",desc:"An original card game that turns internet routing into social play. Players build shared paths through a network, hold endpoints, and negotiate when routes collapse. The logic of how packets actually move, made tangible.",meta:["Tabletop","Original"],href:"https://packetpressure.com",thumb:b()}],v=[{label:"GitHub",href:"https://github.com/josterga"},{label:"LinkedIn",href:"https://www.linkedin.com/in/jamesostergaard/"},{label:"parcl0 — art & design",href:"https://parcl0.com"},{label:"Contact",href:"mailto:mail@jamesostergaard.com"}];function u(e){return String(e).padStart(2,"0")}function y(e,a){const r=e.meta.map(o=>`<span>${o}</span>`).join("");return`
    <a class="row" href="${e.href}" target="_blank" rel="noopener" data-reveal>
      <div class="num">${u(a)}</div>
      <div class="body">
        <div class="title">
          <h3>${e.title}</h3>
          <span class="tag">${e.tag}</span>
        </div>
        <p class="desc">${e.desc}</p>
        <div class="meta">
          ${r}
          <span class="go">View <span aria-hidden="true">→</span></span>
        </div>
      </div>
      <div class="thumb">${e.thumb}</div>
    </a>`}function w(e){return`<a href="${e.href}"${e.href.startsWith("http")?' target="_blank" rel="noopener"':""}>${e.label} <span class="arr" aria-hidden="true">↗</span></a>`}const k=new Date().getFullYear(),$=`
  <button class="theme-toggle" aria-label="Toggle light / dark" title="Toggle light / dark">
    <svg viewBox="-10 -10 20 20" width="16" height="16" aria-hidden="true">
      <circle r="8.2" fill="none" stroke="currentColor" stroke-width="1.5" />
      <path d="M0 -8.2 A8.2 8.2 0 0 1 0 8.2 Z" fill="currentColor" />
    </svg>
  </button>

  <div class="shell">
    <section class="hero">
      <p class="kicker" data-reveal>Portfolio · ${k}</p>
      <h1 data-reveal>James<br />Ostergaard</h1>
      <p class="statement" data-reveal>
        I’m a generalist. At work I build AI infrastructure. Outside of work I look for what technology
        passes over: <em>the reachable but unmapped</em>, <span class="quiet">the relevant but unranked.</span>
      </p>
    </section>

    <section id="work">
      <div class="sec-head" data-reveal><span>Projects</span><span class="count">${u(d.length)}</span></div>
      <div class="index">
        ${d.map((e,a)=>y(e,a+1)).join("")}
      </div>
    </section>

    <footer class="foot">
      <div class="links" data-reveal>
        ${v.map(w).join(`
        `)}
      </div>
    </footer>
  </div>
`,L=document.getElementById("root");L.innerHTML=$;const h={paper:"#f9f8f5",dark:"#1b1712"};function M(){return document.documentElement.getAttribute("data-theme")||"paper"}function p(e,a){document.documentElement.setAttribute("data-theme",e);const r=document.getElementById("theme-color");if(r&&r.setAttribute("content",h[e]??h.paper),a)try{localStorage.setItem("jo-theme",e)}catch{}}document.querySelector(".theme-toggle").addEventListener("click",()=>{p(M()==="dark"?"paper":"dark",!0)});try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{let a=null;try{a=localStorage.getItem("jo-theme")}catch{}a||p(e.matches?"dark":"paper",!1)})}catch{}

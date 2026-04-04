(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <header>
    <a href="https://jamesostergaard.com" target="_blank">James Ostergaard</a>
  </header>

  <main>
    <p>
      I'm a creative technologist with experience across data, clean energy, fintech, and AI.
      I help teams design and support practical systems and processes that scale.<br><br>
      Early in my career, I was driven by curiosity to deconstruct technology, understand how it
      works, and rebuild it with purpose. That mindset shaped how I approach every challenge:
      stay resourceful, focus on outcomes, and treat everything as a learning experience.<br><br>
      I strive to bridge technical depth with real-world usability, helping people and systems
      perform at their best.
    </p>
  </main>

  <footer>
    <a href="https://github.com/josterga" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/jamesostergaard/" target="_blank">LinkedIn</a>
    <a href="https://parcl0.com" target="_blank">Creative</a>
    <a href="mailto:mail@jamesostergaard.com">Contact</a>
  </footer>
`;

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <header>
    <a href="https://jamesostergaard.com" target="_blank">James Ostergaard</a>
  </header>

  <main>
    <div class="bio">
      <p> I work on AI and data systems. On the side, I build tools that give control back - to the user, the machine, the network. </p>
    </div>

    <section class="projects">
      <h2>I'm making</h2>
      <div class="project-list">
        <div class="project-card">
          <a href="https://emanant.app" target="_blank" class="project-card-inner">
            <img src="/emanant.svg" alt="Emanant" class="project-img" />
            <div class="project-info">
              <span class="project-title">Emanant</span>
              <p class="project-desc">A map without a destination.</p>
            </div>
          </a>
        </div>
        <div class="project-card">
          <div class="project-card-inner project-card-inner--static">
            <div class="project-info">
              <span class="project-title">Dispatch</span>
              <p class="project-desc">A news feed without an algorithm.</p>
            </div>
          </div>
        </div>
        <div class="project-card">
          <a href="https://packetpressure.com" target="_blank" class="project-card-inner">
            <img src="/packetpressure.png" alt="Packet Pressure" class="project-img" />
            <div class="project-info">
              <span class="project-title">Packet Pressure</span>
              <p class="project-desc">A card game about stealing packets</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <a href="https://github.com/josterga" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/jamesostergaard/" target="_blank">LinkedIn</a>
    <a href="https://parcl0.com" target="_blank">Creative</a>
    <a href="mailto:mail@jamesostergaard.com">Contact</a>
  </footer>
`;

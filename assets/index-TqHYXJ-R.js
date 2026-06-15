(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <header>
    <h1><a href="https://jamesostergaard.com">James Ostergaard</a></h1>
  </header>

  <main>
    <div class="bio">
      <p>I'm a generalist. At work I build AI infrastructure. Outside of work I look for what technology passes over: the reachable but unmapped, the relevant but unranked.</p>
    </div>

    <section class="projects">
      <h2>Projects</h2>
      <div class="project-list">
        <div class="project-card">
          <a href="https://emanant.app" target="_blank" class="project-card-inner">
            <img src="/emanant.svg" alt="Emanant" class="project-img" />
            <div class="project-info">
              <h3 class="project-title">Emanant</h3>
              <p class="project-desc">A map without a destination. Visualizes what's reachable on foot or by bike from where you stand.</p>
            </div>
          </a>
        </div>
        <div class="project-card">
          <a href="https://github.com/josterga/dispatch" target="_blank" class="project-card-inner">
            <div class="project-info">
              <h3 class="project-title">Dispatch</h3>
              <p class="project-desc">Scheduled agentic searches, delivered as a digest. Define agents (prompts) that run on a schedule and surface what you care about. Self-hosted, free search APIs, runs on Ollama or any LLM.</p>
            </div>
          </a>
        </div>
        <div class="project-card">
          <a href="https://packetpressure.com" target="_blank" class="project-card-inner">
            <img src="/packetpressure.png" alt="Packet Pressure" class="project-img" />
            <div class="project-info">
              <h3 class="project-title">Packet Pressure</h3>
              <p class="project-desc">An original card game that turns internet routing into social play. Players build shared paths through a network, hold endpoints, and negotiate when routes collapse. The logic of how packets actually move, made tangible.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <a href="https://github.com/josterga" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/jamesostergaard/" target="_blank">LinkedIn</a>
    <a href="https://parcl0.com" target="_blank">parcl0 — art & design</a>
    <a href="mailto:mail@jamesostergaard.com">Contact</a>
  </footer>
`;

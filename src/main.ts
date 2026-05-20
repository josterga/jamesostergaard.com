import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
          <a href="https://github.com/josterga/dispatch" target="_blank" class="project-card-inner">
            <div class="project-info">
              <span class="project-title">Dispatch</span>
              <p class="project-desc">A news feed without an algorithm.</p>
            </div>
          </a>
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

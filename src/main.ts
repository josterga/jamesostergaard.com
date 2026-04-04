import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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

export interface CaseStudySection {
  label: string;
  body: string;
}

export interface CaseStudy {
  overview: string;
  sections: CaseStudySection[];
}

export interface ProjectData {
  id: string;
  title: string;
  tag: string;
  desc: string;
  meta: string[];
  href: string;
  caseStudy?: CaseStudy;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'emanant',
    title: 'Emanant',
    tag: 'Isochrone map',
    desc: "A map without a destination. Visualizes what's reachable on foot or by bike from where you stand.",
    meta: ['Web', 'Mapping'],
    href: 'https://emanant.app',
    caseStudy: {
      overview: "A navigation tool built around presence, not destination. Starting from a simple question: not 'how do I get there?' but 'what's actually reachable from here?'",
      sections: [
        {
          label: 'The problem',
          body: "Navigation apps are organized around destinations. You name a place; they plot a route. That framing answers a specific question well — but it quietly buries a different one: what does the territory around you actually look like? What's within reach? The standard map won't tell you, because it's designed to get you somewhere else.",
        },
        {
          label: 'What I built',
          body: "Emanant renders isochrone contours — the true shape of reachability — on foot or by bike from any point you drop. Choose a time window (15, 30, 45 minutes) and the map fills in the reachable zone, accounting for road networks, terrain, and real walking speeds. The result isn't a circle. It's a shape, and that shape is different everywhere.",
        },
        {
          label: 'What it revealed',
          body: "Building this changed how I think about place. The contour from my apartment is asymmetric: wide to the west along flat streets, cut short to the east by a highway. That shape is, in some sense, my actual neighborhood — not the administrative one, but the one I move through. Seeing it rendered makes the invisible legible.",
        },
      ],
    },
  },
  {
    id: 'dispatch',
    title: 'Dispatch',
    tag: 'Agent runner',
    desc: 'Scheduled agentic searches, delivered as a digest. Define agents (prompts) that run on a schedule and surface what you care about. Self-hosted, free search APIs, runs on Ollama or any LLM.',
    meta: ['Self-hosted', 'LLM'],
    href: 'https://github.com/josterga/dispatch',
    caseStudy: {
      overview: "A self-hosted tool for running scheduled AI agents that surface things you'd otherwise miss — without depending on any external platform or subscription.",
      sections: [
        {
          label: 'The problem',
          body: "I kept doing the same manual searches every few days: checking if certain papers had been cited, monitoring low-traffic forums, tracking developments in projects I cared about but didn't want to follow continuously. The pattern was repetitive enough to automate — but specific enough that nothing off-the-shelf covered it.",
        },
        {
          label: 'What I built',
          body: "A runner that takes agent definitions — prompts, search queries, schedules — and executes them on a cron, then delivers a plain-text digest. Runs entirely locally: no API keys required, free search backends (DuckDuckGo, Brave), compatible with Ollama for the LLM layer. Setup is YAML; output is a file or an email.",
        },
        {
          label: 'The design stance',
          body: "Dispatch intentionally has no web interface. Dashboards invite you to keep checking. Digests arrive and then they're done. This was a deliberate decision — the tool should do its work and get out of the way, not create a new surface to monitor.",
        },
      ],
    },
  },
  {
    id: 'packet',
    title: 'Packet Pressure',
    tag: 'Card game',
    desc: 'An original card game that turns internet routing into social play. Players build shared paths through a network, hold endpoints, and negotiate when routes collapse. The logic of how packets actually move, made tangible.',
    meta: ['Tabletop', 'Original'],
    href: 'https://packetpressure.com',
    caseStudy: {
      overview: "A card game about internet routing that's really about negotiation, trust, and what happens when shared infrastructure fails.",
      sections: [
        {
          label: 'The concept',
          body: "BGP — the protocol that routes traffic across the internet — is one of the most important and least understood systems in daily life. It's a set of social agreements between autonomous systems: I'll route your traffic if you route mine. When those agreements break, traffic vanishes, reroutes wildly, or loops. I wanted to make that dynamic playable.",
        },
        {
          label: 'How it plays',
          body: "Players represent autonomous systems. Each turn, you extend a route, hold an endpoint, or announce a policy change. Other players must adapt. The game ends when a packet successfully traverses the table — or when the network fragments and no one wins. Plays in 30 minutes, scales 3–6 players.",
        },
        {
          label: 'What it teaches',
          body: "The best moment in playtesting came when a player realized they'd been trusting another player's routing announcements without verifying them — exactly what happens in real BGP. The game teaches infrastructure thinking: the internet is a set of human agreements, not a physical given.",
        },
      ],
    },
  },
];

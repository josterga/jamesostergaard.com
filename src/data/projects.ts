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
      overview: "An isochrone map for walkers and cyclists that draws the area you can reach from where you stand in the next 5, 10, 20, or 30 minutes. Built for exploration, not navigation.",
      sections: [
        {
          label: 'What it is',
          body: "Emanant draws the area you can reach in the next 5, 10, 20, or 30 minutes on foot or by bike. It accounts for terrain and shows the neighborhoods that fall within the reachable area. The idea is exploration, not navigation.",
        },
        {
          label: 'Why I built it',
          body: "I love wandering. Walking, biking, just getting lost. 'Poetry is in the street' is something I live by — there are moments, images, and sounds you only find when you slow down. When I'm in a new city, one of the first things I want to know is what I can walk to from where I stand. Every major map app is built around destinations, which require knowing exactly where you want to go. I wanted a map that started with where I already was, not where I was going.",
        },
        {
          label: 'Who it\'s for',
          body: "Anyone who moves through a city on foot or by bike. People who are new somewhere and want to understand a neighborhood before committing to it. People with 20 minutes of free time and no plan. People who just want to walk somewhere and don't know where to start. Wanderers.",
        },
        {
          label: 'Core pipeline',
          body: "The app is built on React, TypeScript, and Mapbox GL. The core feature is a two-API chain: Mapbox Isochrone returns a GeoJSON polygon for the reachable area, then Mapbox Tilequery queries that polygon against street-level neighborhood data to build the reach list — reachable neighborhoods with bearing and distance, pulled from real map data. Terrain is handled by Mapbox's routing engine; I added a hillshade layer to make this visible. Without it, the boundary can look arbitrary. With it, you can see exactly why it cuts off where it does.",
        },
        {
          label: 'Mobile & sharing',
          body: "On mobile, the app polls your location every 10 seconds and refreshes the isochrone when you've moved more than 10 meters. The share feature encodes your location and settings into a URL — raw coordinates felt like unnecessary exposure, so I XOR-ciphered and base64-encoded them. The recipient sees the pinned view, not their own location. Analytics use Google Analytics 4 at city-level precision only; no exact coordinates reach Google.",
        },
        {
          label: 'Pin mode',
          body: "Pin mode was a later addition but opened up a different use case: exploring a neighborhood you're not in. Long-press anywhere on the map to drop a pin, or search an address — the same isochrone and neighborhood lookup run relative to the pinned location.",
        },
        {
          label: 'The approach',
          body: "I built this entirely in Claude Code. The workflow was simple: build, test, repeat. My prompts reflected the scope of what I was trying to achieve — scoping a new feature used a longer, more detailed prompt; fixing a bug needed only a few words. The first fully functional version with GPS polling, isochrone rendering, and neighborhood list shipped within roughly 24 hours of starting. Everything after that was iteration.",
        },
        {
          label: 'What I learned',
          body: "When to stop: I spent an hour chasing a whitespace issue in Safari and after five failed commits reverted entirely — it turned out to be iOS viewport rendering affecting many sites, not something worth pushing on. How to work smarter: instead of describing a feature in my own words, I asked Claude to generate a prompt that would get the feature built, then fed that into a new session. What not to build: I included a drive mode initially, but it generated such a large isochrone that it felt out of character — and you should stick to a destination when driving anyway.",
        },
        {
          label: 'Where I\'d take it',
          body: "Richer data overlays. Walking comfort isn't just about distance — wind, temperature, and air quality affect where it makes sense to go. And a social isochrone mode: given two locations, draw the overlap that represents where both people can arrive in N minutes on foot, without either person having to be the one who comes to you.",
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

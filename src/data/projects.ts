export interface CaseStudySection {
  label: string;
  body: string | string[];
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
      overview: `Emanant is an isochrone map for walkers and cyclists. The idea is exploration, not navigation.`,
      sections: [
        {
          label: 'What it is',
          body: `Emanant is an isochrone map for walkers and cyclists. It draws the area you can reach in the next 5, 10, 20, or 30 minutes. It accounts for terrain and shows neighborhoods that fall within the reachable area. The idea is exploration, not navigation.`,
        },
        {
          label: 'Why I built it',
          body: [
            `I love wandering. Walking, biking, just getting lost. “Poetry is in the street” is something I live by — there are moments, images, and sounds you only find when you slow down. When I think back to my childhood, I walked or biked everywhere, and exploring the neighborhood was an activity in itself. I still explore like that; when I’m waiting to pick up a food order I’ll loop the block a few times. When I’m in a new city, one of the first things I want to know is what I can walk to from where I stand.`,
            `Every major map app is built around destinations, which require knowing exactly where you want to go. Traditional mapping defines a linear relationship with your surroundings and discourages deviating from the route; it always optimizes for the shortest time spent traveling. I had jotted down an idea: <em>time-based travel/discovery app</em>. I was familiar with isochrones from urban planning contexts and wanted to see how real this idea could be. I fired up Claude Code.`,
            `What I wanted was a map that started with where I already was, not where I was going.`,
          ],
        },
        {
          label: `Who it’s for`,
          body: `Anyone who moves through a city on foot or by bike. People who are new somewhere and want to understand a neighborhood before committing to it. People with 20 minutes of free time and no plan. People who just want to walk somewhere and don’t know where to start. Wanderers.`,
        },
        {
          label: 'Core pipeline',
          body: [
            `The app is built on React, TypeScript, and Mapbox GL. The core feature is a two-API chain: Mapbox Isochrone returns a GeoJSON polygon for the reachable area, then Mapbox Tilequery queries that polygon against street-level neighborhood data to build the reach list. The result is a list like “↗ NE · Market · 0.4 km” — reachable neighborhoods with bearing and distance, pulled from real map data.`,
            `Terrain is handled by Mapbox’s routing engine, and to make that visible I added a hillshade layer over the map. Without it, the shape can look arbitrary. With it, you can see exactly why the boundary cuts off where it does.`,
          ],
        },
        {
          label: 'GPS',
          body: `On mobile, the app polls your location every 10 seconds and refreshes the isochrone when you’ve moved more than 10 meters. If the initial GPS fix fails, the app keeps trying rather than showing a dead error state.`,
        },
        {
          label: 'Sharing',
          body: `The share feature encodes your location and settings into a URL. Raw coordinates felt like unnecessary exposure, so I XOR-ciphered and base64-encoded them to add a layer of obfuscation. The recipient of the URL sees the pinned view, not their own location.`,
        },
        {
          label: 'Privacy',
          body: `Analytics use Google Analytics 4, but only at city-level precision — no exact coordinates reach Google.`,
        },
        {
          label: 'Pin mode and search',
          body: `Pin mode was a later addition but opened up a different use case: exploring a neighborhood you’re not in. Long-press anywhere on the map to drop a pin, or search an address; the same isochrone and neighborhood lookup run relative to the pinned location.`,
        },
        {
          label: 'The approach',
          body: [
            `I built this entirely in Claude Code. The workflow was simple: build, test, repeat. My prompts reflected the scope of what I was trying to achieve; scoping a new feature used a longer, more detailed prompt. Fixing a bug or a small change only needed a few words.`,
            `The first fully functional version with GPS polling, isochrone rendering, and neighborhood list shipped within roughly 24 hours of starting. The bulk of the initial build happened across three or four days. Everything after that was iteration.`,
          ],
        },
        {
          label: 'What I learned',
          body: [
            `When to stop. I loaded the live website on my phone in Safari and noticed there was a massive whitespace between the lower navbar and the bottom of the app — that definitely wasn’t there before. I spent about an hour trying to figure out what was causing it, and after five failed commits I decided to stop and revert those changes entirely. The issue was caused by iOS liquid glass viewport rendering, and I confirmed other websites (like LinkedIn) were similarly impacted. Just not something worth pushing on.`,
            `How to work smarter. While I was scoping out how much I wanted to build and what features to add to the app, I was investigating the idea of a persona of an ‘apartment hunter’ who would use the app to discover how walkable or bikeable potential apartments were. I found the use case insightful and instead of describing the feature in my own words, I asked Claude to “generate a prompt that will get that feature generated as part of the code,” fed that into a new session, and kept moving forward.`,
            `What not to build. I initially included a drive mode alongside walking and biking, but it generated such a large isochrone that it felt out of character with the rest of the app. Not to mention that I’d advocate that you should stick to a destination when driving, both to save fuel and to eliminate distractions.`,
          ],
        },
        {
          label: `Where I’d take it`,
          body: [
            `Richer data overlays. Walking comfort isn’t just about distance. Wind, temperature, and air quality affect where it makes sense to go. I’d love to see weather at each neighborhood as well as on the map.`,
            `Social isochrone. Given two locations, draw the isochrone that represents the overlap: where both people can reach in N minutes on foot. A useful tool for meeting someone in the middle without requiring either person to be the one who “comes to you.”`,
          ],
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
    href: 'https://github.com/josterga/dispatch'
  },
  {
    id: 'packet',
    title: 'Packet Pressure',
    tag: 'Card game',
    desc: 'An original card game that turns internet routing into social play. Players build shared paths through a network, hold endpoints, and negotiate when routes collapse. The logic of how packets actually move, made tangible.',
    meta: ['Tabletop', 'Original'],
    href: 'https://packetpressure.com'
  },
];

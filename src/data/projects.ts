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
      overview: `A map without a destination — what you can reach, not where you're going.`,
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
        {label: `Conclusion`,
          body: [
            `Emanant started as a question — what can I reach from here? — and ended up as the map I always wanted but couldn't find.`, 
            `The best tools change how you move through the world. I built this to find out if that was possible in a weekend. It was.`]
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
      overview: `Dispatch is a system for running AI-synthesized scheduled web searches.`,
      sections: [
        {
          label: 'What it is',
          body: `Dispatch is a system for running AI-synthesized scheduled web searches. You define agent prompts that run as web search or direct URL queries. A second prompt defines what the agent's output should look like. Runs are executed on a schedule as dispatches. The interface is a web UI that shows a feed of your 'dispatches' and you can create, schedule, and browse agents and their dispatches.`,
        },
        {
          label: 'Why I built it',
          body: [
            `I was unhappy with the current options to schedule AI searches; I tried using Perplexity's scheduled searches feature but ultimately wanted more control over cadence, depth, and output. I also tried Google search alerts but that was missing the AI component (I think now Google has actually added AI to search alerts). There was nothing that allowed me to run a bunch of searches and easily synthesize the information coming in, on a schedule. I also built this because I get fatigued with the current state of AI interfaces. AI chats are so attention-demanding because they are conversational; sometimes I just want to fire off a query and come back to it later. I mostly use Dispatch as a morning digest to focus my news feed and keep me from doomscrolling.`,
            `Agentic computing should be ubiquitous - running in the background, around the clock, without requiring your presence. Dispatch is a rejection of the AI engagement economy: search, retrieval, and synthesis happen on a schedule, and the output is waiting when you're ready for it. Instead of going to the news, the news comes to you.`,
          ],
        },
        {
          label: `Who it's for`,
          body: `Dispatch is for anyone who wants a personalized information feed without handing that curation to an algorithm. The obvious fit is developers and technically-minded people comfortable self-hosting. Beyond the setup, the use cases are broad: a morning digest to replace doomscrolling, a research feed for tracking a market or technology, a clipping service for journalists or analysts who follow specific beats, or a hobbyist keeping tabs on something niche that no newsletter covers.`,
        },
        {
          label: 'How I use it',
          body: [
            `I have several daily and weekly dispatches that I use to get an at-a-glance look into topics I care about. Some examples are new restaurants, local events, sports news, streaming & gaming news, and state and local government news. I've even used it to track when a concert tour is stopping nearby.`,
            `Here's the agent config I use for a 'new restaurants' agent:\n\nGoal Template: Find notable new, reopening, or buzz-worthy SF restaurants, coffee shops, and pop-ups. Include neighborhood, category, price range, and what makes each distinctive.\n\nOutput template: SF Food - new restaurants, coffee shops, and pop-ups. Per entry: name, neighborhood, category (restaurant / coffee / pop-up), price range, distinctive hook.\n\nThis agent dispatches on Saturdays at 11:00 and provides me with a list of new restaurants to try.`,
          ],
        },
        {
          label: 'Pipeline',
          body: `Each agent run is a multi-phase pipeline managed by Python - no single model call holds the full context. A planner LLM generates a set of search queries tailored to the agent's goal and sources. Those queries fire in parallel across all configured search providers - DuckDuckGo, Brave, Jina, and Ollama Cloud. A validator then reads the collected results and decides whether the research buffer is sufficient; if not, it generates retry queries and runs another pass. Once coverage passes, a synthesizer formats the final output using the agent's output template. Agents can also run multi-track: independent sub-pipelines execute in parallel, each with its own sources and goal, and their results get aggregated into a single response, a digest.`,
        },
        {
          label: 'Search fan-out',
          body: `Every search query fans out in parallel across up to four providers - DuckDuckGo, Brave Search, Jina Search, and Ollama Cloud. Results are merged and deduplicated. DuckDuckGo is always on as a baseline; the others activate when you provide an API key. All four offer free tiers.`,
        },
        {
          label: 'Web fetching',
          body: `For agents that need full article content rather than search snippets, the pipeline ranks result URLs by relevance, fetches the top pages, and runs a per-page summarizer before synthesis. Raw HTTP with tag-stripping is the default; if a page returns thin content (under 3000 chars - usually a JavaScript shell), Jina Reader is called as a fallback to get the rendered version.`,
        },
        {
          label: 'Direct feed mode',
          body: `Agents can skip the search planner entirely and pull from a list of known URLs - RSS feeds, API endpoints, anything on a predictable schedule. {today} is substituted with the current date, so date-parameterized endpoints work without configuration changes.`,
        },
        {
          label: 'Multi-track pipelines',
          body: `A single agent can run multiple independent sub-pipelines in parallel, each with its own goal, sources, freshness filter, and query count. Results are aggregated into one synthesizer call. Useful for agents that cover distinct angles - for example, research papers and industry news running as separate tracks under one agent.`,
        },
        {
          label: 'LLM providers',
          body: `The inference layer is provider-agnostic. Ollama, OpenAI, Anthropic, and Fireworks all work; the provider client normalizes their different message formats and tool call conventions into a single interface. A separate fast model can be configured for the lighter planner and validator phases, keeping costs down while using a larger model only for final synthesis.`,
        },
        {
          label: 'Scheduling and dispatch',
          body: `Dispatches are cron-scheduled via APScheduler running inside the server process. One agent can have multiple dispatches - different prompts, different schedules. Schedules persist across restarts via SQLite.`,
        },
        {
          label: 'Web UI',
          body: `Dispatch is a single-page app served from the Python process. The Digest tab compiles the most recent output from every active agent into one briefing. The Active tab shows running dispatches with next-run times. Library tab is where agents are created, edited, and exported as YAML.`,
        },
        {
          label: 'Deploy',
          body: `Dispatch ships with a systemd service file. Point it at the working directory, enable it, and the server runs as a background process with automatic restart on failure.`,
        },
        {
          label: 'What I learned',
          body: [
            `You gotta pay to play. When I first set out to build Dispatch my goal was for it to be completely self-contained - scraper, search, and inference all running locally. I ran into some hardware constraints based on the machine I was planning to deploy it on and pivoted to cloud APIs. What I got from the change was improved accuracy and speed while still remaining very low cost. The only cost is from the LLM calls, all searches are 100% free.`,
            `The harder decision was deciding between indexing and direct fetching. The web is made up of HTML/markdown and JavaScript, and parsing that can be difficult. Some websites I wanted to fetch were wrappers around an iFrame or other JS and I was unable to get the content in an LLM-parseable format. So the two options I have are to use the already-indexed search results, or use Jina to attempt to parse. Both are in use throughout the app and work well.`,
          ],
        },
        {
          label: `Where I'd take it`,
          body: [
            `I'd love to have my digests delivered as notifications straight to my phone. That would make the idea of 'information comes to me' come full circle. I've explored using the ntfy iOS app but would prefer something more universal, possibly email.`,
            `I'd like agents to be able to call back to previous dispatch runs and refine their searches over time - effectively learning on their own what's most relevant or noisy.`,
          ],
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
    href: 'https://packetpressure.com'
  },
];

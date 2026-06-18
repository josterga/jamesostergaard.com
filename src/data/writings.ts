export interface Writing {
  kind: 'Essay' | 'Idea' | 'Note';
  date: string;
  title: string;
  dek?: string;
  read?: string;
  body?: string[];
}

export const WRITING: Writing[] = [
  {
    kind: 'Essay',
    date: '2026 — Apr',
    title: 'The tyranny of the ranked feed',
    dek: 'Relevance and ranking are not the same thing — and what we quietly lose when an algorithm decides the order.',
    read: '8 min',
    body: [
      "When we talk about information overload, we usually mean too much. But the deeper problem is different: it's not that there's too much information, it's that almost all of it arrives pre-sorted. Something has already decided the order, and that order carries an implicit claim about what matters.",
      "Ranking and relevance feel synonymous. They aren't. Relevance is a relationship between a piece of information and a specific person at a specific moment. Ranking is a prediction — usually a statistical one — about what a large population engaged with more. The two can align. Frequently, they don't.",
      "The casualty isn't the information that gets ranked low. It's the information that doesn't fit the ranking signal at all: slow-moving, structurally important, contextually rich material that doesn't generate engagement spikes. Things that matter to you specifically, not to the median user of the platform. The relevant-but-unranked.",
      "I've been thinking about this while building Emanant — a tool with no ranking mechanism. It answers a question by showing you a shape, not a list. There's no best result. There's only what's reachable, and the contour of that reachability is itself the answer. I'm not sure how far that approach generalizes, but I find the absence of ranking clarifying in a way I didn't expect.",
    ],
  },
  {
    kind: 'Idea',
    date: '2026 — Mar',
    title: 'A search engine that only returns things you could act on today.',
  },
  {
    kind: 'Essay',
    date: '2026 — Feb',
    title: 'Maps without destinations',
    dek: 'How isochrones changed the way I think about where I live — and why Emanant has no search box.',
    read: '6 min',
    body: [
      "The standard map is organized around destinations. You have a place in mind; the map tells you how to get there, how long it takes, where to park. This is useful. It also limits what you can ask, in a way that's easy not to notice.",
      "Isochrones — contour maps of reachability — offer a different framing. Instead of 'how do I get to X?', they answer 'what's within reach from here?' The result isn't a route; it's a shape. A twenty-minute walking radius from my apartment is not a circle. It's an irregular form: constrained by water on one side, extended by a flat street grid on another, cut short by a highway I can't easily cross.",
      "That shape is, in some sense, my actual neighborhood — not the administrative one drawn on a zoning map, but the one that exists in terms of what I can access. Seeing it rendered changes things. You notice the asymmetries. You reconsider where you put things. You think differently about what 'nearby' means.",
      "Emanant has no search box because a search box implies a destination. The point is to start from where you are and see what opens up.",
    ],
  },
  {
    kind: 'Note',
    date: '2026 — Jan',
    title: 'Notifications should have a half-life.',
  },
  {
    kind: 'Essay',
    date: '2025 — Nov',
    title: 'Self-hosting as a stance',
    dek: 'Running your own tools is less about control than about refusing to be ranked by someone else.',
    read: '5 min',
    body: [
      "The usual argument for self-hosting is control: your data, your infrastructure, no vendor lock-in. These are real benefits. They're not why I do it.",
      "When you run a tool on someone else's platform, you become a unit in their optimization target. Your usage patterns inform their product decisions. Your engagement shapes what they surface and what they bury. You're not just using the tool — you're being used by it.",
      "Self-hosting changes the optimization target. A tool running on my own infrastructure is optimized for one person: me. It surfaces what I tell it to surface. It runs when I tell it to run. It doesn't need to retain my attention because there's no business model that depends on attention.",
      "This is the part that feels like a stance. Not the technical setup — that's just cost. The stance is deciding to stop being an input to someone else's model, and to be the only person the tool is designed to serve.",
    ],
  },
  {
    kind: 'Idea',
    date: '2025 — Oct',
    title: 'What if every API shipped a /why endpoint?',
  },
];

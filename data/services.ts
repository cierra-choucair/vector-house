/**
 * The Fourth Axis practice structure, offer portfolio and message system.
 * Language follows the internal operating foundation ("Practice
 * Architecture & Engagement Blueprint", August 2026) and the founder's
 * website message direction. Engagement durations are internal starting
 * assumptions and are deliberately not published.
 */

/* ------------------------------------------------------------------ */
/* Message system                                                      */
/* ------------------------------------------------------------------ */

/** Point of view: why the practice exists. */
export const coreThesis =
  "Breakthroughs do not move through the world on technical merit alone. They move when the technology is legible, the market understands its relevance, stakeholders share a credible meaning and the right people know what to do next.";

/** The ownable line that gives the name its meaning. */
export const fourthAxisThesis =
  "The fourth axis is movement — the dimension that turns possibility into progress.";

/** Core promise. */
export const corePromise =
  "From complexity to direction. From direction to movement.";

/** The signature framework. */
export const fourDimensions: {
  number: string;
  name: string;
  question: string;
  text: string;
}[] = [
  {
    number: "01",
    name: "Technology",
    question: "What is possible?",
    text: "What is real, differentiated and technically possible now, and what evidence stands behind it.",
  },
  {
    number: "02",
    name: "Market",
    question: "Where does it create value?",
    text: "Where value can be created, for whom and under what conditions.",
  },
  {
    number: "03",
    name: "Meaning",
    question: "How is it understood and trusted?",
    text: "How the idea is framed, understood and trusted by the audiences that matter.",
  },
  {
    number: "04",
    name: "Movement",
    question: "How does it move?",
    text: "How people, decisions, relationships and resources are activated.",
  },
];

/* ------------------------------------------------------------------ */
/* Practice architecture                                               */
/* ------------------------------------------------------------------ */

export type Practice = {
  id: string;
  number: string;
  name: string;
  /** The client outcome the practice exists to produce. */
  outcome: string;
  /** Boundary cue: the question this practice answers. */
  cue: string;
  summary: string;
  items: string[];
};

/**
 * Four practices, one through-line: clarify the position, build
 * authority, activate the ecosystem and provide ongoing judgment.
 */
export const fourPractices: Practice[] = [
  {
    id: "positioning",
    number: "01",
    name: "Positioning & Commercialization Strategy",
    outcome: "A clear market position and a credible story for adoption.",
    cue: "How the technology should enter the world.",
    summary:
      "Where the work usually begins: deciding what the technology is for, who it is for and why it should be believed, then turning that into a story adoption can follow.",
    items: [
      "Market and category positioning",
      "Value proposition and audience strategy",
      "Use-case framing and differentiation",
      "Commercialization and adoption narrative",
      "Launch and partnership propositions",
    ],
  },
  {
    id: "communications",
    number: "02",
    name: "Strategic Communications & Authority",
    outcome: "A coherent voice, message system and authority platform.",
    cue: "What the market should understand and trust.",
    summary:
      "Communications built on the position rather than around it: one message system, an executive point of view worth following and content that earns authority instead of filling channels.",
    items: [
      "Corporate messaging and narrative systems",
      "Executive positioning and thought leadership",
      "Strategic content and editorial systems",
      "Narrative assets and flagship publications",
      "Launch communications",
    ],
  },
  {
    id: "ecosystem",
    number: "03",
    name: "Ecosystem Activation & Market Entry",
    outcome: "The right stakeholders aligned around a sequenced path to action.",
    cue: "Who must move, why and in what order.",
    summary:
      "Turning a broad ecosystem ambition into a small number of consequential relationships moving toward defined outcomes, from market entry to coalition building.",
    items: [
      "Stakeholder priorities and role mapping",
      "Partnership strategy and value propositions",
      "Institutional engagement",
      "Market-entry sequencing",
      "Convening and program architecture",
    ],
  },
  {
    id: "advisory",
    number: "04",
    name: "Executive Advisory & Special Projects",
    outcome: "Better high-stakes decisions and sustained strategic coherence.",
    cue: "Judgment applied across the other practices.",
    summary:
      "Founder-level counsel for the moments when multiple high-stakes decisions interact: decision sessions, synthesis briefs, fractional advisory and initiative architecture.",
    items: [
      "Decision sessions and synthesis briefs",
      "Founder and executive counsel",
      "Fractional strategic advisory",
      "Initiative architecture",
      "Special projects",
    ],
  },
];

/** The engagement ladder: how work deepens. */
export const engagementLadder: {
  stage: string;
  need: string;
  offers: string;
  logic: string;
}[] = [
  {
    stage: "Enter",
    need: "Resolve a specific decision or clarify the story.",
    offers:
      "Direction Session · Positioning & Narrative Sprint · Commercialization Story Sprint",
    logic: "Fixed scope and low friction, built around one real decision.",
  },
  {
    stage: "Build",
    need: "Create an authority system or activate a market opportunity.",
    offers:
      "Strategic Content & Executive Authority · Ecosystem Activation Sprint · Program & Track Architecture",
    logic: "A defined project or an initial program term.",
  },
  {
    stage: "Embed",
    need: "Maintain judgment across changing priorities.",
    offers: "Fractional Strategic Counsel",
    logic: "A recurring advisory relationship.",
  },
];

/* ------------------------------------------------------------------ */
/* Offers                                                              */
/* ------------------------------------------------------------------ */

export type Offer = {
  name: string;
  stage: "Enter" | "Build" | "Embed";
  /** The service promise. */
  promise: string;
  bestFor: string;
  /** Qualitative engagement shape; durations stay internal. */
  format: string;
  /** Primary offers appear on the homepage "Ways to begin" section. */
  primary?: boolean;
};

export const waysToBegin: Offer[] = [
  {
    name: "Direction Session",
    stage: "Enter",
    promise:
      "Turn one consequential, time-sensitive question into a clear decision frame and a practical next move.",
    bestFor:
      "A founder or executive stuck between options, preparing for a consequential conversation or needing an outside integrator to cut through complexity quickly.",
    format: "A focused working session followed by a concise decision memo.",
    primary: true,
  },
  {
    name: "Positioning & Narrative Sprint",
    stage: "Enter",
    promise:
      "Make a complex company, technology or initiative immediately legible, differentiated and credible to the audiences that matter.",
    bestFor:
      "Strong technology with inconsistent language, vague differentiation or different teams telling different versions of the company.",
    format:
      "A fixed-scope sprint with stakeholder interviews, synthesis and working reviews.",
    primary: true,
  },
  {
    name: "Commercialization Story Sprint",
    stage: "Enter",
    promise:
      "Translate a technical capability into a credible story about customer value, adoption and the path from possibility to use.",
    bestFor:
      "A compelling technology whose owners cannot yet say who should care first, what problem it solves or what adoption requires.",
    format:
      "A fixed-scope sprint with technical and commercial interviews and use-case synthesis.",
    primary: true,
  },
  {
    name: "Strategic Content & Executive Authority",
    stage: "Build",
    promise:
      "Turn expertise into a sustained authority position that advances the organization's strategic agenda.",
    bestFor:
      "A company or leader who must shape how a category is understood, build trust before a market matures or become the voice audiences seek out.",
    format:
      "A renewable program combining authority strategy, an editorial system and cornerstone assets.",
  },
  {
    name: "Ecosystem Activation Sprint",
    stage: "Build",
    promise:
      "Convert a broad ecosystem ambition into a prioritized set of stakeholders, propositions and relationship moves.",
    bestFor:
      "A market entry, pilot search or coalition, or a large contact universe that has not yet become coordinated progress.",
    format:
      "A fixed-scope sprint ending in a sequenced, ninety-day activation plan.",
  },
  {
    name: "Program & Track Architecture",
    stage: "Build",
    promise:
      "Design a conference track, roundtable, coalition or initiative with a distinctive thesis that produces movement beyond the event itself.",
    bestFor:
      "An organizer, institution or sponsor with a topic and a date but no sharp thesis, participant logic or plan for after the room empties.",
    format:
      "A project calibrated to the event, from thesis through post-event activation.",
  },
  {
    name: "Fractional Strategic Counsel",
    stage: "Embed",
    promise:
      "Sustained outside judgment across positioning, communications, commercialization and ecosystem priorities.",
    bestFor:
      "Leaders whose high-stakes decisions have started to interact and who need a trusted integrator to keep the whole coherent.",
    format:
      "A monthly advisory retainer with regular counsel and concise decision briefs.",
  },
];

/* ------------------------------------------------------------------ */
/* Method and fit                                                      */
/* ------------------------------------------------------------------ */

/** The common five-part method behind every engagement. */
export const method: { number: string; name: string; text: string }[] = [
  {
    number: "01",
    name: "Frame the decision",
    text: "Define the real business question, audience, stakes, constraints and deadline.",
  },
  {
    number: "02",
    name: "Gather the signal",
    text: "Review the minimum useful evidence through documents, interviews and available research.",
  },
  {
    number: "03",
    name: "Synthesize the direction",
    text: "Identify the position, narrative, choices and sequence the evidence supports.",
  },
  {
    number: "04",
    name: "Build the movement system",
    text: "Translate direction into messages, propositions, relationships, actions and decision points.",
  },
  {
    number: "05",
    name: "Transfer the judgment",
    text: "Test the work together, document the reasoning and make the next move executable.",
  },
];

/** Delivery principles: how the practice behaves. */
export const deliveryPrinciples: { title: string; text: string }[] = [
  {
    title: "Decision before deliverable",
    text: "Every engagement begins with the choice or movement the client needs, not a predetermined artifact.",
  },
  {
    title: "Senior attention",
    text: "Founder-led judgment is the product. It is not diluted through unnecessary layers.",
  },
  {
    title: "No theater",
    text: "No bloated decks, vague frameworks or activity that cannot be tied to a belief, decision or action.",
  },
  {
    title: "Evidence with proportion",
    text: "Enough research to support the decision. Formal intelligence and evidence products are built with Universum Labs.",
  },
  {
    title: "Transfer, not dependence",
    text: "Clients keep language, logic and systems they can use without Fourth Axis in every room.",
  },
  {
    title: "Movement is measurable",
    text: "Progress is defined in conversations, commitments, decisions and behaviors, not impressions.",
  },
];

/** High-value moments when the practice is the right call. */
export const buyingMoments: string[] = [
  "The company cannot explain what makes it matter without defaulting to technical description.",
  "A founder is preparing for a major fundraise, launch, partnership or institutional conversation.",
  "A technology has multiple possible use cases but no clear commercialization story.",
  "An organization needs to build authority in a crowded or immature category.",
  "A program, conference or coalition needs a distinctive thesis and an activation plan, not just an agenda.",
  "A leader has evidence and relationships but lacks a unifying decision frame or sequence of action.",
];

/** What the practice deliberately is not. */
export const notThePractice: string[] = [
  "A conventional marketing agency or an outsourced marketing department",
  "A PR firm or press office; earned-media execution is routed to trusted partners",
  "A market-research shop or intelligence platform; formal evidence products are built with Universum Labs",
  "An always-on content or social-media desk",
  "A consultancy that performs certainty instead of exercising judgment",
];

/* ------------------------------------------------------------------ */
/* Audiences                                                           */
/* ------------------------------------------------------------------ */

export const audiences: { title: string; text: string }[] = [
  {
    title: "Technical founders and CEOs",
    text: "Preparing for a funding, partnership, market-entry or category-defining moment.",
  },
  {
    title: "Quantum and emerging-technology companies",
    text: "Whose technical credibility has outpaced their market clarity.",
  },
  {
    title: "Investors, accelerators and venture builders",
    text: "That need portfolio positioning, founder support or ecosystem programming.",
  },
  {
    title: "Institutions and ecosystem leaders",
    text: "Economic-development organizations, events and consortia designing initiatives, convenings and market-shaping programs.",
  },
  {
    title: "Corporate innovation and strategy teams",
    text: "That need a coherent narrative and stakeholder path around a consequential technology initiative.",
  },
];

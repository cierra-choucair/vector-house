/**
 * The Fourth Axis practice structure, offer portfolio and message system.
 * Language follows the foundational positioning document (July 2026).
 */

export type Practice = {
  id: string;
  number: string;
  depthWord: string;
  name: string;
  role: string;
  summary: string;
  items: string[];
};

/** The four practices: entry point → bridge → depth → partnership. */
export const fourPractices: Practice[] = [
  {
    id: "communications",
    number: "01",
    depthWord: "Communicate",
    name: "Communications & Marketing",
    role: "The doorway",
    summary:
      "Strategy-led communications that create clarity, credibility and consistent market presence. A company cannot write a credible message until it has decided what it believes, so this is where strategy usually begins.",
    items: [
      "Messaging systems and corporate narrative",
      "Strategic content and editorial planning",
      "Thought-leadership platforms, executive bylines and signature ideas",
      "White papers, reports, articles, explainers and flagship publications",
      "Launch and campaign communications",
      "Founder and executive positioning",
      "Website and proposal narratives",
      "Social and channel strategy",
      "Partner, event and program communications",
      "Content systems that connect objectives to a repeatable publishing rhythm",
    ],
  },
  {
    id: "positioning",
    number: "02",
    depthWord: "Position",
    name: "Strategic Positioning",
    role: "The bridge",
    summary:
      "Decide where the company belongs and which ideas it should own. Positioning turns scattered activity into a defensible place in a market, category, ecosystem or institutional agenda.",
    items: [
      "Category and market positioning",
      "Value proposition and audience architecture",
      "Commercialization and adoption narrative",
      "Use-case and evidence framing",
      "Opportunity prioritization",
      "Stakeholder and partnership strategy",
      "Executive decision sprints",
      "Strategic planning around launches, milestones, funding and expansion",
    ],
  },
  {
    id: "intelligence",
    number: "03",
    depthWord: "Understand",
    name: "Intelligence & Ecosystems",
    role: "The depth",
    summary:
      "Replace assumptions with evidence and expose opportunity. Research is never an end in itself here; every briefing is connected to a decision someone has to make.",
    items: [
      "Market, competitor and technology landscape research",
      "Ecosystem and stakeholder mapping",
      "Market-entry and jurisdiction briefings",
      "Institutional, policy and funding signal analysis",
      "Partnership and influence mapping",
      "Evidence synthesis and strategic briefings",
      "Readiness, application and opportunity analysis",
      "Custom intelligence programs for companies, investors, events and institutions",
    ],
  },
  {
    id: "advisory",
    number: "04",
    depthWord: "Move",
    name: "Advisory, Convening & Special Projects",
    role: "The partnership",
    summary:
      "Align decisions, relationships, communications and execution. For a small number of organizations, Fourth Axis works as an embedded strategic partner rather than a vendor.",
    items: [
      "Fractional strategic advisory",
      "Founder and executive counsel",
      "Event, conference-track and program strategy",
      "Executive workshops and private briefings",
      "Cross-sector roundtables and ecosystem convening",
      "Special initiatives connecting communications, research, partnerships and execution",
      "Longer-term strategy and intelligence partnerships",
    ],
  },
];

/** The engagement ladder: every layer useful alone, together the Fourth Axis. */
export const engagementDepths: {
  number: string;
  name: string;
  entry: string;
  value: string;
  next: string;
}[] = [
  {
    number: "1",
    name: "Communicate",
    entry: "Messaging, content, thought leadership, campaigns and executive voice",
    value: "Create clarity, credibility and consistent market presence",
    next: "Reveal the strategic questions underneath the communications",
  },
  {
    number: "2",
    name: "Position",
    entry: "Narrative, category, value proposition and commercialization story",
    value: "Decide where the company belongs and which ideas it should own",
    next: "Identify missing evidence, audiences, partnerships and market choices",
  },
  {
    number: "3",
    name: "Understand",
    entry: "Market, competitor, ecosystem and stakeholder intelligence",
    value: "Replace assumptions with evidence and expose opportunity",
    next: "Translate intelligence into priorities and coordinated action",
  },
  {
    number: "4",
    name: "Move",
    entry: "Embedded advisory, programs, market entry, convening and special projects",
    value: "Align decisions, relationships, communications and execution",
    next: "Become an ongoing strategic partner",
  },
];

export type Offer = {
  name: string;
  summary: string;
  bestFor: string;
  /** Primary offers appear on the homepage "Ways to begin" section. */
  primary?: boolean;
};

/** The launch offer portfolio: clear ways to begin. */
export const waysToBegin: Offer[] = [
  {
    name: "Direction Session",
    summary:
      "A focused executive session for one urgent question, followed by a concise decision memo with priorities and next moves.",
    bestFor: "Founders, executives and teams with a defined decision or narrative problem.",
    primary: true,
  },
  {
    name: "Narrative & Positioning Sprint",
    summary:
      "Research, interviews and synthesis that produce a core narrative, message architecture, audience map and strategic recommendations.",
    bestFor:
      "Companies preparing for launch, fundraising, market entry or a new phase of visibility.",
    primary: true,
  },
  {
    name: "Strategic Content System",
    summary:
      "A research-led editorial strategy connecting business goals, signature themes, executive voices, formats, channels and a practical publishing roadmap.",
    bestFor: "Organizations producing content without a coherent position or repeatable system.",
    primary: true,
  },
  {
    name: "Market & Ecosystem Intelligence Sprint",
    summary:
      "A decision-oriented map of the market, stakeholders, competitors, institutions, opportunities and entry conditions around a defined question.",
    bestFor: "Companies, investors and institutions entering a field or geography.",
    primary: true,
  },
  {
    name: "Founder Authority Program",
    summary:
      "A sustained program for executive positioning, signature ideas, bylines, speaking narratives and high-substance visibility.",
    bestFor: "Technical leaders whose authority should become a company asset.",
  },
  {
    name: "Program or Track Architecture",
    summary:
      "Thesis, program structure, speaker and stakeholder logic, communications plan and extension strategy for an event or initiative.",
    bestFor: "Conferences, institutions and ecosystem programs.",
  },
  {
    name: "Fractional Fourth Axis",
    summary:
      "Ongoing strategic counsel combining communications, positioning, intelligence and executive decision support.",
    bestFor:
      "A small number of ambitious organizations needing embedded senior thinking without a full-time hire.",
  },
];

/** The signature methodology. */
export const fourDimensions: {
  number: string;
  name: string;
  question: string;
  text: string;
}[] = [
  {
    number: "01",
    name: "Technology",
    question: "What is true?",
    text: "What is technically possible now, what evidence exists, and which constraints, readiness conditions and dependencies must remain visible.",
  },
  {
    number: "02",
    name: "Market",
    question: "Where does the work belong?",
    text: "Which problem, buyer, category, use case, alternative and competitive context give the work its meaning.",
  },
  {
    number: "03",
    name: "Meaning",
    question: "Why does it matter, and to whom?",
    text: "The narrative that creates accurate understanding, credibility and conviction, in language each audience can carry into its own rooms.",
  },
  {
    number: "04",
    name: "Movement",
    question: "What must happen next?",
    text: "The decisions, communications, relationships, programs and sequences that turn understanding into action.",
  },
];

export const fourthAxisThesis =
  "Movement is the missing dimension. A true idea, a defined market and a compelling meaning still do not produce progress unless the right people can decide, coordinate and act.";

export const coreThesis =
  "Breakthroughs do not move through the world on technical merit alone. They move when technology, market, meaning and movement are aligned.";

/** Who the practice is for. */
export const audiences: { title: string; text: string }[] = [
  {
    title: "Founders and CEOs",
    text: "Deep-tech leaders with strong technology but an unclear category, an inconsistent story or too many audiences to address at once.",
  },
  {
    title: "Emerging-technology companies",
    text: "Startups and scaleups preparing for a launch, fundraising cycle, partnership push, market entry or a new phase of visibility.",
  },
  {
    title: "Investors, accelerators and innovation hubs",
    text: "Organizations that need portfolio narratives, market intelligence, founder support and a credible bridge between technical and commercial audiences.",
  },
  {
    title: "Institutions and ecosystem leaders",
    text: "Governments, industry bodies, research organizations, events and consortia designing programs and strategic initiatives around frontier technology.",
  },
];

/** The problems clients recognize, in their own words. */
export const recognitionProblems: string[] = [
  "Our technology is strong, but people still do not understand what we do.",
  "Our message changes depending on who is speaking.",
  "We are producing content, but it does not add up to a position.",
  "We need to communicate progress without exaggerating readiness.",
  "We do not know which story, market, use case or partnership to prioritize.",
  "We need intelligence about an ecosystem before we enter it.",
];

/** What "marketing" means here: claimed plainly, bounded honestly. */
export const marketingScope = {
  owned: [
    "Narrative, messaging and content marketing",
    "Executive and founder visibility",
    "Campaign, launch and channel strategy",
    "Strategic web and proposal copy",
    "Research-led market positioning",
  ],
  partnerLed: [
    "Traditional media relations and press-office execution",
    "Paid media buying and performance campaign operations",
    "High-volume lead-generation operations",
    "Web development and full visual-production teams",
    "Commodity social posting without a strategic mandate",
  ],
};

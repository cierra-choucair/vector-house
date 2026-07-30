/**
 * Selected work: proof stories drawn from the founder's public body of
 * work, as organized in the foundational positioning document.
 *
 * These are presented as capability evidence, not client case studies.
 * Each story names the capability it makes visible. Roles are described
 * precisely and no outcomes are claimed beyond the source document.
 *
 * [VERIFIED CONTENT REQUIRED] — before enabling `featureFlags.showProofLinks`,
 * gather public links, artifacts and any partner permissions per story.
 * HKA client work and partner-owned programs must not be added without
 * explicit permission and clear attribution (see foundational document,
 * "Proof" and "Operational guardrails").
 */

export type ProofStory = {
  slug: string;
  title: string;
  role: string;
  capability: string;
  /** The case angle: what this story makes visible. */
  angle: string;
  description: string;
  /** Which practice this story evidences most directly. */
  practice: string;
  /** Optional public link, shown only when featureFlags.showProofLinks is true. */
  href?: string;
  featured?: boolean;
};

export const proofStories: ProofStory[] = [
  {
    slug: "the-daily-qubit",
    title: "The Daily Qubit",
    role: "Author",
    capability: "Technical interpretation & editorial judgment",
    angle:
      "How disciplined synthesis turned a high volume of technical developments into an intelligible industry signal.",
    description:
      "A sustained editorial practice covering the quantum industry: reading research, funding, policy and company activity daily, deciding what mattered and translating it without inflating it. The discipline behind it is the same discipline Fourth Axis brings to client narratives and intelligence: research rigor, technical accuracy and signal detection across a fast-moving field.",
    practice: "Communications & Marketing",
    featured: true,
  },
  {
    slug: "quantum-world-tour",
    title: "Quantum World Tour",
    role: "Curator & moderator",
    capability: "Global ecosystem fluency & convening",
    angle:
      "How global ecosystem intelligence, interviewing and program design make national quantum development legible across audiences.",
    description:
      "International programming built around national quantum ecosystems: executive interviews, institutional dialogue and cross-cultural convening that helped technical, government and commercial audiences understand how the field is actually developing in different regions. Evidence of the ecosystem fluency behind Fourth Axis market-entry and convening work.",
    practice: "Advisory, Convening & Special Projects",
    featured: true,
  },
  {
    slug: "universum-labs",
    title: "Universum Labs",
    role: "Founder",
    capability: "Scientific intelligence & systems thinking",
    angle:
      "How a knowledge-graph and scientific-intelligence thesis translates complex evidence into decision infrastructure.",
    description:
      "A product and research venture developing scientific-intelligence infrastructure: treating evidence, relationships and readiness as a system that can be mapped and queried rather than a pile of documents. The systems-level approach to evidence is the foundation of the Intelligence & Ecosystems practice.",
    practice: "Intelligence & Ecosystems",
    featured: true,
  },
  {
    slug: "qpli-and-qualia",
    title: "QPLI & QUALIA",
    role: "Initiative designer",
    capability: "Coalition building & program design",
    angle:
      "How initiative design, mentorship, education and partnerships can create connective tissue around a technical ecosystem.",
    description:
      "Collaborative initiatives connecting institutions, experts and emerging talent across the quantum community. Designing structures that turn shared intent into working programs is the same craft Fourth Axis applies to stakeholder strategy and ecosystem development.",
    practice: "Advisory, Convening & Special Projects",
  },
  {
    slug: "uae-ecosystem-work",
    title: "UAE ecosystem research",
    role: "Field researcher",
    capability: "Institutional dialogue & narrative synthesis",
    angle:
      "How field research, institutional dialogue and narrative synthesis can frame the conditions that help frontier technology develop.",
    description:
      "On-the-ground work in an emerging technology ecosystem: meeting institutions where they are, understanding how decisions and priorities actually form, and synthesizing what was learned into a narrative others could act on. The template for Fourth Axis jurisdiction briefings and market-entry intelligence.",
    practice: "Intelligence & Ecosystems",
  },
  {
    slug: "quantum-track-strategy",
    title: "Event & quantum-track strategy",
    role: "Program architect",
    capability: "Intellectual architecture for events",
    angle:
      "How a conference track can become a differentiated, credible program with value before, during and beyond the event.",
    description:
      "Designing conference programming as an argument rather than a schedule: a thesis, a stakeholder logic, a sequence of conversations that build on each other, and a plan for what the program makes possible afterward. The basis of the Program or Track Architecture offer.",
    practice: "Advisory, Convening & Special Projects",
  },
];

export function getFeaturedProofStories(): ProofStory[] {
  return proofStories.filter((story) => story.featured);
}

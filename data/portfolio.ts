/**
 * The founder's expanded portfolio: the full body of work behind Fourth
 * Axis, organized by domain. Linked from the About page and summarized in
 * the homepage credibility band.
 *
 * Every entry stays within what the foundational positioning document and
 * its cited public sources support: precise roles, no invented outcomes,
 * no client detail. HKA client work, Android Dreams editorial work and
 * partner-owned programs are described only in terms of Cierra's own role.
 *
 * [VERIFIED CONTENT REQUIRED] — before enabling featureFlags.showProofLinks,
 * gather public links and any partner permissions per entry.
 */

export type PortfolioEntry = {
  name: string;
  role: string;
  summary: string;
  demonstrates: string;
  boundary?: string;
  /** Optional public link, shown only when featureFlags.showProofLinks is true. */
  href?: string;
};

export type PortfolioGroup = {
  id: string;
  title: string;
  intro?: string;
  entries: PortfolioEntry[];
};

export const portfolioGroups: PortfolioGroup[] = [
  {
    id: "journalism",
    title: "Journalism & analysis",
    intro:
      "Cierra's route into quantum ran through physics and engineering study and data analysis before journalism, which is why the editorial work reads like analysis rather than coverage.",
    entries: [
      {
        name: "The Daily Qubit · The Quantum Insider",
        role: "Author",
        summary:
          "A sustained editorial practice covering the quantum industry: reading research, funding, policy and company activity daily, deciding what mattered and translating it without inflating it.",
        demonstrates:
          "Research discipline, technical translation, editorial judgment and signal detection across a fast-moving field.",
      },
    ],
  },
  {
    id: "ventures",
    title: "Ventures",
    entries: [
      {
        name: "Universum Labs",
        role: "Founder",
        summary:
          "A product and research company developing scientific-intelligence infrastructure and decision tools: a knowledge-graph thesis that treats evidence, relationships and readiness as a system that can be mapped and queried.",
        demonstrates:
          "A systems-level approach to evidence, opportunity analysis and scientific intelligence.",
        boundary:
          "Independent of Fourth Axis; collaborates where a client needs custom research or intelligence technology.",
      },
      {
        name: "Android Dreams & QFrontline",
        role: "Founder & editor",
        summary:
          "An independent public-interest media and community platform, with QFrontline alongside it, exploring frontier technology and culture and building new containers for difficult ideas.",
        demonstrates:
          "Independent editorial vision, audience building and format invention.",
        boundary:
          "Editorial independence is protected; coverage is never part of paid consulting.",
      },
    ],
  },
  {
    id: "programming",
    title: "Global programming & convening",
    intro:
      "Work across international technology communities, with documented programming and profiles through organizations including ITU's AI for Good and communities such as QED-C.",
    entries: [
      {
        name: "Quantum World Tour",
        role: "Host",
        summary:
          "International programming built around national quantum ecosystems: executive interviews, institutional dialogue and cross-cultural convening, including moderating national ecosystem discussions on ITU AI for Good stages.",
        demonstrates:
          "Global ecosystem fluency, executive interviewing, institutional trust and program curation.",
      },
      {
        name: "ITU AI for Good",
        role: "Speaker & program contributor",
        summary:
          "Profiled by ITU's AI for Good as a founder, science communicator and global speaker, with documented work spanning quantum, AI and scientific discovery.",
        demonstrates:
          "Institutional credibility and the ability to guide conversations among technical, government, academic and commercial stakeholders.",
      },
      {
        name: "Event & quantum-track strategy",
        role: "Program architect",
        summary:
          "Designing conference programming as an argument rather than a schedule: a thesis, a stakeholder logic, a sequence of conversations that build on each other, and a plan for what the program makes possible afterward.",
        demonstrates:
          "Intellectual architecture for events, with value before, during and beyond the room.",
      },
    ],
  },
  {
    id: "initiatives",
    title: "Initiatives & coalitions",
    entries: [
      {
        name: "QPLI & QUALIA",
        role: "Initiative designer",
        summary:
          "Collaborative initiatives connecting institutions, experts and emerging talent across the quantum community, spanning mentorship, education strategy and coalition design.",
        demonstrates:
          "The design of connective tissue around a technical ecosystem: structures that turn shared intent into working programs.",
        boundary:
          "Coalition and partner-led programs; shared ownership and governance are respected.",
      },
    ],
  },
  {
    id: "content-leadership",
    title: "Strategic content leadership",
    entries: [
      {
        name: "HKA · Strategic Content Division",
        role: "Division lead (appointed July 2026)",
        summary:
          "Appointed to lead HKA's new Strategic Content Division, cited for the combination of journalism, data analysis, strategic communications and knowledge of the global quantum ecosystem.",
        demonstrates:
          "Turning technical expertise into content systems designed for market trust rather than isolated publication.",
        boundary:
          "Client work under HKA is confidential and is not presented as Fourth Axis casework.",
      },
    ],
  },
  {
    id: "field-research",
    title: "Field research",
    entries: [
      {
        name: "UAE ecosystem research",
        role: "Field researcher",
        summary:
          "On-the-ground work in an emerging technology ecosystem: meeting institutions where they are, understanding how decisions and priorities form, and synthesizing what was learned into a narrative others could act on.",
        demonstrates:
          "Institutional dialogue and narrative synthesis — the template for jurisdiction briefings and market-entry intelligence.",
      },
    ],
  },
  {
    id: "recognition",
    title: "Recognition",
    entries: [
      {
        name: "Quantum 100",
        role: "Selected honoree",
        summary:
          "Selected for the International Year of Quantum's Quantum 100, documenting work across journalism, strategic content, global quantum programming and scientific access.",
        demonstrates: "Field-level recognition from the quantum community itself.",
      },
    ],
  },
];

/**
 * Compact credibility highlights for the homepage band.
 * Each maps to a fuller entry above.
 */
export const publicRecordHighlights: { label: string; detail: string }[] = [
  { label: "Quantum 100", detail: "International Year of Quantum" },
  { label: "Strategic Content Division Lead", detail: "HKA · 2026" },
  { label: "Author, The Daily Qubit", detail: "The Quantum Insider" },
  { label: "Founder", detail: "Universum Labs" },
  { label: "Host", detail: "Quantum World Tour" },
  { label: "Profiled international quantum speaker", detail: "Global stages" },
];

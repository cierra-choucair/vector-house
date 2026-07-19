import type { Article, ArticleCategory } from "@/types";

/**
 * Insights articles.
 *
 * Local mock data structured for later CMS migration: every article is a
 * flat record with a block-based body. All pieces are original editorial
 * written for Vector House and attributed to the founder. No client names,
 * statistics or external credits appear anywhere in this file.
 */

export const articleCategories: ArticleCategory[] = [
  "Strategic Intelligence",
  "Frontier Markets",
  "Founder Strategy",
  "Quantum",
  "Artificial Intelligence",
  "Science and Society",
  "Global Ecosystems",
];

export const articles: Article[] = [
  {
    slug: "frontier-technologies-require-category-creation",
    title: "Why frontier technologies require category creation",
    subtitle:
      "When no market definition exists yet, the companies that write one hold the advantage.",
    excerpt:
      "Frontier technologies rarely fit an existing market category. The companies that define the terms of comparison, rather than compete inside someone else's, set the conditions everyone else must answer to.",
    category: "Frontier Markets",
    author: "Cierra Choucair",
    date: "2026-07-07",
    readingTime: "7 min read",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Most strategy advice assumes a market already exists. There is a category, a set of competitors, a familiar buying process and a customer who knows roughly what they are shopping for. The work, in that world, is differentiation: find the open position on a map someone else has already drawn.",
      },
      {
        type: "paragraph",
        text: "Frontier technology does not get that luxury. A company commercializing a new sensing modality, a new computing substrate or a new class of scientific instrument is usually selling into a market that has not yet agreed on what the product is, what it replaces, or how it should be judged. The map does not exist. Someone has to draw it.",
      },
      {
        type: "heading",
        text: "The cost of borrowing a category",
      },
      {
        type: "paragraph",
        text: "The instinctive move is to borrow the nearest available category. It feels safe. Investors recognize it, analysts can slot it into a landscape, journalists have a shorthand. But borrowed categories come with borrowed evaluation criteria, and those criteria are almost always the wrong ones for a genuinely new capability.",
      },
      {
        type: "paragraph",
        text: "A technology judged by the metrics of the category it is escaping will lose on those metrics for years. That is not a communications problem. It is a strategic error that shows up later as mispriced rounds, misaligned partnerships and sales conversations that stall on the wrong comparison.",
      },
      {
        type: "pullquote",
        text: "A technology judged by the metrics of the category it is escaping will lose on those metrics for years.",
      },
      {
        type: "heading",
        text: "What category creation actually involves",
      },
      {
        type: "paragraph",
        text: "Category creation is often dismissed as a marketing exercise, a naming project with a launch deck attached. In practice it is analytical work before it is creative work. It requires understanding the real structure of the problem the technology addresses, the full set of alternatives a buyer faces, and the language that lets a non-specialist evaluator reason about the choice correctly.",
      },
      {
        type: "list",
        items: [
          "Define the problem in terms the buyer already takes seriously, not in terms of the technology's internal logic.",
          "Choose the comparison set deliberately. What a technology is compared against determines how it is valued.",
          "Name the evaluation criteria before someone else does, and make sure they are criteria the technology can win.",
          "Give the ecosystem, from analysts to policymakers, language they can repeat accurately without you in the room.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this replaces technical excellence. It converts technical excellence into something a market can act on. The distinction matters because the default outcome for an uncategorized technology is not neutrality. It is misclassification, and misclassification is expensive.",
      },
      {
        type: "paragraph",
        text: "The companies that treat category definition as a first-order strategic problem, alongside product and capital, tend to find that everything downstream gets easier: fundraising narratives cohere, partnerships make sense to both sides, and the press coverage starts describing the company the way the company describes itself. That alignment is not luck. It is authorship.",
      },
    ],
  },
  {
    slug: "visibility-is-infrastructure",
    title: "Visibility is infrastructure in an emerging market",
    subtitle:
      "In fields where few can evaluate the technology directly, being legible is a commercial asset.",
    excerpt:
      "In mature markets, visibility is promotion. In emerging ones, it functions more like infrastructure: it shapes who finds you, who trusts you, who funds you and who builds alongside you.",
    category: "Founder Strategy",
    author: "Cierra Choucair",
    date: "2026-06-16",
    readingTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "There is a reflex among technical founders to treat visibility as an indulgence, something to get to after the real work. The reflex is understandable. Much of what passes for visibility in the technology industry is noise, and serious people are right to be wary of it.",
      },
      {
        type: "paragraph",
        text: "But the conclusion does not follow. In an emerging market, where the technology is hard to evaluate and the category is unsettled, visibility does structural work that nothing else can do. It determines whether the right investor hears of you before the wrong comparison hardens. It affects which candidates take the interview, which partners return the email, which journalists call you first for comment and which conference stage you are asked to fill.",
      },
      {
        type: "pullquote",
        text: "Visibility decides which conversations a company is even present for. Absence is also a position, just not one you chose.",
      },
      {
        type: "heading",
        text: "Why emerging fields amplify the effect",
      },
      {
        type: "paragraph",
        text: "In a mature market, buyers have procurement processes, analysts have coverage universes and the information environment is thick. An excellent but quiet company can still be found. Emerging fields are information-poor. The number of people who can independently assess a quantum device or a novel AI architecture is small, so nearly everyone else relies on proxies: who is cited, who is invited, who is quoted, who the credible people seem to take seriously.",
      },
      {
        type: "paragraph",
        text: "Those proxies are not irrational. They are how humans reason under uncertainty. Which means a company's public presence is not decoration around the technical work. It is part of the evidence the market uses, and it is one of the few parts the company fully controls.",
      },
      {
        type: "heading",
        text: "Building it like infrastructure",
      },
      {
        type: "paragraph",
        text: "Treating visibility as infrastructure changes how you invest in it. Infrastructure is built deliberately, maintained continuously and designed to compound. That points away from sporadic press pushes and toward a durable base: a clear position, a founder with a genuine point of view, a consistent editorial presence and relationships with the people who shape how the field is understood.",
      },
      {
        type: "paragraph",
        text: "It also imposes a standard. Infrastructure has to hold weight. Visibility built on inflated claims collapses at exactly the moment it is needed most, in diligence, in technical review, in a skeptical room. The goal is not to be loud. It is to be legible, credible and present in the conversations where your market is being decided.",
      },
    ],
  },
  {
    slug: "explaining-versus-positioning",
    title: "The difference between explaining a technology and positioning it",
    subtitle:
      "Explanation transfers understanding. Positioning changes decisions. Confusing the two costs companies years.",
    excerpt:
      "Deeply technical teams often communicate more and more precisely as traction stalls, believing the problem is comprehension. Usually the problem is position: the audience understands the technology but not why it should matter to them.",
    category: "Founder Strategy",
    author: "Cierra Choucair",
    date: "2026-05-26",
    readingTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "When a frontier-technology company struggles commercially, the internal diagnosis is almost always the same: people don't understand what we do. The response is more explanation. Longer decks, better diagrams, another whitepaper, a clearer analogy. And often the explanations genuinely improve while the commercial position does not move at all.",
      },
      {
        type: "paragraph",
        text: "That is because explanation and positioning answer different questions. Explanation answers: how does this work? Positioning answers: given everything else in the world competing for my capital, attention and trust, why does this matter to me, now? An audience can hold a perfect mental model of your technology and still have no idea why they should act on it.",
      },
      {
        type: "heading",
        text: "The tell",
      },
      {
        type: "paragraph",
        text: "You can hear the difference in how people describe a company back to you. An explained company gets described by its mechanism: they use entangled photons, they run models on-device, they engineer enzymes. A positioned company gets described by its significance: they are the reason this industry's cost curve is about to break, they are who you call when the incumbent approach hits its ceiling.",
      },
      {
        type: "pullquote",
        text: "An explained company is described by its mechanism. A positioned company is described by its significance.",
      },
      {
        type: "paragraph",
        text: "Mechanism descriptions are fragile. They invite the listener to evaluate the science, which most cannot do, so judgment gets deferred. Significance descriptions are actionable. They tell an investor what thesis this fits, a customer what problem this retires, a policymaker what capability this represents.",
      },
      {
        type: "heading",
        text: "Positioning is a strategic act, not a writing task",
      },
      {
        type: "paragraph",
        text: "The reason positioning cannot be delegated to a communications function alone is that it encodes real strategic choices. Choosing the comparison set, the buyer, the category and the claim of significance is choosing a commercial strategy. The words are downstream of decisions only the leadership team can make.",
      },
      {
        type: "paragraph",
        text: "The good news for technical founders is that positioning rewards exactly the rigor they already have. A strong position is falsifiable, evidence-backed and stable under hostile questioning. It is not spin. It is the shortest true statement of why the company matters, chosen with the same care as an experimental claim, and defended the same way.",
      },
    ],
  },
  {
    slug: "reading-a-quantum-roadmap-like-an-analyst",
    title: "How to read a quantum roadmap like an analyst",
    subtitle:
      "Corporate roadmaps are strategic documents, not schedules. Here is what they actually communicate.",
    excerpt:
      "Quantum computing roadmaps are treated as timelines and criticized as fictions. Both readings miss the point. A roadmap is a structured claim about strategy, and it rewards being read that way.",
    category: "Quantum",
    author: "Cierra Choucair",
    date: "2026-04-28",
    readingTime: "8 min read",
    body: [
      {
        type: "paragraph",
        text: "Every serious quantum hardware company publishes a roadmap, and every roadmap attracts the same two audiences: believers who read it as a schedule and skeptics who read it as fiction. Analysts should read it as neither. A public roadmap is a strategic document, and its most useful information is rarely the dates.",
      },
      {
        type: "heading",
        text: "What the axes tell you",
      },
      {
        type: "paragraph",
        text: "Start with what the company chose to put on the vertical axis. Qubit counts, logical qubits, error rates, algorithmic performance, application milestones: each choice is a claim about which metric the company believes it can win, and a bid to make that metric the industry's yardstick. When a company changes its axis between roadmap versions, that is among the strongest signals it emits, because it means the internal definition of progress has changed.",
      },
      {
        type: "paragraph",
        text: "Then look at the spacing. Roadmaps that show smooth, evenly spaced milestones are communicating confidence to non-specialist audiences. Roadmaps that show an explicit hard step, a discontinuity the company names and explains, are usually communicating with technical evaluators and signaling that the team understands where its real risk concentrates.",
      },
      {
        type: "pullquote",
        text: "The axis a company chooses for its roadmap is a bid to define the industry's yardstick.",
      },
      {
        type: "heading",
        text: "Reading across companies",
      },
      {
        type: "paragraph",
        text: "Roadmaps become most informative in aggregate. Because modalities differ so much, direct comparison of milestones is usually meaningless, but comparison of structure is not. Which companies anchor to error correction? Which anchor to commercial utility? Which have quietly stretched intervals between milestones, and which have pulled them in? The pattern across a field tells you where consensus is forming about the path to useful machines, and where a company is betting against that consensus.",
      },
      {
        type: "list",
        items: [
          "Treat axis changes as strategy changes, not marketing refreshes.",
          "Weight named technical risks above unexplained confidence.",
          "Compare structure across companies, not milestone dates.",
          "Watch what a roadmap stops mentioning. Deletions are signals.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this requires believing or disbelieving any particular date. It requires treating the roadmap as evidence about the company that wrote it. For investors, partners and governments trying to allocate attention across a field this technical, that reading is frequently more valuable than another attempt to forecast the arrival of fault tolerance.",
      },
    ],
  },
  {
    slug: "benchmarks-are-not-markets",
    title: "Benchmarks are not markets",
    subtitle:
      "Leaderboard position tells you less about an AI company's prospects than the industry wants to believe.",
    excerpt:
      "AI evaluation culture rewards what can be measured publicly. Commercial outcomes hinge on things benchmarks barely touch: distribution, trust, integration cost and the shape of the buyer's actual problem.",
    category: "Artificial Intelligence",
    author: "Cierra Choucair",
    date: "2026-03-31",
    readingTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "The AI industry has built an extraordinary apparatus for public measurement. Benchmarks, leaderboards and eval suites make capability differences visible in a way few technical fields have ever managed. It is a genuine achievement, and it produces a genuine distortion: the assumption that benchmark position and market position are the same thing.",
      },
      {
        type: "paragraph",
        text: "They are not, and the gap between them is where a great deal of capital goes to be disappointed. A benchmark answers a narrow question under controlled conditions. A market answers a messy one: will an organization with existing systems, existing vendors, regulatory exposure and limited attention rebuild part of its operation around this capability?",
      },
      {
        type: "heading",
        text: "What benchmarks cannot see",
      },
      {
        type: "list",
        items: [
          "Distribution: who already has a relationship with the buyer, and what it costs to displace them.",
          "Integration: the distance between a demo and a deployment inside real infrastructure with real failure modes.",
          "Trust: procurement, security review, liability and the human question of who gets blamed when the system errs.",
          "Problem shape: whether the measured capability maps onto the task the buyer is actually paid to solve.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this argues that capability is irrelevant. Below a threshold, nothing else matters. Above it, the marginal benchmark point buys less than the marginal unit of trust, distribution or workflow fit, and the crossover arrives earlier than most technical teams expect.",
      },
      {
        type: "pullquote",
        text: "Above the capability threshold, a marginal benchmark point buys less than a marginal unit of trust.",
      },
      {
        type: "heading",
        text: "The analyst's adjustment",
      },
      {
        type: "paragraph",
        text: "For anyone evaluating AI companies, the practical adjustment is to treat benchmark performance as one input in a fuller intelligence picture: the buyer's real alternatives, the integration burden, the durability of any capability lead and the company's access to the people who sign contracts. For AI founders, the adjustment is harder because it is cultural. The habits that win leaderboards, optimizing what is publicly measured, are not the habits that win markets. Knowing which game you are playing at which moment is itself a strategic capability.",
      },
    ],
  },
  {
    slug: "what-government-activity-tells-you",
    title: "What government activity tells you about an emerging market",
    subtitle:
      "In frontier technology, the state is not background. It is often the market's most informative actor.",
    excerpt:
      "National strategies, procurement programs and research funding are usually read as bureaucratic noise. In frontier fields they are leading indicators, and learning to read them is a competitive advantage.",
    category: "Global Ecosystems",
    author: "Cierra Choucair",
    date: "2026-03-10",
    readingTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "Commercial analysts are trained to watch companies: funding rounds, product launches, hiring, pricing. In frontier technology that lens misses half the picture, because in fields like quantum, advanced compute, biotech and space, governments are not regulators standing beside the market. They are funders, first customers, infrastructure builders and, increasingly, strategic competitors on behalf of their national ecosystems.",
      },
      {
        type: "heading",
        text: "The state as leading indicator",
      },
      {
        type: "paragraph",
        text: "Government activity is slow, public and documented, which makes it unfashionable to analyze and unusually reliable when you do. A national quantum strategy, a defense procurement solicitation, a new research center, an export-control adjustment: each is the visible output of a long internal assessment by people with access to information markets do not have. You are not reading policy. You are reading the conclusions of someone else's intelligence process.",
      },
      {
        type: "paragraph",
        text: "Procurement deserves particular attention. When a government agency moves from funding research to buying systems, it is making a falsifiable claim that the technology has crossed a usefulness threshold. That transition, from grant to contract, is one of the cleanest maturity signals an emerging field produces.",
      },
      {
        type: "pullquote",
        text: "A procurement program is a falsifiable claim that a technology has crossed the usefulness threshold.",
      },
      {
        type: "heading",
        text: "Reading across borders",
      },
      {
        type: "paragraph",
        text: "The signal strengthens when read internationally. Different governments assess the same technologies with different information, different risk tolerances and different industrial motives. Where their conclusions converge, confidence should rise. Where one ecosystem is quietly building capability the others ignore, there is either an error or an opportunity, and both are worth knowing about.",
      },
      {
        type: "paragraph",
        text: "For companies, this cuts in a second direction: government attention shapes your market whether or not the state is your customer. Export controls redraw addressable markets. National strategies steer talent and capital toward favored segments. Sovereign programs create competitors with patient funding. A market map of a frontier field that does not include state actors is not a conservative simplification. It is a map with the load-bearing walls missing.",
      },
    ],
  },
  {
    slug: "science-needs-narrators-not-cheerleaders",
    title: "Science needs narrators, not cheerleaders",
    subtitle:
      "Public trust in emerging technology is built by honest interpretation, not enthusiasm.",
    excerpt:
      "Every frontier field oscillates between hype and backlash. The stabilizing force is neither promotion nor debunking but narration: people who can interpret progress honestly while it is still ambiguous.",
    category: "Science and Society",
    author: "Cierra Choucair",
    date: "2026-02-17",
    readingTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Emerging fields tend to get two kinds of public voice. The cheerleader, for whom every result is a breakthrough and every startup a revolution. And the debunker, for whom the field is oversold by definition and every setback is vindication. The two feed each other, and together they produce the boom-and-backlash cycle that has damaged public trust in one technology after another.",
      },
      {
        type: "paragraph",
        text: "What fields actually need is a third role: the narrator. Narrators interpret. They can say that a result is real but narrow, that a company is impressive but unproven, that a field is progressing and slower than its press releases suggest. They hold complexity without surrendering clarity, and they are willing to be boring when the truth is boring.",
      },
      {
        type: "pullquote",
        text: "Trust is built by people willing to say that a result is real but narrow, and to be boring when the truth is boring.",
      },
      {
        type: "heading",
        text: "Why this is a market issue, not a media issue",
      },
      {
        type: "paragraph",
        text: "It is tempting to file this under science communication and move on. But the quality of a field's public interpretation shows up directly in its commercial conditions. Hype cycles misallocate capital toward the most confident claims rather than the most sound ones. Backlash cycles starve legitimate work indiscriminately. Talent decides whether a field looks serious. Policymakers legislate from whatever understanding is available to them.",
      },
      {
        type: "paragraph",
        text: "A field with strong narrators gets something precious: an information environment in which quality is legible. In such an environment, being good and being seen to be good converge, which is exactly the condition under which serious companies outcompete loud ones.",
      },
      {
        type: "heading",
        text: "The obligation on companies",
      },
      {
        type: "paragraph",
        text: "Companies are not bystanders to this. Every claim a company makes either strengthens or degrades the field's shared information environment. Overclaiming borrows credibility from the whole field and repays it with interest in the next backlash. The alternative is harder and better: make claims sized to your evidence, educate rather than dazzle, and treat the public's ability to understand your field as a commons your commercial future depends on. Because it does.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Accessors                                                           */
/* ------------------------------------------------------------------ */

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedArticle(): Article {
  return getAllArticles().find((a) => a.featured) ?? getAllArticles()[0];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  const sameCategory = getAllArticles().filter(
    (a) => a.slug !== slug && a.category === current.category,
  );
  const others = getAllArticles().filter(
    (a) => a.slug !== slug && a.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getRecentArticles(limit = 3): Article[] {
  return getAllArticles().slice(0, limit);
}

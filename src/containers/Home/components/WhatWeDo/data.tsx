export const whatWeDo = {
  section: {
    sectionTitle: 'What we do',
    subText: 'We focus on AI where it really matters: decisions, operations and core systems.',
    services: [
      {
        title: 'AI Strategy & Architecture',
        description:
          'From "we need AI somewhere" to a realistic roadmap, architecture and governance for your mission-critical processes.',
        cta: 'Learn More',
      },
      {
        title: 'AI for Decisions & Operations',
        description:
          'Role-specific copilots and AI-orchestrated workflows that support risk, finance, operations, customer service and more.',
        cta: 'Learn More',
      },
      {
        title: 'AI for Engineering & Modernization',
        description:
          'AI-augmented delivery that accelerates architecture, coding and refactoring for your core platforms.',
        cta: 'Learn More',
      },
    ],
  },
};

export const fullServices = {
  fullServicesPage: {
    title: 'Services',
    subtitle:
      'We design, build and operate AI solutions for business-critical operations — from strategy and architecture to copilots, automation and governance.',
    ctaPrimary: 'Book a discovery call',
    ctaSecondary: 'See example results',
    sections: [
      {
        id: 'ai-strategy-architecture',
        title: 'AI Strategy & Architecture for Business‑Critical Processes',
        oneLiner:
          'From AI "ideas" to a realistic roadmap, architecture and governance model your C‑level, IT and risk teams can all agree on.',
        bestFor:
          'Organizations that are past the "AI experimentation" stage and want a coherent plan for mission‑critical workflows.',
        problem:
          'Many organizations experiment with AI in pockets — pilots, PoCs, side projects — without a clear view of where AI truly matters, how it fits existing systems, or who owns the risk. We help you focus AI investments on business‑critical processes and design an architecture that can be safely operated at scale.',
        whatWeDeliver: [
          <div>
            A prioritized list of <b>3–5 high‑impact AI use cases</b> for your business‑critical operations
          </div>,
          'A target architecture: models, data, integrations and boundaries to your core systems',
          'A governance model: roles, responsibilities, policies and decision‑making processes',
          <div>
            A <b>12–24 month roadmap</b> with phases, dependencies and indicative budgets
          </div>,
        ],
        howWeMeasure: [
          'Clear alignment between C‑level, IT and risk on AI priorities and architecture',
          'Less "random" AI experimentation; more initiatives tied to the agreed roadmap',
          'Faster go/no‑go decisions for AI pilots and production rollouts',
        ],
      },
      {
        id: 'ai-copilots',
        title: 'AI Copilots for Critical Roles',
        oneLiner: 'Role‑specific AI assistants for people who make high‑stakes decisions every day.',
        bestFor:
          'Heads of risk, operations, sales, customer service and other leaders who need their teams to decide faster and with better use of existing knowledge.',
        whatWeDeliver: [
          'Design of role‑specific workflows: how the copilot helps in daily decisions',
          'Integration with your tools: email, chat, CRM, BI, ticketing, internal systems',
          'Explainable recommendations: summaries, options and flags with clear references',
          'Safety and boundaries: what the copilot can decide, suggest or only prepare',
        ],
        exampleKPIs: [
          <div>
            Time to prepare key decisions or responses <b>reduced by 20–40%</b>
          </div>,
          'Higher coverage of relevant documents/data in each decision',
          'Fewer escalations due to missing information or inconsistent decisions',
        ],
      },
      {
        id: 'ai-powered-process-automation',
        title: 'AI‑Powered Process Automation',
        oneLiner: 'End‑to‑end AI workflows for complex, high‑impact processes — with humans still in control.',
        typicalProcesses: [
          'KYC/AML and periodic customer reviews',
          'Incident and major incident management',
          'Complex deal / proposal creation',
          'Claims and exception handling',
        ],
        whatWeDeliver: [
          'A mapped process with clear AI vs human responsibilities',
          'An AI‑enabled workflow that collects data, drafts decisions and routes cases',
          'Integration with existing systems (CRM, ticketing, core platforms)',
          'Dashboards and alerts for performance, bottlenecks and risk',
        ],
        exampleKPIs: [
          <div>
            <b>20–40% reduction</b> in end‑to‑end cycle time for selected processes
          </div>,
          <div>
            <b>30–60% fewer</b> manual touches per case
          </div>,
          'Lower rework rate due to missing data or inconsistent decisions',
        ],
      },
      {
        id: 'document-knowledge-intelligence',
        title: 'Document & Knowledge Intelligence',
        oneLiner: 'Turn your contracts, policies and technical documentation into a trusted knowledge layer.',
        problem:
          'Critical knowledge is often buried in documents, shared drives and legacy systems. People spend hours searching, or simply guess. That doesn’t work when regulators, customers or partners expect clear answers.',
        whatWeDeliver: [
          'A unified knowledge layer across contracts, policies, procedures and technical docs',
          'Search and Q&A with answers backed by citations and document snippets',
          'Tools for comparing versions, spotting changes and detecting potential risks',
          'Optional alerts on changes in key documents (e.g. policies, SLAs, regulations)',
        ],
        exampleKPIs: [
          <div>
            <b>50–70% less time spent</b> searching and reading documents for recurring questions
          </div>,
          'Higher consistency of answers across teams and regions',
          'Fewer missed clauses or outdated references in critical decisions',
        ],
      },
      {
        id: 'ai-augmented-software-delivery',
        title: 'AI‑Augmented Software Delivery',
        oneLiner:
          'Faster architecture, code, testing and modernization for your core systems — without lowering your standards.',
        bestFor:
          'CTOs and Heads of Engineering who need to deliver faster while managing technical debt and risk in complex platforms.',
        whatWeDeliver: [
          'Architecture support: from requirements to design options and trade‑off analysis',
          'AI‑assisted implementation: code, tests and migrations aligned with your stack and guidelines',
          'Safe refactoring: modernization of existing services with tests and impact analysis',
          'Integration with your existing CI/CD and review processes',
        ],
        exampleKPIs: [
          <div>
            <b>30–50% faster</b> delivery for selected features and services
          </div>,
          'Reduced defect rates in early production releases',
          'Lower time spent on repetitive tasks such as boilerplate, tests and migrations',
        ],
      },
      {
        id: 'ai-risk-evaluation-governance',
        title: 'AI Risk, Evaluation & Governance',
        oneLiner: 'Bring all your AI initiatives under one governance and monitoring umbrella.',
        problem:
          'As AI projects multiply, it becomes difficult to answer simple questions: How many AI systems do we have? Who owns them? How do we know they are working as intended — and safely?',
        whatWeDeliver: [
          'An inventory of AI systems and use cases across the organization',
          'A risk classification for each system and corresponding controls',
          'A set of metrics and dashboards: quality, cost, usage, incidents and drift',
          'Processes for review, approval and rollback of AI changes',
          'Documentation you can show to risk committees, auditors and boards',
        ],
        exampleKPIs: [
          <div>
            <b>100%</b> of business‑critical AI use cases with named owners, KPIs and logs
          </div>,
          'Fewer unapproved or undocumented AI systems in production',
          'Faster approval cycles for new AI initiatives due to clearer documentation',
        ],
      },
    ],
  },
};

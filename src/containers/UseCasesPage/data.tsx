export const industries = [
  {
    title: 'Corporate Project Management',
    subtitle: 'Explainable Decision Intelligence for Complex Project Portfolios',
    sectionId: 'corporate-pm',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          fill='currentColor'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            Enterprises manage many interconnected projects with dependencies across cost, schedule, resources, and
            strategy.
          </div>
        </>
      ),
      options: [
        'Project data is scattered across tools and teams.',
        'Planning and forecasting are often reactive.',
        'Risks and dependencies lack executive-level visibility.',
        'Decisions lack traceability.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional project management and BI tools have limits:</>,
      options: [
        'They show past performance, not future risks.',
        'Data stays siloed and context-less across platforms.',
        'Generic AI can correlate data but cannot reason about causes.',
        'Leadership decisions remain hard to justify and audit.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar introduces a <strong>controlled decision intelligence layer</strong> that unifies project, financial,
            and resource data into a single reasoning framework.
          </div>
        </>
      ),
      options: [
        'Detects emerging risks early.',
        'Generates logic-based forecasts for budgets and schedules.',
        'Optimizes resource allocation across the portfolio.',
        'Provides traceable, explainable decision support.',
      ],
    },
    kpis: {
      options: [
        '40–60% more accurate early risk detection.',
        '25–40% reduction in budget deviations.',
        '30–50% improvement in resource utilization.',
        '60–70% faster reporting and portfolio visibility',
        '45–65% increase in traceable, explainable decisions.',
      ],
    },
  },
  {
    title: 'Healthcare & Life Sciences',
    subtitle: 'Governed AI for Clinical and Operational Decisions',
    sectionId: 'healthcare',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          fill='currentColor'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            Healthcare organizations operate in highly regulated environments with complex clinical and operational
            workflows.
          </div>
        </>
      ),
      options: [
        'Data is fragmented across systems and departments.',
        'Decisions must align with policies, protocols, and regulations.',
        'Manual processes increase administrative burden.',
        'AI adoption requires strict control and transparency.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional healthcare systems and AI tools fall short:</>,
      options: [
        'They focus on automation, not decision governance.',
        'AI outputs lack explainability and traceability.',
        'Compliance checks are manual and time-consuming.',
        'Clinical and operational decisions remain siloed.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems acts as a <strong>controlled decision intelligence layer</strong> for healthcare workflows.
          </div>
        </>
      ),
      options: [
        'Structures clinical, operational, and policy data.',
        'Embeds AI into governed decision processes.',
        'Supports approval and escalation by design.',
        'Ensures full traceability and compliance readiness.',
      ],
    },
    kpis: {
      options: [
        'Reduced administrative burden across workflows',
        'Faster access to validated clinical information',
        'Improved consistency in clinical and operational decisions',
        'Higher trust in AI-supported healthcare processes',
      ],
    },
  },
  {
    title: 'Industrial Operations & Supply Chain',
    subtitle: 'Explainable AI for End-to-End Operational Decisions',
    sectionId: 'industrial',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          fill='currentColor'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>Industrial and supply chain operations span production and logistics.</div>
        </>
      ),
      options: [
        'Data is fragmented across plants, warehouses, and partners.',
        'Disruptions propagate quickly across the entire operation.',
        'Decisions must balance speed, cost, and reliability.',
        'Scaling AI requires governance and consistency.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional industrial and supply chain systems fall short:</>,
      options: [
        'They monitor operations but do not reason about decisions.',
        'AI outputs lack transparency and control.',
        'Dependencies across production and logistics are hard to manage.',
        'Decision logic does not scale across sites and regions.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems adds a <strong>controlled decision intelligence layer</strong> to industrial and supply chain
            operations.
          </div>
        </>
      ),
      options: [
        'Connects production, logistics, and operational data.',
        'Supports AI-assisted decisions with clear, explainable logic.',
        'Embeds governance into automated workflows.',
        'Enables consistent decisions across end-to-end operations.',
      ],
    },
    kpis: {
      options: [
        'Faster and more resilient operational decisions',
        'Improved coordination across production and logistics',
        'Reduced disruption impact and manual intervention',
        'Higher confidence in AI-driven industrial operations',
      ],
    },
  },
  {
    title: 'Regulated Financial & Compliance Environments',
    subtitle: 'Explainable AI for Governed Financial Decisions',
    sectionId: 'fintech',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          fill='currentColor'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>Financial institutions operate under strict regulatory and compliance requirements.</div>
        </>
      ),
      options: [
        'Decision processes are complex and highly scrutinized.',
        'Data is spread across systems and teams.',
        'Manual controls slow down operations.',
        'Every decision must be auditable and defensible.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional financial systems and analytics tools fall short:</>,
      options: [
        'They automate workflows but not decision logic.',
        'AI outputs lack transparency and explainability.',
        'Compliance checks are reactive and manual.',
        'Traceability across decisions is difficult to maintain.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems provides a <strong>controlled decision intelligence layer</strong> for regulated financial
            workflows.
          </div>
        </>
      ),
      options: [
        'Structures financial, regulatory, and policy data.',
        'Supports AI-assisted decisions with clear reasoning.',
        'Embeds approval and escalation rules by design.',
        'Ensures full auditability and compliance traceability.',
      ],
    },
    kpis: {
      options: [
        'Faster, compliant financial decision cycles',
        'Reduced manual compliance workload',
        'Higher transparency and audit readiness',
        'Greater confidence in AI-supported financial decisions',
      ],
    },
  },
  {
    title: 'Telecommunications & Cloud Services',
    subtitle: 'Explainable AI for Network and Service Decisions',
    sectionId: 'telecom',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 2V22' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M5 8C7 6 9.5 5 12 5C14.5 5 17 6 19 8' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path
          d='M7 12C8.5 10.5 10.2 10 12 10C13.8 10 15.5 10.5 17 12'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>Telecom and cloud providers operate large-scale, dynamic infrastructures.</div>
        </>
      ),
      options: [
        'Data comes from many network, service, and customer systems.',
        'Decisions must be made quickly and at scale.',
        'Service reliability and performance are business-critical.',
        'Governance across automated decisions is hard to maintain.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional network management and analytics tools fall short:</>,
      options: [
        'They monitor systems but do not reason about decisions.',
        'AI outputs lack transparency and control.',
        'Root causes are hard to identify across complex environments.',
        'Scaling decision logic across services and regions is difficult.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems adds a <strong>controlled decision intelligence layer</strong> to telecom and cloud
            operations.
          </div>
        </>
      ),
      options: [
        'Connects network, service, and operational data.',
        'Supports AI-assisted decisions with clear, explainable logic.',
        'Embeds governance into automated workflows.',
        'Enables consistent decision-making across platforms.',
      ],
    },
    kpis: {
      options: [
        'Faster and more reliable operational decisions',
        'Improved service stability and performance consistency',
        'Reduced operational complexity and manual intervention',
        'Higher confidence in AI-driven network and service management',
      ],
    },
  },
  {
    title: 'SaaS & Enterprise Software Platforms',
    subtitle: 'Explainable AI for Product and Platform Decisions',
    sectionId: 'saas',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7 18H17C19.2 18 21 16.2 21 14C21 11.8 19.2 10 17 10C16.7 10 16.3 10 16 10.1C15.3 7.7 13.3 6 11 6C8.2 6 6 8.2 6 11C6 11.3 6 11.7 6.1 12C4.3 12.3 3 13.8 3 15.5C3 17.4 4.6 18.9 6.5 19'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>SaaS and enterprise platforms operate at scale across complex product and delivery environments.</div>
        </>
      ),
      options: [
        'Data is distributed across product, engineering, and operations teams.',
        'Decisions must balance speed, reliability, and risk.',
        'AI adoption increases complexity and governance needs.',
        'Ensuring consistent decisions across systems is difficult.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional platform tools and analytics fall short:</>,
      options: [
        'They monitor performance but do not guide decisions.',
        'AI outputs lack transparency and control.',
        'Root causes are hard to trace across services.',
        'Decision logic does not scale across teams and products.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems adds a <strong>controlled decision intelligence layer</strong> to SaaS and enterprise
            platforms.
          </div>
        </>
      ),
      options: [
        'Connects product, operational, and delivery data.',
        'Supports AI-assisted decisions with clear, explainable logic.',
        'Embeds governance into automated workflows.',
        'Enables consistent decision-making across platforms.',
      ],
    },
    kpis: {
      options: [
        'Faster and more reliable product and operational decisions',
        'Improved platform stability and delivery consistency',
        'Reduced operational complexity and manual intervention',
        'Higher confidence in AI-driven platform management',
      ],
    },
  },
  {
    title: 'Retail & E-commerce',
    subtitle: 'Explainable AI for Demand, Operations, and Customer Decisions',
    sectionId: 'retail',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>Retail and e-commerce businesses operate across fast-changing markets and channels.</div>
        </>
      ),
      options: [
        'Data is fragmented across sales, inventory, marketing, and logistics systems.',
        'Demand is volatile and hard to predict.',
        'Decisions must balance speed, accuracy, and margins.',
        'Scaling AI requires control and consistency.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional retail platforms and analytics tools fall short:</>,
      options: [
        'They focus on reporting, not decision reasoning.',
        'Forecasts lack transparency and context.',
        'AI recommendations are hard to explain and trust.',
        'Decision logic does not scale across channels and regions.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems adds a <strong>controlled decision intelligence layer</strong> to retail operations.
          </div>
        </>
      ),
      options: [
        'Connects demand, inventory, pricing, and operational data.',
        'Supports AI-assisted decisions with clear, explainable logic.',
        'Aligns automated actions with business rules and policies.',
        'Ensures consistent decisions across channels.',
      ],
    },
    kpis: {
      options: [
        'Faster, more confident demand and inventory decisions',
        'Improved consistency across pricing and fulfillment',
        'Reduced manual decision-making effort',
        'Higher trust in AI-supported retail operations',
      ],
    },
  },
  {
    title: 'R&D',
    subtitle: 'Explainable AI for Research and Innovation Decisions',
    sectionId: 'rnd',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          fill='currentColor'
        />
      </svg>
    ),
    challenges: {
      description: 'R&D teams operate across complex research, data, and experimentation workflows.',
      options: [
        'Information is scattered across tools, datasets, and teams.',
        'Decisions depend on incomplete or rapidly changing data.',
        'Manual analysis slows discovery and validation.',
        'AI adoption requires trust and transparency.',
      ],
    },
    whereWeHelp: {
      description: 'Traditional R&D tools and analytics fall short:',
      options: [
        'They support analysis but not decision reasoning.',
        'AI outputs are hard to explain and validate.',
        'Knowledge remains siloed across projects.',
        'Decision logic does not scale across research domains.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems adds a <strong>controlled decision intelligence layer</strong> to R&D workflows.
          </div>
        </>
      ),
      options: [
        'Connects research data, models, and experimental results.',
        'Supports AI-assisted decisions with clear, explainable logic.',
        'Structures review, approval, and iteration cycles.',
        'Ensures traceability across research decisions.',
      ],
    },
    kpis: {
      options: [
        'Faster research and validation cycles',
        'Improved consistency in R&D decision-making',
        'Reduced manual analysis effort',
        'Higher trust in AI-supported research processes',
      ],
    },
  },
  {
    title: 'Education',
    subtitle: 'Explainable AI for Learning, Research, and Academic Operations',
    sectionId: 'edtech_research',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          fill='currentColor'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            Educational institutions manage large volumes of learning content, research data, and administrative
            processes.
          </div>
        </>
      ),
      options: [
        'Information is fragmented across systems and departments.',
        'Decision-making is time-consuming and often manual.',
        'Educators and researchers lack clear, trusted AI support.',
        'Governance and transparency are difficult to maintain.',
      ],
    },
    whereWeHelp: {
      description: <>Traditional educational platforms and analytics tools fall short:</>,
      options: [
        'Focus on content delivery, not decision support.',
        'Provide insights without clear reasoning or traceability.',
        'Rely heavily on manual review and human coordination.',
        'Struggle to scale across programs and research domains.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems adds a <strong>controlled decision intelligence layer</strong> to educational workflows.
          </div>
        </>
      ),
      options: [
        'Structures and connects learning, research, and policy data.',
        'Supports AI-assisted academic and operational decisions.',
        'Ensures transparent reasoning behind recommendations.',
        'Maintains governance across educational processes.',
      ],
    },
    kpis: {
      options: [
        'Faster access to educational and research insights',
        'Reduced workload for educators and administrators',
        'Improved consistency in academic decision-making',
        'Greater trust in AI-supported learning and research',
      ],
    },
  },
];

export const crossIndustryUseCases = [
  {
    title: 'AI-assisted decision support for leaders',
    whatItIs:
      'AI copilots and workflows that help C-level and senior managers explore scenarios, understand risks and prepare materials for decision-making.',
    whoItsFor: ['CEO, COO, CFO, CSO', 'Heads of operations, risk, compliance, strategy'],
    whatItDelivers: [
      'Scenario-based impact analysis for strategic options',
      'Faster preparation of board-ready materials',
      'Clear overview of risks, assumptions and trade-offs',
    ],
    impact: [
      '30–50% shorter time-to-decision for complex topics',
      'Better coverage of relevant data and documents in each decision',
      'More transparent and consistent risk discussions at the leadership level',
    ],
    services: [
      {
        title: 'AI Strategy & Architecture',
        sectionId: 'enterprise-ai',
      },
      {
        title: 'AI Copilots for Critical Roles',
        sectionId: 'ai-copilots',
      },
    ],
  },
  {
    title: 'AI-orchestrated critical processes',
    whatItIs:
      'End-to-end workflows where AI collects information, drafts decisions and routes cases, while humans remain in control of key steps.',
    exampleProcesses: [
      'KYC/AML and customer due diligence',
      'Incident and major incident management',
      'Claims and exception handling',
      'Order-to-cash and complex deal creation',
    ],
    whoItsFor: [],
    impact: [
      '20–40% faster end-to-end cycle time',
      '30–60% fewer manual touches per case',
      'Lower error and rework rates, especially in cross-team processes',
    ],
    services: [
      {
        title: 'AI Process Orchestration',
        sectionId: 'ai-orchestration',
      },
      {
        title: 'AI Copilots for Critical Roles',
        sectionId: 'ai-copilots',
      },
    ],
  },
  {
    title: 'Document & knowledge intelligence',
    whatItIs:
      'A trusted knowledge layer that turns your contracts, policies, procedures and technical docs into answers, comparisons and alerts - always with citations.',
    whoItsFor: [
      'Legal, compliance and risk teams',
      'Operations, finance, procurement',
      'Support and customer-facing teams',
    ],
    impact: [
      '50–70% less time spent searching and reading documents for recurring questions',
      'More consistent answers and decisions across teams and regions',
      'Fewer missed clauses, outdated references and hidden risks',
    ],
    services: [
      {
        title: 'Process-Aware Knowledge AI',
        sectionId: 'knowledge-intelligence',
      },
      {
        title: 'AI Risk, Evaluation & Governance',
        sectionId: 'ai-risk',
      },
    ],
  },
  {
    title: 'AI-accelerated engineering & modernization',
    whatItIs:
      'Using AI to accelerate architecture, coding, testing and refactoring - especially for core platforms and services.',
    whoItsFor: ['CTOs and Heads of Engineering', 'Platform, core services and SRE teams'],
    impact: [
      '30–50% faster delivery for selected features and services',
      'Reduced defect rates in early production releases',
      'Better control over technical debt and refactoring',
    ],
    services: [
      {
        title: 'AI-Accelerated Software Delivery',
        sectionId: 'ai-software',
      },
      {
        title: 'AI Strategy & Architecture',
        sectionId: 'enterprise-ai',
      },
    ],
  },
  {
    title: 'AI governance and risk management',
    whatItIs: 'A governance and monitoring layer that keeps all AI initiatives visible, controlled and explainable.',
    whoItsFor: ['CRO, CISO, Heads of Compliance and Risk', 'CIOs and AI program leaders'],
    impact: [
      'Clear inventory and risk classification for AI use cases',
      'Fewer unapproved or undocumented AI systems in production',
      'Faster approval cycles for new AI initiatives',
    ],
    services: [
      {
        title: 'AI Risk, Evaluation & Governance',
        sectionId: 'ai-risk',
      },
      {
        title: 'AI Strategy & Architecture',
        sectionId: 'enterprise-ai',
      },
    ],
  },
  {
    title: 'AI-augmented engineering & modernization',
    whatItIs:
      'Using AI to accelerate architecture, coding, testing and refactoring - especially for core platforms and services.',
    whoItsFor: ['CTOs and Heads of Engineering', 'Platform, core services and SRE teams'],
    impact: [
      '30–50% faster delivery for selected features and services',
      'Reduced defect rates in early production releases',
      'Better control over technical debt and refactoring',
    ],
    services: [
      {
        title: 'AI-Augmented Software Delivery',
        sectionId: 'ai-augmented',
      },
      {
        title: 'AI Strategy & Architecture',
        sectionId: 'enterprise-ai',
      },
    ],
  },
];

export const industries = [
  {
    title: 'Corporate Project Management',
    subtitle: 'Explainable decision intelligence for project portfolios',
    sectionId: 'corporate-pm',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L2 7L12 12L22 7L12 2Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 17L12 22L22 17'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 12L12 17L22 12'
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
          <div>
            <strong>Complex project portfolios</strong> demand early risk visibility and accountable decisions.
          </div>
        </>
      ),
      options: [
        'Fragmented data across tools and teams.',
        'Reactive planning and forecasting.',
        'Limited <strong>executive visibility</strong> into risks.',
        'Decisions lack <strong>traceability</strong>.',
      ],
    },

    decisionGaps: {
      options: [
        'PM and BI explain the past, not future risk.',
        'Siloed data lacks decision context.',
        'Generic AI can’t reason about causality.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for portfolio planning and execution.
          </div>
        </>
      ),
      options: [
        'Early portfolio risk detection.',
        'Logic-based budget and schedule forecasts.',
        '<strong>Explainable</strong> decision support for leaders.',
      ],
    },
    kpis: {
      options: [
        '<strong>40–60%</strong> more accurate risk detection',
        '<strong>25–40%</strong> lower budget deviations',
        '<strong>30–50%</strong> better resource utilization',
        '<strong>60–70%</strong> faster portfolio visibility',
      ],
    },
  },
  {
    title: 'Healthcare & Life Sciences',
    subtitle: 'Governed AI for clinical and operational decisions',
    sectionId: 'healthcare',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='7' r='4' stroke='currentColor' strokeWidth='2' />
        <path
          d='M5 21V19C5 16 7 14 12 14C17 14 19 16 19 19V21'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div style={{ color: '#fff' }}>
            <strong>Regulated healthcare decisions</strong> demand control, transparency, and compliance.
          </div>
        </>
      ),
      options: [
        'Data fragmented across systems.',
        'Strict policies and regulations.',
        'Manual, high-burden workflows.',
        'AI requires <strong>trust and oversight</strong>.',
      ],
    },
    decisionGaps: {
      options: [
        'Automation without decision governance.',
        'Limited explainability and traceability.',
        'Slow, manual compliance checks.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for healthcare workflows.
          </div>
        </>
      ),
      options: [
        'Unified clinical, operational, and policy data.',
        '<strong>Controlled AI</strong> with approvals and escalation.',
        'End-to-end traceability by design.',
      ],
    },
    kpis: {
      options: [
        'Lower administrative burden',
        'Faster access to <strong>validated information</strong>',
        'More consistent decisions',
        'Higher <strong>trust</strong> in AI workflows',
      ],
    },
  },
  {
    title: 'Industrial Operations & Supply Chain',
    subtitle: 'Explainable AI for operational decisions',
    sectionId: 'industrial',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='3' y='6' width='18' height='12' rx='2' stroke='currentColor' strokeWidth='2' />
        <path d='M3 10H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M7 14H17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            <strong>Distributed operations</strong> require fast, coordinated decisions across production and logistics.
          </div>
        </>
      ),
      options: [
        'Data fragmented across plants, warehouses, and partners.',
        'Disruptions cascade across the operation.',
        'Decisions must balance <strong>speed, cost, and reliability</strong>.',
        'AI at scale requires <strong>governance</strong>.',
      ],
    },
    decisionGaps: {
      options: [
        'Monitoring without decision reasoning.',
        'Limited transparency and control in AI outputs.',
        'Hard-to-manage dependencies across sites.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for industrial and supply chain operations.
          </div>
        </>
      ),
      options: [
        'Unified production and logistics data.',
        '<strong>Explainable</strong> AI-assisted decisions.',
        'Consistent, governed workflows across regions.',
      ],
    },
    kpis: {
      options: [
        'Faster, more resilient decisions',
        'Better coordination across operations',
        'Lower disruption impact',
        'Higher <strong>confidence</strong> in AI-driven operations',
      ],
    },
  },
  {
    title: 'Regulated Financial & Compliance Environments',
    subtitle: 'Explainable AI for governed financial decisions',
    sectionId: 'fintech',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 6H20V18H4V6Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M4 10H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M8 14H16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            <strong>Regulated financial decisions</strong> require strict control, auditability, and defensibility.
          </div>
        </>
      ),
      options: [
        'Highly scrutinized, complex decision processes.',
        'Data fragmented across systems and teams.',
        'Manual controls slow critical workflows.',
        'Every decision must be <strong>auditable</strong>.',
      ],
    },
    decisionGaps: {
      options: [
        'Automation without governed decision logic.',
        'Limited explainability and transparency in AI.',
        'Reactive, manual compliance checks.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for regulated financial workflows.
          </div>
        </>
      ),
      options: [
        'Unified financial, regulatory, and policy data.',
        '<strong>Explainable</strong> AI with approval and escalation.',
        'End-to-end auditability by design.',
      ],
    },
    kpis: {
      options: [
        'Faster, compliant decision cycles',
        'Lower manual compliance workload',
        'Higher audit readiness and transparency',
        'Greater <strong>confidence</strong> in AI decisions',
      ],
    },
  },
  {
    title: 'Telecommunications & Cloud Services',
    subtitle: 'Explainable AI for network and service decisions',
    sectionId: 'telecom',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3 12H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M7 8H17V16H7V8Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            <strong>Large-scale, dynamic infrastructures</strong> require fast, reliable decisions under constant
            change.
          </div>
        </>
      ),
      options: [
        'Fragmented network, service, and customer data.',
        'Decisions must scale in real time.',
        'Service reliability is <strong>business-critical</strong>.',
        'Governance of automated decisions is hard.',
      ],
    },
    decisionGaps: {
      options: [
        'Monitoring without decision reasoning.',
        'Limited transparency and control in AI.',
        'Root causes hard to trace across systems.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for telecom and cloud operations.
          </div>
        </>
      ),
      options: [
        'Unified network and service data.',
        '<strong>Explainable</strong> AI-assisted decisions.',
        'Consistent, governed workflows across platforms.',
      ],
    },
    kpis: {
      options: [
        'Faster, more reliable decisions',
        'Higher service stability and performance',
        'Lower operational complexity',
        'Greater <strong>confidence</strong> in AI-driven operations',
      ],
    },
  },
  {
    title: 'SaaS & Enterprise Software Platforms',
    subtitle: 'Explainable AI for product and platform decisions',
    sectionId: 'saas',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
        <path d='M8 12H12L14 16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            <strong>Scaled software platforms</strong> require fast, consistent decisions across products and teams.
          </div>
        </>
      ),
      options: [
        'Data fragmented across product, engineering, and operations.',
        'Decisions must balance <strong>speed, reliability, and risk</strong>.',
        'AI adoption increases governance complexity.',
        'Decision consistency is hard to maintain at scale.',
      ],
    },
    decisionGaps: {
      options: [
        'Monitoring without decision guidance.',
        'Limited transparency and control in AI.',
        'Root causes hard to trace across services.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for SaaS and enterprise platforms.
          </div>
        </>
      ),
      options: [
        'Unified product and operational data.',
        '<strong>Explainable</strong> AI-assisted decisions.',
        'Consistent, governed workflows across platforms.',
      ],
    },
    kpis: {
      options: [
        'Faster, more reliable decisions',
        'Higher platform stability and delivery consistency',
        'Lower operational complexity',
        'Greater <strong>confidence</strong> in AI-driven platforms',
      ],
    },
  },
  {
    title: 'Retail & E-commerce',
    subtitle: 'Explainable AI for demand and operational decisions',
    sectionId: 'retail',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L2 7L12 12L22 7L12 2Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 17L12 22L22 17'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 12L12 17L22 12'
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
          <div>
            <strong>Fast-moving retail markets</strong> require rapid, margin-aware decisions across channels.
          </div>
        </>
      ),
      options: [
        'Fragmented sales, inventory, and logistics data.',
        'Volatile, hard-to-predict demand.',
        'Decisions must balance <strong>speed, accuracy, and margins</strong>.',
        'AI at scale requires <strong>control</strong>.',
      ],
    },
    decisionGaps: {
      options: [
        'Reporting without decision reasoning.',
        'Opaque forecasts and recommendations.',
        'Decision logic doesn’t scale across channels.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for retail operations.
          </div>
        </>
      ),
      options: [
        'Unified demand, inventory, and pricing data.',
        '<strong>Explainable</strong> AI-assisted decisions.',
        'Consistent, policy-aligned actions across channels.',
      ],
    },
    kpis: {
      options: [
        'Faster, more confident demand decisions',
        'More consistent pricing and fulfillment',
        'Lower manual decision effort',
        'Higher <strong>trust</strong> in AI operations',
      ],
    },
  },
  {
    title: 'R&D',
    subtitle: 'Explainable AI for research and innovation decisions',
    sectionId: 'rnd',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
        <path d='M8 12H12L14 16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            <strong>Complex R&D workflows</strong> require fast, defensible decisions under uncertainty.
          </div>
        </>
      ),
      options: [
        'Research data fragmented across tools and teams.',
        'Decisions rely on incomplete or changing inputs.',
        'Manual analysis slows discovery.',
        'AI requires <strong>trust and transparency</strong>.',
      ],
    },
    decisionGaps: {
      options: [
        'Analysis without decision reasoning.',
        'Opaque AI outputs hard to validate.',
        'Knowledge remains siloed across projects.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for R&D workflows.
          </div>
        </>
      ),
      options: [
        'Unified research data and experimental results.',
        '<strong>Explainable</strong> AI-assisted decisions.',
        'Traceable review and iteration cycles.',
      ],
    },
    kpis: {
      options: [
        'Faster research and validation cycles',
        'More consistent R&D decisions',
        'Lower manual analysis effort',
        'Higher <strong>trust</strong> in AI-supported research',
      ],
    },
  },
  {
    title: 'Education',
    subtitle: 'Explainable AI for academic and operational decisions',
    sectionId: 'edtech_research',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='3' y='6' width='18' height='12' rx='2' stroke='currentColor' strokeWidth='2' />
        <path d='M3 10H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M7 14H17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    challenges: {
      description: (
        <>
          <div>
            <strong>Complex academic environments</strong> require trusted, transparent decisions across learning,
            research, and operations.
          </div>
        </>
      ),
      options: [
        'Learning, research, and admin data is fragmented.',
        'Decisions are slow and largely manual.',
        'AI support lacks <strong>trust</strong> and clarity.',
        'Governance is hard to maintain at scale.',
      ],
    },
    decisionGaps: {
      options: [
        'Content delivery without decision support.',
        'Limited reasoning and traceability.',
        'Heavy reliance on manual review.',
      ],
    },
    initiatives: {
      description: (
        <>
          <div>
            A <strong>governed decision intelligence layer</strong> for educational workflows.
          </div>
        </>
      ),
      options: [
        'Unified learning, research, and policy data.',
        '<strong>Explainable</strong> AI-assisted decisions.',
        'Consistent, governed academic processes.',
      ],
    },
    kpis: {
      options: [
        'Faster access to academic insights',
        'Lower workload for educators and staff',
        'More consistent academic decisions',
        'Higher <strong>trust</strong> in AI support',
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

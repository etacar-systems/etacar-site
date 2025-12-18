export const industries = [
  {
    title: 'Regulated Financial & Compliance Environments',
    subtitle: 'Process-Aware Decision Support for Regulated Environments',
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
          <div>
          Regulated organizations operate across complex financial, insurance, and compliance processes where decisions must be accurate, explainable, and auditable.
          These decisions rely on extensive policies, regulations, and procedures across core operational workflows.
          </div>
          <div>These processes are often:</div>
        </>
      ),
      options: [
        'Slow and manual',
        'Fragmented across documents, systems, and teams',
        'Highly dependent on human interpretation',
        'Inconsistent across regions, products, and regulatory frameworks',
      ],
    },
    whereWeHelp: {
      description: <>Regulated financial and compliance environments impose constraints that most automation and AI solutions cannot address:</>,
      options: [
        'Regulatory requirements demand explainable, auditable decisions',
        'Rule-based automation breaks on policy nuances and exceptions',
        'BI and analytics provide insight, not in-process governance',
        'Generic LLM tools lack governance and traceability',
        'Fully autonomous AI is unacceptable in regulated workflows',
      ],
      footer: "What's needed is AI that operates inside controlled decision processes.",
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems acts as a controlled, process-aware AI layer for regulated financial and compliance environments. It integrates with existing systems to support AI-assisted decisions within auditable workflows, keeping humans in control at critical decision points.
          </div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Unified ingestion of financial and compliance data',
        'Context- and policy-aware AI analysis',
        'Human-in-the-loop decision routing',
        'End-to-end traceability and audit readiness',
      ],
    },
    kpis: {
      options: [
        '30–50% faster regulated decisions',
        'More consistent decisions across teams and regions',
        'Lower compliance risk with explainable AI',
        'Audit-ready workflows with traceability',
        'Reduced cost per review without loss of control',
      ],
    },
  },
  {
    title: 'Education & Research',
    subtitle: 'Verified, Explainable Knowledge for Learning and Research',
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
            Education and research organizations operate in knowledge-intensive environments where outcomes must be accurate, explainable, and verifiable. Decisions rely on large volumes of academic materials and data across teaching, assessment, research, and writing.
          </div>
          <div>These processes are often:</div>
        </>
      ),
      options: [
        'Fragmented across documents, platforms, and sources',
        'Highly dependent on manual review and expert judgment',
        'Prone to inconsistent interpretations and hidden bias',
        'Difficult to verify, reproduce, and audit',
      ],
    },
    whereWeHelp: {
      description: <>Education and research environments impose constraints that most AI and automation approaches cannot meet:</>,
      options: [
        'Academic standards require accurate, verifiable, cited knowledge',
        'Generic LLMs can fabricate facts, sources, or reasoning paths',
        'Search and retrieval tools lack academic context and continuity',
        'Analytics tools summarize data, not knowledge or learning goals',
        'Autonomous AI undermines academic integrity and credibility',
      ],
      footer: "What’s needed is AI that reasons over verified knowledge, with transparent logic and full traceability.",
    },
    initiatives: {
      description: (
        <>
          <div>
            EtaCar Systems applies process-aware, ontology-driven knowledge intelligence to support education and research workflows where accuracy and trust are critical. We structure academic and scientific knowledge around explicit learning ontologies, linking sources, concepts, and reasoning into a verifiable framework.
          </div>
          <div>This allows AI systems to:</div>
        </>
      ),
      options: [
        'Reason only over verified sources and cited materials',
        'Preserve context across education and research workflows',
        'Provide explainable outputs with clear reasoning paths',
        'Enable human oversight without slowing learning or discovery',
      ],
    },
    kpis: {
      options: [
        '25–40% improvement in learning efficiency',
        '30–50% higher academic content accuracy',
        '50–65% faster research synthesis',
        '40–55% lower student dropout rates',
        '35–45% increase in educator and researcher productivity',
      ],
    },
  },
    {
    title: 'Healthcare & Life Sciences',
    subtitle: 'Controlled AI Decision Execution for Clinical and Operational Workflows',
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
            Healthcare organizations manage critical clinical and administrative decisions under strict safety, privacy,
            and regulatory requirements.
          </div>
          <div>Challenges include:</div>
        </>
      ),
      options: [
        'Heavy documentation burden',
        'Fragmented clinical data',
        'Slow decision processes',
        'High compliance risk',
      ],
    },
    whereWeHelp: {
      description: <>Healthcare workflows resist automation because:</>,
      options: [
        'Unstructured clinical data dominates',
        'Decisions require human accountability',
        'LLMs lack clinical governance',
        'Regulatory requirements are strict',
      ],
      footer: 'AI must support—not replace—clinical decisions.',
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems acts as a controlled AI execution layer for healthcare workflows.</div>
          <div>It embeds AI into clinical and operational decision processes with strong governance.</div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Ingestion of clinical and policy data',
        'AI-assisted decision support',
        'Structured approval and escalation workflows',
        'Full compliance traceability',
      ],
    },
    kpis: {
      options: [
        'Reduced administrative burden',
        'Faster access to critical information',
        'Improved decision consistency',
        'Higher compliance confidence',
      ],
    },
  },
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
          Corporate organizations manage complex portfolios of interdependent projects where decisions must balance cost, timelines, resources, and strategic priorities.
          These decisions rely on fragmented data from project tools, financial systems, risk registers, and communications — applied across planning, execution, forecasting, and reporting.
          </div>
          <div>As a result, project and portfolio processes are often:</div>
        </>
      ),
      options: [
        'Fragmented across tools, teams, and initiatives',
        'Reactive rather than proactive',
        'Difficult to assess in terms of impact and dependencies',
        'Hard to explain, justify, and trace at the executive level',        
      ],
    },
    whereWeHelp: {
      description: <>Corporate project management imposes constraints that most AI and automation tools cannot address:</>,
      options: [
        'Project data is scattered across tools, lacking shared context',
        'PM and BI tools report the past, not future risks or dependencies',
        'Generic AI can\'t link financial, operational, and human factors',
        'Forecasts are based on correlations, not causal reasoning',
        'Executive decisions lack traceability and audit-ready justification',
      ],
      footer: 'AI must operate within controlled compliance processes.',
    },
    initiatives: {
      description: (
        <>
          <div>
          EtaCar Systems acts as a controlled, process-aware decision intelligence layer for enterprise project and portfolio management.
          We apply ontology-driven reasoning to connect project data, financial constraints, resource availability, and strategic objectives into a unified decision framework.
          </div>
          <div>This enables AI to:</div>
        </>
      ),
      options: [
        'Identify and explain emerging risks before they materialize',
        'Generate logic-based budget and schedule forecasts',
        'Optimize resource allocation across portfolios without bias',
        'Provide decision support with clear reasoning and traceability'
      ],
    },
    kpis: {
      options: [
        '40–60% higher risk detection accuracy',
        '25–40% reduction in budget deviations',
        '30–50% improvement in resource utilization',
        '60–70% faster reporting and portfolio visibility',
        '45–65% increase in decision traceability and executive trust'
      ],
    },
  },
  {
    title: 'Logistics & Supply Chain',
    subtitle: 'AI-Orchestrated Decision Execution for Complex Supply Networks',
    sectionId: 'logistics',
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
            Logistics and supply chain teams manage complex, time-sensitive operations across multiple partners,
            systems, and geographies.
          </div>
          <div>They face:</div>
        </>
      ),
      options: [
        'Limited real-time visibility',
        'Manual exception handling',
        'Slow decision-making during disruptions',
        'High operational overhead',
      ],
    },
    whereWeHelp: {
      description: <>Supply chain automation breaks down because:</>,
      options: [
        'Data is fragmented across systems and partners',
        'Rule-based workflows cannot handle dynamic disruptions',
        'Dashboards inform but do not act',
        'Manual coordination does not scale',
      ],
      footer: 'Operational AI must connect insight to execution.',
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems acts as a controlled AI execution layer for logistics operations.</div>
          <div>It orchestrates AI-driven decisions across planning, execution, and exception handling workflows.</div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Unified ingestion of operational and event data',
        'AI-assisted detection of delays and risks',
        'Decision routing and escalation workflows',
        'Coordinated execution across systems',
      ],
    },
    kpis: {
      options: [
        'Faster response to disruptions',
        'Improved delivery reliability',
        'Reduced manual coordination',
        'Lower operational costs',
      ],
    },
  },
  {
    title: 'Manufacturing & Industrial Operations',
    subtitle: 'Controlled AI Execution for Production and Quality Decisions',
    sectionId: 'manufacturing',
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
            Manufacturers operate complex production environments where small deviations can cause significant quality
            issues, downtime, or waste.
          </div>
          <div>Challenges include:</div>
        </>
      ),
      options: [
        'Massive operational data streams',
        'Delayed detection of anomalies',
        'Slow response to issues',
        'Siloed decision-making',
      ],
    },
    whereWeHelp: {
      description: <>Manufacturing environments are hard to automate because:</>,
      options: [
        'Static thresholds miss early signals',
        'Manual monitoring does not scale',
        'AI insights are disconnected from action',
        'Operational decisions require accountability',
      ],
      footer: 'AI must be integrated into production decision loops.',
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems provides a controlled AI execution layer for industrial operations.</div>
          <div>It connects AI analysis directly to operational decision workflows with human oversight.</div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Ingestion of production and quality data',
        'AI-assisted anomaly detection',
        'Structured response and escalation workflows',
        'Traceable operational decisions',
      ],
    },
    kpis: {
      options: [
        'Reduced downtime and waste',
        'Faster issue resolution',
        'More consistent operational decisions',
        'Improved production efficiency',
      ],
    },
  },
  {
    title: 'Telecommunications & Cloud Services',
    subtitle: 'AI-Orchestrated Operations for High-Availability Environments',
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
          <div>
            Telecom and cloud providers must maintain highly available, large-scale infrastructure while responding
            rapidly to incidents and demand changes.
          </div>
          <div>They face:</div>
        </>
      ),
      options: [
        'Complex distributed systems',
        'High incident volumes',
        'Manual operational workflows',
        'Strict SLA requirements',
      ],
    },
    whereWeHelp: {
      description: <>Operational automation struggles because:</>,
      options: [
        'Systems are highly interdependent',
        'Alert fatigue overwhelms teams',
        'Dashboards lack execution logic',
        'Autonomous AI is risky in production systems',
      ],
      footer: 'Controlled AI is required for reliability.',
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems acts as a controlled AI execution layer for infrastructure operations.</div>
          <div>
            It orchestrates AI-assisted incident response and operational decisions across cloud and network
            environments.
          </div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Unified ingestion of telemetry and alerts',
        'AI-assisted incident classification',
        'Structured response workflows',
        'Full operational traceability',
      ],
    },
    kpis: {
      options: [
        'Faster incident resolution',
        'Improved SLA compliance',
        'Reduced operational load on teams',
        'Higher infrastructure reliability',
      ],
    },
  },
  {
    title: 'Retail & E-commerce',
    subtitle: 'AI-Driven Decision Execution Across Customer and Operations Workflows',
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
          <div>
            Retailers must manage fast-moving customer interactions, inventory decisions, and omnichannel operations at
            scale.
          </div>
          <div>They face:</div>
        </>
      ),
      options: [
        'Fragmented customer and operational data',
        'Manual exception handling',
        'Inconsistent decision-making',
        'Pressure to improve customer experience',
      ],
    },
    whereWeHelp: {
      description: <>Retail automation fails because:</>,
      options: [
        'Customer context is fragmented',
        'Rules cannot adapt to demand volatility',
        'Chatbots lack operational authority',
        'Human teams do not scale efficiently',
      ],
      footer: 'AI must bridge insight and execution.',
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems provides a controlled AI execution layer for retail operations.</div>
          <div>
            It orchestrates AI-assisted decisions across customer service, inventory, and fulfillment workflows.
          </div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Unified customer and operational data',
        'Context-aware AI recommendations',
        'Decision routing with human oversight',
        'Coordinated execution across channels',
      ],
    },
    kpis: {
      options: [
        'Faster customer issue resolution',
        'More consistent operational decisions',
        'Improved customer satisfaction',
        'Lower operational cost',
      ],
    },
  },
  {
    title: 'SaaS & Enterprise Software Platforms',
    subtitle: 'Production-Grade AI Execution for Enterprise Products',
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
          <div>
            SaaS and enterprise software companies want to embed AI into products while maintaining reliability,
            security, and scalability.
          </div>
          <div>They face:</div>
        </>
      ),
      options: [
        'Difficulty moving from prototypes to production',
        'Governance and observability gaps',
        'High operational complexity',
        'Enterprise customer expectations',
      ],
    },
    whereWeHelp: {
      description: <>AI delivery struggles because:</>,
      options: [
        'Experiments do not scale to production',
        'AI logic is hard to control and observe',
        'Enterprise requirements demand governance',
        'Teams lack an execution layer for AI',
      ],
      footer: 'AI must be treated as an operational system.',
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems provides a controlled AI execution layer for enterprise software platforms.</div>
          <div>It enables teams to build, deploy, and operate AI-driven features with control and visibility.</div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Orchestrated AI decision workflows',
        'Human-in-the-loop governance',
        'Observability and traceability',
        'Enterprise-ready AI operations',
      ],
    },
    kpis: {
      options: [
        'Faster delivery of AI features',
        'Higher reliability in production',
        'Lower technical and operational risk',
        'Scalable AI governance across products',
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

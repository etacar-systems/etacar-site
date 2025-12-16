import React, { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import styles from './UseCasesPage.module.scss';

import Footer from '../../components/Footer';
import CrossIndustrySection from './components/CrossIndustrySection';
import Hero from './components/Hero';
import IndustrySection from './components/IndustrySection';
import UseCasesCTA from './components/UseCasesCTA';

const industries = [
  {
    title: 'Financial Services / FinTech',
    subtitle: 'AI-Driven Decision Execution for Regulated Financial Operations',
    sectionId: 'fintech',
    challenges: {
      description: (
        <>
          <div>
            Financial institutions handle large volumes of regulated decisions — including onboarding, KYC/AML checks,
            risk assessments, fraud reviews, and reporting — under strict requirements for accuracy, explainability, and
            auditability.
          </div>
          <div>These processes are often:</div>
        </>
      ),
      options: [
        'Slow and manual',
        'Spread across fragmented systems',
        'Heavily dependent on human reviewers',
        'Inconsistent across teams and regions',
      ],
      footer: 'This results in higher operational costs, slower customer journeys, and increased regulatory risk.',
    },
    whereWeHelp: {
      description: <>Financial services impose constraints that most automation and AI solutions cannot address:</>,
      options: [
        'Regulatory demands require decisions to be explainable and auditable',
        'Rule-based automation breaks on edge cases and policy nuances',
        'BI tools provide insight, but do not execute decisions',
        'LLM chatbots lack governance and traceability',
        'Fully autonomous AI is unacceptable in regulated workflows',
      ],
      footer: "What's needed is AI that operates inside controlled decision processes.",
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems acts as a controlled AI execution layer for financial operations.</div>
          <div>
            It integrates with existing banking, compliance, and risk systems to orchestrate AI-assisted decisions
            within predefined workflows. AI supports analysis and policy interpretation, while humans remain in control
            at critical decision points.
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
        '30–50% faster onboarding and compliance reviews',
        'More consistent decisions across teams and regions',
        'Lower operational risk through explainable AI',
        'Audit-ready workflows with full traceability',
        'Reduced cost per review without loss of control',
      ],
    },
  },
  {
    title: 'Insurance',
    subtitle: 'Controlled AI Decision Execution for Claims, Underwriting and Risk Operations',
    sectionId: 'insurance',
    challenges: {
      description: (
        <>
          <div>
            Insurance organizations manage high volumes of document-heavy and risk-sensitive processes, including claims
            handling, underwriting reviews, policy servicing, and fraud detection.
          </div>
          <div>These processes are often:</div>
        </>
      ),
      options: [
        'Slow and manual',
        'Dependent on unstructured documents',
        'Inconsistent across teams',
        'Costly to scale without increasing risk',
      ],
      footer: 'This leads to longer claim cycles, higher loss ratios, and reduced customer satisfaction.',
    },
    whereWeHelp: {
      description: <>Insurance operations are difficult to automate due to:</>,
      options: [
        'Complex policy language and contextual interpretation',
        'High variance of cases and frequent exceptions',
        'Rule-based systems that fail on non-standard claims',
        'LLM tools that lack governance and auditability',
        'Low tolerance for errors in financial decisions',
      ],
      footer: "What's needed is AI embedded into controlled insurance workflows.",
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems acts as a controlled AI execution layer for insurance operations.</div>
          <div>
            It orchestrates AI-assisted decisions across claims, underwriting, and fraud workflows while keeping humans
            in control at critical checkpoints.
          </div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Unified ingestion of claims, policies, and supporting documents',
        'Context-aware interpretation of policy and coverage rules',
        'AI-assisted triage and decision routing',
        'Full traceability and audit readiness',
      ],
    },
    kpis: {
      options: [
        'Faster claims processing and underwriting cycles',
        'More consistent decisions across regions and teams',
        'Reduced operational cost without increased risk',
        'Improved customer experience through shorter turnaround times',
      ],
    },
  },
  {
    title: 'Legal Compliance & RegTech',
    subtitle: 'Explainable AI for Regulated Legal and Compliance Decisions',
    sectionId: 'legal-compliance',
    challenges: {
      description: (
        <>
          <div>
            Legal and compliance teams must continuously interpret regulations, review documents, and enforce controls
            across rapidly changing regulatory environments.
          </div>
          <div>These activities are often:</div>
        </>
      ),
      options: [
        'Document-intensive',
        'Slow to adapt to regulatory changes',
        'Dependent on expert manual review',
        'Difficult to audit at scale',
      ],
    },
    whereWeHelp: {
      description: <>Legal and compliance work resists automation because:</>,
      options: [
        'Regulatory texts are complex and ambiguous',
        'Static rules cannot capture legal nuance',
        'Search tools retrieve documents, not decisions',
        'LLMs without guardrails lack legal defensibility',
        'Auditors require full traceability',
      ],
      footer: 'AI must operate within controlled compliance processes.',
    },
    initiatives: {
      description: (
        <>
          <div>EtaCar Systems provides a controlled AI execution layer for legal and compliance workflows.</div>
          <div>
            It embeds AI into regulatory interpretation, review, and enforcement processes while ensuring explainability
            and governance.
          </div>
          <div>EtaCar Systems enables:</div>
        </>
      ),
      options: [
        'Centralized regulatory and policy knowledge',
        'Evidence-backed AI-assisted interpretation',
        'Structured compliance decision workflows',
        'End-to-end audit trails',
      ],
    },
    kpis: {
      options: [
        'Faster regulatory analysis and reviews',
        'Lower compliance risk through consistent decisions',
        'Improved audit readiness',
        'Reduced manual workload for legal teams',
      ],
    },
  },
  {
    title: 'Logistics & Supply Chain',
    subtitle: 'AI-Orchestrated Decision Execution for Complex Supply Networks',
    sectionId: 'logistics',
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
    title: 'Healthcare & Life Sciences',
    subtitle: 'Controlled AI Decision Execution for Clinical and Operational Workflows',
    sectionId: 'healthcare',
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
    title: 'SaaS & Enterprise Software Platforms',
    subtitle: 'Production-Grade AI Execution for Enterprise Products',
    sectionId: 'saas',
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

const crossIndustryUseCases = [
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
        title: 'Knowledge Intelligence',
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

const UseCasesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <FadeInSection>
        <Hero />
      </FadeInSection>
      {industries.map((industry, index) => (
        <FadeInSection key={index}>
          <IndustrySection {...industry} isEven={index % 2 === 0} index={index} />
        </FadeInSection>
      ))}
      <FadeInSection>
        <CrossIndustrySection useCases={crossIndustryUseCases} sectionId='cross-industry' />
      </FadeInSection>
      <FadeInSection>
        <UseCasesCTA />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};

export default UseCasesPage;

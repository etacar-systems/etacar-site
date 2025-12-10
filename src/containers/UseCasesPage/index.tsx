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
    title: 'Financial services & fintech',
    sectionId: 'fintech',
    challenges: [
      'Slow and costly KYC/AML and periodic reviews',
      'Fragmented view of customer risk and exposure',
      'Heavy reliance on manual work for compliance reporting and investigations',
      'Pressure from regulators to explain and document decisions',
    ],
    whereWeHelp: [
      'AI‑orchestrated KYC/AML reviews and customer due diligence',
      'AI copilots for risk analysts, compliance teams and internal audit',
      'Document & knowledge intelligence for policies, regulations, contracts',
      'AI‑supported incident and investigation workflows',
    ],
    initiatives: [
      'Periodic KYC review workflow with AI‑drafted risk summaries and clear flags',
      'Copilot for compliance teams to answer regulator and internal audit questions with references',
      'Knowledge layer that connects policies, procedures and local regulations into one searchable source',
    ],
    kpis: [
      '−30–40% review cycle time for KYC/AML processes',
      'More consistent risk assessments across analysts and locations',
      '50–70% less time spent preparing responses and reports for regulators',
      'Better audit trail: every AI‑supported assessment linked back to data and documents',
    ],
    services: [
      'AI Strategy & Architecture for Business‑Critical Processes',
      'AI Copilots for Critical Roles',
      'AI‑Powered Process Automation',
      'Document & Knowledge Intelligence',
      'AI Risk, Evaluation & Governance',
    ],
  },
  {
    title: 'E‑commerce & digital retail',
    sectionId: 'ecommerce',
    challenges: [
      'Complex customer support and operations across products, regions and channels',
      'High volume of exceptions and manual handling in order, refund and return processes',
      'Knowledge spread across playbooks, policies and legacy tools',
      'Need to maintain service levels without unlimited headcount growth',
    ],
    whereWeHelp: [
      'AI‑assisted workflows for complex customer support cases',
      'AI‑powered process automation for order exceptions, refunds and claims',
      'Knowledge intelligence over help centre, internal playbooks and policies',
      'AI copilots for operations managers to monitor bottlenecks and risks',
    ],
    initiatives: [
      'AI assistant that prepares case context, summaries and suggested next actions for agents',
      'Workflow that classifies and routes complex order issues, collecting all relevant data automatically',
      'Knowledge layer connecting help centre, internal guidelines and policy updates',
    ],
    kpis: [
      '−30–40% time‑to‑resolution for complex cases',
      '30–50% less manual effort per ticket for selected queues',
      'Higher first‑contact resolution and fewer re‑opened tickets',
      'More consistent policy application across regions and teams',
    ],
    services: [
      'AI Copilots for Critical Roles',
      'AI‑Powered Process Automation',
      'Document & Knowledge Intelligence',
      'AI‑Augmented Software Delivery (for platform modernization)',
    ],
  },
  {
    title: 'Logistics, supply chain & operations‑heavy businesses',
    sectionId: 'logistics',
    challenges: [
      'Complex multi‑step fulfilment, routing and exception handling',
      'Limited visibility across systems for planning and execution',
      'Operational teams relying on manual spreadsheets and ad‑hoc tools',
      'Need to react quickly to disruptions (delays, shortages, capacity issues)',
    ],
    whereWeHelp: [
      'AI‑orchestrated workflows for exception handling and incident management',
      'Decision support for demand and capacity planning',
      'Knowledge intelligence over SOPs, contracts, SLAs and operational guidelines',
      'AI copilots for operations leaders to understand impact and scenarios',
    ],
    initiatives: [
      'Workflow that recognises and routes delivery exceptions, suggests handling steps and updates stakeholders',
      'Copilot that helps planners evaluate what‑if scenarios using historical and real‑time data',
      'Knowledge layer with SLAs and contracts, highlighting risk of non‑compliance for specific cases',
    ],
    kpis: [
      '20–40% reduction in time to resolve operational incidents and exceptions',
      'Fewer manual escalations and less time spent on ad‑hoc investigations',
      'Reduced penalties and SLA breaches thanks to earlier detection and action',
      'Better planning accuracy and fewer last‑minute surprises',
    ],
    services: [
      'AI Strategy & Architecture for Business‑Critical Processes',
      'AI‑Powered Process Automation',
      'AI Copilots for Critical Roles',
      'Document & Knowledge Intelligence',
    ],
  },
  {
    title: 'Telecom, utilities & subscription services',
    sectionId: 'telecom',
    challenges: [
      'High volume of customer contacts and network/service incidents',
      'Complex combinations of tariffs, products and contract terms',
      'Strict regulatory and service‑level obligations',
      'Need to quickly identify and handle systemic issues vs one‑off problems',
    ],
    whereWeHelp: [
      'AI‑assisted incident management and proactive issue identification',
      'Copilots for support and retention teams to navigate products and contracts',
      'Knowledge intelligence over tariff catalogs, SLAs, contracts, network policies',
      'AI governance to keep automated decisions explainable to regulators',
    ],
    initiatives: [
      'Workflow that classifies incidents, correlates them with known problems and suggests action plans',
      'Copilot that helps agents handle complex billing and retention cases with clear recommendations',
      'Knowledge layer that connects tariffs, options, restrictions and legal terms',
    ],
    kpis: [
      'Faster incident response and resolution for priority issues',
      'Lower churn and escalations in complex customer cases',
      'Fewer compliance findings related to inconsistent handling or unclear decisions',
    ],
    services: [
      'AI Copilots for Critical Roles',
      'AI‑Powered Process Automation',
      'Document & Knowledge Intelligence',
      'AI Risk, Evaluation & Governance',
    ],
  },
  {
    title: 'Technology & SaaS companies',
    sectionId: 'saas',
    challenges: [
      'Pressure to deliver new features faster without increasing technical debt',
      'Complex codebases, multiple services, legacy components and partial documentation',
      'Difficulty in aligning architecture, product and delivery across teams',
      'Need to keep core platform stable while evolving quickly',
    ],
    whereWeHelp: [
      'AI‑augmented software delivery for core services and platforms',
      'Architecture & strategy support for platform modernization',
      'Document & knowledge intelligence for internal docs, runbooks and design decisions',
      'AI copilots for support and success teams working with complex configurations',
    ],
    initiatives: [
      'AI‑assisted design and implementation for new critical services, including tests and basic CI',
      'Refactoring and modernization of legacy modules with regression‑aware workflows',
      'Knowledge layer that connects architecture docs, runbooks and troubleshooting guides',
    ],
    kpis: [
      '30–50% faster delivery for selected features and services',
      'Lower defect rates in early production releases',
      'Less time spent on manual digging through internal documentation',
      'More time for senior engineers to focus on architecture and complex design',
    ],
    services: [
      'AI‑Augmented Software Delivery',
      'AI Strategy & Architecture for Business‑Critical Processes',
      'Document & Knowledge Intelligence',
    ],
  },
];

const crossIndustryUseCases = [
  {
    title: 'AI‑assisted decision support for leaders',

    whatItIs:
      'AI copilots and workflows that help C‑level and senior managers explore scenarios, understand risks and prepare materials for decision‑making.',
    whoItsFor: ['CEO, COO, CFO, CSO', 'Heads of operations, risk, compliance, strategy'],
    whatItDelivers: [
      'Scenario‑based impact analysis for strategic options',
      'Faster preparation of board‑ready materials',
      'Clear overview of risks, assumptions and trade‑offs',
    ],
    impact: [
      '30–50% shorter time‑to‑decision for complex topics',
      'Better coverage of relevant data and documents in each decision',
      'More transparent and consistent risk discussions at the leadership level',
    ],
    services: ['AI Strategy & Architecture for Business‑Critical Processes', 'AI Copilots for Critical Roles'],
  },
  {
    title: 'AI‑orchestrated critical processes',
    whatItIs:
      'End‑to‑end workflows where AI collects information, drafts decisions and routes cases, while humans remain in control of key steps.',
    exampleProcesses: [
      'KYC/AML and customer due diligence',
      'Incident and major incident management',
      'Claims and exception handling',
      'Order‑to‑cash and complex deal creation',
    ],
    whoItsFor: [],
    impact: [
      '20–40% faster end‑to‑end cycle time',
      '30–60% fewer manual touches per case',
      'Lower error and rework rates, especially in cross‑team processes',
    ],
    services: ['AI‑Powered Process Automation', 'AI Copilots for Critical Roles'],
  },
  {
    title: 'Document & knowledge intelligence',
    whatItIs:
      'A trusted knowledge layer that turns your contracts, policies, procedures and technical docs into answers, comparisons and alerts — always with citations.',
    whoItsFor: [
      'Legal, compliance and risk teams',
      'Operations, finance, procurement',
      'Support and customer‑facing teams',
    ],
    impact: [
      '50–70% less time spent searching and reading documents for recurring questions',
      'More consistent answers and decisions across teams and regions',
      'Fewer missed clauses, outdated references and hidden risks',
    ],
    services: ['Document & Knowledge Intelligence', 'AI Risk, Evaluation & Governance (for critical use cases)'],
  },
  {
    title: 'AI‑augmented engineering & modernization',
    whatItIs:
      'Using AI to accelerate architecture, coding, testing and refactoring — especially for core platforms and services.',
    whoItsFor: ['CTOs and Heads of Engineering', 'Platform, core services and SRE teams'],
    impact: [
      '30–50% faster delivery for selected features and services',
      'Reduced defect rates in early production releases',
      'Better control over technical debt and refactoring',
    ],
    services: ['AI‑Augmented Software Delivery', 'AI Strategy & Architecture for Business‑Critical Processes'],
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
    services: ['AI Risk, Evaluation & Governance', 'AI Strategy & Architecture for Business‑Critical Processes'],
  },
  {
    title: 'AI‑augmented engineering & modernization',
    whatItIs:
      'Using AI to accelerate architecture, coding, testing and refactoring — especially for core platforms and services.',
    whoItsFor: ['CTOs and Heads of Engineering', 'Platform, core services and SRE teams'],
    impact: [
      '30–50% faster delivery for selected features and services',
      'Reduced defect rates in early production releases',
      'Better control over technical debt and refactoring',
    ],
    services: ['AI‑Augmented Software Delivery', 'AI Strategy & Architecture for Business‑Critical Processes'],
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

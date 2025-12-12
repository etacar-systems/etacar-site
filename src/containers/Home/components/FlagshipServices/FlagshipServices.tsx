import React from 'react';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { ServiceCard } from '../../../../components/ServiceCard';
import styles from './FlagshipServices.module.scss';

export const FlagshipServices: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy & Architecture',
      description:
        'Define where AI truly moves the needle through structured analysis, quantum-inspired modeling, and predictive simulation. We assess your current initiatives, pinpoint 3–5 high-impact use cases, and design a target architecture and governance model. The result is a scalable, secure approach your IT and risk teams can confidently support.',
      href: '/services#ai-strategy',
    },
    {
      title: 'AI Copilots for Critical Roles',
      description:
        'AI assistants for leaders and teams who make high-stakes decisions. We build role-specific copilots for risk, operations, sales and service - integrated into your existing tools, with clear boundaries and explanations.',
      href: '/services#ai-copilots',
    },
    {
      title: 'AI Process Orchestration',
      description:
        'End-to-end workflows for complex processes, not just another chatbot or isolated dashboard, but orchestrated workflows that connect to your real systems. We orchestrate AI across processes like KYC/AML reviews, incident management and complex deal creation, with clear SLAs and manual override where needed.',
      href: '/services#process-automation',
    },
    {
      title: 'Document & Knowledge Intelligence',
      description:
        'Turn your documents and internal knowledge into decisions - not just search. It delivers answers, comparisons and risk alerts. Always with citations your risk and legal teams can verify',
      href: '/services#document-intelligence',
    },
    {
      title: 'AI-Augmented Software Delivery',
      description:
        'Faster architecture, code and modernization for your core systems. We use AI to accelerate design, implementation, testing and refactoring - with your standards for security, performance and maintainability built in.',
      href: '/services#software-delivery',
    },
    {
      title: 'AI Risk, Evaluation & Governance',
      description:
        'Make your AI landscape measurable, auditable and under control - with clear ownership, risk ratings and approval workflows for every business-critical use case.',
      href: '/services#ai-governance',
    },
  ];

  return (
    <SectionWrapper variant='light'>
      <div className={styles.content}>
        <h2 className={styles.title}>Flagship services</h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} href={service.href} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FlagshipServices;

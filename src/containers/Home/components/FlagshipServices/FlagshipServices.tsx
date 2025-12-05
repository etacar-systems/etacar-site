'use client';

import React from 'react';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { ServiceCard } from '../../../../components/ServiceCard';
import styles from './FlagshipServices.module.scss';

export const FlagshipServices: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy & Architecture for Business-Critical Processes',
      description:
        'Define where AI really moves the needle — and how to implement it safely. We audit your current initiatives, identify 3–5 high-impact use cases, and design a target architecture and governance model that your IT and risk teams can support.',
      href: '/services#ai-strategy',
    },
    {
      title: 'AI Copilots for Critical Roles',
      description:
        'AI assistants for leaders and teams who make high-stakes decisions. We build role-specific copilots for risk, operations, sales and service — integrated into your existing tools, with clear boundaries and explanations.',
      href: '/services#ai-copilots',
    },
    {
      title: 'AI-Powered Process Automation',
      description:
        'End-to-end workflows for complex processes, not just another bot. We orchestrate AI across processes like KYC/AML reviews, incident management and complex deal creation, with clear SLAs and manual override where needed.',
      href: '/services#process-automation',
    },
    {
      title: 'Document & Knowledge Intelligence',
      description:
        'Turn your documents and internal knowledge into decisions, not manual search. We connect contracts, policies, technical documentation and reports into a trusted knowledge layer with answers, comparisons and risk alerts — always with citations.',
      href: '/services#document-intelligence',
    },
    {
      title: 'AI-Augmented Software Delivery',
      description:
        'Faster architecture, code and modernization for your core systems. We use AI to accelerate design, implementation, testing and refactoring — with your standards for security, performance and maintainability built in.',
      href: '/services#software-delivery',
    },
    {
      title: 'AI Risk, Evaluation & Governance',
      description:
        'Make your AI landscape measurable, auditable and under control. We help you put all AI projects under one governance and monitoring framework, aligned with your risk, compliance and security expectations.',
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

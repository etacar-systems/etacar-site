import React from 'react';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { ServiceCard } from '../../../../components/ServiceCard';
import styles from './FlagshipServices.module.scss';

export const FlagshipServices: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy & Architecture',
      description: (
        <>
          <strong>Design AI systems that scale from idea to execution.</strong> Using <em>structured analysis</em>,{' '}
          <em>quantum-inspired modeling</em>, and <em>predictive simulation</em>, we align architecture, governance, and
          risk to deliver <strong>20–40% faster processing</strong> and <strong>40–60% fewer AI errors</strong> before
          production.
        </>
      ),
      href: '/services#ai-strategy',
    },
    {
      title: 'AI Copilots for Critical Roles',
      description: (
        <>
          <strong>Role-specific AI copilots for high-stakes decisions.</strong> Built around <em>real workflows</em> and{' '}
          <em>enterprise data</em>, they reduce hallucinations by <strong>40– 60%</strong>, cut escalations by{' '}
          <strong>30–50%</strong>, and help decisions move <strong>faster with confidence</strong>.
        </>
      ),
      href: '/services#ai-copilots',
    },
    {
      title: 'AI Process Orchestration',
      description: (
        <>
          <strong>End-to-end AI orchestration for complex business processes.</strong> We connect documents, systems,
          and decisions into unified workflows that run <strong>20–40% faster</strong>, reduce manual effort by{' '}
          <strong>up to 60%</strong>, and cut search and retrieval time by <strong>up to 70%</strong>.
        </>
      ),
      href: '/services#process-automation',
    },
    {
      title: 'Process-Aware Knowledge AI',
      description: (
        <>
          <strong>Turn enterprise documents and data into insights teams can trust.</strong> Our knowledge intelligence
          is grounded in <em>business process ontologies</em>, reducing search time by <strong>up to 70%</strong> and
          improving <strong>decision quality</strong> across critical workflows.
        </>
      ),
      href: '/services#document-intelligence',
    },
    {
      title: 'AI-Accelerated Software Delivery',
      description: (
        <>
          <strong>Ship software 30–50% faster without sacrificing quality or control.</strong> By embedding AI into
          architecture, development, and testing, teams achieve <strong>30–50% less manual rework</strong> and{' '}
          <strong>higher deployment reliability</strong>.
        </>
      ),
      href: '/services#software-delivery',
    },
    {
      title: 'AI Security, Risk & Governance',
      description: (
        <>
          <strong>Make AI secure, auditable, and enterprise-ready.</strong> We provide{' '}
          <em>continuous risk evaluation</em> and governance that delivers <strong>minimal leakage exposure</strong>,
          <strong> high-confidence malware detection</strong>, and <strong>full operational visibility</strong>.
        </>
      ),
      href: '/services#ai-governance',
    },
  ];

  return (
    <SectionWrapper variant='gradient'>
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

import React from 'react';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { ServiceCard } from '../../../../components/ServiceCard';
import styles from './FlagshipServices.module.scss';

export const FlagshipServices: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy & Architecture',
      description:
        'Design AI systems that scale from idea to execution. Using structured analysis, quantum-inspired modeling, and predictive simulation, we align architecture, governance, and risk to deliver 20–40% faster processing and 40–60% fewer AI errors before production.',
      href: '/services#ai-strategy',
    },
    {
      title: 'AI Copilots for Critical Roles',
      description:
        'Role-specific AI copilots for teams making high-stakes decisions. Built around real workflows and enterprise data, they reduce hallucinations by <b>40–60%</b>, cut escalations by **30–50%, and help decisions move faster with confidence.',
      href: '/services#ai-copilots',
    },
    {
      title: 'AI Process Orchestration',
      description:
        'End-to-end AI orchestration for complex business processes. We connect documents, systems, and decisions into unified workflows that run 20–40% faster, reduce manual effort by up to 60%, and cut search and retrieval time by up to 70%.',
      href: '/services#process-automation',
    },
    {
      title: 'Knowledge Intelligence',
      description:
        'Turn documents and internal data into insight teams can actually use. Our knowledge intelligence reduces search time by up to 70%, speeds up access to critical information, and improves decision quality across the organization.',
      href: '/services#document-intelligence',
    },
    {
      title: 'AI-Accelerated Software Delivery',
      description:
        'Ship software faster without sacrificing quality or control. By embedding AI into architecture, development, and testing, teams deliver features 30–50% faster with 30–50% less manual rework and higher deployment reliability.',
      href: '/services#software-delivery',
    },
    {
      title: 'AI Security, Risk & Governance',
      description:
        'Make AI secure, auditable, and enterprise-ready. We provide continuous risk evaluation and governance that achieves near-zero leakage risk, 100% malware detection, and full visibility across all business-critical AI systems.',
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

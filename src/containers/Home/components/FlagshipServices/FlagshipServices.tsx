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
          Design the AI foundation — <strong>architectures</strong> and operating models for scale, ownership, and <strong>reliability</strong>.
        </>
      ),
      href: '/services#ai-strategy',
    },
    {
      title: 'AI for Decisions & Operations',
      description: (
        <>
          Build <strong>decision-centric</strong> AI systems that govern operations through process-aware reasoning and <strong>uncertainty</strong>.
        </>
      ),
      href: '/services#ai-copilots',
    },
    {
      title: 'AI for Engineering',
      description: (
        <>
          Deliver <strong>production-ready</strong> AI for engineering execution, with security and <strong>governance</strong> built in.
        </>
      ),
      href: '/services#process-automation',
    },
  ];

  return (
    <SectionWrapper >
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

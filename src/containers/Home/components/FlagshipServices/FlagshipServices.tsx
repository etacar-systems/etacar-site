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
        Design the <strong>AI foundation</strong> — <em>operating models</em> and <strong>decision frameworks</strong> for <strong>scale</strong> and <em>ownership</em>.
        </>
      ),
      href: '/services#ai-strategy',
    },
    {
      title: 'AI for Decisions & Operations',
      description: (
        <>
          Embed <strong>process-aware reasoning</strong> into <em>workflows</em> to improve <strong>decision quality</strong> and <em>speed</em>.
        </>
      ),
      href: '/services#ai-copilots',
    },
    {
      title: 'AI for Engineering',
      description: (
        <>
          Ship <strong>production-ready AI</strong> with <em>security</em> and <strong>governance</strong> built to <em>survive reality</em>.
        </>
      ),
      href: '/services#process-automation',
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

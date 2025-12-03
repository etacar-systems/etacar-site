import React from 'react';
import { FadeCard } from '../../../components/FadeCard';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './ImpactAtAGlance.module.scss';

export const ImpactAtAGlance: React.FC = () => {
  const metrics = [
    {
      value: '20–40%',
      text: 'Faster end‑to‑end execution for selected operational processes',
    },
    {
      value: '30–50%',
      text: 'Less manual effort for recurring analysis and reporting',
    },
    {
      value: '30–50%',
      text: 'Shorter time‑to‑delivery for selected development tasks',
    },
    {
      value: '50–70%',
      text: 'Less time spent searching and reading internal documents for recurring questions',
    },
    {
      value: 'Fewer',
      text: 'Escalations and errors, thanks to more consistent use of existing knowledge and playbooks',
    },
  ];

  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Impact at a glance</h2>
          <p className={styles.description}>Across recent projects, our AI solutions have delivered:</p>
        </div>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <FadeCard key={index} className={styles.metricCard}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricText}>{metric.text}</div>
            </FadeCard>
          ))}
        </div>

        <div className={styles.closing}>
          <p>
            These numbers are not “theoretical potential” — they are measured before/after deltas on real processes.
            Exact values differ by client and domain.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ImpactAtAGlance;

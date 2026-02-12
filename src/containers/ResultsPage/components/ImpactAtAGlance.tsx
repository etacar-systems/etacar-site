import React from 'react';

import { SectionWrapper } from '../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './ImpactAtAGlance.module.scss';

export const ImpactAtAGlance: React.FC = () => {
  const metrics = [
    {
      value: '20–40%',
      text: (
        <>
          <strong>Faster execution</strong> of operational processes
        </>
      ),
    },
    {
      value: '30–50%',
      text: (
        <>
          <strong>Less manual effort</strong> in recurring analysis and reporting
        </>
      ),
    },
    {
      value: '30–50%',
      text: (
        <>
          <strong>Shorter delivery cycles</strong> for development tasks
        </>
      ),
    },
    {
      value: '50–70%',
      text: (
        <>
          <strong>Less time searching</strong> internal knowledge
        </>
      ),
    },
    {
      value: 'Fewer',
      text: (
        <>
          <strong>Escalations and errors</strong> through consistent knowledge use
        </>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <div className={styles.header}>
        <h2 className={styles.title}>Impact at a glance</h2>
        <p className={styles.description}>Across recent projects, our AI has delivered:</p>
      </div>

      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <Card key={index} title={metric.value} content={metric.text} />
        ))}
      </div>

      <div className={styles.closing}>
        <p>
          These are <strong>measured deltas</strong>, not theoretical potential. Values vary by{' '}
          <strong>client and domain</strong>.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ImpactAtAGlance;

import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './ResultsMeasure.module.scss';

export const ResultsMeasure: React.FC = () => {
  const kpis = [
    <>
      <strong>30–50% faster decision cycles</strong>
      <br />
      Decisions move faster once ownership and constraints are explicit.
    </>,
    <>
      <strong>Up to 40% fewer production errors</strong>
      <br />
      Fewer failures caused by <strong>uncontrolled logic and edge cases</strong>.
    </>,
    <>
      <strong>More predictable outcomes at scale</strong>
      <br />
      Decisions behave <strong>consistently under real operational load</strong>.
    </>,
  ];

  return (
    <SectionWrapper id='results'>
      <div className={styles.content}>
        <h2 className={styles.title}>Measured impact in production</h2>

        <p className={styles.subtext}>
          Observed after decision workflows became governed and traceable.
        </p>

        <ul className={styles.kpiList}>
          {kpis.map((kpi, index) => (
            <Card key={index} content={kpi} className={styles.kpiItem} />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default ResultsMeasure;

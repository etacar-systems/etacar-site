import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './ResultsMeasure.module.scss';

export const ResultsMeasure: React.FC = () => {
  const kpis = [
    <>
      <strong>30–50% faster decision cycles</strong>: decision workflows move faster once ownership and constraints are
      explicit.
    </>,
    <>
      <strong>Up to 40% fewer production errors</strong>: fewer failures caused by uncontrolled logic and edge cases.
    </>,
    <>
      <strong>More predictable outcomes at scale</strong>: decisions behave consistently under real operational load.
    </>,
  ];

  return (
    <SectionWrapper id='results'>
      <div className={styles.content}>
        <h2 className={styles.title}>Measured impact in production</h2>

        <p className={styles.subtext}>
          Observed after decision workflows became governed, traceable, and production-ready.
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

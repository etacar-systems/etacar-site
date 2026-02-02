import React from 'react';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './WhatWeDo.module.scss';

export const WhatWeDo: React.FC = () => {
  const focusAreas = [
    {
      title: 'Engineered for Trust',
      description: (
        <>
          <strong>Grounded outputs. Calibrated confidence. Explicit uncertainty</strong> — not hallucinations.
        </>
      ),
    },
    {
      title: 'Institutional Memory',
      description: (
        <>
          We retain <strong>rationale, constraints, and decisions</strong> across time — preventing corporate amnesia.
        </>
      ),
    },
    {
      title: 'Systematic Reasoning',
      description: (
        <>
          <strong>Coordinated cognitive agents</strong> reduce single-point failure and produce defensible outcomes.
        </>
      ),
    },
  ];

  return (
    <SectionWrapper >
      <div className={styles.content}>
        <h2 className={styles.title}>What we do</h2>

        <p className={styles.subtext}>
          We build a <strong>controlled AI operating layer</strong> inside real workflows — disciplined, transparent, and accountable.
        </p>

        <div className={styles.grid}>
          {focusAreas.map((area, index) => (
            <FadeCard key={index} className={styles.card}>
              <div className={styles.cardItem}>
                <div className={styles.number}>{index + 1}</div>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardDescription}>{area.description}</p>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatWeDo;

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
        <strong>Grounded outputs. Explicit uncertainty. </strong>
        No hallucinations.
        </>
      ),
    },
    {
      title: 'Institutional Memory',
      description: (
        <>
          We retain <strong>decisions and constraints</strong> — preventing corporate amnesia.
        </>
      ),
    },
    {
      title: 'Systematic Reasoning',
      description: (
        <>
          <strong>Coordinated agents</strong> reduce single-point failure and produce defensible outcomes.
        </>
      ),
    },
  ];

  return (
    <SectionWrapper >
      <div className={styles.content}>
        <h2 className={styles.title}>What we do</h2>

        <p className={styles.subtext}>
          We build a <strong>controlled AI layer</strong> inside real workflows.
        </p>

        <div className={styles.grid}>
          {focusAreas.map((area, index) => (
            <FadeCard key={index}>
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

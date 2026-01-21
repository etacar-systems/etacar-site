import React from 'react';

import { FadeCard } from '@/components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ExperienceSection.module.scss';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <strong>20+ years</strong> building AI systems with <em>real ownership</em>
        </h2>

        <p className={styles.text}>
          We build and operate AI where <strong>decisions have consequences</strong> —
          <em> financial, legal, and reputational</em>.
        </p>

        <p className={styles.text}>
          <strong>Long-term accountability.</strong> Product mindset. Governed systems.
        </p>

        <FadeCard className={styles.textContent}>
          <p className={styles.paragraph}>
            Our work started over 20 years ago with <strong>enterprise AI platforms</strong>{' '}
            and large-scale information retrieval and analytics.
          </p>

          <p className={styles.paragraph}>
            Since then, we’ve built and operated AI systems across <strong>regulated</strong> and
            <strong> high-risk environments</strong> — from search and recommendations to
            automation and risk scoring.
          </p>

          <p className={styles.paragraph}>
            Today, we apply this experience to <strong>AI-native systems</strong> for
            <em> business-critical processes</em>, combining modern models with
            proven engineering and governance.
          </p>
        </FadeCard>
      </div>
    </SectionWrapper>
  );
};

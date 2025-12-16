import React from 'react';

import { FadeCard } from '@/components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ExperienceSection.module.scss';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.content}>
        <h2 className={styles.title}>20+ years building AI systems with real ownership</h2>

        <p className={styles.text}>
          We’ve been working with AI long before it became a trend — building and operating systems where incorrect
          decisions carry financial, legal, and reputational consequences.
        </p>
        <p className={styles.text}>
         Product mindset. Long-term accountability. Not just software delivery.
        </p>

        <FadeCard className={styles.textContent}>
          <p className={styles.paragraph}>
            We started more than 20 years ago as certified specialists on enterprise AI platforms like Autonomy, working
            on large-scale information retrieval and analytics solutions for major organizations.
          </p>

          <p className={styles.paragraph}>
            Since then, we’ve built and operated AI-powered systems for online businesses and large organizations across
            Europe, the US and other international markets - from information retrieval and recommendations to
            automation and risk scoring.
          </p>

          <p className={styles.paragraph}>
            Today, we bring this experience to AI-native systems for business-critical processes, combining modern AI
            models with proven engineering and governance practices.
          </p>
        </FadeCard>
      </div>
    </SectionWrapper>
  );
};

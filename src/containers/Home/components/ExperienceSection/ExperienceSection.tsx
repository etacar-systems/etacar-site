import React from 'react';

import { FadeCard } from '@/components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ExperienceSection.module.scss';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>20+ years in AI products, not just software development</h2>

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

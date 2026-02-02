import React from 'react';

import { FadeCard } from '@/components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ExperienceSection.module.scss';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper >
      <div className={styles.content}>
        <h2 className={styles.title}>20+ years building AI systems with real ownership</h2>

        <p className={styles.text}>
          We build and operate AI where <strong>decisions have consequences</strong> — financial, legal, and
          reputational.<br></br>
           <strong>Long-term accountability.</strong> Product mindset. Governed systems.
        </p>

        <FadeCard className={styles.paragraph}>
          Our work started over 20 years ago with <strong>enterprise AI platforms</strong> and large-scale information
          retrieval and analytics.
        </FadeCard>
        <FadeCard className={styles.paragraph}>
          Our work started over 20 years ago with <strong>enterprise AI platforms</strong> and large-scale information
          retrieval and analytics.
        </FadeCard>
        <FadeCard className={styles.paragraph}>
          Today, we apply this experience to <strong>AI-native systems</strong> for business-critical processes,
          combining modern models with proven engineering and governance.
        </FadeCard>
      </div>
    </SectionWrapper>
  );
};

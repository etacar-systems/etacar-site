import React from 'react';

import { FadeCard } from '@/components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ExperienceSection.module.scss';
import { Card } from '@/components/Card';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>20+ years building AI systems with real ownership</h2>

        <p className={styles.text}>
          Built in environments where AI decisions had financial, legal, and reputational consequences.<br />
          Governed systems. Clear accountability. No black boxes in production.
        </p>

        <Card
          content={
            <>
              Our work started over 20 years ago with <strong>enterprise AI platforms</strong> and large-scale
              information retrieval and analytics.
            </>
          }
          className={styles.paragraph}
        />
        <Card
          content={
            <>
              Today, we apply this experience to <strong>AI-native systems</strong> for business-critical processes,
              combining modern models with proven engineering and governance.
            </>
          }
          className={styles.paragraph}
        />
      </div>
    </SectionWrapper>
  );
};

import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './ExperienceSection.module.scss';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>20+ years building AI systems with real ownership</h2>
        <Card
          content={
            <>
              <strong>Built for consequences</strong> — financial, legal, and reputational.
              <br />
              Governed systems. Clear accountability. No black boxes.
            </>
          }
          className={styles.paragraph}
        />
        <Card
          content={
            <>
              Enterprise AI experience,
              <br />
              applied to <strong>AI-native, business-critical systems</strong> with proven governance.
            </>
          }
          className={styles.paragraph}
        />
      </div>
    </SectionWrapper>
  );
};

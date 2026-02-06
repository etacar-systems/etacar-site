import React from 'react';

import { IoChatbox, IoTime, IoPeopleSharp } from 'react-icons/io5';

import { SectionWrapper } from '../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <strong>Start a focused conversation</strong> about your AI decisions.
          </h1>

          <p className={styles.subtitle}>
            Discuss use cases, <strong>risks</strong>, and KPIs — no demos, no generic pitches.
          </p>

          <div className={styles.quickFacts}>
            <Card content={'Free 30-minute discovery call to discuss your needs'} icon={IoChatbox} />
            <Card content={'Typical response time: within 24 hours'} icon={IoTime} />
            <Card content={'Work directly with senior AI engineers'} icon={IoPeopleSharp} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

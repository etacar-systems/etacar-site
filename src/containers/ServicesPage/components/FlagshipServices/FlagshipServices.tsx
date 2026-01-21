import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { AIStrategy } from '../AIStrategy';
import { AIDecisions } from '../AIDecisions';
import { AIEngineering } from '../AIEngineering';
import styles from './FlagshipServices.module.scss';

export const FlagshipServices: React.FC = () => {
  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>Flagship Services</h2>
        <p className={styles.subtext}>
          Our flagship services define where and why AI is applied across your organization.
        </p>
        <AIStrategy />
        <AIDecisions />
        <AIEngineering />
      </div>
    </SectionWrapper>
  );
};

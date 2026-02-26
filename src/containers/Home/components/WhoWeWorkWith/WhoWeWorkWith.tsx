import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const options = [
    <>Executive leadership (risk & revenue)</>,
    <>Operations</>,
    <>Infrastructure architects</>,
    <>Production engineering</>,
  ];

  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>Built for organizations that cannot afford uncontrolled AI decisions</h2>
        <Card
          content={
            <div className={styles.caseResult}>
              <ul className={styles.list}>
                {options.map((option, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.bullet}>●</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <div className={styles.conclusion}>If AI decisions carry risk, they require engineered control.</div>
      </div>
    </SectionWrapper>
  );
};

export default WhoWeWorkWith;

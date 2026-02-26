import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const options = [<>Executive leadership</>, <>Operations</>, <>Architecture</>, <>Engineering</>];

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
              <div>If AI decisions impact the business, they become infrastructure.</div>
            </div>
          }
        />
      </div>
    </SectionWrapper>
  );
};

export default WhoWeWorkWith;

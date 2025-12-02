import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const targetAudience = [
    {
      role: 'COO / Head of Operations',
      description: 'wants faster, more reliable processes end-to-end',
    },
    {
      role: 'CIO / Head of IT & Architecture',
      description: 'needs AI that fits existing systems, not shadow IT',
    },
    {
      role: 'CRO / Risk & Compliance leaders',
      description: 'must keep AI auditable and regulator-friendly',
    },
    {
      role: 'CTO / Head of Product & Engineering',
      description: 'looks to speed up delivery without sacrificing quality',
    },
  ];

  return (
    <SectionWrapper variant="light">
      <div className={styles.content}>
        <h2 className={styles.title}>Who we work with</h2>
        
        <p className={styles.intro}>
          We partner with leaders who run complex, business-critical operations and can't afford AI "experiments".
        </p>
        
        <ul className={styles.list}>
          {targetAudience.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.bullet}>●</div>
              <div>
                <strong className={styles.role}>{item.role}</strong>
                <span className={styles.separator}> – </span>
                <span className={styles.description}>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default WhoWeWorkWith;

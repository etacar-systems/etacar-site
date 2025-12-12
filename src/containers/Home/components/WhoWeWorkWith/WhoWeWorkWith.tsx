import React from 'react';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const targetAudience = [
    {
      role: 'COO / Head of Operations',
      description:
        'is accountable for end-to-end process performance and wants faster, more reliable and more flexible operations.',
    },
    {
      role: 'CIO / Head of IT & Architecture',
      description:
        'needs AI that respects, aligns with and optimizes enterprise architecture and controls, not shadow IT experiments.',
    },
    {
      role: 'CRO / Risk & Compliance leaders',
      description: 'must keep AI measurable, auditable and regulator-ready.',
    },
    {
      role: 'CTO / Head of Product & Engineering',
      description: 'wants to speed up delivery of AI-enabled features without compromising quality or stability.',
    },
  ];

  return (
    <SectionWrapper variant='light'>
      <div className={styles.content}>
        <h2 className={styles.title}>Who we work with</h2>

        <p className={styles.intro}>
          We partner with leaders who run complex, business-critical operations and can't afford AI "experiments".
        </p>

        <div className={styles.list}>
          {targetAudience.map((item, index) => (
            <FadeCard key={index} className={styles.listItem}>
              <div className={styles.text}>
                <div className={styles.bullet}>●</div>
                <div>
                  <strong className={styles.role}>{item.role}</strong>
                  <span className={styles.separator}> – </span>
                  <span className={styles.description}>{item.description}</span>
                </div>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoWeWorkWith;

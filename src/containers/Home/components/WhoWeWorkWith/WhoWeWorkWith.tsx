import React from 'react';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const targetAudience = [
    {
      description: 'Operations leaders accountable for end-to-end performance.',
    },
    {
      description: 'Technology leaders owning secure and scalable AI architecture.',
    },
    {
      description: 'Risk & Compliance leaders responsible for auditability and regulation.',
    },
    {
      description: 'Product & Engineering leaders delivering AI into core workflows.',
    },
  ];

  return (
    <SectionWrapper variant='light'>
      <div className={styles.content}>
        <h2 className={styles.title}>Who we work with</h2>

        <p className={styles.intro}>Decision-makers who can’t afford AI experiments.</p>

        <div className={styles.list}>
          {targetAudience.map((item, index) => (
            <FadeCard key={index} className={styles.listItem}>
              <div className={styles.text}>
                <div className={styles.bullet}>●</div>
                <div>
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

import React from 'react';

import { groups } from '../data';
import { Card } from '@/components/Card';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>High-Stakes Decision Use Cases</h1>

        <h2 className={styles.subtitle}>
          Decision scenarios where generic AI tools fall short, requiring structured, review-ready support.
        </h2>

        <p className={styles.text}>In all cases below, human accountability remains central.</p>
        <div className={styles.quickFacts}>
          {groups.map((group, idx) => (
            <Card
              key={idx}
              icon={group.icon}
              sectionId={group.sectionId}
              title={group.title}
              titleClassname={styles.cardTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

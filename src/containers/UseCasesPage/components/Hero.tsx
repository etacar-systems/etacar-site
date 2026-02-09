import React from 'react';

import styles from './Hero.module.scss';
import { groups } from '../data';
import { Card } from '@/components/Card';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Use Cases for High-Stakes Decision-Making</h1>

        <h2 className={styles.subtitle}>
          Decision scenarios where generic AI tools are insufficient and structured, review-ready decision support is
          required.
        </h2>

        <p className={styles.text}>
          These use cases describe classes of decisions where outcomes matter — financially, operationally, or
          regulatorily — and accountability cannot be delegated to black-box systems.
        </p>
        <div className={styles.quickFacts}>
          {groups.map((group, idx) => (
            <Card key={idx} icon={group.icon} sectionId={group.sectionId} title={group.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

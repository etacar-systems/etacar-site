import React from 'react';

import { Card } from '@/components/Card';
import { FiSettings, FiShield, FiTarget } from 'react-icons/fi';
import styles from './ServicesHero.module.scss';

const items = [
  {
    label: 'Built for regulated environments',
    icon: FiShield,
  },
  {
    label: 'Engineered for accountability',
    icon: FiTarget,
  },
  {
    label: 'Designed for long-term operational control',
    icon: FiSettings,
  },
];

export const ServicesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Controlled AI Systems for High-Stakes Decisions</h1>
        <p className={styles.subtitle}>
          We design and deploy AI systems where errors are unacceptable and control is non-negotiable.
        </p>
        <div className={styles.quickFacts}>
          {items.map((item, idx) => (
            <Card key={idx} title={item.label} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

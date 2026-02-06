import React from 'react';

import { BsClipboard2DataFill } from 'react-icons/bs';
import { FaGear } from 'react-icons/fa6';
import { PiTreeStructureFill } from 'react-icons/pi';

import styles from './ServicesHero.module.scss';
import { Card } from '@/components/Card';

const items = [
  {
    icon: PiTreeStructureFill,
    label: 'AI Strategy & Architecture',
    sectionId: 'ai_strategy_architecture',
  },
  {
    icon: BsClipboard2DataFill,
    label: 'AI for Decisions & Operations',
    sectionId: 'al_for_decisions_operations',
  },
  {
    icon: FaGear,
    label: 'AI for Engineering',
    sectionId: 'al_for_engineering',
  },
];

export const ServicesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cognitive Infrastructure Services</h1>
        <p className={styles.subtitle}>Production-grade reasoning systems for high-stakes decisions</p>
        <div className={styles.quickFacts}>
          {items.map((item, idx) => (
            <Card key={idx} icon={item.icon} title={item.label} sectionId={item.sectionId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

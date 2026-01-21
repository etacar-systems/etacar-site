import React from 'react';

import { GoGear } from 'react-icons/go';
import { PiTreeStructureLight } from 'react-icons/pi';
import { BsClipboardData } from 'react-icons/bs';

import { FadeCard } from '@/components/FadeCard';
import styles from './ServicesHero.module.scss';

const items = [
  {
    icon: <PiTreeStructureLight />,
    label: 'AI Strategy & Architecture',
    sectionId: 'ai_strategy_architecture',
  },
  {
    icon: <BsClipboardData />,
    label: 'Al for Decisions & Operations',
    sectionId: 'al_for_decisions_operations',
  },
  {
    icon: <GoGear />,
    label: 'Al for Engineering',
    sectionId: 'al_for_engineering',
  },
];

export const ServicesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Services</h1>
        <p className={styles.subtitle}>
          Al services structured as decision infrastructure — supporting strategy, operations, and engineering.
        </p>
        <p className={styles.info}>Our services define where and why Al is applied across your organization.</p>
        <div className={styles.quickFacts}>
          {items.map((item, idx) => (
            <FadeCard key={idx} className={styles.fact}>
              {React.cloneElement(item.icon, { className: styles.icon })}
              <div className={styles.content}>
                <span>{item.label}</span>
                <a href={`#${item.sectionId}`} className={styles.linkButton}>
                  Learn more →
                </a>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

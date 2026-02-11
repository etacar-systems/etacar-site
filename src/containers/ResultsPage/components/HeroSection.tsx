import React, { ReactElement } from 'react';

import { BsClipboard2DataFill } from 'react-icons/bs';
import { FaCloud, FaClipboardList } from "react-icons/fa";

import { Card } from '@/components/Card';
import styles from './HeroSection.module.scss';

const items = [
  {
    icon: FaClipboardList,
    label: 'Selected case studies',
    sectionId: 'selected-case',
  },
  {
    icon: BsClipboard2DataFill,
    label: 'What we measure',
    sectionId: 'measure',
  },
  {
    icon: FaCloud,
    label: 'Fits your data & risk',
    sectionId: 'within-data',
  },
];

export const HeroSection: React.FC = (): ReactElement => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}><strong>Measurable business impact</strong> from AI in production.</h1>

          <p className={styles.subtitle}>
            Measured gains in <strong>speed</strong>, <strong>quality</strong>, and <strong>risk control</strong> — tied to governed outcomes.
          </p>

          <div className={styles.intro}>
          <p>
            <strong>3–5 KPIs</strong>. Defined upfront. Measured in production.
          </p>
          </div>
          <div className={styles.quickFacts}>
            {items.map((item, idx) => (
              <Card key={idx} icon={item.icon} title={item.label} sectionId={item.sectionId} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

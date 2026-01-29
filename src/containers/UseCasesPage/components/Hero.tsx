import React from 'react';

import styles from './Hero.module.scss';
import { FadeCard } from '@/components/FadeCard';
import { industries } from '../data';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <strong>Decision intelligence</strong> with measurable outcomes.
        </h1>

        <h2 className={styles.subtitle}>
          Where <strong>explainable AI</strong> improves speed, <strong>quality</strong>, and{' '}
          risk control.
        </h2>

        <p className={styles.text}>
          Each use case is tied to <strong>real processes, roles, and KPIs</strong>.
        </p>
        <div className={styles.quickFacts}>
          {industries.map((item, idx) => (
            <FadeCard key={idx} className={styles.fact}>
              {React.cloneElement(item.icon, { className: styles.icon })}
              <div className={styles.content}>
                <span>{item.title}</span>
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

export default Hero;

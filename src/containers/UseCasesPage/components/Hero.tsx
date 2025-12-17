import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import styles from './Hero.module.scss';
import { industries } from '../data';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Where AI Makes the Biggest Impact in Your Business</h1>
        <h2 className={styles.subtitle}>
          Typical high-value problems we solve across industries - from operations to risk, finance, and engineering
        </h2>
        <p className={styles.intro}>
          Below are examples of how we apply our services in different industries. Each use case is tied to specific
          processes, roles and KPIs - not just generic “AI for everything”.
        </p>
        <div className={styles.quickFacts}>
          {industries.map((item, idx) => (
            <FadeCard key={idx} className={styles.fact}>
              {item.icon && React.cloneElement(item.icon, { className: styles.icon })}
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

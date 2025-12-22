import React from 'react';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Where AI Makes the Biggest Impact in Your Business</h1>

        <h2 className={styles.subtitle}>
          Typical <strong>high-value problems</strong> we solve across industries — from operations to risk, finance,
          and engineering
        </h2>

        <p className={styles.text}>
          Each use case is tied to <strong>specific processes, roles and KPIs</strong> — not just generic “AI for
          everything”.
        </p>
      </div>
    </section>
  );
};

export default Hero;

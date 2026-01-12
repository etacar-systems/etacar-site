import React from 'react';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}><strong>Decision intelligence</strong> with <em>measurable outcomes</em>.</h1>

        <h2 className={styles.subtitle}>
          Where <strong>explainable AI</strong> improves <em>speed</em>, <strong>quality</strong>, and <em>risk control</em>.
        </h2>

        <p className={styles.text}>
          Each use case is tied to <strong>real processes, roles, and KPIs</strong>.
        </p>
      </div>
    </section>
  );
};

export default Hero;

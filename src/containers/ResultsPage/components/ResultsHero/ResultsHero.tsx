import React from 'react';
import styles from './ResultsHero.module.scss';

export const ResultsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Results & KPIs</h1>
        <p className={styles.subtitle}>
          We build AI systems for business‑critical operations — and we measure what
          they actually change: cycle times, error rates, manual effort, risk and cost.
        </p>
        <p className={styles.intro}>
          Every engagement with us starts with a simple question: “How will we know
          this AI solution is successful?” Together with your team, we define 3–5
          concrete KPIs before we design the system. Then we implement, measure and
          iterate until the numbers move — or we stop the project instead of hiding
          behind buzzwords.
        </p>
      </div>
    </section>
  );
};

export default ResultsHero;

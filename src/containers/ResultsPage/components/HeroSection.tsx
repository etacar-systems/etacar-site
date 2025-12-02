import React from 'react';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Results & KPIs
          </h1>
          
          <p className={styles.subtitle}>
            We build AI systems for business‑critical operations — and we measure what
            they actually change: cycle times, error rates, manual effort, risk and cost.
          </p>
          
          <div className={styles.intro}>
            <p>
              Every engagement with us starts with a simple question:
              <br />
              <strong>“How will we know this AI solution is successful?”</strong>
            </p>
            <p style={{ marginTop: '1rem' }}>
              Together with your team, we define 3–5 concrete KPIs before we design the
              system. Then we implement, measure and iterate until the numbers move — or
              we stop the project instead of hiding behind buzzwords.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

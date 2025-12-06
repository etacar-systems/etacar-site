'use client';

import React from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Use cases & industries</h1>
        <h2 className={styles.subtitle}>
          We focus on AI for business‑critical operations in industries where speed, quality and risk all matter at the
          same time.
        </h2>
        <p className={styles.intro}>
          Below are examples of how we apply our services in different industries. Each use case is tied to specific
          processes, roles and KPIs — not just generic “AI for everything”.
        </p>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import styles from './TeamHero.module.scss';

const TeamHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Enterprise AI Experts — Trusted in Business-Critical Systems for 20+ Years</h1>

        <p className={styles.subtitle}>
          From <strong>early enterprise AI platforms</strong> to <strong>modern production deployment</strong> — trusted
          across <strong>regulated, high-stake environments</strong>.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;

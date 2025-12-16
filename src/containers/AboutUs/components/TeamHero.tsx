import React from 'react';
import styles from './TeamHero.module.scss';

const TeamHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Enterprise AI Experts — Trusted in Business-Critical Systems for 20+ Years</h1>

        <p className={styles.subtitle}>
          From early enterprise AI platforms to modern production deployment — trusted across regulated, high-stake environments.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;

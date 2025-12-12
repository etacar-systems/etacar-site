import React from 'react';
import styles from './TeamHero.module.scss';

const TeamHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>A Senior AI Team with 20+ Years Building Production-Grade Systems</h1>

        <p className={styles.subtitle}>
          From Autonomy.com to today - experience across high-stakes, regulated, and operations- heavy environments.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;

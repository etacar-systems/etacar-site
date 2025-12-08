import React from 'react';
import styles from './TeamHero.module.scss';

const TeamHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our team & story</h1>

        <p className={styles.subtitle}>
          We are a senior AI engineering team with more than 20 years in AI‑powered products.​ Among us are software
          architects, data scientists and professional neuroscientists — all focused on bringing AI safely into your
          business‑critical workflows.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;

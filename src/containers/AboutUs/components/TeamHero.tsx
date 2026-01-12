import React from 'react';
import styles from './TeamHero.module.scss';

const TeamHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}><strong>We build AI the way critical systems are built.</strong></h1>

        <p className={styles.subtitle}>
          With discipline, ownership, and measurable outcomes — not demos or hype.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;

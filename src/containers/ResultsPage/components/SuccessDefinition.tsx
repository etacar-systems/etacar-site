import React from 'react';
import styles from './SuccessDefinition.module.scss';

export const SuccessDefinition: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How we define success</h2>
          <p className={styles.description}>
            We don’t treat “AI” as a goal in itself. For each project, we agree on measurable
            outcomes in three dimensions:
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Operational impact</h3>
            <p className={styles.cardText}>
              Faster decisions and processes
            </p>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Quality & risk</h3>
            <p className={styles.cardText}>
              Fewer errors, better use of existing knowledge, more consistent decisions
            </p>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Cost & productivity</h3>
            <p className={styles.cardText}>
              Less manual effort, more work done with the same team
            </p>
          </div>
        </div>

        <div className={styles.closing}>
          <p>
            For business‑critical processes we always add risk and compliance metrics,
            so your risk and audit teams can stand behind the solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessDefinition;

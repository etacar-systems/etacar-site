import React from 'react';
import { FadeCard } from '../../../components/FadeCard';
import styles from './SuccessDefinition.module.scss';

export const SuccessDefinition: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How we define success</h2>
          <p className={styles.description}>
            We don’t treat AI as a goal in itself. For each project, we agree on
            <strong> measurable outcomes</strong> across three dimensions:
          </p>
        </div>

        <div className={styles.grid}>
          <FadeCard className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Operational impact</h3>
              <p className={styles.cardText}>
                <strong>Faster decisions</strong> and processes
              </p>
            </div>
          </FadeCard>

          <FadeCard className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Quality & risk</h3>
              <p className={styles.cardText}>
                <strong>Fewer errors</strong>, better use of existing knowledge, more consistent decisions
              </p>
            </div>
          </FadeCard>

          <FadeCard className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Cost & productivity</h3>
              <p className={styles.cardText}>
                <strong>Less manual effort</strong>, more output from the same team
              </p>
            </div>
          </FadeCard>
        </div>

        <FadeCard className={styles.closing}>
          <p>
            For <strong>business-critical processes</strong>, we always include
            <strong> risk and compliance metrics</strong>, so your audit and risk teams can stand behind the solution.
          </p>
        </FadeCard>
      </div>
    </section>
  );
};

export default SuccessDefinition;

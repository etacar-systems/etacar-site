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
            <strong>Success is defined upfront.</strong> Every engagement is anchored to{" "}
            measurable KPIs agreed before build — across three dimensions:
          </p>
        </div>

        <div className={styles.grid}>
          <FadeCard className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Operational impact</h3>
              <p className={styles.cardText}>
                <strong>Faster cycle time</strong> across decisions and workflows
              </p>
            </div>
          </FadeCard>

          <FadeCard className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Quality & risk</h3>
              <p className={styles.cardText}>
                <strong>Fewer errors</strong> with consistent, traceable decisions
              </p>
            </div>
          </FadeCard>

          <FadeCard className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Cost & productivity</h3>
              <p className={styles.cardText}>
                <strong>Less manual effort</strong> and higher throughput per team
              </p>
            </div>
          </FadeCard>
        </div>

        <FadeCard className={styles.closing}>
          <p>
            For <strong>business-critical processes</strong>, we include{" "}
            <strong>risk and compliance KPIs</strong> so audit and risk teams can
             stand behind the outcome.
          </p>
        </FadeCard>
      </div>
    </section>

  );
};

export default SuccessDefinition;

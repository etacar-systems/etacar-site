import React from 'react';

import { Card } from '@/components/Card';
import styles from './SuccessDefinition.module.scss';

export const SuccessDefinition: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How we define success</h2>
          <p className={styles.description}>
            <strong>Success is defined upfront.</strong> Every engagement is anchored to measurable KPIs agreed before
            build — across three dimensions:
          </p>
        </div>

        <div className={styles.grid}>
          <Card
            title={'Operational impact'}
            content={
              <>
                <strong>Faster cycle time</strong> across decisions and workflows
              </>
            }
          />
          <Card
            title={'Quality & risk'}
            content={
              <>
                <strong>Fewer errors</strong> with consistent, traceable decisions
              </>
            }
          />
          <Card
            title={'Cost & productivity'}
            content={
              <>
                <strong>Less manual effort</strong> and higher throughput per team
              </>
            }
          />
        </div>

        <Card
          className={styles.closing}
          content={
            <>
              For <strong>business-critical processes</strong>, we include <strong>risk and compliance KPIs</strong> so
              audit and risk teams can stand behind the outcome.
            </>
          }
        />
      </div>
    </section>
  );
};

export default SuccessDefinition;

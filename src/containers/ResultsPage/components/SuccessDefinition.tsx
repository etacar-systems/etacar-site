import React from 'react';

import { Card } from '@/components/Card';
import styles from './SuccessDefinition.module.scss';

export const SuccessDefinition: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Defined, Measured, Delivered</h2>
          <p className={styles.description}>
            <strong>Success is defined upfront</strong> and measured across three clear KPI dimensions:
          </p>
        </div>

        <div className={styles.grid}>
          <Card
            title={'Operational impact'}
            content={
              <>
                <strong>Faster cycle times</strong> across workflows
              </>
            }
          />
          <Card
            title={'Quality & risk'}
            content={
              <>
                <strong>Fewer errors</strong> with traceable decisions
              </>
            }
          />
          <Card
            title={'Cost & productivity'}
            content={
              <>
                <strong>Less manual work</strong>, higher throughput
              </>
            }
          />
        </div>

        <Card
          className={styles.closing}
          content={
            <>
              For <strong>business-critical processes</strong>, we include <strong>risk and compliance KPIs</strong> for audit oversight.
            </>
          }
        />
      </div>
    </section>
  );
};

export default SuccessDefinition;

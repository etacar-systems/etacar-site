import React from 'react';

import { Card } from '@/components/Card';
import styles from './DataIntegration.module.scss';

export const DataIntegration: React.FC = () => {
  const items = [
    <>
      Integrate with your systems and data — not <strong>"shadow tools"</strong>
    </>,
    <>
      Align with <strong>risk, security, and compliance</strong> from day one
    </>,
    <>
      Ensure every AI-supported decision is <strong>traceable</strong> to data and documents
    </>,
    <>
      Provide clear <strong>visibility</strong> into system behavior and monitoring
    </>,
  ];

  return (
    <section className={styles.section} id='within-data'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Working within your data, systems, and risk constraints</h2>
          <p className={styles.description}>We don’t operate AI in isolation. In every engagement we:</p>

          <div className={styles.inner}>
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.itemText}>{item}</span>
                </li>
              ))}
            </ul>

            <Card
              content={
                <>
                  This is how we stand behind the <strong>KPIs</strong> — and the decisions AI supports.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataIntegration;

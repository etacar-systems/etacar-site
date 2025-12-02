import React from 'react';
import styles from './DataIntegration.module.scss';

export const DataIntegration: React.FC = () => {
  const items = [
    'Integrate with your existing systems and data sources instead of building separate “shadow tools”',
    'Align with your risk, security and compliance teams from day one',
    'Make sure every AI‑supported decision is traceable back to data and documents',
    'Provide you with a clear view of how the system behaves and how it is monitored'
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Working with your data, systems and risk constraints
          </h2>
          
          <p className={styles.description}>
            We don’t operate AI in isolation. For every engagement we:
          </p>
          
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.item}>
                <span className={styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className={styles.closing}>
            <p>
              This is what allows us — and you — to stand behind the KPIs and the decisions
              your AI systems help to make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataIntegration;

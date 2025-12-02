import React from 'react';
import styles from './DataSystemsSection.module.scss';

export const DataSystemsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Working with your data, systems and risk constraints</h2>
        <ul className={styles.list}>
          <li>Integrate with your existing systems and data sources instead of building separate "shadow tools"</li>
          <li>Align with your risk, security and compliance teams from day one</li>
          <li>Make sure every AI‑supported decision is traceable back to data and documents</li>
          <li>Provide you with a clear view of how the system behaves and how it is monitored</li>
        </ul>
        <p className={styles.note}>
          This is what allows us — and you — to stand behind the KPIs and the decisions your AI systems help to make.
        </p>
      </div>
    </section>
  );
};

export default DataSystemsSection;

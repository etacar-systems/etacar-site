import React from 'react';
import styles from './ImpactAtGlance.module.scss';

export const ImpactAtGlance = () => {
  const metrics = [
    '20–40% faster end‑to‑end execution for selected operational processes',
    '30–50% less manual effort for recurring analysis and reporting',
    '30–50% shorter time‑to‑delivery for selected development tasks',
    '50–70% less time spent searching and reading internal documents for recurring questions',
    'Fewer escalations and errors, thanks to more consistent use of existing knowledge and playbooks',
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Impact at a glance</h2>
        <p className={styles.text}>
          Across recent projects, our AI solutions have delivered:
        </p>
        <ul className={styles.list}>
          {metrics.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
        <p className={styles.note}>
          These numbers are not “theoretical potential” — they are measured before/after deltas on real processes.
        </p>
      </div>
    </section>
  );
};

export default ImpactAtGlance;

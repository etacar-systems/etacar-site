import React from 'react';
import styles from './MetricsSection.module.scss';

export const MetricsSection = () => {
  const groups = [
    {
      title: 'Speed & throughput',
      items: ['Time‑to‑decision', 'End‑to‑end process cycle time', 'Time‑to‑resolution'],
    },
    {
      title: 'Quality & consistency',
      items: ['Error and rework rates', 'Consistency across teams', 'Coverage and correctness of references'],
    },
    {
      title: 'Productivity & cost',
      items: ['Manual effort per case', 'Volume of work per FTE', 'Cost per processed unit'],
    },
    {
      title: 'Risk & compliance',
      items: ['Number and severity of incidents', 'Audit findings related to AI‑supported operations', 'Coverage of critical controls'],
    },
    {
      title: 'Adoption & satisfaction',
      items: ['Active usage of AI assistant', 'User satisfaction', 'Stakeholder confidence'],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What we measure and how</h2>
        <div className={styles.grid}>
          {groups.map((g, i) => (
            <div key={i} className={styles.group}>
              <h3 className={styles.groupTitle}>{g.title}</h3>
              <ul>
                {g.items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.closing}>
          For each project we pick the relevant metrics, define baselines together with your team, and track progress over time.
        </p>
      </div>
    </section>
  );
};

export default MetricsSection;

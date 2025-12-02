import React from 'react';
import styles from './CaseStudies.module.scss';

const cases = [
  {
    title: 'Global e‑commerce (customer operations)',
    headline: 'Reducing handling time for complex support cases',
    results: ['−35% average time‑to‑resolution', '60% of cases processed with AI assistance', '<2% re‑opened tickets'],
  },
  {
    title: 'Financial services (KYC reviews)',
    headline: 'Speeding up KYC reviews while keeping risk under control',
    results: ['−30–40% reduction in review cycle time', 'More consistent risk assessments', 'Better transparency for audit'],
  },
  {
    title: 'Document & knowledge intelligence',
    headline: 'Turning scattered documents into a trusted knowledge layer',
    results: ['50–70% less time spent searching documents', 'Higher consistency across teams'],
  },
  {
    title: 'Technology company (software delivery)',
    headline: 'Accelerating delivery of core platform features',
    results: ['30–50% faster delivery for selected features', 'Lower defect rates in early releases'],
  },
];

export const CaseStudies = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Selected case studies</h2>
        <div className={styles.grid}>
          {cases.map((c, idx) => (
            <article key={idx} className={styles.card}>
              <h3 className={styles.cardTitle}>{c.headline}</h3>
              <p className={styles.cardMeta}>{c.title}</p>
              <ul>
                {c.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

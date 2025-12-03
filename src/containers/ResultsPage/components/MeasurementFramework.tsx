import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './MeasurementFramework.module.scss';

export const MeasurementFramework: React.FC = () => {
  const categories = [
    {
      title: 'Speed & throughput',
      items: [
        'Time‑to‑decision',
        'End‑to‑end process cycle time',
        'Time‑to‑resolution (for incidents, tickets, cases)',
      ],
    },
    {
      title: 'Quality & consistency',
      items: [
        'Error and rework rates',
        'Consistency of decisions across teams/regions',
        'Coverage and correctness of references to internal knowledge',
      ],
    },
    {
      title: 'Productivity & cost',
      items: [
        'Manual effort per case / ticket / report',
        'Volume of work handled per FTE',
        'Cost per processed unit (case, transaction, review, feature)',
      ],
    },
    {
      title: 'Risk & compliance',
      items: [
        'Number and severity of risk/compliance incidents related to the process',
        'Audit findings related to AI‑supported operations',
        'Coverage of critical controls and checks',
      ],
    },
    {
      title: 'Adoption & satisfaction',
      items: [
        'Active usage of AI assistant / workflow',
        'User satisfaction (agents, analysts, engineers)',
        'Stakeholder confidence (operations, risk, C‑level)',
      ],
    },
  ];

  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What we measure and how</h2>
          <p className={styles.description}>
            Our KPI framework is designed to be understandable for C‑level, operations, IT and risk teams alike. We
            group metrics into five categories.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.number}>{index + 1}</span>
                {category.title}
              </h3>
              <ul className={styles.list}>
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.closing}>
          <p>
            For each project we pick the relevant metrics, define baselines together with your team, and track progress
            over time. If the numbers don’t move in the right direction, we adjust the solution — or stop it, instead of
            scaling something that doesn’t work.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MeasurementFramework;

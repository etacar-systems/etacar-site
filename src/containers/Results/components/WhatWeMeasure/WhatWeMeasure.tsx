import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './WhatWeMeasure.module.scss';

const categories = [
  {
    title: 'Speed & throughput',
    items: ['Time‑to‑decision', 'End‑to‑end process cycle time', 'Time‑to‑resolution (for incidents, tickets, cases)'],
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
  // {
  //   title: 'Adoption & satisfaction',
  //   items: [
  //     'Active usage of AI assistant / workflow',
  //     'User satisfaction (agents, analysts, engineers)',
  //     'Stakeholder confidence (operations, risk, C‑level)',
  //   ],
  // },
];

export const WhatWeMeasure: React.FC = () => {
  return (
    <Section
      title='What we measure and how'
      subtitle='Our KPI framework is designed to be understandable for C‑level, operations, IT and risk teams alike. We group
          metrics into five categories.'
    >
      <div className={styles.grid}>
        {categories.map((c, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{c.title}</h3>
            <ul>
              {c.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={styles.closing}>
        <i>
          For each project we pick the relevant metrics, define baselines together with your team, and track progress
          over time. If the numbers don’t move in the right direction, we adjust the solution — or stop it, instead of
          scaling something that doesn’t work.
        </i>
      </p>
    </Section>
  );
};

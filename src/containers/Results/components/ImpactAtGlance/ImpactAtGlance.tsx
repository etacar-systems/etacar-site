import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './ImpactAtGlance.module.scss';

export const ImpactAtGlance: React.FC = () => {
  return (
    <Section>
      <div className={styles.impact}>
        <h2>Impact at a glance</h2>
        <p>
          Across recent projects, our AI solutions have delivered:
        </p>
        <ul>
          <li>20–40% faster end‑to‑end execution for selected operational processes</li>
          <li>30–50% less manual effort for recurring analysis and reporting</li>
          <li>30–50% shorter time‑to‑delivery for selected development tasks</li>
          <li>50–70% less time spent searching and reading internal documents for recurring questions</li>
          <li>Fewer escalations and errors, thanks to more consistent use of existing knowledge and playbooks</li>
        </ul>
        <p>
          These numbers are not "theoretical potential" — they are measured before/after deltas on real processes. Exact values differ by client and domain.
        </p>
      </div>
    </Section>
  );
};
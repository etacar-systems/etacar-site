import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './ImpactAtGlance.module.scss';

export const ImpactAtGlance: React.FC = () => {
  return (
    <Section title='Impact at a glance'>
      <div className={styles.impact}>
        <p>Across recent projects, our AI solutions have delivered:</p>
        <ul>
          <li>
            <i>20–40% faster end‑to‑end execution for selected operational processes</i>
          </li>
          <li>
            <i>30–50% less manual effort for recurring analysis and reporting</i>
          </li>
          <li>
            <i>30–50% shorter time‑to‑delivery for selected development tasks</i>
          </li>
          <li>
            <i>50–70% less time spent searching and reading internal documents for recurring questions</i>
          </li>
          <li>
            <i>Fewer escalations and errors, thanks to more consistent use of existing knowledge and playbooks</i>
          </li>
        </ul>
        <p>
          These numbers are not "theoretical potential" — they are measured before/after deltas on real processes. Exact
          values differ by client and domain.
        </p>
      </div>
    </Section>
  );
};

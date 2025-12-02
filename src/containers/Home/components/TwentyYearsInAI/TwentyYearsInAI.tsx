import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './TwentyYearsInAI.module.scss';

export const TwentyYearsInAI: React.FC = () => {
  return (
    <Section>
      <div className={styles.twentyYears}>
        <h2>20+ years in AI products, not just software development</h2>
        <p>
          We started more than 20 years ago as certified specialists on enterprise AI platforms like Autonomy, working on large‑scale search and analytics solutions. Since then, we’ve built and operated AI‑powered systems for online businesses and large organizations in Europe and the US — from search and recommendations to automation and risk scoring. Today, we bring this experience to AI‑native systems for business‑critical processes, combining modern AI models with proven engineering and governance practices.
        </p>
      </div>
    </Section>
  );
};
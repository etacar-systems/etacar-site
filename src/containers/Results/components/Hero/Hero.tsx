import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <Section title='Results & KPIs'>
      <p className={styles.text}>
        We build AI systems for business-critical operations — and we measure what they actually change: cycle times,
        error rates, manual effort, risk and cost.
      </p>
      <p className={styles.subtext}>
        <i>
          Every engagement with us starts with a simple question: "How will we know this AI solution is successful?"
          Together with your team, we define 3–5 concrete KPIs before we design the system. Then we implement, measure
          and iterate until the numbers move — or we stop the project instead of hiding behind buzzwords.
        </i>
      </p>
    </Section>
  );
};

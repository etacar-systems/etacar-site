import React from 'react';
import { Section } from '../../../../components/Section';
import { howWeWorkSteps } from './data';
import styles from './HowWeWork.module.scss';

export const HowWeWork: React.FC = () => {
  return (
    <Section>
      <div className={styles.howWeWork}>
        <h2>How we work</h2>
        <div className={styles.steps}>
          {howWeWorkSteps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.number}>{index + 1}.</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
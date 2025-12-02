import React from 'react';
import { Section } from '../../../../components/Section';
import { resultsData } from './data';
import styles from './ResultsYouCanMeasure.module.scss';

export const ResultsYouCanMeasure: React.FC = () => {
  return (
    <Section>
      <div className={styles.results}>
        <h2>{resultsData.title}</h2>
        <p className={styles.subText}>{resultsData.subText}</p>
        <ul className={styles.kpis}>
          {resultsData.kpis.map((kpi, index) => (
            <li key={index}>{kpi}</li>
          ))}
        </ul>
        <div className={styles.miniCases}>
          {resultsData.miniCases.map((caseItem, index) => (
            <div key={index} className={styles.case}>
              <h3>{caseItem.title}</h3>
              <p>
                <strong>Goal:</strong> {caseItem.goal}
              </p>
              <p>
                <strong>Approach:</strong> {caseItem.approach}
              </p>
              <p>
                <strong>Result:</strong> {caseItem.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
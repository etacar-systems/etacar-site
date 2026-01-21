import React from 'react';

import styles from './AIStrategy.module.scss';
import { points } from './data';
import ServiceDetail from '../ServiceDetail';

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id={'ai_strategy_architecture'}
      title={'AI Strategy & Architecture'}
      subtitle={'Architecting Al systems for strategic decisions under uncertainty.'}
      text={
        <>
          This service focuses on framing the right problems, defining constraints, and designing Al architectures that
          remain reliable over time. The outcome is not an Al roadmap, but a <em>decision architecture</em>.
        </>
      }
      content={
        <ul className={styles.list}>
          {points.map((point, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.bullet}>●</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      }
    />
  );
};

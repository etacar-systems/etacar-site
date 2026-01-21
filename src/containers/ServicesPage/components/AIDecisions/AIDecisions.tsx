import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { cards } from './data';
import styles from './AIDecisions.module.scss';

export const AIDecisions: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_decisions_operations'}
      title={'Al for Decisions & Operations'}
      subtitle={'Core Capabilities'}
      subtitleInDivider
      content={
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      }
    />
  );
};

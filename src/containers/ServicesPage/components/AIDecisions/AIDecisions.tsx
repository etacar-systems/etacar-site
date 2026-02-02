import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { cards } from './data';
import { Divider } from '@/components/Divider';
import styles from './AIDecisions.module.scss';

export const AIDecisions: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_decisions_operations'}
      title={'AI for Decisions & Operations'}
      subtitle={<>Structured decision execution under uncertainty.</>}
      text={
        <>
          Operations fail when <strong>decisions, assumptions, and execution drift apart over time</strong>.<br></br>
          We apply AI to ensure decisions remain <strong>explicit, reviewable, and connected to action</strong>,
          preserving context and managing uncertainty as conditions change.
        </>
      }
      content={
        <>
          <Divider title={'Core Capabilities'} />
          <div className={styles.grid}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <div className={styles.content}>
                  <div className={styles.subtitle}>{card.subtitle}</div>
                  <Divider />
                  {card.content}
                </div>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
};

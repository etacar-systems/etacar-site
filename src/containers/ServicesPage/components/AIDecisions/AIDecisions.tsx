import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { cards } from './data';
import { Divider } from '@/components/Divider';
import styles from './AIDecisions.module.scss';
import { List } from '@/components/List';

const appliedOptions = [
  'Operational decision support',
  'Risk-aware prioritization',
  'Scenario analysis and decision traceability (inputs, assumptions, outcomes)',
];

const outcomes = [
  'More consistent and defensible decisions',
  'Reduced exposure to critical operational and regulatory errors',
];

export const AIDecisions: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_decisions_operations'}
      title={'AI for Decisions & Operations'}
      subtitle={
        <>
          <strong>Structured execution</strong> under uncertainty.
        </>
      }
      text={
        <>
          This service focuses on decisions that have financial, operational, or regulatory consequences — where errors
          matter and accountability is required. We use AI to keep decisions <strong>explicit and reviewable</strong>, ensuring they
          stay <strong>connected to action</strong> as conditions change.
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
          <Divider title={'Applied to'} />
          <List options={appliedOptions} />
          <Divider title={'Outcomes'} />
          <List options={outcomes} />
        </>
      }
    />
  );
};

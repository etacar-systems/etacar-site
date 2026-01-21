import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { cards } from './data';
import { Divider } from '@/components/Divider';
import styles from './AIDecisions.module.scss';

export const AIDecisions: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_decisions_operations'}
      title={'Al for Decisions & Operations'}
      subtitle={
        <>
          Building <strong>decision-centric AI systems</strong> that reliably drive operations.
        </>
      }
      text={
        <>
          Organizations execute operations without a clear link to <strong>explicit decisions</strong>, leading to
          inconsistency, hidden risk, and loss of accountability.<br></br>
          We design AI systems that connect <strong>decisions to execution</strong>, preserving context, surfacing
          uncertainty, and ensuring operational actions remain governed and traceable over time.
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
                  <div style={{ textAlign: 'center' }}>{card.subtitle}</div>
                  <Divider />
                  <div>
                    <h3 className={styles.sectionTitle}>Best for:</h3>
                    <p className={styles.text}>{card.bestFor}</p>
                  </div>
                  <div>
                    <h3 className={styles.sectionTitle}>Problem we solve:</h3>
                    <p className={styles.text}>{card.problemWeSolve}</p>
                  </div>
                  <div>
                    <h3 className={styles.sectionTitle}>What we deliver:</h3>
                    <p className={styles.text}>{card.whatWeDeliver}</p>
                  </div>
                  <div>
                    <h3 className={styles.sectionTitle}>Example KPIs:</h3>
                    <p className={styles.text}>{card.exampleKPI}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
};

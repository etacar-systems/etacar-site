import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const options = [
    <>
      Leaders accountable for <strong>risk, compliance, and governance</strong>
    </>,
    <>
      Operators responsible for <strong>reliable business outcomes</strong>
    </>,
    <>
      Architects designing <strong>systems that must last</strong>
    </>,
    <>
      Engineers shipping <strong>production-grade AI</strong>
    </>,
  ];

  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>Who This Is Built For</h2>

        <p className={styles.intro}>
          For teams accountable for <strong>business-critical decisions</strong> — where outcomes must be measurable and
          systems must be <strong>governed</strong>.
        </p>

        <Card
          content={
            <div className={styles.caseResult}>
              <ul className={styles.list}>
                {options.map((option, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.bullet}>●</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <div>
                If AI decisions affect customers, revenue, or regulation — you need infrastructure, not an assistant.
              </div>
            </div>
          }
          title={'Built for teams where AI decisions can’t fail silently'}
        />
      </div>
    </SectionWrapper>
  );
};

export default WhoWeWorkWith;

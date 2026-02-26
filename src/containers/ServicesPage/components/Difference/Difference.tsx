import classNames from 'classnames';

import { FiCheckCircle, FiLoader } from 'react-icons/fi';

import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './Difference.module.scss';

const DIFFERENCE_ROWS = [
  {
    id: 'approach',
    generic: 'Model-first approach',
    systems: 'Decision-first architecture',
  },
  {
    id: 'governance',
    generic: 'Governance added later',
    systems: 'Governance embedded at design stage',
  },
  {
    id: 'reasoning',
    generic: 'Black-box reasoning',
    systems: 'Structured and traceable logic',
  },
  {
    id: 'focus',
    generic: 'Pilot focus',
    systems: 'Production focus',
  },
] as const;

export const Difference = () => {
  return (
    <SectionWrapper id='difference'>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why this is different</h2>
        </div>

        <div className={styles.differenceTable} role='table' aria-label='Comparison of approaches'>
          <div className={styles.differenceRow} role='row'>
            <div
              role='columnheader'
              className={classNames(styles.differenceCard, styles.differenceCardHeader, styles.differenceCardGeneric)}
            >
              <FiLoader />
              <span>Generic AI Integration</span>
            </div>

            <Card
              className={styles.differenceCardActive}
              content={
                <div className={styles.mainCardHeader}>
                  <FiCheckCircle />
                  <span>EtaCar Systems</span>
                </div>
              }
            />
          </div>

          {DIFFERENCE_ROWS.map(row => (
            <div key={row.id} className={styles.differenceRow} role='row'>
              <div role='cell' className={classNames(styles.differenceCard, styles.differenceCardGeneric)}>
                {row.generic}
              </div>
              <Card className={styles.differenceCardActive} content={row.systems} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

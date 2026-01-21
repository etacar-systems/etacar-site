import { Fragment } from 'react';

import { FaArrowDown } from 'react-icons/fa';

import { SectionWrapper } from '@/components/SectionWrapper';
import { cards } from './data';
import styles from './HowWork.module.scss';


export const HowWork = () => {
  return (
    <SectionWrapper id={'how_work'} className={styles.section}>
      <h2 className={styles.title}>{'How These Services Work Together'}</h2>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Fragment key={index}>
            <FaArrowDown />
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{card}</h3>
            </div>
          </Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
};

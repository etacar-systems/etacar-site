import { Link } from 'react-router-dom';
import { CONTACT } from '../../../../../routes';
import styles from './WhatWeDoCard.module.scss';

interface WhatWeDoCardProps {
  title: string;
  description: string;
  cta: string;
}

export const WhatWeDoCard = ({ title, description, cta }: WhatWeDoCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          <i>{description}</i>
        </p>

        <Link className={styles.cta} to={CONTACT}>
          {cta} →
        </Link>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './InfoCard.module.scss';

type InfoCardProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({ title, children, className, ...rest }) => {
  return (
    <div className={`${styles.card} ${className || ''}`} role="group" {...rest}>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default InfoCard;

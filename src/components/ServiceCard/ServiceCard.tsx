import classNames from 'classnames';
import React from 'react';
import { FadeCard } from '../FadeCard';
import styles from './ServiceCard.module.scss';

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, icon, className }) => {
  return (
    <FadeCard className={classNames(styles.card, className)}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </FadeCard>
  );
};

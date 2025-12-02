import React from 'react';
import classNames from 'classnames';
import styles from './ServiceCard.module.scss';

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  icon,
  className,
}) => {
  return (
    <a href={href} className={classNames(styles.card, className)}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.arrow}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
};

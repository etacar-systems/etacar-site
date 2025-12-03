import classNames from 'classnames';
import React from 'react';
import styles from './FadeCard.module.scss';

export interface FadeCardProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeCard: React.FC<FadeCardProps> = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};

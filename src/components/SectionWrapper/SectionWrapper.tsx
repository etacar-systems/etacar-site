import classNames from 'classnames';
import React from 'react';
import styles from './SectionWrapper.module.scss';

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'dark' | 'light';
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, variant = 'default', id }) => {
  return (
    <section id={id} className={classNames(styles.section, styles[variant], className)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

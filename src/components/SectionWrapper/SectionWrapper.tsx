import classNames from 'classnames';
import React from 'react';
import styles from './SectionWrapper.module.scss';

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={classNames(styles.section, className)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

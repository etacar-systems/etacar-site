import { ReactNode } from 'react';

import styles from './List.module.scss';
import classNames from 'classnames';

type ListProps = {
  className?: string;
  options: Array<ReactNode>;
};

export const List = ({ className, options }: ListProps) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {options.map((item, idx) => (
        <li key={idx} className={styles.listItem}>
          <span className={styles.bullet}>●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

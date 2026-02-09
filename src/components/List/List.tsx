import { ReactNode } from 'react';

import styles from './List.module.scss';

type ListProps = {
  options: Array<ReactNode>;
};

export const List = ({ options }: ListProps) => {
  return (
    <ul className={styles.list}>
      {options.map((item, idx) => (
        <li key={idx} className={styles.listItem}>
          <span className={styles.bullet}>●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

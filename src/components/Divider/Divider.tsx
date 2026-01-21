import { ReactNode } from 'react';
import { Divider as AntdDivider } from 'antd';

import styles from './Divider.module.scss';

type DividerProps = {
  title?: ReactNode;
};

export const Divider = ({ title }: DividerProps) => {
  return (
    <AntdDivider className={styles.divider} data-has-title={!!title}>
      {title}
    </AntdDivider>
  );
};

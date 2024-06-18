import React from 'react';

import style from './Tag.module.scss';

interface TagProps {
  title: string;
  type: 'light' | 'blue';
}

export const Tag = ({ title, type }: TagProps) => {
  return (
    <div className={style.tag} data-theme={type}>
      {title}
    </div>
  );
};

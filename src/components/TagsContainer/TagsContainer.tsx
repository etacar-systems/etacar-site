import React from 'react';

import style from './TagsContainer.module.scss';
import { Tag } from '../Tag';

interface TagsContainerProps {
  tags: string[];
  type: 'light' | 'blue';
}

export const TagsContainer = ({ tags, type }: TagsContainerProps) => {
  return (
    <div className={style.container}>
      {tags.map(tag => (
        <Tag title={tag} type={type} />
      ))}
    </div>
  );
};

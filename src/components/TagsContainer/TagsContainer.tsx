import React from 'react';

import style from './TagsContainer.module.scss';
import { Tag } from '../Tag';

interface TagsContainerProps {
  tags: string[];
  type: 'light' | 'blue';
  quantity?: number;
}

export const TagsContainer = ({ tags, type, quantity }: TagsContainerProps) => {
  const tagsToRender = quantity ? tags.slice(0, quantity) : tags;
  return (
    <div className={style.container}>
      {tagsToRender.map((tag, index) => (
        <Tag key={index} title={tag} type={type} />
      ))}
    </div>
  );
};

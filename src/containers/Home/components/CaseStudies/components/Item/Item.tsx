import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TagsContainer } from '../../../../../../components/TagsContainer';
import { Button } from '../../../../../../components/Button';
import { CASE_STUDY } from '../../../../../../routes';
import { Navigation } from '../../../../../../components/Navigation';
import style from './Item.module.scss';
import { useViewportSize } from '../../../../../../hooks/useViewportSize';

interface ItemProps {
  image: string;
  paragraphs: string[];
  tags: string[];
  title: string;
}

export const Item = ({ image, paragraphs, tags, title }: ItemProps) => {
  const navigate = useNavigate();
  const { width } = useViewportSize();

  return (
    <div className={style.container}>
      <div className={style.outer}>
        <Navigation arrowColor={'dark'} />
        <div className={style.inner}>
          <div className={style.title}>{title}</div>
          <TagsContainer tags={tags} type={'light'} />
          <div>
            {paragraphs.map(paragraph => (
              <p className={style.paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {width > 768 ? (
          <Button icon onClick={() => navigate(CASE_STUDY)} title={'All cases'} type={'ghost'} />
        ) : undefined}
      </div>
      <div className={style.image}>
        <img src={image} alt={`${title}_icon`} />
      </div>
      {width < 768 ? (
        <Button icon onClick={() => navigate(CASE_STUDY)} title={'All cases'} type={'ghost'} />
      ) : undefined}
    </div>
  );
};

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  keyTags: string[] | undefined;
  title: string;
}

export const Item = ({ image, paragraphs, tags, title, keyTags }: ItemProps) => {
  const navigate = useNavigate();
  const { width } = useViewportSize();

  const TAGS_TO_DISPLAY = 5;

  return (
    <div className={style.container}>
      <div className={style.outer}>
        <div className={style.navigation}>
          <Navigation arrowColor={'dark'} />
        </div>
        <div className={style.inner}>
          <div className={style.title}>{title}</div>
          <Link to='/case-study' state={keyTags} className={style.link}>
            <span>{keyTags ? keyTags[1] : undefined} </span>
            <span> / </span>
            <span>{keyTags ? keyTags[0] : undefined}</span>
          </Link>
          <div>
            {paragraphs.map(paragraph => (
              <p className={style.paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <TagsContainer quantity={TAGS_TO_DISPLAY} tags={tags} type={'light'} />
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

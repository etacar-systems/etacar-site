import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CASE_STUDY } from '../../../../../../routes';

import style from './Item.module.scss';
import Button from '../../../../../../shared/ui/Button/Button';
import {Navigation} from '../../../../../../components/Navigation';
import {TagsContainer} from '../../../../../../components/TagsContainer';


interface ItemProps {
  image: string;
  paragraphs: string[];
  tags: string[];
  title: string;
}

export const Item = ({ image, paragraphs, tags, title }: ItemProps) => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.outer}>
        <Navigation />
        <div className={style.inner}>
          <div className={style.title}>{title}</div>
          <TagsContainer tags={tags} type={'light'} />
          <div>
            {paragraphs.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
        <Button icon onClick={() => navigate(CASE_STUDY)} text={'All cases'} variant={'iconButton'} />
      </div>
      <div className={style.image}>
        <img src={image} alt={`${title}_icon`} />
      </div>
    </div>
  );
};

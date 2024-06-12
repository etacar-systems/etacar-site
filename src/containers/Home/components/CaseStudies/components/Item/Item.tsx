import React from 'react';

import blackArrowIcon from '../../../../../../assets/icons/blackArrow.svg';

import { TagsContainer } from '../../../../../../components/TagsContainer';
import style from './Item.module.scss';

interface ItemProps {
  description: string;
  image: string;
  tags: string[];
  title: string;
}

export const Item = ({ description, image, tags, title }: ItemProps) => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div>
          <img src={blackArrowIcon} alt='' id='swiper-back' />
          <img src={blackArrowIcon} alt='' id='swiper-forward' />
        </div>
        <div className={style.title}>{title}</div>
        <TagsContainer tags={tags} type={'light'} />
        <div>{description}</div>
      </div>
      <div className={style.image}>
        <img src={image} alt={`${title}_icon`} />
      </div>
    </div>
  );
};

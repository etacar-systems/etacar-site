import React from 'react';
import { Button } from '../../../../../../components/Button';

import { TagsContainer } from '../../../../../../components/TagsContainer';
import style from './Item.module.scss';

interface ItemProps {
  image: string;
  paragraphs: string[];
  tags: string[];
  title: string;
  orderReverse: "true" | "false";
  index: number;
}

export const Item = ({ image, paragraphs, tags, title, orderReverse, index }: ItemProps) => {

  return (
    <>
    {index === 2
    ? <div className={style.getStarted}>
        <div className={style.textContainer}>
          <div className={style.title}>Will your idea be next?</div>
          <div>Get a free project estimation</div>
        </div>
        <div>
          <Button type='solid' title='Get started' icon={true} onClick={() => {}}/>
        </div>
      </div>
    : undefined}
    <div order-reverse={orderReverse} className={style.container}>
      <div className={style.outer}>
        <div className={style.inner}>
          <div className={style.title}>{title}</div>
          <div>
            {paragraphs.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
        <TagsContainer tags={tags} type={'blue'} />
      </div>
      <div className={style.image}>
        <img src={image} alt={`${title}_icon`} />
      </div>
    </div>
    </>
  );
};

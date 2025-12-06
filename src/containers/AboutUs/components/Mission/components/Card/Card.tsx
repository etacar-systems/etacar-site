'use client';

import style from './Card.module.scss';

interface CardProps {
  description?: string;
  src?: string;
  title?: string;
}

export const Card = ({ description, src, title }: CardProps) => {
  return (
    <div className={style.container}>
      {src ? (
        <img src={src} alt={'icon'} />
      ) : (
        <>
          <div className={style.title}>{title}</div>
          <div>{description}</div>
        </>
      )}
    </div>
  );
};

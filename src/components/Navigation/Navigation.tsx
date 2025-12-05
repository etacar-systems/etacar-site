'use client';

import classNames from 'classnames';

import style from './Navigation.module.scss';

type NavigationProps = {
  arrowColor?: 'light' | 'dark';
};

export const Navigation = ({ arrowColor = 'light' }: NavigationProps) => {
  const arrowImg = arrowColor === 'light' ? '/icons/arrow.svg' : '/icons/blackArrow.svg';
  return (
    <div className={style.container}>
      <img
        className={classNames({
          [style.button]: true,
          [style.backButton]: true,
        })}
        src={arrowImg}
        alt='back_icon'
        id='swiper-back'
      />
      <img className={style.button} src={arrowImg} alt='next_icon' id='swiper-forward' />
    </div>
  );
};

import React from 'react';

import blackArrowIcon from '../../assets/icons/blackArrow.svg';
import whiteArrowIcon from '../../assets/icons/arrow.svg';

import style from './Navigation.module.scss';
import classNames from 'classnames';

type NavigationProps = {
  arrowColor?: 'light' | 'dark';
};

export const Navigation = ({ arrowColor = 'light' }: NavigationProps) => {
  const arrowImg = arrowColor === 'light' ? whiteArrowIcon : blackArrowIcon;
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

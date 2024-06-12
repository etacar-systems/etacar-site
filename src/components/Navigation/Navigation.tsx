import React from 'react';

import blackArrowIcon from '../../assets/icons/blackArrow.svg';

import style from './Navigation.module.scss';
import classNames from 'classnames';

export const Navigation = () => {
  return (
    <div className={style.container}>
      <img
        className={classNames({
          [style.button]: true,
          [style.backButton]: true,
        })}
        src={blackArrowIcon}
        alt='back_icon'
        id='swiper-back'
      />
      <img
        className={style.button}
        src={blackArrowIcon}
        alt='next_icon'
        id='swiper-forward'
      />
    </div>
  );
};

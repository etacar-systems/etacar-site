import React from 'react';

import arrowIcon from '../../assets/icons/arrow.svg';

import style from './Button.module.scss';

interface ButtonProps {
  fullWidth?: boolean;
  onClick: () => void;
  icon?: boolean;
  title: string;
  type: 'bordered' | 'ghost' | 'solid';
}

export const Button = ({ fullWidth = false, onClick, icon, title, type }: ButtonProps) => {
  return (
    <button
      className={`${style.button} ${type ? style[`button__${type}`] : ''}`}
      data-full-width={fullWidth}
      onClick={onClick}
    >
      {title}
      {icon && <img src={arrowIcon} alt={'arrow'} />}
    </button>
  );
};

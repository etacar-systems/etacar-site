import React from 'react';

import style from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  icon?: boolean;
  title: string
}

export const Button = ({ onClick, icon, title }: ButtonProps) => {
  return (
    <button className={style.button} onClick={onClick}>
      {title}
      {icon && <img  />}
    </button>
  );
};

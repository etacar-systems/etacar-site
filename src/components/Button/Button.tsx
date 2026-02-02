import { ReactElement } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  fullWidth?: boolean;
  onClick: () => void;
  icon?: boolean;
  size?: 'large' | 'medium' | 'small';
  title: string;
  type: 'bordered' | 'ghost' | 'solid';
}

export const Button = ({
  fullWidth = false,
  onClick,
  icon,
  size = 'large',
  title,
  type,
}: ButtonProps): ReactElement => {
  return (
    <button
      className={`${style.button} ${type ? style[`button__${type}`] : ''}`}
      data-full-width={fullWidth}
      data-size={size}
      onClick={onClick}
    >
      {title}
      {icon && <img src='/icons/arrow.svg' alt={'arrow'} />}
    </button>
  );
};

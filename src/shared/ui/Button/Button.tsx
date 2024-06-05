import React from 'react';
import '../../styles/_all.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'default' | 'stroke' | 'link' | 'menu';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    size?: 'default' | 'big';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'default',
  disabled = false,
  type = 'button',
  size = 'default'
}) => {
  const className = `button ${variant} ${size}`;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

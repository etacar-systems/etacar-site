import React from 'react';
import '../../styles/_all.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'default' | 'stroke' | 'link' | 'menu' | 'iconButton' | 'new';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    size?: 'default' | 'big';
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'default',
  disabled = false,
  type = 'button',
  size = 'default',
  icon
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
      {icon}
    </button>
  );
};

export default Button;

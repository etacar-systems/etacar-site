import classNames from 'classnames';
import style from './Input.module.scss';

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  theme?: 'light' | 'dark';
}

export const Input = ({ label, type, placeholder, theme = 'light' }: InputProps) => {
  return (
    <div className={style.input_container}>
      <label data-theme={theme === 'dark' ? true : false} className={style.input_label}>
        {label}
      </label>
      <input className={style.input} type={type} placeholder={placeholder} required />
    </div>
  );
};

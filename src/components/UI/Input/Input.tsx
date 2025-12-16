import style from './Input.module.scss';

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  theme?: 'light' | 'dark';

  name?: string;
}

export const Input = ({ label, type, required, placeholder, name, theme = 'light' }: InputProps) => {
  return (
    <div className={style.input_container}>
      <label data-theme={theme === 'dark' ? true : false} className={style.input_label}>
        {label}
      </label>
      <input
        data-theme={theme === 'dark' ? true : false}
        name={name}
        className={style.input}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

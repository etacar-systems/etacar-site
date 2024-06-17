import style from './Input.module.scss';

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export const Input = ({label, type, placeholder}:InputProps) => {
  return (
    <div className={style.input_container}>
      <label className={style.input_label}>{label}</label>
      <input className={style.input} type={type} placeholder={placeholder} required/>
    </div>
  )
}
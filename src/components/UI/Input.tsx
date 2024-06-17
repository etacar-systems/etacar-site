import style from './Input.module.scss';

interface InputProps {
  label?: string;
  type: string;
  value?: string;
  required?: boolean;
}

export const Input = ({label, type, value}:InputProps) => {
  return (
    <div className={style.input_container}>
      <label className={style.input_label}>{label}</label>
      <input className={style.input} type={type} value={value} required/>
    </div>
  )
}
import React from 'react';
import styles from './Field.module.scss';

interface FieldProps {
    value: string,
    onChange: (value: string) => void,
    placeholder: string,
    variant?: 'default' | 'grey' | 'big' | 'bigGrey',
    label: string
}

const Field: React.FC<FieldProps> = ({value, onChange, placeholder, variant = 'default', label}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  let inputClass;
  let fieldClass;
  let labelClass;

  switch (variant) {
    case 'grey':
      inputClass = styles.grey;
      fieldClass = styles.fieldBase;
      labelClass = styles.labelOther;
      break;
    case 'big':
      inputClass = styles.inputBig;
      fieldClass = styles.fieldOther;
      labelClass = styles.labelBase;
      break;
    case 'bigGrey':
      inputClass = styles.bigGreyInput;
      fieldClass = styles.fieldOther;
      labelClass = styles.labelOther;
      break;
    default:
      inputClass = styles.input;
      fieldClass = styles.fieldBase;
      labelClass = styles.labelBase;
  }

  return (
    <div className={fieldClass}>
      <label className={labelClass}>{label}</label>
      <input
        className={inputClass}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;

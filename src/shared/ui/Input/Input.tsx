import React from 'react';
import styles from './Input.module.scss';

interface FieldProps {
    value: string,
    onChange: (value: string) => void,
    placeholder: string,
    variant?: 'default' | 'grey' | 'alternative' | 'bigGreyInput',
}

const Field: React.FC<FieldProps> = ({value, onChange, placeholder, variant = 'default'}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  let inputClass;
  switch (variant) {
    case 'grey':
      inputClass = styles.grey;
      break;
    case 'alternative':
      inputClass = styles.inputAlternative;
      break;
    case 'bigGreyInput':
      inputClass = styles.bigGreyInput;
      break;
    default:
      inputClass = styles.input;
  }

  return (
    <input
      className={inputClass}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Field;

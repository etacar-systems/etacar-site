import styles from './ContactForm.module.scss';
import {useState} from 'react';

import Field from '../../shared/ui/Input/Field';

export function ContactForm() {

  const [text, setText] = useState('');

  const handleInputChange = (value: string) => {
    setText(value);
  };
  return (
    <form className={styles.form}>

      <Field value={text} variant={'default'} onChange={handleInputChange} placeholder='John Smith'
        label={'Name'}/>
    </form>
  );
}

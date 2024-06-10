import styles from './ContactForm.module.scss';
import {useState} from 'react';
import Input from '../../shared/ui/Input/Input';

export function ContactForm() {

  const [text, setText] = useState('');

  const handleInputChange = (value: string) => {
    setText(value);
  };
  return (
    <form className={styles.form}>

      <Input value={text} onChange={handleInputChange} placeholder='John Smith' variant={'bigGreyInput'}/>
    </form>
  );
}

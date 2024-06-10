import styles from './ContactForm.module.scss';
import {useState} from 'react';

import Button from '../../shared/ui/Button/Button';
import Tag from '../../shared/ui/Tag/Tag';
import Field from '../../shared/ui/Field/Field';
import {ClipIcon} from '../../shared/ui/icons';
import Checkbox from '../../shared/ui/CheckBox/CheckBox';

export function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [convenientTime, setConvenientTime] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (value: string) => {
    setFullName(value);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleConvenientTimeChange = (value: string) => {
    setConvenientTime(value);
  };

  const handleCompanyNameChange = (value: string) => {
    setCompanyName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleServiceChange = (value: string) => {
    setService(value);
  };
  const handleMessageChange = (value: string) => {
    setMessage(value);
  };

  return (
    <form className={styles.form}>

      <div className={styles.fieldsBlock}>
        <div className={styles.fields}>
          <Field value={fullName} status={'important'} variant={'default'} onChange={handleFullNameChange}
            placeholder='John Smith'
            label={'Full Name'}/>
          <Field value={phoneNumber} status={'important'} variant={'default'}
            onChange={handlePhoneNumberChange}
            placeholder='+1 (831) 333-6202' label={'Phone Number'}/>
          <Field value={convenientTime} variant={'default'} onChange={handleConvenientTimeChange}
            placeholder='Month/Day/Time' label={'Convenient time for contact'}/>
        </div>

        <div className={styles.fields}>
          <Field value={companyName} variant={'default'} onChange={handleCompanyNameChange}
            placeholder='IT Company' label={'Company Name'}/>
          <Field value={email} status={'important'} variant={'default'} onChange={handleEmailChange}
            placeholder='Example@gmail.com' label={'Email'}/>
          <Field value={service} variant={'default'} onChange={handleServiceChange}
            placeholder='Development/Design' label={'Service'}/>
        </div>
      </div>
      <div className={styles.block}>
        <h4>
            Expected Budget
        </h4>
        <div className={styles.price}>
          <Tag variant={'new'} text={'Up to $25k'}/>
          <Tag variant={'new'} text={'$25k – $50k'}/>
          <Tag variant={'new'} text={'$50k – $100k'}/>
          <Tag variant={'new'} text={'Over $100k'}/>
        </div>
      </div>
      <Field value={message} variant={'big'} onChange={handleMessageChange}
        placeholder='Message' label={'Tell us more about the project'}/>

      <div className={styles.block}>
        <h4>
            Attached
        </h4>
        <Button variant={'addFile'} icon={<ClipIcon/>} onClick={() => {
          console.log('добавить файл');
        }}/>
      </div>


      <div className={styles.bottomBlock}>

        <div className={styles.block}>
          <div className={styles.check}>
            <Checkbox/>
            <div>Do you need an NDA first?</div>
          </div>
          <div className={styles.check}>
            <Checkbox/>
            <div>I agree with Terms of use and Privacy policy</div>
          </div>
        </div>

        <Button text={'Get estimation'} onClick={() => {
        }}/>
      </div>

    </form>
  );
}

import React from 'react';

import colton from '../../../../assets/images/ContactUs/colton_bollinger.png';
import { Input } from '../../../../components/UI/Input';
import style from './ContactForm.module.scss';
import { Button } from '../../../../components/Button';
import linkArrow from '../../../../assets/icons/linkArrow.svg';

export const ContactForm = () => {
  return (
    <div className={style.container}>
      <div className={style.contact_form_wrapper}>
        <div className={style.photo}>
          <img src={colton} alt='Colton Bollinger' />
        </div>
        <div className={style.form_wrapper}>
          <div className={style.form}>
            <div className={style.form_row}>
              <Input type='text' label='Full Name*' placeholder='John Smith' theme={'dark'} />
              <Input type='text' label='Company Name' placeholder='IT Company' theme={'dark'} />
            </div>
            <div className={style.form_row}>
              <Input type='text' label='Phone number' placeholder='+1 (831) 333-6202' required theme={'dark'} />
              <Input type='text' label='Email*' required placeholder='Example@gmail.com'  theme={'dark'} />
            </div>
            <textarea className={style.textarea} placeholder='Message'></textarea>
            <Button onClick={() => {}} title={'Send request'} type={'ghost'} />
          </div>
          <div className={style.contacts}>
            <div className={style.left_section}>
              <div className={style.title}>Contacts</div>
              <div className={style.info}>
                <div className={style.info__text}>info@etacar.io</div>
                <div className={style.info__text}>+1 (831) 333-6202</div>
                <div className={style.linkGetInTouch}>
                  <div className={style.getInTouch}>
                    <a target='_blank' href='mailto:info@etacar.io'>
                      Get in touch
                    </a>
                  </div>
                  <div className={style.linkIcon}>
                    <img className={style.linkArrow} src={linkArrow} alt='link arrow' />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.right_section}>
              <div className={style.title}>Address</div>
              <div className={style.info}>
                <div className={style.info__text}>313 Pasadera Court, Monterey,</div>
                <div className={style.info__text}>California 93940</div>
                <div className={style.linkGoogleMap}>
                <div className={style.googleMap}>
                  <a target='_blank' href='https://maps.app.goo.gl/38kmmrR4fv51q8XE9'>
                    Google map
                  </a>
                </div>
                <div className={style.linkIcon}>
                  <img className={style.linkArrow} src={linkArrow} alt='link arrow' />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

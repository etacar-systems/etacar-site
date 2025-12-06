'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../../../../components/Button';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Input } from '../../../../components/UI/Input';
import style from './ContactForm.module.scss';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvgpoazd');

  if (state.succeeded) {
    return (
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.successWrapper}>
            <div className={style.successIcon}>
              <svg width='64' height='64' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22 4L12 14.01L9 11.01'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h2 className={style.successTitle}>Thank You!</h2>
            <p className={style.successMessage}>
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <SectionWrapper variant='gradient'>
      <div className={style.container}>
        <div className={style.formHeader}>
          <h2 className={style.formTitle}>Send Us a Message</h2>
          <p className={style.formSubtitle}>
            Fill out the form below and we'll respond within 24 hours. All fields marked with * are required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formGrid}>
            <div className={style.formField}>
              <Input name='fullName' type='text' label='Full Name*' placeholder='John Smith' theme={'dark'} required />
              <ValidationError prefix='Full Name' field='fullName' errors={state.errors} />
            </div>

            <div className={style.formField}>
              <Input
                name='companyName'
                type='text'
                label='Company Name'
                placeholder='Your Company'
                theme={'dark'}
                required={false}
              />
              <ValidationError prefix='Company Name' field='companyName' errors={state.errors} />
            </div>

            <div className={style.formField}>
              <Input
                name='email'
                type='email'
                label='Email*'
                required
                placeholder='example@company.com'
                theme={'dark'}
              />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>

            <div className={style.formField}>
              <Input name='phone' type='phone' label='Phone Number' placeholder='+1 (831) 333-6202' theme={'dark'} />
              <ValidationError prefix='Phone' field='phone' errors={state.errors} />
            </div>
          </div>

          <div className={style.formField}>
            <label htmlFor='message' className={style.textareaLabel}>
              Message*
            </label>
            <textarea
              id='message'
              minLength={10}
              required
              name='message'
              className={style.textarea}
              placeholder='Tell us about your project, challenges, or questions...'
              rows={6}
            />
            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </div>

          <div className={style.formActions}>
            <Button onClick={() => {}} title={state.submitting ? 'Sending...' : 'Send Message'} type={'solid'} />
            <p className={style.privacyNote}>
              By submitting this form, you agree to our privacy policy. We'll never share your information.
            </p>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

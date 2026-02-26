import { motion, type Variants } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../../../../components/Button';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { Input } from '../../../../components/UI/Input';
import { Select } from '../../../../components/UI/Select';
import style from './ContactForm.module.scss';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fieldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const successVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1] as const,
      delay: 0.2,
    },
  },
};

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvgpoazd');

  if (state.succeeded) {
    return (
      <section className={style.section}>
        {/* Background gradient effect */}
        <div className={style.backgroundGradient} />

        <div className={style.container}>
          <motion.div
            className={style.successWrapper}
            variants={successVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className={style.successIcon} variants={iconVariants}>
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
            </motion.div>
            <motion.h2 className={style.successTitle} variants={successVariants}>
              Thank You!
            </motion.h2>
            <motion.p className={style.successMessage} variants={successVariants}>
              We've received your message and will get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <SectionWrapper>
      {/* Background gradient effect */}
      <div className={style.backgroundGradient} />

      <div className={style.container}>
        <motion.div className={style.formHeader} variants={headerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className={style.formTitle}>Discuss results for your context</h2>
          <p className={style.formSubtitle}>
            Share the <strong>use case, process, or KPI</strong> you're exploring.
            We'll respond with a focused discussion on applicability and outcomes.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className={style.form}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className={style.formGrid} variants={containerVariants}>
            <motion.div className={style.formField} variants={fieldVariants}>
              <Input name='fullName' type='text' label='Full Name*' placeholder='John Smith' theme={'dark'} required />
              <ValidationError prefix='Full Name' field='fullName' errors={state.errors} />
            </motion.div>

            <motion.div className={style.formField} variants={fieldVariants}>
              <Input
                name='companyName'
                type='text'
                label='Company Name*'
                placeholder='Your Company'
                theme={'dark'}
                required
              />
              <ValidationError prefix='Company Name' field='companyName' errors={state.errors} />
            </motion.div>

            <motion.div className={style.formField} variants={fieldVariants}>
              <Input
                name='email'
                type='email'
                label='Email*'
                required
                placeholder='example@company.com'
                theme={'dark'}
              />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </motion.div>

            <motion.div className={style.formField} variants={fieldVariants}>
              <Select
                name='lookingFor'
                label='What are you looking for?'
                options={[
                  { label: 'Strategy', value: 'Strategy' },
                  { label: 'Implementation', value: 'Implementation' },
                  { label: 'Governance', value: 'Governance' },
                  { label: 'Other', value: 'Other' },
                ]}
                theme={'dark'}
              />
              <ValidationError prefix='What are you looking for' field='lookingFor' errors={state.errors} />
            </motion.div>
          </motion.div>

          <motion.div className={style.formField} variants={fieldVariants}>
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
          </motion.div>

          <motion.div className={style.formActions} variants={fieldVariants}>
            <Button
              onClick={() => {}}
              title={state.submitting ? 'Scheduling...' : 'Schedule a 30-Minute Call'}
              type={'solid'}
            />
            <p className={style.privacyNote}>
              By submitting this form, you agree to our privacy policy. We'll never share your information.
            </p>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

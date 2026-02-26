import { motion, type Variants } from 'framer-motion';
import styles from './ContactInfo.module.scss';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.2,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
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

export const ContactInfo: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Background gradient effect */}
      <div className={styles.backgroundGradient} />

      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          How we engage
        </motion.h2>

        <motion.div
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Email & Phone Card */}
          <motion.div className={styles.card} variants={cardVariants} whileHover={{ scale: 1.02 }}>
            <motion.div className={styles.cardIcon} variants={iconVariants}>
              <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22 6L12 13L2 6'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </motion.div>
            <motion.h3 className={styles.cardTitle} variants={itemVariants}>
              Contact Information
            </motion.h3>
            <motion.div className={styles.cardContent} variants={contentVariants}>
              <motion.p className={styles.infoText} variants={itemVariants}>
                <strong>Email:</strong>
                <br />
                <a className={styles.link} href='mailto:info@etacar.io' target='_blank' rel='noreferrer'>
                  info@etacar.io
                </a>
              </motion.p>
              <motion.p className={styles.infoText} variants={itemVariants}>
                <strong>Phone:</strong>
                <br />
                <a className={styles.link} href='tel:+1 (831) 333-6202' target='_blank' rel='noreferrer'>
                  +1 (831) 333-6202
                </a>
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Address Card */}
          <motion.div className={styles.card} variants={cardVariants} whileHover={{ scale: 1.02 }}>
            <motion.div className={styles.cardIcon} variants={iconVariants}>
              <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </motion.div>
            <motion.h3 className={styles.cardTitle} variants={itemVariants}>
              Office Location
            </motion.h3>
            <motion.div className={styles.cardContent} variants={contentVariants}>
              <motion.p className={styles.infoText} variants={itemVariants}>
                313 Pasadera Court
                <br />
                Monterey, California 93940
                <br />
                United States
              </motion.p>
              <motion.a
                href='https://maps.app.goo.gl/38kmmrR4fv51q8XE9'
                target='_blank'
                rel='noreferrer'
                className={styles.link}
                variants={itemVariants}
                whileHover={{ x: 6 }}
              >
                <span>View on Google Maps</span>
                <img src='/icons/linkArrow.svg' alt='arrow' className={styles.linkArrow} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Business Hours Card */}
          <motion.div className={styles.card} variants={cardVariants} whileHover={{ scale: 1.02 }}>
            <motion.div className={styles.cardIcon} variants={iconVariants}>
              <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 6V12L16 14'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </motion.div>
            <motion.h3 className={styles.cardTitle} variants={itemVariants}>
              Availability
            </motion.h3>
            <motion.div className={styles.cardContent} variants={contentVariants}>
              <motion.p className={styles.infoText} variants={itemVariants}>
                <strong>Response Time:</strong>
                <br />
                Within 24 hours
              </motion.p>
              <motion.p className={styles.infoText} variants={itemVariants}>
                <strong>Time Zone:</strong>
                <br />
                Pacific Time (PT)
              </motion.p>
              <motion.p className={styles.infoNote} variants={itemVariants}>
                We work with clients globally and accommodate different time zones for meetings.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;

import { motion, type Variants } from 'framer-motion';
import { FadeCard } from '@/components/FadeCard';
import styles from './Review.module.scss';

interface ItemProps {
  avatar: string;
  company: string;
  description: string;
  name: string;
  textColor?: 'light' | 'dark';
}

// Animation variants
const reviewVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const avatarVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
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

export const Review = ({ avatar, company, description, name, textColor }: ItemProps) => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={reviewVariants}
    >
      <FadeCard className={styles.review}>
        <motion.div className={styles.review_content} variants={contentVariants}>
          <motion.div className={styles.review_header} variants={itemVariants}>
            <motion.img
              alt='avatar'
              className={styles.avatar}
              src={avatar}
              variants={avatarVariants}
              whileHover={{ scale: 1.1 }}
            />
            <div className={styles.person}>
              <motion.div className={styles.name} data-text-color={textColor} variants={itemVariants}>
                {name}
              </motion.div>
              <motion.div className={styles.company} data-text-color={textColor} variants={itemVariants}>
                {company}
              </motion.div>
            </div>
          </motion.div>
          <motion.div className={styles.review_body} data-text-color={textColor} variants={itemVariants}>
            {description}
          </motion.div>
        </motion.div>
      </FadeCard>
    </motion.div>
  );
};

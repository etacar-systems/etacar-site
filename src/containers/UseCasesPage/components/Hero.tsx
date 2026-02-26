import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Background effects */}
        <div className={styles.backgroundGradient} />
        <div className={styles.glowEffect} />

        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Operational AI in <span className={styles.gradientText}>High-Stakes Environments</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Where AI decisions affect revenue, compliance, and safety — control is engineered, not assumed.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

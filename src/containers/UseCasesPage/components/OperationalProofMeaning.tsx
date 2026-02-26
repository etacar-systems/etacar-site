import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './OperationalProofMeaning.module.scss';

const principles = [
  'Defined decision logic',
  'Explicit risk boundaries',
  'Controlled escalation paths',
  'Audit-ready outputs',
];

const OperationalProofMeaning = () => {
  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.backgroundGradient} />

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className={styles.title}>
          From Use Case to <span className={styles.gradientText}>Operational Control</span>
        </h2>
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.text}>
          We don't present hypothetical scenarios.
          We engineer decision systems that operate under real constraints, real uncertainty, and real accountability.
        </p>

        <div className={styles.divider} />

        <p className={styles.intro}>
          Each deployment is structured around:
        </p>

        <div className={styles.grid}>
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
              <p className={styles.cardText}>{principle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default OperationalProofMeaning;

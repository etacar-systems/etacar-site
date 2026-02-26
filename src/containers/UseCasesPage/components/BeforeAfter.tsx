import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './BeforeAfter.module.scss';

const beforeItems = [
  'AI used as advisory layer',
  'Governance added reactively',
  'Decisions inconsistent across contexts',
  'Escalations unpredictable',
];

const afterItems = [
  'Risk thresholds defined upfront',
  'System behavior consistent',
  'Escalation structured and reviewable',
  'Decision logic formalized',
  'Encapsulation structured and reviewable',
];

const BeforeAfter = () => {
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
          Before / <span className={styles.gradientText}>After</span>
        </h2>
      </motion.div>

      <div className={styles.grid}>
        {/* Before Card */}
        <motion.div
          className={styles.cardBefore}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h3 className={styles.cardTitleBefore}>Before</h3>
          <ul className={styles.list}>
            {beforeItems.map((item, index) => (
              <li key={index}>
                <span className={styles.bulletBefore}>✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After Card */}
        <motion.div
          className={styles.cardAfter}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className={styles.cardTitleAfter}>After</h3>
          <ul className={styles.list}>
            {afterItems.map((item, index) => (
              <li key={index}>
                <span className={styles.bulletAfter}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default BeforeAfter;

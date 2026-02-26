import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './FlagshipOperationalCase.module.scss';

const FlagshipOperationalCase = () => {
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
          Case: <span className={styles.gradientText}>Decision Systems Under Uncertainty</span>
        </h2>
      </motion.div>

      <div className={styles.grid}>
        {/* Context Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h3 className={styles.cardTitle}>Context</h3>
          <div className={styles.cardContent}>
            <p>Complex operational environment.</p>
            <p>Incomplete information.</p>
            <p>High cost of inconsistency.</p>
          </div>
        </motion.div>

        {/* Risk Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className={styles.cardTitle}>Risk</h3>
          <ul className={styles.list}>
            <li>Operational volatility</li>
            <li>Regulatory exposure</li>
            <li>Escalation overload</li>
            <li>Inconsistent decisions across teams</li>
          </ul>
        </motion.div>

        {/* Engineering Approach Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className={styles.cardTitle}>Engineering Approach</h3>
          <ul className={styles.list}>
            <li>Structured decision mapping</li>
            <li>Explicit assumption modeling</li>
            <li>Embedded risk thresholds</li>
            <li>Traceable decision outputs</li>
          </ul>
        </motion.div>

        {/* Operational Result Card */}
        <motion.div
          className={styles.cardHighlight}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className={styles.cardTitleHighlight}>Operational Result</h3>
          <ul className={styles.listHighlight}>
            <li>
              <span className={styles.bulletHighlight}>✓</span>
              <span>Consistent decisions across scenarios</span>
            </li>
            <li>
              <span className={styles.bulletHighlight}>✓</span>
              <span>Reduced exposure to uncontrolled outcomes</span>
            </li>
            <li>
              <span className={styles.bulletHighlight}>✓</span>
              <span>Clear review and audit trail</span>
            </li>
            <li>
              <span className={styles.bulletHighlight}>✓</span>
              <span>Improved executive confidence</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FlagshipOperationalCase;

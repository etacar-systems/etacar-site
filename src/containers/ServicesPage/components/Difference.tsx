import { motion } from 'framer-motion';
import { LuCircleCheck, LuCircleDashed } from 'react-icons/lu';

import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './Difference.module.scss';

const differences = [
  {
    generic: 'Model-first approach',
    systems: 'Decision-first architecture',
  },
  {
    generic: 'Governance added later',
    systems: 'Governance embedded at design stage',
  },
  {
    generic: 'Black-box reasoning',
    systems: 'Structured and traceable logic',
  },
  {
    generic: 'Pilot focus',
    systems: 'Production focus',
  },
];

export const Difference = () => {
  return (
    <SectionWrapper id={'difference'}>
      <div className={styles.wrapper}>
        {/* Background gradient effects */}
        <div className={styles.backgroundGradient} />
        <div className={styles.glowEffect} />

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>
            Why this is <span className={styles.gradientText}>different</span>
          </h2>
          <p className={styles.subtitle}>
            Two fundamentally different approaches to AI integration in enterprise environments
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className={styles.comparisonGrid}>
          {/* Generic AI column header */}
          <motion.div
            className={styles.columnHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <LuCircleDashed className={styles.headerIconGeneric} />
            <span className={styles.columnHeaderTitle}>Generic AI Integration</span>
          </motion.div>

          {/* EtaCar Systems column header */}
          <motion.div
            className={styles.columnHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <LuCircleCheck className={styles.headerIconSystems} />
            <span className={styles.columnHeaderTitleSystems}>EtaCar Systems</span>
          </motion.div>

          {/* Comparison rows */}
          {differences.map((item, index) => (
            <>
              {/* Generic AI card */}
              <motion.div
                key={`generic-${index}`}
                className={styles.comparisonCard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.cardContent}>
                  <span className={styles.cardText}>{item.generic}</span>
                </div>
              </motion.div>

              {/* EtaCar Systems card */}
              <motion.div
                key={`systems-${index}`}
                className={styles.comparisonCardSystems}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.cardContentSystems}>
                  <span className={styles.cardTextSystems}>{item.systems}</span>
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

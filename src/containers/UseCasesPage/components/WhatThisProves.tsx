import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './WhatThisProves.module.scss';

const principles = [
  { number: '01', title: 'Structured' },
  { number: '02', title: 'Governed' },
  { number: '03', title: 'Traceable' },
  { number: '04', title: 'Sustainable' },
];

const WhatThisProves = () => {
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
          What This <span className={styles.gradientText}>Proves</span>
        </h2>
      </motion.div>

      <motion.div
        className={styles.intro}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Operational AI is not about models.</p>
        <p>It is about engineered control.</p>
      </motion.div>

      <motion.div
        className={styles.subIntro}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        When decisions carry consequence, they must be:
      </motion.div>

      <div className={styles.grid}>
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.number}>{principle.number}</div>
            <h3 className={styles.cardTitle}>{principle.title}</h3>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatThisProves;

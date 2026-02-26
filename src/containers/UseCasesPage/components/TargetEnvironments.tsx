import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './TargetEnvironments.module.scss';

const environments = [
  {
    title: 'Industrial Operations',
    description: 'Real-time decisions under technical and safety constraints.',
  },
  {
    title: 'Cloud & Telecom',
    description: 'Infrastructure-level decisions affecting availability and SLA commitments.',
  },
  {
    title: 'Regulated Environments',
    description: 'AI decisions subject to compliance, audit, and oversight.',
  },
];

const TargetEnvironments = () => {
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
          Where Operational Control Is <span className={styles.gradientText}>Non-Negotiable</span>
        </h2>
      </motion.div>

      <div className={styles.grid}>
        {environments.map((env, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>{String(index + 1).padStart(2, '0')}</div>
            </div>
            <h3 className={styles.cardTitle}>{env.title}</h3>
            <p className={styles.cardDescription}>{env.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TargetEnvironments;

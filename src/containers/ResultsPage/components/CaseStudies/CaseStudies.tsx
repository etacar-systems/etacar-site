import { motion, type Variants } from 'framer-motion';
import styles from './CaseStudies.module.scss';

const cases = [
  {
    title: 'Global e‑commerce (customer operations)',
    headline: 'Reducing handling time for complex support cases',
    results: ['–35% average time‑to‑resolution', '60% of cases processed with AI assistance', '<2% re‑opened tickets'],
  },
  {
    title: 'Financial services (KYC reviews)',
    headline: 'Speeding up KYC reviews while keeping risk under control',
    results: [
      '–30–40% reduction in review cycle time',
      'More consistent risk assessments',
      'Better transparency for audit',
    ],
  },
  {
    title: 'Document & knowledge intelligence',
    headline: 'Turning scattered documents into a trusted knowledge layer',
    results: ['50–70% less time spent searching documents', 'Higher consistency across teams'],
  },
  {
    title: 'Technology company (software delivery)',
    headline: 'Accelerating delivery of core platform features',
    results: ['30–50% faster delivery for selected features', 'Lower defect rates in early releases'],
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
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

export const CaseStudies = () => {
  return (
    <section className={styles.section}>
      {/* Background gradient effect */}
      <div className={styles.backgroundGradient} />

      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Selected case studies
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cases.map((c, idx) => (
            <motion.article
              key={idx}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <h3 className={styles.cardTitle}>{c.headline}</h3>
              <p className={styles.cardMeta}>{c.title}</p>
              <ul>
                {c.results.map((r, i) => (
                  <motion.li
                    key={i}
                    className={styles.resultItem}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + idx * 0.1 + i * 0.05,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {r}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;

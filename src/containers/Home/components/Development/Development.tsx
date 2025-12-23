'use client';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './Development.module.scss';

const metrics = [
  {
    text: (
      <>
        <strong>+30–50%</strong> <strong>faster back-office operations</strong> through{' '}
        <em>AI- orchestrated workflows</em>
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Up to 40%</strong> <strong>fewer manual errors</strong> in <em>routine, repeatable decisions</em>
      </>
    ),
  },
  {
    text: (
      <>
        <strong>2–3× faster delivery</strong> of <strong>digital products</strong> with <em>AI- ready architecture</em>
      </>
    ),
  },
];

export const Development = () => {
  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.title}>Measurable impact in weeks – not years</div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={'/images/appleSet.webp'} alt='development' />
        </div>
        <div className={styles.content}>
          <div className={styles.points}>
            {metrics.map((metric, idx) => (
              <div key={idx} className={styles.point}>
                <span className={styles.metricText}>{metric.text}</span>
              </div>
            ))}
          </div>
          <div className={styles.description}>
            <i>
              <em>
                We combine <strong>enterprise-grade orchestration</strong>, safety, and observability with fast
                iteration cycles, so your first <strong>production workflow</strong> goes live in
                <strong> 6–10 weeks</strong> — not months or years.
              </em>
            </i>
          </div>
          <div className={styles.description}>
            <i>
              <em>
                Each <strong>flagship service</strong> is designed to produce <strong>measurable impact early</strong> —
                before scaling across the enterprise.
              </em>
            </i>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

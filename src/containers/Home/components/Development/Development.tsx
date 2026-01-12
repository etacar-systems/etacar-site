'use client';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './Development.module.scss';

const metrics = [
  {
    text: (
      <>
        <strong>+30–50%</strong> faster <strong>back-office cycle time</strong> via{' '}
        <em>AI-orchestrated workflows</em>
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Up to 40%</strong> fewer <strong>manual errors</strong> in <em>repeatable decisions</em>
      </>
    ),
  },
  {
    text: (
      <>
        <strong>2–3× faster</strong> <strong>product delivery</strong> with <em>AI-ready architecture</em>
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
                First <strong>production workflow</strong> in <strong>6–10 weeks</strong>, anchored to{' '}
                <strong>3–5 measurable KPIs</strong> — before scaling across the enterprise.
              </em>
            </i>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

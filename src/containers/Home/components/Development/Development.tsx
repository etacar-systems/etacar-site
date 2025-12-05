'use client';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './Development.module.scss';

const metrics = [
  {
    text: '+30–50% faster back-office operations via AI-powered workflows',
  },
  {
    text: 'Up to 40% fewer manual errors in routine decisions',
  },
  {
    text: '2–3× faster delivery of new digital products with AI-native architecture',
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
                <span className={styles.metricText}>
                  {metric.text.split(/([+\d–×%]+)/g).map((part, i) =>
                    /[+\d–×%]/.test(part) ? (
                      <span key={i} className={styles.highlightNumber}>
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.description}>
            <i>
              We combine enterprise-grade orchestration, safety, and observability with fast iteration cycles, so your
              first AI solution goes live in 6–10 weeks.
            </i>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

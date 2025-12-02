import appleSet from '../../../../assets/images/appleSet.webp';
import { Section } from '../../../../components/Section';
import styles from './Development.module.scss';
import { Carousel } from './components';

// Простые SVG-иконки
const metrics = [
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    text: '+30–50% faster back-office operations via AI-powered workflows',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
        <path d='M8 12l2 2 4-4' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    text: 'Up to 40% fewer manual errors in routine decisions',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path d='M4 14l4-4 4 6 8-8' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    text: '2–3× faster delivery of new digital products with AI-native architecture',
  },
];

export const Development = () => {
  return (
    <Section title={'Measurable impact in weeks – not years'} titleClassName={styles.title}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={appleSet} alt='development' />
        </div>
        <div className={styles.content}>
          <div className={styles.points}>
            {metrics.map((metric, idx) => (
              <div key={idx} className={styles.point}>
                <span className={styles.icon}>{metric.icon}</span>
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
      <Carousel />
    </Section>
  );
};

import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import styles from './HeroSection.module.scss';

const items = [
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L2 7L12 12L22 7L12 2Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 17L12 22L22 17'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 12L12 17L22 12'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Selected case studies',
    sectionId: 'selected-case',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 2V22' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M5 8C7 6 9.5 5 12 5C14.5 5 17 6 19 8' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path
          d='M7 12C8.5 10.5 10.2 10 12 10C13.8 10 15.5 10.5 17 12'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    ),
    label: 'What we measure and how',
    sectionId: 'measure',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7 18H17C19.2 18 21 16.2 21 14C21 11.8 19.2 10 17 10C16.7 10 16.3 10 16 10.1C15.3 7.7 13.3 6 11 6C8.2 6 6 8.2 6 11C6 11.3 6 11.7 6.1 12C4.3 12.3 3 13.8 3 15.5C3 17.4 4.6 18.9 6.5 19'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Within your data, systems, risk',
    sectionId: 'within-data',
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Results & KPIs</h1>

          <p className={styles.subtitle}>
            We build AI systems for business‑critical operations — and we measure what they actually change: cycle
            times, error rates, manual effort, risk and cost.
          </p>

          <div className={styles.intro}>
            <p>
              Together with your team, we define 3–5 concrete KPIs before we design the system. Then we implement,
              measure and iterate until the numbers move — or we stop the project instead of hiding behind buzzwords.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Every engagement with us starts with a simple question:
              <br />
              <strong>“How will we know this AI solution is successful?”</strong>
            </p>
          </div>
          <div className={styles.quickFacts}>
            {items.map((item, idx) => (
              <FadeCard key={idx} className={styles.fact}>
                {React.cloneElement(item.icon, { className: styles.icon })}
                <span>{item.label}</span>
                <a href={`#${item.sectionId}`} className={styles.linkButton}>
                  Learn more →
                </a>
              </FadeCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

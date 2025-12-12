import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import styles from './Hero.module.scss';

const items = [
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
          fill='currentColor'
        />
      </svg>
    ),
    label: 'Financial services & fintech',
    sectionId: 'fintech',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'E‑commerce & digital retail',
    sectionId: 'ecommerce',
  },
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
    label: 'Logistics & operations businesses',
    sectionId: 'logistics',
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
    label: 'Telecom & subscription services',
    sectionId: 'telecom',
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
    label: 'Technology & SaaS companies',
    sectionId: 'saas',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9 2H5C3.9 2 3 2.9 3 4V9H6C7.1 9 8 9.9 8 11C8 12.1 7.1 13 6 13H3V20C3 21.1 3.9 22 5 22H10V19C10 17.9 10.9 17 12 17C13.1 17 14 17.9 14 19V22H19C20.1 22 21 21.1 21 20V15H18C16.9 15 16 14.1 16 13C16 11.9 16.9 11 18 11H21V4C21 2.9 20.1 2 19 2H14V5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5V2H9Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Cross-industry use cases',
    sectionId: 'cross-industry',
  },
];

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Where AI Makes the Biggest Impact in Your Business</h1>
        <h2 className={styles.subtitle}>
          Typical high-value problems we solve across industries - from operations to risk, finance, and engineering
        </h2>
        <p className={styles.intro}>
          Below are examples of how we apply our services in different industries. Each use case is tied to specific
          processes, roles and KPIs - not just generic “AI for everything”.
        </p>
        <div className={styles.quickFacts}>
          {items.map((item, idx) => (
            <FadeCard key={idx} className={styles.fact}>
              {React.cloneElement(item.icon, { className: styles.icon })}
              <div className={styles.content}>
                <span>{item.label}</span>
                <a href={`#${item.sectionId}`} className={styles.linkButton}>
                  Learn more →
                </a>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

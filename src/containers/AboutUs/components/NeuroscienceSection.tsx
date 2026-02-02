import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './NeuroscienceSection.module.scss';

const NeuroscienceSection: React.FC = () => {
  const neuroPoints = [
    {
      title: 'Neuroscience Roots',
      description: (
        <>
          Our team includes <strong>professional neuroscientists</strong> studying how complex systems learn and fail.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.5 2L3 7.5L9.5 13L16 7.5L9.5 2Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.5 13L16 18.5L9.5 24L3 18.5L9.5 13Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16 7.5L22 13L16 18.5'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Why It Matters',
      description: (
        <>
          We design AI around <strong>human decision-making</strong>, trust, and real-world cognitive limits.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Our Approach',
      description: (
        <>
          We focus on adoption — not just models, but <strong>AI that teams actually use</strong>.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper className={styles.neuroscienceSection} >
      <div className={styles.content}>
        <h2 className={styles.title}>Neuroscience and AI - why it matters</h2>

        <p className={styles.subtext}>
          Understanding how complex systems learn, adapt and interact with human behavior.
        </p>

        <div className={styles.grid}>
          {neuroPoints.map((point, index) => (
            <FadeCard key={index} className={styles.card}>
              <div className={styles.icon}>{point.icon}</div>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardDescription}>{point.description}</p>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NeuroscienceSection;

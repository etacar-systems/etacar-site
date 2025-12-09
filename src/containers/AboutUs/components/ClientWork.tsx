import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import styles from './ClientWork.module.scss';

const ClientWork: React.FC = () => {
  const principles = [
    {
      title: 'Partnership Approach',
      description:
        'We see every engagement as a partnership, not a one-off project. We start with your reality — existing systems, constraints, risk and culture.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M17 20H7C5.89543 20 5 19.1046 5 18V9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.1046 18.1046 20 17 20Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M12 3V7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 3V7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16 3V7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      ),
    },
    {
      title: 'Focused Initiatives',
      description:
        'We focus on a small number of high-impact initiatives, not AI "everywhere". This ensures meaningful results and sustainable implementation.',
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
      title: 'Clear Alignment',
      description:
        'We align on KPIs and decision criteria for each initiative before we start building. This ensures measurable success and clear accountability.',
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
    {
      title: 'Sustainable Design',
      description:
        'We design AI systems that are operationally sustainable — with clear ownership, monitoring and governance for long-term success.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M13 10V3L4 14H11V21L20 10H13Z'
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
    <SectionWrapper className={styles.clientWorkSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>How we work with clients</h2>
        <div className={styles.content}>
          <p className={styles.intro}>We see every engagement as a partnership, not a one-off project:</p>

          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => (
              <FadeCard key={index} className={styles.principleCard}>
                <div className={styles.icon}>{principle.icon}</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDescription}>{principle.description}</p>
                </div>
              </FadeCard>
            ))}
          </div>

          <p className={styles.conclusion}>
            This is how we make sure our work is meaningful for your organization and safe for your business-critical
            operations.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ClientWork;

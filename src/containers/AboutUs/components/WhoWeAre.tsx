import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './WhoWeAre.module.scss';

const WhoWeAre: React.FC = () => {
  const teamPoints = [
    {
      title: 'Our Team',
      description: 'Today EtaCar Systems is a focused team of senior AI engineers, architects and product leaders.',
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
      title: 'Our Expertise',
      description:
        'We combine long-term experience in AI-powered products, deep understanding of how organizations actually work, and practical knowledge of modern AI tooling and infrastructure.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.663 17H14.337M12 3V4M12 20V21M5.636 5.636L6.343 6.343M17.657 17.657L18.364 18.364M3 12H4M20 12H21M5.636 18.364L6.343 17.657M17.657 6.343L18.364 5.636'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='2' />
        </svg>
      ),
    },
    {
      title: 'Our Focus',
      description:
        'Our work centers on business-critical workflows — the ones that affect revenue, risk, operations and compliance. We help leadership teams decide where AI can safely amplify their people.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M13 7H11L9 12L11 17H13L15 12L13 7Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M9 12H15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>Who we are today</h2>

        <p className={styles.subtext}>A focused team of senior AI engineers, architects and product leaders.</p>

        <div className={styles.grid}>
          {teamPoints.map((point, index) => (
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

export default WhoWeAre;

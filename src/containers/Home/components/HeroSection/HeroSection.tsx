'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../../../../components/Button';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { CONTACT, RESULTS } from '../../../../routes';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subheadline} style={{ marginBottom: 'var(--space-3)' }}>
            Orchestrating Intelligence. Navigating Complexity.
          </p>

          <h1 className={styles.title}>Enterprise AI for business-critical decisions and processes</h1>

          <p className={styles.subheadline}>
            We build AI systems that drive measurable impact across speed, risk, and operational cost — from LLM-driven
            automation to decision support and high-stakes enterprise workflows.
          </p>

          <p className={styles.trustLine}>
            Our team has 20+ years of experience in AI engineering — from building the Autonomy.com platform to
            delivering production-grade AI systems for leading European and US organizations.
          </p>

          <div className={styles.ctaButtons}>
            <Button type='solid' title='Book a 30-minute discovery call' onClick={() => router.push(CONTACT)} />
            <Button type='bordered' title='See example results' onClick={() => router.push(RESULTS)} />
          </div>

          <div className={styles.quickFacts}>
            <FadeCard className={styles.fact}>
              <svg
                className={styles.icon}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
                  fill='currentColor'
                />
              </svg>
              <span>20+ years building AI-driven products</span>
            </FadeCard>

            <FadeCard className={styles.fact}>
              <svg
                className={styles.icon}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>From strategy to production — architecture, implementation, governance</span>
            </FadeCard>

            <FadeCard className={styles.fact}>
              <svg
                className={styles.icon}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
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
              <span>Designed for regulated and high-stakes environments</span>
            </FadeCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { CONTACT, RESULTS } from '../../../routes';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>AI systems for business-critical operations</h1>

          <p className={styles.subheadline}>
            We are a senior AI engineering team with more than 20 years in AI-powered products. We design and deliver AI
            solutions for mission-critical processes — with measurable KPIs on speed, risk and cost.
          </p>

          <p className={styles.trustLine}>
            We started with enterprise AI platforms like Autonomy and have been building AI-powered systems for European
            and US enterprises ever since.
          </p>

          <div className={styles.ctaButtons}>
            <Button type='solid' title='Book a 30-minute discovery call' onClick={() => navigate(CONTACT)} />
            <Button type='bordered' title='See example results' onClick={() => navigate(RESULTS)} />
          </div>

          <div className={styles.quickFacts}>
            <div className={styles.fact}>
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
              <span>
                <i>20+ years building AI-driven products</i>
              </span>
            </div>
            <div className={styles.fact}>
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
            </div>
            <div className={styles.fact}>
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
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

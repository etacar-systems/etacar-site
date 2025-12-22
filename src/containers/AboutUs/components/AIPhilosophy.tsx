import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import styles from './AIPhilosophy.module.scss';

const AIPhilosophy: React.FC = () => {
  const requirements = [
    {
      title: 'Integration',
      description: (
        <>
          Fits into <strong>existing systems and workflows</strong> without unnecessary disruption.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Risk & Compliance',
      description: (
        <>
          Designed to meet <strong>regulatory, security, and audit</strong> requirements from day one.
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
    {
      title: 'Human-centered',
      description: (
        <>
          Supports <strong>human decision-making</strong> with explainable, trustworthy AI.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
  ];

  const approaches = [
    {
      title: 'Workflow-first',
      description: (
        <>
          We design around <strong>real workflows and decisions</strong>, selecting models that support clear outcomes.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9 19V13C9 11.8954 9.89543 11 11 11H16L20 15V19C20 20.1046 19.1046 21 18 21H11C9.89543 21 9 20.1046 9 19Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9 11L4 6V19C4 20.1046 4.89543 21 6 21H9'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20 15L16 11L14 13'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Clear Roles',
      description: (
        <>
          We define <strong>clear responsibilities</strong> so AI, people, and systems work predictably together.
        </>
      ),
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
      title: 'Measure & Govern',
      description: (
        <>
          We set <strong>KPIs and governance</strong> early to track value and ensure accountability.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9 19V13C9 11.8954 9.89543 11 11 11H16L20 15V19C20 20.1046 19.1046 21 18 21H11C9.89543 21 9 20.1046 9 19Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9 11L4 6V19C4 20.1046 4.89543 21 6 21H9'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20 15L16 11L14 13'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='12' cy='16' r='1' fill='currentColor' />
          <circle cx='15' cy='16' r='1' fill='currentColor' />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper className={styles.philosophySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>How we think about AI in organizations</h2>
        <p className={styles.subtitle}>
          We do <strong>not</strong> treat AI as a <span style={{ fontStyle: 'italic' }}>magic layer</span> you can
          sprinkle on top of everything.
        </p>
        <div className={styles.content}>
          <p className={styles.intro}>We see it as an additional capability inside your organization that must:</p>

          <div className={styles.requirementsList}>
            {requirements.map((item, index) => (
              <FadeCard key={index} className={styles.listItem}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </FadeCard>
            ))}
          </div>

          <p className={styles.intro}>That is why we:</p>

          <div className={styles.approachesList}>
            {approaches.map((item, index) => (
              <FadeCard key={index} className={styles.listItem}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </FadeCard>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AIPhilosophy;

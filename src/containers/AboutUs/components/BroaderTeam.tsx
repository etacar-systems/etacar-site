'use client';

import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import styles from './BroaderTeam.module.scss';

const BroaderTeam: React.FC = () => {
  const teamMembers = [
    {
      title: 'AI engineers and data scientists',
      description: 'design and implement AI components, data pipelines and integrations with your existing systems',
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
      title: 'Software engineers and architects',
      description: 'ensure our solutions fit your existing systems and standards, maintaining architectural integrity',
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
      title: 'Professional neuroscientists',
      description: 'bring insight into human decision-making, cognition and behaviour for better AI design',
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
      title: 'Product and delivery specialists',
      description: 'keep initiatives aligned with business goals, timelines and KPIs for successful delivery',
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
  ];

  return (
    <SectionWrapper className={styles.broaderTeamSection} variant='gradient'>
      <div className={styles.container}>
        <h2 className={styles.title}>Our broader team</h2>
        <div className={styles.content}>
          <p className={styles.intro}>
            Around the leadership team, we have a focused group of senior specialists working together on
            cross-functional squads:
          </p>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.icon}>{member.icon}</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.roleTitle}>{member.title}</h3>
                  <p className={styles.roleDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.conclusion}>
            We deliberately keep the team compact and senior. For each project, we assemble a small, cross-functional
            squad that can work end-to-end: from strategy and design to implementation, measurement and scaling.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BroaderTeam;

import React from 'react';
import { FadeCard } from '../../../components/FadeCard';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './WhatWeDo.module.scss';

export const WhatWeDo: React.FC = () => {
  const focusAreas = [
    {
      title: 'AI Strategy & Architecture',
      description:
        'From "we need AI somewhere" to a realistic roadmap, architecture and governance for your mission-critical processes.',
    },
    {
      title: 'AI for Decisions & Operations',
      description:
        'Role-specific copilots and AI-orchestrated workflows that support risk, finance, operations, customer service and more.',
    },
    {
      title: 'AI for Engineering & Modernization',
      description:
        'AI-augmented delivery that accelerates architecture, coding and refactoring for your core platforms.',
    },
  ];

  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.content}>
        <h2 className={styles.title}>What we do</h2>

        <p className={styles.subtext}>
          We focus on AI where it really matters: decisions, operations and core systems.
        </p>

        <div className={styles.grid}>
          {focusAreas.map((area, index) => (
            <FadeCard key={index} className={styles.card}>
              <div className={styles.card}>
                <div className={styles.number}>{index + 1}</div>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardDescription}>{area.description}</p>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatWeDo;

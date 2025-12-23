import React from 'react';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const targetAudience = [
    {
      title: 'Risk & Compliance Leaders',
      description: 'Reducing operational and regulatory risk in AI-driven decisions',
      options: ['AI Security, Risk & Governance', 'Decision Intelligence Assessment'],
    },
    {
      title: 'Operations & Business Leaders',
      description: 'Improving speed, consistency, and throughput of critical processes',
      options: ['AI Process Orchestration', 'AI Copilots for Critical Roles'],
    },
    {
      title: 'Technology & Architecture Leaders',
      description: 'Deploying scalable, governed AI across the enterprise',
      options: ['AI Strategy & Architecture', 'AI Governance & Scaling'],
    },
    {
      title: 'Product & Engineering Leaders',
      description: 'Shipping faster without increasing technical or operational risk',
      options: ['AI-Accelerated Software Delivery'],
    },
  ];

  return (
    <SectionWrapper variant='light'>
      <div className={styles.content}>
        <h2 className={styles.title}>Who This Is Built For</h2>

        <p className={styles.intro}>
          We work with teams responsible for decisions where speed, accuracy, and auditability directly impact business
          outcomes.
        </p>

        <div className={styles.grid}>
          {targetAudience.map((item, index) => (
            <FadeCard key={index} className={styles.caseCard}>
              <h3 className={styles.caseTitle}>{item.title}</h3>
              <div className={styles.caseSection}>{item.description}</div>
              <div className={styles.caseResult}>
                <ul className={styles.list}>
                  {item.options.map(option => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.bullet}>●</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoWeWorkWith;

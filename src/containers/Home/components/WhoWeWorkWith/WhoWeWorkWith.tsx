import React from 'react';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith: React.FC = () => {
  const targetAudience = [
    {
      title: 'Risk & Compliance Leaders',
      description: 'Govern AI decisions with <strong>auditability</strong>, controls, and measurable risk reduction.',
      options: ['AI Security, Risk & Governance', 'Decision Intelligence Assessment'],
    },
    {
      title: 'Operations & Business Leaders',
      description: 'Improve <strong>throughput</strong> and decision consistency across end-to-end workflows.',
      options: ['AI Process Orchestration', 'AI Copilots for Critical Roles'],
    },
    {
      title: 'Technology & Architecture Leaders',
      description: 'Build AI that teams can <strong>own</strong>, operate, and scale across the enterprise.',
      options: ['AI Strategy & Architecture', 'AI Governance & Scaling'],
    },
    {
      title: 'Product & Engineering Leaders',
      description: 'Ship faster with <strong>guardrails</strong> — without increasing operational risk.',
      options: ['AI-Accelerated Software Delivery'],
    },
  ];

  return (
    <SectionWrapper >
      <div className={styles.content}>
        <h2 className={styles.title}>Who This Is Built For</h2>

        <p className={styles.intro}>
          For teams accountable for <strong>business-critical decisions</strong> — where outcomes must be
           measurable and systems must be <strong>governed</strong>.
        </p>

        <div className={styles.grid}>
          {targetAudience.map((item, index) => (
            <FadeCard key={index} className={styles.caseCard}>
              <h3 className={styles.caseTitle}>{item.title}</h3>
              <div
                className={styles.caseSection}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <div className={styles.caseResult}>
                <ul className={styles.list}>
                  {item.options.map((option, i) => (
                    <li key={i} className={styles.listItem}>
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

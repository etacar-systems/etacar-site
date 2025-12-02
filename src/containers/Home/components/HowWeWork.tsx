import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './HowWeWork.module.scss';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Discover & Prioritize',
      description: 'We run focused workshops with your leadership and key teams to map out AI opportunities and risks — and prioritize where to start.',
    },
    {
      number: 2,
      title: 'Design & Plan',
      description: 'We design the solution and architecture, define KPIs, and agree on integration points and responsibilities with IT and risk teams.',
    },
    {
      number: 3,
      title: 'Build & Integrate',
      description: 'We implement AI workflows and copilots and integrate them into your existing tools and systems, not side channels.',
    },
    {
      number: 4,
      title: 'Measure & Scale',
      description: 'We track KPIs, adjust the solution and help you scale from pilot to production and across regions or business units.',
    },
  ];

  return (
    <SectionWrapper variant="light">
      <div className={styles.content}>
        <h2 className={styles.title}>How we work</h2>
        
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowWeWork;

import React from 'react';

import { SectionWrapper } from '../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './MeasurementFramework.module.scss';

export const MeasurementFramework: React.FC = () => {
  const categories = [
    {
      title: 'Speed & throughput',
      items: [
        <>
          <strong>Time-to-decision</strong>
        </>,
        'End-to-end cycle time',
        'Time-to-resolution',
      ],
    },
    {
      title: 'Quality & consistency',
      items: [
        <>
          <strong>Error and rework rates</strong>
        </>,
        'Decision consistency across teams',
        'Accuracy and coverage of knowledge references',
      ],
    },
    {
      title: 'Productivity & cost',
      items: [
        <>
          <strong>Manual effort per case</strong>
        </>,
        'Work volume per FTE',
        'Cost per processed unit',
      ],
    },
    {
      title: 'Risk & compliance',
      items: [
        <>
          <strong>Risk and compliance incidents</strong>
        </>,
        'Audit findings',
        'Coverage of critical controls',
      ],
    },
    {
      title: 'Adoption & satisfaction',
      items: [
        <>
          <strong>Active usage</strong> of AI workflows
        </>,
        'User satisfaction',
        'Stakeholder confidence',
      ],
    },
  ];

  return (
    <SectionWrapper id='measure'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What we measure and how</h2>
          <p className={styles.description}>
            Our <strong>KPI framework</strong> is designed for C-level, operations, IT, and risk teams. Metrics are
            grouped into <strong>five categories</strong>.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category, index) => (
            <Card
              content={
                <ul className={styles.list}>
                  {category.items.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <span className={styles.bullet}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              }
              key={index}
              title={category.title}
            />
          ))}
        </div>

        <div className={styles.closing}>
          <p>
            For each project, we select <strong>relevant metrics</strong>, define baselines, and track progress. If
            results don’t improve, we <strong>adjust — or stop</strong>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MeasurementFramework;

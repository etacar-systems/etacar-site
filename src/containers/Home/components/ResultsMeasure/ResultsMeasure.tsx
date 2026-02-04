import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ResultsMeasure.module.scss';

export const ResultsMeasure: React.FC = () => {
  const kpis = [
    <>
      <strong>Cycle time</strong>: process documents <strong>20–40%</strong> faster; cut <strong>search</strong> up to{' '}
      <strong>70%</strong>.
    </>,
    <>
      <strong>Decision reliability</strong>: reduce <strong>hallucinations 40–60%</strong> and <strong>escalations 30–50%</strong>.
    </>,
    <>
      <strong>Security</strong>: minimize <strong>leakage risk</strong> and improve <strong>malware detection</strong> in AI workflows.
    </>,
    <>
      <strong>Delivery</strong>: ship <strong>30–50%</strong> faster with <strong>30–50%</strong> less manual rework.
    </>,
    <>
      <strong>Insight-to-decision</strong>: turn <strong>internal data</strong> into actionable insight faster across the organization.
    </>,
  ];


  const miniCases = [
    {
      title: 'Financial services – KYC reviews',
      goal: (
        <>
          Reduce KYC cycle time while maintaining <strong>compliance</strong> and <strong>auditability</strong> in regulated environments.
        </>
      ),
      approach: (
        <>
          Built for <strong>human accountability</strong>: AI supports reviewers with traceable, evidence-based outputs.
        </>
      ),
      result: [
        <>
          <strong>35%</strong> faster KYC reviews
        </>,
        <>
          &lt; <strong>2%</strong> case re-open rate
        </>,
        <>
          Improved <strong>auditability</strong> and <strong>decision consistency</strong>
        </>,
      ],
    },
    {
      title: 'Global e-commerce – operations',
      goal: (
        <>
          Improve operational decision speed while reducing <strong>SLA risk</strong> across high-volume workflows.
        </>
      ),
      approach: (
        <>
          Designed for <strong>SLA-aware operations</strong> where decision quality matters as much as speed.
        </>
      ),
      result: [
        <>
          <strong>30–40%</strong> lower decision cycle time
        </>,
        <>
          Fewer <strong>SLA breaches</strong> in critical operations
        </>,
        <>
          Higher <strong>consistency</strong> in high-risk decisions
        </>,
      ],
    },
  ];


  return (
    <SectionWrapper id='results' >
      <div className={styles.content}>
        <h2 className={styles.title}>Results you can measure</h2>

        <p className={styles.subtext}>
          <strong>3–5 business KPIs.</strong> Defined upfront. Measured in <strong>production</strong>.<br></br>
          <strong>Impact must be measurable</strong>, reviewable, and governed over time.
        </p>

        <ul className={styles.kpiList}>
          {kpis.map((kpi, index) => (
            <FadeCard key={index} className={styles.kpiItem}>
              <div className={styles.text}>
                <span>{kpi}</span>
              </div>
            </FadeCard>
          ))}
        </ul>

        <div className={styles.casesGrid}>
          {miniCases.map((caseStudy, index) => (
            <FadeCard key={index}>
              <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
              <div className={styles.caseSection}>{caseStudy.goal}</div>
              <div className={styles.caseSection}>{caseStudy.approach}</div>
              <div className={styles.caseResult}>
                <ul className={styles.list}>
                  {caseStudy.result.map(item => (
                    <li key={index} className={styles.listItem}>
                      <span>{item}</span>
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

export default ResultsMeasure;

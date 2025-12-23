import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ResultsMeasure.module.scss';

export const ResultsMeasure: React.FC = () => {
  const kpis = [
    <>
      Process documents <strong>20–40%</strong> faster and cut <strong>search time</strong> by up to{' '}
      <strong>70%</strong>.
    </>,
    <>
      Reduce <strong>hallucinations</strong> by <strong>40–60%</strong> and
      <strong> escalations</strong> by <strong>30–50%</strong>.
    </>,
    <>
      Achieve <strong>near-zero leakage risk</strong> and <strong>100% malware detection</strong>.
    </>,
    <>
      Ship features <strong>30–50%</strong> faster with <strong>30–50% less manual rework</strong>.
    </>,
    <>
      Turn <strong>internal data</strong> into <strong>insight faster</strong>, improving
      <strong> decisions</strong> across the organization.
    </>,
  ];

  const miniCases = [
    {
      title: 'Financial services – KYC reviews',
      goal: (
        <>
          AI-assisted KYC review processes in regulated financial environments, where incorrect decisions lead to{' '}
          <strong>compliance breaches</strong>, fines, and <em>reputational risk</em>.
        </>
      ),
      approach: (
        <>
          Built to support human reviewers in <strong>high-stakes decisions</strong>,{' '}
          <em>not to replace accountability</em>.
        </>
      ),
      result: [
        <>
          <strong>35%</strong> reduction in average KYC review time
        </>,
        <>
          <em>Less than</em> <strong>2%</strong> case re-open rate
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
          AI supporting operational decisions in large-scale e-commerce environments, where
          <strong> errors cascade</strong> across fulfillment, refunds, customer trust, and <em>revenue</em>.
        </>
      ),
      approach: (
        <>
          Designed for <strong>high-volume operations</strong> with strict <strong>SLA</strong>, where{' '}
          <em>decision quality</em> matters more than raw speed.
        </>
      ),
      result: [
        <>
          <strong>30–40%</strong> reduction in decision cycle time
        </>,
        <>
          Fewer <strong>SLA breaches</strong> across critical operations
        </>,
        <>
          Improved <strong>consistency</strong> in high-risk operational decisions
        </>,
      ],
    },
  ];

  return (
    <SectionWrapper id='results' className={styles.results} variant='light'>
      <div className={styles.content}>
        <h2 className={styles.title}>Results you can measure</h2>

        <p className={styles.subtext}>
          Every engagement starts with <strong>3–5 concrete KPIs</strong> tied to <strong>business outcomes</strong>,{' '}
          <em>not demos</em>
        </p>
        <p className={styles.subtext}>
          We don’t ship AI unless <strong>impact</strong> can be <strong>measured</strong>, <strong>reviewed</strong>,
          and <em>governed over time</em>.
        </p>

        <ul className={styles.kpiList}>
          {kpis.map((kpi, index) => (
            <FadeCard key={index} className={styles.kpiItem}>
              <div className={styles.text}>
                <span className={styles.bullet}>●</span>
                <span>{kpi}</span>
              </div>
            </FadeCard>
          ))}
        </ul>

        <div className={styles.casesGrid}>
          {miniCases.map((caseStudy, index) => (
            <FadeCard key={index} className={styles.caseCard}>
              <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
              <div className={styles.caseSection}>{caseStudy.goal}</div>
              <div className={styles.caseSection}>{caseStudy.approach}</div>
              <div className={styles.caseResult}>
                <ul className={styles.list}>
                  {caseStudy.result.map(item => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.bullet}>●</span>
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

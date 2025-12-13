import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './ResultsMeasure.module.scss';

export const ResultsMeasure: React.FC = () => {
  const kpis = [
    'Process documents 20–40% faster and cut search time by up to 70%.',
    'Reduce hallucinations by 40–60% and escalations by 30–50%.',
    'Achieve near-zero leakage risk and 100% malware detection.',
    'Ship features 30–50% faster with 30–50% less manual rework.',
    'Turn internal data into insight faster, improving decisions across the organization.',
  ];

  const miniCases = [
    {
      title: 'Global e-commerce – operations',
      goal: 'reduce handling time for complex support cases without adding headcount',
      approach: 'AI-assisted case summaries, context gathering, next-best-action suggestions and playbook search',
      result: '–35% average time-to-resolution, 60% of cases processed with AI assistance',
    },
    {
      title: 'Financial services – KYC reviews',
      goal: 'speed up periodic KYC reviews while keeping risk under control',
      approach: 'AI workflow that collects data, drafts risk summaries and flags edge cases for human review',
      result: '–30–40% review cycle time, more consistent risk assessments, better audit trail',
    },
  ];

  return (
    <SectionWrapper id='results' className={styles.results}>
      <div className={styles.content}>
        <h2 className={styles.title}>Results you can measure</h2>

        <p className={styles.subtext}>
          Every engagement starts with <b>3–5 concrete KPIs tied to business outcomes</b>, not demos.
        </p>
        <p className={styles.subtext}>
          We don’t ship AI unless impact can be measured, reviewed, and governed over time.
        </p>

        <ul className={styles.kpiList}>
          {kpis.map((kpi, index) => (
            <FadeCard key={index} className={styles.kpiItem}>
              <div className={styles.text}>
                <span className={styles.bullet}>●</span>
                <span>
                  {kpi.split(/([+\d–×%]+)/g).map((part, i) =>
                    /[+\d–×%]/.test(part) ? (
                      <strong key={i} className={styles.highlightNumber}>
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </span>
              </div>
            </FadeCard>
          ))}
        </ul>

        <div className={styles.casesGrid}>
          {miniCases.map((caseStudy, index) => (
            <FadeCard key={index} className={styles.caseCard}>
              <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
              <div className={styles.caseSection}>
                <strong>Goal:</strong> {caseStudy.goal}
              </div>
              <div className={styles.caseSection}>
                <strong>Approach:</strong> {caseStudy.approach}
              </div>
              <div className={styles.caseResult}>
                <strong>Result:</strong>{' '}
                {caseStudy.result.split(/([+\d–×%]+)/g).map((part, i) =>
                  /[+\d–×%]/.test(part) ? (
                    <strong key={i} className={styles.highlightNumber}>
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResultsMeasure;

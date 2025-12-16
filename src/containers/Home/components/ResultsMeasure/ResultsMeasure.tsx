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
      title: 'Financial services – KYC reviews',
      goal: (
        <>
          AI-assisted KYC review processes in regulated financial environments, where incorrect decisions lead to{' '}
          <strong>compliance breaches</strong>, fines, and reputational risk.
        </>
      ),
      approach: (
        <>
          Built to support human reviewers in <strong>high-stakes decisions</strong>, not to replace accountability.
        </>
      ),
      result: [
        '35% reduction in average KYC review time',
        'Less than 2% case re-open rate',
        'Improved auditability and decision consistency',
      ],
    },
    {
      title: 'Global e-commerce – operations',
      goal: (
        <>
          AI supporting operational decisions in large-scale e-commerce environments, where{' '}
          <strong>errors cascade</strong> across fulfillment, refunds, customer trust, and revenue.
        </>
      ),
      approach:
        'Designed for high-volume operations with strict SLA, where decision quality matters more than raw speed.',
      result: [
        '30–40% reduction in decision cycle time',
        'Fewer SLA breaches across critical operations',
        'Improved consistency in high-risk operational decisions',
      ],
    },
    // {
    //   title: 'Enterprise decision governance',
    //   goal: 'AI supporting executive and cross-functional decisions in environments where incorrect outcomes lead to financial, legal, or reputational damage.',
    //   approach:
    //     'Designed for decision transparency, auditability, and long-term accountability — not black-box automation.',
    //   result: [
    //     'Faster alignment across executive stakeholders',
    //     'Reduced risk of inconsistent or ad-hoc decisions',
    //     'Clear audit trail for high-impact decisions',
    //   ],
    // },
  ];

  return (
    <SectionWrapper id='results' className={styles.results} variant='light'>
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
              <div className={styles.caseSection}>{caseStudy.goal}</div>
              <div className={styles.caseSection}>{caseStudy.approach}</div>
              <div className={styles.caseResult}>
                <ul className={styles.list}>
                  {caseStudy.result.map(item => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.bullet}>●</span>
                      <span>
                        {item.split(/([+\d–×%]+)/g).map((part, i) =>
                          /[+\d–×%]/.test(part) ? (
                            <strong key={i} className={styles.highlightNumber}>
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </span>
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

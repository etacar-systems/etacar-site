import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './CaseStudies.module.scss';

const cases = [
  {
    title: 'Global e‑commerce (customer operations)',
    headline: 'Reducing handling time for complex support cases',
    challenge:
      'A global e‑commerce company was facing increasing complexity in customer support: more products, more regions, more exceptions. Handling time for complex cases was growing, and senior agents were spending a lot of time on manual investigation and drafting responses.',
    whatWeDid: [
      'Designed an AI‑assisted workflow for complex tickets',
      'Added automatic case summaries and context gathering from internal systems',
      'Implemented next‑best‑action suggestions based on policies and historical resolutions',
      'Connected internal playbooks and policies as a trusted knowledge source with citations',
    ],
    results: [
      '−35% average time‑to‑resolution for complex cases in the pilot region',
      '60% of cases processed with AI assistance in the first 3 months',
      '<2% re‑opened tickets due to AI‑related errors',
    ],
  },
  {
    title: 'Financial services (KYC reviews)',
    headline: 'Speeding up KYC reviews while keeping risk under control',
    challenge:
      'A financial services provider needed to speed up periodic KYC reviews. Manual data collection and drafting risk assessments were consuming a lot of analyst time. At the same time, risk and compliance teams could not accept lower control.',
    whatWeDid: [
      'Mapped the end‑to‑end KYC review process with risk and compliance teams',
      'Built an AI‑orchestrated workflow that collects data, drafts risk summaries and flags edge cases for human review',
      'Ensured that every recommendation came with traceable references to underlying data and policies',
    ],
    results: [
      '−30–40% reduction in review cycle time',
      'More consistent risk assessments across analysts and regions',
      'Better transparency for internal audit: clearer records of what was reviewed and why decisions were made',
    ],
  },
  {
    title: 'Online business (document & knowledge intelligence)',
    headline: 'Turning scattered documents into a trusted knowledge layer',
    challenge:
      'A digital services company had thousands of contracts, policies and technical documents spread across different tools and repositories. Teams were spending hours searching, re‑reading and copying fragments into new documents — or they were simply guessing.',
    whatWeDid: [
      'Implemented a document ingestion pipeline for contracts, policies, procedures and technical documentation',
      'Built a knowledge layer on top, allowing users to ask questions and receive answers with citations',
      'Added tools to compare versions, highlight key changes and detect potential risks in updates',
    ],
    results: [
      '50–70% less time spent searching and reading documents for recurring questions',
      'Higher consistency of answers across teams and regions',
      'Fewer missed clauses and outdated references in key decisions',
    ],
  },
  {
    title: 'Technology company (AI‑augmented software delivery)',
    headline: 'Accelerating delivery of core platform features',
    challenge:
      'A technology company needed to deliver new features in a core platform faster, without increasing defect rates or technical debt. Traditional development cycles were too slow, and previous “AI code helper” experiments did not fit their architecture and quality standards.',
    whatWeDid: [
      'Introduced an AI‑augmented delivery process for selected services',
      'Used AI to assist with architecture options, implementation, tests and refactoring',
      'Integrated AI suggestions into existing code review and CI/CD processes, instead of bypassing them',
    ],
    results: [
      '30–50% faster delivery for selected features',
      'Lower defect rates in early production releases for those services',
      'More time for senior engineers to focus on architecture and complex design',
    ],
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <Section>
      <div className={styles.caseStudies}>
        <h2>Selected case studies</h2>
        <div className={styles.grid}>
        {cases.map((c, idx) => (
          <article key={idx} className={styles.card}>
            <h3>{c.headline}</h3>
            <div className={styles.meta}>{c.title}</div>
            <p className={styles.challenge}><strong>Challenge:</strong> {c.challenge}</p>
            <div>
              <h4>What we did</h4>
              <ul>
                {c.whatWeDid.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Results</h4>
              <ul>
                {c.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        </div>
      </div>
    </Section>
  );
};
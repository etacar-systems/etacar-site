import { useNavigate } from 'react-router';
import { Button } from '../../../../components/Button';
import { Section } from '../../../../components/Section';
import { CONTACT } from '../../../../routes';
import styles from './TechnologyTeaser.module.scss';

const features = [
  {
    title: 'Multi-model orchestration',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
        <path d='M8 12h8M12 8v8' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Retrieval & grounding',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <rect x='3' y='3' width='18' height='18' rx='2' stroke='currentColor' strokeWidth='2' />
        <path d='M3 12h18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Safety & monitoring',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path d='M12 2l9 21H3L12 2z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
  },
];

export const TechnologyTeaser = () => {
  const navigate = useNavigate();

  return (
    <Section title='Under the hood: production-grade AI architecture'>
      <p className={styles.description}>
        <i>
          Our solutions are powered by a cognitive orchestration layer that combines large language models, tools, and
          your data sources into reliable workflows. We focus on provenance, observability, and guardrails – so every
          answer has a trace and every action has a safety net.
        </i>
      </p>
      <div className={styles.center}>
        {features.map((f, idx) => (
          <div key={idx} className={styles.feature}>
            <div className={styles.icon}>{f.icon}</div>
            <div className={styles.title}>{f.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <Button onClick={() => navigate(CONTACT)} title='Explore the Technology' type='ghost' icon />
      </div>
    </Section>
  );
};

import { Section } from '../../../../components/Section';
import styles from './HowItWorks.module.scss';

const steps = [
  {
    title: 'Discover',
    description: 'Joint workshops to map opportunities, data, and constraints.',
    icon: (
      <svg width='48' height='48' viewBox='0 0 24 24' fill='none'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
        <path d='M12 6v6l4 2' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Design',
    description: 'Architecture and AI flows focused on safety, control, and ROI.',
    icon: (
      <svg width='48' height='48' viewBox='0 0 24 24' fill='none'>
        <rect x='3' y='3' width='18' height='18' rx='2' stroke='currentColor' strokeWidth='2' />
        <path d='M3 12h18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Build & Integrate',
    description: 'Implementation, integration with your stack, and tests.',
    icon: (
      <svg width='48' height='48' viewBox='0 0 24 24' fill='none'>
        <path d='M4 12h16M12 4v16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Operate & Evolve',
    description: 'Monitoring, guardrails, continuous improvements.',
    icon: (
      <svg width='48' height='48' viewBox='0 0 24 24' fill='none'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
        <path d='M12 6v6l4 2' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
  },
];

export const HowItWorks = () => {
  return (
    <Section theme='extraLight' title='How we deliver AI solutions'>
      <div className={styles.container}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.step}>
            <div className={styles.icon}>{step.icon}</div>
            <h4 className={styles.title}>{step.title}</h4>
            <p className={styles.description}>
              <i>{step.description}</i>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

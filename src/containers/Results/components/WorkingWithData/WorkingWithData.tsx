import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './WorkingWithData.module.scss';

export const WorkingWithData: React.FC = () => {
  return (
    <Section title='Working with your data, systems and risk constraints' theme='extraLight'>
      <div className={styles.working}>
        <p>We don’t operate AI in isolation. For every engagement we:</p>
        <ul>
          <li>Integrate with your existing systems and data sources instead of building separate “shadow tools”</li>
          <li>Align with your risk, security and compliance teams from day one</li>
          <li>Make sure every AI‑supported decision is traceable back to data and documents</li>
          <li>Provide you with a clear view of how the system behaves and how it is monitored</li>
        </ul>
        <p>
          This is what allows us — and you — to stand behind the KPIs and the decisions your AI systems help to make.
        </p>
      </div>
    </Section>
  );
};

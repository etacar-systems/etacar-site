import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './WorkingWithData.module.scss';

export const WorkingWithData: React.FC = () => {
  return (
    <Section title='Working with your data, systems and risk constraints' theme='extraLight'>
      <div className={styles.working}>
        <p>We don’t operate AI in isolation. For every engagement we:</p>
        <ul>
          <li>
            <i>Integrate with your existing systems and data sources instead of building separate “shadow tools”</i>
          </li>
          <li>
            <i>Align with your risk, security and compliance teams from day one</i>
          </li>
          <li>
            <i>Make sure every AI‑supported decision is traceable back to data and documents</i>
          </li>
          <li>
            <i>Provide you with a clear view of how the system behaves and how it is monitored</i>
          </li>
        </ul>
        <p>
          This is what allows us — and you — to stand behind the KPIs and the decisions your AI systems help to make.
        </p>
      </div>
    </Section>
  );
};

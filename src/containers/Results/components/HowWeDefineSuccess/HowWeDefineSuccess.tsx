import React from 'react';
import { Section } from '../../../../components/Section';
import styles from './HowWeDefineSuccess.module.scss';

export const HowWeDefineSuccess: React.FC = () => {
  return (
    <Section title='How we define success' theme='extraLight'>
      <div className={styles.success}>
        <p>
          We don’t treat "AI" as a goal in itself. For each project, we agree on measurable outcomes in three
          dimensions:
        </p>
        <ul>
          <li>
            <i>Operational impact – faster decisions and processes</i>
          </li>
          <li>
            <i>Quality & risk – fewer errors, better use of existing knowledge, more consistent decisions</i>
          </li>
          <li>
            <i>Cost & productivity – less manual effort, more work done with the same team</i>
          </li>
        </ul>
        <p>
          For business-critical processes we always add risk and compliance metrics, so your risk and audit teams can
          stand behind the solution.
        </p>
      </div>
    </Section>
  );
};

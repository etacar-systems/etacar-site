import React from 'react';
import styles from './HowWeDefineSuccess.module.scss';

export const HowWeDefineSuccess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How we define success</h2>
        <p className={styles.text}>
          We don’t treat “AI” as a goal in itself. For each project, we agree on measurable
          outcomes in three dimensions:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Operational impact</strong> – faster decisions and processes
          </li>
          <li>
            <strong>Quality & risk</strong> – fewer errors, better use of existing knowledge, more
            consistent decisions
          </li>
          <li>
            <strong>Cost & productivity</strong> – less manual effort, more work done with the same team
          </li>
        </ul>
        <p className={styles.note}>
          For business‑critical processes we always add risk and compliance metrics, so your risk and audit teams
          can stand behind the solution.
        </p>
      </div>
    </section>
  );
};

export default HowWeDefineSuccess;

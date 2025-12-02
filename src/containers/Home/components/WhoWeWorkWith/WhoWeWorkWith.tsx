import { ReactElement } from 'react';
import styles from './WhoWeWorkWith.module.scss';

export const WhoWeWorkWith = (): ReactElement => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Who we work with</h2>
        <p className={styles.text}>
          We partner with leaders who run complex, business-critical operations and can't afford AI "experiments".
        </p>
        <ul className={styles.list}>
          <li>
            <strong>COO / Head of Operations</strong> – wants faster, more reliable processes end-to-end
          </li>
          <li>
            <strong>CIO / Head of IT & Architecture</strong> – needs AI that fits existing systems, not shadow IT
          </li>
          <li>
            <strong>CRO / Risk & Compliance leaders</strong> – must keep AI auditable and regulator-friendly
          </li>
          <li>
            <strong>CTO / Head of Product & Engineering</strong> – looks to speed up delivery without sacrificing quality
          </li>
        </ul>
      </div>
    </section>
  );
};
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import { CASE_STUDY, CONTACT } from '../../../../routes';
import styles from './Welcome.module.scss';

export const Welcome = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>AI systems for business-critical operations</h1>

        <p className={styles.subheadline}>
          <i>We are a senior AI engineering team with more than 20 years in AI-powered products.</i>
        </p>

        <p className={styles.trustline}>
          <i>We started with enterprise AI platforms like Autonomy and have been building AI-powered systems.</i>
        </p>
      </div>

      <ul className={styles.facts}>
        <li>
          <strong>20+ years</strong> building AI-driven products
        </li>
        <li>
          <strong>From strategy to production</strong> — architecture, implementation, governance
        </li>
        <li>
          Designed for <strong>regulated and high-stakes environments</strong>
        </li>
      </ul>
      <div className={styles.buttons}>
        <Button onClick={() => navigate(CONTACT)} title='Book a 30-minute discovery call' type='solid' />
        <Button onClick={() => navigate(CASE_STUDY)} title='See example results' type='bordered' />
      </div>
    </div>
  );
};

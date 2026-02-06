import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './Capabilities.module.scss';

export const Capabilities = () => {
  return (
    <SectionWrapper id={'capabilities'}>
      <div className={styles.content}>
        <h2 className={styles.title}>{'Cross-Cutting Capabilities'}</h2>

        <p className={styles.intro}>
          <strong>Reliability & compliance</strong> across all services.
        </p>

        <div className={styles.caseCard}>
          <h3 className={styles.caseTitle}>{'Governance, Risk & Assurance'}</h3>
          <div className={styles.caseSection}>
            <strong>Embedded governance</strong> for high-stakes AI.
            <br />
            Failures occur when <strong>uncertainty is implicit</strong> and decisions can’t be trusted.
            <br />
            We embed <strong>risk and assurance</strong> into workflows, keeping decisions{' '}
            <strong>auditable, accountable, and compliant</strong>.
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './Capabilities.module.scss';

export const Capabilities = () => {
  return (
    <SectionWrapper id={'capabilities'}>
      <div className={styles.content}>
        <h2 className={styles.title}>{'Cross-Cutting Capabilities'}</h2>

        <p className={styles.intro}>
          {
            'Capabilities that apply across all services to ensure reliability, accountability, and compliance.'
          }
        </p>

        <div className={styles.caseCard}>
          <h3 className={styles.caseTitle}>{'Governance, Risk & Assurance'}</h3>
          <div className={styles.caseSection}>
            <>
              High-stakes AI fails when{' '}
              <strong>
                uncertainty is implicit, performance is unvalidated, and decisions cannot be reviewed or trusted
              </strong>
              .<br></br>
              We embed governance, risk, and assurance directly into decision workflows — making uncertainty explicit,
              validating outcomes, and ensuring decisions remain{' '}
              <strong>auditable, accountable, and aligned with organizational and regulatory standards</strong>.
            </>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

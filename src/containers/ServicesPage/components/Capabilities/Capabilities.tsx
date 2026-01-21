import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './Capabilities.module.scss';

export const Capabilities = () => {
  return (
    <SectionWrapper id={'capabilities'}>
      <div className={styles.content}>
        <h2 className={styles.title}>{'Cross-Cutting Capabilities'}</h2>

        <p className={styles.intro}>
          {
            'Capabilities that apply across all flagship services to ensure reliability, accountability, and compliance.'
          }
        </p>

        <div className={styles.caseCard}>
          <h3 className={styles.caseTitle}>{'Al Governance, Risk & Assurance'}</h3>
          <div className={styles.caseSection}>
            {
              'Governance, evaluation, and risk controls embedded across all Al systems. This includes uncertainty evaluation, performonce validation, auditability, and alignment with regulatory and organizational standards.'
            }
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

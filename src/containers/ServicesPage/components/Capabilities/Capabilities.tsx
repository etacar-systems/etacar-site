import { SectionWrapper } from '@/components/SectionWrapper';
import ServiceDetail from '../ServiceDetail';
import { Divider } from '@/components/Divider';
import { List } from '@/components/List';
import styles from './Capabilities.module.scss';

const options = [
  'Risk identification and defined boundaries',
  'Decision traceability (what was used, what was assumed, what was recommended)',
  'Accountability and governance models',
];

export const Capabilities = () => {
  return (
    <SectionWrapper id={'capabilities'}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{'Cross-Cutting Capabilities'}</h2>
          <p className={styles.intro}>
            <strong>Reliability & compliance</strong> across all services.
          </p>
        </div>

        <ServiceDetail
          id={'governance_risk_assurance'}
          title={'Governance, Risk & Assurance'}
          subtitle={
            <>
              <strong>Embedded governance</strong> for high-stakes AI.
            </>
          }
          content={
            <>
              <Divider title={'Included across all services'} />
              <List options={options} />
            </>
          }
          text={
            <>
            <strong>Governance, risk, and assurance</strong> are built into every service we deliver.
            We ensure that <strong>AI-enabled decisions</strong> remain auditable, reviewable, and aligned with organizational and regulatory requirements over time.
            </>
          }
        />
      </div>
    </SectionWrapper>
  );
};

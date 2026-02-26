import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from '../ServicesPage.module.scss';

export const BusinessFraming = () => {
  return (
    <SectionWrapper id={'business_framing'}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{'Most AI initiatives fail at decision control'}</h2>
        </div>

        <Card
          content={
            <div style={{ textAlign: 'start' }}>
              <div style={{ paddingBottom: 16 }}>
                AI pilots work in isolation.
                <br />
                Production systems fail under uncertainty.
                <br />
                Governance is added too late.
                <br />
              </div>
              In high-stakes environments, this creates operational, legal, and financial exposure.
            </div>
          }
        />
      </div>
    </SectionWrapper>
  );
};

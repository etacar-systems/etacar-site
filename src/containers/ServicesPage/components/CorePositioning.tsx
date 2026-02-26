import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from '../ServicesPage.module.scss';

export const CorePositioning = () => {
  return (
    <SectionWrapper id={'core_positioning'}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{'We architect decision systems — not AI experiments'}</h2>
        </div>

        <Card
          content={
            <div style={{ textAlign: 'start' }}>
              <div style={{ paddingBottom: 16 }}>
                We structure how AI makes decisions before models are deployed.
                <br />
                Every assumption, constraint, and escalation path is defined upfront.
                <br />
              </div>
              This turns AI from a probabilistic tool into a controlled operational system.
            </div>
          }
        />
      </div>
    </SectionWrapper>
  );
};

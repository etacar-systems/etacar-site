import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import { List } from '@/components/List';
import styles from '../ServicesPage.module.scss';

const options = [
  'Reduced operational risk exposure',
  'Faster transition from pilot to production',
  'Lower long-term AI maintenance cost',
  'Improved executive confidence in AI deployment'
];

export const BusinessImpact = () => {
  return (
    <SectionWrapper id={'business_impact'}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{'Business Impact'}</h2>
        </div>

        <Card
          content={
            <List options={options} />
          }
        />
      </div>
    </SectionWrapper>
  );
};

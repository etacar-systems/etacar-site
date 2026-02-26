import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import { FiCheckCircle, FiDollarSign, FiShield, FiZap } from 'react-icons/fi';
import styles from '../ServicesPage.module.scss';

const IMPACT_CARDS = [
  {
    id: 'risk',
    title: 'Reduced operational risk exposure',
    icon: FiShield,
  },
  {
    id: 'speed',
    title: 'Faster transition from pilot to production',
    icon: FiZap,
  },
  {
    id: 'cost',
    title: 'Lower long-term AI maintenance cost',
    icon: FiDollarSign,
  },
  {
    id: 'confidence',
    title: 'Improved executive confidence in AI deployment',
    icon: FiCheckCircle,
  },
] as const;

export const BusinessImpact = () => {
  return (
    <SectionWrapper id="business_impact">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Business Impact</h2>
        </div>

        <div className={styles.cardsGrid} aria-label="Business Impact" data-size={'medium'}>
          {IMPACT_CARDS.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

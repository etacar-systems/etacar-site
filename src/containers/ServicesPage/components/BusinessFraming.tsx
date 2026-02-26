import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import { FiAlertTriangle, FiShield, FiUsers } from 'react-icons/fi';
import styles from '../ServicesPage.module.scss';

const FRAMING_CARDS = [
  {
    id: 'isolation',
    text: 'AI pilots work in isolation.',
    icon: FiUsers,
  },
  {
    id: 'uncertainty',
    text: 'Production systems fail under uncertainty.',
    icon: FiAlertTriangle,
  },
  {
    id: 'governance',
    text: 'Governance is added too late.',
    icon: FiShield,
  },
] as const;

export const BusinessFraming = () => {
  return (
    <SectionWrapper id="business_framing">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title} id="business-framing-title">
            Most AI initiatives fail at decision control
          </h2>
        </div>

        <div className={styles.cardsGrid} aria-labelledby="business-framing-title">
          {FRAMING_CARDS.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.text}
            />
          ))}
        </div>

        <p className={styles.cardsConclusion}>
          In high-stakes environments, this creates operational, legal, and financial exposure.
        </p>
      </div>
    </SectionWrapper>
  );
};

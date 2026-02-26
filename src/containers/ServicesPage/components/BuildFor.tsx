import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import { FiAlertTriangle, FiSettings, FiShield } from 'react-icons/fi';
import styles from '../ServicesPage.module.scss';

const BUILD_FOR_CARDS = [
  {
    id: 'regulated',
    title: 'Regulated industries',
    icon: FiShield,
  },
  {
    id: 'complex',
    title: 'Complex operational environments',
    icon: FiSettings,
  },
  {
    id: 'consequences',
    title: 'Organizations where AI errors have real consequences',
    icon: FiAlertTriangle,
  },
] as const;

export const BuildFor = () => {
  return (
    <SectionWrapper id="build_for">
      <div className={`${styles.content} ${styles.buildForContent}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>This is built for</h2>
        </div>

        <div className={styles.cardsGrid} aria-label="This is built for">
          {BUILD_FOR_CARDS.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

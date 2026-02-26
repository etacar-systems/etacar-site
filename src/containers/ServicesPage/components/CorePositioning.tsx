import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import { FiClipboard, FiCompass } from 'react-icons/fi';
import styles from '../ServicesPage.module.scss';

const POSITIONING_CARDS = [
  {
    id: 'decision-structure',
    title: 'We structure how AI makes decisions before models are deployed.',
    icon: FiCompass,
  },
  {
    id: 'constraints',
    title: 'Every assumption, constraint, and escalation path is defined upfront.',
    icon: FiClipboard,
  },
] as const;

export const CorePositioning = () => {
  return (
    <SectionWrapper id="core_positioning">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>We architect decision systems — not AI experiments</h2>
        </div>

        <div className={styles.cardsGrid} aria-label="Core positioning" data-size={'medium'}>
          {POSITIONING_CARDS.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>

        <p className={styles.cardsConclusion}>
          This turns AI from a probabilistic tool into a controlled operational system.
        </p>
      </div>
    </SectionWrapper>
  );
};

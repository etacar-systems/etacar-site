import { SectionWrapper } from '@/components/SectionWrapper';
import { Card } from '@/components/Card';
import { List } from '@/components/List';
import styles from '../ServicesPage.module.scss';

const options = [
  'Regulated industries',
  'Complex operational environments',
  'Organizations where AI errors have real consequences',
];

export const BuildFor = () => {
  return (
    <SectionWrapper id={'build_for'}>
      <div className={styles.content} style={{ paddingBottom: 100 }}>
        <div className={styles.header}>
          <h2 className={styles.title}>{'This is built for'}</h2>
        </div>

        <Card content={<List options={options} />} />
      </div>
    </SectionWrapper>
  );
};

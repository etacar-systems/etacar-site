import { CardSection } from '@/components/CardSection';
import { List } from '@/components/List';
import { SectionWrapper } from '@/components/SectionWrapper';
import styles from './AcrossIndustries.module.scss';

export const AcrossIndustries = () => {
  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{'Applicable across industries'}</h2>
        <div className={styles.subtitle}>
          {
            'These decision scenarios appear across different sectors whenever complexity, risk, and accountability converge.'
          }
        </div>
      </div>
      <CardSection
        content={
          <>
            <List
              options={[
                'Regulated Financial & Compliance Environments',
                'Healthcare & Life Sciences',
                'Industrial Operations & Supply Chain',
                'Telecommunications & Cloud Services',
                'SaaS & Enterprise Software Platforms',
                'R&D',
                'Large-Scale Corporate Programs',
              ]}
            />
          </>
        }
        title={'Industry list'}
      />
    </SectionWrapper>
  );
};

import { SectionWrapper } from '../../../components/SectionWrapper';
import { CardSection } from '@/components/CardSection';
import { Divider } from '@/components/Divider';
import { List } from '@/components/List';
import styles from './IndustrySection.module.scss';

type IndustrySectionProps = {
  title: string;
  description: string;
  sectionId: string;
  options: Array<{
    title: string;
    text: string;
    whenMatters: Array<string>;
    howAddressed: string;
    outcomes: Array<string>;
    environments: string;
  }>;
};

const IndustrySection = ({ title, description, sectionId, options }: IndustrySectionProps) => {
  return (
    <SectionWrapper id={sectionId}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.subtitle}>{description}</div>
        </div>
        <div className={styles.grid}>
          {options.map((option, index) => (
            <CardSection
              className={styles.item}
              content={
                <div style={{ textAlign: 'start' }}>
                  <Divider title={'When this matters'} />
                  <List options={option.whenMatters} />
                  <Divider title={'How it is addressed'} />
                  <div>{option.howAddressed}</div>
                  <Divider title={'Outcomes'} />
                  <List options={option.outcomes} />
                  <Divider title={'Environments'} />
                  <div style={{ textAlign: 'center' }}>{option.environments}</div>
                </div>
              }
              key={index}
              text={option.text}
              title={option.title}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IndustrySection;

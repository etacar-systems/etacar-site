import { useRouter } from 'next/navigation';
import { Section } from '../../components/Section';
import { RESULTS } from '../../routes';
import { IndustryCard } from './components/IndustryCard';
import { industries } from './data';
import styles from './Industries.module.scss';

interface IndustryCardProps {
  textColor?: 'light' | 'dark';
  theme?: 'blueLight' | 'light' | 'dark' | 'extraLight';
}

export const Industries = ({ textColor, theme }: IndustryCardProps) => {
  const router = useRouter();

  return (
    <Section textColor={textColor} theme={theme} title={'INDUSTRIES'}>
      <div className={styles.cards}>
        {industries.map((data, index) => (
          <IndustryCard
            onClick={() => router.push(RESULTS)}
            description={data.description}
            icon={data.icon}
            image={data.image}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};

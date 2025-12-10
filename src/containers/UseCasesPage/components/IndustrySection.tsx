import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FadeCard } from '../../../components/FadeCard';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { SERVICES } from '../../../routes';
import styles from './IndustrySection.module.scss';

interface IndustrySectionProps {
  title: string;
  sectionId: string;
  challenges: string[];
  whereWeHelp: string[];
  initiatives: string[];
  kpis: string[];
  services: { title: string; sectionId: string }[];
  index: number;
  isEven: boolean;
}

const IndustrySection: React.FC<IndustrySectionProps> = ({
  title,
  sectionId,
  challenges,
  whereWeHelp,
  initiatives,
  kpis,
  services,
  isEven,
  index,
}) => {
  return (
    <SectionWrapper
      className={classNames(styles.sectionWrapper, { [styles.even]: isEven, [styles.odd]: !isEven })}
      id={sectionId}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>What makes this hard today</h3>
            <ul className={styles.list}>
              {challenges.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Where we help</h3>
            <ul className={styles.list}>
              {whereWeHelp.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Where AI delivers measurable impact</h3>
            <ul className={styles.list}>
              {initiatives.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <FadeCard className={styles.kpiBlock}>
            <h3 className={styles.blockTitle}>Typical KPIs</h3>
            <ul className={styles.kpiList}>
              {kpis.map((item, i) => (
                <li key={i} className={styles.kpiItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeCard>
        </div>
        <div className={styles.servicesBlock}>
          <h3 className={styles.blockTitle}>Relevant services</h3>
          <div className={styles.tags}>
            {services.map((service, i) => (
              <ServiceTag key={i} title={service.title} sectionId={service.sectionId} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ServiceTag: React.FC<{ title: string; sectionId: string }> = ({ title, sectionId }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${SERVICES}#${sectionId}`);
  };

  return (
    <button type='button' className={styles.tag} onClick={handleClick}>
      {title}
    </button>
  );
};

export default IndustrySection;

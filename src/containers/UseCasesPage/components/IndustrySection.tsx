import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { FadeCard } from '../../../components/FadeCard';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './IndustrySection.module.scss';

type Section = {
  description?: ReactNode;
  options: Array<string>;
  footer?: string;
};

interface IndustrySectionProps {
  title: string;
  subtitle: string;
  sectionId: string;
  challenges: Section;
  decisionGaps: Section;
  initiatives: Section;
  kpis: Section;
  index: number;
  isEven: boolean;
}

const IndustrySection: React.FC<IndustrySectionProps> = ({
  title,
  subtitle,
  sectionId,
  challenges,
  decisionGaps,
  initiatives,
  kpis,
  isEven,
}) => {
  return (
    <SectionWrapper
      className={classNames(styles.sectionWrapper, { [styles.even]: isEven, [styles.odd]: !isEven })}
      id={sectionId}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>The Challenge</h3>
            <div className={styles.content}>
              {challenges.description}
              <ul className={styles.list}>
                {challenges.options.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.bullet}>●</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              {challenges.footer}
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Decision gaps</h3>
            <div className={styles.content}>
              {decisionGaps.description}
              <ul className={styles.list}>
                {decisionGaps.options.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.bullet}>●</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              {decisionGaps.footer}
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>How EtaCar Systems helps</h3>
            <div className={styles.content}>
              <ul className={styles.list}>
                {initiatives.description}
                {initiatives.options.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.bullet}>●</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              {initiatives.footer}
            </div>
          </div>

          <FadeCard className={styles.kpiBlock}>
            <h3 className={styles.blockTitle}>Impact</h3>
            <div className={styles.content}>
              <ul className={styles.kpiList}>
                {kpis.options.map((item, i) => (
                  <li key={i} className={styles.kpiItem}>
                    <span className={styles.bullet}>●</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </FadeCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IndustrySection;

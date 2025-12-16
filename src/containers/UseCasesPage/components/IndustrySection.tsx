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
  whereWeHelp: Section;
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
  whereWeHelp,
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

            {challenges.description}
            <ul className={styles.list}>
              {challenges.options.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {challenges.footer}
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Why Traditional Approaches Fail</h3>

            {whereWeHelp.description}
            <ul className={styles.list}>
              {whereWeHelp.options.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {whereWeHelp.footer}
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>How EtaCar Systems helps</h3>
            <ul className={styles.list}>
              {initiatives.description}
              {initiatives.options.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {initiatives.footer}
          </div>

          <FadeCard className={styles.kpiBlock}>
            <h3 className={styles.blockTitle}>Impact</h3>
            <ul className={styles.kpiList}>
              {kpis.options.map((item, i) => (
                <li key={i} className={styles.kpiItem}>
                  <span className={styles.bullet}>●</span>
                  <span>
                    {item.split(/([+\d–×%]+)/g).map((part, i) =>
                      /[+\d–×%]/.test(part) ? (
                        <strong key={i} className={styles.highlightNumber}>
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </FadeCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IndustrySection;

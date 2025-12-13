import React from 'react';
import { FadeCard } from '../../../components/FadeCard';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './ServiceDetail.module.scss';

export interface ServiceDetailProps {
  id: string;
  title: string;
  oneLiner: string;
  bestFor?: string;
  problemWeSolve?: string;
  whatWeDeliver?: string[];
  exampleKPIs?: string[];
  typicalProcesses?: string[];
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  oneLiner,
  bestFor,
  problemWeSolve,
  whatWeDeliver,
  exampleKPIs,
  typicalProcesses,
}) => {
  return (
    <SectionWrapper id={id} className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.oneLiner}>{oneLiner}</p>

        {bestFor && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Best for:</h3>
            <p className={styles.text}>{bestFor}</p>
          </div>
        )}

        {problemWeSolve && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Problem we solve:</h3>
            <p className={styles.text}>{problemWeSolve}</p>
          </div>
        )}

        {typicalProcesses && typicalProcesses.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Typical processes:</h3>
            <ul className={styles.list}>
              {typicalProcesses.map((process, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{process}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {whatWeDeliver && whatWeDeliver.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>What we deliver:</h3>
            <ul className={styles.list}>
              {whatWeDeliver.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {exampleKPIs && exampleKPIs.length > 0 && (
          <FadeCard className={styles.kpiSection}>
            <h3 className={styles.sectionTitle}>{bestFor ? 'Example KPIs:' : 'How we measure success:'}</h3>
            <ul className={styles.kpiList}>
              {exampleKPIs.map((kpi, index) => (
                <li key={index} className={styles.kpiItem}>
                  <span className={styles.bullet}>●</span>
                  <span>
                    {kpi.split(/([+\d–×%]+)/g).map((part, i) =>
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
        )}
      </div>
    </SectionWrapper>
  );
};

export default ServiceDetail;

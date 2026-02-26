import React, { ReactNode } from 'react';

import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './ServiceDetail.module.scss';

export interface ServiceDetailProps {
  id: string;
  title: string;
  subtitle?: ReactNode;
  text?: ReactNode;
  content?: ReactNode;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ id, title, subtitle, text, content }) => {
  return (
    <SectionWrapper id={id}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.cardBody}>
            <div className={styles.text}>{text}</div>
            <div>{content}</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServiceDetail;

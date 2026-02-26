import React, { ReactNode } from 'react';

import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './ServiceDetail.module.scss';
import { Divider } from '@/components/Divider';

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
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {subtitle && text && <Divider />}
        <div className={styles.text}>{text}</div>
        <div>{content}</div>
      </div>
    </SectionWrapper>
  );
};

export default ServiceDetail;

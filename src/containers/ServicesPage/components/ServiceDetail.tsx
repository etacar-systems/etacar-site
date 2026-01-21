import React, { ReactNode } from 'react';

import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './ServiceDetail.module.scss';
import { Divider } from 'antd';

export interface ServiceDetailProps {
  id: string;
  title: string;
  subtitle: ReactNode;
  subtitleInDivider?: boolean;
  text?: ReactNode;
  content?: ReactNode;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  subtitle,
  subtitleInDivider,
  text,
  content,
}) => {
  return (
    <SectionWrapper id={id}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {subtitleInDivider ? (
          <Divider className={styles.divider}>{subtitle}</Divider>
        ) : (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
        <div className={styles.text}>{text}</div>
        <div>{content}</div>
      </div>
    </SectionWrapper>
  );
};

export default ServiceDetail;

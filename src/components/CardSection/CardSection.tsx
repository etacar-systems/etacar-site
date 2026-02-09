import { ReactNode } from 'react';

import { Divider } from '../Divider';
import styles from './CardSection.module.scss';

type CardSectionProps = {
  className?: string;
  title: string;
  subtitle?: ReactNode;
  text?: ReactNode;
  content?: ReactNode;
};

export const CardSection = ({ className, title, subtitle, text, content }: CardSectionProps) => {
  return (
    <div className={className}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {subtitle && (
          <>
            <p className={styles.subtitle}>{subtitle}</p>
            <Divider />
          </>
        )}
        <div className={styles.text}>{text}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

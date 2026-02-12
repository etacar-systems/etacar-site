import { ReactNode } from 'react';
import { IconType } from 'react-icons';

import { FadeCard } from '../FadeCard';
import { IconConfig } from '@/config/IconConfig';
import styles from './Card.module.scss';
import classNames from 'classnames';

type CardProps = {
  icon?: IconType;
  className?: string;
  content?: ReactNode;
  title?: string;
  titleClassname?: string;
  sectionId?: string;
};

export const Card = ({ icon, className, content, title, titleClassname, sectionId }: CardProps) => {
  const Icon = icon;

  return (
    <FadeCard className={classNames(styles.fact, className)}>
      {Icon && (
        <div className={styles.icon}>
          <Icon {...IconConfig} />
        </div>
      )}
      <div className={styles.content}>
        {title && <div className={classNames(styles.title, titleClassname)}>{title}</div>}
        {content && <div>{content}</div>}
        {sectionId && (
          <a href={`#${sectionId}`} className={styles.link}>
            Learn more →
          </a>
        )}
      </div>
    </FadeCard>
  );
};

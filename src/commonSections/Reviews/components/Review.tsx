import React from 'react';

import styles from './Review.module.scss';

interface ItemProps {
  avatar: string;
  company: string;
  description: string;
  name: string;
  textColor?: 'light' | 'dark';
}

export const Review = ({ avatar, company, description, name, textColor }: ItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.review}>
        <div className={styles.review_content}>
          <div className={styles.review_header}>
            <img alt='avatar' className={styles.avatar} src={avatar} />
            <div className={styles.person}>
              <div className={styles.name} data-text-color={textColor}>
                {name}
              </div>
              <div className={styles.company}>{company}</div>
            </div>
          </div>
          <div className={styles.review_body} data-text-color={textColor}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

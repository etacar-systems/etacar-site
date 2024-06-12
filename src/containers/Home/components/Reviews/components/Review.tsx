import React from 'react';

import blackArrowIcon from '../../../../../assets/icons/blackArrow.svg';

import styles from './Review.module.scss';

interface ItemProps {
  avatar: string;
  description: string;
  name: string;
  company: string;
}

export const Review = ({ avatar, description, name, company }: ItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.review}>
        <div className={styles.review_content}>
          <div className={styles.review_header}>
            <img alt='avatar' className={styles.avatar} src={avatar} />
            <div className={styles.person}>
              <div className={styles.name}>{name}</div>
              <div className={styles.company}>{company}</div>
            </div>
          </div>
          <div className={styles.review_body}>{description}</div>
        </div>
      </div>
    </div>
  );
};

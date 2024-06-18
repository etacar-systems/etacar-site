import React, {useState} from 'react';
import styles from './Service.module.scss';
import {RightArrowIcon} from '../icons';


type ServicePropsType = {
    text: string;
    icon?: React.ReactNode;
};

export default function Service({text, icon}: ServicePropsType) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.service}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.text}>
        {isHovered ? 'Detail' : text}
      </span>
      {isHovered ? <RightArrowIcon/> : icon}
    </div>
  );
}

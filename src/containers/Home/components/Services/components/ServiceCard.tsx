import React from "react";

import styles from "./ServiceCard.module.scss";

interface ServiceCardProps {
  text: string;
  icon: string;
  onClick?: () => void;
}

export const ServiceCard = ({ icon, onClick, text }: ServiceCardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.text}>{text}</div>
      <img alt="icon" className={styles.icon} src={icon} />
    </div>
  );
};
